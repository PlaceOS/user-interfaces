import type { Mock } from 'vitest';
import { Injector, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { BookingFormService } from '../lib/booking-form.service';
import { generateBookingForm } from '../lib/booking.utilities';
import { DeskFiltersComponent } from '../lib/desk-select-modal/desk-filters.component';

describe('DeskFiltersComponent', () => {
    let spectator: Spectator<DeskFiltersComponent>;
    const options = signal<any>({ zone_id: 'lvl-a', show_fav: false, features: [] });
    const features = signal<string[]>(['sit-stand', 'monitor']);
    const resources = signal<any[]>([
        { id: 'd1', zone: { id: 'lvl-a' } },
        { id: 'd2', zone: { id: 'lvl-b' } },
    ]);
    const set_options = vi.fn((o) => options.update((v) => ({ ...v, ...o })));
    const set_feature = vi.fn();

    const levels = [
        { id: 'lvl-b', parent_id: 'bld-1', display_name: 'B', name: 'B', tags: [] },
        { id: 'lvl-a', parent_id: 'bld-1', display_name: 'A', name: 'A', tags: [] },
        { id: 'park-1', parent_id: 'bld-1', display_name: 'P', name: 'P', tags: ['parking'] },
    ];
    const org_mock: any = {
        active_buildings: signal([
            { id: 'bld-1', display_name: 'Building One', name: 'bld-1' },
            { id: 'bld-2', display_name: 'Building Two', name: 'bld-2' },
        ]),
        active_building: signal({
            id: 'bld-1',
            display_name: 'Building One',
            name: 'bld-1',
            timezone: 'Australia/Sydney',
        }),
        region_list: signal([
            { id: 'reg-1', display_name: 'Region One', name: 'reg-1' },
        ]),
        active_region: signal({ id: 'reg-1', display_name: 'Region One' }),
        levelsForRegion: vi.fn(() => levels),
        levelsForBuilding: vi.fn(() => levels),
        get building() {
            return this._building;
        },
        set building(value) {
            this._building = value;
        },
        get region() {
            return this._region;
        },
        set region(value) {
            this._region = value;
        },
        _building: null,
        _region: null,
    };

    const createComponent = createComponentFactory({
        component: DeskFiltersComponent,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    const { model, form } = generateBookingForm(
                        new Booking(),
                        inject(Injector),
                    );
                    return {
                        options,
                        features,
                        resources,
                        model,
                        form,
                        setOptions: set_options,
                        setFeature: set_feature,
                    };
                },
            },
            { provide: OrganisationService, useValue: org_mock },
            { provide: SettingsService, useValue: createSettingsServiceMock() },
        ],
        declarations: [
            MockComponent(SettingsToggleComponent),
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockPipe(TranslatePipe, (v) => v),
            MockPipe(BuildingPipe, (v) => ({ display_name: v }) as any),
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatCheckboxModule),
            MockModule(MatRippleModule),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        options.set({ zone_id: 'lvl-a', show_fav: false, features: [] });
        features.set(['sit-stand', 'monitor']);
        resources.set([
            { id: 'd1', zone: { id: 'lvl-a' } },
            { id: 'd2', zone: { id: 'lvl-b' } },
        ]);
        org_mock._building = null;
        org_mock._region = null;
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render the filters heading', () => {
        expect(spectator.query('h3')).toContainText('COMMON.FILTERS');
    });

    it('should only list levels that have resources, sorted and excluding parking', () => {
        const result = spectator.component.levels();
        expect(result.map((_) => _.id)).toEqual(['lvl-a', 'lvl-b']);
    });

    it('should show the level selector when there is more than one level', () => {
        expect(spectator.component.show_level_select()).toBe(true);
        expect(spectator.query('mat-select[name="location"]')).toExist();
    });

    it('should hide favourites and feature sections when levels are hidden', () => {
        spectator.setInput('hide_levels', true);
        spectator.detectChanges();
        expect(spectator.query('section[favs]')).not.toExist();
        expect(spectator.query('section[features]')).not.toExist();
    });

    it('should render the favourites and feature sections by default', () => {
        expect(spectator.query('section[favs]')).toExist();
        expect(spectator.query('section[features]')).toExist();
        expect(
            spectator.queryAll('section[features] settings-toggle').length,
        ).toBe(2);
    });

    it('should show the building selector when there are multiple buildings', () => {
        expect(spectator.query('mat-select[name="building"]')).toExist();
        expect(spectator.query('mat-select[name="region"]')).not.toExist();
    });

    it('should show the region selector when regions are used', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.use_region' ? true : undefined,
        );
        spectator.detectChanges();
        expect(spectator.query('mat-select[name="region"]')).toExist();
        expect(spectator.query('mat-select[name="building"]')).not.toExist();
    });

    it('should forward option and feature changes to the booking form service', () => {
        spectator.component.setOptions({ zone_id: 'lvl-b' });
        expect(set_options).toHaveBeenCalledWith({ zone_id: 'lvl-b' });
        spectator.component.setFeature('monitor', true);
        expect(set_feature).toHaveBeenCalledWith('monitor', true);
    });

    it('should update the active building and region through the organisation', () => {
        spectator.component.setBuilding({ id: 'bld-2' } as any);
        expect(org_mock.building).toEqual({ id: 'bld-2' });
        spectator.component.setRegion({ id: 'reg-2' } as any);
        expect(org_mock.region).toEqual({ id: 'reg-2' });
    });

    it('should clear the selected level when it is no longer valid', () => {
        resources.set([{ id: 'd2', zone: { id: 'lvl-b' } }]);
        options.set({ zone_id: 'lvl-a' });
        spectator.detectChanges();
        expect(set_options).toHaveBeenCalledWith({ zone_id: undefined });
    });

    it('should retain the selected level while resources are loading', () => {
        resources.set([]);
        options.set({ zone_id: 'lvl-a' });
        spectator.detectChanges();
        expect(set_options).not.toHaveBeenCalledWith({ zone_id: undefined });
    });

    it('should only allow all-day bookings when both settings are enabled', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.desks.allow_time_changes' ||
            key === 'app.desks.allow_all_day'
                ? true
                : undefined,
        );
        spectator.detectChanges();
        expect(spectator.component.allow_all_day()).toBe(true);
    });
});
