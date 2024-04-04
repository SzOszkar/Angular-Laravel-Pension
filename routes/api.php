<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CORS;


Route::post('login', [AuthController::class, 'login'])->middleware(CORS::class);

Route::group(['middleware' => 'api'], function ($router) {

});