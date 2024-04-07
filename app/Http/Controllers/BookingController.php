<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function addBooking(Request $request) {
        $data = $request->all();
        $request->validate([
            'first_name' => 'required',
            'last_name'  => 'required',
            'room_id'    => 'required',
            'check_in'   => 'required',
            'check_out'  => 'required',
        ]);

        $booking = new Booking();
        $booking->first_name    = $data['first_name'];
        $booking->last_name     = $data['last_name'];
        $booking->room_id       = $data['room_id'];
        $booking->user_id       = auth()->user()->id;
        $booking->check_in      = date('Y-m-d H:i:s', strtotime('+1 day', strtotime($data['check_in'])));
        $booking->check_out     = date('Y-m-d H:i:s', strtotime('+1 day', strtotime($data['check_out'])));
        $booking->save();
        
        return response($booking, 201);
    }

    public function getBookings() {
        $bookings = Booking::all();
        return $this->transformBookings($bookings);
    }

    public function getBooking($id) {
        $booking = Booking::find($id);
        return response()->json($booking, 200);
    }

    public function getUserBookings() {
        $bookings = Booking::where('user_id', auth()->user()->id)->get();
        return $this->transformBookings($bookings);
    }

    public function editBooking($id, Request $request) {
        $data = $request->all();
        if(!empty($data)){
            $request->validate([
                'first_name' => 'required',
                'last_name'  => 'required',
                'room_id'    => 'required',
                'check_in'   => 'required',
                'check_out'  => 'required',
            ]);
            
            $booking = Booking::find($id);
            if(is_null($booking)){
                return response()->json(['message' => 'Not found'], 404);
            }

            $booking->first_name    = $data['first_name'];
            $booking->last_name     = $data['last_name'];
            $booking->room_id       = $data['room_id'];
            $booking->check_in      = date('Y-m-d H:i:s', strtotime('+1 day', strtotime($data['check_in'])));
            $booking->check_out     = date('Y-m-d H:i:s', strtotime('+1 day', strtotime($data['check_out'])));
            $booking->save();
    
            return response($booking, 200);
        }
    }

    protected function transformBookings($bookings)
{
    $editedBookings = $bookings->map(function ($booking) {
        return [
            'id' => $booking->id,
            'user_id' => $booking->user_id,
            'username' => $booking->user->username,
            'first_name' => $booking->first_name,
            'last_name' => $booking->last_name,
            'room_id' => $booking->room_id,
            'room_number' => $booking->room->number,
            'check_in' => $booking->check_in,
            'check_out' => $booking->check_out,
        ];
    });

    return response()->json($editedBookings, 200);
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
