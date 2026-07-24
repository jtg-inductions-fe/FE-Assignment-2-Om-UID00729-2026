import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

import { AuthService } from '@core/services/auth/auth.service';

export const roleGuard: CanActivateFn = () => {
    const authservice = inject(AuthService);
    const router = inject(Router);

    if (authservice.getRole() === 'admin') {
        return true;
    }

    return router.createUrlTree([ROUTE_KEYS[404]]);
};
