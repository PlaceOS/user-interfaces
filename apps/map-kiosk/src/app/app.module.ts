import {
    ErrorHandler,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

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

import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { AppComponent } from './app.component';
import { ParkingComponent } from './parking.component';

const STANDALONE_COMPONENTS = [
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
    BootstrapComponent,
    ExploreComponent,
    ExploreLevelSelectComponent,
    ExploreMapStackComponent,
    DeskBookingComponent,
    FooterMenuComponent,
    AccessibilityControlsComponent,
    ParkingComponent,
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
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
