import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { BuildingPipe } from 'libs/components/src/lib/building.pipe';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { BookingFormService } from '../lib/booking-form.service';
import { ParkingFiltersComponent } from '../lib/parking-select-modal/parking-filters.component';

describe('ParkingFiltersComponent', () => {
    let spectator: Spectator<ParkingFiltersComponent>;
    const options = signal<any>({ zone_id: 'lvl-a', show_fav: false, features: [] });
    const features = signal<string[]>(['EV', 'Accessible']);
    const model = signal<any>({
        date: new Date(2026, 5, 15, 9, 0, 0, 0).valueOf(),
        duration: 120,
        all_day: false,
    });
    const setOptions = jest.fn();
    const setFeature = jest.fn();
    const state_mock = {
        options,
        features,
        model,
        form: { date: () => ({ disabled: () => false }) },
        setOptions,
        setFeature,
    };

    const levels = [
        { id: 'lvl-b', parent_id: 'bld-1', display_name: 'B', name: 'B', tags: ['parking'] },
        { id: 'lvl-a', parent_id: 'bld-1', display_name: 'A', name: 'A', tags: ['parking'] },
        { id: 'lvl-c', parent_id: 'bld-1', display_name: 'C', name: 'C', tags: ['desks'] },
    ];
    const org_mock: any = {
        active_buildings: signal([
            { id: 'bld-1', display_name: 'Building One', name: 'bld-1' },
            { id: 'bld-2', display_name: 'Building Two', name: 'bld-2' },
        ]),
        active_building: signal({ id: 'bld-1', display_name: 'Building One', name: 'bld-1' }),
        region_list: signal([
            { id: 'reg-1', display_name: 'Region One', name: 'reg-1' },
        ]),
        active_region: signal({ id: 'reg-1', display_name: 'Region One', name: 'reg-1' }),
        levelsForRegion: jest.fn(() => levels),
        levelsForBuilding: jest.fn(() => levels),
        building: null,
        region: null,
    };

    const createComponent = createComponentFactory({
        component: ParkingFiltersComponent,
        providers: [
            { provide: BookingFormService, useValue: state_mock },
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
        jest.clearAllMocks();
        options.set({ zone_id: 'lvl-a', show_fav: false, features: [] });
        features.set(['EV', 'Accessible']);
        org_mock.building = null;
        org_mock.region = null;
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the filters heading', () => {
        expect(spectator.query('h3')).toContainText('COMMON.FILTERS');
    });

    it('should show the building selector when there are multiple buildings', () => {
        expect(spectator.query('mat-select[name="building"]')).toExist();
        expect(spectator.query('mat-select[name="region"]')).not.toExist();
    });

    it('should show the region selector when regions are used', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation((key: string) =>
            key === 'app.use_region' ? true : undefined,
        );
        spectator.detectChanges();
        expect(spectator.query('mat-select[name="region"]')).toExist();
        expect(spectator.query('mat-select[name="building"]')).not.toExist();
    });

    it('should show the level selector by default', () => {
        expect(spectator.query('mat-select[name="location"]')).toExist();
    });

    it('should only list parking levels sorted by building and name', () => {
        const result = spectator.component.levels();
        expect(result.map((_) => _.id)).toEqual(['lvl-a', 'lvl-b']);
    });

    it('should render favourites and feature sections by default', () => {
        expect(spectator.query('section[favs]')).toExist();
        expect(spectator.query('section[features]')).toExist();
        expect(spectator.queryAll('section[features] mat-checkbox').length).toBe(
            2,
        );
    });

    it('should hide level, favourite and feature sections when levels are hidden', () => {
        spectator.setInput('hide_levels', true);
        spectator.detectChanges();
        expect(spectator.query('mat-select[name="location"]')).not.toExist();
        expect(spectator.query('section[favs]')).not.toExist();
        expect(spectator.query('section[features]')).not.toExist();
    });

    it('should only show the apply button when it can close', () => {
        expect(
            spectator.query('button[name="apply-parking-filters"]'),
        ).not.toExist();
        spectator.component.can_close.set(true);
        spectator.detectChanges();
        expect(
            spectator.query('button[name="apply-parking-filters"]'),
        ).toExist();
    });

    it('should forward option changes to the booking form service', () => {
        spectator.component.setOptions({ zone_id: 'lvl-b' });
        expect(setOptions).toHaveBeenCalledWith({ zone_id: 'lvl-b' });
    });

    it('should forward feature changes to the booking form service', () => {
        spectator.component.setFeature('EV', true);
        expect(setFeature).toHaveBeenCalledWith('EV', true);
    });

    it('should update the active building and region through the organisation', () => {
        spectator.component.setBuilding({ id: 'bld-2' } as any);
        expect(org_mock.building).toEqual({ id: 'bld-2' });
        spectator.component.setRegion({ id: 'reg-2' } as any);
        expect(org_mock.region).toEqual({ id: 'reg-2' });
    });
});
