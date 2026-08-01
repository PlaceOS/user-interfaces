import { signal } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
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
let _last_update_check = 0;
let _update_interval = 0;

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

function canReloadNow() {
    // Reloading while the backend is unreachable strands the app on its
    // loading screen with no way back, so wait for the network to return.
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        return false;
    }
    if (!isOnline()) return false;
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

/** Restart after a failed initialisation */
export function requestInitReload() {
    if (_init_reload) {
        _init_reload();
        return;
    }
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
    if (cache.isEnabled) {
        if (!_version_subscription) {
            _version_subscription = cache.versionUpdates.subscribe((event) => {
                if (event.type !== 'VERSION_READY' || _new_version) return;
                log('CACHE', `New application version is ready.`);
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
    _version_subscription?.unsubscribe();
    _unrecoverable_subscription?.unsubscribe();
    _version_subscription = undefined;
    _unrecoverable_subscription = undefined;
    _new_version = false;
    _auto_reload = false;
    SERVICE_WORKER_UPDATE.set(null);
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
