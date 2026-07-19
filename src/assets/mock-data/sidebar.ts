import { sideBarModel } from '@models/sidebar.model';

export const sideBarLinks: sideBarModel[] = [
    {
        label: 'Overview',
        routeTo: '/dashboard',
        role: ['admin', 'owner'],
        icon: 'pie_chart',
        common: false,
    },
    {
        label: 'Restaurants',
        routeTo: '/restaurants',
        role: ['admin'],
        icon: 'restaurant',
        common: false,
    },
    {
        label: 'Menu',
        routeTo: '/menu',
        role: ['owner'],
        icon: 'local_dining',
        common: false,
    },
    {
        label: 'Billing History',
        role: ['owner'],
        children: [
            {
                label: 'Last Month',
                routeTo: '/bills/lastMonth',
                role: ['owner'],
                icon: 'calendar_month',
                common: false,
            },
            {
                label: 'Last 3 Months',
                children: [
                    {
                        label: 'June',
                        routeTo: '/bills/june',
                        role: ['owner'],
                        icon: 'date_range',
                        common: false,
                    },
                    {
                        label: 'May',
                        routeTo: '/bills/may',
                        role: ['owner'],
                        icon: 'date_range',
                        common: false,
                    },
                    {
                        label: 'April',
                        routeTo: '/bills/april',
                        role: ['owner'],
                        icon: 'date_range',
                        common: false,
                    },
                ],
                role: ['owner'],
                icon: 'calendar_month',
                common: false,
            },
        ],
        icon: 'attach_money',
        common: false,
    },
    {
        label: 'Inventory',
        role: ['owner'],
        children: [
            {
                label: 'Grocery',
                children: [
                    {
                        label: 'Fruits',
                        routeTo: '/inventory/grocery/fruits',
                        role: ['owner'],
                        icon: 'shopping_bag',
                        common: false,
                    },
                    {
                        label: 'Vegetables',
                        routeTo: '/inventory/grocery/vegetables',
                        role: ['owner'],
                        icon: 'shopping_bag',
                        common: false,
                    },
                ],
                role: ['owner'],
                icon: 'shopping_cart',
                common: false,
            },
        ],
        icon: 'work',
        common: false,
    },
    {
        label: 'Messages',
        routeTo: '/messages',
        role: ['admin', 'owner'],
        icon: 'drafts',
        common: false,
    },
    {
        label: 'Access',
        role: ['admin', 'owner'],
        children: [
            {
                label: 'Restaurants',
                routeTo: '/access/restaurants',
                role: ['admin', 'owner'],
                icon: 'restaurant',
                common: false,
            },
            {
                label: 'Owners',
                routeTo: '/access/owners',
                role: ['admin', 'owner'],
                icon: 'supervisor_account',
                common: false,
            },
        ],
        icon: 'lock',
        common: false,
    },
    {
        label: 'Profile',
        routeTo: '/profile',
        role: ['admin', 'owner'],
        icon: 'account_circle',
        common: true,
    },
    {
        label: 'Gallery',
        routeTo: '/gallery',
        role: ['admin', 'owner'],
        icon: 'photo_library',
        common: true,
    },
    {
        label: 'Help',
        routeTo: '/help',
        role: ['admin', 'owner'],
        icon: 'help',
        common: true,
    },
];
