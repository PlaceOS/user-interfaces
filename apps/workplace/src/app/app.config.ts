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
        provideServiceWorker('ngsw-worker.js', {
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
    ],
};
