import { Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from '@core/service/auth/auth.service';

@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
    authService = inject(AuthService);
    isAdmin!: boolean;

    @Input() label = '';
    @Input() subtitle = '';
    @Input() imageUrl = '';
    @Input() value: string | undefined = '';

    ngOnInit(): void {
        this.isAdmin = this.authService.getRole() === 'admin';
    }
}
