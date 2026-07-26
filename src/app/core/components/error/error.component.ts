import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { errorData } from '@assets/mock-data/errorData';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

@Component({
    selector: 'app-not-found',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);
    routes = ROUTE_KEYS;
    routeData = errorData['Not-Found'];
    state = this.router.getCurrentNavigation()?.extras.state;

    ngOnInit(): void {
        if (this.router.url === ROUTE_KEYS.ERROR) {
            if (!this.state?.['isError']) {
                this.router.navigate([ROUTE_KEYS.DASHBOARD]);
                return;
            } else {
                this.routeData = errorData['Internal Error'];
            }
        }
    }
}
