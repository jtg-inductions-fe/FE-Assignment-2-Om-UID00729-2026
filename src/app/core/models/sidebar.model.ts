export interface sideBarModel {
    label: string;
    routeTo?: string;
    children?: sideBarModel[];
    role?: string;
}
