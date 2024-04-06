import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaravelService {
  currentUser: any;
  role: any;

  constructor(private http:HttpClient, private data:DataService) { }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }

  checkIfAdmin(){
    return this.http.get('http://127.0.0.1:8000/api/is-admin');
  }
}
