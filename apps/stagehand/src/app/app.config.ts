import {
    ApplicationConfig,
    ErrorHandler,
    importProvidersFrom,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Router, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import * as Sentry from '@sentry/angular';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes, withHashLocation()),
        importProvidersFrom(MatSnackBarModule),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
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
    ],
};
