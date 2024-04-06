<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public function getRole($id) {
        $role = self::find($id);
        return response()->json($role, 200);
    }
}
