import {
    ApplicationConfig,
    LOCALE_ID,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { LocaleService } from '@placeos/common';
import { UnauthorisedComponent } from '@placeos/components';
import { environment } from '../environments/environment';

const APP_ROUTES: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: 'media',
        loadComponent: () =>
            import('./media/media.component').then(
                (m) => m.MediaSectionComponent,
            ),
    },
    {
        path: 'playlists',
        loadComponent: () =>
            import('./playlists/playlists.component').then(
                (m) => m.PlaylistsSectionComponent,
            ),
    },
    {
        path: 'displays',
        loadComponent: () =>
            import('./displays/displays.component').then(
                (m) => m.DisplaysSectionComponent,
            ),
    },
    {
        path: 'zones',
        loadComponent: () =>
            import('./zones/zones.component').then(
                (m) => m.ZonesSectionComponent,
            ),
    },

    { path: '**', redirectTo: 'media' },
];

export const APP_CONFIG: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        provideZonelessChangeDetection(),
        provideRouter(APP_ROUTES, withHashLocation()),
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
