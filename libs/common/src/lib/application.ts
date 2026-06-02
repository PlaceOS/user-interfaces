import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs';

import { log } from './general';
import { notifyInfo } from './notifications';

let _timer: ReturnType<typeof setInterval> | undefined;
let _version_subscription: Subscription | undefined;
let _unrecoverable_subscription: Subscription | undefined;
let _new_version = false;
let _auto_reload = false;

export interface CacheOptions {
    /** Whether to reload the app as soon as a new service worker version is ready. */
    auto_reload?: boolean;
    /** Time interval to check the service worker cache for changes. */
    interval?: number;
}

export function hasNewVersion() {
    return _new_version;
}

function reloadApp() {
    location.reload();
}

function cacheOptions(options: CacheOptions | number = {}): CacheOptions {
    return typeof options === 'number' ? { interval: options } : options;
}

function handleNewVersion() {
    if (_new_version) return;
    _new_version = true;
    if (_auto_reload) return reloadApp();
    notifyInfo(
        'Newer version of the application is available',
        'Refresh',
        () => reloadApp(),
    );
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
    const { auto_reload = false, interval = 5 * 60 * 1000 } =
        cacheOptions(options);
    _auto_reload = auto_reload;
    if (cache.isEnabled) {
        if (_timer) clearInterval(_timer);
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
                    if (_auto_reload) return reloadApp();
                    _new_version = true;
                    notifyInfo(
                        'Application update failed to load',
                        'Reload',
                        () => reloadApp(),
                    );
                },
            );
        }
        _timer = setInterval(() => {
            log('CACHE', `Checking for updates...`);
            checkForUpdate(cache);
        }, interval);
    }
}

export function clearCacheCheck() {
    if (_timer) clearInterval(_timer);
    _timer = undefined;
    _version_subscription?.unsubscribe();
    _unrecoverable_subscription?.unsubscribe();
    _version_subscription = undefined;
    _unrecoverable_subscription = undefined;
}

/**
 * Check whether a new app version is available.
 *
 */
async function checkForUpdate(cache: SwUpdate) {
    try {
        if (cache.isEnabled && (await cache.checkForUpdate())) {
            log('CACHE', `Application update detected.`);
        }
    } catch (error) {
        log('CACHE', `Failed to check for application updates.`, error, 'warn');
    }
}
