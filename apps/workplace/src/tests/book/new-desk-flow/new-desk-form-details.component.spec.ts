import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { Building, Desk, OrganisationService } from '@placeos/organisation';
import { NewDeskFormDetailsComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component';
import { DeskListFieldComponent } from 'libs/bookings/src/lib/desk-list-field.component';
import { AssetListFieldComponent } from 'libs/assets/src/lib/asset-list-field.component';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

describe('NewDeskFormDetailsComponent', () => {
    let spectator: Spectator<NewDeskFormDetailsComponent>;
    const createComponent = createComponentFactory({
        component: NewDeskFormDetailsComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => true),
                saveUserSetting: jest.fn(),
            } as any),
            MockProvider(BookingFormService, {
                form: new FormGroup({}),
                options: new BehaviorSubject({}),
                features: new BehaviorSubject([]),
                setOptions: jest.fn(),
                setFeature: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                building_list: new BehaviorSubject([]),
                active_levels: new BehaviorSubject([]),
                building: new Building({ id: '1' }),
            }),
            MockProvider(MatDialog, {
                open: jest.fn(() => ({ afterClosed: jest.fn(() => of()) })),
            } as any),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(MatFormField),
            MockComponent(DateFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(AssetListFieldComponent),
            MockComponent(DeskListFieldComponent),
            MockComponent(UserListFieldComponent),
            MockComponent(UserSearchFieldComponent),
        ],
        imports: [
            MockModule(MatCheckboxModule),
            MockModule(MatFormFieldModule),
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput({
            form: generateBookingForm(),
        });
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow changing title', () => expect('[name="title"]').toExist());

    it('should allow changing date', () => expect('[name="date"]').toExist());

    it('should allow changing start time', () =>
        expect('[name="start-time"]').toExist());

    it('should allow changing end time', () =>
        expect('[formControlName="duration"]').toExist());

    it('should allow changing selected desks', () =>
        expect('[formControlName="resources"]').toExist());

    it('should allow requesting assets', () =>
        expect('[formControlName="assets"]').toExist());
});
