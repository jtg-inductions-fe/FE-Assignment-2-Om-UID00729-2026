import { Injectable, inject } from '@angular/core';
import { restaurantData } from '@assets/mock-data/restaurants';
import { customersModel } from '@core/models/customers.model';
import { menuModel } from '@core/models/menu.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { orderDataModel } from '@features/dashboard/models/orderData.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class RestaurantDataService {
    localStorageService = inject(LocalStorageService);
    authService = inject(AuthService);
    user: number | undefined = this.authService.currUser?.id;

    private restaurantId = new BehaviorSubject<number | undefined>(this.user);

    currRestaurant$: Observable<number | undefined> =
        this.restaurantId.asObservable();

    getUserId = this.authService.currUser$.subscribe((user) => {
        this.restaurantId.next(user?.id);
    });

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

    getOrders(): orderDataModel[] {
        if (this.restaurantId.value !== undefined) {
            return restaurantData[this.restaurantId.value].orders;
        }
        return [];
    }
}
