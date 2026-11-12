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
                levelWithID: (ids: string[]) =>
                    new BuildingLevel({ id: ids[0], parent_id: 'bld-1' }),
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
        vi.resetAllMocks();
        window.PLACEOS_PUBLIC_MODE = false;
        localStorage.clear();
        spectator = createComponent();
    });

    it('should clear the saved kiosk location when the URL asks', () => {
        localStorage.setItem('KIOSK.building', '1');
        localStorage.setItem('KIOSK.level', '1');
        localStorage.setItem('KIOSK.orientation', '90');

        spectator.setRouteQueryParam('clear', 'true');

        expect(localStorage.getItem('KIOSK.building')).toBeNull();
        expect(localStorage.getItem('KIOSK.level')).toBeNull();
        expect(localStorage.getItem('KIOSK.orientation')).toBeNull();
    });

    it('should save the level from the URL and open the start page', () => {
        spectator.setRouteQueryParam('level', 'lvl-1');

        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-1');
        expect(localStorage.getItem('KIOSK.building')).toBe('bld-1');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/welcome',
        ]);
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

    it('should stay on setup until the kiosk has a location', async () => {
        await spectator.component.ngOnInit();

        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should open the default route when already bootstrapped', async () => {
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) =>
                key === 'app.default_route' ? 'checkin/scan' : undefined,
        );
        localStorage.setItem('KIOSK.building', '1');
        localStorage.setItem('KIOSK.level', '1');

        await spectator.component.ngOnInit();

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'scan',
        ]);
    });

    it('should show public mode blocker when enabled', () => {
        window.PLACEOS_PUBLIC_MODE = true;
        spectator.detectChanges();
        expect(spectator.query('h2')?.textContent?.trim()).toBe(
            'Public mode is enabled',
        );
    });
});
