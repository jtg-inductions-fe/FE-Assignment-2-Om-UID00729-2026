import { customersModel } from '@core/models/customers.model';
import { menuModel } from '@core/models/menu.model';
import { ORDER_STATUS } from '@features/dashboard/constants/order-status';
import { orderDataModel } from '@features/dashboard/models/orderData.model';

export const pizzaPalaceCustomers: customersModel[] = [
    {
        name: 'Albert Wright',
        email: 'albertwright@demo.com',
        totalAmount: 60,
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
    {
        name: 'Dave Miller',
        email: 'davemiller@demo.com',
        totalAmount: 48,
        profileImg: 'assets/images/profile-placeholder-2.webp',
    },
    {
        name: 'Neil Sims',
        email: 'neilsims@demo.com',
        totalAmount: 36,
        profileImg: 'assets/images/profile-placeholder-3.webp',
    },
    {
        name: 'Bonnie Green',
        email: 'bonnieblue@demo.com',
        totalAmount: 28,
        profileImg: 'assets/images/profile-placeholder-4.webp',
    },
    {
        name: 'Alice Johnson',
        email: 'alicejohnson@demo.com',
        totalAmount: 23,
        profileImg: 'assets/images/profile-placeholder-5.webp',
    },
    {
        name: 'John Snow',
        email: 'johnsnow@demo.com',
        totalAmount: 55,
        profileImg: 'assets/images/profile-placeholder-1.webp',
    },
    {
        name: 'Tyrion',
        email: 'tyrion@demo.com',
        totalAmount: 29,
        profileImg: 'assets/images/profile-placeholder-2.webp',
    },
];

export const pizzaPalaceMenu: menuModel[] = [
    {
        dishName: 'Soda',
        restaurant: 'Pizza Palace',
        orders: 4,
        dishId: 1,
    },
    {
        dishName: 'Margherita Pizza',
        restaurant: 'Pizza Palace',
        orders: 3,
        dishId: 2,
    },
    {
        dishName: 'Truffle Pasta',
        restaurant: 'Pizza Palace',
        orders: 3,
        dishId: 3,
    },
    {
        dishName: 'Garlic Bread',
        restaurant: 'Pizza Palace',
        orders: 2,
        dishId: 4,
    },
    {
        dishName: 'Pepperoni Pizza',
        restaurant: 'Pizza Palace',
        orders: 1,
        dishId: 5,
    },
];

export const pizzaPalaceOrders: orderDataModel[] = [
    {
        orderID: 1002,
        restaurant: 'Pizza Palace',
        customer: 'Dave Miller',
        items: ['Soda', 'Margherita Pizza'],
        amount: '$28',
        status: ORDER_STATUS.PENDING,
    },
    {
        orderID: 1003,
        restaurant: 'Pizza Palace',
        customer: 'John Snow',
        items: ['Garlic Bread', 'Pepperoni Pizza'],
        amount: '$48',
        status: ORDER_STATUS.PENDING,
    },
    {
        orderID: 1004,
        restaurant: 'Pizza Palace',
        customer: 'Tyrion',
        items: ['Truffle Pasta', 'Soda'],
        amount: '$68',
        status: ORDER_STATUS.PENDING,
    },
];
