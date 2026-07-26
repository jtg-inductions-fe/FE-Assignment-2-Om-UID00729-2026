import { COLUMN_TYPE } from '../constants/column-type';

export interface tableColumnsModel {
    key: string;
    header: string;
    type?: COLUMN_TYPE;
}
