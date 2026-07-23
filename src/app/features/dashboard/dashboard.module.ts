import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [DashboardComponent, AutocompleteComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
    ],
    exports: [DashboardComponent],
})
export class DashboardModule {}
