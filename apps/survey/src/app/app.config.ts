import {
    ApplicationConfig,
    ErrorHandler,
    LOCALE_ID,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    Route,
    Router,
    withHashLocation,
} from '@angular/router';
import { LocaleService } from '@placeos/common';

import { NotFoundComponent } from './not-found.component';
import { SurveyComponent } from './survey.component';

import { provideServiceWorker } from '@angular/service-worker';
import * as Sentry from '@sentry/angular';
import { environment } from '../environments/environment';

export const appRoutes: Route[] = [
    {
        path: 'not-found',
        component: NotFoundComponent,
        pathMatch: 'full',
    },
    {
        path: ':id',
        component: SurveyComponent,
        pathMatch: 'full',
    },
    {
        path: 'survey/:id',
        component: SurveyComponent,
        pathMatch: 'full',
    },
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        provideRouter(appRoutes, withHashLocation()),
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
    ],
};
