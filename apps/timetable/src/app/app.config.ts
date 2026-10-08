import {
    ApplicationConfig,
    ErrorHandler,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

import { LazySentryErrorHandler } from '@placeos/common';
import { environment } from '../environments/environment';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: '',
        loadComponent: () =>
            import('./timetable.component').then(
                (m) => m.AppTimetableComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        {
            provide: ErrorHandler,
            useClass: LazySentryErrorHandler,
        },
    ],
};
