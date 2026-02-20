<?php

use Illuminate\Support\Facades\Route;





Route::get('/', function () {
    return ['message' => 'Backend API is running'];
})->name('home');

require __DIR__ . '/settings.php';



Route::get('/sanctum/csrf-cookie', function () {
    return response()->noContent();
});
