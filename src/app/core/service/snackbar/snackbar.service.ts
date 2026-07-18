import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    snackbar = inject(MatSnackBar);
    openSnackbar() {
        this.snackbar.open('Hello', 'close');
    }
}
