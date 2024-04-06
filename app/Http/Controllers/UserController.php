<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;

class UserController extends Controller
{
    public function getCurrentUser() {
        $user = User::find(auth()->user()->id);
        return response()->json($user, 200);
    }

    public function getUser($id) {
        $user = User::find($id);
        return response()->json($user, 200);
    }

    public function isAdmin() {
        $user = User::find(auth()->user()->id);
        $role = Role::where('name', 'admin')->first();
        
        if($user->role_id == $role->id) {
            return response()->json(true, 200);
        }
        return response()->json(false, 200);
    }
}
