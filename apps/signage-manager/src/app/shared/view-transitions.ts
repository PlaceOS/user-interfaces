import { DOCUMENT, inject } from '@angular/core';
import type {
    ActivatedRouteSnapshot,
    ViewTransitionInfo,
} from '@angular/router';

/** Deepest route that `routeSegments` reads. The app nests two levels. */
const MAX_ROUTE_DEPTH = 16;

/** Attribute on `<html>` that the slide styles in `styles.css` read */
const DIRECTION_ATTRIBUTE = 'data-nav-direction';

export type NavDirection = 'forward' | 'back';

/** Path segments of the primary route chain from `root` down */
export function routeSegments(root: ActivatedRouteSnapshot) {
    const segments: string[] = [];
    let route: ActivatedRouteSnapshot | null = root;
    for (let depth = 0; route && depth < MAX_ROUTE_DEPTH; depth++) {
        segments.push(...route.url.map(({ path }) => path));
        route = route.firstChild;
    }
    return segments;
}

/**
 * Direction of a move in one section, such as from a list to an item.
 * @returns `forward` to a deeper path, `back` to a shorter one, or null
 * between sections and between paths of the same depth
 */
export function navDirection(
    from: readonly string[],
    to: readonly string[],
): NavDirection | null {
    if (!from.length || from[0] !== to[0] || from.length === to.length) {
        return null;
    }
    return to.length > from.length ? 'forward' : 'back';
}

/** Transition that owns the direction attribute */
let _active: ViewTransition | null = null;

/**
 * `onViewTransitionCreated` of the router. Skips the transition when only
 * the query params change, such as a tab, and marks the direction of a move
 * in one section, so that small screens slide the page.
 */
export function onViewTransitionCreated({
    transition,
    from,
    to,
}: ViewTransitionInfo) {
    const before = routeSegments(from);
    const after = routeSegments(to);
    if (before.join('/') === after.join('/')) {
        transition.skipTransition();
        return;
    }
    const root = inject(DOCUMENT).documentElement;
    const direction = navDirection(before, after);
    _active = transition;
    if (direction) root.setAttribute(DIRECTION_ATTRIBUTE, direction);
    else root.removeAttribute(DIRECTION_ATTRIBUTE);
    const clear = () => {
        // A newer transition owns the attribute now
        if (_active !== transition) return;
        _active = null;
        root.removeAttribute(DIRECTION_ATTRIBUTE);
    };
    transition.finished.then(clear, clear);
}
