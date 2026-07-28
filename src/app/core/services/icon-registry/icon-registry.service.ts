import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICON_LABEL } from './constants/icon-label';

@Injectable({
    providedIn: 'root',
})
export class IconRegistryService {
    iconRegistry = inject(MatIconRegistry);
    sanitizer = inject(DomSanitizer);

    registerIcons() {
        ICON_LABEL.forEach((icon) => {
            this.iconRegistry.addSvgIcon(
                icon,
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    `assets/icons/${icon}.svg`,
                ),
            );
        });
    }
}
