import { Component, OnInit, inject } from '@angular/core';
import { IconRegistryService } from '@core/services/icon-registry/icon-registry.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'Assignment-2';
    iconRegistryService = inject(IconRegistryService);

    ngOnInit(): void {
        this.iconRegistryService.registerIcons();
    }
}
