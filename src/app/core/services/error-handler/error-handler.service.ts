import { ErrorHandler, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';

export class ErrorHandlerService extends ErrorHandler {
    router = inject(Router);
    ngZone = inject(NgZone);

    override handleError(error: unknown): void {
        super.handleError(error);
        this.ngZone.run(() => {
            console.log(error);
            this.router.navigate(['/error'], { state: { isError: true } });
        });
    }
}
