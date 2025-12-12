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

import * as Sentry from '@sentry/angular';

import { AppComponent } from './app/app.component';
import { BootstrapComponent } from './app/bootstrap.component';
import { ControlMainViewComponent } from './app/main-view.component';
import { ControlTabbedViewComponent } from './app/tabbed-view/tabbed-view.component';
import { ControlVideoCallViewComponent } from './app/video-call/video-call-view.component';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const routes = [
    {
        path: 'bootstrap',
        component: BootstrapComponent,
    },
    {
        path: 'panel/:system',
        component: ControlMainViewComponent,
    },
    {
        path: 'tabbed/:system',
        component: ControlTabbedViewComponent,
    },
    {
        path: 'tabbed/:system/:tab',
        component: ControlTabbedViewComponent,
    },
    {
        path: 'panel/:system/call',
        component: ControlVideoCallViewComponent,
    },
    { path: '**', redirectTo: 'bootstrap' },
];

bootstrapApplication(AppComponent, {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter(routes, withHashLocation()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
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
