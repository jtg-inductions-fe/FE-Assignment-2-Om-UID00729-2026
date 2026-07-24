import { BreakpointObserver } from '@angular/cdk/layout';
import {
    Component,
    inject,
    ViewChild,
    OnInit,
    DestroyRef,
} from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

import { sideBarModel } from './models/sidebar.model';
import { sideBarLinks } from '@assets/mock-data/sidebar';

import { MatDrawer } from '@angular/material/sidenav';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    observer = inject(BreakpointObserver);
    authService = inject(AuthService);

    destroyRef = inject(DestroyRef);

    treeControl = new NestedTreeControl<sideBarModel>((node) => node.children);
    RoleLinksDataSource = new MatTreeNestedDataSource<sideBarModel>();
    CommonLinksDataSource = new MatTreeNestedDataSource<sideBarModel>();

    isdesktop = true;
    dataSource: sideBarModel[] = [];

    @ViewChild('drawer')
    drawer!: MatDrawer;

    ngOnInit(): void {
        this.authService.currUser$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((user) => {
                const userRole = user?.role;

                const sidebarData = sideBarLinks.filter((link) => {
                    if (userRole) {
                        return !link.role || link.role.includes(userRole);
                    }
                    return false;
                });
                this.dataSource = sidebarData;
            });

        this.observer
            .observe('(min-width:1024px)')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
                this.isdesktop = result.matches;
            });
    }

    toggle(): void {
        if (!this.isdesktop) {
            this.drawer.toggle();
        }
    }

    hasChild = (_: number, node: sideBarModel) =>
        !!node.children && node.children.length > 0;

    isDivider = (_: number, node: sideBarModel) => node.type === 'Divider';

    isLink = (_: number, node: sideBarModel) => node.type === 'Link';
}
