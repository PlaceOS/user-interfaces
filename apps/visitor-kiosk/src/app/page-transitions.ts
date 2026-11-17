import { DOCUMENT, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    ViewTransitionInfo,
} from '@angular/router';

/** Routes here are at most 3 levels deep. The bound stops a bad tree from looping */
const MAX_ROUTE_DEPTH = 16;

/** Attribute on `<html>` that the page motion styles in styles.css read */
const MOTION_ATTRIBUTE = 'data-page-motion';

/**
 * Navigation `info` for the return to the welcome page when the kiosk is
 * idle. That page change fades more slowly than a visitor action.
 */
export const IDLE_RESET_INFO = 'idle-reset';

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

/** Transition that owns the motion attribute */
let _active: ViewTransition | null = null;

/**
 * Pass as `onViewTransitionCreated` to `withViewTransitions`. Skips the
 * transition when only the query params change, for example when explore
 * changes its search. Marks the idle reset, so that it fades slowly.
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
    const root = inject(DOCUMENT).documentElement;
    const info = inject(Router).currentNavigation()?.extras.info;
    _active = transition;
    if (info === IDLE_RESET_INFO) root.setAttribute(MOTION_ATTRIBUTE, 'reset');
    else root.removeAttribute(MOTION_ATTRIBUTE);
    const clear = () => {
        // A newer transition owns the attribute now
        if (_active !== transition) return;
        _active = null;
        root.removeAttribute(MOTION_ATTRIBUTE);
    };
    transition.finished.then(clear, clear);
}
