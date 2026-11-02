import { inject, linkedSignal, type Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Tab of a page that the `tab` query param holds. The tab follows the route,
 * and changes at once when users pick a tab. Picking a tab writes it to the
 * URL in place of the current history entry.
 *
 * Injects the router, so call it in an injection context.
 * @param param Value of the `tab` query param, such as a route-bound input
 * @param parse Turns the query value into a tab the page can show
 */
export function routedTab<T extends string>(
    param: Signal<string | null>,
    parse: (value: string | null) => T,
) {
    const route = inject(ActivatedRoute);
    const router = inject(Router);
    const active = linkedSignal(() => parse(param()));

    return {
        active: active.asReadonly(),
        /** Show `tab` and write it to the URL */
        select(tab: T) {
            if (tab === active()) return;
            active.set(tab);
            void router.navigate([], {
                relativeTo: route,
                queryParams: { tab },
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });
        },
    };
}
