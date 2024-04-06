import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getRooms(){
    return this.http.get('http://127.0.0.1:8000/api/get-rooms');
  }

  getBookings(){
    return this.http.get('http://127.0.0.1:8000/api/get-bookings');
  }

  getBooking(id:any){
    return this.http.get('http://127.0.0.1:8000/api/get-booking/'+ id);
  }

  getRole(id:any){
    return this.http.get('http://127.0.0.1:8000/api/get-role', id);
  }

  getCurrentUser(){
    return this.http.get('http://127.0.0.1:8000/api/get-current-user');
  }
}
