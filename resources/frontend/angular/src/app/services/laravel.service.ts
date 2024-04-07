import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LaravelService {
  currentUser: any;
  role: any;

  constructor(private http:HttpClient, private data:DataService, private token: TokenService) { }

  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }

  checkIfAdmin(){
    const headers = { 'Authorization': `Bearer ${this.token.get()}`}  
    return this.http.get('http://127.0.0.1:8000/api/is-admin', {'headers':headers});
  }
}
