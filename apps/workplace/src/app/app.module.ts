import {
    ErrorHandler,
    LOCALE_ID,
    NgModule,
    provideZonelessChangeDetection,
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';

import { LocaleService } from '@placeos/common';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponentModule } from './components/shared.module';

import * as Sentry from '@sentry/angular';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSnackBarModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        SharedComponentModule,
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
