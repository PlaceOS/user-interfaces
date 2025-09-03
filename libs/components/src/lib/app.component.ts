import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    apiKey,
    clientId,
    convertPairStringToMap,
    invalidateToken,
    isFixedDevice,
    isMock,
    refreshToken,
    setAPI_Key,
    token,
} from '@placeos/ts-client';
import { addHours } from 'date-fns';
import { first } from 'rxjs/operators';

import { hasNewVersion, setupCache } from 'libs/common/src/lib/application';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { requestScreenWakeLock } from 'libs/common/src/lib/fixed-device-helpers';
import {
    firstTruthyValueFrom,
    isMobileSafari,
    log,
    nextValueFrom,
    setAppName,
} from 'libs/common/src/lib/general';
import { GoogleAnalyticsService } from 'libs/common/src/lib/google-analytics.service';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import {
    LocaleService,
    setTranslationService,
} from 'libs/common/src/lib/locale.service';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import {
    notifySuccess,
    setNotifyOutlet,
} from 'libs/common/src/lib/notifications';
import { setupPlace } from 'libs/common/src/lib/placeos';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { current_user, currentUser } from 'libs/common/src/lib/user-state';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { setInternalUserDomain } from 'libs/users/src/lib/user.utilities';

import {
    Amazon,
    Azure,
    Google,
    initialiseUploadService,
    OpenStack,
} from '@placeos/cloud-uploads';
import { MOCKS } from '@placeos/mocks';
import { setCustomHeaders } from '@placeos/svg-viewer';
import * as Sentry from '@sentry/angular';
import { lastValueFrom } from 'rxjs';

const START_QUERY = location.search;

declare global {
    interface Window {
        pasteToken: (t: string) => void;
    }
}

export function initSentry(dsn: string, sample_rate = 0.1) {
    if (!dsn) return;
    Sentry.init({
        dsn,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration({
                maskAllText: false,
                blockAllMedia: false,
            }),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
            'localhost',
            /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
            /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/,
        ],
        // Session Replay
        replaysSessionSampleRate: sample_rate, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

@Component({
    selector: 'app-root',
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat) {
            <global-chat />
        }
        <global-loading />
        <!-- <debug-console *ngIf="debug"></debug-console> -->
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
    standalone: false,
})
export class AppComponent extends AsyncHandler implements OnInit {
    private _zone = '';
    private _region = '';

    public get debug() {
        return (
            window.debug && this._settings.get('app.allow_debugging') === true
        );
    }

    public get has_chat() {
        return this._settings.get('app.chat.enabled');
    }

    private _analytics = inject(GoogleAnalyticsService, { optional: true });
    private _locale = inject(LocaleService, { optional: true });
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService); // For init
    private _cache = inject(SwUpdate);
    private _snackbar = inject(MatSnackBar);
    private _hotkey = inject(HotkeysService);
    private _clipboard = inject(Clipboard);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _maps = inject(MapsPeopleService);
    private _tracing = inject(Sentry.TraceService);

    public async ngOnInit() {
        log('APP', 'MOCKS:', MOCKS);
        if (MOCKS) {
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
                localStorage.setItem(
                    'mock',
                    `${localStorage.getItem('mock') !== 'true'}`,
                );
                location.reload();
            });
        } else {
            localStorage.removeItem('mock');
        }
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyD'], () => {
            this._settings.saveUserSetting(
                'dark_mode',
                !this._settings.get('dark_mode'),
            );
            notifySuccess('Toggled dark mode.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyC'], () => {
            this._clipboard.copy(`${token()}|${refreshToken()}`);
            notifySuccess('Successfully copied token.');
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyV'], () => {
            navigator.clipboard
                ?.readText()
                .then((tkn) => this._pasteToken(tkn));
        });
        this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyF'], () => {
            navigator.clipboard
                ?.readText()
                .then((tkn) => this._pasteToken(tkn));
        });
        window.pasteToken = (t) => this._pasteToken(t);
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
            if (params.has('region_id')) {
                this._region = params.get('region_id');
            }
            if (params.has('building_id')) {
                this._zone = params.get('building_id');
            }
            if (this._region || this._zone) this._setZones();
        });
        setNotifyOutlet(this._snackbar);
        setTranslationService(this._locale);
        /** Wait for settings to initialise */
        await firstTruthyValueFrom(this._settings.initialised);
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            (MOCKS && location.origin.includes('demo.place.tech'));
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
        await lastValueFrom(this._org.initialised.pipe(first((_) => _)));
        if (this._locale) {
            this._locale.zone_id = this._org.organisation.id;
            this._locale.init();
        }
        setupCache(this._cache);
        if (!settings.local_login) {
            this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        }
        await lastValueFrom(current_user.pipe(first((_) => !!_)));
        this.clearTimeout('wait_for_user');
        this._initLocale();
        setInternalUserDomain(
            this._settings.get('app.internal_user_domain') ||
                `@${currentUser()?.email?.split('@')[1]}`,
        );
        this._initAnalytics();
        initSentry(this._settings.get('app.sentry_dsn'));
        try {
            this._setSafariHeaders();
            this._initUploads();
            this._initFixedDevice();
        } catch {
            log(
                'APP',
                'Failed to initialise background services.',
                undefined,
                'warn',
            );
        }
        this._setZones();
    }

    private onInitError() {
        if (isMock() || currentUser()?.is_logged_in) return;
        invalidateToken();
        location.reload();
    }

    private _initAnalytics() {
        const tracking_id = this._settings.get('app.analytics.tracking_id');
        if (!tracking_id) return;
        this._analytics.init(tracking_id);
        this._analytics.load(tracking_id);
        this._analytics.setUser(currentUser().id);
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

    private _pasteToken(tkn: string) {
        const parts = tkn.split('|');
        const id = clientId();
        localStorage.setItem(`${id}_access_token`, `${parts[0]}`);
        localStorage.setItem(`${id}_refresh_token`, `${parts[1]}`);
        localStorage.setItem(
            `${id}_expires_at`,
            `${addHours(new Date(), 6).valueOf()}`,
        );
        notifySuccess('Successfully pasted token.');
        setTimeout(() => location.reload(), 2000);
    }

    private _checkReload() {
        if (!hasNewVersion()) return;

        location.reload();
        this.timeout(
            'reload',
            () => (location.href = `${location.origin}${location.pathname}`),
        );
    }

    private _setSafariHeaders() {
        if (isMobileSafari()) return;
        const tkn = token();
        setCustomHeaders(
            tkn === 'x-api-key'
                ? { 'x-api-key': apiKey() }
                : { Authorization: `Bearer ${tkn}` },
        );
    }

    private _initUploads(tries = 1) {
        if (!this._settings.get('app.has_uploads')) return;
        this.timeout('init_uploads', () => {
            try {
                initialiseUploadService({
                    auto_start: true,
                    token: token(),
                    endpoint: '/api/engine/v2/uploads',
                    worker_url: 'assets/md5_worker.js',
                    providers: [Amazon, Azure, Google, OpenStack] as any,
                });
            } catch (e) {
                this.timeout(
                    'init_uploads',
                    () => this._initUploads((tries += 1)),
                    1000 * tries,
                );
            }
        });
    }

    private async _initFixedDevice() {
        if (!isFixedDevice()) return;
        this.interval(
            'auto-update-version',
            () => this._checkReload(),
            15 * 1000,
        );
        await requestScreenWakeLock();
    }

    private _setZones() {
        this.timeout(
            'set_building+region',
            async () => {
                const region = this._org.regions.find(
                    (b) => b.id === this._region,
                );
                if (region) this._org.setRegion(region);
                const building_list = await nextValueFrom(
                    this._org.building_list,
                );
                const bld = building_list.find((b) => b.id === this._zone);
                if (bld) this._org.setBuilding(bld, true);
            },
            1000,
        );
    }
}
