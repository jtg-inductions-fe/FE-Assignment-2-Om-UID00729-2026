import { Component, Output, inject, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { ROUTE_KEYS } from '@core/constants/routes-keys';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    authservice = inject(AuthService);
    router = inject(Router);
    showMenu = false;
    defaultImg = 'assets/images/default-profile-placeholder.webp';
    isSidebarOpen = false;
    isLoggedIn = this.authservice.isLoggedIn();
    destroyRef = inject(DestroyRef);

    isdesktop = true;

    observer = inject(BreakpointObserver);

    ngOnInit(): void {
        this.observer
            .observe('(min-width:1024px)')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                this.isdesktop = result.matches;
            });
    }

    logout() {
        this.authservice.logout();
        this.router.navigate([ROUTE_KEYS.LOGIN]);
    }

    @Output() sidebartoggle = new EventEmitter<void>();

    handleHamburgerClick() {
        this.sidebartoggle.emit();
    }
}
