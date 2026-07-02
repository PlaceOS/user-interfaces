import { Injector, runInInjectionContext, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { addDays, endOfDay } from 'date-fns';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { BookingFormService } from '../lib/booking-form.service';
import { generateBookingForm } from '../lib/booking.utilities';
import { LockerFiltersComponent } from '../lib/locker-select-modal/locker-filters.component';

describe('LockerFiltersComponent', () => {
    let spectator: Spectator<LockerFiltersComponent>;
    const options = signal<any>({ zone_id: '' });
    const features = signal<string[]>([]);
    const active_buildings = signal<any[]>([{ id: 'bld-1' }, { id: 'bld-2' }]);
    const active_building = signal<any>({ id: 'bld-1' });
    const region_list = signal<any[]>([]);
    const active_region = signal<any>(null);
    const set_options = jest.fn();
    const set_feature = jest.fn();
    let org_building_setter: any = null;
    let org_region_setter: any = null;

    const levels = [
        {
            id: 'lvl-2',
            parent_id: 'bld-1',
            display_name: 'B Level',
            name: 'B',
            tags: [],
        },
        {
            id: 'lvl-1',
            parent_id: 'bld-1',
            display_name: 'A Level',
            name: 'A',
            tags: [],
        },
    ];

    const createComponent = createComponentFactory({
        component: LockerFiltersComponent,
        declarations: [
            MockComponent(SettingsToggleComponent),
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockPipe(BuildingPipe, (value) => value as any),
        ],
        imports: [
            FormsModule,
            FormField,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatCheckboxModule),
        ],
        providers: [
            {
                provide: BookingFormService,
                useFactory: (injector: Injector) => {
                    const form_ref = runInInjectionContext(injector, () =>
                        generateBookingForm(new Booking()),
                    );
                    return {
                        options,
                        features,
                        form: form_ref.form,
                        model: form_ref.model,
                        setOptions: set_options,
                        setFeature: set_feature,
                    };
                },
                deps: [Injector],
            },
            {
                provide: OrganisationService,
                useValue: {
                    active_buildings,
                    active_building,
                    region_list,
                    active_region,
                    levelsForRegion: jest.fn(() => levels),
                    levelsForBuilding: jest.fn(() => levels),
                    set building(value: any) {
                        org_building_setter = value;
                    },
                    set region(value: any) {
                        org_region_setter = value;
                    },
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        options.set({ zone_id: '' });
        features.set([]);
        active_buildings.set([{ id: 'bld-1' }, { id: 'bld-2' }]);
        active_building.set({ id: 'bld-1' });
        region_list.set([]);
        active_region.set(null);
        org_building_setter = null;
        org_region_setter = null;
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render the filters heading and date field', () => {
        expect(spectator.query('section[details]')).toExist();
        expect(spectator.query('a-date-field')).toExist();
    });

    it('should sort levels by parent then display name', () => {
        expect(spectator.component.levels().map((_) => _.id)).toEqual([
            'lvl-1',
            'lvl-2',
        ]);
    });

    it('should only allow all-day when both time changes and all-day are enabled', () => {
        const settings = spectator.inject(SettingsService);
        expect(spectator.component.allow_all_day()).toBe(false);
        (settings.get as jest.Mock).mockImplementation((key: string) => {
            if (key === 'app.lockers.allow_time_changes') return true;
            if (key === 'app.lockers.allow_all_day') return true;
            return undefined;
        });
        expect(spectator.component.allow_all_day()).toBe(true);
    });

    it('should compute the end date from the available period', () => {
        expect(spectator.component.end_date()).toBe(
            endOfDay(addDays(Date.now(), 90)).valueOf(),
        );
    });

    it('should set the active building on the org service', () => {
        spectator.component.setBuilding({ id: 'bld-2' });
        expect(org_building_setter).toEqual({ id: 'bld-2' });
    });

    it('should set the active region on the org service', () => {
        spectator.component.setRegion({ id: 'reg-2' });
        expect(org_region_setter).toEqual({ id: 'reg-2' });
    });

    it('should delegate option and feature changes to the form service', () => {
        spectator.component.setOptions({ zone_id: 'lvl-1' });
        expect(set_options).toHaveBeenCalledWith({ zone_id: 'lvl-1' });
        spectator.component.setFeature('charging', true);
        expect(set_feature).toHaveBeenCalledWith('charging', true);
    });

    it('should hide the apply button while the filters cannot be closed', () => {
        expect(spectator.component.can_close()).toBe(false);
        expect(
            spectator.query('button[name="apply-locker-filters"]'),
        ).not.toExist();
        spectator.component.can_close.set(true);
        spectator.detectChanges();
        expect(
            spectator.query('button[name="apply-locker-filters"]'),
        ).toExist();
    });

    it('should render feature toggles for the available features', () => {
        features.set(['charging', 'lockable']);
        spectator.detectChanges();
        expect(spectator.queryAll('section[features] settings-toggle').length).toBe(
            2,
        );
    });
});
