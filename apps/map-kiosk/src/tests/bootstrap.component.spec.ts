import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    SpectatorRouting,
    createRoutingFactory,
} from '@ngneat/spectator/vitest';
import {
    Building,
    BuildingLevel,
    OrganisationService,
    Region,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BootstrapComponent } from '../app/bootstrap.component';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building({ id: '1' }),
                buildings: [
                    new Building({ id: '1' }),
                    new Building({ id: '2' }),
                ],
                levelsForBuilding: () => [
                    new BuildingLevel({ id: '1' }),
                    new BuildingLevel({ id: '2' }),
                ],
                levelWithID: () => new BuildingLevel({ id: '1' }),
                region_list: signal([new Region({ name: '1', id: '1' })]),
                active_buildings: signal([
                    new Building({ name: '1', id: '1', parent_id: '1' }),
                ]),
                active_levels: signal([
                    new BuildingLevel({ id: '1' }),
                    new BuildingLevel({ id: '2' }),
                ]),
                initialised: signal(true),
            }),
        ],
    });

    beforeEach(() => {
        localStorage.clear();
        spectator = createComponent();
    });

    afterEach(() => {
        localStorage.clear();
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it('should save the parking flag and route to the matching view', () => {
        const router = spectator.inject(Router);
        const kiosk = {
            building: null,
            level: new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-1' }),
            orientation: null,
            location: null,
        };
        spectator.component.parking.set(true);
        spectator.component.bootstrapKiosk(kiosk);
        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-1');
        expect(localStorage.getItem('KIOSK.parking')).toBe('true');
        expect(router.navigate).toHaveBeenCalledWith(['/parking']);

        spectator.component.parking.set(false);
        spectator.component.bootstrapKiosk(kiosk);
        expect(localStorage.getItem('KIOSK.parking')).toBeNull();
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
    });

    it('should handle clearing bootstrap details', () => {
        vi.spyOn(Storage.prototype, 'removeItem');
        expect(localStorage.removeItem).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();
        expect(localStorage.removeItem).toHaveBeenCalledWith('KIOSK.building');
        expect(localStorage.removeItem).toHaveBeenCalledWith('KIOSK.level');
        expect(localStorage.removeItem).toHaveBeenCalledWith(
            'KIOSK.orientation',
        );
        expect(localStorage.removeItem).toHaveBeenCalledWith('KIOSK.parking');
        expect(localStorage.removeItem).toHaveBeenCalledWith('KIOSK.location');
    });

    it('should re-direct if already bootstrapped', async () => {
        vi.useFakeTimers();
        const router = spectator.inject(Router);
        expect(router.navigate).not.toHaveBeenCalled();
        await spectator.component.ngOnInit();
        await vi.advanceTimersByTimeAsync(1001);
        localStorage.setItem('KIOSK.building', '1');
        localStorage.setItem('KIOSK.level', '1');
        expect(router.navigate).not.toHaveBeenCalled();
        await spectator.component.ngOnInit();
        await vi.advanceTimersByTimeAsync(1001);
        expect(router.navigate).toHaveBeenCalled();
    });
});
