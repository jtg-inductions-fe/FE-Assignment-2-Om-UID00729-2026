import { tableColumnsModel } from '@shared/components/table/models/tableColumn.model';
import { COLUMN_TYPE } from '@shared/components/table/constants/column-type';
import { HEADING_ALIGNMENTS } from '@shared/components/table/constants/heading-alignments';

export const restaurantKeys: tableColumnsModel[] = [
    {
        key: 'restaurantName',
        header: 'Restaurant Name',
        textClass: 'mat-headline-5',
    },
    { key: 'address', header: 'Address', textClass: 'mat-subtitle-2' },
    { key: 'owners', header: 'Owners', type: COLUMN_TYPE.TEMPLATE },
    {
        key: 'actions',
        header: 'Actions',
        type: COLUMN_TYPE.TEMPLATE,
        headingAlignment: HEADING_ALIGNMENTS.END,
    },
];
