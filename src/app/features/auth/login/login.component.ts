import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    authService = inject(AuthService);
    snackbar = inject(MatSnackBar);
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
            this.snackbar.open(
                'Invalid Credentials. Please try again',
                'Close',
            );
            this.loginForm.reset();
            return;
        }

        console.log(user);

        if (user.role === 'admin') {
            alert('Admin Logged In');
        } else {
            alert('Owner Logged In');
        }
    }
}
