import type { Mock } from 'vitest';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { Desk, OrganisationService, StaffUser, User } from '@placeos/common';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { of } from 'rxjs';

import { DesksService } from '../lib/desk.service';

// bookings.fn and the notification helpers run for real; only the ts-client
// API layer beneath them is stubbed (`queryBookings` -> `get`,
// `saveBooking` -> `post`), and notifications are captured through an injected
// snackbar outlet.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('DesksService', () => {
    let spectator: SpectatorService<DesksService>;
    let notify_open: Mock;
    const createService = createServiceFactory({
        service: DesksService,
        providers: [
            {
                provide: OrganisationService,
                useValue: { levelWithID: vi.fn() },
            },
            {
                provide: MatDialog,
                useValue: {
                    open: vi.fn(() => ({
                        componentInstance: {
                            event: of({ reason: 'done' }),
                            host: new StaffUser({ email: 'test@example.com' }),
                            date: new Date(),
                            reason: 'Test reason',
                            loading: '',
                        },
                        afterClosed: () => of(''),
                        close: () => null,
                    })),
                },
            },
        ],
    });

    const messages = () => notify_open.mock.calls.map((call) => call[0]);

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({ onAction: () => of(), dismiss: vi.fn() }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.post).mockResolvedValue({} as any);
        vi.mocked(ts_client.patch).mockResolvedValue({} as any);
        spectator = createService();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should prevent booking without a host', async () => {
        expect(notify_open).not.toHaveBeenCalled();
        await spectator.service.bookDesk({ desks: [new Desk()] });
        expect(messages()).toContain(
            'You need to select a host to book a desk.',
        );
        expect(ts_client.post).not.toHaveBeenCalled();
    });

    it('should fall back to the current user when host errors are disabled', async () => {
        // With `error_on_host` disabled and no host provided, the service falls
        // back to the current user and proceeds with the booking rather than
        // aborting.
        spectator.service.error_on_host = false;
        await spectator.service.bookDesk({ desks: [new Desk()] });
        expect(messages()).toContain('Successfully booked desk');
        expect(ts_client.post).toHaveBeenCalledTimes(1);
    });

    it('should allow booking a desk', async () => {
        // Host already has a desk booked for the day -> booking is blocked.
        vi.mocked(ts_client.get).mockResolvedValueOnce([
            { user_email: 'test@example.com' },
        ] as any);
        await spectator.service.bookDesk({
            desks: [new Desk()],
            host: new StaffUser({ email: 'test@example.com' }),
        });
        expect(messages()).toContain(
            'You currently already have a desk booked for the selected date.',
        );
        expect(ts_client.post).not.toHaveBeenCalled();

        // No existing bookings -> booking succeeds.
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        await spectator.service.bookDesk({
            desks: [new Desk()],
            host: new StaffUser(),
            date: new Date(),
        });
        expect(messages()).toContain('Successfully booked desk');
        expect(ts_client.post).toHaveBeenCalledTimes(1);
    });

    it('should allow booking desks for multiple people', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        await spectator.service.bookDesk({
            desks: [new Desk(), new Desk(), new Desk()],
            host: new StaffUser(),
            attendees: [new User(), new User(), new User()],
            date: new Date(),
        });
        expect(messages()).toContain('Successfully booked desk');
        expect(ts_client.post).toHaveBeenCalledTimes(3);
    });
});
