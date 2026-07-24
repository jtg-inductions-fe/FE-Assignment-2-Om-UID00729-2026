import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';

import { ROUTE_KEYS } from '@core/constants/routes-keys';
import { LOGIN__MESSAGES } from '@features/auth/constants/login-messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    authService = inject(AuthService);
    snackbar = inject(SnackbarService);
    router = inject(Router);
    hidePassword = true;

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
        ]),
    });

    loginUser(): void {
        if (this.loginForm.invalid) {
            return;
        }
        const { email, password } = this.loginForm.value;

        if (!email || !password) {
            return;
        }

        const user = this.authService.login(email, password);

        if (!user) {
            this.snackbar.showWarning(LOGIN__MESSAGES.ERROR);
            this.loginForm.reset();
            return;
        }

        this.snackbar.showSuccess(LOGIN__MESSAGES.SUCCESS);
        this.router.navigate([ROUTE_KEYS.DASHBOARD]);
    }

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

    getPasswordError(): string {
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
