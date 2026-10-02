import { MOCK_EVENTS } from '../lib/api/events.data';
import { createBookingsModule } from '../lib/realtime/events';

const NOW = new Date('2026-07-04T09:00:00.000Z').valueOf();
const MINUTE = 60 * 1000;

describe('MockBookingModule', () => {
    const space = {
        id: 'sys-mock-test',
        email: 'mock-test@place.tech',
        bookable: true,
    };
    let added: number;

    /** Add an event for the test space that starts `offset` minutes from now */
    function addEvent(offset: number, duration = 30) {
        const start = (NOW + offset * MINUTE) / 1000;
        MOCK_EVENTS.push({
            id: `mock-test-${offset}`,
            event_start: start,
            event_end: start + duration * 60,
            system: space,
            attendees: [],
        });
        added += 1;
    }

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(NOW);
        added = 0;
    });

    afterEach(() => {
        MOCK_EVENTS.splice(MOCK_EVENTS.length - added, added);
        vi.useRealTimers();
    });

    it('should mark a booking pending until it is checked in', () => {
        const mod = createBookingsModule(space);
        addEvent(2);
        mod.$poll_bookings();
        expect(mod.status).toBe('pending');

        vi.setSystemTime(NOW + 3 * MINUTE);
        mod.$checkin(Date.now());
        mod.$poll_bookings();
        expect(mod.status).toBe('busy');
        expect(mod.presence).toBe(true);
    });

    it('should release a booking not checked in within the pending period', () => {
        const mod = createBookingsModule(space);
        addEvent(1);
        vi.setSystemTime(NOW + (1 + mod.pending_period + 1) * MINUTE);
        mod.$poll_bookings();
        expect(mod.current_booking).toBeNull();
        expect(mod.status).toBe('free');
    });

    it('should keep book now and end meeting results after a poll', () => {
        const mod = createBookingsModule(space);
        const booking = mod.$book_now(30 * 60);
        added += 1;
        mod.$poll_bookings();
        expect(mod.current_booking?.id).toBe(booking.id);
        expect(mod.status).toBe('busy');

        mod.$end_meeting(booking.event_start);
        mod.$poll_bookings();
        expect(mod.current_booking).toBeNull();
        expect(mod.status).toBe('free');
    });
});
