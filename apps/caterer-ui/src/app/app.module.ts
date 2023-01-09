import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

import { SharedCateringModule } from '@placeos/catering';
import { ComponentsModule, UnauthorisedComponent } from '@placeos/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { CateringComponent } from './catering.component';
import { CateringTopbarComponent } from './catering-topbar.component';

import * as Sentry from '@sentry/angular';
import { MatRippleModule } from '@angular/material/core';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent,
        CateringComponent,
        CateringTopbarComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatChipsModule,
        SharedCateringModule,
        ComponentsModule,
        MatRippleModule,
        PaymentsModule,
        AssetsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
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
export class AppModule {}
