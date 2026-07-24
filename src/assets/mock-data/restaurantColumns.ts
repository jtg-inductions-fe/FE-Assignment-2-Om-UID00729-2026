import { tableColumnsModel } from '@core/models/tableColumn.model';

export const restaurantKeys: tableColumnsModel[] = [
    { key: 'restaurantName', header: 'Restaurant Name' },
    { key: 'address', header: 'Address' },
    { key: 'owners', header: 'Owners', type: 'template' },
    { key: 'actions', header: 'Actions', type: 'template' },
];
