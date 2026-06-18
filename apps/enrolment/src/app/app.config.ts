import {
    ApplicationConfig,
    ErrorHandler,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    Router,
    Routes,
    withEnabledBlockingInitialNavigation,
    withHashLocation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import * as Sentry from '@sentry/angular';

import { environment } from '../environments/environment';
import { EnrolmentComponent } from './enrolment.component';

const routes: Routes = [
    { path: '', component: EnrolmentComponent },
    { path: ':view', component: EnrolmentComponent },
    { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter(
            routes,
            withHashLocation(),
            withEnabledBlockingInitialNavigation(),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
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
