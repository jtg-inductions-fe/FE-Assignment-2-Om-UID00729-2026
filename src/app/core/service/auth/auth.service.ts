import { Injectable, inject } from '@angular/core';
import { authModel } from '@core/models/auth.model';
import { mockUsers } from '@assets/mock-data/users';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '@core/constants/local-storage-keys';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    localStorageService = inject(LocalStorageService);

    private userSubject = new BehaviorSubject<authModel | null>(
        this.localStorageService.get(LOCAL_STORAGE_KEYS.LOGGED_IN_USER) || null,
    );
    currUser$ = this.userSubject.asObservable();

    login(email: string, password: string): authModel | null {
        const loggedInUser = mockUsers.find(
            (user) => user.email === email && user.password === password,
        );

        if (!loggedInUser) {
            return null;
        }

        this.userSubject.next(loggedInUser);

        this.localStorageService.set(LOCAL_STORAGE_KEYS.LOGGED_IN_USER, {
            id: loggedInUser.id,
            email: loggedInUser.email,
            role: loggedInUser.role,
            profileImg: loggedInUser.profileImg,
        });

        return loggedInUser;
    }

    logout() {
        this.userSubject.next(null);
        this.localStorageService.remove(LOCAL_STORAGE_KEYS.LOGGED_IN_USER);
    }

    isloggedIn(): boolean {
        return this.userSubject.value !== null;
    }
}
