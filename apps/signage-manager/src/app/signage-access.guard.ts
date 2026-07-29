import { inject, Injector } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import {
    firstValueWhere,
    OrganisationService,
    user_groups_loaded,
} from '@placeos/common';
import { SignageService } from './signage.service';

export function canAccessSignageApp(
    can_manage_all_groups: boolean,
    group_count: number,
    groups_failed = false,
): boolean {
    // A failed group request looks identical to "no groups", so don't lock a
    // permitted user out over it — the backend still enforces access.
    return can_manage_all_groups || group_count > 0 || groups_failed;
}

export const signageAccessGuard: CanActivateChildFn = async () => {
    const service = inject(SignageService);
    const router = inject(Router);
    const org = inject(OrganisationService);
    const injector = inject(Injector);

    await Promise.all([
        org.waitUntilInitialised(),
        firstValueWhere(user_groups_loaded, Boolean, injector),
        firstValueWhere(service.signage_groups_loaded, Boolean, injector),
    ]);
    return canAccessSignageApp(
        service.can_manage_all_groups(),
        service.signage_groups().length,
        service.signage_groups_failed(),
    )
        ? true
        : router.parseUrl('/unauthorised');
};
