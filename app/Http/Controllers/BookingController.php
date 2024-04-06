<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class BookingController extends Controller
{
    public function addBooking(Request $request) {
        $data = $request->all();

        $booking = new Booking();
        $booking->first_name    = $data['first_name'];
        $booking->last_name     = $data['last_name'];
        $booking->room_id       = $data['room_id'];
        $booking->user_id       = 1;
        $booking->check_in      = date('Y-m-d H:i:s', strtotime($data['check_in']));
        $booking->check_out     = date('Y-m-d H:i:s', strtotime($data['check_out']));
        $booking->save();
        
        return response($booking, 201);
    }

    public function getBookings() {
        return response()->json(Booking::all(), 200);
    }

    public function getBooking($id) {
        $booking = Booking::find($id);
        return response()->json($booking, 200);
    }

    public function editBooking($id, Request $request) {
        $data = $request->all();
        if(!empty($data)){
            $booking = Booking::find($id);
            if(is_null($booking)){
                return response()->json(['message' => 'Not found'], 404);
            }
    
            $booking->first_name    = $data['first_name'];
            $booking->last_name     = $data['last_name'];
            $booking->room_id       = $data['room_id'];
            $booking->check_in      = date('Y-m-d H:i:s', strtotime($data['check_in']));
            $booking->check_out     = date('Y-m-d H:i:s', strtotime($data['check_out']));
            $booking->save();
    
            return response($booking, 200);
        }
    }

    public function deleteBooking($id) {
        $booking = Booking::find($id);
        if(is_null($booking)){
            return response()->json(['message' => 'Not found'], 404);
        }
        $booking->delete();

        return response()->json(null, 204);
    }
}
