import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { BookingFormService } from '../lib/booking-form.service';
import { Booking } from '../lib/booking.class';
import { generateBookingForm } from '../lib/booking.utilities';

import { InviteVisitorFormComponent } from '../lib/invite-visitor-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SettingsService } from '@placeos/common';

describe('InviteVisitorFormComponent', () => {
    let spectator: SpectatorRouting<InviteVisitorFormComponent>;
    const createComponent = createRoutingFactory({
        component: InviteVisitorFormComponent,
        providers: [
            MockProvider(BookingFormService, {
                form: generateBookingForm(),
                loading: new BehaviorSubject(''),
                setOptions: jest.fn(),
                postForm: jest.fn(async () => new Booking()),
            }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                building_list: new BehaviorSubject([]),
            }),
            MockProvider(SettingsService, { get: jest.fn() })
        ],
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
            MockModule(MatAutocompleteModule),
            ReactiveFormsModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should contain form fields', () => {
        expect('a-date-field').toExist();
        expect('a-time-field').toExist();
        expect('a-duration-field').toExist();
        expect('input[name="visitor-name"]').toExist();
        expect('input[name="visitor-email"]').toExist();
        expect('input[name="reason"]').toExist();
    });

    it('should allow sending visitor invite', () => {
        const service = spectator.inject(BookingFormService);
        expect(service.postForm).not.toBeCalled();
        spectator.click('button[send]');
        expect(service.postForm).not.toBeCalled();
        service.form.patchValue({
            asset_id: 'test@mail.com',
        });
        spectator.click('button[send]');
        expect(service.postForm).toBeCalled();
    });

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        (spectator.inject(BookingFormService).loading as any).next('X');
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should show sent invite state', () => {
        expect('[sent]').not.toExist();
        spectator.component.sent = true;
        spectator.detectChanges();
        expect('[sent]').toExist();
    });
});
