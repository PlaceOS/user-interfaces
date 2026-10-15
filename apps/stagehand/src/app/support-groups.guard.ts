import { inject, Injector } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueWhere, user_groups_loaded } from '@placeos/common';
import { SupportGroupsService } from './support-groups.service';

/**
 * Lets in users who can see every group, or who are in a support group. A
 * failed group request looks the same as "no groups", so it lets the user in
 * rather than lock them out over it; the backend still checks every request.
 */
export const supportGroupsGuard: CanActivateFn = async () => {
    const groups = inject(SupportGroupsService);
    const router = inject(Router);
    const injector = inject(Injector);
    await Promise.all([
        firstValueWhere(user_groups_loaded, Boolean, injector),
        firstValueWhere(groups.groups_loaded, Boolean, injector),
    ]);
    return groups.can_view_all() ||
        groups.groups().length > 0 ||
        groups.groups_failed()
        ? true
        : router.parseUrl('/unauthorised');
};
