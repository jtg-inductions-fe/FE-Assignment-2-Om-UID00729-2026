import { authModel } from '@core/models/auth.model';

export const mockUsers: authModel[] = [
    {
        id: 1,
        email: 'admin@jtg.com',
        name: 'Karen Nelson',
        password: 'admin123',
        role: 'admin',
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
    {
        id: 2,
        email: 'pizzapalace@jtg.com',
        name: 'Neil Sims',
        password: 'pizza123',
        role: 'owner',
        profileImg: 'assets/images/profile-placeholder-2.webp',
    },
    {
        id: 3,
        email: 'burgerbistro@jtg.com',
        name: 'Albert Wright',
        password: 'burger123',
        role: 'owner',
        profileImg: 'assets/images/profile-placeholder-3.webp',
    },
];
