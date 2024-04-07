<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function getRooms() {
        return response()->json(Room::all(), 200);
    }
}
