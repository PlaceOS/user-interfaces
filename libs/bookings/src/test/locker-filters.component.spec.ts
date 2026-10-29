import { Injector, runInInjectionContext, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    Booking,
    OrganisationService,
    SettingsService,
    settingSignal,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { addDays, endOfDay } from 'date-fns';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';
import type { Mock } from 'vitest';

import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { generateBookingForm } from '../lib/booking-form.model';
import { BookingFormService } from '../lib/booking-form.service';
import { LockerFiltersComponent } from '../lib/locker-select-modal/locker-filters.component';

describe('LockerFiltersComponent', () => {
    let spectator: Spectator<LockerFiltersComponent>;
    const options = signal<unknown>({ zone_id: '' });
    const features = signal<string[]>([]);
    const active_buildings = signal<unknown[]>([
        { id: 'bld-1' },
        { id: 'bld-2' },
    ]);
    const active_building = signal<unknown>({ id: 'bld-1' });
    const region_list = signal<unknown[]>([]);
    const active_region = signal<unknown>(null);
    const set_options = vi.fn();
    const set_feature = vi.fn();
    let org_building_setter: unknown = null;
    let org_region_setter: unknown = null;

    const levels = [
        {
            id: 'parking-1',
            parent_id: 'bld-1',
            display_name: '01 Parking',
            name: '01 Parking',
            tags: ['parking'],
        },
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
                    levelsForRegion: vi.fn(() => levels),
                    levelsForBuilding: vi.fn(() => levels),
                    set building(value: unknown) {
                        org_building_setter = value;
                    },
                    set region(value: unknown) {
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
        vi.clearAllMocks();
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

    it('should render the filters heading and date field', () => {
        expect(spectator.query('section[details]')).toExist();
        expect(spectator.query('a-date-field')).toExist();
    });

    it('should put parking last within each building, then sort by display name', () => {
        expect(spectator.component.levels().map((_) => _.id)).toEqual([
            'lvl-1',
            'lvl-2',
            'parking-1',
        ]);
    });

    it('should only allow all-day when both time changes and all-day are enabled', () => {
        const settings = spectator.inject(SettingsService);
        // Unset means on, as in the locker forms
        expect(spectator.component.allow_all_day()).toBe(true);
        (settings.get as Mock).mockImplementation((key: string) => {
            if (key === 'app.lockers.allow_time_changes') return false;
            if (key === 'app.lockers.allow_all_day') return true;
            return undefined;
        });
        expect(spectator.component.allow_all_day()).toBe(false);
    });

    it('should lock the time controls and hide all-day when lockers.disabled_date_select is set', () => {
        const settings = spectator.inject(SettingsService);
        const lock = settingSignal('lockers.disabled_date_select');
        const time_disabled = () =>
            spectator.query('a-time-field', { read: NgModel }).isDisabled;
        const duration_disabled = () =>
            spectator.query('a-duration-field', { read: NgModel }).isDisabled;
        spectator.component.model.update((m) => ({
            ...m,
            booking_type: 'locker',
        }));
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.lockers.disabled_date_select' ? true : undefined,
        );
        lock.set(true);
        spectator.detectChanges();
        expect(time_disabled()).toBe(true);
        expect(duration_disabled()).toBe(true);
        expect(spectator.query('mat-checkbox')).not.toExist();

        (settings.get as Mock).mockImplementation(() => undefined);
        lock.set(false);
        spectator.detectChanges();
        expect(time_disabled()).toBe(false);
        expect(duration_disabled()).toBe(false);
        expect(spectator.query('mat-checkbox')).toExist();
    });

    it('should compute the end date from the available period', () => {
        expect(spectator.component.end_date()).toBe(
            endOfDay(addDays(Date.now(), 90)).valueOf(),
        );
    });

    it('should fall back to the bookings available period', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.bookings.available_period' ? 30 : undefined,
        );
        expect(spectator.component.end_date()).toBe(
            endOfDay(addDays(Date.now(), 30)).valueOf(),
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
        expect(
            spectator.queryAll('section[features] settings-toggle').length,
        ).toBe(2);
    });
});
