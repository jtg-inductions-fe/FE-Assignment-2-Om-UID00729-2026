import { COLUMN_TYPE } from '@shared/components/table/constants/column-type';
import { tableColumnsModel } from '@shared/components/table/models/tableColumn.model';

export const ordersKeys: tableColumnsModel[] = [
    { key: 'orderID', header: 'OrderId' },
    { key: 'restaurant', header: 'Restaurant' },
    { key: 'customer', header: 'Customers' },
    { key: 'items', header: 'Items' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status', type: COLUMN_TYPE.TEMPLATE },
    { key: 'actions', header: 'Actions', type: COLUMN_TYPE.TEMPLATE },
];
