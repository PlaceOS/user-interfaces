import {
    ApplicationConfig,
    ErrorHandler,
    inject,
    LOCALE_ID,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import {
    errorMessage,
    LazySentryErrorHandler,
    LocaleService,
    registerActiveLocale,
    reloadOnChunkLoadError,
} from '@placeos/common';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { recordFatalError } from './watchdog';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(
            routes,
            withHashLocation(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        {
            // Angular handles errors before they reach `window.onerror`, so
            // the recovery watchdog is told about them here as well.
            provide: ErrorHandler,
            useFactory: () => {
                const handler = new LazySentryErrorHandler();
                return {
                    handleError: (error: unknown) => {
                        recordFatalError(errorMessage(error) || String(error));
                        handler.handleError(error);
                    },
                };
            },
        },

        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
};
