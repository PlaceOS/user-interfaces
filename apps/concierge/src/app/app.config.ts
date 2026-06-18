import {
    provideHttpClient,
    withInterceptorsFromDi,
    withXhr,
} from '@angular/common/http';
import {
    ApplicationConfig,
    ErrorHandler,
    importProvidersFrom,
    LOCALE_ID,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
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

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import {
    LocaleService,
    reloadOnChunkLoadError,
    SettingsTitleStrategy,
} from '@placeos/common';

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
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
    ],
};
