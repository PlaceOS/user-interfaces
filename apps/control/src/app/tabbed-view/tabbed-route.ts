import { UrlMatchResult, UrlSegment } from '@angular/router';

/**
 * Matches `tabbed/:system` with an optional `/:tab`.
 * One route config for both forms lets the router reuse the tabbed view
 * when the tab changes, instead of building it again.
 */
export function tabbedRouteMatcher(
    segments: UrlSegment[],
): UrlMatchResult | null {
    const [root, system, tab] = segments;
    if (root?.path !== 'tabbed' || !system || segments.length > 3) {
        return null;
    }
    return {
        consumed: segments,
        posParams: tab ? { system, tab } : { system },
    };
}
