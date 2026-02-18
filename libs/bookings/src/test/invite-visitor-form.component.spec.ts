import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { Booking, OrganisationService } from '@placeos/common';
import { MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { BookingFormService } from '../lib/booking-form.service';
import { generateBookingForm } from '../lib/booking.utilities';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsService } from '@placeos/common';
import { InviteVisitorFormComponent } from '../lib/invite-visitor-form.component';

describe('InviteVisitorFormComponent', () => {
    let spectator: SpectatorRouting<InviteVisitorFormComponent>;
    const createComponent = createRoutingFactory({
        component: InviteVisitorFormComponent,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                form: generateBookingForm(),
                booking: new Booking(),
                loading: new BehaviorSubject(''),
                setOptions: jest.fn(),
                postForm: jest.fn(async () => new Booking()),
                postFormForVisitorGroup: jest.fn(
                    async () => new Booking(),
                ),
                loadGroupSiblings: jest.fn(async () => []),
                editFormForGroup: jest.fn(async () => new Booking()),
            }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                building_list: new BehaviorSubject([]),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
            MockModule(MatAutocompleteModule),
            MockModule(MatCheckboxModule),
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

    it('should load and show sibling visitors when editing a group booking', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as jest.Mock).mockResolvedValue([
            new Booking({
                id: 'booking-parent',
                asset_name: 'Visitor One',
                asset_id: 'visitor.one@example.com',
                extension_data: { company: 'Org One' },
            }),
            new Booking({
                id: 'booking-child',
                parent_id: 'booking-parent',
                asset_name: 'Visitor Two',
                asset_id: 'visitor.two@example.com',
                extension_data: { company: 'Org Two' },
            }),
        ]);
        service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_name: 'Visitor One',
            asset_id: 'visitor.one@example.com',
        });

        await spectator.component.ngOnInit();

        expect(service.loadGroupSiblings).toHaveBeenCalled();
        expect(service.form.value.assets).toHaveLength(2);
        expect(service.form.value.assets[0].email).toBe(
            'visitor.one@example.com',
        );
        expect(service.form.value.assets[1].email).toBe(
            'visitor.two@example.com',
        );
    });

    it('should load group members from extension data when sibling lookup is empty', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as jest.Mock).mockResolvedValue([]);
        (service as any).booking = new Booking({
            id: 'booking-parent',
            extension_data: {
                group_members: [
                    {
                        name: 'Visitor One',
                        email: 'visitor.one@example.com',
                        company: 'Org One',
                        international: true,
                    },
                    {
                        name: 'Visitor Two',
                        email: 'visitor.two@example.com',
                        company: 'Org Two',
                        international: false,
                    },
                ],
            },
        });
        service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_name: 'Visitor One',
            asset_id: 'visitor.one@example.com',
        });

        await spectator.component.ngOnInit();

        expect(service.form.value.assets).toHaveLength(2);
        expect(service.form.value.assets[0].email).toBe(
            'visitor.one@example.com',
        );
        expect(service.form.value.assets[1].email).toBe(
            'visitor.two@example.com',
        );
    });
});
