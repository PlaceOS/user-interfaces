import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    Building,
    BuildingLevel,
    OrganisationService,
    Region,
    SettingsService,
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
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        window.PLACEOS_PUBLIC_MODE = false;
        localStorage.clear();
        spectator = createComponent();
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
    });

    it('should navigate to checkin preferences when action is preferences', () => {
        const router = spectator.inject(Router);
        spectator.setRouteQueryParam('action', 'preferences');
        spectator.setRouteQueryParam('token', 'abc.123');
        spectator.detectChanges();

        spectator.component.bootstrapKiosk({
            building: new Building({ id: 'bld-1' }),
            level: new BuildingLevel({ id: 'lvl-1' }),
            orientation: null,
            location: null,
        });

        expect(router.navigate).toHaveBeenCalledWith(
            ['/checkin', 'preferences'],
            {
                queryParams: { action: 'preferences', token: 'abc.123' },
            },
        );
    });

    it('should bypass bootstrap when action is preferences on load', async () => {
        const router = spectator.inject(Router);
        spectator.setRouteQueryParam('action', 'preferences');
        spectator.setRouteQueryParam('token', 'abc.123');
        await spectator.component.ngOnInit();

        expect(router.navigate).toHaveBeenCalledWith(
            ['/checkin', 'preferences'],
            {
                queryParams: { action: 'preferences', token: 'abc.123' },
            },
        );
    });

    it('should re-direct if already bootstrapped', async () => {
        const router = spectator.inject(Router);
        expect(router.navigate).not.toHaveBeenCalled();
        await spectator.component.ngOnInit();
        localStorage.setItem('KIOSK.building', '1');
        localStorage.setItem('KIOSK.level', '1');
        expect(router.navigate).not.toHaveBeenCalled();
        await spectator.component.ngOnInit();
        expect(router.navigate).toHaveBeenCalled();
    });

    it('should show public mode blocker when enabled', () => {
        window.PLACEOS_PUBLIC_MODE = true;
        spectator.detectChanges();
        expect(spectator.query('h2')?.textContent?.trim()).toBe(
            'Public mode is enabled',
        );
    });
});
