import { Component, inject } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// import { ROUTE_KEYS } from '@core/constants/routes-keys';
import { AuthService } from '@core/services/auth/auth.service';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    authService = inject(AuthService);
    snackbar = inject(SnackbarService);
    router = inject(Router);
    formBuilder = inject(FormBuilder);
    hidePassword = true;

    loginForm = this.formBuilder.group({
        restaurantName: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    getEmailError(): string {
        const control = this.loginForm.get('email');

        if (!control || !control.touched || !control.errors) {
            return '';
        }

        if (control?.hasError('email')) {
            return 'Enter a valid Email';
        }

        if (control?.hasError('required')) {
            return 'Password is required';
        }

        return '';
    }

    getTextError(): string {
        const control = this.loginForm.get('password');

        if (!control || !control.touched || !control.errors) {
            return '';
        }

        if (control?.hasError('required')) {
            return 'Password is required';
        }

        if (control?.hasError('minlength')) {
            return 'Minimum Length must be 8 Characters';
        }

        return '';
    }
}
