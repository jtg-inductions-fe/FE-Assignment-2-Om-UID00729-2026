export interface orderDataModel {
    orderID: number;
    restaurant: string;
    customer: string;
    items?: string[];
    amount: number;
    status?: 'pending' | 'completed' | 'preparing';
    actions?: {
        icon: string;
        label: string;
        variant?: string;
    }[];
}
