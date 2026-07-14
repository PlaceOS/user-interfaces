import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';

import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { IndoorMapsComponent } from 'libs/components/src/lib/indoor-maps.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
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
    open: vi.fn(() => ({
        onAction: () => of(),
        dismiss: vi.fn(),
    })),
};

describe('ExploreMapViewComponent', () => {
    let spectator: SpectatorRouting<ExploreMapViewComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreMapViewComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreMapControlComponent),
            MockComponent(ExploreZoomControlComponent),
            MockComponent(IndoorMapsComponent),
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
            } as any),
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
        if (spectator) {
            spectator.component.hide_zones.set(false);
            spectator.component.hide_devices.set(true);
            spectator.component.hide_sensors.set(true);
            (
                spectator.inject(ExploreStateService).setFeatures as any
            ).mockReset();
        }
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show map component', () => expect('interactive-map').toExist());

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

    it('should handle location spaces', () => {
        const state = spectator.inject(ExploreStateService);
        const spaces = spectator.inject(SpacesService);
        (spaces as any).find = vi.fn(() => ({}));
        spectator.setRouteQueryParam('space', 'space-1');
        spectator.detectChanges();
        expect(state.setFeatures).toHaveBeenCalledTimes(2);
        (spaces as any).find = vi.fn(() => null);
        spectator.setRouteQueryParam('space', 'space-2');
        spectator.detectChanges();
        expect(state.setFeatures).toHaveBeenCalledTimes(3);
    });
});
