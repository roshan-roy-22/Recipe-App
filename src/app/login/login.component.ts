// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imgURL = "assets/images/logo.png";
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const user = { password, email };

      this.api.loginAPI(user).subscribe({
        next: (res: any) => {
          this.toaster.success(`${res.existingUser.username} logged in successfully!!`);
          sessionStorage.setItem('existingUser', JSON.stringify(res.existingUser));
          sessionStorage.setItem('token', res.token);
          this.authService.setAuthState(true);
          this.loginForm.reset();
          this.router.navigateByUrl('');
        },
        error: (reason: any) => {
          this.toaster.error(reason.error);
        }
      });
    } else {
      alert('Invalid Form');
    }
  }
}
