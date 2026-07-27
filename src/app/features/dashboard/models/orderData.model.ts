import { ORDER_STATUS } from '../constants/order-status';

export interface orderDataModel {
    orderID: number;
    restaurant: string;
    customer: string;
    items?: string[];
    amount: string;
    status?: ORDER_STATUS;
}
