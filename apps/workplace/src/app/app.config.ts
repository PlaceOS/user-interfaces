import {
    ApplicationConfig,
    ErrorHandler,
    LOCALE_ID,
    inject,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    TitleStrategy,
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
    withRouterConfig,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    LazySentryErrorHandler,
    LocaleService,
    SettingsTitleStrategy,
    registerActiveLocale,
    reloadOnChunkLoadError,
} from '@placeos/common';
import { PAYMENT_CHECKOUT } from '@placeos/payments';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(
            routes,
            withHashLocation(),
            withRouterConfig({ paramsInheritanceStrategy: 'always' }),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        // Wraps ngsw-worker.js so video and audio skip it, see the script
        provideServiceWorker('service-worker.js', {
            enabled: environment.production && environment.service_worker,
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
        { provide: TitleStrategy, useClass: SettingsTitleStrategy },
        // Users book for themselves here, so new bookings take a payment
        { provide: PAYMENT_CHECKOUT, useValue: true },
    ],
};
