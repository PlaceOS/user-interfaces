import { Router } from '@angular/router';

import { RemoteSetupTarget } from '@placeos/common';
import { CONTROL_STORE_KEY } from './control-store-key';

/**
 * Remote setup of the control panel. Changes go through the query parameters
 * of the bootstrap route, the same as a setup link.
 */
export function controlRemoteSetup(router: Router): RemoteSetupTarget {
    return {
        app: 'control',
        default_path: '/concierge/#/remote-setup',
        system_id: () => localStorage.getItem(CONTROL_STORE_KEY),
        apply: (config) =>
            router.navigate(['/bootstrap'], {
                queryParams: config
                    ? { system_id: config.system_id }
                    : { clear: true },
            }),
    };
}
