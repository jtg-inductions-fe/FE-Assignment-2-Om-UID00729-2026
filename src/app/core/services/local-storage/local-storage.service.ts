import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    set(key: string, data: unknown) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get<T>(key: string): T | null {
        const item = localStorage.getItem(key);

        if (!item) {
            return null;
        }
        return JSON.parse(item);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
