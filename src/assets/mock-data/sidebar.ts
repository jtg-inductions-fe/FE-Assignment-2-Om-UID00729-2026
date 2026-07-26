import { sideBarModel } from '@core/components/sidebar/models/sidebar.model';
import { ROLES } from '@core/constants/role';
import { SIDEBAR_MENU_TYPES } from '@core/components/sidebar/constants/sidebar-menu-types';

export const sideBarLinks: sideBarModel[] = [
    {
        label: 'Overview',
        routeTo: '/dashboard',
        icon: 'pie_chart',
        type: SIDEBAR_MENU_TYPES.LINK,
    },
    {
        label: 'Restaurants',
        routeTo: '/restaurants',
        role: [ROLES.ADMIN],
        icon: 'restaurant',
        type: SIDEBAR_MENU_TYPES.LINK,
    },
    {
        label: 'Menu',
        routeTo: '/menu',
        role: [ROLES.OWNER],
        icon: 'local_dining',
        type: SIDEBAR_MENU_TYPES.LINK,
    },
    {
        label: 'Billing History',
        role: [ROLES.OWNER],
        type: SIDEBAR_MENU_TYPES.NODE,
        children: [
            {
                label: 'Last Month',
                routeTo: '/bills/lastMonth',
                role: [ROLES.OWNER],
                icon: 'calendar_month',
                type: SIDEBAR_MENU_TYPES.LINK,
            },
            {
                label: 'Last 3 Months',
                children: [
                    {
                        label: 'June',
                        routeTo: '/bills/june',
                        role: [ROLES.OWNER],
                        icon: 'date_range',
                        type: SIDEBAR_MENU_TYPES.LINK,
                    },
                    {
                        label: 'May',
                        routeTo: '/bills/may',
                        role: [ROLES.OWNER],
                        icon: 'date_range',
                        type: SIDEBAR_MENU_TYPES.LINK,
                    },
                    {
                        label: 'April',
                        routeTo: '/bills/april',
                        role: [ROLES.OWNER],
                        icon: 'date_range',
                        type: SIDEBAR_MENU_TYPES.LINK,
                    },
                ],
                role: [ROLES.OWNER],
                icon: 'calendar_month',
                type: SIDEBAR_MENU_TYPES.NODE,
            },
        ],
        icon: 'attach_money',
    },
    {
        label: 'Inventory',
        role: [ROLES.OWNER],
        children: [
            {
                label: 'Grocery',
                children: [
                    {
                        label: 'Fruits',
                        routeTo: '/inventory/grocery/fruits',
                        role: [ROLES.OWNER],
                        icon: 'shopping_bag',
                        type: SIDEBAR_MENU_TYPES.LINK,
                    },
                    {
                        label: 'Vegetables',
                        routeTo: '/inventory/grocery/vegetables',
                        role: [ROLES.OWNER],
                        icon: 'shopping_bag',
                        type: SIDEBAR_MENU_TYPES.LINK,
                    },
                ],
                role: [ROLES.OWNER],
                icon: 'shopping_cart',
                type: SIDEBAR_MENU_TYPES.NODE,
            },
        ],
        icon: 'work',
        type: SIDEBAR_MENU_TYPES.NODE,
    },
    {
        label: 'Messages',
        routeTo: '/messages',
        icon: 'drafts',
        type: SIDEBAR_MENU_TYPES.LINK,
        hasBadge: true,
    },
    {
        label: 'Access',
        children: [
            {
                label: 'Restaurants',
                routeTo: '/access/restaurants',
                icon: 'restaurant',
                type: SIDEBAR_MENU_TYPES.LINK,
            },
            {
                label: 'Owners',
                routeTo: '/access/owners',
                icon: 'supervisor_account',
                type: SIDEBAR_MENU_TYPES.LINK,
            },
        ],
        icon: 'lock',
        type: SIDEBAR_MENU_TYPES.NODE,
    },
    {
        type: SIDEBAR_MENU_TYPES.DIVIDER,
    },
    {
        label: 'Profile',
        routeTo: '/profile',
        icon: 'account_circle',
        type: SIDEBAR_MENU_TYPES.LINK,
    },
    {
        label: 'Gallery',
        routeTo: '/gallery',
        icon: 'photo_library',
        type: SIDEBAR_MENU_TYPES.LINK,
    },
    {
        label: 'Help',
        routeTo: '/help',
        icon: 'help',
        type: SIDEBAR_MENU_TYPES.LINK,
    },
];
