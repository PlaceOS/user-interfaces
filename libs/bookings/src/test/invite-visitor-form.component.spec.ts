import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import type { Mock } from 'vitest';

import { inject, Injector, signal } from '@angular/core';
import { Booking, OrganisationService, User } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockModule, MockProvider, MockService } from 'ng-mocks';
import { BookingFormService } from '../lib/booking-form.service';
import { generateBookingForm } from '../lib/booking.utilities';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsService } from '@placeos/common';
import { InviteVisitorFormComponent } from '../lib/invite-visitor-form.component';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('InviteVisitorFormComponent', () => {
    let spectator: SpectatorRouting<InviteVisitorFormComponent>;
    const createComponent = createRoutingFactory({
        component: InviteVisitorFormComponent,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    // `generateBookingForm` calls `form()` which uses
                    // `inject()`, so it must run in an injection context.
                    const { model, form } = generateBookingForm(
                        new Booking(),
                        inject(Injector),
                    );
                    return MockService(BookingFormService, {
                        model,
                        form,
                        booking: new Booking(),
                        loading: signal(''),
                        setOptions: vi.fn(),
                        postForm: vi.fn(async () => new Booking()),
                        postFormForVisitorGroup: vi.fn(
                            async () => new Booking(),
                        ),
                        loadGroupSiblings: vi.fn(async () => []),
                        editFormForGroup: vi.fn(async () => new Booking()),
                    });
                },
            },
            MockProvider(
                OrganisationService as any,
                {
                    initialised: signal(true),
                    active_buildings: signal([
                        {
                            id: 'bld-1',
                            name: 'Building One',
                            parent_id: 'reg-1',
                            zone_id: 'zone-bld-1',
                        },
                    ]),
                    building_list: signal([
                        {
                            id: 'bld-1',
                            name: 'Building One',
                            parent_id: 'reg-1',
                            zone_id: 'zone-bld-1',
                        },
                        {
                            id: 'bld-2',
                            name: 'Building Two',
                            parent_id: 'reg-1',
                            zone_id: 'zone-bld-2',
                        },
                    ]),
                    buildings: [
                        {
                            id: 'bld-1',
                            name: 'Building One',
                            parent_id: 'reg-1',
                            zone_id: 'zone-bld-1',
                        },
                        {
                            id: 'bld-2',
                            name: 'Building Two',
                            parent_id: 'reg-1',
                            zone_id: 'zone-bld-2',
                        },
                    ],
                    building: { id: 'bld-1', name: 'Building One' },
                    organisation: { id: 'org-1' },
                    find: vi.fn((id: string) =>
                        [
                            {
                                id: 'bld-1',
                                name: 'Building One',
                                parent_id: 'reg-1',
                                zone_id: 'zone-bld-1',
                            },
                            {
                                id: 'bld-2',
                                name: 'Building Two',
                                parent_id: 'reg-1',
                                zone_id: 'zone-bld-2',
                            },
                        ].find((building) => building.id === id),
                    ),
                    levelWithID: vi.fn((id_list: string[]) =>
                        id_list?.includes('lvl-2')
                            ? { id: 'lvl-2', parent_id: 'bld-2' }
                            : null,
                    ),
                } as any,
            ),
            MockProvider(SettingsService as any, createSettingsServiceMock()),
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

    it('should resolve selected building from booking zones and patch selected building', async () => {
        const service = spectator.inject(BookingFormService);
        await spectator.component.ngOnInit();
        service.model.update((m) => ({
            ...m,
            zones: ['org-1', 'bld-2'],
        }));

        expect(spectator.component.selected_building_id()).toBe('bld-2');

        spectator.component.setBuilding('bld-1');

        expect(service.model().zones).toEqual(['org-1', 'reg-1', 'bld-1']);
    });

    it('should list all buildings when editing a booking outside the active building context', async () => {
        const buildings = spectator.component.buildings() || [];

        expect(buildings.map((building) => building.id)).toEqual([
            'bld-1',
            'bld-2',
        ]);
    });

    it('should resolve selected building from level zones when editing visitors', async () => {
        const service = spectator.inject(BookingFormService);
        await spectator.component.ngOnInit();
        service.model.update((m) => ({
            ...m,
            id: 'booking-edit',
            booking_type: 'visitor',
            zones: ['org-1', 'reg-1', 'lvl-2'],
        }));

        expect(spectator.component.selected_building_id()).toBe('bld-2');
    });

    it('should resolve selected building from building zone ids when editing visitors', async () => {
        const service = spectator.inject(BookingFormService);
        await spectator.component.ngOnInit();
        service.model.update((m) => ({
            ...m,
            id: 'booking-edit',
            booking_type: 'visitor',
            zones: ['org-1', 'reg-1', 'zone-bld-2'],
        }));

        expect(spectator.component.selected_building_id()).toBe('bld-2');
    });

    it('should not switch the active building when editing a visitor in another building', async () => {
        const service = spectator.inject(BookingFormService);
        const org = spectator.inject(OrganisationService);
        service.model.update((m) => ({
            ...m,
            id: 'booking-edit',
            booking_type: 'visitor',
            zones: ['org-1', 'reg-1', 'bld-2'],
        }));

        await spectator.component.ngOnInit();

        expect(org.building.id).toBe('bld-1');
    });

    it('should contain form fields', () => {
        expect('a-date-field').toExist();
        expect('a-time-field').toExist();
        expect('a-duration-field').toExist();
        // `name` was removed from `[formField]` inputs (NG8022), so assert on
        // the stable `id`s instead.
        expect('input#visitor-name').toExist();
        expect('input#visitor-email').toExist();
        // The reason input now binds via `[formField]="form.title"`, which sets
        // its `name` to the field path, so assert on the stable label instead.
        expect('label[for="reason"]').toExist();
    });

    it('should reflect updated form date for time and duration fields', async () => {
        const service = spectator.inject(BookingFormService);
        // ngOnInit registers the model.date → form_date sync listener.
        await spectator.component.ngOnInit();
        const initial_date = spectator.component.form_date();
        const new_date = Date.now() + 60 * 60 * 1000;

        expect(initial_date).toBe(service.model().date);

        service.model.update((m) => ({ ...m, date: new_date }));

        expect(spectator.component.form_date()).toBe(new_date);
    });

    it('should reflect updated date disabled state for the start time field', () => {
        const service = spectator.inject(BookingFormService);
        expect(spectator.component.is_start_time_disabled()).toBe(false);

        // The date field is disabled by schema logic when a saved booking
        // (has id) has a date in the past.
        service.model.update((m) => ({
            ...m,
            id: 'booking-1',
            date: Date.now() - 60 * 60 * 1000,
        }));

        expect(spectator.component.is_start_time_disabled()).toBe(true);
    });

    it('should allow sending visitor invite', () => {
        const service = spectator.inject(BookingFormService);
        expect(service.postForm).not.toHaveBeenCalled();
        spectator.click('button[send]');
        expect(service.postForm).not.toHaveBeenCalled();
        service.model.update((m) => ({
            ...m,
            asset_id: 'test@mail.com',
        }));
        spectator.click('button[send]');
        expect(service.postForm).toHaveBeenCalled();
    });

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        (spectator.inject(BookingFormService).loading as any).set('X');
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should show sent invite state', () => {
        expect('[sent]').not.toExist();
        spectator.component.sent.set(true);
        spectator.detectChanges();
        expect('[sent]').toExist();
    });

    it('should load and show sibling visitors when editing a group booking', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as Mock).mockResolvedValue([
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
        service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_name: 'Visitor One',
            asset_id: 'visitor.one@example.com',
        }));

        await spectator.component.ngOnInit();
        await wait(0);

        expect(service.loadGroupSiblings).toHaveBeenCalled();
        expect(service.model().assets).toHaveLength(2);
        expect(service.model().assets[0].email).toBe('visitor.one@example.com');
        expect(service.model().assets[1].email).toBe('visitor.two@example.com');
    });

    it('should prefer group member names when sibling booking asset names are reason text', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as Mock).mockResolvedValue([
            new Booking({
                id: 'booking-parent',
                asset_name: 'Vendor Interview',
                asset_id: 'visitor.one@example.com',
                extension_data: {
                    group_members: [
                        {
                            name: 'Visitor One',
                            email: 'visitor.one@example.com',
                            company: 'Org One',
                        },
                    ],
                },
            }),
        ]);
        service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_name: 'Vendor Interview',
            asset_id: 'visitor.one@example.com',
        }));

        await spectator.component.ngOnInit();
        await wait(0);

        expect(service.model().assets[0].name).toBe('Visitor One');
    });

    it('should load group members from extension data when sibling lookup is empty', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as Mock).mockResolvedValue([]);
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
        service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_name: 'Visitor One',
            asset_id: 'visitor.one@example.com',
        }));

        await spectator.component.ngOnInit();

        expect(service.model().assets).toHaveLength(2);
        expect(service.model().assets[0].email).toBe('visitor.one@example.com');
        expect(service.model().assets[1].email).toBe('visitor.two@example.com');
    });

    it('should persist edited reason from title when sending invite', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        await spectator.component.ngOnInit();
        service.model.update((m) => ({
            ...m,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor Name',
            title: 'Vendor Interview',
            description: 'Visit',
        }));

        await spectator.component.sendInvite();

        expect(service.postForm).toHaveBeenCalled();
        expect(service.model().title).toBe('Vendor Interview');
    });

    it('should set the multiple visitor placeholder email when the setting resolves after init', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(() => undefined);
        await spectator.component.ngOnInit();

        expect(service.model().asset_id).toBeFalsy();

        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        spectator.detectChanges();

        expect(service.model().asset_id).toBe('multiple@place.tech');
    });

    it('should edit as a group when converting single visitor booking to multiple', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as Mock).mockResolvedValue([]);
        service.model.update((m) => ({
            ...m,
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
        }));
        await spectator.component.ngOnInit();

        await spectator.component.sendInvite();

        expect(service.editFormForGroup).toHaveBeenCalledTimes(1);
        expect((service.editFormForGroup as Mock).mock.calls[0][0][0].id).toBe(
            'booking-parent',
        );
        expect(service.postFormForVisitorGroup).not.toHaveBeenCalled();
    });

    it('should not overwrite existing visitor email with multiple placeholder when editing', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        service.model.update((m) => ({
            ...m,
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
        }));

        await spectator.component.ngOnInit();

        expect(service.model().asset_id).toBe('original.visitor@example.com');
    });

    it('should load siblings before edit submit when sibling cache is still empty', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        const load_group_siblings = service.loadGroupSiblings as Mock;
        load_group_siblings.mockReset();
        load_group_siblings
            .mockImplementationOnce(() => new Promise(() => {}))
            .mockResolvedValueOnce([
                new Booking({
                    id: 'booking-parent',
                    asset_name: 'Visitor One',
                    asset_id: 'visitor.one@example.com',
                }),
                new Booking({
                    id: 'booking-child',
                    parent_id: 'booking-parent',
                    asset_name: 'Visitor Two',
                    asset_id: 'visitor.two@example.com',
                }),
            ]);
        service.model.update((m) => ({
            ...m,
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
            ],
        }));

        await spectator.component.ngOnInit();
        await spectator.component.sendInvite();

        expect(load_group_siblings.mock.calls.length).toBeGreaterThanOrEqual(2);
        expect(service.editFormForGroup).toHaveBeenCalled();
        const last_call =
            (service.editFormForGroup as Mock).mock.calls.at(-1) || [];
        expect(last_call[0]).toHaveLength(2);
    });

    it('should keep start time available when date control is disabled', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        const booking_date = Date.now() - 10 * 60 * 1000;
        // A saved booking (has id) with a past date disables the date field
        // via the form schema's `disabled` rule.
        service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            booking_type: 'visitor',
            date: booking_date,
            duration: 60,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        }));

        await spectator.component.ngOnInit();

        expect(spectator.component.form_date()).toBe(booking_date);
        expect(spectator.component.is_start_time_disabled()).toBe(true);
    });

    it('should set reason on title only when sending invite', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        await spectator.component.ngOnInit();
        service.model.update((m) => ({
            ...m,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor Name',
            title: '',
            description: '',
        }));

        await spectator.component.sendInvite();

        expect(service.postForm).toHaveBeenCalled();
        expect(service.model().title).toBe('Visit');
        expect(service.model().description || '').toBe('');
    });

    it('should keep preloaded edit booking date when initialising visitor form', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        sessionStorage.removeItem('PLACEOS.booking_form');
        sessionStorage.removeItem('PLACEOS.booking_form_filters');
        const booking_date = Date.now() - 15 * 60 * 1000;
        service.model.update((m) => ({
            ...m,
            id: 'booking-edit',
            booking_type: 'visitor',
            date: booking_date,
            duration: 60,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        }));

        await spectator.component.ngOnInit();

        expect(service.model().id).toBe('booking-edit');
        expect(service.model().date).toBe(booking_date);
    });

    it('should keep preloaded edit booking date when booking only has visitor type', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        sessionStorage.removeItem('PLACEOS.booking_form');
        sessionStorage.removeItem('PLACEOS.booking_form_filters');
        const booking_date = Date.now() - 20 * 60 * 1000;
        (service as any).booking = new Booking({
            id: 'booking-edit-type-only',
            type: 'visitor',
            booking_type: ' ',
            date: booking_date,
            duration: 60,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        });
        service.model.update((m) => ({
            ...m,
            id: 'booking-edit-type-only',
            booking_type: ' ',
            date: booking_date,
            duration: 60,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        }));

        await spectator.component.ngOnInit();

        expect(service.model().id).toBe('booking-edit-type-only');
        expect(service.model().date).toBe(booking_date);
    });

    it('should restore preloaded edit booking zones from the booking service when the form is initially empty', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation((key: string) =>
            key === 'app.bookings.multiple_visitors' ? false : undefined,
        );
        sessionStorage.removeItem('PLACEOS.booking_form');
        sessionStorage.removeItem('PLACEOS.booking_form_filters');
        (service as any).booking = new Booking({
            id: 'booking-edit-zones-only',
            type: 'visitor',
            booking_type: ' ',
            date: Date.now(),
            duration: 60,
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
            zones: ['org-1', 'reg-1', 'zone-bld-2'],
        });
        service.form().reset();

        await spectator.component.ngOnInit();

        expect(service.model().id).toBe('booking-edit-zones-only');
        expect(service.model().zones).toEqual(['org-1', 'reg-1', 'zone-bld-2']);
        expect(spectator.component.selected_building_id()).toBe('bld-2');
    });

    it('should read bookable_hours from visitor settings with fallback', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) => {
            if (key === 'app.visitors.bookable_hours')
                return { start: 480, end: 1140 };
            return undefined;
        });
        expect(spectator.component.bookable_hours()).toEqual({
            start: 480,
            end: 1140,
        });

        (settings.get as Mock).mockImplementation((key: string) => {
            if (key === 'app.bookings.bookable_hours')
                return { start: 540, end: 1080 };
            return undefined;
        });
        expect(spectator.component.bookable_hours()).toEqual({
            start: 540,
            end: 1080,
        });
    });

    it('should not block init while loading sibling visitors', async () => {
        const service = spectator.inject(BookingFormService);
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation(
            (key: string) => key === 'app.bookings.multiple_visitors',
        );
        (service.loadGroupSiblings as Mock).mockImplementation(
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
        service.model.update((m) => ({
            ...m,
            id: 'booking-parent',
            booking_type: 'visitor',
            date: Date.now(),
            duration: 60,
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
        }));

        const result = await Promise.race([
            spectator.component.ngOnInit().then(() => 'ready'),
            wait(100).then(() => 'timeout'),
        ]);

        expect(result).toBe('ready');
        expect(service.model().assets).toHaveLength(2);
    });
});
