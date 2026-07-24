import {
    AfterViewInit,
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { restaurantKeys } from '@assets/mock-data/restaurantColumns';
import { mockUsers } from '@assets/mock-data/users';

@Component({
    selector: 'app-restaurants-list',
    templateUrl: './restaurants-list.component.html',
    styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements AfterViewInit, OnInit {
    restaurantList = mockUsers.filter((user) => user.role !== 'admin');
    restaurantColumns = restaurantKeys;
    templates: Record<string, TemplateRef<unknown>> = {};

    @ViewChild('chipTemplate') chipTemplate!: TemplateRef<unknown>;
    @ViewChild('buttonTemplate') buttonTemplate!: TemplateRef<unknown>;

    ngOnInit() {
        console.log(this.restaurantList);
    }

    ngAfterViewInit(): void {
        this.templates = {
            owners: this.chipTemplate,
            actions: this.buttonTemplate,
        };
        console.log(this.templates);
    }
}
