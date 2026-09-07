import {
    enableProdMode,
    ErrorHandler,
    isDevMode,
    provideZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Router, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import * as Sentry from '@sentry/angular';

import { AppComponent } from './app/app.component';
import { BootstrapComponent } from './app/bootstrap.component';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'panel/:system',
        loadComponent: () =>
            import('./app/main-view.component').then(
                (m) => m.ControlMainViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'tabbed/:system',
        loadComponent: () =>
            import('./app/tabbed-view/tabbed-view.component').then(
                (m) => m.ControlTabbedViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'tabbed/:system/:tab',
        loadComponent: () =>
            import('./app/tabbed-view/tabbed-view.component').then(
                (m) => m.ControlTabbedViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'panel/:system/call',
        loadComponent: () =>
            import('./app/video-call/video-call-view.component').then(
                (m) => m.ControlVideoCallViewComponent,
            ),
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];

bootstrapApplication(AppComponent, {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode() && environment.service_worker,
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
}).catch((err) => console.error(err));
