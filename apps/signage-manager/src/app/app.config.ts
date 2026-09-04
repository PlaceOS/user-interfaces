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
    Routes,
    withComponentInputBinding,
    withHashLocation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { LocaleService, registerActiveLocale } from '@placeos/common';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { environment } from '../environments/environment';
import { signageAccessGuard } from './signage-access.guard';
import { templatesEnabledGuard } from './templates-enabled.guard';

const APP_ROUTES: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: '',
        canActivate: [AuthorisedUserGuard],
        canActivateChild: [AuthorisedUserGuard, signageAccessGuard],
        children: [
            {
                path: 'media',
                loadComponent: () =>
                    import('./media/media.component').then(
                        (m) => m.MediaSectionComponent,
                    ),
            },
            {
                path: 'playlists/:id',
                loadComponent: () =>
                    import('./playlists/playlists.component').then(
                        (m) => m.PlaylistsSectionComponent,
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
                path: 'templates/:id',
                canActivate: [templatesEnabledGuard],
                loadComponent: () =>
                    import('./templates/templates.component').then(
                        (m) => m.TemplatesSectionComponent,
                    ),
            },
            {
                path: 'templates',
                canActivate: [templatesEnabledGuard],
                loadComponent: () =>
                    import('./templates/templates.component').then(
                        (m) => m.TemplatesSectionComponent,
                    ),
            },
            {
                path: 'schedules',
                loadComponent: () =>
                    import('./schedules/schedules.component').then(
                        (m) => m.SchedulesSectionComponent,
                    ),
            },
            {
                path: 'displays/:id',
                loadComponent: () =>
                    import('./displays/displays.component').then(
                        (m) => m.DisplaysSectionComponent,
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
                path: 'groups',
                loadComponent: () =>
                    import('./groups/groups.component').then(
                        (m) => m.GroupsSectionComponent,
                    ),
            },
            {
                path: 'zones/:id',
                loadComponent: () =>
                    import('./zones/zones.component').then(
                        (m) => m.ZonesSectionComponent,
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
        ],
    },
];

export const APP_CONFIG: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: environment.production,
        }),
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(APP_ROUTES, withHashLocation(), withComponentInputBinding()),
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
