import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    convertToParamMap,
    provideRouter,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';

import { routes } from '../app/app.routes';
import { StoreService } from '../app/data/store.service';

describe('level route', () => {
    const floorplanForLevel = vi.fn();

    /** Runs the guard of `level/:level_id` the way the router does */
    const open = (level_id: string) => {
        const guard = routes.find((route) => route.path === 'level/:level_id')
            ?.canActivate?.[0] as CanActivateFn;
        const route = {
            paramMap: convertToParamMap({ level_id }),
        } as ActivatedRouteSnapshot;
        return TestBed.runInInjectionContext(() =>
            guard(route, {} as RouterStateSnapshot),
        ) as Promise<UrlTree>;
    };

    beforeEach(() => {
        floorplanForLevel.mockReset();
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                { provide: StoreService, useValue: { floorplanForLevel } },
            ],
        });
    });

    it("opens the editor on the level's floorplan", async () => {
        floorplanForLevel.mockResolvedValue({ id: 'floor-7' });

        expect((await open('level-2')).toString()).toBe('/editor/floor-7');
        expect(floorplanForLevel).toHaveBeenCalledWith('level-2');
    });

    it('goes to the project list when the level cannot be opened', async () => {
        vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        floorplanForLevel.mockRejectedValue(new Error('offline'));

        expect((await open('level-2')).toString()).toBe('/');
    });
});
