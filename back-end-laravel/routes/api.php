<?php

use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\UseController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/users', [\App\Http\Controllers\Api\PropertyController::class, 'index'])->name("index");
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//utilisateur
Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::post('addnew', [UserController::class, 'store']);
Route::put('usersupdate/{id}', [UserController::class, 'update']);
Route::put('usersupdate/{id}', [UserController::class, 'update']);

//produit
Route::get('posts', [PostController::class, 'index']);
Route::post('addnewpost', [PostController::class, 'store']); //ajout produit
Route::put('posts/edit/{id}', [PostController::class, 'update']);
Route::delete('postsdelete/{id}', [PostController::class, 'delete']);

Route::get("Admin", [AuthController::class, 'admin'])->name("administrator");


//authentification
// Route::post('/register', [UserController::class,'store']);
// Route::post('/login', [UserController::class,'login']);
// Route::post('/logout', [UserController::class, 'destroy'])
//     ->middleware('auth');
Route::post('/inscription', [AuthController::class, 'inscription']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/user', [AuthController::class, 'user']);
});
