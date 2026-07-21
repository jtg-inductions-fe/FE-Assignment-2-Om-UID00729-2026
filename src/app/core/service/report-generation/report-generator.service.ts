import { Injectable, inject } from '@angular/core';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
import { RestaurantDataService } from '../restaurant-data/restaurant-data.service';

@Injectable({
    providedIn: 'root',
})
export class ReportGeneratorService {
    restaurantDataService = inject(RestaurantDataService);

    topCustomers(): customersModel[] {
        const customers: customersModel[] =
            this.restaurantDataService.getCustomers();

        return customers
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, 5);
    }

    topOrders(): menuModel[] {
        const menuItems: menuModel[] = this.restaurantDataService.getMenu();

        return menuItems.sort((a, b) => b.orders - a.orders).slice(0, 5);
    }

    totalRevenue(): number {
        const customers: customersModel[] =
            this.restaurantDataService.getCustomers();

        return customers.reduce(
            (acc, customer) => acc + customer.totalAmount,
            0,
        );
    }

    totalOrders(): number {
        const menuItems: menuModel[] = this.restaurantDataService.getMenu();

        return menuItems.reduce((acc, item) => acc + item.orders, 0);
    }
}
