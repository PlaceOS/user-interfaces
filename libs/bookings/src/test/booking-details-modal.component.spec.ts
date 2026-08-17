import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    currentUser,
    MapsPeopleService,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import type { Mock } from 'vitest';

import { Booking } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { IndoorMapsComponent } from 'libs/components/src/lib/indoor-maps.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { BehaviorSubject, NEVER, of } from 'rxjs';
import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';

// `checkinBooking` runs for real; only the ts-client `post` beneath it is
// stubbed so the check-in request resolves.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('BookingDetailsModalComponent', () => {
    let spectator: Spectator<BookingDetailsModalComponent>;
    const refresh_fn = vi.fn();
    const edit_fn = vi.fn();
    const remove_fn = vi.fn();
    const end_fn = vi.fn();
    const createComponent = createComponentFactory({
        component: BookingDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                booking: new Booking({
                    id: 'booking-1',
                    booking_type: 'desk',
                    type: 'desk',
                    asset_id: 'desk-1',
                    asset_name: 'Desk 1',
                    date: Date.now(),
                    duration: 60,
                    status: 'approved',
                } as any),
                edit_fn,
                remove_fn,
                end_fn,
                refresh_fn,
            }),
            MockProvider(OrganisationService as any, {
                levelWithID: vi.fn(),
                buildings: [],
            }),
            MockProvider(SettingsService as any, createSettingsServiceMock()),
            MockProvider(MapsPeopleService, {
                use_mapsindoors$: new BehaviorSubject(false),
            } as any),
        ],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
            MockComponent(StatusPillComponent),
            MockComponent(IndoorMapsComponent),
        ],
        imports: [MockModule(MatMenuModule), MockModule(MatDialogModule)],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show images', () => {
        expect('image-carousel').not.toExist();
        (spectator.component as any).booking.set(
            new Booking({
                extension_data: { images: [''] },
            }),
        );
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

    it('should show title', () => expect('[title]').toExist());

    it('should not delete ended bookings', () => {
        const booking = new Booking({
            id: 'booking-1',
            booking_type: 'desk',
            type: 'desk',
            checked_out_at: Math.floor(Date.now() / 1000) - 60,
            date: Date.now(),
            duration: 60,
            status: 'approved',
        } as any);

        spectator.component.remove(booking);

        expect(remove_fn).not.toHaveBeenCalled();
    });

    it('should end instead of cancel an ongoing checked-in visitor booking', () => {
        const booking = new Booking({
            id: 'visitor-booking-1',
            booking_type: 'visitor',
            type: 'visitor',
            checked_in: true,
            date: Date.now() - 30 * 60 * 1000,
            duration: 60,
            status: 'approved',
        } as any);
        (spectator.component as any).booking.set(booking);

        expect(spectator.component.is_in_progress()).toBe(true);
        expect(spectator.component.can_cancel()).toBe(false);

        spectator.component.remove(booking, false);

        expect(remove_fn).not.toHaveBeenCalled();
    });

    it('should allow cancelling a visitor booking before check-in', () => {
        const booking = new Booking({
            id: 'visitor-booking-1',
            booking_type: 'visitor',
            type: 'visitor',
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
            status: 'approved',
        } as any);
        (spectator.component as any).booking.set(booking);

        expect(spectator.component.can_cancel()).toBe(true);

        spectator.component.remove(booking, false);

        expect(remove_fn).toHaveBeenCalledWith(booking, false);
    });

    it('should format visitor name nicely in booking details', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'visitor',
                asset_name: 'jane.doe@example.com',
                asset_id: 'jane.doe@example.com',
            }),
        );

        expect(spectator.component.visitor_display_name()).toBe('Jane Doe');
        expect(spectator.component.visitor_email_label()).toBe(
            'jane.doe@example.com',
        );
    });

    it('should show booking title as display title and visitor name separately', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'visitor',
                title: 'Vendor Interview',
                description: 'Vendor Interview',
                asset_name: 'Vendor Interview',
                asset_id: 'visitor.one@example.com',
                attendees: [
                    { name: 'Visitor One', email: 'visitor.one@example.com' },
                ],
            } as any),
        );

        expect(spectator.component.display_title()).toBe('Vendor Interview');
        expect(spectator.component.visitor_display_name()).toBe('Visitor One');
    });

    it('should refresh parent state after toggling checked in', async () => {
        vi.mocked(ts_client.post).mockResolvedValue({
            id: 'booking-1',
            checked_in: true,
        } as any);

        await spectator.component.toggleCheckedIn();

        expect(refresh_fn).toHaveBeenCalled();
        expect(spectator.component.booking().checked_in).toBe(true);
    });

    it('should confirm before checking out', async () => {
        const dialog: MatDialog = (spectator.component as any)._dialog;
        vi.spyOn(dialog, 'open').mockReturnValue({
            componentInstance: { event: NEVER },
            afterClosed: () => of(null),
            close: vi.fn(),
        } as any);
        (spectator.component as any).booking.set(
            new Booking({
                id: 'booking-1',
                checked_in: true,
            } as any),
        );

        await spectator.component.toggleCheckedIn();

        expect(dialog.open).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                data: expect.objectContaining({
                    title: 'COMMON.CHECK_OUT',
                    confirm_text: 'COMMON.CHECK_OUT',
                    icon: { content: 'logout' },
                }),
            }),
        );
        expect(ts_client.post).not.toHaveBeenCalled();
    });

    it('should check out parking and refresh the parent state', async () => {
        const dialog: MatDialog = (spectator.component as any)._dialog;
        const close = vi.fn();
        vi.spyOn(dialog, 'open').mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close,
        } as any);
        (spectator.component as any).booking.set(
            new Booking({
                id: 'parking-booking-1',
                booking_type: 'parking',
                type: 'parking',
                checked_in: true,
            } as any),
        );
        vi.mocked(ts_client.post).mockResolvedValue({
            id: 'parking-booking-1',
            booking_type: 'parking',
            type: 'parking',
            checked_in: false,
            checked_out_at: Math.floor(Date.now() / 1000),
        } as any);

        await spectator.component.toggleCheckedIn();

        expect(dialog.open).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                data: expect.objectContaining({
                    content:
                        'You are currently checked in.<br/>' +
                        'Would you like to check out of your parking space now?<br/>' +
                        'This will make the parking space available for others to book.',
                }),
            }),
        );
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('parking-booking-1/check_in?state=false'),
            '',
        );
        expect(spectator.component.booking().checked_in).toBe(false);
        expect(spectator.component.checked_out()).toBe(true);
        expect(refresh_fn).toHaveBeenCalled();
        expect(close).toHaveBeenCalled();
    });

    it('should show waitlisted status for parking requests when enabled', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                approved: false,
                status: 'tentative',
                process_state: 'wait_list',
            } as any),
        );

        expect(spectator.component.booking_status()).toBe('info');
    });

    it('should not show waiting approval parking requests as waitlisted', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                status: 'tentative',
                process_state: 'waiting_approval',
            } as any),
        );

        expect(spectator.component.booking_status()).toBe('warning');
    });

    it('should hide waitlisted status for parking requests when waitlist display is disabled', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((name: string) =>
            name === 'app.parking.show_waitlist' ? false : undefined,
        );
        spectator = createComponent();
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                approved: false,
                status: 'tentative',
                process_state: 'wait_list',
            } as any),
        );

        expect(spectator.component.booking_status()).toBe('warning');
    });

    it('should hide selected parking space when enabled', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((name: string) =>
            name === 'app.parking.hide_selected_space' ? true : undefined,
        );
        spectator = createComponent();
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'parking-1',
                asset_name: 'Parking 1',
            } as any),
        );

        expect(spectator.component.resource_details_label()).toBe(
            'RESOURCE.PARKING',
        );
    });

    it('should show group details from the linked group parent booking', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'desk',
                type: 'desk',
                parent_id: 'booking-group',
                linked_parent_booking: {
                    id: 'booking-group',
                    asset_id: 'group-1',
                    asset_name: 'Group Booking',
                    user_id: 'user-1',
                    user_name: 'User One',
                    description: 'Group Booking',
                    booking_type: 'group',
                    date: Date.now(),
                    duration: 60,
                    status: 'approved',
                    extension_data: {
                        group: 'group-ref',
                        group_resource_type: 'desk',
                        group_members: [
                            { email: 'one@example.com', name: 'One' },
                            { email: 'two@example.com', name: 'Two' },
                        ],
                    },
                },
            } as any),
        );
        spectator.detectChanges();

        expect(spectator.component.group_details()).toEqual({
            name: 'group-ref',
            resource_type: 'desk',
            size: 2,
        });
        expect(spectator.element.textContent).toContain('Group Booking');
    });

    it('should allow the group host to delete the linked group parent', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'desk',
                type: 'desk',
                parent_id: 'booking-group',
                user_email: currentUser().email,
                linked_parent_booking: {
                    id: 'booking-group',
                    asset_id: 'group-1',
                    asset_name: 'Group Booking',
                    user_id: 'current-user',
                    user_name: '<empty>',
                    user_email: currentUser().email,
                    description: 'Group Booking',
                    booking_type: 'group',
                    date: Date.now(),
                    duration: 60,
                    status: 'approved',
                    extension_data: {
                        group_resource_type: 'desk',
                        group_members: [
                            {
                                email: currentUser().email,
                                name: '<empty>',
                            },
                            { email: 'two@example.com', name: 'Two' },
                        ],
                    },
                },
            } as any),
        );

        expect(spectator.component.can_manage_group()).toBe(true);
        spectator.component.remove(spectator.component.group_parent_booking());

        expect(remove_fn).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'booking-group',
                booking_type: 'group',
            }),
        );
    });

    it('should hide group parent actions for non-host users', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'desk',
                type: 'desk',
                parent_id: 'booking-group',
                user_email: currentUser().email,
                linked_parent_booking: {
                    id: 'booking-group',
                    asset_id: 'group-1',
                    asset_name: 'Group Booking',
                    user_id: 'other-user',
                    user_name: 'Other User',
                    user_email: 'other.user@example.com',
                    description: 'Group Booking',
                    booking_type: 'group',
                    date: Date.now(),
                    duration: 60,
                    status: 'approved',
                },
            } as any),
        );

        expect(spectator.component.can_manage_group()).toBe(false);
    });
});
