import { SIDEBAR_MENU_TYPES } from '../constants/sidebar-menu-types';
import { ROLES } from '@core/constants/role';
export interface sideBarModel {
    label?: string;
    routeTo?: string;
    children?: sideBarModel[];
    role?: ROLES[];
    icon?: string;
    hasBadge?: boolean;
    type: SIDEBAR_MENU_TYPES;
}
