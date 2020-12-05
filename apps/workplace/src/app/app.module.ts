import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';

import '@user-interfaces/mocks';

import { UnauthorisedComponent } from '@user-interfaces/components';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedContentModule } from './ui/shared.module';

import * as Sentry from "@sentry/angular";

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        FormsModule,
        SharedOverlaysModule,
        SharedContentModule,
        MatNativeDateModule,
        MatSnackBarModule,
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
    bootstrap: [AppComponent]
})
export class AppModule { }
