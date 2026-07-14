import { Injectable } from '@angular/core';
import { authModel } from '@models/auth.model';
import { mockUsers } from '@assets/mock-data/users';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    login(email: string, password: string): authModel | null {
        const loggedUser = mockUsers.find(
            (user) => user.email === email && user.password === password,
        );
        return loggedUser || null;
    }
}
