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

import {
    hasNewVersion,
    reloadForNewVersion,
    requestInitReload,
    setupCache,
} from './application';
import { AsyncHandler } from './async-handler.class';
import { requestScreenWakeLock } from './fixed-device-helpers';
import { firstTruthyValueFrom, log, setAppName } from './general';
import { GoogleAnalyticsService } from './google-analytics.service';
import { HotkeysService } from './hotkeys.service';
import { LocaleService, setTranslationService } from './locale.service';
import { MapsPeopleService } from './mapspeople.service';
import {
    bindNativeAuthRedirects,
    clearNativeApiKey,
    clearNativeDomain,
    clearNativePkceVerifier,
    closeNativeBrowser,
    consumeNativeAuthError,
    consumeNativeAuthRedirect,
    getIntuneAccount,
    getIntuneToken,
    getNativeApiKey,
    getNativeDomain,
    hideNativeStatusBar,
    isNativeApp,
    lookupNativeDomainByEmail,
    markNativeAuthRedirectConsumed,
    openNativeBrowser,
    restoreNativePkceVerifier,
    scheduleNativeRestart,
    setNativeAuthError,
    setNativeDomain,
    setNativeEmail,
    syncNativeManagedConfig,
} from './native-app';
import type { IntuneAccount } from './native-app';
import { notifySuccess, setNotifyOutlet } from './notifications';
import { OrganisationService } from './org/organisation.service';
import { createNativeAuthUrl, setupPlace } from './placeos';
import { SettingsService } from './settings.service';
import { setInternalUserDomain } from './types/user.class';
import { currentUser } from './user-state';

const START_QUERY = location.search;
/** Longest startup waits on the authority before continuing without it */
const AUTHORITY_WAIT_MS = 10 * 1000;

declare global {
    interface Window {
        pasteToken: (t: string) => void;
    }
}

const LOADING_MESSAGE = signal('Loading...');
const NEEDS_DOMAIN = signal(false);
const DOMAIN_ERROR = signal('');
const AUTO_CONFIRM_DOMAIN = signal(false);

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

/**
 * Signal indicating the domain overlay can auto-accept its settings after a
 * period of no user activity — set when the MDM managed configuration
 * provides everything needed to run unattended.
 */
export function autoConfirmNativeDomain() {
    return AUTO_CONFIRM_DOMAIN;
}

export function initSentry(dsn: string) {
    if (!dsn) return;
    // Session Replay (rrweb, ~123KB) is intentionally omitted to keep it out of
    // the initial bundle and avoid any external CDN dependency for firewalled /
    // private-intranet deployments. Error reporting and performance tracing are
    // unaffected.
    Sentry.init({
        dsn,
        integrations: [Sentry.browserTracingIntegration()],
        // Performance Monitoring
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: [
            'localhost',
            /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
            /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/,
        ],
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
        const params = callback_url.searchParams;
        await closeNativeBrowser();
        markNativeAuthRedirectConsumed(url);
        const error = params.get('error');
        if (error || !params.get('code')) {
            const message =
                params.get('error_description') ||
                error ||
                'Sign in failed. Please try again.';
            console.warn('[AUTH] Native sign in failed.', message);
            setNativeAuthError(message);
            location.replace(`${location.origin}${location.pathname}`);
            return;
        }
        // Stash the params where ts-client checks when the URL has none, in
        // case routing rewrites the URL before the auth flow reads it.
        sessionStorage.setItem(
            'ENGINE.auth.params',
            JSON.stringify({
                code: params.get('code'),
                state: params.get('state'),
            }),
        );
        console.warn('[AUTH] Reloading webview with auth code...');
        // Reload the webview with the OAuth params on the main URL so the
        // ts-client auth_code flow can pick up the `code` + `state` and
        // exchange them (using the PKCE verifier stored before sign-in).
        location.replace(
            `${location.origin}${location.pathname}?${params.toString()}`,
        );
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
        DOMAIN_ERROR.set('');
        AUTO_CONFIRM_DOMAIN.set(false);
        this._domain_resolve?.();
        this._domain_resolve = null;
    }

    public async init(options: { allow_mdm_restart?: boolean } = {}) {
        if (isNativeApp()) {
            // Native shells render fullscreen with the OS status bar hidden.
            hideNativeStatusBar();
            // Re-seed the PKCE verifier in case the OS killed the app (and
            // its sessionStorage) while the user was signing in externally.
            restoreNativePkceVerifier();
            await bindNativeAuthRedirects((url) => {
                this._handleNativeAuthRedirect(url).catch((error) =>
                    console.warn('[AUTH] Error handling redirect.', error),
                );
            });
            const launch_url = await consumeNativeAuthRedirect();
            if (launch_url) {
                await this._handleNativeAuthRedirect(launch_url);
                return;
            }
        }
        // Listen for service worker events before any async setup so update
        // notifications emitted during initialisation are not missed.
        setupCache(this._cache);
        log('APP', 'MOCKS:', _mocks);
        if (_mocks) {
            // Mirror setupPlace's mock detection — the URL param enables mocks
            // on first load before setupPlace persists it to localStorage.
            const mocks_enabled =
                !location.href.includes('mock=false') &&
                (localStorage.getItem('mock') === 'true' ||
                    location.href.includes('mock=true') ||
                    location.origin.includes('demo.place.tech'));
            if (mocks_enabled) {
                setLoadingMessage('Initializing mocks...');
                _mocks();
            }
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
        /** Apply any server settings pushed to the device via MDM. */
        let confirm_managed = false;
        if (isNativeApp()) {
            setLoadingMessage('Checking managed configuration...');
            const { config: managed, changed } =
                await syncNativeManagedConfig();
            if (managed) {
                if (options.allow_mdm_restart && managed.restart_enabled) {
                    scheduleNativeRestart(managed.restart_time);
                }
                // New settings are shown to the user for validation before
                // use, unless the MDM config opts out of interactive setup.
                confirm_managed =
                    changed &&
                    !!managed.domain &&
                    !managed.skip_interactive_setup;
                // When the MDM provides everything a panel app needs to run
                // unattended, the confirmation accepts itself after a period
                // of no user activity.
                AUTO_CONFIRM_DOMAIN.set(
                    confirm_managed &&
                        !!options.allow_mdm_restart &&
                        !!managed.api_key &&
                        !!managed.system_id,
                );
            }
        }
        /**
         * On an Intune-managed device, authenticate with the MS token from the
         * enrolled account and auto-configure the server from the user's email
         * domain. Falls through to the normal OAuth flow when not enrolled.
         */
        let intune_token = '';
        if (isNativeApp()) {
            setLoadingMessage('Checking managed account...');
            const account = await getIntuneAccount();
            if (account) {
                intune_token = await getIntuneToken(
                    account,
                    this._settings.get('app.intune.scopes') || undefined,
                );
                const email = `${account.username || ''}`.trim();
                // Only derive the domain when the MDM config didn't supply one.
                if (email && !getNativeDomain()) {
                    const domain = await lookupNativeDomainByEmail(email).catch(
                        () => '',
                    );
                    if (domain) {
                        setNativeDomain(domain);
                        setNativeEmail(email);
                    }
                }
            }
        }
        /** On native platforms, ensure we have a server domain before auth. */
        while (isNativeApp()) {
            let domain = getNativeDomain();
            while (!domain || confirm_managed) {
                confirm_managed = false;
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
            if (!auth_error) {
                // Apply after setupPlace so ts-client stores the key under
                // the client ID computed during setup. With a key set,
                // token() resolves and the OAuth sign-in below is skipped.
                const api_key = getNativeApiKey();
                const client_key = `${clientId()}_x-api-key`;
                if (api_key) setAPI_Key(api_key);
                else if (localStorage.getItem(client_key)) {
                    // Key removed during setup — also purge the copy (and
                    // the long-lived token) ts-client persisted, or it keeps
                    // authenticating with the old key.
                    localStorage.removeItem(client_key);
                    invalidateToken();
                }
                // Authenticate with the Intune MS token. Set after setupPlace
                // so it's stored under the computed client ID, and makes
                // token() truthy so the OAuth sign-in below is skipped.
                // ponytail: the plugin returns no expiry — leave setToken's
                // default and re-acquire silently on the next launch.
                if (intune_token) setToken(intune_token);
                break;
            }
            log('APP', 'Auth failed, resetting domain.', auth_error, 'warn');
            clearNativeDomain();
            clearNativeApiKey();
            DOMAIN_ERROR.set(
                `Unable to connect to "${domain}". The server may be unavailable, or the email address may be for a different server. Try again.`,
            );
        }
        if (isNativeApp() && !token(false)) {
            const boot_params = new URLSearchParams(START_QUERY);
            if (boot_params.has('code')) {
                // The exchange runs inside setupPlace — landing here with a
                // code in the URL means it was dropped or failed. ts-client
                // silently discards the code when state and nonce differ.
                console.warn(
                    '[AUTH] Auth code was present on load but the token exchange did not complete.',
                    `State: "${boot_params.get('state')}"`,
                    `Nonce: "${localStorage.getItem(`${clientId()}_nonce`)}"`,
                );
            }
        }
        // Only open the sign-in browser when there is no valid token AND no
        // refresh token — with a refresh token ts-client renews it silently.
        if (isNativeApp() && !token(false) && !refreshToken() && authority()) {
            const auth_error = consumeNativeAuthError();
            if (auth_error) {
                // Wait for the user to confirm via the overlay so a failed or
                // denied sign-in can't endlessly re-open the browser.
                setLoadingMessage('Waiting for sign in...');
                DOMAIN_ERROR.set(auth_error);
                NEEDS_DOMAIN.set(true);
                await new Promise<void>((r) => (this._domain_resolve = r));
            }
            setLoadingMessage('Opening sign in...');
            const auth_url = await createNativeAuthUrl(settings, clientId());
            console.warn(`[AUTH] Opening sign in: ${auth_url}`);
            await openNativeBrowser(auth_url);
            return;
        }
        if (!isNativeApp()) {
            setLoadingMessage('Authenticating...');
            // `setup` resolves only once the authority has loaded, and it never
            // rejects - a failure retries in the background forever. Waiting on
            // it therefore parks startup indefinitely on a device with no
            // network. Everything needed below it (storage prefix, config,
            // token) is already set synchronously, and the authority arrives on
            // its own once the network is back.
            await Promise.race([
                setupPlace(settings).catch((_) => console.error(_)),
                new Promise((resolve) =>
                    setTimeout(resolve, AUTHORITY_WAIT_MS),
                ),
            ]);
        }
        if (this._initial_token) setToken(this._initial_token);
        await this._waitFor(() => this._org.initialised());
        if (this._locale) {
            this._locale.zone_id = this._org.organisation.id;
            this._locale.init();
        }
        setupCache(this._cache, this._settings.get('service_worker') || {});
        if (!settings.local_login) {
            this.timeout('wait_for_user', () => this.onInitError(), 30 * 1000);
        }
        await this._waitFor(() => !!currentUser());
        this.clearTimeout('wait_for_user');
        clearNativePkceVerifier();
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
        // An API key that can't load the current user is likely invalid —
        // without this the key keeps token() truthy and the reload below
        // loops forever. Clear the setup config so the server overlay is
        // shown again after the reload.
        if (isNativeApp() && getNativeApiKey()) {
            clearNativeApiKey();
            clearNativeDomain();
            localStorage.removeItem(`${clientId()}_x-api-key`);
            invalidateToken();
        }
        // Keep a valid token on slow networks — the user fetch timing out
        // doesn't mean the token is bad, so just retry with a reload.
        else if (!token(false)) invalidateToken();
        // Routed rather than reloaded directly: an app that never manages to
        // load the current user would otherwise restart every thirty seconds
        // for as long as that keeps failing.
        requestInitReload();
    }

    private _initAnalytics() {
        const tracking_id = this._settings.get('app.analytics.tracking_id');
        if (!tracking_id) return;
        setLoadingMessage('Initialising analytics...');
        this._analytics.init(tracking_id);
        this._analytics.load(tracking_id);
        this._analytics.setUser(currentUser().id);
    }

    private _initLocale() {
        setLoadingMessage('Loading locales...');
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
        // Reloads rather than navigating: on a hash routed app the route is in
        // the hash, so going to the base path restarts the app somewhere else
        // entirely - a signage player lands on the display picker instead of
        // back on its content. Routed through the shared update reload so the
        // app's reload gate still applies.
        reloadForNewVersion();
    }

    private async _initFixedDevice() {
        if (!isFixedDevice()) return;
        setLoadingMessage('Initialising as fixed device...');
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
                const building_list = this._org.building_list();
                let bld = building_list.find((b) => b.id === this._zone);
                // Determine the target region: explicit region_id, or derived from building's parent
                const target_region_id = this._region || bld?.parent_id;
                const region = this._org.regions.find(
                    (b) => b.id === target_region_id,
                );
                if (region) await this._org.setRegion(region);
                if (!bld && this._zone) {
                    const building_list = this._org.building_list();
                    bld = building_list.find((b) => b.id === this._zone);
                }
                if (bld) this._org.setBuilding(bld, true);
            },
            1000,
        );
    }

    private _waitFor(condition: () => boolean) {
        return new Promise<void>((resolve) => {
            const check = () => {
                if (condition()) return resolve();
                this.timeout(`wait-${Math.random()}`, check, 100);
            };
            check();
        });
    }
}
