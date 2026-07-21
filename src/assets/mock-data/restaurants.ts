import { pizzaPalaceCustomers } from '@assets/mock-data/pizzaPalace';
import { pizzaPalaceMenu } from '@assets/mock-data/pizzaPalace';
import { burgerBistroCustomers } from '@assets/mock-data/burgerBistro';
import { burgerBistroMenu } from '@assets/mock-data/burgerBistro';

export const restaurantData = [
    {
        name: 'Admin',
        customers: [...pizzaPalaceCustomers, ...burgerBistroCustomers],
        menu: [...pizzaPalaceMenu, ...burgerBistroMenu],
    },
    {
        name: 'Pizza Palace',
        customers: pizzaPalaceCustomers,
        menu: pizzaPalaceMenu,
    },
    {
        name: 'Burger Bistro',
        customers: burgerBistroCustomers,
        menu: burgerBistroMenu,
    },
];
