import {
    provideHttpClient,
    withInterceptorsFromDi,
    withXhr,
} from '@angular/common/http';
import {
    ApplicationConfig,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { reloadOnChunkLoadError } from '@placeos/common';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideRouter(
            routes,
            withHashLocation(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
};
