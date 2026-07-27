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
import { ordersKeys } from './configs/order-column-config';
import { orderDataModel } from '@features/dashboard/models/orderData.model';
import { SnackbarService } from '@core/services/snackbar/snackbar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ORDER_STATUS } from '@features/dashboard/constants/order-status';
import { STATUS_CLASS_MAP } from '@features/dashboard/constants/status-class-map';

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
    orderStatus = ORDER_STATUS;
    statusClassMap = STATUS_CLASS_MAP;
    orderData: orderDataModel[] = [];
    defaultImg = 'assets/images/default-profile-placeholder.webp';

    @ViewChild('statusTemplate', { static: true })
    statusTemplate!: TemplateRef<unknown>;
    @ViewChild('buttonTemplate', { static: true })
    buttonTemplate!: TemplateRef<unknown>;

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
        row.status = ORDER_STATUS.PREPARING;
    }

    handleComplete(row: orderDataModel) {
        this.snackbarService.showSuccess('Order Completed');
        this.orderData = this.orderData.filter(
            (order) => order.orderID !== row.orderID,
        );
    }

    trackByStats(index: number, stat: statModel): string {
        return stat.label;
    }

    trackByCustomers(index: number, customer: customersModel): string {
        return customer.email;
    }

    trackByOrders(index: number, order: menuModel): number {
        return order.dishId;
    }

    getStatusClass(status: ORDER_STATUS) {
        return this.statusClassMap[status];
    }
}
