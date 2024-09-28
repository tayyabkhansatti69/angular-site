import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // For Super admins
  if (inject(AuthService).getUserType() === 'SuperAdmin') {
    return true;
  }

  let canAccess: boolean;
  const routePermissions: string[] = route.data['routePermissions'];

  if (routePermissions) {
    canAccess = routePermissions.some((permission) =>
      inject(AuthService).getUserPermission().includes(permission)
    );
  }

  if (inject(AuthService).isLoggedIn()) {
    if (canAccess) {
      return true;
    } else {
      inject(Router).navigate(['/dashboard/home']);
      return false;
    }
  } else {
    inject(Router).navigate(['']);
    return false;
  }
};
