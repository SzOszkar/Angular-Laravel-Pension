<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function getRole($id) {
        $role = Role::find($id);
        if(is_null($role)){
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($role, 200);
    }
}
