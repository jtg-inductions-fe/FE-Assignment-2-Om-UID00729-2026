import { customersModel } from '@core/models/customers.model';
import { menuModel } from '@core/models/menu.model';
import { orderDataModel } from '@features/dashboard/models/orderData.model';

export const burgerBistroCustomers: customersModel[] = [
    {
        name: 'Lana Bryd',
        email: 'lanabryd@demo.com',
        totalAmount: 42,
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
    {
        name: 'Karen Nelson',
        email: 'karennelson@demo.com',
        totalAmount: 58,
        profileImg: 'assets/images/profile-placeholder-2.webp',
    },
    {
        name: 'Stephen',
        email: 'stephen@demo.com',
        totalAmount: 32,
        profileImg: 'assets/images/profile-placeholder-3.webp',
    },
    {
        name: 'Bruce Banner',
        email: 'brucebanner@demo.com',
        totalAmount: 15,
        profileImg: 'assets/images/profile-placeholder-4.webp',
    },
    {
        name: 'Laufey',
        email: 'laufey@demo.com',
        totalAmount: 10,
        profileImg: 'assets/images/profile-placeholder-5.webp',
    },
    {
        name: 'Kratos',
        email: 'kratos@demo.com',
        totalAmount: 29,
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

export const burgerBistroOrders: orderDataModel[] = [
    {
        orderID: 1002,
        restaurant: 'Burger Bistro',
        customer: 'Stephen',
        items: ['Soda', 'Zinger Burger'],
        amount: 28,
        status: 'Pending',
    },
    {
        orderID: 1003,
        restaurant: 'Burger Bistro',
        customer: 'Laufey',
        items: ['French Fries', 'CheeseBurger'],
        amount: 48,
        status: 'Pending',
    },
    {
        orderID: 1004,
        restaurant: 'Burger Bistro',
        customer: 'Karen Nelson',
        items: ['Double Cheese Burger', 'Soda'],
        amount: 68,
        status: 'Pending',
    },
];
