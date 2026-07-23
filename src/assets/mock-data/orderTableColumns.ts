import { tableColumnsModel } from '@core/models/tableColumn.model';

export const ordersKeys: tableColumnsModel[] = [
    { key: 'orderID', header: 'OrderId' },
    { key: 'restaurant', header: 'Restaurant' },
    { key: 'customer', header: 'Customers' },
    { key: 'items', header: 'Items' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status', type: 'template' },
    { key: 'actions', header: 'Actions', type: 'template' },
];
