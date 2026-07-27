import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
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

function waitForSignageGroups(service: SignageService) {
    return new Promise<void>((resolve) => {
        const check = () => {
            if (service.signage_groups_loaded()) {
                resolve();
            } else {
                setTimeout(check, 50);
            }
        };
        check();
    });
}

export const signageAccessGuard: CanActivateChildFn = async () => {
    const service = inject(SignageService);
    const router = inject(Router);

    await waitForSignageGroups(service);
    return canAccessSignageApp(
        service.can_manage_all_groups(),
        service.signage_groups().length,
        service.signage_groups_failed(),
    )
        ? true
        : router.parseUrl('/unauthorised');
};
