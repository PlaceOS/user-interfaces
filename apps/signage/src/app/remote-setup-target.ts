import { Router } from '@angular/router';

import { RemoteSetupTarget } from '@placeos/common';
import { STORE_DISPLAY_KEY } from './bootstrap-state';

/**
 * Remote setup of the signage player. Changes go through the query
 * parameters of the bootstrap route, the same as a setup link.
 */
export function signageRemoteSetup(router: Router): RemoteSetupTarget {
    return {
        app: 'signage',
        default_path: '/signage-manager/#/remote-setup',
        system_id: () => localStorage.getItem(STORE_DISPLAY_KEY),
        apply: (config) =>
            router.navigate(['/bootstrap'], {
                queryParams: !config
                    ? { clear: true }
                    : config.template_id
                      ? {
                            display: config.system_id,
                            template: config.template_id,
                        }
                      : { display: config.system_id },
            }),
    };
}
