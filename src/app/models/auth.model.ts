export interface authModel {
    id: number;
    email: string;
    password: string;
    role: 'admin' | 'owner';
    profileImg: string;
}
