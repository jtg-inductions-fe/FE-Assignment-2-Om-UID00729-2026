import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [ButtonComponent, HeaderComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
    ],
    exports: [ButtonComponent, HeaderComponent],
})
export class SharedModule {}
