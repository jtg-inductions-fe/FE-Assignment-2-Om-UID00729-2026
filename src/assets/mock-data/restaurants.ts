import {
    pizzaPalaceCustomers,
    pizzaPalaceOrders,
    pizzaPalaceMenu,
} from '@assets/mock-data/pizza-palace-data';
import {
    burgerBistroCustomers,
    burgerBistroOrders,
    burgerBistroMenu,
} from '@assets/mock-data/burger-bistro-data';

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
