import { tableColumnsModel } from '@core/models/tableColumn.model';

export const ordersKeys: tableColumnsModel[] = [
    { key: 'orderID', header: 'OrderId', type: 'text' },
    { key: 'restaurant', header: 'Restaurant', type: 'text' },
    { key: 'customer', header: 'Customers', type: 'text' },
    { key: 'items', header: 'Items', type: 'text' },
    { key: 'amount', header: 'Amount', type: 'text' },
    { key: 'status', header: 'Status', type: 'badge' },
    { key: 'actions', header: 'Actions', type: 'button' },
];
