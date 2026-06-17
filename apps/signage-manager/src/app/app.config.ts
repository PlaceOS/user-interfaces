import {
    ApplicationConfig,
    LOCALE_ID,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeZh from '@angular/common/locales/zh';
import {
    provideRouter,
    Routes,
    withComponentInputBinding,
    withHashLocation,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { LocaleService } from '@placeos/common';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { environment } from '../environments/environment';
import { signageAccessGuard } from './signage-access.guard';

registerLocaleData(localeFr);
registerLocaleData(localeAr);
registerLocaleData(localeJa);
registerLocaleData(localeZh);
registerLocaleData(localeEs);
registerLocaleData(localeIt);

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
