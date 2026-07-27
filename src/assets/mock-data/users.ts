import { ROLES } from '@core/constants/role';
import { authModel } from '@core/models/auth.model';

export const mockUsers: authModel[] = [
    {
        id: 0,
        email: 'admin@jtg.com',
        name: 'Karen Nelson',
        password: 'admin123',
        role: ROLES.ADMIN,
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
    {
        id: 1,
        email: 'pizzapalace@jtg.com',
        name: 'Neil Sims',
        password: 'pizza123',
        role: ROLES.OWNER,
        profileImg: 'assets/images/profile-placeholder-2.webp',
        restaurantName: 'Pizza Palace',
        owners: ['owner1@jtg.com', 'owner2@jtg.com'],
        address: '123 Pepperoni Rd, Naples',
    },
    {
        id: 2,
        email: 'burgerbistro@jtg.com',
        name: 'Albert Wright',
        password: 'burger123',
        role: ROLES.OWNER,
        profileImg: 'assets/images/profile-placeholder-3.webp',
        restaurantName: 'Burger Bistro',
        owners: ['owner3@jtg.com', 'owner4@jtg.com'],
        address: '456 Patty Ave, Austin',
    },
];
