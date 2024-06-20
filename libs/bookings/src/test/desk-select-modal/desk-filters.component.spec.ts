import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { TranslateModule } from '@ngx-translate/core';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { Building, OrganisationService, Region } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { DeskFiltersComponent } from '../../lib/desk-select-modal/desk-filters.component';

describe('DeskFiltersComponent', () => {
    let spectator: Spectator<DeskFiltersComponent>;
    const createComponent = createComponentFactory({
        component: DeskFiltersComponent,
        providers: [
            MockProvider(MatBottomSheetRef, { dismiss: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, {
                active_buildings: of([new Building({ id: '1' })]),
                active_region: new BehaviorSubject(new Region({ id: '1' })),
                building: new Building({ id: '1' }),
                buildings: [
                    new Building({ id: '1' }),
                    new Building({ id: '2' }),
                ],
            }),
            MockProvider(BookingFormService, {
                features: new BehaviorSubject(['standing']),
                form: new FormGroup({
                    date: new FormControl(),
                    duration: new FormControl(),
                    all_day: new FormControl(),
                }),
            } as any),
        ],
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MockModule(MatCheckboxModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(FormsModule),
            MockModule(ReactiveFormsModule),
            MockModule(TranslateModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow changing date', () =>
        expect('[formControlName="date"]').toExist());

    it('should allow start time', () =>
        expect('[name="start-time"]').toExist());

    it('should allow end time', () =>
        expect('[formControlName="duration"]').toExist());

    it('should allow toggling features', () => expect('[features]').toExist());

    it('should allow setting all day', () => {
        expect('[formControlName="all_day"]').not.toExist();
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => true
        );
        spectator.detectChanges();
        expect('[formControlName="all_day"]').toExist();
    });

    it('should allow toggling favourites', () =>
        expect('[name="fav"]').toExist());

    it('should allow closing', () => {
        expect('button[name="close-desk-filters"]').toExist();
        spectator.click('button[name="close-desk-filters"]');
        expect(spectator.inject(MatBottomSheetRef).dismiss).toBeCalled();
    });
});
