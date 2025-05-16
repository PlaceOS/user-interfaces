import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import * as Sentry from '@sentry/angular';

import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { AlertsComponent } from './alerts.component';
import { AnalyticsComponent } from './analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RemoteSupportComponent } from './remote-support.component';
import { UiModule } from './ui/ui.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
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
        UiModule,
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
