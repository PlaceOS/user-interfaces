import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ComponentsModule } from '@placeos/components';
import { SharedExploreModule } from '@placeos/explore';
import { FormFieldsModule } from '@placeos/form-fields';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AssetsModule } from '@placeos/assets';
import { SharedBookingsModule } from '@placeos/bookings';
import * as Sentry from '@sentry/angular';

import { AppComponent } from 'libs/components/src/lib/app.component';
import { environment } from '../environments/environment';
import { AccessibilityControlsComponent } from './accessibility-controls.component';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { DeskBookingComponent } from './desk-booking.component';
import { ExploreLevelSelectComponent } from './explore-level-select.component';
import { ExploreMapStackComponent } from './explore-map-stack.component';
import { ExploreComponent } from './explore.component';
import { FooterMenuComponent } from './footer-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        BootstrapComponent,
        ExploreComponent,
        ExploreLevelSelectComponent,
        ExploreMapStackComponent,
        DeskBookingComponent,
        FooterMenuComponent,
        AccessibilityControlsComponent,
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
        SharedBookingsModule,
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
