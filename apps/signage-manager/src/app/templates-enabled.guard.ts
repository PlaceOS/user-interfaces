import { inject, Injector } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueWhere, OrganisationService } from '@placeos/common';
import { SignageContextService } from './signage-context.service';

/**
 * Guards the templates section behind the `templates` feature of the selected
 * group, which the `app.features` setting limits. Waits for the org to
 * initialise, so settings overrides from zone metadata apply, and for the
 * flags of the selected group to load. Redirects when the group list failed.
 */
export const templatesEnabledGuard: CanActivateFn = async () => {
    const service = inject(SignageContextService);
    const router = inject(Router);
    const org = inject(OrganisationService);
    const injector = inject(Injector);

    await Promise.all([
        org.waitUntilInitialised(),
        firstValueWhere(service.features_ready, Boolean, injector),
    ]);
    return service.templates_enabled() && !service.signage_groups_failed()
        ? true
        : router.parseUrl('/media');
};
