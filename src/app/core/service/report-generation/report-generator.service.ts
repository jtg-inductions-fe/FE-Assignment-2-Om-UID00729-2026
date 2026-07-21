import { Injectable, inject } from '@angular/core';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
import { RestaurantDataService } from '../restaurant-data/restaurant-data.service';
import { statModel } from '@models/stats.model';
import { AuthService } from '../auth/auth.service';
// import { statModel } from '@models/stats.model';

@Injectable({
    providedIn: 'root',
})
export class ReportGeneratorService {
    restaurantDataService = inject(RestaurantDataService);
    authService = inject(AuthService);

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

    getOwners(): number {
        let ownersCount;
        this.authService.currUser$.subscribe((data) => {
            ownersCount = data?.owners?.length;
        });
        if (ownersCount) {
            return ownersCount;
        }
        return 0;
    }

    getStats(): statModel[] {
        return [
            {
                label: 'Total Revenue',
                value: `$ ${this.totalRevenue()}`,
                icon: 'attach_money',
                color: 'green',
            },
            {
                label: 'Total Orders',
                value: this.totalOrders(),
                icon: 'shopping_cart',
                color: 'blue',
            },
            {
                label: 'Completed Orders',
                value: 5,
                icon: 'check',
                color: 'orange',
            },
            {
                label: 'Restaurant Owners',
                value: this.getOwners(),
                icon: 'local_pizza',
                color: 'green',
            },
        ];
    }
}
