import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import {
    BookingAsset,
    BookingFormService,
} from '../lib/booking-form.service';
import { ParkingMapComponent } from '../lib/parking-select-modal/parking-map.component';

const asset = (over: Partial<BookingAsset> = {}): BookingAsset =>
    ({
        id: 'p1',
        name: 'Parking One',
        bookable: true,
        features: [],
        ...over,
    }) as BookingAsset;

const level = (over: any = {}) => ({
    id: 'lvl-1',
    parent_id: 'bld-1',
    display_name: 'Level 1',
    name: 'Level 1',
    map_id: 'map-1',
    tags: ['parking'],
    ...over,
});

describe('ParkingMapComponent', () => {
    let spectator: Spectator<ParkingMapComponent>;
    const resources = signal<BookingAsset[]>([]);
    const available = signal<BookingAsset[]>([]);
    const options = signal<any>({});
    const loading = signal('');
    const set_options = jest.fn();
    const resource_user_name = jest.fn((_: string) => '');
    const levels_for_building = jest.fn(() => [] as any[]);
    const level_with_id = jest.fn(() => undefined);

    const createComponent = createComponentFactory({
        component: ParkingMapComponent,
        providers: [
            MockProvider(BookingFormService, {
                resources: resources as any,
                available_resources: available as any,
                options: options as any,
                loading: loading as any,
                setOptions: set_options,
                resourceUserName: resource_user_name as any,
            }),
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
            MockProvider(OrganisationService, {
                active_region: signal(undefined) as any,
                active_building: signal({ id: 'bld-1' }) as any,
                levelsForBuilding: levels_for_building as any,
                levelsForRegion: jest.fn(() => []) as any,
                levelWithID: level_with_id as any,
                buildings: [{ id: 'bld-1', location: '1.0,2.0' }] as any,
            }),
        ],
        declarations: [MockComponent(InteractiveMapComponent)],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
        ],
    });

    beforeEach(() => {
        resources.set([]);
        available.set([]);
        options.set({});
        loading.set('');
        set_options.mockClear();
        resource_user_name.mockReset();
        resource_user_name.mockReturnValue('');
        levels_for_building.mockReset();
        levels_for_building.mockReturnValue([]);
        level_with_id.mockReset();
        level_with_id.mockReturnValue(undefined);
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should only expose parking-tagged levels sorted by building then name', () => {
        levels_for_building.mockReturnValue([
            level({ id: 'l2', display_name: 'B', tags: ['parking'] }),
            level({ id: 'l1', display_name: 'A', tags: ['parking'] }),
            level({ id: 'l3', display_name: 'C', tags: ['other'] }),
        ]);
        spectator = createComponent();
        const ids = spectator.component.levels().map((_) => _.id);
        expect(ids).toEqual(['l1', 'l2']);
    });

    it('should default the level to the first available level', () => {
        levels_for_building.mockReturnValue([level({ id: 'l1' })]);
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.component.level()?.id).toBe('l1');
    });

    it('should emit and mark active when a parking space is selected', () => {
        spectator = createComponent();
        let emitted: BookingAsset | undefined;
        spectator.component.onSelect.subscribe((v) => (emitted = v));
        const space = asset({ id: 'p9' });
        spectator.component.selectParking(space);
        expect(emitted?.id).toBe('p9');
        expect(spectator.component.active()).toBe('p9');
    });

    it('should clamp zoom between 0.5 and 10', () => {
        spectator = createComponent();
        spectator.component.setZoom(50);
        expect(spectator.component.zoom()).toBe(10);
        spectator.component.setZoom(0.1);
        expect(spectator.component.zoom()).toBe(0.5);
        spectator.component.setZoom(3);
        expect(spectator.component.zoom()).toBe(3);
    });

    it('should reset zoom and center', () => {
        spectator = createComponent();
        spectator.component.setZoom(5);
        spectator.component.center.set({ x: 0.1, y: 0.9 });
        spectator.component.resetMap();
        expect(spectator.component.zoom()).toBe(1);
        expect(spectator.component.center()).toEqual({ x: 0.5, y: 0.5 });
    });

    it('should expose the active level map as the map url', () => {
        levels_for_building.mockReturnValue([level({ map_id: 'map-42' })]);
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.component.map_url()).toBe('map-42');
    });

    it('should build a status style for every resource', () => {
        resources.set([
            asset({ id: 'free-1', map_id: 'm-free' }),
            asset({ id: 'busy-1', map_id: 'm-busy' }),
            asset({ id: 'blocked-1', map_id: 'm-block' }),
        ]);
        available.set([asset({ id: 'free-1', map_id: 'm-free' })]);
        resource_user_name.mockImplementation((id: string) =>
            id === 'busy-1' ? 'Alice' : '',
        );
        spectator = createComponent();
        const styles = spectator.component.styles();
        expect(styles['#m-free'].fill).toBeTruthy();
        expect(styles['#m-busy'].fill).toBeTruthy();
        expect(styles['#m-block'].fill).toBeTruthy();
    });

    it('should mark the active resource as pending in styles', () => {
        resources.set([asset({ id: 'p1', map_id: 'm-1' })]);
        available.set([asset({ id: 'p1', map_id: 'm-1' })]);
        spectator = createComponent();
        const settings_service = spectator.inject(SettingsService);
        (settings_service.get as jest.Mock).mockImplementation((key: string) =>
            key === 'app.explore.colors'
                ? { 'parking-pending': '#123456' }
                : undefined,
        );
        spectator.component.active.set('p1');
        expect(spectator.component.styles()['#m-1'].fill).toBe('#123456');
    });

    it('should build hover features for every resource', () => {
        resources.set([
            asset({ id: 'p1', map_id: 'm-1' }),
            asset({ id: 'p2', map_id: 'm-2' }),
        ]);
        available.set([asset({ id: 'p1', map_id: 'm-1' })]);
        resource_user_name.mockImplementation((id: string) =>
            id === 'p2' ? 'Bob' : '',
        );
        spectator = createComponent();
        const features = spectator.component.features();
        expect(features.length).toBe(2);
        expect(features[0].data.status).toBe('free');
        expect(features[1].data.status).toBe('busy');
    });

    it('should hide features when hide_user setting is enabled', () => {
        spectator = createComponent();
        const settings_service = spectator.inject(SettingsService);
        (settings_service.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.parkings.hide_user',
        );
        // Change resources after setting the mock so the `features` computed
        // re-evaluates with the updated `hide_user` setting.
        resources.set([asset({ id: 'p1', map_id: 'm-1' })]);
        expect(spectator.component.features()).toEqual([]);
    });

    it('should build actions that select the associated parking space', () => {
        available.set([asset({ id: 'p1', map_id: 'm-1' })]);
        spectator = createComponent();
        let emitted: BookingAsset | undefined;
        spectator.component.onSelect.subscribe((v) => (emitted = v));
        const actions = spectator.component.actions();
        expect(actions[0].id).toBe('m-1');
        actions[0].callback();
        expect(emitted?.id).toBe('p1');
    });
});
