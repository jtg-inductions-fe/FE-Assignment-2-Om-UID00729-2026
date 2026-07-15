import { Injectable } from '@angular/core';
import { authModel } from '@models/auth.model';
import { mockUsers } from '@assets/mock-data/users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private userSubject = new BehaviorSubject<authModel | null>(null);
    currUser$ = this.userSubject.asObservable();

    login(email: string, password: string): authModel | null {
        const loggedUser = mockUsers.find(
            (user) => user.email === email && user.password === password,
        );

        if (!loggedUser) {
            return null;
        }

        this.userSubject.next(loggedUser);

        localStorage.setItem(
            'LOGGED_USER',
            JSON.stringify({
                id: loggedUser.id,
                email: loggedUser.email,
                role: loggedUser.role,
                profileImg: loggedUser.profileImg,
            }),
        );

        return loggedUser;
    }

    logout() {
        this.userSubject.next(null);
        localStorage.removeItem('LOGGED_USER');
    }
}
