import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  addBooking(data:any){
    return this.http.post('http://127.0.0.1:8000/api/add-booking', data);
  }

  deleteBooking(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/delete-booking/'+ id);
  }

  editBooking(data:any, id:any){
    return this.http.put<any>('http://127.0.0.1:8000/api/edit-booking/' + id, data);
  }
}
