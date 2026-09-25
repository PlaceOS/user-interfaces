import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SIGNAGE_FEATURE_IDS } from './signage-features';

/**
 * Guards the templates section behind the `templates` entry of the
 * `app.features` setting. Waits for the org to initialise so settings overrides from zone
 * metadata have been applied before the flag is read.
 */
export const templatesEnabledGuard: CanActivateFn = async () => {
    const settings = inject(SettingsService);
    const router = inject(Router);
    const org = inject(OrganisationService);

    await org.waitUntilInitialised();
    const features: string[] =
        settings.get('app.features') ?? SIGNAGE_FEATURE_IDS;
    return features.includes('templates') ? true : router.parseUrl('/media');
};
