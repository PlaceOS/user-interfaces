import { DestroyRef } from '@angular/core';
import { ActivatedRouteSnapshot, ViewTransitionInfo } from '@angular/router';
import {
    afterPageTransition,
    onPageTransitionCreated,
} from '../app/page-transitions';

class AlertsPage {}
class DashboardsPage {}
class DashboardListPage {}
class DashboardEditorPage {}

/** Root route snapshot with a chain of child routes */
function routeTree(...components: unknown[]) {
    let child: unknown = null;
    for (const component of [...components].reverse()) {
        child = { component, firstChild: child };
    }
    return {
        component: null,
        firstChild: child,
    } as unknown as ActivatedRouteSnapshot;
}

/** View transition that finishes when `finish` is called */
function createTransition(
    from: ActivatedRouteSnapshot,
    to: ActivatedRouteSnapshot,
) {
    let finish = () => {};
    const transition = {
        skipTransition: vi.fn(),
        finished: new Promise<void>((resolve) => (finish = resolve)),
    };
    onPageTransitionCreated({
        transition,
        from,
        to,
    } as unknown as ViewTransitionInfo);
    return { transition, finish };
}

describe('onPageTransitionCreated', () => {
    it('should skip the transition when the page stays the same', () => {
        const { transition } = createTransition(
            routeTree(AlertsPage),
            routeTree(AlertsPage),
        );

        expect(transition.skipTransition).toHaveBeenCalled();
    });

    it('should keep the transition when the child page changes', () => {
        const { transition } = createTransition(
            routeTree(DashboardsPage, DashboardListPage),
            routeTree(DashboardsPage, DashboardEditorPage),
        );

        expect(transition.skipTransition).not.toHaveBeenCalled();
    });
});

describe('afterPageTransition', () => {
    it('should wait for the page transition to finish', async () => {
        const { finish } = createTransition(
            routeTree(DashboardsPage),
            routeTree(AlertsPage),
        );
        const fn = vi.fn();

        afterPageTransition({ destroyed: false } as DestroyRef, fn);
        await Promise.resolve();
        expect(fn).not.toHaveBeenCalled();

        finish();
        await vi.waitFor(() => expect(fn).toHaveBeenCalledTimes(1));
    });

    it('should not run when the page is destroyed first', async () => {
        const { finish } = createTransition(
            routeTree(DashboardsPage),
            routeTree(AlertsPage),
        );
        const fn = vi.fn();
        const destroy_ref = { destroyed: false };

        afterPageTransition(destroy_ref as DestroyRef, fn);
        destroy_ref.destroyed = true;
        finish();
        // let the transition promise chain settle
        await new Promise((resolve) => setTimeout(resolve));

        expect(fn).not.toHaveBeenCalled();
    });
});
