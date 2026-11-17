import {
    provideHttpClient,
    withInterceptorsFromDi,
    withXhr,
} from '@angular/common/http';
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
    TitleStrategy,
    withHashLocation,
    withNavigationErrorHandler,
    withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { onPageTransitionCreated } from './ui/page-transitions';

import {
    LazySentryErrorHandler,
    LocaleService,
    registerActiveLocale,
    reloadOnChunkLoadError,
    SettingsTitleStrategy,
} from '@placeos/common';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        provideRouter(
            routes,
            withHashLocation(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
            // Page change animations are in styles.css
            withViewTransitions({
                skipInitialTransition: true,
                onViewTransitionCreated: onPageTransitionCreated,
            }),
        ),
        {
            provide: ErrorHandler,
            useClass: LazySentryErrorHandler,
        },
        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
        { provide: TitleStrategy, useClass: SettingsTitleStrategy },
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
    ],
};
