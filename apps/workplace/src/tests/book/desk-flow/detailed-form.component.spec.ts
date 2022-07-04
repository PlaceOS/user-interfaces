import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import {
    Booking,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { OrganisationService } from '@placeos/organisation';
import { DeskFlowDetailedFormComponent } from 'apps/workplace/src/app/book/desk-flow/detailed-form.component';

describe('DetailBookSpaceFormComponent', () => {
    let spectator: Spectator<DeskFlowDetailedFormComponent>;
    const createComponent = createComponentFactory({
        component: DeskFlowDetailedFormComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    setOptions: jest.fn(),
                    options: of({}),
                    features: of(['one', 'two']),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    building_list: of([{ id: 'bld-1' }, { id: 'bld-2' }]),
                    active_levels: of([{ id: 'lvl-1' }, { id: 'lvl-2' }]),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(UserListFieldComponent),
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form', () => {
        expect('form').not.toExist();
        spectator.setInput({
            form: generateBookingForm(new Booking({ date: 1 })),
        });
        spectator.detectChanges();
        expect('form').toExist();
    });

    it.todo('should allow for recurrence');

    it.todo('should allow for group bookings');
});
