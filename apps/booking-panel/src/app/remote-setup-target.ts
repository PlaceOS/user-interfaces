import { Router } from '@angular/router';

import { RemoteSetupTarget } from '@placeos/common';

/** Local storage key of the system that the panel shows */
export const BOOKING_STORE_KEY = 'PLACEOS.BOOKINGS.system';
/** Local storage flag that opens the events view instead of the panel */
export const EVENT_KEY = 'PLACEOS.Bookings.event';

/**
 * Remote setup of the booking panel. Changes go through the query parameters
 * of the bootstrap route, the same as a setup link.
 */
export function bookingRemoteSetup(router: Router): RemoteSetupTarget {
    return {
        app: 'booking-panel',
        default_path: '/concierge/#/remote-setup',
        current: () => {
            const system_id = localStorage.getItem(BOOKING_STORE_KEY);
            if (!system_id) return null;
            return {
                system_id,
                event_view: localStorage.getItem(EVENT_KEY) === 'true',
            };
        },
        apply: (config) => {
            // The view is part of the configuration, so a saved events
            // flag must not stay after a change that turns it off.
            if (!config?.event_view) localStorage.removeItem(EVENT_KEY);
            const query = !config
                ? { clear: true }
                : config.event_view
                  ? { system_id: config.system_id, event: true }
                  : { system_id: config.system_id };
            return router.navigate(['/bootstrap'], { queryParams: query });
        },
    };
}
