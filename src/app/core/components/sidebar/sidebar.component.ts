import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

import { sideBarModel } from './models/sidebar.model';
import { sideBarLinks } from '@assets/mock-data/sidebar';

import { trayIcons } from './constants/tray-icons';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    treeControl = new NestedTreeControl<sideBarModel>((node) => node.children);
    dataSource = new MatTreeNestedDataSource<sideBarModel>();
    authService = inject(AuthService);
    destroyRef = inject(DestroyRef);
    trayIcons = trayIcons;

    ngOnInit(): void {
        this.authService.currUser$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((user) => {
                const userRole = user?.role;

                const filteredLinks = (
                    links: sideBarModel[],
                ): sideBarModel[] => {
                    return links
                        .filter((link) => {
                            if (!link.role || link.role.length === 0) {
                                return true;
                            }
                            return !!userRole && link.role.includes(userRole);
                        })
                        .map((link) => {
                            if (link.children && Array.isArray(link.children)) {
                                return {
                                    ...link,
                                    children: filteredLinks(link.children),
                                };
                            }
                            return link;
                        });
                };

                this.dataSource.data = filteredLinks(sideBarLinks);
            });
    }

    hasChild = (_: number, node: sideBarModel) =>
        !!node.children && node.children.length > 0;

    isDivider = (_: number, node: sideBarModel) => node.type === 'divider';

    isLink = (_: number, node: sideBarModel) => node.type === 'link';
}
