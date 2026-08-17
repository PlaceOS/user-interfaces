import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';

/**
 * Guards the templates section behind the `app.templates_enabled` feature
 * flag. Waits for the org to initialise so settings overrides from zone
 * metadata have been applied before the flag is read.
 */
export const templatesEnabledGuard: CanActivateFn = async () => {
    const settings = inject(SettingsService);
    const router = inject(Router);
    const org = inject(OrganisationService);

    await org.waitUntilInitialised();
    return settings.get('app.templates_enabled')
        ? true
        : router.parseUrl('/media');
};
