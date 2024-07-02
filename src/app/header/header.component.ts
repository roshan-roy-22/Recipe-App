// src/app/header/header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoURL = "assets/images/logo-font.png";
  loginUsername: string = "";
  favouriteCount: number = 0;

  constructor(
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        const existingUser = JSON.parse(sessionStorage.getItem('existingUser') || '{}');
        this.loginUsername = existingUser.username.split(' ')[0];
        
        // Subscribe to favouriteCount observable
        this.api.favouriteCount.subscribe((count: number) => {
          this.favouriteCount = count;
          console.log('Favourite count:', count);
        });
        
        // Fetch the favourite count
        this.api.getFavouriteCount();
      } else {
        this.loginUsername = '';
        this.favouriteCount = 0;
      }
    });
  }

  logout() {
    sessionStorage.clear();
    this.authService.setAuthState(false);
    this.toaster.info("Logged out successfully");
    this.router.navigateByUrl('/');
  }
}
