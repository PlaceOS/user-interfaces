import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    AsyncHandler,
    failInitialisation,
    firstTruthyValueFrom,
    HotkeysService,
    lazySnackbar,
    LocaleService,
    log,
    markInitialisationComplete,
    notifySuccess,
    OrganisationService,
    setAppName,
    setLoadingMessage,
    setNotifyOutlet,
    SettingsService,
    setTranslationService,
    setupCache,
    setupPlace,
    waitForCurrentUser,
    withTimeout,
} from '@placeos/common';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';

import { mocksInit } from '@placeos/mocks';

const START_QUERY = location.search;

@Component({
    selector: 'app-root',
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
        } @error {
            <!-- The launcher is optional. If its chunk fails to download
                 (for example while offline), show nothing and do not
                 report an uncaught NG0750 error. -->
        }

        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet />
        </div>
        <global-loading />
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        SettingsDebugPanelLauncherComponent,
        RouterModule,
        GlobalBannerComponent,
        GlobalLoadingComponent,
    ],
})
export class AppComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _hotkey = inject(HotkeysService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _location = inject(Location);
    private _locale = inject(LocaleService);
    private _cache = inject(SwUpdate);
    private _snackbar = lazySnackbar();

    public async ngOnInit() {
        setNotifyOutlet(this._snackbar);
        setTranslationService(this._locale);
        // Listen for service worker events before any async setup so update
        // notifications emitted during initialisation are not missed.
        setupCache(this._cache);
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyD'], () => {
            this._settings.saveUserSetting(
                'dark_mode',
                !this._settings.get('dark_mode'),
            );
            notifySuccess('Toggled dark mode.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
            localStorage.setItem(
                'mock',
                `${localStorage.getItem('mock') !== 'true'}`,
            );
            location.reload();
        });
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('hide_nav'))
                localStorage.setItem('PlaceOS.hide_nav', 'true');
            if (params.has('lang')) {
                const locale = params.get('lang');
                this._locale?.setLocale(locale);
                localStorage.setItem('PLACEOS.locale', locale);
            }
        });
        /** Wait for settings to initialise */
        await firstTruthyValueFrom(this._settings.initialised);
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.href.includes('mock=true') ||
            localStorage.getItem('mock') === 'true' ||
            location.origin.includes('demo.place.tech');
        if (settings.mock) {
            setLoadingMessage('Initializing mocks...');
            mocksInit();
        }
        /** Add query parameters if removed due to hash routing */
        if (START_QUERY) {
            const query = Object.fromEntries(new URLSearchParams(START_QUERY));
            // The first navigation can still be in progress here, so the
            // router state has no route yet. Read the route from the browser
            // URL, or the app opens at the root route.
            const url = this._router.parseUrl(this._location.path() || '/');
            url.queryParams = { ...query, ...url.queryParams };
            await this._router.navigateByUrl(url, { replaceUrl: true });
        }
        /** Wait for authentication details to load */
        try {
            await setupPlace(settings).finally(() =>
                this._removeApiKeyFromRoute(),
            );
        } catch (error) {
            console.error(error);
            failInitialisation(
                'Survey could not authenticate. Check the connection, then try again.',
            );
            return;
        }
        await this._org.waitUntilInitialised();
        if (this._locale) {
            this._locale.zone_id = this._org.organisation.id;
            this._locale.init();
        }
        setupCache(this._cache, this._settings.get('service_worker') || {});
        try {
            await withTimeout(
                waitForCurrentUser(),
                30_000,
                'Current user loading timed out.',
            );
        } catch (error) {
            console.error(error);
            failInitialisation(
                'Survey could not load the current user. Check the connection, then try again.',
            );
            return;
        }
        this._initLocale();
        markInitialisationComplete();
    }

    /**
     * Remove the `x-api-key` from the hash route, which gets a copy of the
     * page query. The login session keeps the key and removes it from the
     * URL, but the router state still has it, so a later navigation that
     * merges the query would put it back. Runs when `setupPlace` settles.
     */
    private _removeApiKeyFromRoute() {
        if (!this._route.snapshot.queryParamMap.has('x-api-key')) return;
        this._router.navigate([], {
            queryParams: { 'x-api-key': null },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }

    private _initLocale() {
        try {
            let locale = localStorage.getItem('PLACEOS.locale');

            const locales = this._settings.get('app.locales') || [];
            if (locale) {
                this._locale?.setLocale(locale);
            } else {
                const list = navigator.languages;
                for (const lang of list) {
                    locale = locales.find((_) => _.id === lang);
                    if (!locale)
                        locale = locales.find((_) => lang.includes(_.id));
                    if (locale) {
                        this._locale?.setLocale(lang);
                        localStorage.setItem('PLACEOS.locale', lang);
                        break;
                    }
                }
            }
        } catch {
            log(
                'APP',
                'Failed to initialise locale service.',
                undefined,
                'warn',
            );
        }
    }
}
