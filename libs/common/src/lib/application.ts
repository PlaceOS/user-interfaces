import { signal } from '@angular/core';
import { SwUpdate, type VersionEvent } from '@angular/service-worker';
import { isOnline } from '@placeos/ts-client';
import { Subscription } from 'rxjs';

import { MINUTES, SECONDS } from './constants';
import { log } from './general';

let _timer: ReturnType<typeof setInterval> | undefined;
let _initial_check: ReturnType<typeof setTimeout> | undefined;
let _version_subscription: Subscription | undefined;
let _unrecoverable_subscription: Subscription | undefined;
let _new_version = false;
let _auto_reload = false;
let _reload_gate: (() => boolean) | null = null;
let _reload_timer: ReturnType<typeof setTimeout> | undefined;
let _reload_deferred_since = 0;
let _init_reload: (() => void) | null = null;
let _init_reload_timer: ReturnType<typeof setTimeout> | undefined;
let _last_update_check = 0;
let _update_interval = 0;

const INIT_RELOAD_KEY = 'PlaceOS.initialisation_reloads';
const INIT_RELOAD_WINDOW_MS = 5 * MINUTES;
const INIT_RELOAD_LIMIT = 3;
const INITIALISATION_FAILURE = signal('');
const INITIALISATION_COMPLETE = signal(false);

/** How often a deferred automatic reload re-checks whether it can proceed */
const RELOAD_RETRY_MS = 5 * SECONDS;
/** Longest an automatic reload is held back before it happens regardless */
const MAX_RELOAD_DEFERRAL_MS = 10 * MINUTES;
const SERVICE_WORKER_UPDATE = signal<ServiceWorkerUpdateState | null>(null);

export interface ServiceWorkerUpdateState {
    /** Short text to show in the update card. */
    message: string;
    /** Longer detail text to show in the update card. */
    details: string;
    /** Text to show on the reload action. */
    action: string;
}

export interface CacheOptions {
    /** Whether to reload the app as soon as a new service worker version is ready. */
    auto_reload?: boolean;
    /** Time interval to check the service worker cache for changes. */
    interval?: number;
}

export function hasNewVersion() {
    return _new_version;
}

export function serviceWorkerUpdate() {
    return SERVICE_WORKER_UPDATE.asReadonly();
}

/**
 * Register a check that must pass before an automatic reload happens. Lets an
 * app hold a reload back while it is showing something that would be visibly
 * interrupted, such as a video part way through.
 */
export function setAutoReloadGate(gate: (() => boolean) | null) {
    _reload_gate = gate;
}

/** Whether the backend can be reached, as far as the client can tell */
function backendReachable() {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        return false;
    }
    return isOnline();
}

function canReloadNow() {
    // Reloading while the backend is unreachable strands the app on its
    // loading screen with no way back, so wait for the network to return.
    if (!backendReachable()) return false;
    try {
        return _reload_gate ? _reload_gate() : true;
    } catch (error) {
        log('CACHE', 'Reload gate failed.', error, 'warn');
        return true;
    }
}

function reloadApp() {
    if (_reload_timer) clearTimeout(_reload_timer);
    _reload_timer = undefined;
    if (!_reload_deferred_since) _reload_deferred_since = Date.now();
    const waited = Date.now() - _reload_deferred_since;
    if (canReloadNow() || waited >= MAX_RELOAD_DEFERRAL_MS) {
        location.reload();
        return;
    }
    _reload_timer = setTimeout(reloadApp, RELOAD_RETRY_MS);
}

/**
 * Reload to pick up a new version, from outside the service worker events.
 * Goes through the same deferral as an automatic reload, so a caller polling
 * for a new build cannot interrupt content the reload gate is holding it back
 * for, and cannot reload while the backend is unreachable.
 */
export function reloadForNewVersion() {
    reloadApp();
}

/**
 * Replace what happens when initialisation fails badly enough to warrant a
 * restart. An app that manages its own recovery, and its own limits on how
 * often it may restart, can route it through that instead of reloading here
 * where nothing is counting.
 */
export function setInitReloadHandler(handler: (() => void) | null) {
    _init_reload = handler;
}

/** Message shown when automatic startup recovery has stopped. */
export function initialisationFailure() {
    return INITIALISATION_FAILURE.asReadonly();
}

/** Whether application startup has reached its ready state. */
export function initialisationComplete() {
    return INITIALISATION_COMPLETE.asReadonly();
}

/** Stop startup and show a recoverable error in the loading UI. */
export function failInitialisation(message: string): void {
    INITIALISATION_COMPLETE.set(false);
    INITIALISATION_FAILURE.set(message);
}

function recentInitReloads(now = Date.now()): number[] {
    try {
        const stored = JSON.parse(
            sessionStorage.getItem(INIT_RELOAD_KEY) || '[]',
        );
        return stored instanceof Array
            ? stored.filter(
                  (at): at is number =>
                      typeof at === 'number' &&
                      now - at >= 0 &&
                      now - at < INIT_RELOAD_WINDOW_MS,
              )
            : [];
    } catch {
        return [];
    }
}

function storeInitReloads(at: number[]): void {
    try {
        sessionStorage.setItem(INIT_RELOAD_KEY, JSON.stringify(at));
    } catch {
        // A blocked session store must not prevent startup recovery.
    }
}

/** Clear automatic recovery history after startup completes. */
export function markInitialisationComplete(): void {
    try {
        sessionStorage.removeItem(INIT_RELOAD_KEY);
    } catch {
        // Ignore unavailable session storage.
    }
    // Startup got there after all, so a restart waiting on the network is no
    // longer needed and would only interrupt an app that is now working.
    cancelInitReload();
    INITIALISATION_FAILURE.set('');
    INITIALISATION_COMPLETE.set(true);
}

function cancelInitReload() {
    if (_init_reload_timer) clearTimeout(_init_reload_timer);
    _init_reload_timer = undefined;
}

/** Whether a restart after a failed initialisation is waiting for the network */
export function initReloadPending() {
    return !!_init_reload_timer;
}

/** Retry startup after automatic reload recovery reaches its limit. */
export function retryInitialisation(): void {
    try {
        sessionStorage.removeItem(INIT_RELOAD_KEY);
    } catch {
        // Ignore unavailable session storage.
    }
    INITIALISATION_FAILURE.set('');
    INITIALISATION_COMPLETE.set(false);
    location.reload();
}

/**
 * Restart after a failed initialisation. Held back while the backend cannot be
 * reached: initialisation fails offline because the data is not there, not
 * because the app is broken, and restarting into the same outage only trades
 * whatever the app is managing to show from cache for a loading screen. The
 * restart happens once the network is back, unless startup completes first.
 */
export function requestInitReload() {
    if (!backendReachable()) {
        if (_init_reload_timer) return;
        log(
            'APP',
            'Initialisation failed while offline; restarting once online.',
            undefined,
            'warn',
        );
        _init_reload_timer = setTimeout(() => {
            _init_reload_timer = undefined;
            requestInitReload();
        }, RELOAD_RETRY_MS);
        return;
    }
    cancelInitReload();
    if (_init_reload) {
        _init_reload();
        return;
    }
    const now = Date.now();
    const reloads = recentInitReloads(now);
    if (reloads.length >= INIT_RELOAD_LIMIT) {
        failInitialisation(
            'The application could not finish starting. Check the connection, then try again.',
        );
        return;
    }
    storeInitReloads([...reloads, now]);
    location.reload();
}

/** Whether an automatic reload is currently waiting for a safe moment */
export function reloadPending() {
    return !!_reload_timer;
}

/** Snapshot of the application update state, for diagnostics */
export function updateCheckState() {
    return {
        checking: !!_timer || !!_initial_check,
        auto_reload: _auto_reload,
        interval_ms: _update_interval,
        last_check: _last_update_check || 0,
        next_check:
            _last_update_check && _update_interval && _timer
                ? _last_update_check + _update_interval
                : 0,
        new_version: _new_version,
        reload_pending: !!_reload_timer,
    };
}

/** Stop the periodic and initial update checks. */
function stopUpdateChecks() {
    if (_timer) clearInterval(_timer);
    if (_initial_check) clearTimeout(_initial_check);
    _timer = undefined;
    _initial_check = undefined;
}

function cacheOptions(options: CacheOptions | number = {}): CacheOptions {
    return typeof options === 'number' ? { interval: options } : options;
}

function handleNewVersion() {
    if (_new_version) return;
    _new_version = true;
    // A new version is ready, no need to keep polling for one.
    stopUpdateChecks();
    if (_auto_reload) return reloadApp();
    SERVICE_WORKER_UPDATE.set({
        message: 'New application version available',
        details: 'Refresh to use the latest version.',
        action: 'Refresh',
    });
}

/** Log each service worker version state reported by Angular. */
function logVersionUpdate(event: VersionEvent) {
    switch (event.type) {
        case 'VERSION_DETECTED':
            log(
                'CACHE',
                `Downloading application version ${event.version.hash}.`,
            );
            return;
        case 'VERSION_INSTALLATION_FAILED':
            log(
                'CACHE',
                `Failed to install application version ${event.version.hash}.`,
                event.error,
                'warn',
            );
            return;
        case 'VERSION_READY':
            log(
                'CACHE',
                `Application version ${event.latestVersion.hash} is ready.`,
                { current_version: event.currentVersion.hash },
            );
            return;
        case 'NO_NEW_VERSION_DETECTED':
            log(
                'CACHE',
                `Application version ${event.version.hash} is up to date.`,
            );
    }
}

/**
 * Setup handler for cache change events
 * @param cache Angular Service worker service
 * @param options Cache options or interval in milliseconds
 */
export function setupCache(
    cache: SwUpdate,
    options: CacheOptions | number = {},
) {
    const { auto_reload = false, interval = 5 * MINUTES } =
        cacheOptions(options);
    _auto_reload = auto_reload;
    _update_interval = Math.max(interval, 1 * MINUTES);
    log(
        'CACHE',
        `Service worker is ${cache.isEnabled ? 'enabled' : 'disabled'}.`,
    );
    if (cache.isEnabled) {
        if (!_version_subscription) {
            _version_subscription = cache.versionUpdates.subscribe((event) => {
                logVersionUpdate(event);
                if (event.type !== 'VERSION_READY' || _new_version) return;
                handleNewVersion();
            });
        }
        if (!_unrecoverable_subscription) {
            _unrecoverable_subscription = cache.unrecoverable.subscribe(
                (event) => {
                    log(
                        'CACHE',
                        `Application cache is unrecoverable: ${event.reason}`,
                        undefined,
                        'error',
                    );
                    _new_version = true;
                    stopUpdateChecks();
                    if (_auto_reload) return reloadApp();
                    SERVICE_WORKER_UPDATE.set({
                        message: 'Application update failed to load',
                        details: 'Reload the app to recover.',
                        action: 'Reload',
                    });
                },
            );
        }
        if (_new_version) {
            // An update was already found, apply the new reload preference
            // instead of restarting the polling.
            if (_auto_reload) reloadApp();
            return;
        }
        stopUpdateChecks();
        _initial_check = setTimeout(() => {
            log('CACHE', `Checking for updates...`);
            checkForUpdate(cache);
        }, 2 * SECONDS);
        _timer = setInterval(
            () => {
                log('CACHE', `Checking for updates...`);
                checkForUpdate(cache);
            },
            Math.max(interval, 1 * MINUTES),
        );
    }
}

export function clearCacheCheck() {
    stopUpdateChecks();
    if (_reload_timer) clearTimeout(_reload_timer);
    _reload_timer = undefined;
    _reload_deferred_since = 0;
    _reload_gate = null;
    _last_update_check = 0;
    _update_interval = 0;
    _init_reload = null;
    cancelInitReload();
    _version_subscription?.unsubscribe();
    _unrecoverable_subscription?.unsubscribe();
    _version_subscription = undefined;
    _unrecoverable_subscription = undefined;
    _new_version = false;
    _auto_reload = false;
    SERVICE_WORKER_UPDATE.set(null);
    INITIALISATION_FAILURE.set('');
    INITIALISATION_COMPLETE.set(false);
}

/**
 * Check whether a new app version is available.
 *
 */
async function checkForUpdate(cache: SwUpdate) {
    _last_update_check = Date.now();
    try {
        if (cache.isEnabled && (await cache.checkForUpdate())) {
            log('CACHE', `Application update detected.`);
        }
    } catch (error) {
        log('CACHE', `Failed to check for application updates.`, error, 'warn');
    }
}
