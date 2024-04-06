import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private token: TokenService) { }
  getRooms(){
    return this.http.get('http://127.0.0.1:8000/api/get-rooms');
  }

  getBookings(){
    return this.http.get('http://127.0.0.1:8000/api/get-bookings');
  }

  getUserBookings(){
    const headers = { 'Authorization': `Bearer ${this.token.get()}`}  
    return this.http.get('http://127.0.0.1:8000/api/get-user-bookings/', {'headers':headers});
  }

  getBooking(id:any){
    return this.http.get('http://127.0.0.1:8000/api/get-booking/'+ id);
  }

  getRole(id:any){
    return this.http.get('http://127.0.0.1:8000/api/get-role/'+ id);
  }

  getUser(id:any){
    return this.http.get('http://127.0.0.1:8000/api/get-user/'+ id);
  }

  getCurrentUser(){
    return this.http.get('http://127.0.0.1:8000/api/get-current-user');
  }
}
