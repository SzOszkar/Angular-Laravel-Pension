import { Component, OnInit } from '@angular/core';
import { LaravelService } from '../../services/laravel.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  public form = {
    email:null,
    password:null
  }
  constructor(
    private laravel:LaravelService, 
    private token:TokenService, 
    private router:Router,
    private auth:AuthService  
  ) { }
  public error:any = [];
  
  ngOnInit(): void {

  }

  submitLogin(){
    return this.laravel.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }
  handleError(error:any) {
    this.error = error.error.error;
  }
  handleResponse(data:any){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('dashboard');
  }
}
