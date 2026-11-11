import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    IconComponent,
    InteractiveMapComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';

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
    setPositions: vi.fn(),
    setFeatures: vi.fn(),
    setOptions: vi.fn(),
    setLevel: vi.fn(),
};

const parking_mock = {
    active_spaces: signal<unknown[]>([{}, {}, {}]),
    available_spaces: signal<unknown[]>([{}, {}]),
};

const spaces_initialised = signal(true);

const org_mock = {
    building: null as { id: string } | null,
    buildings: [{ id: 'bld-1' }],
    levelWithID: vi.fn((): { id: string; parent_id: string } | null => ({
        id: 'lvl-1',
        parent_id: 'bld-1',
    })),
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
            { provide: MatDialog, useValue: { closeAll: vi.fn() } },
            {
                provide: SpacesService,
                useValue: { initialised: spaces_initialised },
            },
            {
                provide: SettingsService,
                useValue: { get: vi.fn(() => 180) },
            },
            { provide: OrganisationService, useValue: org_mock },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        state_mock.positions = { zoom: 1, center: { x: 0.5, y: 0.5 } };
        org_mock.building = null;
        spaces_initialised.set(true);
        parking_mock.active_spaces.set([{}, {}, {}]);
        parking_mock.available_spaces.set([{}, {}]);
        localStorage.clear();
        VirtualKeyboardComponent.enabled = false;
    });

    afterEach(() => {
        vi.useRealTimers();
        history.replaceState(null, '', '/');
        VirtualKeyboardComponent.enabled = false;
    });

    describe('counts', () => {
        beforeEach(() => (spectator = createComponent()));

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

        it('should show 0 percent free when the level has no spaces', () => {
            parking_mock.active_spaces.set([]);
            parking_mock.available_spaces.set([]);
            expect(spectator.component.counts().percent).toBe(0);
        });
    });

    describe('map', () => {
        beforeEach(() => {
            spectator = createComponent();
            // Init resets the map, so forget those calls
            vi.clearAllMocks();
        });

        it('should change only the zoom or only the center', () => {
            state_mock.positions = { zoom: 2, center: { x: 0.3, y: 0.6 } };
            spectator.component.updateZoom(3);
            expect(state_mock.setPositions).toHaveBeenLastCalledWith(3, {
                x: 0.3,
                y: 0.6,
            });
            spectator.component.updateCenter({ x: 0.2, y: 0.8 });
            expect(state_mock.setPositions).toHaveBeenLastCalledWith(2, {
                x: 0.2,
                y: 0.8,
            });
        });

        it('should reset the map to the stored level and close dialogs', () => {
            localStorage.setItem('KIOSK.level', 'lvl-9');
            spectator.component.resetKiosk(false);
            expect(state_mock.setPositions).toHaveBeenCalledWith(1, {
                x: 0.5,
                y: 0.5,
            });
            expect(state_mock.setLevel).toHaveBeenCalledWith('lvl-9');
            expect(spectator.inject(MatDialog).closeAll).toHaveBeenCalled();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        });

        it('should navigate home on reset by default', () => {
            spectator.component.resetKiosk();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/',
            ]);
        });
    });

    describe('init', () => {
        it('should wait for spaces before resetting the map', async () => {
            vi.useFakeTimers();
            spaces_initialised.set(false);
            localStorage.setItem('OSK.enabled', 'true');
            spectator = createComponent();
            await vi.advanceTimersByTimeAsync(500);
            expect(state_mock.setPositions).not.toHaveBeenCalled();
            expect(VirtualKeyboardComponent.enabled).toBe(false);

            spaces_initialised.set(true);
            await vi.advanceTimersByTimeAsync(100);
            expect(state_mock.setPositions).toHaveBeenCalledWith(1, {
                x: 0.5,
                y: 0.5,
            });
            expect(VirtualKeyboardComponent.enabled).toBe(true);
        });

        it('should keep the map private by default', async () => {
            spectator = createComponent();
            await spectator.fixture.whenStable();
            expect(state_mock.setOptions).not.toHaveBeenCalled();
        });

        it('should make the map public when the URL has public=true', async () => {
            history.replaceState(null, '', '/?public=true');
            spectator = createComponent();
            await spectator.fixture.whenStable();
            expect(state_mock.setOptions).toHaveBeenCalledWith({
                is_public: true,
            });
        });
    });

    describe('level query param', () => {
        beforeEach(async () => {
            spectator = createComponent();
            await spectator.fixture.whenStable();
        });

        it('should show the level and select its building', () => {
            spectator.setRouteQueryParam('level', 'lvl-1');
            spectator.detectChanges();
            expect(state_mock.setLevel).toHaveBeenCalledWith('lvl-1');
            expect(org_mock.building).toEqual({ id: 'bld-1' });
            expect(state_mock.setFeatures).toHaveBeenCalledWith('_located', []);
        });

        it('should keep the building when the level is not known', () => {
            org_mock.levelWithID.mockReturnValueOnce(null);
            spectator.setRouteQueryParam('level', 'missing');
            spectator.detectChanges();
            expect(state_mock.setLevel).toHaveBeenCalledWith('missing');
            expect(org_mock.building).toBeNull();
        });
    });
});
