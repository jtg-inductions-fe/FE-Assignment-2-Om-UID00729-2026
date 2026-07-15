import { Component, inject } from '@angular/core';
import { AuthService } from '@core/service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    authservice = inject(AuthService);
}
