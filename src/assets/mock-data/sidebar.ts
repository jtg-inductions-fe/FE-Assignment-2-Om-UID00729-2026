import { sideBarModel } from '@core/components/sidebar/models/sidebar.model';

export const sideBarLinks: sideBarModel[] = [
    {
        label: 'Overview',
        routeTo: '/dashboard',
        role: ['admin', 'owner'],
        icon: 'pie_chart',
        type: 'Link',
    },
    {
        label: 'Restaurants',
        routeTo: '/restaurants',
        role: ['admin'],
        icon: 'restaurant',
        type: 'Link',
    },
    {
        label: 'Menu',
        routeTo: '/menu',
        role: ['owner'],
        icon: 'local_dining',
        type: 'Link',
    },
    {
        label: 'Billing History',
        role: ['owner'],
        type: 'Node',
        children: [
            {
                label: 'Last Month',
                routeTo: '/bills/lastMonth',
                role: ['owner'],
                icon: 'calendar_month',
                type: 'Link',
            },
            {
                label: 'Last 3 Months',
                children: [
                    {
                        label: 'June',
                        routeTo: '/bills/june',
                        role: ['owner'],
                        icon: 'date_range',
                        type: 'Link',
                    },
                    {
                        label: 'May',
                        routeTo: '/bills/may',
                        role: ['owner'],
                        icon: 'date_range',
                        type: 'Link',
                    },
                    {
                        label: 'April',
                        routeTo: '/bills/april',
                        role: ['owner'],
                        icon: 'date_range',
                        type: 'Link',
                    },
                ],
                role: ['owner'],
                icon: 'calendar_month',
                type: 'Node',
            },
        ],
        icon: 'attach_money',
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
                        type: 'Link',
                    },
                    {
                        label: 'Vegetables',
                        routeTo: '/inventory/grocery/vegetables',
                        role: ['owner'],
                        icon: 'shopping_bag',
                        type: 'Link',
                    },
                ],
                role: ['owner'],
                icon: 'shopping_cart',
                type: 'Node',
            },
        ],
        icon: 'work',
        type: 'Node',
    },
    {
        label: 'Messages',
        routeTo: '/messages',
        role: ['admin', 'owner'],
        icon: 'drafts',
        type: 'Link',
        hasBadge: true,
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
                type: 'Link',
            },
            {
                label: 'Owners',
                routeTo: '/access/owners',
                role: ['admin', 'owner'],
                icon: 'supervisor_account',
                type: 'Link',
            },
        ],
        icon: 'lock',
        type: 'Node',
    },
    {
        type: 'Divider',
        role: ['admin', 'owner'],
    },
    {
        label: 'Profile',
        routeTo: '/profile',
        role: ['admin', 'owner'],
        icon: 'account_circle',
        type: 'Link',
    },
    {
        label: 'Gallery',
        routeTo: '/gallery',
        role: ['admin', 'owner'],
        icon: 'photo_library',
        type: 'Link',
    },
    {
        label: 'Help',
        routeTo: '/help',
        role: ['admin', 'owner'],
        icon: 'help',
        type: 'Link',
    },
];
