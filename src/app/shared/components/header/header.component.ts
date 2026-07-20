import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/service/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    authservice = inject(AuthService);
    router = inject(Router);
    showMenu = false;

    logout() {
        this.authservice.logout();
        this.router.navigate(['/auth/login']);
    }
}
