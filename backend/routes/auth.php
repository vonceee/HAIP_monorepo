<?php

use Illuminate\Support\Facades\Route;
use Laravel\WorkOS\Http\Requests\AuthKitAuthenticationRequest;
use Laravel\WorkOS\Http\Requests\AuthKitLoginRequest;
use Laravel\WorkOS\Http\Requests\AuthKitLogoutRequest;

Route::get('login', function (Illuminate\Http\Request $request) {
    $provider = $request->input('provider', 'authkit');

    if ($provider === 'google') {
        $provider = 'GoogleOAuth';
    }

    WorkOS\WorkOS::configure();

    $url = (new WorkOS\UserManagement)->getAuthorizationUrl(
        config('services.workos.redirect_url'),
        $state = [
            'state' => Illuminate\Support\Str::random(20),
            'previous_url' => base64_encode(Illuminate\Support\Facades\URL::previous()),
        ],
        $provider,
        screenHint: $request->input('screen_hint'),
    );

    session()->put('state', json_encode($state));

    return Inertia\Inertia::location($url);
})->middleware(['guest'])->name('login');

Route::get('authenticate', function (AuthKitAuthenticationRequest $request) {
    return tap(redirect()->intended(route('dashboard')), fn () => $request->authenticate());
})->middleware(['guest']);

Route::post('logout', function (AuthKitLogoutRequest $request) {
    return $request->logout();
})->middleware(['auth'])->name('logout');
