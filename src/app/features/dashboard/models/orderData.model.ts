export interface orderDataModel {
    orderID: number;
    restaurant: string;
    customer: string;
    items?: string[];
    amount: number;
    status?: 'Pending' | 'Completed' | 'Preparing' | 'Rejected';
}
