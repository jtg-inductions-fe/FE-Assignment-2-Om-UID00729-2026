import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ROLES } from '@core/constants/role';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

import { AuthService } from '@core/services/auth/auth.service';

export const roleGuard: CanActivateFn = () => {
    const authservice = inject(AuthService);
    const router = inject(Router);

    if (authservice.getRole() === ROLES.ADMIN) {
        return true;
    }

    return router.createUrlTree([ROUTE_KEYS.NOT_FOUND]);
};
