import { ErrorHandler, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';

export class ErrorHandlerService extends ErrorHandler {
    router = inject(Router);
    ngZone = inject(NgZone);

    override handleError(): void {
        this.ngZone.run(() => {
            this.router.navigate(['/error'], { state: { isError: true } });
        });
    }
}
