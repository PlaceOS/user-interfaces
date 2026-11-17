import {
    ApplicationConfig,
    ErrorHandler,
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
    reloadOnChunkLoadError,
} from '@placeos/common';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { onPageTransitionCreated } from './page-transitions';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
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
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        {
            provide: ErrorHandler,
            useClass: LazySentryErrorHandler,
        },
    ],
};
