import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Desk, OrganisationService } from '@placeos/organisation';

import { DesksService } from '../lib/desk.service';

jest.mock('@placeos/common');
jest.mock('../lib/bookings.fn');

import * as booking_fn from '../lib/bookings.fn';
import * as common_mod from '@placeos/common';
import { of } from 'rxjs';
import { StaffUser, User } from '@placeos/users';
import { Booking } from '../lib/booking.class';

describe('DesksService', () => {
    let spectator: SpectatorService<DesksService>;
    const createService = createServiceFactory({
        service: DesksService,
        providers: [
            {
                provide: OrganisationService,
                useValue: { levelWithID: jest.fn() },
            },
            {
                provide: MatDialog,
                useValue: {
                    open: jest.fn(() => ({
                        componentInstance: { event: of({ reason: 'done' }) },
                        afterClosed: () => of(''),
                        close: () => null,
                    })),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should prevent booking without a host', async () => {
        (common_mod as any).notifyError = jest.fn();
        expect(common_mod.notifyError).not.toHaveBeenCalled();
        await spectator.service.bookDesk({ desks: [new Desk()] });
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'You need to select a host to book a desk.'
        );
        (common_mod.notifyError as any).mockReset();
        spectator.service.error_on_host = false;
        await spectator.service.bookDesk({ desks: [new Desk()] });
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'You need to select a host to book a desk. '
        );
        await spectator.service.bookDesk({ desks: [new Desk()] });
    });

    it('should allow booking a desk', async () => {
        (common_mod as any).notifyError = jest.fn();
        expect(common_mod.notifyError).not.toHaveBeenCalled();
        (booking_fn as any).queryBookings = jest.fn(() => of([new Booking()]));
        await spectator.service.bookDesk({
            desks: [new Desk()],
            host: new StaffUser(),
        });
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'You currently already have a desk booked for the selected date.'
        );
        (booking_fn as any).queryBookings.mockImplementation(() => of([]));
        (booking_fn as any).saveBooking = jest.fn(() => of(new Booking()));
        (common_mod as any).notifySuccess = jest.fn();
        await spectator.service.bookDesk({
            desks: [new Desk()],
            host: new StaffUser(),
            date: new Date(),
        });
        expect(common_mod.notifySuccess).toHaveBeenCalledWith(
            'Successfully booked desk'
        );
        expect(booking_fn.saveBooking).toHaveBeenCalledTimes(1);
    });

    it('should allow booking desks for multiple people', async () => {
        (booking_fn as any).queryBookings = jest.fn(() => of([]));
        (booking_fn as any).saveBooking = jest.fn(() => of(new Booking()));
        (common_mod as any).notifySuccess = jest.fn();
        await spectator.service.bookDesk({
            desks: [new Desk(), new Desk(), new Desk()],
            host: new StaffUser(),
            attendees: [new User(), new User(), new User()],
            date: new Date(),
        });
        expect(common_mod.notifySuccess).toHaveBeenCalledWith(
            'Successfully booked desk'
        );
        expect(booking_fn.saveBooking).toHaveBeenCalledTimes(3);
    });
});
