import { Component, Output, inject, EventEmitter } from '@angular/core';
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
    isSidebarOpen = false;

    logout() {
        this.authservice.logout();
        this.router.navigate([ROUTE_KEYS.LOGIN]);
    }

    @Output() sidebartoggle = new EventEmitter<void>();

    handleHamburgerClick() {
        this.sidebartoggle.emit();
    }
}
