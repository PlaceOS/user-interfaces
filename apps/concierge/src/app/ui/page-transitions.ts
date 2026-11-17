import { DestroyRef, inject } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Params,
    Router,
    ViewTransitionInfo,
} from '@angular/router';

/** Routes here are at most 4 levels deep. The bound stops a bad tree from looping */
const MAX_ROUTE_DEPTH = 16;
/** Page transitions that a write waits for. Each lasts about 200ms */
const MAX_TRANSITION_WAITS = 8;

/** End of the page transition that runs now. Null when none runs */
let transition_done: Promise<void> | null = null;

/** Path of the primary route chain from `root` down, without query params */
export function routePath(root: ActivatedRouteSnapshot) {
    const segments: string[] = [];
    let route: ActivatedRouteSnapshot | null = root;
    for (let depth = 0; route && depth < MAX_ROUTE_DEPTH; depth++) {
        segments.push(...route.url.map(({ path }) => path));
        route = route.firstChild;
    }
    return segments.join('/');
}

/**
 * Skips the page transition when only the query params change, for example
 * when a filter changes. Pass it as `onViewTransitionCreated` to
 * `withViewTransitions`. The page styles are in styles.css.
 */
export function onPageTransitionCreated({
    transition,
    from,
    to,
}: ViewTransitionInfo) {
    if (routePath(from) === routePath(to)) {
        transition.skipTransition();
        return;
    }
    const done: Promise<void> = transition.finished
        .catch(() => undefined)
        .then(() => {
            // A newer transition can replace this one before it ends
            if (transition_done === done) transition_done = null;
        });
    transition_done = done;
}

/**
 * Makes a function that merges query params into the URL of the current
 * page. Each navigation starts a view transition, and the browser then stops
 * the transition that runs. So while a page transition runs, the write waits
 * for it to end. This lets a page keep its filters in the URL when it opens.
 * A write that waits does not occur if the page closes first. Call in an
 * injection context.
 */
export function queryParamsWriter() {
    const router = inject(Router);
    const route = inject(ActivatedRoute);
    const destroy_ref = inject(DestroyRef);
    const write = (queryParams: Params) => {
        if (destroy_ref.destroyed) return;
        void router.navigate([], {
            relativeTo: route,
            queryParams,
            queryParamsHandling: 'merge',
        });
    };
    // A newer page transition can start while the write waits
    const writeAfterTransition = (queryParams: Params, waits = 0) => {
        if (!transition_done || waits >= MAX_TRANSITION_WAITS) {
            write(queryParams);
            return;
        }
        transition_done.then(() =>
            writeAfterTransition(queryParams, waits + 1),
        );
    };
    return (queryParams: Params) => writeAfterTransition(queryParams);
}
