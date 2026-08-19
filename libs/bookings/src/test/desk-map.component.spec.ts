import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingFormService } from '../lib/booking-form.service';
import { DeskMapComponent } from '../lib/desk-select-modal/desk-map.component';

describe('DeskMapComponent', () => {
    let spectator: Spectator<DeskMapComponent>;
    const available_resources = signal<any[]>([]);
    const resources = signal<any[]>([]);
    const options = signal<any>({});
    const loading = signal<string>('');
    const set_options = vi.fn((o) => options.update((v) => ({ ...v, ...o })));

    const levels = [
        {
            id: 'lvl-1',
            parent_id: 'bld-1',
            display_name: 'Level One',
            name: 'l1',
            map_id: 'map-1',
            tags: [],
        },
        {
            id: 'lvl-2',
            parent_id: 'bld-1',
            display_name: 'Level Two',
            name: 'l2',
            map_id: 'map-2',
            tags: [],
        },
        {
            id: 'park-1',
            parent_id: 'bld-1',
            display_name: 'Parking',
            name: 'p1',
            map_id: 'map-p',
            tags: ['parking'],
        },
    ];

    const org_mock = {
        active_region: signal({ id: 'reg-1' }),
        active_building: signal({ id: 'bld-1' }),
        levelsForRegion: vi.fn(() => levels),
        levelsForBuilding: vi.fn(() => levels),
        levelWithID: vi.fn(() => undefined),
        buildings: [{ id: 'bld-1', location: '1.23,4.56' }],
    };

    const createComponent = createComponentFactory({
        component: DeskMapComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    available_resources,
                    resources,
                    loading,
                    options,
                    setOptions: set_options,
                    resourceUserName: vi.fn(() => ''),
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
            { provide: OrganisationService, useValue: org_mock },
        ],
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockPipe(TranslatePipe, (v) => v),
            MockPipe(BuildingPipe, (v) => v as any),
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        available_resources.set([]);
        resources.set([]);
        options.set({});
        loading.set('');
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should compute levels excluding parking levels', () => {
        const level_ids = spectator.component.levels().map((l) => l.id);
        expect(level_ids).toEqual(['lvl-1', 'lvl-2']);
    });

    it('should default the selected level to the first level', () => {
        spectator.detectChanges();
        expect(spectator.component.level()?.id).toBe('lvl-1');
        expect(spectator.component.map_url()).toBe('map-1');
    });

    it('should emit onSelect when a desk is selected', () => {
        let selected: any = null;
        spectator.component.onSelect.subscribe((d) => (selected = d));
        spectator.component.selectDesk({ id: 'd1' } as any);
        expect(selected).toEqual({ id: 'd1' });
    });

    it('should filter desks by the selected level', () => {
        spectator.triggerEventHandler(
            'mat-select[name="location"]',
            'ngModelChange',
            levels[1],
        );
        expect(set_options).toHaveBeenCalledWith({ zone_id: 'lvl-2' });
        expect(spectator.component.level()).toEqual(levels[1]);
        expect(spectator.component.coordinates()).toEqual({
            latitude: 1.23,
            longitude: 4.56,
        });
    });

    it('should build map actions from the available resources', () => {
        available_resources.set([
            { id: 'd1', map_id: 'm1' },
            { id: 'd2' },
        ]);
        spectator.detectChanges();
        const actions = spectator.component.actions();
        expect(actions.map((a) => a.id)).toEqual(['m1', 'd2']);
    });

    it('should build map features from resources when hide_user is off', () => {
        resources.set([{ id: 'd1', name: 'Desk One', map_id: 'm1' }]);
        spectator.detectChanges();
        const features = spectator.component.features();
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('d1');
    });

    it('should build no map features when hide_user setting is on', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(
            (key: string) => key === 'app.desks.hide_user',
        );
        resources.set([{ id: 'd1', name: 'Desk One' }]);
        spectator.detectChanges();
        expect(spectator.component.features()).toEqual([]);
    });

    it('should track desk statuses via the styles effect', () => {
        resources.set([{ id: 'd1', map_id: 'm1' }]);
        available_resources.set([{ id: 'd1', map_id: 'm1' }]);
        spectator.detectChanges();
        expect(spectator.component.statuses['d1']()).toBe('free');
    });
});
