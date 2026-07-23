import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';

@NgModule({
    declarations: [AppLayoutComponent],
    imports: [CommonModule, SharedModule, RouterModule, CoreModule],
    exports: [AppLayoutComponent],
})
export class LayoutModule {}
