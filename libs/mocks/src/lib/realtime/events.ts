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
    current_booking = null;
    next_booking = null;
    /** Current status of the space */
    room_image = 'assets/boardroom.jpg'
    status = 'free';
    _space = null;

    constructor(space, _data: Partial<MockBookingModule>) { this._space = space }

    /** Start the meeting at the given time */
    $start_meeting(t: number) {
        this.last_booking_started = t;
    }
    /** End the meeting at the given time */
    $end_meeting(t: number) {}
    /** Book meeting for the current time */
    $book_now(len: number, t?: string, o?: string) {}

    $poll_bookings() {
        updateBookings(this._space, this);
    }
}

export const createBookingsModule = (
    space: HashMap,
    overrides: Partial<MockBookingModule> = {}
) => new MockBookingModule(space, overrides);

function updateBookings(space: HashMap, mod: HashMap) {
    const bookings =
        MOCK_EVENTS.filter((event) =>
            event.attendees?.find(
                (u) =>
                    u.email === space.email ||
                    u.id === space.id ||
                    event.system?.id === space.id
            )
        ) || [];
    bookings.sort((a, b) => a.event_start - b.event_start);
    mod.bookings = bookings;
    mod.current_booking = bookings.find((_) =>
        timePeriodsIntersect(
            Date.now(),
            Date.now(),
            _.event_start * 1000,
            _.event_end * 1000
        )
    );
    mod.next_booking = bookings.find((_) => _.event_start * 1000 > Date.now());
    const date = new Date();
    const { current_booking, next_booking } = mod;
    const start = new Date((current_booking || next_booking)?.event_start);
    const pending = timePeriodsIntersect(
        date.valueOf(),
        date.valueOf(),
        subSeconds(start, mod.pending_before).valueOf(),
        addSeconds(start, mod.pending_period).valueOf()
    );
    mod.status = space?.bookable
        ? current_booking
            ? 'busy'
            : pending
            ? 'pending'
            : 'free'
        : 'not-bookable';
}
