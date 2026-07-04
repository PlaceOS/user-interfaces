import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { SpacesService } from '@placeos/events';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import {
    IconComponent,
    InteractiveMapComponent,
} from '@placeos/components';

import { ParkingComponent } from '../app/parking.component';

const state_mock = {
    map_url: signal(''),
    map_styles: signal({}),
    map_positions: signal({ zoom: 1, center: { x: 0.5, y: 0.5 } }),
    map_features: signal([]),
    map_actions: signal([]),
    map_labels: signal([]),
    options: signal({}),
    positions: { zoom: 1, center: { x: 0.5, y: 0.5 } },
    setPositions: jest.fn(),
    setFeatures: jest.fn(),
    setOptions: jest.fn(),
    setLevel: jest.fn(),
    building: null as any,
};

const parking_mock = {
    active_spaces: signal<any[]>([{}, {}, {}]),
    available_spaces: signal<any[]>([{}, {}]),
};

describe('ParkingComponent', () => {
    let spectator: SpectatorRouting<ParkingComponent>;
    const createComponent = createRoutingFactory({
        component: ParkingComponent,
        declarations: [
            mockComponent(InteractiveMapComponent),
            mockComponent(IconComponent),
        ],
        componentProviders: [
            { provide: ExploreStateService, useValue: state_mock },
            { provide: ExploreParkingService, useValue: parking_mock },
        ],
        providers: [
            { provide: MatDialog, useValue: { closeAll: jest.fn() } },
            {
                provide: SpacesService,
                useValue: { initialised: signal(true) },
            },
            {
                provide: SettingsService,
                useValue: { get: jest.fn(() => 180) },
            },
            {
                provide: OrganisationService,
                useValue: {
                    buildings: [{ id: 'bld-1' }],
                    levelWithID: jest.fn(() => ({
                        id: 'lvl-1',
                        parent_id: 'bld-1',
                    })),
                },
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        state_mock.building = null;
        parking_mock.active_spaces.set([{}, {}, {}]);
        parking_mock.available_spaces.set([{}, {}]);
        localStorage.clear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the free and total space counts', () => {
        expect(spectator.component.counts()).toEqual({
            total: 3,
            free: 2,
            busy: 1,
            percent: (2 / 3) * 100,
        });
        expect('footer').toContainText('Free Spaces: 2');
        expect('footer').toContainText('Total Capacity: 3 spaces');
    });

    it('should update the free space count when availability changes', () => {
        parking_mock.available_spaces.set([{}]);
        spectator.detectChanges();
        expect(spectator.component.counts().free).toBe(1);
        expect('footer').toContainText('Free Spaces: 1');
    });

    it('should update map zoom keeping the current center', () => {
        spectator.component.updateZoom(3);
        expect(state_mock.setPositions).toHaveBeenCalledWith(3, {
            x: 0.5,
            y: 0.5,
        });
    });

    it('should update map center keeping the current zoom', () => {
        spectator.component.updateCenter({ x: 0.2, y: 0.8 });
        expect(state_mock.setPositions).toHaveBeenCalledWith(1, {
            x: 0.2,
            y: 0.8,
        });
    });

    it('should reset the kiosk without navigating by default', () => {
        spectator.component.resetKiosk(false);
        expect(state_mock.setPositions).toHaveBeenCalledWith(1, {
            x: 0.5,
            y: 0.5,
        });
        const dialog = spectator.inject(MatDialog);
        expect(dialog.closeAll).toHaveBeenCalled();
        const router = spectator.inject(Router);
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should navigate home when resetting with navigation', () => {
        spectator.component.resetKiosk(true);
        const router = spectator.inject(Router);
        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    it('should restore the stored kiosk level on reset', () => {
        localStorage.setItem('KIOSK.level', 'lvl-9');
        spectator.component.resetKiosk(false);
        expect(state_mock.setLevel).toHaveBeenCalledWith('lvl-9');
    });

    it('should react to level query parameter changes', async () => {
        spectator.setRouteQueryParam('level', 'lvl-1');
        await spectator.component.ngOnInit();
        spectator.detectChanges();
        const org = spectator.inject(OrganisationService);
        expect(state_mock.setLevel).toHaveBeenCalledWith('lvl-1');
        expect(org.building).toEqual({ id: 'bld-1' });
        expect(state_mock.setFeatures).toHaveBeenCalledWith('_located', []);
    });
});
