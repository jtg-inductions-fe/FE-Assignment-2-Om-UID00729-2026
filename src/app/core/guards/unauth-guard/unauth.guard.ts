import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

export const unauthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isloggedIn = authService.isLoggedIn();

    if (!isloggedIn) {
        return router.createUrlTree([ROUTE_KEYS.LOGIN]);
    }
    return true;
};
