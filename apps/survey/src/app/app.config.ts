import {
    ApplicationConfig,
    LOCALE_ID,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Route, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { LocaleService } from '@placeos/common';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found.component';
import { SurveyComponent } from './survey.component';

// import * as Sentry from '@sentry/angular';

const appRoutes: Route[] = [
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
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        provideZonelessChangeDetection(),
        provideRouter(appRoutes, withHashLocation()),
        // {
        //     provide: ErrorHandler,
        //     useValue: Sentry.createErrorHandler({
        //         showDialog: false,
        //     }),
        // },
        // {
        //     provide: Sentry.TraceService,
        //     deps: [Router],
        // },

        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
};
