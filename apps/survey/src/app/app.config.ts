import {
    ApplicationConfig,
    inject,
    LOCALE_ID,
    provideAppInitializer,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    Route,
    withHashLocation,
    withNavigationErrorHandler,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import {
    LocaleService,
    registerActiveLocale,
    reloadOnChunkLoadError,
} from '@placeos/common';
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
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(
            appRoutes,
            withHashLocation(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
        ),
        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
};
