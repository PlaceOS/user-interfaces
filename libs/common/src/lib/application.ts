import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs';

import { log } from './general';
import { notifyInfo } from './notifications';

let _timer: ReturnType<typeof setInterval> | undefined;
let _version_subscription: Subscription | undefined;
let _unrecoverable_subscription: Subscription | undefined;
let _new_version = false;

export function hasNewVersion() {
    return _new_version;
}

/**
 * Setup handler for cache change events
 * @param cache Angular Service worker service
 * @param interval Time interval to check the cache for changes
 */
export function setupCache(cache: SwUpdate, interval: number = 5 * 60 * 1000) {
    if (cache.isEnabled) {
        if (_timer) clearInterval(_timer);
        if (!_version_subscription) {
            _version_subscription = cache.versionUpdates.subscribe((event) => {
                if (event.type !== 'VERSION_READY' || _new_version) return;
                log('CACHE', `New application version is ready.`);
                _new_version = true;
                notifyInfo(
                    'Newer version of the application is available',
                    'Refresh',
                    () => location.reload(),
                );
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
                    notifyInfo(
                        'Application update failed to load',
                        'Reload',
                        () => location.reload(),
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
