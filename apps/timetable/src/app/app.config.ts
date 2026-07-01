import {
    ApplicationConfig,
    ErrorHandler,
    importProvidersFrom,
    provideZonelessChangeDetection,
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    Router,
    Routes,
    withHashLocation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

import * as Sentry from '@sentry/angular';

import { environment } from '../environments/environment';
import { AppTimetableComponent } from './timetable.component';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: '',
        component: AppTimetableComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        importProvidersFrom(MatSnackBarModule),
        provideRouter(routes, withHashLocation()),
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
