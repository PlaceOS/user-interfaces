import { addSeconds, isBefore, subSeconds } from 'date-fns';

import { HashMap, timePeriodsIntersect } from '@user-interfaces/common';
import { MOCK_EVENTS } from '../api/events.data';

export class MockBookingModule {
    /** Timezone the associated space resided */
    time_zone = 'Australia/Sydney';
    /** Whether booking is disabled */
    disable_book_now = false;
    /** Whether ending current meeting is disabled */
    disable_end_meeting = false;
    /** List of current and upcoming bookings for space */
    bookings: HashMap[] = [];
    pending_period = 0;
    pending_before = 0;
    /** Control UI associated with the space */
    control_ui = '';
    /** Catering UI associated with the space */
    catering_ui = '';
    /** Time of the last booking started by a user */
    last_booking_started = 0;
    /** Current status of the space */
    status: 'pending' | 'busy' | 'free' | 'not-bookable' = 'free';
}

export function createBookingsModule(space: HashMap, overrides: Partial<MockBookingModule> = {}) {
    const mod = {
        ...new MockBookingModule(),
        ...overrides,
        /** Start the meeting at the given time */
        $start_meeting: function (t: number) {
            this.last_booking_started = t;
        },
        /** End the meeting at the given time */
        $end_meeting: function (t: number) {},
        /** Book meeting for the current time */
        $book_now: function (len: number, t?: string, o?: string) {},
    };
    updateBookings(space, mod);
    setInterval(() => updateBookings(space, mod), 1000);
    return mod;
}

function updateBookings(space: HashMap, mod: HashMap) {
    const bookings = MOCK_EVENTS.filter((event) =>
        event.attendees.find((u) => u.email === space.email)
    );
    bookings.sort((a, b) => a.event_start - b.event_start);
    mod.bookings = bookings;
    if (!space.bookable) {
        return (mod.status = 'not-bookable');
    }
    const date = new Date();
    const current = bookings.find((bkn) =>
        timePeriodsIntersect(
            date.valueOf(),
            date.valueOf(),
            bkn.event_start,
            bkn.event_end
        )
    );
    const next = bookings.find((bkn) =>
        isBefore(date.valueOf(), bkn.event_start)
    );
    const start = new Date((current || next)?.event_start);
    const pending = timePeriodsIntersect(
        date,
        date,
        subSeconds(start, mod.pending_before),
        addSeconds(start, mod.pending_period)
    );
    mod.status = current
        ? pending
            ? 'pending'
            : 'busy'
        : next && pending
        ? 'pending'
        : 'free';
}
