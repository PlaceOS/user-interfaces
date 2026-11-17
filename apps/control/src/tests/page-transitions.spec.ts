import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';

import { onPageTransitionCreated } from '../app/page-transitions';

/** Route chain with one URL segment for each path part */
function snapshot(...paths: string[]) {
    let route: ActivatedRouteSnapshot | null = null;
    for (const path of [...paths].reverse()) {
        route = {
            url: [{ path }],
            firstChild: route,
        } as unknown as ActivatedRouteSnapshot;
    }
    return route as ActivatedRouteSnapshot;
}

/** Starts a transition between the two paths and returns its skip spy */
function startTransition(from: string[], to: string[]) {
    const skipTransition = vi.fn();
    onPageTransitionCreated({
        transition: { skipTransition },
        from: snapshot(...from),
        to: snapshot(...to),
    } as unknown as ViewTransitionInfo);
    return skipTransition;
}

describe('onPageTransitionCreated', () => {
    it('should skip the transition when only the query params change', () => {
        expect(
            startTransition(['', 'tabbed', 'sys-1'], ['', 'tabbed', 'sys-1']),
        ).toHaveBeenCalled();
    });

    it('should animate a tab change', () => {
        expect(
            startTransition(
                ['', 'tabbed', 'sys-1', 'video'],
                ['', 'tabbed', 'sys-1', 'tv'],
            ),
        ).not.toHaveBeenCalled();
    });
});
