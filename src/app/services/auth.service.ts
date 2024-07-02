// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor() {}

  // Check if the user is logged in
  private isLoggedIn(): boolean {
    return !!sessionStorage.getItem('existingUser');
  }

  // Get the current auth state as an observable
  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  // Update the auth state
  setAuthState(isLoggedIn: boolean): void {
    this.authState.next(isLoggedIn);
  }
}
