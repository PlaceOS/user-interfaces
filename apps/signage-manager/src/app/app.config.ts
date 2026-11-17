import {
    ApplicationConfig,
    ErrorHandler,
    inject,
    Injectable,
    LOCALE_ID,
    provideAppInitializer,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
    provideRouter,
    RouterStateSnapshot,
    Routes,
    TitleStrategy,
    UrlMatcher,
    withComponentInputBinding,
    withHashLocation,
    withNavigationErrorHandler,
    withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import {
    i18n,
    LazySentryErrorHandler,
    LocaleService,
    registerActiveLocale,
    reloadOnChunkLoadError,
} from '@placeos/common';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { environment } from '../environments/environment';
import { onViewTransitionCreated } from './shared/view-transitions';
import { manageGroupsGuard, signageAccessGuard } from './signage-access.guard';
import { templatesEnabledGuard } from './templates-enabled.guard';
import { templateUnsavedGuard } from './templates/template-unsaved.guard';

/** Name of the app, shown after the page name in the browser title */
const APP_NAME = 'Signage Manager';

/**
 * Sets the browser title from the route `title`, which is a translation key,
 * for example "Media - Signage Manager". A route without a title shows only
 * the app name.
 */
@Injectable({ providedIn: 'root' })
class SignageTitleStrategy extends TitleStrategy {
    private readonly _title = inject(Title);
    private readonly _locale = inject(LocaleService);

    public override async updateTitle(snapshot: RouterStateSnapshot) {
        const key = this.buildTitle(snapshot);
        if (!key) {
            this._title.setTitle(APP_NAME);
            return;
        }
        // Before the translations load, i18n returns the key
        await this._locale.loaded();
        this._title.setTitle(`${i18n(key)} - ${APP_NAME}`);
    }
}

/**
 * Matches `<path>` and `<path>/<id>` with one route, so that the section stays
 * open when users open or close an item. The section then changes its
 * selection while the route transition runs, not before it.
 */
function listOrItem(path: string): UrlMatcher {
    return (segments) => {
        if (segments[0]?.path !== path || segments.length > 2) return null;
        const id = segments[1];
        return { consumed: segments, posParams: id ? { id } : {} };
    };
}

const APP_ROUTES: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
        data: { nav: false },
    },
    {
        path: '',
        canActivate: [AuthorisedUserGuard],
        canActivateChild: [AuthorisedUserGuard, signageAccessGuard],
        children: [
            {
                path: 'media',
                title: 'SIGNAGE_MANAGER.NAV_MEDIA',
                loadComponent: () =>
                    import('./media/media.component').then(
                        (m) => m.MediaSectionComponent,
                    ),
            },
            {
                matcher: listOrItem('playlists'),
                title: 'SIGNAGE_MANAGER.NAV_PLAYLISTS',
                loadComponent: () =>
                    import('./playlists/playlists.component').then(
                        (m) => m.PlaylistsSectionComponent,
                    ),
            },
            {
                path: 'templates/:id',
                canActivate: [templatesEnabledGuard],
                canDeactivate: [templateUnsavedGuard],
                title: 'SIGNAGE_MANAGER.NAV_TEMPLATES',
                loadComponent: () =>
                    import('./templates/templates.component').then(
                        (m) => m.TemplatesSectionComponent,
                    ),
            },
            {
                path: 'templates',
                canActivate: [templatesEnabledGuard],
                title: 'SIGNAGE_MANAGER.NAV_TEMPLATES',
                loadComponent: () =>
                    import('./templates/templates.component').then(
                        (m) => m.TemplatesSectionComponent,
                    ),
            },
            {
                path: 'schedules',
                title: 'SIGNAGE_MANAGER.NAV_SCHEDULES',
                loadComponent: () =>
                    import('./schedules/schedules.component').then(
                        (m) => m.SchedulesSectionComponent,
                    ),
            },
            {
                matcher: listOrItem('displays'),
                title: 'SIGNAGE_MANAGER.NAV_DISPLAYS',
                loadComponent: () =>
                    import('./displays/displays.component').then(
                        (m) => m.DisplaysSectionComponent,
                    ),
            },
            {
                path: 'manage',
                title: 'SIGNAGE_MANAGER.NAV_MANAGE',
                loadComponent: () =>
                    import('./manage/manage.component').then(
                        (m) => m.ManageSectionComponent,
                    ),
                children: [
                    { path: '', pathMatch: 'full', redirectTo: 'report' },
                    {
                        path: 'report',
                        title: 'SIGNAGE_MANAGER.NAV_REPORT',
                        loadComponent: () =>
                            import('./report/content-report.component').then(
                                (m) => m.ContentReportComponent,
                            ),
                    },
                    {
                        path: 'branding',
                        title: 'SIGNAGE_MANAGER.NAV_BRANDING',
                        loadComponent: () =>
                            import('./branding/branding.component').then(
                                (m) => m.BrandingComponent,
                            ),
                    },
                ],
            },
            {
                path: 'remote-setup',
                data: { nav: false },
                loadComponent: () =>
                    import('./remote-setup/remote-setup.component').then(
                        (m) => m.RemoteSetupComponent,
                    ),
            },
            // Old addresses of the pages now under Manage
            { path: 'report', redirectTo: 'manage/report' },
            { path: 'branding', redirectTo: 'manage/branding' },
            {
                path: 'groups',
                canActivate: [manageGroupsGuard],
                title: 'COMMON.GROUPS',
                loadComponent: () =>
                    import('./groups/groups.component').then(
                        (m) => m.GroupsSectionComponent,
                    ),
            },
            {
                matcher: listOrItem('zones'),
                title: 'SIGNAGE_MANAGER.NAV_ZONES',
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
        // Wraps ngsw-worker.js so video and audio skip it, see the script
        provideServiceWorker('service-worker.js', {
            enabled: environment.production,
        }),
        provideZonelessChangeDetection(),
        provideAppInitializer(() =>
            registerActiveLocale(inject(LocaleService).locale),
        ),
        provideRouter(
            APP_ROUTES,
            withHashLocation(),
            withComponentInputBinding(),
            withNavigationErrorHandler((e) => reloadOnChunkLoadError(e.error)),
            withViewTransitions({
                skipInitialTransition: true,
                onViewTransitionCreated,
            }),
        ),
        { provide: TitleStrategy, useClass: SignageTitleStrategy },
        {
            provide: ErrorHandler,
            useClass: LazySentryErrorHandler,
        },
        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.locale,
        },
    ],
};
