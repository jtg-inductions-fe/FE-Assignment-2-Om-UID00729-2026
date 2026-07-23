import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

import { sideBarModel } from '@core/models/sidebar.model';
import { sideBarLinks } from '@assets/mock-data/sidebar';

import { MatDrawer } from '@angular/material/sidenav';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    observer = inject(BreakpointObserver);
    authService = inject(AuthService);

    treeControl = new NestedTreeControl<sideBarModel>((node) => node.children);
    RoleLinksDataSource = new MatTreeNestedDataSource<sideBarModel>();
    CommonLinksDataSource = new MatTreeNestedDataSource<sideBarModel>();

    isdesktop = true;
    sidebarData: sideBarModel[] = [];

    @ViewChild('drawer')
    drawer!: MatDrawer;

    ngOnInit(): void {
        this.authService.currUser$.subscribe((user) => {
            const userRole = user?.role;

            this.sidebarData = sideBarLinks.filter((link) => {
                if (userRole) {
                    return !link.role || link.role.includes(userRole);
                }
                return false;
            });
            const commonData = this.sidebarData.filter((data) => data.common);
            this.CommonLinksDataSource.data = commonData;

            const roleData = this.sidebarData.filter((data) => !data.common);
            this.RoleLinksDataSource.data = roleData;
        });

        this.observer.observe('(min-width:1024px)').subscribe((result) => {
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
}
