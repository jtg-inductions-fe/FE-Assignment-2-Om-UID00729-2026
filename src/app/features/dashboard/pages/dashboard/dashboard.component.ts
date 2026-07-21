import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@core/service/auth/auth.service';
import { ReportGeneratorService } from '@core/service/report-generation/report-generator.service';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    authService = inject(AuthService);
    reportGenerator = inject(ReportGeneratorService);
    topCustomers: customersModel[] = [];
    topOrders: menuModel[] = [];
    isAdmin!: boolean;

    ngOnInit(): void {
        this.isAdmin = this.authService.getRole() === 'admin';
        console.log(this.isAdmin);

        this.topOrders = this.reportGenerator.topOrders();
        this.topCustomers = this.reportGenerator.topCustomers();
    }
}
