import { Component, inject } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { SOCIAL_LINKS } from './constants/social-links';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    authService = inject(AuthService);
    isLoggedIn = this.authService.isLoggedIn();
    today = new Date();
    socialLinks = SOCIAL_LINKS;
}
