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

/** Survey view is lazy so its form and Material controls stay out of main */
const loadSurvey = () =>
    import('./survey.component').then((m) => m.SurveyComponent);

const appRoutes: Route[] = [
    {
        path: 'not-found',
        component: NotFoundComponent,
        pathMatch: 'full',
    },
    {
        path: ':id',
        loadComponent: loadSurvey,
        pathMatch: 'full',
    },
    {
        path: 'survey/:id',
        loadComponent: loadSurvey,
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
        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
};
