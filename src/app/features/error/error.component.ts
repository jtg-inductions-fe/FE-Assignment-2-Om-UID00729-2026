import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-not-found',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);

    label = '';
    imgSrc = '';
    imgAlt = '';
    message = '';

    ngOnInit(): void {
        const routeData = this.activatedRoute.snapshot.data;
        const state = history.state;

        if (this.router.url === '/error') {
            if (!state?.isError) {
                this.router.navigate(['/dashboard']);
            }
        }

        this.label = routeData['label'];
        this.imgSrc = routeData['imgSrc'];
        this.imgAlt = routeData['imgAlt'];
        this.message = routeData['message'];
    }
}
