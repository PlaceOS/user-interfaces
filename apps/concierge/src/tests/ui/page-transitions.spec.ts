import { TestBed } from '@angular/core/testing';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Router,
    ViewTransitionInfo,
} from '@angular/router';

import {
    onPageTransitionCreated,
    queryParamsWriter,
} from '../../app/ui/page-transitions';

/** Route chain with one URL segment for each path part */
function snapshot(...paths: string[]) {
    let route: ActivatedRouteSnapshot | null = null;
    for (const path of paths.reverse()) {
        route = {
            url: [{ path }],
            firstChild: route,
        } as unknown as ActivatedRouteSnapshot;
    }
    return route as ActivatedRouteSnapshot;
}

describe('page transitions', () => {
    let navigate: ReturnType<typeof vi.fn>;
    let finish: () => void;

    const startTransition = (from: string[], to: string[]) => {
        const skipTransition = vi.fn();
        const finished = new Promise<void>((resolve) => (finish = resolve));
        onPageTransitionCreated({
            transition: { skipTransition, finished },
            from: snapshot(...from),
            to: snapshot(...to),
        } as unknown as ViewTransitionInfo);
        return skipTransition;
    };

    beforeEach(() => {
        navigate = vi.fn();
        TestBed.configureTestingModule({
            providers: [
                { provide: Router, useValue: { navigate } },
                { provide: ActivatedRoute, useValue: {} },
            ],
        });
    });

    it('should skip the transition when only the query params change', () => {
        expect(
            startTransition(['book', 'desks'], ['book', 'desks']),
        ).toBeCalled();
        expect(
            startTransition(['book', 'desks'], ['book', 'rooms']),
        ).not.toBeCalled();
        finish();
    });

    it('should write query params after the page transition ends', async () => {
        const write = TestBed.runInInjectionContext(() => queryParamsWriter());

        startTransition(['book', 'desks'], ['book', 'rooms']);
        write({ zone_ids: 'lvl-1' });
        expect(navigate).not.toBeCalled();

        finish();
        await vi.waitFor(() =>
            expect(navigate).toBeCalledWith(
                [],
                expect.objectContaining({ queryParams: { zone_ids: 'lvl-1' } }),
            ),
        );

        write({ zone_ids: 'lvl-2' });
        expect(navigate).toHaveBeenLastCalledWith(
            [],
            expect.objectContaining({ queryParams: { zone_ids: 'lvl-2' } }),
        );
    });

    it('should also wait for a page transition that starts while it waits', async () => {
        const write = TestBed.runInInjectionContext(() => queryParamsWriter());

        startTransition(['book', 'desks'], ['book', 'rooms']);
        const finishFirst = finish;
        write({ zone_ids: 'lvl-1' });
        startTransition(['book', 'rooms'], ['book', 'visitors']);
        finishFirst();
        await new Promise((resolve) => setTimeout(resolve));
        expect(navigate).not.toBeCalled();

        finish();
        await vi.waitFor(() => expect(navigate).toBeCalled());
    });
});
