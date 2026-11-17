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
    withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import {
    LazySentryErrorHandler,
    LocaleService,
    registerActiveLocale,
    reloadOnChunkLoadError,
} from '@placeos/common';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { onPageTransitionCreated } from './page-transitions';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(
            routes,
            withHashLocation(),
            withNavigationErrorHandler((error) =>
                reloadOnChunkLoadError(error.error),
            ),
            withViewTransitions({
                skipInitialTransition: true,
                onViewTransitionCreated: onPageTransitionCreated,
            }),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        {
            provide: ErrorHandler,
            useClass: LazySentryErrorHandler,
        },
        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
};
