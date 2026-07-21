import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/service/auth/auth.service';
import { SnackbarService } from '@core/service/snackbar/snackbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    authService = inject(AuthService);
    snackbar = inject(SnackbarService);
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
            this.snackbar.showError('Invalid Credentials. Please try again');
            this.loginForm.reset();
            return;
        }

        this.snackbar.showSuccess('Logged in Successfully');
    }
}
