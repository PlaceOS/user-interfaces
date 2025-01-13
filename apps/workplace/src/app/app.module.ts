import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    inject,
    provideAppInitializer,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from 'libs/components/src/lib/app.component';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SharedOverlaysModule } from './overlays/overlays.module';

import * as Sentry from '@sentry/angular';

import { SharedComponentModule } from './components/shared.module';
import { SharedBookingsModule } from '@placeos/bookings';

import localeFr from '@angular/common/locales/fr';
import localeJa from '@angular/common/locales/ja';
import localeAr from '@angular/common/locales/ar';
import localeZh from '@angular/common/locales/zh';
import localeEs from '@angular/common/locales/es';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from '@placeos/common';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
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

        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
})
export class AppModule {
    constructor() {
        registerLocaleData(localeFr);
        registerLocaleData(localeAr);
        registerLocaleData(localeJa);
        registerLocaleData(localeZh);
        registerLocaleData(localeEs);
        registerLocaleData(localeIt);
    }
}
