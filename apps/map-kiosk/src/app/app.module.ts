import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ComponentsModule, UnauthorisedComponent } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';
import { FormFieldsModule } from '@placeos/form-fields';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { BootstrapComponent } from './bootstrap.component';
import { ExploreComponent } from './explore.component';
import { ExploreLevelSelectComponent } from './explore-level-select.component';
import { ExploreMapStackComponent } from './explore-map-stack.component';
import { FooterMenuComponent } from './footer-menu.component';
import { DeskBookingComponent } from './desk-booking.component';

import * as Sentry from '@sentry/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PaymentsModule } from '@placeos/payments';
import { AssetsModule } from '@placeos/assets';

@NgModule({
    declarations: [
        AppComponent,
        UnauthorisedComponent,
        BootstrapComponent,
        ExploreComponent,
        ExploreLevelSelectComponent,
        ExploreMapStackComponent,
        DeskBookingComponent,
        FooterMenuComponent,
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
        MatRippleModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        ComponentsModule,
        FormFieldsModule,
        SharedExploreModule,
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
