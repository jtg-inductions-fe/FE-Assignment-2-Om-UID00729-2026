import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@core/service/auth/auth.service';
import { ReportGeneratorService } from '@core/service/report-generation/report-generator.service';
import { RestaurantDataService } from '@core/service/restaurant-data/restaurant-data.service';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
import { statModel } from '@models/stats.model';
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

    ngOnInit(): void {
        this.isAdmin = this.authService.isAdmin();

        this.restaurantDataService.currRestaurant$.subscribe(() => {
            this.topCustomers = this.reportGenerator.topCustomers();
            this.topOrders = this.reportGenerator.topOrders();
            this.stats = this.reportGenerator.getStats();
        });
    }
}
