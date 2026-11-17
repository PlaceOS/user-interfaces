import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';

/** Routes here are at most 3 segments deep. The bound stops a bad tree from looping */
const MAX_ROUTE_DEPTH = 16;

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
 * when the tabbed view clears `join`. A tab change changes the path, so it
 * animates. Pass it as `onViewTransitionCreated` to `withViewTransitions`.
 * The page styles are in styles.css.
 */
export function onPageTransitionCreated({
    transition,
    from,
    to,
}: ViewTransitionInfo) {
    if (routePath(from) === routePath(to)) transition.skipTransition();
}
