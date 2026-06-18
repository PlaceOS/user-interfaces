import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    AsyncHandler,
    current_user,
    firstTruthyValueFrom,
    HotkeysService,
    LocaleService,
    log,
    notifySuccess,
    OrganisationService,
    setAppName,
    setLoadingMessage,
    setNotifyOutlet,
    SettingsService,
    setTranslationService,
    setupCache,
    setupPlace,
} from '@placeos/common';

import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';

import { mocksInit } from '@placeos/mocks';
import { convertPairStringToMap, setAPI_Key } from '@placeos/ts-client';
// import * as Sentry from '@sentry/angular';

const START_QUERY = location.search;

// export function initSentry(dsn: string, sample_rate = 0.1) {
//     if (!dsn) return;
//     Sentry.init({
//         dsn,
//         integrations: [
//             Sentry.browserTracingIntegration(),
//             Sentry.replayIntegration({
//                 maskAllText: false,
//                 blockAllMedia: false,
//             }),
//         ],
//         // Performance Monitoring
//         tracesSampleRate: 1.0, //  Capture 100% of the transactions
//         // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//         tracePropagationTargets: [
//             'localhost',
//             /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
//             /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/,
//         ],
//         // Session Replay
//         replaysSessionSampleRate: sample_rate, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//         replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
//     });
// }

@Component({
    selector: 'app-root',
    template: `
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
    imports: [RouterModule, GlobalBannerComponent, GlobalLoadingComponent],
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
    private _snackbar = inject(MatSnackBar);
    // private _tracing = inject(Sentry.TraceService);

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
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: query,
            });
        }
        /** Wait for authentication details to load */
        await setupPlace(settings).catch((_) => console.error(_));
        await this._org.waitUntilInitialised();
        if (this._locale) {
            this._locale.zone_id = this._org.organisation.id;
            this._locale.init();
        }
        setupCache(this._cache, this._settings.get('service_worker') || {});
        await firstTruthyValueFrom(current_user);
        this.clearTimeout('wait_for_user');
        this._initLocale();
        // initSentry(this._settings.get('app.sentry_dsn'));
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
