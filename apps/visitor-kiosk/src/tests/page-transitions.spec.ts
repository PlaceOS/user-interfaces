import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    ActivatedRouteSnapshot,
    Router,
    ViewTransitionInfo,
} from '@angular/router';

import {
    flowDirection,
    IDLE_RESET_INFO,
    onPageTransitionCreated,
} from '../app/page-transitions';

/** Root route snapshot with one child route for each path */
function routeTree(...paths: string[]) {
    let child: unknown = null;
    for (const path of [...paths].reverse()) {
        child = { url: [{ path }], firstChild: child };
    }
    return { url: [], firstChild: child } as unknown as ActivatedRouteSnapshot;
}

describe('onPageTransitionCreated', () => {
    let info: unknown;

    /** Starts a transition and returns it with a function that ends it */
    function startTransition(from: string[], to: string[]) {
        let finish = () => {};
        const transition = {
            skipTransition: vi.fn(),
            finished: new Promise<void>((resolve) => (finish = resolve)),
        };
        runInInjectionContext(TestBed.inject(Injector), () =>
            onPageTransitionCreated({
                transition,
                from: routeTree(...from),
                to: routeTree(...to),
            } as unknown as ViewTransitionInfo),
        );
        return { transition, finish };
    }

    beforeEach(() => {
        info = undefined;
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Router,
                    useValue: {
                        currentNavigation: () => ({ extras: { info } }),
                    },
                },
            ],
        });
    });

    afterEach(() => {
        document.documentElement.removeAttribute('data-page-motion');
        TestBed.resetTestingModule();
    });

    it('should skip the transition when only the query params change', () => {
        const { transition } = startTransition(
            ['explore', 'level-1'],
            ['explore', 'level-1'],
        );

        expect(transition.skipTransition).toHaveBeenCalled();
    });

    it('should mark the idle reset until its transition ends', async () => {
        info = IDLE_RESET_INFO;
        const { transition, finish } = startTransition(
            ['checkin', 'details'],
            ['welcome'],
        );

        expect(transition.skipTransition).not.toHaveBeenCalled();
        expect(document.documentElement.dataset['pageMotion']).toBe('reset');
        finish();
        await Promise.resolve();
        expect(document.documentElement.hasAttribute('data-page-motion')).toBe(
            false,
        );
    });
});

describe('flowDirection', () => {
    it('should go forward between steps and back to the first step', () => {
        expect(flowDirection(['checkin', 'scan'], ['checkin', 'details'])).toBe(
            'forward',
        );
        expect(
            flowDirection(['checkin', 'details'], ['checkin', 'induction']),
        ).toBe('forward');
        expect(flowDirection(['checkin', 'error'], ['checkin', 'scan'])).toBe(
            'back',
        );
    });

    it('should have no direction into or out of a flow', () => {
        expect(flowDirection(['welcome'], ['checkin', 'scan'])).toBeNull();
        expect(flowDirection(['register'], ['checkin', 'details'])).toBeNull();
        expect(flowDirection(['checkin', 'results'], ['welcome'])).toBeNull();
    });
});
