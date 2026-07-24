import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatToolbarModule,
    ],
    exports: [HeaderComponent],
})
export class CoreModule {}
