import {
    ApplicationConfig,
    ErrorHandler,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    LazySentryErrorHandler,
    reloadOnChunkLoadError,
} from '@placeos/common';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(
            routes,
            withHashLocation(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        {
            provide: ErrorHandler,
            useClass: LazySentryErrorHandler,
        },
    ],
};
