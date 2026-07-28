import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '@core/services/error-handler/error-handler.service';
import { CurrencyPipe } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        CoreModule,
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService,
        },
        CurrencyPipe,
    ],
})
export class AppModule {}
