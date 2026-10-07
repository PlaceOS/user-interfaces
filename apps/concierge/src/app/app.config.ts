import {
    provideHttpClient,
    withInterceptorsFromDi,
    withXhr,
} from '@angular/common/http';
import {
    ApplicationConfig,
    ErrorHandler,
    importProvidersFrom,
    inject,
    LOCALE_ID,
    provideAppInitializer,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    Router,
    TitleStrategy,
    withHashLocation,
    withNavigationErrorHandler,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

import * as Sentry from '@sentry/angular';

import { PLACEOS_APP_ACCESS } from '@placeos/components';

import {
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
        importProvidersFrom(MatSnackBarModule),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        provideRouter(
            routes,
            withHashLocation(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA],
            },
        },
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
        {
            provide: PLACEOS_APP_ACCESS,
            useValue: {
                // Concierge shows everyone's bookings, visitors and the staff
                // directory, so without `app.allow_access_groups` it is for
                // admin and support users only.
                default_groups: ['placeos_admin', 'placeos_support'],
            },
        },
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
    ],
};
