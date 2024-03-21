<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoguserRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function inscription(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('token', $token, 60 * 24);
        return response()->json([
            'user' => new UserResource($user),

        ])->withCookie($cookie);
    }

    //login
    // public function login(UserStoreRequest $request)
    // {
    //     try {
    //         //create user
    //         $user = User::find([
    //             'email' => $request->email
    //         ]);

    //         dd($user);
    //         //return Json response
    //         return response()->json([
    //             'message' => "user successfully created."
    //         ], 200);
    //     } catch (\Exception $e) {
    //         //return Json Response
    //         return response()->json([
    //             'message ' => "Something went really wrong!"
    //         ], 500);
    //     }
    // }
    //logout
    public function logout(Request $request)
    {
        $user =
            $request->user()->currentAccessToken()->delete();
        $cookie = cookie()->forget('token');
        return response()->json([
            'message' => 'Logged out successfully !'
        ])->withCookie($cookie);
    }
    // get the authenticated user method
    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
}
