export interface authModel {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'owner';
    profileImg?: string;
    restaurantName?: string;
    owners?: string[];
    address?: string;
}
