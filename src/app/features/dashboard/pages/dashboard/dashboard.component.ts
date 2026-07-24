import {
    Component,
    DestroyRef,
    inject,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { ReportGeneratorService } from '@core/services/report-generation/report-generator.service';
import { RestaurantDataService } from '@core/services/restaurant-data/restaurant-data.service';
import { customersModel } from '@core/models/customers.model';
import { menuModel } from '@core/models/menu.model';
import { statModel } from '@core/models/stats.model';
import { ordersKeys } from '@assets/mock-data/orderTableColumns';
import { orderDataModel } from '@features/dashboard/models/orderData.model';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    authService = inject(AuthService);
    reportGenerator = inject(ReportGeneratorService);
    restaurantDataService = inject(RestaurantDataService);
    snackbarService = inject(SnackbarService);
    destroyRef = inject(DestroyRef);

    topCustomers: customersModel[] = [];
    topOrders: menuModel[] = [];
    stats: statModel[] = [];
    isAdmin!: boolean;
    templates: Record<string, TemplateRef<unknown>> = {};
    currRole = this.authService.getRole();
    orderColumns = ordersKeys;
    orderData: orderDataModel[] = [];

    @ViewChild('statusTemplate', { static: true })
    statusTemplate!: TemplateRef<unknown>;
    @ViewChild('buttonTemplate', { static: true })
    buttonTemplate!: TemplateRef<unknown>;
    class = 'pending';

    ngOnInit(): void {
        this.isAdmin = this.currRole === 'admin';

        this.restaurantDataService.currRestaurant$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.orderData = this.restaurantDataService.getOrders();
                this.topCustomers = this.reportGenerator.topCustomers();
                this.topOrders = this.reportGenerator.topOrders();
                this.stats = this.reportGenerator.getStats().filter((stat) => {
                    if (this.currRole) {
                        return stat.forRole.includes(this.currRole);
                    }
                    return false;
                });
            });
        this.templates = {
            status: this.statusTemplate,
            actions: this.buttonTemplate,
        };
    }

    handleReject(row: orderDataModel) {
        this.snackbarService.showError('Order Rejected');
        this.orderData = this.orderData.filter(
            (order) => order.orderID !== row.orderID,
        );
    }

    handleAccept(row: orderDataModel) {
        row.status = 'Preparing';
    }

    handleComplete(row: orderDataModel) {
        this.snackbarService.showSuccess('Order Completed');
        this.orderData = this.orderData.filter(
            (order) => order.orderID !== row.orderID,
        );
    }
}
