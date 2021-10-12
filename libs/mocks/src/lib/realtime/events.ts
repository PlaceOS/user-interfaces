import { addSeconds, format, isBefore, subSeconds } from 'date-fns';

import { HashMap, timePeriodsIntersect } from '@placeos/common';
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

    get current_booking() {
        return this.bookings.find((_) =>
            timePeriodsIntersect(
                Date.now(),
                Date.now(),
                _.event_start * 1000,
                _.event_end * 1000
            )
        );
    }

    get next_booking() {
        return this.bookings.find((_) => _.event_start * 1000 > Date.now());
    }

    /** Current status of the space */
    get status(): 'pending' | 'busy' | 'free' | 'not-bookable' {
        const date = new Date();
        const { current, next } = this;
        const start = new Date((current || next)?.event_start);
        const pending = timePeriodsIntersect(
            date,
            date,
            subSeconds(start, this.pending_before),
            addSeconds(start, this.pending_period)
        );
        return this._space?.bookable
            ? current
                ? 'busy'
                : pending
                ? 'pending'
                : 'free'
            : 'not-bookable';
    }

    constructor(private _space, _data: Partial<MockBookingModule>) {
        updateBookings(_space, this);
        setInterval(() => updateBookings(_space, this), 15 * 1000);
    }

    /** Start the meeting at the given time */
    $start_meeting(t: number) {
        this.last_booking_started = t;
    }
    /** End the meeting at the given time */
    $end_meeting(t: number) {}
    /** Book meeting for the current time */
    $book_now(len: number, t?: string, o?: string) {}
}

export function createBookingsModule(
    space: HashMap,
    overrides: Partial<MockBookingModule> = {}
) {
    const mod = new MockBookingModule(space, overrides);
    return mod;
}

function updateBookings(space: HashMap, mod: HashMap) {
    const bookings =
        MOCK_EVENTS.filter((event) =>
            event.attendees?.find((u) => u.email === space.email)
        ) || [];
    bookings.sort((a, b) => a.event_start - b.event_start);
    mod.bookings = bookings;
}
