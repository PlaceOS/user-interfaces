import { DestroyRef } from '@angular/core';
import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';

/** Routes here are at most 3 levels deep. The bound stops a bad tree from looping */
const MAX_ROUTE_DEPTH = 16;

/** End of the page transition that runs now */
let transition_done: Promise<unknown> = Promise.resolve();

/** Component of the deepest route, which is the page that shows */
function pageComponent(route: ActivatedRouteSnapshot) {
    let leaf = route;
    for (let depth = 0; leaf.firstChild && depth < MAX_ROUTE_DEPTH; depth++) {
        leaf = leaf.firstChild;
    }
    return leaf.component;
}

/**
 * Skips the page transition when the page stays the same, for example when a
 * filter changes the query parameters or the alerts page changes dashboard.
 * Pass it as `onViewTransitionCreated` to `withViewTransitions`.
 */
export function onPageTransitionCreated({
    transition,
    from,
    to,
}: ViewTransitionInfo) {
    if (pageComponent(from) === pageComponent(to)) {
        transition.skipTransition();
        return;
    }
    transition_done = transition.finished.catch(() => undefined);
}

/**
 * Runs `fn` after the page transition that runs now, if the page is not
 * destroyed first. Each navigation starts a view transition, and the browser
 * then stops the transition that runs. Use it for a navigation that only
 * updates the URL when a page opens, for example to keep its filters in the URL.
 */
export function afterPageTransition(destroy_ref: DestroyRef, fn: () => void) {
    transition_done.then(() => {
        if (!destroy_ref.destroyed) fn();
    });
}
