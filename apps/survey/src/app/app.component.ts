import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    AsyncHandler,
    current_user,
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
    storeApiKeyFromUrl,
    withTimeout,
} from '@placeos/common';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';

import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';

import { mocksInit } from '@placeos/mocks';
import {
    clientId,
    convertPairStringToMap,
    setAPI_Key,
} from '@placeos/ts-client';

const START_QUERY = location.search;

@Component({
    selector: 'app-root',
    template: `
        @defer (on idle) {
            <settings-debug-panel-launcher />
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
    protected title = 'survey';
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _hotkey = inject(HotkeysService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
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
            if (params.has('x-api-key')) {
                setAPI_Key(params.get('x-api-key'));
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
            const query = convertPairStringToMap(START_QUERY.substring(1));
            await this._router.navigate([], {
                relativeTo: this._route,
                queryParams: query,
                replaceUrl: true,
            });
        }
        /** Wait for authentication details to load */
        try {
            await setupPlace(settings).finally(() =>
                this._storeApiKeyFromUrl(),
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
                firstTruthyValueFrom(current_user),
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
        this.clearTimeout('wait_for_user');
        this._initLocale();
        markInitialisationComplete();
    }

    /**
     * Store the `x-api-key` and remove it from the URL, so it does not stay in
     * the browser history. Runs when `setupPlace` settles, as ts-client stores
     * the key under the client ID that setup computes. The key can be in the
     * page query and in the hash route, which gets a copy of the page query.
     */
    private _storeApiKeyFromUrl() {
        storeApiKeyFromUrl();
        const api_key = this._route.snapshot.queryParamMap.get('x-api-key');
        if (!api_key || !clientId()) return;
        setAPI_Key(api_key);
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
