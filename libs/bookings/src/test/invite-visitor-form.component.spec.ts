import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { getInvalidFields } from 'libs/common/src/lib/general';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { BookingFormService } from '../lib/booking-form.service';
import { Booking } from '../lib/booking.class';
import { generateBookingForm } from '../lib/booking.utilities';

import { InviteVisitorFormComponent } from '../lib/invite-visitor-form.component';

jest.mock('@placeos/common');

import * as common_mod from '@placeos/common';

describe('InviteVisitorFormComponent', () => {
    let spectator: Spectator<InviteVisitorFormComponent>;
    const createComponent = createRoutingFactory({
        component: InviteVisitorFormComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    form: generateBookingForm(),
                    loading: new BehaviorSubject(''),
                    setOptions: jest.fn(),
                    postForm: jest.fn(async () => new Booking())
                },
            },
            {
                provide: OrganisationService,
                useValue: { building_list: new BehaviorSubject([]) },
            },
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
            ReactiveFormsModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        (common_mod.notifyError as any) = jest.fn();
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
            asset_id: 'test@mail.com'
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
