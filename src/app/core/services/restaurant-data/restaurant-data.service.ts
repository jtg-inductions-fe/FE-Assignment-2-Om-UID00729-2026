import { Injectable, inject } from '@angular/core';
import { restaurantData } from '@assets/mock-data/restaurants';
import { customersModel } from '@core/models/customers.model';
import { menuModel } from '@core/models/menu.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOCAL_STORAGE_KEYS } from '@core/constants/local-storage-keys';
import { authModel } from '@core/models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class RestaurantDataService {
    localStorageService = inject(LocalStorageService);
    user: authModel | null = this.localStorageService.get(
        LOCAL_STORAGE_KEYS.LOGGED_IN_USER,
    );

    private restaurantId = new BehaviorSubject<number | undefined>(
        this.user?.id,
    );

    currRestaurant$: Observable<number | undefined> =
        this.restaurantId.asObservable();

    setRestaurant(id: number) {
        this.restaurantId.next(id);
    }

    getCustomers(): customersModel[] {
        if (this.restaurantId.value !== undefined) {
            return restaurantData[this.restaurantId.value].customers;
        }
        return [];
    }

    getMenu(): menuModel[] {
        if (this.restaurantId.value !== undefined) {
            return restaurantData[this.restaurantId.value].menu;
        }
        return [];
    }
}
