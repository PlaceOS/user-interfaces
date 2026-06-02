import { Clipboard } from '@angular/cdk/clipboard';
import { inject, Injectable, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
    authority,
    clientId,
    convertPairStringToMap,
    invalidateToken,
    isFixedDevice,
    isMock,
    refreshToken,
    setAPI_Key,
    setToken,
    token,
} from '@placeos/ts-client';
import * as Sentry from '@sentry/angular';
import { addHours } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import { first } from 'rxjs/operators';

import { hasNewVersion, setupCache } from './application';
import { AsyncHandler } from './async-handler.class';
import { requestScreenWakeLock } from './fixed-device-helpers';
import {
    firstTruthyValueFrom,
    log,
    nextValueFrom,
    setAppName,
} from './general';
import { GoogleAnalyticsService } from './google-analytics.service';
import { HotkeysService } from './hotkeys.service';
import { LocaleService, setTranslationService } from './locale.service';
import { MapsPeopleService } from './mapspeople.service';
import {
    bindNativeAuthRedirects,
    clearNativeDomain,
    closeNativeBrowser,
    consumeNativeAuthRedirect,
    getNativeDomain,
    isNativeApp,
    openNativeBrowser,
} from './native-app';
import { notifySuccess, setNotifyOutlet } from './notifications';
import { OrganisationService } from './org/organisation.service';
import { createNativeAuthUrl, setupPlace } from './placeos';
import { SettingsService } from './settings.service';
import { setInternalUserDomain } from './types/user.class';
import { current_user, currentUser } from './user-state';

const START_QUERY = location.search;

declare global {
    interface Window {
        pasteToken: (t: string) => void;
    }
}

const LOADING_MESSAGE = signal('Loading...');
const NEEDS_DOMAIN = signal(false);
const DOMAIN_ERROR = signal('');

export function getLoadingMessage() {
    return LOADING_MESSAGE;
}

export function setLoadingMessage(message: string) {
    LOADING_MESSAGE.set(message);
}

/** Signal indicating the native domain overlay should be displayed. */
export function needsNativeDomain() {
    return NEEDS_DOMAIN;
}

/** Signal containing an error message to display in the domain overlay. */
export function nativeDomainError() {
    return DOMAIN_ERROR;
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

let _mocks: (() => void) | null = null;

export function setMocks(value: () => void) {
    _mocks = value;
}

@Injectable({
    providedIn: 'root',
})
export class PlaceOS_Service extends AsyncHandler {
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

    private _zone = '';
    private _region = '';
    private _initial_token = '';
    private _domain_resolve: (() => void) | null = null;

    private async _handleNativeAuthRedirect(url: string): Promise<void> {
        const callback_url = new URL(url);
        localStorage.setItem('TESTING.callback_url', callback_url.toString());
        const search = callback_url.searchParams.toString();
        if (!search) return;
        await closeNativeBrowser();
        location.replace(`${location.origin}${location.pathname}?${search}`);
        setTimeout(() => console.log('NATIVE CALLBACK URL', url), 10 * 1000);
    }

    public get debug() {
        return (
            window.debug && this._settings.get('app.allow_debugging') === true
        );
    }

    public get has_chat() {
        return this._settings.get('app.chat.enabled');
    }

    public get has_uploads() {
        return this._settings.get('app.has_uploads') || false;
    }

    public set mocks(value: () => void) {
        _mocks = value;
    }

    public setInitialToken(token: string) {
        this._initial_token = token || '';
    }

    /** Called by the native domain overlay once the user has set a domain. */
    public onNativeDomainSet(): void {
        NEEDS_DOMAIN.set(false);
        this._domain_resolve?.();
        this._domain_resolve = null;
    }

    public async init() {
        if (isNativeApp()) {
            await bindNativeAuthRedirects((url) => {
                void this._handleNativeAuthRedirect(url);
            });
            const launch_url = await consumeNativeAuthRedirect();
            if (launch_url) {
                await this._handleNativeAuthRedirect(launch_url);
                return;
            }
        }
        log('APP', 'MOCKS:', _mocks);
        if (_mocks) {
            setLoadingMessage('Initializing mocks...');
            _mocks();
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
        setLoadingMessage('Checking params...');
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
        setLoadingMessage('Initializing settings...');
        setNotifyOutlet(this._snackbar);
        setTranslationService(this._locale);
        /** Wait for settings to initialise */
        await firstTruthyValueFrom(this._settings.initialised);
        setAppName(this._settings.get('app.short_name'));
        const settings = this._settings.get('composer') || {};
        settings.app_name =
            this._settings.get('app.name') ||
            this._settings.get('app.short_name');
        settings.mock =
            !!this._settings.get('mock') ||
            (_mocks && location.origin.includes('demo.place.tech'));
        /** Add query parameters if removed due to hash routing */
        if (START_QUERY) {
            const query = convertPairStringToMap(START_QUERY.substring(1));
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: query,
            });
        }
        /** On native platforms, ensure we have a server domain before auth. */
        while (isNativeApp()) {
            let domain = getNativeDomain();
            while (!domain) {
                setLoadingMessage('Waiting for server configuration...');
                NEEDS_DOMAIN.set(true);
                await new Promise<void>((r) => (this._domain_resolve = r));
                domain = getNativeDomain();
            }
            settings.domain = domain;
            settings.protocol = 'https:';
            settings.use_domain = true;
            setLoadingMessage('Authenticating...');
            const auth_error = await setupPlace(settings)
                .then(() => null)
                .catch((_) => _);
            if (!auth_error) break;
            log('APP', 'Auth failed, resetting domain.', auth_error, 'warn');
            clearNativeDomain();
            DOMAIN_ERROR.set(
                'Unable to connect to your server. Check the email address and try again.',
            );
        }
        if (isNativeApp() && !token(false) && authority()) {
            setLoadingMessage('Opening sign in...');
            await openNativeBrowser(
                await createNativeAuthUrl(settings, clientId()),
            );
            return;
        }
        if (!isNativeApp()) {
            setLoadingMessage('Authenticating...');
            await setupPlace(settings).catch((_) => console.error(_));
        }
        if (this._initial_token) setToken(this._initial_token);
        await lastValueFrom(this._org.initialised.pipe(first((_) => _)));
        if (this._locale) {
            this._locale.zone_id = this._org.organisation.id;
            this._locale.init();
        }
        setupCache(this._cache, this._settings.get('service_worker') || {});
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
        setLoadingMessage('Initializing analytics...');
        this._analytics.init(tracking_id);
        this._analytics.load(tracking_id);
        this._analytics.setUser(currentUser().id);
    }

    private _initLocale() {
        setLoadingMessage('Loading locale...');
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
        setLoadingMessage('Checking for updates...');

        location.reload();
        this.timeout(
            'reload',
            () => (location.href = `${location.origin}${location.pathname}`),
        );
    }

    private async _initFixedDevice() {
        if (!isFixedDevice()) return;
        setLoadingMessage('Initializing as fixed device...');
        this.interval(
            'auto-update-version',
            () => this._checkReload(),
            15 * 1000,
        );
        await requestScreenWakeLock();
    }

    private _setZones() {
        if (this._region || this._zone) {
            this._org.skipAutoSelection();
        }
        this.timeout(
            'set_building+region',
            async () => {
                const building_list = await nextValueFrom(
                    this._org.building_list,
                );
                let bld = building_list.find((b) => b.id === this._zone);
                // Determine the target region: explicit region_id, or derived from building's parent
                const target_region_id = this._region || bld?.parent_id;
                const region = this._org.regions.find(
                    (b) => b.id === target_region_id,
                );
                if (region) await this._org.setRegion(region);
                if (!bld && this._zone) {
                    const building_list = await nextValueFrom(
                        this._org.building_list,
                    );
                    bld = building_list.find((b) => b.id === this._zone);
                }
                if (bld) this._org.setBuilding(bld, true);
            },
            1000,
        );
    }
}
