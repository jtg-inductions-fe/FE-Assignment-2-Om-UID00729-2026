import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/service/auth/auth.service';

export const authGuard: CanActivateFn = (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isloggedIn = authService.isloggedIn();
    const unauthenticatedOnly = route.data['unauthenticatedOnly'];

    if (unauthenticatedOnly) {
        if (isloggedIn) {
            router.navigate(['/dashboard']);
            return false;
        }
        return true;
    }

    if (!isloggedIn) {
        router.navigate(['auth/login']);
        return false;
    }
    return true;
};
