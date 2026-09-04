import {
    ApplicationConfig,
    ErrorHandler,
    inject,
    LOCALE_ID,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Router, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { LocaleService, registerActiveLocale } from '@placeos/common';
import * as Sentry from '@sentry/angular';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { recordFatalError } from './watchdog';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        {
            // Angular handles errors before they reach `window.onerror`, so
            // the recovery watchdog is told about them here as well.
            provide: ErrorHandler,
            useFactory: () => {
                const handler = Sentry.createErrorHandler({
                    showDialog: false,
                });
                return {
                    handleError: (error: any) => {
                        recordFatalError(error?.message || error);
                        handler.handleError(error);
                    },
                };
            },
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
