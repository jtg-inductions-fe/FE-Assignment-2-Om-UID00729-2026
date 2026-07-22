import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { ReportGeneratorService } from '@core/services/report-generation/report-generator.service';
import { RestaurantDataService } from '@core/services/restaurant-data/restaurant-data.service';
import { customersModel } from '@core/models/customers.model';
import { menuModel } from '@core/models/menu.model';
import { statModel } from '@core/models/stats.model';
import { pizzaPalaceOrders } from '@assets/mock-data/pizzaPalace';
import { ordersKeys } from '@assets/mock-data/orderTableColumns';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    authService = inject(AuthService);
    reportGenerator = inject(ReportGeneratorService);
    restaurantDataService = inject(RestaurantDataService);
    topCustomers: customersModel[] = [];
    topOrders: menuModel[] = [];
    stats: statModel[] = [];
    isAdmin!: boolean;
    currRole = this.authService.getRole();
    orderColumns = ordersKeys;
    orderData = pizzaPalaceOrders;

    ngOnInit(): void {
        this.isAdmin = this.currRole === 'admin';

        this.restaurantDataService.currRestaurant$.subscribe(() => {
            this.topCustomers = this.reportGenerator.topCustomers();
            this.topOrders = this.reportGenerator.topOrders();
            this.stats = this.reportGenerator.getStats().filter((stat) => {
                if (this.currRole) {
                    return stat.forRole.includes(this.currRole);
                }
                return [];
            });
        });
    }
}
