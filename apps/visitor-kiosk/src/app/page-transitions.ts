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

/** First step of the check-in and check-out flows */
const FLOW_START = 'scan';

export type FlowDirection = 'forward' | 'back';

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
 * Direction of a move between the steps of one flow, such as from
 * `checkin/scan` to `checkin/details`. Settings change the order of the
 * other steps, so only a move to the first step goes back.
 * @returns null for a move into or out of a flow
 */
export function flowDirection(
    from: readonly string[],
    to: readonly string[],
): FlowDirection | null {
    if (from.length < 2 || to.length < 2 || from[0] !== to[0]) return null;
    return to[1] === FLOW_START ? 'back' : 'forward';
}

/** Transition that owns the motion attribute */
let _active: ViewTransition | null = null;

/**
 * Pass as `onViewTransitionCreated` to `withViewTransitions`. Skips the
 * transition when only the query params change, for example when explore
 * changes its search. Marks the idle reset, so that it fades slowly, and the
 * direction of a move between the steps of a flow, so that the step card
 * slides.
 */
export function onPageTransitionCreated({
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
    const info = inject(Router).currentNavigation()?.extras.info;
    const motion =
        info === IDLE_RESET_INFO ? 'reset' : flowDirection(before, after);
    _active = transition;
    if (motion) root.setAttribute(MOTION_ATTRIBUTE, motion);
    else root.removeAttribute(MOTION_ATTRIBUTE);
    const clear = () => {
        // A newer transition owns the attribute now
        if (_active !== transition) return;
        _active = null;
        root.removeAttribute(MOTION_ATTRIBUTE);
    };
    transition.finished.then(clear, clear);
}
