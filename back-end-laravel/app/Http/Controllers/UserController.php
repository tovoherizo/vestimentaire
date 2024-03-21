<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoguserRequest;
use Illuminate\Http\Request;
use App\Http\Requests\UserStoreRequest;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = user::all();
        //return Json Response
        return response()->json([
            'results' => $users
        ], 200);
    }




    public function store(UserStoreRequest $request)
    {
        try {
            //create user
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password
            ]);
            //return Json response
            return response()->json([
                'message' => "user successfully created."
            ], 200);
        } catch (\Exception $e) {
            //return Json Response
            return response()->json([
                'message ' => "Something went really wrong!"
            ], 500);
        }
    }


    public function show($id)
    {
        //User Detail
        $users = User::find($id);
        if (!$users) {
            return response()->json([
                'message' => 'User Not Found.'
            ], 404);
        }
        //return Json Response
        return response()->json([
            'users' => $users
        ], 200);
    }


    public function update(UserStoreRequest $request, $id)
    {
        try {
            //Find unser
            $users = User::find($id);
            if (!$users) {
                return response()->json([
                    'message' => 'User not found'
                ], 404);
            }
            $users->name = $request->name;
            $users->email = $request->email;
            $users->password = $request->password;
            $users->state = $request->state;
            //update user
            $users->save();

            //retunr JSON response
            return response()->json([
                'message ' => "user successfully updated"
            ], 200);
        } catch (\Exception $e) {
            //return Json Response
            return response()->json([
                'message' => "something went really wrong!"
            ], 500);
        }
    }



    public function destroy($id)
    {
        //detail
        $users = User::find($id);
        if (!$users) {
            return response()->json([
                'message' => 'User Not Found'
            ], 404);
        }

        //delete User
        $users->delete();

        //return json response
        return response()->json([
            'message' => "user successfully deleted"
        ], 200);
    }
    public function login(LoguserRequest $request)
    {
    }
}
