import { Component, Input, inject } from '@angular/core';
import { AuthService } from '@core/service/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    authService = inject(AuthService);

    @Input() isSidebarOpen = true;
}
