import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    snackbar = inject(MatSnackBar);
    duration = 3000;

    showSuccess(message: string) {
        this.snackbar.open(message, 'Close', {
            panelClass: ['success-snackbar'],
            duration: this.duration,
        });
    }

    showError(message: string) {
        this.snackbar.open(message, 'Close', {
            panelClass: ['error-snackbar'],
            duration: this.duration,
        });
    }

    showWarning(message: string) {
        this.snackbar.open(message, 'Close', {
            panelClass: ['warning-snackbar'],
            duration: this.duration,
        });
    }
}
