import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class AppLayoutComponent {
    isSideBarOpen = false;
    observer = inject(BreakpointObserver);
    isdesktop = this.observer.isMatched('(min-width:1024px)');

    handleHamburgerClick(isSideBarOpen: boolean) {
        this.isSideBarOpen = isSideBarOpen;
    }
}
