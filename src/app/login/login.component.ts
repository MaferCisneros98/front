import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser = new SocialUser;
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
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
        console.log(this.socialUser.idToken);
        this.isLogged = true;
        this.router.navigate(['/']);
      }
    );
  }


logOut(): void{
  this.authService.signOut();
}
}
