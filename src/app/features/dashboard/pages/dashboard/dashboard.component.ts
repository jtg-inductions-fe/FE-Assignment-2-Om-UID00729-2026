import { Component, inject, OnInit } from '@angular/core';
import { ReportGeneratorService } from '@core/service/report-generation/report-generator.service';
import { pizzaPalaceCustomers } from '@assets/mock-data/pizzaPalace';
import { pizzaPalaceMenu } from '@assets/mock-data/pizzaPalace';
import { customersModel } from '@models/customers.model';
import { menuModel } from '@models/menu.model';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    reportGenerator = inject(ReportGeneratorService);
    topCustomers: customersModel[] = [];
    topOrders: menuModel[] = [];

    ngOnInit(): void {
        this.topCustomers =
            this.reportGenerator.topCustomers(pizzaPalaceCustomers);
        this.topOrders = this.reportGenerator.topOrders(pizzaPalaceMenu);
    }
}
