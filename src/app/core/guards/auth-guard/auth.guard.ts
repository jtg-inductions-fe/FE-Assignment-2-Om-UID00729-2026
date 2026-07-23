import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isloggedIn = authService.isLoggedIn();

    if (!isloggedIn) {
        return true;
    }
    return router.createUrlTree([ROUTE_KEYS.DASHBOARD]);
};
