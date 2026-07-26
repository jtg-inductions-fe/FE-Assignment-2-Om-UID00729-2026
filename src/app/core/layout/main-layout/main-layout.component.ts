import {
    Component,
    OnInit,
    inject,
    DestroyRef,
    ViewChild,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '@core/services/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
    isdesktop = true;
    isLoggedIn = false;

    observer = inject(BreakpointObserver);
    authService = inject(AuthService);

    destroyRef = inject(DestroyRef);

    @ViewChild('drawer')
    drawer!: MatDrawer;

    ngOnInit(): void {
        this.observer
            .observe('(min-width:1024px)')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                this.isdesktop = result.matches;
            });
        this.isLoggedIn = this.authService.isLoggedIn();
    }

    toggle(): void {
        if (!this.isdesktop) {
            this.drawer.toggle();
        }
    }
}
