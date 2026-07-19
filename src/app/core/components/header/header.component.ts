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
<<<<<<< HEAD:src/app/core/components/header/header.component.ts
<<<<<<< HEAD:src/app/core/components/header/header.component.ts
    showMenu = false;
    defaultImg = 'assets/images/default-profile-placeholder.webp';
=======
    isSidebarOpen = false;
>>>>>>> ebba2b1 ([OH_A2_04] Sidebar- basic layout and hamburger functionality):src/app/shared/components/header/header.component.ts

=======
>>>>>>> 075c512 ([OH_A2_04]Sidebar- Completed sidebar with recursive dynamic navigation):src/app/shared/components/header/header.component.ts
    logout() {
        this.authservice.logout();
        this.router.navigate([ROUTE_KEYS.LOGIN]);
    }

    @Output() sidebartoggle = new EventEmitter<void>();

    handleHamburgerClick() {
        this.sidebartoggle.emit();
    }
}
