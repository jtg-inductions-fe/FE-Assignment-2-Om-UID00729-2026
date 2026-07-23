import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '@core/services/error-handler/error-handler.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        CoreModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService,
        },
    ],
})
export class AppModule {}
