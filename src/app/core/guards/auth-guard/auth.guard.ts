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
            return router.createUrlTree(['/dashboard']);
        }
        return true;
    }

    if (!isloggedIn) {
        return router.createUrlTree(['auth/login']);
    }
    return true;
};
