import { Component, inject, OnInit } from '@angular/core';
import { ROUTE_KEYS } from '@core/constants/routes-keys';
import { RESTAURANT_FORM_MESSAGES } from '@features/restaurants/constants/restaurant-form-messages';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-restaurant-form',
    templateUrl: './restaurant-form.component.html',
    styleUrls: ['./restaurant-form.component.scss'],
})
export class RestaurantFormComponent implements OnInit {
    routeKeys = ROUTE_KEYS;
    restaurantForm!: FormGroup;
    snackbar = inject(SnackbarService);
    formBuilder = inject(FormBuilder);
    router = inject(Router);
    owners: string[] = [];

    isEdit = this.router.getCurrentNavigation()?.extras.state?.['isEdit'];
    editData = this.router.getCurrentNavigation()?.extras.state?.['data'];

    ngOnInit(): void {
        this.restaurantForm = this.formBuilder.group({
            restaurantName: [
                this.editData?.restaurantName ?? '',
                [Validators.required],
            ],

            address: [this.editData?.address ?? '', [Validators.required]],
            email: ['', [Validators.email]],
        });
        this.owners = this.editData?.owners ?? [];
    }

    handleFormSubmit() {
        if (this.restaurantForm.invalid) {
            this.restaurantForm.markAllAsTouched();
            return;
        }
        this.snackbar.showSuccess(
            this.isEdit
                ? RESTAURANT_FORM_MESSAGES.SUCCESS_EDIT
                : RESTAURANT_FORM_MESSAGES.SUCCESS_ADD,
        );
        this.router.navigate([this.routeKeys.RESTAURANTS]);
    }
}
