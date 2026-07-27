import { tableColumnsModel } from '@shared/components/table/models/tableColumn.model';
import { COLUMN_TYPE } from '@shared/components/table/constants/column-type';

export const restaurantKeys: tableColumnsModel[] = [
    { key: 'restaurantName', header: 'Restaurant Name' },
    { key: 'address', header: 'Address' },
    { key: 'owners', header: 'Owners', type: COLUMN_TYPE.TEMPLATE },
    { key: 'actions', header: 'Actions', type: COLUMN_TYPE.TEMPLATE },
];
