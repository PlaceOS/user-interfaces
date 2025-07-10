import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import * as Sentry from '@sentry/angular';

import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { AlertsComponent } from './alerts.component';
import { AnalyticsComponent } from './analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { RemoteSupportComponent } from './remote-support.component';
import { UiModule } from './ui/ui.module';

@NgModule({
    declarations: [
        AppComponent,
        AlertsComponent,
        RemoteSupportComponent,
        AnalyticsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatMenuModule,
        UiModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [
        provideZonelessChangeDetection(),
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
