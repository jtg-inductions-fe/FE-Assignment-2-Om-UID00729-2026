import { Injectable } from '@angular/core';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';

@Injectable({
    providedIn: 'root',
})
export class ReportGeneratorService {
    topCustomers(customers: customersModel[]): customersModel[] {
        return customers
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, 5);
    }

    topOrders(menuItems: menuModel[]): menuModel[] {
        return menuItems.sort((a, b) => b.orders - a.orders).slice(0, 5);
    }

    totalRevenue(customers: customersModel[]): number {
        return customers.reduce(
            (acc, customer) => acc + customer.totalAmount,
            0,
        );
    }

    totalOrders(menuItems: menuModel[]): number {
        return menuItems.reduce((acc, item) => acc + item.orders, 0);
    }
}
