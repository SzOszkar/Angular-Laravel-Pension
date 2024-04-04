import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public loggedIn:boolean = false;

  constructor(
    private auth:AuthService,
    private router:Router,
    private token:TokenService
  ) {}

  ngOnInit(): void {
    this.auth.authStatus.subscribe(
      value=>(
        this.loggedIn = value
      )
    )
  }

  logout(event:MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
