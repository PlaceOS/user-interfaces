import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CanActivateChildFn, Router } from '@angular/router';
import { filter, map, take } from 'rxjs/operators';
import { SignageService } from './signage.service';

export function canAccessSignageApp(
    can_manage_all_groups: boolean,
    group_count: number,
): boolean {
    return can_manage_all_groups || group_count > 0;
}

export const signageAccessGuard: CanActivateChildFn = () => {
    const service = inject(SignageService);
    const router = inject(Router);

    return toObservable(service.signage_groups_loaded).pipe(
        filter(Boolean),
        take(1),
        map(() =>
            canAccessSignageApp(
                service.can_manage_all_groups(),
                service.signage_groups().length,
            )
                ? true
                : router.parseUrl('/unauthorised'),
        ),
    );
};
