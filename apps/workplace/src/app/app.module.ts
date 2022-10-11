import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';

import {
    MisconfiguredComponent,
    UnauthorisedComponent,
} from '@placeos/components';
import { AppComponent } from 'libs/components/src/lib/app.component';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';

import * as Sentry from '@sentry/angular';

import { SharedComponentModule } from './components/shared.module';
import { SharedBookingsModule } from '@placeos/bookings';

@NgModule({
    declarations: [AppComponent, UnauthorisedComponent, MisconfiguredComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        HttpClientModule,
        FormsModule,
        SharedOverlaysModule,
        SharedComponentModule,
        MatNativeDateModule,
        MatSnackBarModule,
        SharedBookingsModule,
    ],
    providers: [
        {
            provide: ErrorHandler,
            useValue: Sentry.createErrorHandler({
                showDialog: false,
            }),
        },
        {
            provide: Sentry.TraceService,
            deps: [Router],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    
}
