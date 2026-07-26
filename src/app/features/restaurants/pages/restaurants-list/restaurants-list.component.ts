import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { mockUsers } from '@assets/mock-data/users';
import { ROUTE_KEYS } from '@core/constants/routes-keys';
import { restaurantKeys } from '@assets/mock-data/restaurantColumns';
import { ROLES } from '@core/constants/role';

@Component({
    selector: 'app-restaurants-list',
    templateUrl: './restaurants-list.component.html',
    styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements OnInit {
    routeKeys = ROUTE_KEYS;
    restaurantList = mockUsers.filter((user) => user.role !== ROLES.ADMIN);
    restaurantColumns = restaurantKeys;
    templates: Record<string, TemplateRef<unknown>> = {};

    @ViewChild('chipTemplate', { static: true })
    chipTemplate!: TemplateRef<unknown>;
    @ViewChild('buttonTemplate', { static: true })
    buttonTemplate!: TemplateRef<unknown>;

    ngOnInit() {
        this.templates = {
            owners: this.chipTemplate,
            actions: this.buttonTemplate,
        };
    }

    trackByOwners(index: number, owner: string): string {
        return owner;
    }
}
