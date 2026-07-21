export interface sideBarModel {
    label: string;
    routeTo?: string;
    children?: sideBarModel[];
    role?: ('admin' | 'owner')[];
    icon?: string;
    common: boolean;
}
