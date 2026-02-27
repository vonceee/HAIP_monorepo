<?php

use App\Models\User;
use Google\Client as GoogleClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

Route::post('google', function (Request $request) {
    $request->validate([
        'token' => ['required', 'string'],
    ]);

    $client = new GoogleClient(['client_id' => config('services.google.client_id')]);

    $payload = null;

    try {
        $payload = $client->verifyIdToken($request->token);
    } catch (\Exception $e) {
        // Token might be an access token
    }

    if (!$payload) {
        $response = Http::get('https://www.googleapis.com/oauth2/v3/userinfo', [
            'access_token' => $request->token,
        ]);

        if ($response->successful()) {
            $payload = $response->json();
        }
    }

    if ($payload) {
        $user = User::updateOrCreate(
            ['email' => $payload['email']],
            [
                'name' => $payload['name'],
                'google_id' => $payload['sub'],
                'avatar' => $payload['picture'] ?? '',
                'email_verified_at' => now(),
                'password' => null,
            ]
        );

        Auth::login($user);

        return response()->json([
            'user' => $user,
            'message' => 'Authenticated successfully'
        ]);
    }

    return response()->json(['error' => 'Invalid token'], 401);
});

Route::post('/register', function (Request $request) {
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'confirmed'],
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    Auth::login($user);

    return response()->json([
        'user' => $user,
        'message' => 'Registered successfully'
    ], 201);
});

Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials do not match our records.'],
        ]);
    }

    $request->session()->regenerate();

    return response()->json([
        'user' => Auth::user(),
        'message' => 'Authenticated successfully'
    ]);
});

Route::post('logout', function (Request $request) {
    Auth::guard('web')->logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return response()->noContent();
});
