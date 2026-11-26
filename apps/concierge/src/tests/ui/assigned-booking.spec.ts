import * as ts_client from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import { clearAssignedBooking } from '../../app/ui/assigned-booking';

vi.mock('@placeos/ts-client', { spy: true });

describe('clearAssignedBooking', () => {
    const now = new Date(2026, 5, 10, 12).valueOf();
    const day = 24 * 60 * 60;
    const today = getUnixTime(new Date(2026, 5, 10, 9));

    function listBookings(data: Record<string, unknown>[]) {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: data.map((item) => ({ asset_id: 'space-1', ...item })),
            total: data.length,
            next: null,
        } as never);
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.del).mockResolvedValue(undefined as never);
        vi.mocked(ts_client.patch).mockResolvedValue({} as never);
    });

    it('ends a series that started before today at the end of yesterday', async () => {
        // Listed instances start at their occurrence, the series earlier
        listBookings([{ id: 'series', instance: today, booking_start: today }]);
        vi.mocked(ts_client.get).mockResolvedValue({
            id: 'series',
            booking_start: today - 7 * day,
        } as never);

        await clearAssignedBooking('parking', 'space-1', 'a@place.tech', now);

        expect(ts_client.patch).toHaveBeenCalledWith(
            expect.stringContaining('/bookings/series'),
            expect.objectContaining({
                recurrence_end: getUnixTime(new Date(2026, 5, 9, 23, 59, 59)),
            }),
        );
        expect(ts_client.del).not.toHaveBeenCalled();
    });

    it('deletes a series that starts today by its own ID', async () => {
        listBookings([
            {
                id: 'series',
                parent_id: 'meeting',
                instance: today,
                booking_start: today,
            },
        ]);
        vi.mocked(ts_client.get).mockResolvedValue({
            id: 'series',
            booking_start: today,
        } as never);

        await clearAssignedBooking('locker', 'space-1', 'a@place.tech', now);

        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringContaining('/bookings/series?'),
            expect.anything(),
        );
        expect(ts_client.patch).not.toHaveBeenCalled();
    });

    it('deletes a single booking by its own ID and skips other assets', async () => {
        listBookings([
            { id: 'single', parent_id: 'meeting', booking_start: today },
            { id: 'other', asset_id: 'space-2', booking_start: today },
        ]);

        await clearAssignedBooking('parking', 'space-1', 'a@place.tech', now);

        expect(ts_client.del).toHaveBeenCalledOnce();
        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringContaining('/bookings/single?'),
            expect.anything(),
        );
    });

    it('changes nothing when a series cannot be read', async () => {
        listBookings([
            { id: 'single', booking_start: today },
            { id: 'series', instance: today, booking_start: today },
        ]);
        vi.mocked(ts_client.get).mockRejectedValue(new Error('500'));

        await expect(
            clearAssignedBooking('desk', 'space-1', 'a@place.tech', now),
        ).rejects.toThrow('500');
        expect(ts_client.del).not.toHaveBeenCalled();
        expect(ts_client.patch).not.toHaveBeenCalled();
    });

    it('deletes a weekday series that starts after a weekend unassign', async () => {
        // Saturday; the series made today starts on Monday
        const saturday = new Date(2026, 5, 13, 12).valueOf();
        const monday = getUnixTime(new Date(2026, 5, 15, 9));
        listBookings([
            { id: 'series', instance: monday, booking_start: monday },
            { id: 'later', booking_start: monday },
        ]);
        vi.mocked(ts_client.get).mockResolvedValue({
            id: 'series',
            booking_start: monday,
        } as never);

        await clearAssignedBooking(
            'parking',
            'space-1',
            'a@place.tech',
            saturday,
        );

        // The series goes, a single booking on a later day stays
        expect(ts_client.del).toHaveBeenCalledOnce();
        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringContaining('/bookings/series?'),
            expect.anything(),
        );
        expect(ts_client.patch).not.toHaveBeenCalled();
    });

    it('does nothing without an assignee', async () => {
        await clearAssignedBooking('locker', 'space-1', '', now);

        expect(ts_client.query).not.toHaveBeenCalled();
    });

    it('rejects when the bookings cannot be loaded', async () => {
        vi.mocked(ts_client.query).mockRejectedValue(new Error('500'));

        await expect(
            clearAssignedBooking('desk', 'space-1', 'a@place.tech', now),
        ).rejects.toThrow('500');
    });
});
