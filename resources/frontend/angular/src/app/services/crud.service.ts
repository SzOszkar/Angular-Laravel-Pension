import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient, private token: TokenService) { }

  addBooking(data:any){
    const headers = { 'Authorization': `Bearer ${this.token.get()}`}  
    return this.http.post('http://127.0.0.1:8000/api/add-booking', data, {'headers':headers});
  }

  deleteBooking(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/delete-booking/'+ id);
  }

  editBooking(data:any, id:any){
    return this.http.put<any>('http://127.0.0.1:8000/api/edit-booking/' + id, data);
  }
}
