import { SwUpdate } from '@angular/service-worker';

import { log } from './general';
import { Subscription } from 'rxjs';
import { notifyInfo } from './notifications';

let _available: Subscription;
let _activated: Subscription;
let _timer: number;

export type Notification = (message: string, callback: () => void) => void;

/**
 * Setup handler for cache change events
 * @param cache Angular Service worker service
 * @param notify Function to call on changes to the cache
 * @param interval Time interval to check the cache for changes
 */
export function setupCache(
    cache: SwUpdate,
    notify: Notification = () => null,
    interval: number = 5 * 60 * 1000
) {
    if (cache.isEnabled) {
        if (_available) _available.unsubscribe();
        if (_activated) _activated.unsubscribe();
        if (_timer) clearInterval(_timer);
        _available = cache.available.subscribe((event) => {
            const current = `current version is ${event.current.hash}`;
            const available = `available version is ${event.available.hash}`;
            log('CACHE', `Update available: ${current} ${available}`);
            activateUpdate();
        });
        _activated = cache.activated.subscribe(() => {
            log('CACHE', `Updates activated. Reloading...`);
            notify('Newer version of the application is available', () =>
                location.reload(true)
            );
        });
        _timer = <any>setInterval(() => {
            log('CACHE', `Checking for updates...`);
            this._cache.checkForUpdate();
        }, interval);
    }
}

/**
 * Update the cache and reload the page
 *
 */
function activateUpdate() {
    if (this._cache.isEnabled) {
        log('CACHE', `Activating changes to the cache...`);
        this._cache.activateUpdate().then(() => {
            notifyInfo('Newer version of the application is available', 'Refresh', () =>
                location.reload(true)
            );
        });
    }
}
