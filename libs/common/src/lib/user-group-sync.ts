import { DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { checkUserGroupChanges } from './user-state';

/** Delays after the first page is displayed to check the user's groups again */
const GROUP_CHECK_DELAYS = [2_000, 10_000];

/**
 * Check for group changes from the sign in group sync after the first page is
 * displayed. Group-based rules and views update when the groups change.
 *
 * Call from the root component constructor.
 */
export function watchUserGroupSync() {
    const router = inject(Router);
    const timers: ReturnType<typeof setTimeout>[] = [];
    inject(DestroyRef).onDestroy(() => timers.forEach(clearTimeout));
    router.events
        .pipe(
            // `/-` only redirects to the default route, so wait for that page
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd &&
                    event.urlAfterRedirects.split('?')[0] !== '/-',
            ),
            first(),
        )
        .subscribe(() => {
            for (const delay of GROUP_CHECK_DELAYS) {
                timers.push(
                    setTimeout(async () => {
                        if (!(await checkUserGroupChanges())) return;
                        // Access groups can have sent the user here before
                        // the sync finished. Try the default route again.
                        if (router.url.startsWith('/unauthorised')) {
                            router.navigateByUrl('/');
                        }
                    }, delay),
                );
            }
        });
}
