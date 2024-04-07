import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { LaravelService } from '../../services/laravel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public loggedIn:boolean = false;
  public isAdmin: any = false;
  // private isAdminSubscription: Subscription;

  constructor(
    private auth:AuthService,
    private router:Router,
    private token:TokenService,
    private laravel:LaravelService
  ) {
    // this.isAdminSubscription = this.auth.authStatus.subscribe(
    //   value => {
    //     this.loggedIn = value;
    //     if (value) {
    //       this.laravel.checkIfAdmin().subscribe(result => {
    //         this.isAdmin = result;
    //       });
    //     } else {
    //       this.isAdmin = false;
    //     }
    //   }
    // );
  }

  // ngOnDestroy(): void {
  //   this.isAdminSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  // }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(
      value=>(
        this.loggedIn = value
      )
    )

    // this.laravel.checkIfAdmin().subscribe(result => {
    //   this.isAdmin = result;
    // })
  }

  logout(event:MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
