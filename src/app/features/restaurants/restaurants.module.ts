import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsListComponent } from './pages/restaurants-list/restaurants-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [RestaurantsListComponent],
    imports: [
        CommonModule,
        RestaurantsRoutingModule,
        CdkTableModule,
        MatChipsModule,
        SharedModule,
    ],
    exports: [RestaurantsListComponent],
})
export class RestaurantsModule {}
