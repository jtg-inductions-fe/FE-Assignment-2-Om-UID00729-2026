import { ErrorHandler, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

export class ErrorHandlerService extends ErrorHandler {
    router = inject(Router);
    ngZone = inject(NgZone);

    override handleError(error: unknown): void {
        super.handleError(error);
        this.ngZone.run(() => {
            this.router.navigate([ROUTE_KEYS.ERROR], {
                state: { isError: true },
            });
        });
    }
}
