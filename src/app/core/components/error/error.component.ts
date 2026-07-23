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

    label = '';
    imgSrc = '';
    imgAlt = '';
    message = '';

    ngOnInit(): void {
        let routeData = errorData['Not-Found'];
        const state = history.state;

        if (this.router.url === '/error') {
            if (!state?.isError) {
                this.router.navigate(['/dashboard']);
                return;
            } else {
                routeData = errorData['Internal Error'];
            }
        }

        this.label = routeData['label'];
        this.imgSrc = routeData['imgSrc'];
        this.imgAlt = routeData['imgAlt'];
        this.message = routeData['message'];
    }
}
