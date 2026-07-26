import { ROLES } from '@core/constants/role';

export interface statModel {
    label: string;
    value: number | string;
    icon: string;
    color: string;
    forRole: ROLES[];
}
