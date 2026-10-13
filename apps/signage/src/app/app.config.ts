import {
    ApplicationConfig,
    ErrorHandler,
    inject,
    LOCALE_ID,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import {
    LazySentryErrorHandler,
    LocaleService,
    registerActiveLocale,
} from '@placeos/common';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { recordFatalError } from './watchdog';

/**
 * Readable text for a thrown value. Errors are not always `Error` instances -
 * HTTP failures and API client rejections are plain objects - so any string
 * `message` is used before falling back to the value itself.
 */
function errorMessage(error: unknown): string {
    if (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof error.message === 'string' &&
        error.message
    ) {
        return error.message;
    }
    return String(error);
}

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
                const handler = new LazySentryErrorHandler();
                return {
                    handleError: (error: unknown) => {
                        recordFatalError(errorMessage(error));
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
