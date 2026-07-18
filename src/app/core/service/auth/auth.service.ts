import { Injectable, inject } from '@angular/core';
import { authModel } from '@models/auth.model';
import { mockUsers } from '@assets/mock-data/users';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { localStorageKeys } from 'src/constants/constant';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    localStorageService = inject(LocalStorageService);

    private userSubject = new BehaviorSubject<authModel | null>(
        this.localStorageService.get(localStorageKeys.LOGGED_IN_USER) || null,
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

        this.localStorageService.set(localStorageKeys.LOGGED_IN_USER, {
            id: loggedInUser.id,
            email: loggedInUser.email,
            role: loggedInUser.role,
            profileImg: loggedInUser.profileImg,
        });

        return loggedInUser;
    }

    logout() {
        this.userSubject.next(null);
        this.localStorageService.remove(localStorageKeys.LOGGED_IN_USER);
    }
}
