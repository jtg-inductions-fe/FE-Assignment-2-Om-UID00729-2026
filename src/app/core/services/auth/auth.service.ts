import { Injectable, inject } from '@angular/core';
import { authModel } from '@core/models/auth.model';
import { mockUsers } from '@assets/mock-data/users';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '@core/constants/local-storage-keys';
// import { RestaurantDataService } from '../restaurant-data/restaurant-data.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    localStorageService = inject(LocalStorageService);
    // roleHandler = inject(RestaurantDataService);

    private userSubject = new BehaviorSubject<authModel | null>(
        this.localStorageService.get(LOCAL_STORAGE_KEYS.LOGGED_IN_USER) || null,
    );
    currUser$: Observable<authModel | null> = this.userSubject.asObservable();

    login(email: string, password: string): authModel | null {
        const loggedInUser = mockUsers.find(
            (user) => user.email === email && user.password === password,
        );

        if (!loggedInUser) {
            return null;
        }

        this.userSubject.next(loggedInUser);
        // this.roleHandler.setRestaurant(loggedInUser.id);

        this.localStorageService.set(LOCAL_STORAGE_KEYS.LOGGED_IN_USER, {
            id: loggedInUser.id,
            name: loggedInUser.name,
            email: loggedInUser.email,
            role: loggedInUser.role,
            profileImg: loggedInUser.profileImg,
            restaurantName: loggedInUser.restaurantName,
            owners: loggedInUser.owners,
        });

        return loggedInUser;
    }

    logout() {
        this.userSubject.next(null);
        this.localStorageService.remove(LOCAL_STORAGE_KEYS.LOGGED_IN_USER);
    }

    isLoggedIn(): boolean {
        return this.userSubject.value !== null;
    }

    getRole() {
        return this.userSubject.value?.role;
    }

    get currUser(): authModel | null {
        return this.userSubject.value;
    }
}
