import { SwUpdate } from '@angular/service-worker';

import { log } from './general';
import { notifyInfo } from './notifications';

let _timer: number;

/**
 * Setup handler for cache change events
 * @param cache Angular Service worker service
 * @param notify Function to call on changes to the cache
 * @param interval Time interval to check the cache for changes
 */
export function setupCache(
    cache: SwUpdate,
    interval: number = 5 * 60 * 1000
) {
    if (cache.isEnabled) {
        if (_timer) clearInterval(_timer);
        _timer = <any>setInterval(async () => {
            log('CACHE', `Checking for updates...`);
            activateUpdate(cache);
        }, interval);
    }
}

/**
 * Update the cache and reload the page
 *
 */
async function activateUpdate(cache: SwUpdate) {
    if (cache.isEnabled && await cache.checkForUpdate()) {
        log('CACHE', `Activating changes to the cache...`);
        if (!await cache.activateUpdate()) return;
        notifyInfo('Newer version of the application is available', 'Refresh', () =>
            location.reload()
        );
    }
}
