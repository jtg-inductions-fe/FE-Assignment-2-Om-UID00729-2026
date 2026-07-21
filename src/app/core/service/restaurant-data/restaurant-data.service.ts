import { Injectable, inject } from '@angular/core';
import { restaurantData } from '@assets/mock-data/restaurants';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { localStorageKeys } from 'src/constants/constant';
import { authModel } from '@models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class RestaurantDataService {
    localStorageService = inject(LocalStorageService);
    user: authModel | null = this.localStorageService.get(
        localStorageKeys.LOGGED_IN_USER,
    );

    private restaurantId = new BehaviorSubject<number | undefined>(
        this.user?.id,
    );

    currRestaurant$: Observable<number | undefined> =
        this.restaurantId.asObservable();

    setRestaurant(id: number) {
        console.log('called', id);

        this.restaurantId.next(id);
    }

    getCustomers(): customersModel[] {
        if (this.restaurantId.value !== undefined) {
            console.log(this.restaurantId.value);
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
