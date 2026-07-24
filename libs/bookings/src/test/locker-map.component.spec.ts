import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { BookingFormService } from '../lib/booking-form.service';
import { LockerMapComponent } from '../lib/locker-select-modal/locker-map.component';

describe('LockerMapComponent', () => {
    let spectator: Spectator<LockerMapComponent>;
    const options = signal<any>({});
    const available_resources = signal<any[]>([]);
    const loading = signal<string[]>([]);
    const active_region = signal<any>(null);
    const active_building = signal<any>({ id: 'bld-1' });
    const set_options = vi.fn();
    const resource_user_name = vi.fn(() => '');

    const levels = [
        {
            id: 'lvl-1',
            parent_id: 'bld-1',
            map_id: 'map-lvl-1',
            display_name: 'Level 1',
            name: 'L1',
            tags: [],
        },
        {
            id: 'lvl-parking',
            parent_id: 'bld-1',
            map_id: 'map-parking',
            display_name: 'Parking',
            name: 'Parking',
            tags: ['parking'],
        },
    ];

    const createComponent = createComponentFactory({
        component: LockerMapComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockPipe(BuildingPipe, (value) => value as any),
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
        ],
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    options,
                    available_resources,
                    loading,
                    setOptions: set_options,
                    resourceUserName: resource_user_name,
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    active_region,
                    active_building,
                    region: null,
                    buildings: [
                        { id: 'bld-1', location: '10.5,20.5' },
                    ],
                    levelsForRegion: vi.fn(() => levels),
                    levelsForBuilding: vi.fn(() => levels),
                    levelWithID: vi.fn((ids: string[]) =>
                        ids?.[0]
                            ? levels.find((_) => _.id === ids[0]) || null
                            : null,
                    ),
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        options.set({});
        available_resources.set([]);
        loading.set([]);
        active_region.set(null);
        active_building.set({ id: 'bld-1' });
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should list bookable levels excluding parking levels', () => {
        const list = spectator.component.levels();
        expect(list.map((_) => _.id)).toEqual(['lvl-1']);
    });

    it('should render the interactive map', () => {
        expect('interactive-map').toExist();
    });

    it('should have no decorated banks or map styles without resources', () => {
        expect(spectator.component.features()).toEqual([]);
        expect(spectator.component.styles()).toEqual({});
        expect(spectator.component.actions()).toEqual([]);
    });

    it('should emit onSelect when a locker is selected', () => {
        let emitted: any = null;
        spectator.component.onSelect.subscribe((locker) => (emitted = locker));
        spectator.component.selectLocker({ id: 'locker-1' } as any);
        expect(emitted).toEqual({ id: 'locker-1' });
    });

    it('should delegate level changes and derive building coordinates on setLevel', () => {
        spectator.component.setLevel(levels[0] as any);
        expect(set_options).toHaveBeenCalledWith({ zone_id: 'lvl-1' });
        expect(spectator.component.level()).toEqual(levels[0]);
        expect(spectator.component.coordinates()).toEqual({
            latitude: 10.5,
            longitude: 20.5,
        });
        expect(spectator.component.map_url()).toBe('map-lvl-1');
    });

    it('should clamp zoom within bounds', () => {
        spectator.component.setZoom(50);
        expect(spectator.component.zoom()).toBe(10);
        spectator.component.setZoom(0.1);
        expect(spectator.component.zoom()).toBe(0.5);
        spectator.component.setZoom(2);
        expect(spectator.component.zoom()).toBe(2);
    });

    it('should reset the map view', () => {
        spectator.component.zoom.set(5);
        spectator.component.center.set({ x: 0.2, y: 0.8 });
        spectator.component.resetMap();
        expect(spectator.component.zoom()).toBe(1);
        expect(spectator.component.center()).toEqual({ x: 0.5, y: 0.5 });
    });

    it('should sync the selected level from the form zone option', () => {
        options.set({ zone_id: 'lvl-1' });
        spectator.detectChanges();
        expect(spectator.component.level()?.id).toBe('lvl-1');
    });
});
