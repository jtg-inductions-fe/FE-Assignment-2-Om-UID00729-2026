import { ORDER_STATUS } from './order-status';

export const STATUS_CLASS_MAP = {
    [ORDER_STATUS.PENDING]: 'dashboard__table-status--pending',
    [ORDER_STATUS.PREPARING]: 'dashboard__table-status--preparing',
};
