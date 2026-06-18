import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import {
    ApplicationConfig,
    ErrorHandler,
    LOCALE_ID,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Router, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import * as Sentry from '@sentry/angular';

import { LocaleService } from '@placeos/common';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

registerLocaleData(localeFr);
registerLocaleData(localeAr);
registerLocaleData(localeJa);
registerLocaleData(localeZh);
registerLocaleData(localeEs);
registerLocaleData(localeIt);

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production && environment.service_worker,
        }),
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
};
