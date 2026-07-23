import {
    pizzaPalaceCustomers,
    pizzaPalaceOrders,
} from '@assets/mock-data/pizzaPalace';
import { pizzaPalaceMenu } from '@assets/mock-data/pizzaPalace';
import {
    burgerBistroCustomers,
    burgerBistroOrders,
} from '@assets/mock-data/burgerBistro';
import { burgerBistroMenu } from '@assets/mock-data/burgerBistro';

export const restaurantData = [
    {
        name: 'Admin',
        customers: [...pizzaPalaceCustomers, ...burgerBistroCustomers],
        menu: [...pizzaPalaceMenu, ...burgerBistroMenu],
        orders: [],
    },
    {
        name: 'Pizza Palace',
        customers: pizzaPalaceCustomers,
        menu: pizzaPalaceMenu,
        orders: pizzaPalaceOrders,
    },
    {
        name: 'Burger Bistro',
        customers: burgerBistroCustomers,
        menu: burgerBistroMenu,
        orders: burgerBistroOrders,
    },
];
