import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = () => {
  const authStatus = inject(ApiService);
  const router = inject(Router);

  if (authStatus.isLoggedIn()) {
    router.navigate(['/']);  // redirect to home or any other appropriate page
    return false;
  } else {
    return true;
  }
};
