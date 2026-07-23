import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { ROUTE_KEYS } from '@core/constants/routes-keys';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    authservice = inject(AuthService);
    router = inject(Router);
    showMenu = false;
    defaultImg = 'assets/images/default-profile-placeholder.webp';

    logout() {
        this.authservice.logout();
        this.router.navigate([ROUTE_KEYS.LOGIN]);
    }
}
