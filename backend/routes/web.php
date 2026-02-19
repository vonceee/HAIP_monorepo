<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['message' => 'Backend API is running'];
})->name('home');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';



Route::get('/sanctum/csrf-cookie', function () {
    return response()->noContent();
});

Route::middleware('auth')->get('/api/user', function (\Illuminate\Http\Request $request) {
    return $request->user();
});
