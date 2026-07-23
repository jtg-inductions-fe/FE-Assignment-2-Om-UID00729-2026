import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
    declarations: [
        ButtonComponent,
        CardContainerComponent,
        ItemCardComponent,
        StatCardComponent,
        HeadingComponent,
    ],
    imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
    exports: [
        ButtonComponent,
        CardContainerComponent,
        ItemCardComponent,
        StatCardComponent,
        HeadingComponent,
    ],
})
export class SharedModule {}
