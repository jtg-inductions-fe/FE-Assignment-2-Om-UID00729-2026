import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule,
    ],
    exports: [LoginComponent],
})
export class AuthModule {}
