import { ROLES } from '@core/constants/role';

export interface authModel {
    id: number;
    name: string;
    email: string;
    password: string;
    role: ROLES.ADMIN | ROLES.OWNER;
    profileImg?: string;
    restaurantName?: string;
    owners?: string[];
    address?: string;
}
