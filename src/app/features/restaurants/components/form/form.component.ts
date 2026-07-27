import { Component, Input, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { AuthService } from '@core/services/auth/auth.service';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';

import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FORM_ERROR_MESSAGES } from '@core/constants/form-error-messages';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent {
    @Input() restaurantForm!: FormGroup;
    @Input() owners: string[] | undefined = [];

    authService = inject(AuthService);
    snackbar = inject(SnackbarService);
    router = inject(Router);
    hidePassword = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    getEmailError(): string {
        const control = this.restaurantForm.get('email');

        if (!control || !control.touched || !control.errors) {
            return '';
        }

        if (control?.hasError('email')) {
            return FORM_ERROR_MESSAGES.EMAIL_INVALID;
        }

        return '';
    }

    getTextError(controlName: string): string {
        const control = this.restaurantForm.get(controlName);

        if (!control || !control.touched || !control.errors) {
            return '';
        }

        if (control?.hasError('required')) {
            return FORM_ERROR_MESSAGES.REQUIRED;
        }
        return '';
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        const control = this.restaurantForm.get('email');

        if (control?.invalid) {
            control.markAsTouched();
            return;
        }

        if (value && this.owners && control?.valid) {
            this.owners.push(value);
        }
        event.chipInput.clear();
        control?.reset();
    }

    remove(owner: string): void {
        const index = this.owners?.indexOf(owner);

        if (index !== undefined && index >= 0) {
            this.owners?.splice(index, 1);
        }
    }

    edit(owner: string, event: MatChipEditedEvent) {
        const value = event.value.trim();

        if (!value) {
            this.remove(owner);
            return;
        }

        const index = this.owners?.indexOf(owner);
        if (index !== undefined && index >= 0 && this.owners) {
            this.owners[index] = value;
        }
    }

    trackByOwners(index: number, owner: string): string {
        return owner;
    }
}
