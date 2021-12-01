import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLogged: SocialUser = new SocialUser;
  isLogged: boolean = false;


  constructor(
    private authService: SocialAuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data=> {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null);
      }
    );
  }
  logOut(): void{
    this.authService.signOut().then(
      data => {
        this.router.navigate(['/login']);
      }
    );

  }
}
