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

import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedExploreModule } from '@placeos/explore';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as Sentry from '@sentry/angular';

import { environment } from '../environments/environment';
import { AccessibilityControlsComponent } from './accessibility-controls.component';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { DeskBookingComponent } from './desk-booking.component';
import { ExploreLevelSelectComponent } from './explore-level-select.component';
import { ExploreMapStackComponent } from './explore-map-stack.component';
import { ExploreComponent } from './explore.component';
import { FooterMenuComponent } from './footer-menu.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    InteractiveMapComponent,
    SettingsToggleComponent,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { AppComponent } from './app.component';
import { ParkingComponent } from './parking.component';

const MAT_MODULES = [
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
];

const STANDALONE_COMPONENTS = [
    AuthenticatedImageDirective,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    TranslatePipe,
    InteractiveMapComponent,
    CustomTooltipComponent,
    VirtualKeyboardComponent,
    SettingsToggleComponent,
];

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
        ParkingComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedExploreModule,
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS,
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
