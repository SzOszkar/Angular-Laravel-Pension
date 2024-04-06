<?php

use App\Http\Middleware\JWT;
use App\Http\Middleware\CORS;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookingController;

Route::post('login',                            [AuthController::class, 'login'])->middleware(CORS::class);
Route::group(['middleware' => CORS::class], function() {
    Route::group(['middleware' => JWT::class], function() {
        Route::post('add-booking',              [BookingController::class, 'addBooking']);
        Route::get('get-current-user',          [UserController::class, 'getCurrentUser']);
        Route::get('is-admin',                  [UserController::class, 'isAdmin']);
    });
    Route::get('get-bookings',                  [BookingController::class, 'getBookings']);
    Route::get('get-booking/{id}',              [BookingController::class, 'getBooking']);
    Route::put('edit-booking/{id}',             [BookingController::class, 'editBooking']);
    Route::delete('delete-booking/{id}',        [BookingController::class, 'deleteBooking']);
    
    Route::get('get-rooms',                     [RoomController::class, 'getRooms']);
    
    Route::get('get-role/{id}',                 [RoleController::class, 'getRole']);
});