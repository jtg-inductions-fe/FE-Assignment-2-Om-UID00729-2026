import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
import { statModel } from '@models/stats.model';

export const burgerBistroCustomers: customersModel[] = [
    {
        name: 'Lana Bryd',
        email: 'lanabryd@demo.com',
        totalAmount: '$42',
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
    {
        name: 'Karen Nelson',
        email: 'karennelson@demo.com',
        totalAmount: '$58',
        profileImg: 'assets/images/profile-placeholder-2.webp',
    },
    {
        name: 'Stephen',
        email: 'stephen@demo.com',
        totalAmount: '$32',
        profileImg: 'assets/images/profile-placeholder-3.webp',
    },
    {
        name: 'Bruce Banner',
        email: 'brucebanner@demo.com',
        totalAmount: '$15',
        profileImg: 'assets/images/profile-placeholder-4.webp',
    },
    {
        name: 'Laufey',
        email: 'laufey@demo.com',
        totalAmount: '$10',
        profileImg: 'assets/images/profile-placeholder-5.webp',
    },
    {
        name: 'Kratos',
        email: 'kratos@demo.com',
        totalAmount: '$29',
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
];

export const burgerBistroMenu: menuModel[] = [
    {
        dishName: 'CheeseBurger',
        restaurant: 'Burger Bistro',
        orders: 2,
    },
    {
        dishName: 'Soda',
        restaurant: 'Burger Bistro',
        orders: 1,
    },
    {
        dishName: 'French Fries',
        restaurant: 'Burger Bistro',
        orders: 1,
    },
    {
        dishName: 'Double Cheese Burger',
        restaurant: 'Burger Bistro',
        orders: 2,
    },
    {
        dishName: 'Zinger Burger',
        restaurant: 'Burger Bistro',
        orders: 3,
    },
];

export const burgerBistroStats: statModel[] = [
    {
        label: 'Total Revenue',
        value: '$186',
        icon: 'attach_money',
    },
    {
        label: 'Total Orders',
        value: '9',
        icon: 'shopping_cart',
    },
    {
        label: 'Completed Orders',
        value: '3',
        icon: 'check',
    },
    {
        label: 'Restaurant Owners',
        value: '2',
        icon: 'local_pizza',
    },
];
