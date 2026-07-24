import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsListComponent } from './pages/restaurants-list/restaurants-list.component';
import { RestaurantFormComponent } from './pages/restaurant-form/restaurant-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormComponent } from './components/form/form.component';

import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        RestaurantsListComponent,
        RestaurantFormComponent,
        FormComponent,
    ],
    imports: [
        CommonModule,
        CdkTableModule,
        RestaurantsRoutingModule,
        SharedModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [RestaurantsListComponent],
})
export class RestaurantsModule {}
