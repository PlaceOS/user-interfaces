import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ComponentsModule, UnauthorisedComponent } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../../../../libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { BootstrapComponent } from './bootstrap.component';
import { ExploreComponent } from './explore.component';

import '@placeos/mocks';

import * as Sentry from '@sentry/angular';
import { ExploreLevelSelectComponent } from './explore-level-select.component';
import { ExploreMapStackComponent } from './explore-map-stack.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent,
        BootstrapComponent,
        ExploreComponent,
        ExploreLevelSelectComponent,
        ExploreMapStackComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        ComponentsModule,
        SharedExploreModule,
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
