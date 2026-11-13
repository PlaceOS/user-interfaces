import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    SpectatorRouting,
    createRoutingFactory,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import {
    BuildingLevel,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { SpacesService } from 'libs/events/src/lib/spaces.service';

import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { MapRadiusComponent } from 'libs/components/src/lib/map-radius.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreLockersService } from '../lib/explore-lockers.service';
import { ExploreMapControlComponent } from '../lib/explore-map-control.component';
import { ExploreMapViewComponent } from '../lib/explore-map-view.component';
import { ExploreParkingService } from '../lib/explore-parking.service';
import { ExplorePointOfInterestService } from '../lib/explore-poi.service';
import { ExploreSpacesService } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';
import { ExploreZonesService } from '../lib/explore-zones.service';
import { ExploreZoomControlComponent } from '../lib/explore-zoom-control.component';

// staff.fn and notifications run for real: showStaff hits the stubbed
// ts-client `get`, and notifications render through a fake snackbar outlet.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

const fake_snackbar = {
    open: vi.fn((_message: string) => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    })),
};

describe('ExploreMapViewComponent', () => {
    let spectator: SpectatorRouting<ExploreMapViewComponent>;
    const locked_groups = signal<string[]>([]);
    const createComponent = createRoutingFactory({
        component: ExploreMapViewComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreMapControlComponent),
            MockComponent(ExploreZoomControlComponent),
        ],
        componentProviders: [
            MockProvider(ExploreSpacesService),
            MockProvider(ExploreDesksService),
            MockProvider(ExploreZonesService),
            MockProvider(ExploreParkingService),
            MockProvider(ExploreLockersService),
            MockProvider(ExplorePointOfInterestService),
            MockProvider(SpacePipe, { transform: vi.fn(() => ({})) } as any),
        ],
        providers: [
            MockProvider(MapsPeopleService, {
                available: signal(false),
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                levelWithID: vi.fn(),
                module: vi.fn(),
                binding: vi.fn(() => 'sys'),
                active_levels: signal([]),
                active_building: signal({ id: 'bld-1' }),
            } as any),
            MockProvider(SpacesService, { initialised: signal(true) }),
            MockProvider(ExploreStateService, {
                level: signal({ id: 'lvl-1' }),
                options: signal({ is_public: true }),
                map_url: signal(''),
                map_styles: signal({}),
                map_positions: signal({ zoom: 1, center: { x: 0.5, y: 0.5 } }),
                map_features: signal([]),
                map_actions: signal([]),
                map_labels: signal([]),
                message: signal(''),
                locked_groups,
                reset: vi.fn(),
                setLevel: vi.fn(),
                setFeatures: vi.fn(),
                setOptions: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                value: vi.fn(),
                get: vi.fn(() => false),
            } as any),
        ],
        imports: [
            MockModule(MatSlideToggleModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.get).mockResolvedValue({
            email: 'jim@jim.com',
        } as any);
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        vi.useRealTimers();
        if (spectator) {
            spectator.component.hide_zones.set(false);
            spectator.component.hide_devices.set(true);
            spectator.component.hide_sensors.set(true);
            locked_groups.set([]);
            const state = spectator.inject(ExploreStateService);
            state.setFeatures.mockReset();
            (state.options as any).set({ is_public: true });
        }
    });

    it('should handle option changes', () => {
        spectator.component.hide_devices.set(false);
        spectator.component.hide_sensors.set(false);
        spectator.detectChanges();
        expect(spectator.queryAll('settings-toggle')).toHaveLength(3);
        const state = spectator.inject(ExploreStateService);
        vi.mocked(state.setOptions).mockClear();

        spectator.component.toggleFeature('zones', false);
        spectator.component.toggleFeature('devices', false);
        spectator.component.toggleFeature('sensors', false);

        expect(state.setOptions).toHaveBeenNthCalledWith(1, {
            disable: ['zones'],
        });
        expect(state.setOptions).toHaveBeenNthCalledWith(2, {
            disable: ['devices'],
        });
        expect(state.setOptions).toHaveBeenNthCalledWith(3, {
            disable: ['sensors'],
        });

        (state.options as any).set({
            is_public: true,
            disable: ['zones', 'devices'],
        });
        spectator.component.toggleFeature('zones', true);
        expect(state.setOptions).toHaveBeenLastCalledWith({
            disable: ['devices'],
        });
    });

    it('should collapse two or more map toggles', () => {
        spectator.component.hide_devices.set(false);
        spectator.component.hide_sensors.set(false);
        spectator.detectChanges();

        expect('[toggle-controls]').toExist();
        expect('#explore-map-toggle-options').toHaveClass('hidden');

        spectator.click('[toggle-controls]');

        expect('#explore-map-toggle-options').not.toHaveClass('hidden');
        expect('[toggle-controls]').toHaveAttribute('aria-expanded', 'true');

        spectator.component.hide_zones.set(true);
        spectator.component.hide_devices.set(true);
        spectator.detectChanges();

        expect('[toggle-controls]').not.toExist();
        expect('#explore-map-toggle-options').not.toHaveClass('hidden');

        spectator.component.hide_zones.set(false);
        spectator.component.hide_devices.set(true);
        spectator.component.hide_sensors.set(true);
    });

    it('should hide device and sensor toggles by default', () => {
        expect(spectator.queryAll('settings-toggle')).toHaveLength(1);
        expect('[toggle-controls]').not.toExist();
    });

    it('should hide configured map toggles', () => {
        spectator.component.hide_zones.set(true);
        spectator.component.hide_devices.set(true);
        spectator.component.hide_sensors.set(true);
        spectator.detectChanges();

        expect(spectator.queryAll('settings-toggle')).toHaveLength(0);

        spectator.component.hide_zones.set(false);
        spectator.component.hide_devices.set(true);
        spectator.component.hide_sensors.set(true);
    });

    it('should hide toggles for groups locked off by settings', () => {
        spectator.component.hide_devices.set(false);
        spectator.component.hide_sensors.set(false);
        locked_groups.set(['devices']);
        spectator.detectChanges();

        const labels = spectator
            .queryAll(SettingsToggleComponent)
            .map((toggle) => toggle.label());
        expect(labels).not.toContain('Show Devices');
        expect(labels).toContain('Show Sensors');
        expect(spectator.component.toggle_count()).toBe(2);
    });

    it('should handle level changes', () => {
        const state = spectator.inject(ExploreStateService);
        expect(state.setLevel).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('level', 'lvl-1');
        spectator.detectChanges();
        expect(state.setLevel).toHaveBeenCalledWith('lvl-1');
    });

    it('should handle locating users', async () => {
        const state = spectator.inject(ExploreStateService);
        const org = spectator.inject(OrganisationService);
        const execute = vi.fn(async () => [
            { position: 'desk-1', level: 'lvl-1' },
        ]);
        vi.mocked(org.module).mockReturnValue({ execute } as any);
        setNotifyOutlet(fake_snackbar as any, true);
        fake_snackbar.open.mockClear();
        vi.useFakeTimers();
        spectator.setRouteQueryParam('user', 'jim@jim.com');
        await vi.advanceTimersByTimeAsync(1000);
        // showStaff ran for real against the stubbed ts-client `get`
        expect(execute).toHaveBeenCalled();
        expect(fake_snackbar.open).not.toHaveBeenCalled();
        expect(state.setFeatures).toHaveBeenCalledWith('_located', [
            expect.objectContaining({
                track_id: expect.stringContaining('locate-'),
            }),
        ]);
        // No locations found -> user is notified of the failure
        execute.mockResolvedValue([]);
        spectator.setRouteQueryParam('user', 'jim2@jim.com');
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(1000);
        expect(fake_snackbar.open).toHaveBeenCalled();
        vi.useRealTimers();
    });

    /** Locate a user with the given LocationServices results */
    const locateUser = async (locations: Record<string, unknown>[]) => {
        const org = spectator.inject(OrganisationService);
        vi.mocked(org.module).mockReturnValue({
            execute: vi.fn(async () => locations),
        } as any);
        setNotifyOutlet(fake_snackbar as any, true);
        vi.useFakeTimers();
        spectator.setRouteQueryParam('user', 'jim@jim.com');
        await vi.advanceTimersByTimeAsync(1000);
        const state = spectator.inject(ExploreStateService);
        const [, [feature]] = vi
            .mocked(state.setFeatures)
            .mock.calls.filter(([group]) => group === '_located')
            .at(-1);
        return feature;
    };

    it('should flip wireless coordinates measured from the bottom right', async () => {
        const feature = await locateUser([
            {
                type: 'wireless',
                position: { x: 0.2, y: 0.25 },
                coordinates_from: 'bottom-right',
                variance: 3,
                level: 'lvl-1',
            },
        ]);
        expect(feature).toEqual(
            expect.objectContaining({
                location: { x: 0.8, y: 0.75 },
                content: MapRadiusComponent,
                data: expect.objectContaining({ radius: 3 }),
            }),
        );
    });

    it('should pin the location type with the highest priority that is on the map', async () => {
        const org = spectator.inject(OrganisationService);
        vi.mocked(org.binding).mockReturnValueOnce({
            priority: ['desk', 'wireless'],
        } as any);
        spectator.component.map_info.set({ 'desk-1': {} });
        const feature = await locateUser([
            { type: 'wireless', position: { x: 0.2, y: 0.2 }, level: 'lvl-1' },
            // Not on this map, so it is skipped
            { type: 'desk', position: 'desk-9', level: 'lvl-1' },
            { type: 'desk', position: 'desk-1', level: 'lvl-1' },
        ]);
        expect(feature.location).toBe('desk-1');
        expect(feature.content).toBe(MapPinComponent);
    });

    it('should notify when the user to locate is not found', async () => {
        const execute = vi.fn();
        vi.mocked(spectator.inject(OrganisationService).module).mockReturnValue(
            { execute } as any,
        );
        vi.mocked(ts_client.get).mockRejectedValue({
            status: 404,
            message: 'User not found',
        });
        setNotifyOutlet(fake_snackbar as any, true);
        fake_snackbar.open.mockClear();
        vi.useFakeTimers();
        spectator.setRouteQueryParam('user', 'user-1');
        await vi.advanceTimersByTimeAsync(1000);
        expect(execute).not.toHaveBeenCalled();
        expect(fake_snackbar.open).toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should pin a located space and show its level', async () => {
        const state = spectator.inject(ExploreStateService);
        const org = spectator.inject(OrganisationService);
        const space_pipe = spectator.inject(SpacePipe, true);
        vi.mocked(org.levelWithID).mockReturnValue(
            new BuildingLevel({ id: 'lvl-2' }),
        );
        vi.mocked(space_pipe.transform).mockResolvedValue(
            new Space({
                id: 'space-1',
                name: 'Room 1',
                map_id: 'map-1',
                zones: ['lvl-2'],
            }),
        );
        setNotifyOutlet(fake_snackbar as unknown as MatSnackBar, true);
        fake_snackbar.open.mockClear();
        vi.useFakeTimers();

        spectator.setRouteQueryParam('space', 'space-1');
        await vi.advanceTimersByTimeAsync(300);

        expect(state.setLevel).toHaveBeenCalledWith('lvl-2');
        expect(state.setFeatures).toHaveBeenLastCalledWith('_located', [
            expect.objectContaining({
                location: 'map-1',
                data: { message: 'Room 1 is here' },
            }),
        ]);

        vi.mocked(space_pipe.transform).mockResolvedValue(null);
        spectator.setRouteQueryParam('space', 'space-2');
        await vi.advanceTimersByTimeAsync(300);
        expect(
            fake_snackbar.open.mock.calls.map(([message]) => message),
        ).toEqual(['EXPLORE.LOCATE_SPACE_DETAILS_FAILED']);
        vi.useRealTimers();
    });

    it('should pin a map id or coordinates from the locate parameter', async () => {
        const state = spectator.inject(ExploreStateService);
        const located = () => {
            const [, [feature]] = vi
                .mocked(state.setFeatures)
                .mock.calls.filter(([group]) => group === '_located')
                .at(-1);
            return feature;
        };
        vi.useFakeTimers();

        spectator.triggerNavigation({
            queryParams: { locate: 'desk-1', name: 'Desk 1' },
        });
        await vi.advanceTimersByTimeAsync(300);
        expect(located()).toEqual(
            expect.objectContaining({
                location: 'desk-1',
                data: { message: 'Desk 1' },
            }),
        );

        spectator.triggerNavigation({ queryParams: { locate: '0.25,0.75' } });
        await vi.advanceTimersByTimeAsync(300);
        expect(located().location).toEqual({ x: 0.25, y: 0.75 });
        vi.useRealTimers();
    });
});
