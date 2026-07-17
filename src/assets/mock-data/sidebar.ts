import { sideBarModel } from '@models/sidebar.model';

export const sideBarLinks: sideBarModel[] = [
    {
        label: 'Overview',
        routeTo: '/dashboard',
    },
    {
        label: 'Restaurants',
        role: 'admin',
    },
    {
        label: 'Messages',
        routeTo: '/dashboard',
    },
    {
        label: 'access',
        routeTo: '/dashboard',
    },
];
