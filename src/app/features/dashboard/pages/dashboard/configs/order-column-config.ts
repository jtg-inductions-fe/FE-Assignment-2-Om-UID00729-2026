import { COLUMN_TYPE } from '@shared/components/table/constants/column-type';
import { tableColumnsModel } from '@shared/components/table/models/tableColumn.model';

export const ordersKeys: tableColumnsModel[] = [
    { key: 'orderID', header: 'OrderId', textClass: 'mat-headline-5' },
    { key: 'restaurant', header: 'Restaurant', textClass: 'mat-body-1' },
    { key: 'customer', header: 'Customers', textClass: 'mat-subtitle-2' },
    { key: 'items', header: 'Items', textClass: 'mat-subtitle-2' },
    { key: 'amount', header: 'Amount', textClass: 'mat-body-2' },
    { key: 'status', header: 'Status', type: COLUMN_TYPE.TEMPLATE },
    { key: 'actions', header: 'Actions', type: COLUMN_TYPE.TEMPLATE },
];
