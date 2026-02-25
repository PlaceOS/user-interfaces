import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { Booking, OrganisationService, User } from '@placeos/common';
import { MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { BookingFormService } from '../lib/booking-form.service';
import { generateBookingForm } from '../lib/booking.utilities';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsService } from '@placeos/common';
import { InviteVisitorFormComponent } from '../lib/invite-visitor-form.component';

const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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
        await wait(0);

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

    it('should persist edited reason from title when sending invite', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) =>
                key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        await spectator.component.ngOnInit();
        service.form.patchValue({
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor Name',
            title: 'Vendor Interview',
            description: 'Visit',
        });

        await spectator.component.sendInvite();

        expect(service.postForm).toHaveBeenCalled();
        expect(service.form.value.title).toBe('Vendor Interview');
    });

    it('should edit as a group when converting single visitor booking to multiple', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as jest.Mock).mockResolvedValue([]);
        service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            assets: [
                {
                    name: 'Visitor One',
                    email: 'visitor.one@example.com',
                },
                {
                    name: 'Visitor Two',
                    email: 'visitor.two@example.com',
                },
            ],
        });
        await spectator.component.ngOnInit();

        await spectator.component.sendInvite();

        expect(service.editFormForGroup).toHaveBeenCalledTimes(1);
        expect((service.editFormForGroup as jest.Mock).mock.calls[0][0][0].id).toBe(
            'booking-parent',
        );
        expect(service.postFormForVisitorGroup).not.toHaveBeenCalled();
    });

    it('should not overwrite existing visitor email with multiple placeholder when editing', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_id: 'original.visitor@example.com',
            asset_name: 'Original Visitor',
            company: 'Original Company',
            phone: '1234',
            attendees: [
                new User({
                    email: 'original.visitor@example.com',
                    name: 'Original Visitor',
                    organisation: 'Original Company',
                    phone: '1234',
                }),
            ],
        });

        await spectator.component.ngOnInit();

        expect(service.form.value.asset_id).toBe('original.visitor@example.com');
    });

    it('should keep start time available when date control is disabled', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) =>
                key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        const booking_date = Date.now() - 10 * 60 * 1000;
        service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            date: booking_date,
            duration: 60,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        });
        service.form.get('date').disable();

        await spectator.component.ngOnInit();

        expect(spectator.component.form_date).toBe(booking_date);
    });

    it('should set reason on title only when sending invite', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) =>
                key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        await spectator.component.ngOnInit();
        service.form.patchValue({
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor Name',
            title: '',
            description: '',
        });

        await spectator.component.sendInvite();

        expect(service.postForm).toHaveBeenCalled();
        expect(service.form.value.title).toBe('Visit');
        expect(service.form.value.description || '').toBe('');
    });

    it('should not block init while loading sibling visitors', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as jest.Mock).mockImplementation(
            () => new Promise(() => {}),
        );
        (service as any).booking = new Booking({
            id: 'booking-parent',
            extension_data: {
                group_members: [
                    {
                        name: 'Visitor One',
                        email: 'visitor.one@example.com',
                    },
                    {
                        name: 'Visitor Two',
                        email: 'visitor.two@example.com',
                    },
                ],
            },
        });
        service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
        });

        const result = await Promise.race([
            spectator.component.ngOnInit().then(() => 'ready'),
            wait(100).then(() => 'timeout'),
        ]);

        expect(result).toBe('ready');
        expect(service.form.value.assets).toHaveLength(2);
    });
});
