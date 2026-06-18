import {
    ApplicationConfig,
    ErrorHandler,
    LOCALE_ID,
    importProvidersFrom,
    inject,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    Router,
    TitleStrategy,
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
    withRouterConfig,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    LocaleService,
    registerActiveLocale,
    SettingsTitleStrategy,
    reloadOnChunkLoadError,
} from '@placeos/common';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

import * as Sentry from '@sentry/angular';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideAnimations(),
        provideRouter(
            routes,
            withHashLocation(),
            withRouterConfig({ paramsInheritanceStrategy: 'always' }),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        importProvidersFrom(MatSnackBarModule),
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
        { provide: TitleStrategy, useClass: SettingsTitleStrategy },
    ],
};
