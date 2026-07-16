import { ErrorHandler, inject } from '@angular/core';
import { Router } from '@angular/router';

export class ErrorHandlerService extends ErrorHandler {
    router = inject(Router);
    override handleError(): void {
        this.router.navigate(['/error']);
    }
}
