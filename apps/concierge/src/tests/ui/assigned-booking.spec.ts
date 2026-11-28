import { mockData } from '@placeos/common/tests';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { bookings, Booking as StaffBooking } from '@placeos/ts-client/staff';
import { getUnixTime } from 'date-fns';
import { clearAssignedBooking } from '../../app/ui/assigned-booking';

vi.mock('@placeos/ts-client/staff', { spy: true });

// The staff API takes integer booking IDs
const SERIES = 1;
const SINGLE = 2;
const OTHER = 3;
/** A meeting or group booking that `parent_id` links to */
const MEETING = 9;

describe('clearAssignedBooking', () => {
    const now = new Date(2026, 5, 10, 12).valueOf();
    const day = 24 * 60 * 60;
    const today = getUnixTime(new Date(2026, 5, 10, 9));

    function listBookings(data: Partial<StaffBooking>[]) {
        vi.mocked(bookings.query).mockResolvedValue(
            mockPage({
                data: data.map((item) =>
                    mockData(StaffBooking, { asset_id: 'space-1', ...item }),
                ),
                total: data.length,
            }),
        );
    }

    /** The series that `bookings.show` gives */
    function showSeries(booking_start: number) {
        vi.mocked(bookings.show).mockResolvedValue(
            mockReply(mockData(StaffBooking, { id: SERIES, booking_start })),
        );
    }

    /** IDs of the removed bookings */
    const removed = () =>
        vi.mocked(bookings.destroy).mock.calls.map(([input]) => input.id);

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(bookings.destroy).mockResolvedValue(mockReply(''));
        vi.mocked(bookings.update).mockResolvedValue(
            mockReply(mockData(StaffBooking, { id: SERIES })),
        );
    });

    it('ends a series that started before today at the end of yesterday', async () => {
        // Listed instances start at their occurrence, the series earlier
        listBookings([{ id: SERIES, instance: today, booking_start: today }]);
        showSeries(today - 7 * day);

        await clearAssignedBooking('parking', 'space-1', 'a@place.tech', now);

        expect(bookings.update).toHaveBeenCalledWith(
            expect.objectContaining({
                id: SERIES,
                body: expect.objectContaining({
                    recurrence_end: getUnixTime(
                        new Date(2026, 5, 9, 23, 59, 59),
                    ),
                }),
            }),
        );
        expect(bookings.destroy).not.toHaveBeenCalled();
    });

    it('deletes a series that starts today by its own ID', async () => {
        listBookings([
            {
                id: SERIES,
                parent_id: MEETING,
                instance: today,
                booking_start: today,
            },
        ]);
        showSeries(today);

        await clearAssignedBooking('locker', 'space-1', 'a@place.tech', now);

        expect(removed()).toEqual([SERIES]);
        expect(bookings.update).not.toHaveBeenCalled();
    });

    it('deletes a single booking by its own ID and skips other assets', async () => {
        listBookings([
            { id: SINGLE, parent_id: MEETING, booking_start: today },
            { id: OTHER, asset_id: 'space-2', booking_start: today },
        ]);

        await clearAssignedBooking('parking', 'space-1', 'a@place.tech', now);

        expect(removed()).toEqual([SINGLE]);
    });

    it('changes nothing when a series cannot be read', async () => {
        listBookings([
            { id: SINGLE, booking_start: today },
            { id: SERIES, instance: today, booking_start: today },
        ]);
        vi.mocked(bookings.show).mockRejectedValue(new Error('500'));

        await expect(
            clearAssignedBooking('desk', 'space-1', 'a@place.tech', now),
        ).rejects.toThrow('500');
        expect(bookings.destroy).not.toHaveBeenCalled();
        expect(bookings.update).not.toHaveBeenCalled();
    });

    it('deletes a weekday series that starts after a weekend unassign', async () => {
        // Saturday; the series made today starts on Monday
        const saturday = new Date(2026, 5, 13, 12).valueOf();
        const monday = getUnixTime(new Date(2026, 5, 15, 9));
        listBookings([
            { id: SERIES, instance: monday, booking_start: monday },
            { id: SINGLE, booking_start: monday },
        ]);
        showSeries(monday);

        await clearAssignedBooking(
            'parking',
            'space-1',
            'a@place.tech',
            saturday,
        );

        // The series goes, a single booking on a later day stays
        expect(removed()).toEqual([SERIES]);
        expect(bookings.update).not.toHaveBeenCalled();
    });

    it('does nothing without an assignee', async () => {
        await clearAssignedBooking('locker', 'space-1', '', now);

        expect(bookings.query).not.toHaveBeenCalled();
    });

    it('rejects when the bookings cannot be loaded', async () => {
        vi.mocked(bookings.query).mockRejectedValue(new Error('500'));

        await expect(
            clearAssignedBooking('desk', 'space-1', 'a@place.tech', now),
        ).rejects.toThrow('500');
    });
});
