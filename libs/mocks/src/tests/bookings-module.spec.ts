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
    function addEvent(offset: number, duration = 30, fields = {}) {
        const start = (NOW + offset * MINUTE) / 1000;
        const event = {
            id: `mock-test-${offset}`,
            event_start: start,
            event_end: start + duration * 60,
            system: space,
            attendees: [],
            ...fields,
        };
        MOCK_EVENTS.push(event);
        added += 1;
        return event;
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
        const event = addEvent(1);
        vi.setSystemTime(NOW + (1 + mod.pending_period + 1) * MINUTE);
        mod.$poll_bookings();
        expect(mod.current_booking).toBeNull();
        expect(mod.status).toBe('free');
        // Other apps see the space decline the event
        expect(event.attendees).toContainEqual(
            expect.objectContaining({
                id: space.id,
                response_status: 'declined',
            }),
        );
    });

    it('should start a meeting at once when the space has no pending state', () => {
        const mod = createBookingsModule(space, { pending: false });
        addEvent(1);
        vi.setSystemTime(NOW + 2 * MINUTE);
        mod.$poll_bookings();
        expect(mod.status).toBe('busy');
        expect(mod.presence).toBe(true);
    });

    it('should show a space that is not bookable as not bookable', () => {
        const mod = createBookingsModule({ ...space, bookable: false });
        addEvent(-1);
        mod.$poll_bookings();
        expect(mod.current_booking?.id).toBe('mock-test--1');
        expect(mod.status).toBe('not-bookable');
    });

    it('should decline, not shorten, a later booking that is ended', () => {
        const mod = createBookingsModule(space);
        const event = addEvent(60);
        mod.$poll_bookings();
        expect(mod.next_booking?.id).toBe(event.id);

        mod.$end_meeting(event.event_start);
        expect(event.event_end).toBe(event.event_start + 30 * 60);
        expect(mod.next_booking).toBeNull();
    });

    it('should show events that book the space only as a resource', () => {
        const mod = createBookingsModule(space);
        addEvent(-5, 30, { system: null, resources: [space] });
        mod.$poll_bookings();
        expect(mod.current_booking?.id).toBe('mock-test--5');
    });

    it('should keep book now and end meeting results after a poll', () => {
        const mod = createBookingsModule(space);
        const booking = mod.$book_now(30 * 60);
        added += 1;
        mod.$poll_bookings();
        expect(mod.current_booking?.id).toBe(booking.id);
        expect(mod.status).toBe('busy');

        vi.setSystemTime(NOW + 10 * MINUTE);
        mod.$end_meeting(booking.event_start);
        mod.$poll_bookings();
        expect(mod.current_booking).toBeNull();
        expect(mod.status).toBe('free');
        // Other apps see the meeting end early
        expect(booking.event_end).toBe((NOW + 10 * MINUTE) / 1000);
    });
});
