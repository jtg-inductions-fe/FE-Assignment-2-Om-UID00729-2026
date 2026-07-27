import { COLUMN_TYPE } from '../constants/column-type';
import { HEADING_ALIGNMENTS } from '../constants/heading-alignments';

export interface tableColumnsModel {
    key: string;
    header: string;
    type?: COLUMN_TYPE;
    textClass?: string;
    headingAlignment?: HEADING_ALIGNMENTS;
}
