import { addSeconds, subSeconds } from 'date-fns';

import { HashMap, timePeriodsIntersect } from '@placeos/common';
import { MOCK_EVENTS } from '../api/events.data';

export class MockBookingModule {
    /** Timezone the associated space resided */
    time_zone = 'Australia/Sydney';
    /** Whether booking is disabled */
    disable_book_now = false;
    /** Whether ending current meeting is disabled */
    disable_end_meeting = false;
    /** Whether user can end meeting early via button */
    enable_end_meeting_button = true;
    /** Whether to skip host selection on book now */
    disable_book_now_host = false;
    /** List of current and upcoming bookings for space */
    bookings: HashMap[] = [];
    /** Duration in seconds after the start with which to cancel pending bookings */
    pending_period = 600;
    /** Duration in seconds before the start to show pending state */
    pending_before = 300;
    /** Control UI associated with the space */
    control_ui = '';
    /** Catering UI associated with the space */
    catering_ui = '';
    /** Time of the last booking started by a user */
    last_booking_started = 0;
    current_booking = null;
    next_booking = null;
    /** Current status of the space */
    room_image = 'assets/boardroom.jpg';
    status = 'free';
    /** Name of the room */
    room_name = '';
    /** Room capacity */
    room_capacity = 10;
    /** Custom URL for the QR code */
    custom_qr_url = '';
    /** Custom color for the QR code */
    custom_qr_color = '';
    /** Whether to show QR code */
    show_qr_code = true;
    /** Whether to hide QR text */
    hide_qr_text = false;
    /** Whether to hide meeting details */
    hide_meeting_details = false;
    /** Whether to hide meeting title */
    hide_meeting_title = false;
    /** Whether to show the floating schedule timeline */
    show_timeline = false;
    /** Position of the schedule timeline */
    timeline_position = 'floating-left';
    /** URL for offline image */
    offline_image = '';
    /** Offline background color */
    offline_color = '#FFFFFF';
    /** Whether presence detection is enabled */
    presence = false;
    /** Minimum booking duration in minutes */
    min_duration = 15;
    /** Maximum booking duration in minutes */
    max_duration = 480;
    /** Default title for ad-hoc bookings */
    default_title = 'Ad-Hoc Panel Booking';
    /** Whether booking has pending state */
    pending = true;

    _space = null;

    constructor(space, _data: Partial<MockBookingModule>) {
        this._space = space;
        this.room_name = space?.display_name || space?.name || '';
        this.room_capacity = space?.capacity || 10;
        // Apply any overrides
        if (_data) {
            Object.assign(this, _data);
        }
    }

    /** Start the meeting at the given time */
    $start_meeting(t: number) {
        this.last_booking_started = t;
        this.status = 'busy';
    }

    /** End the meeting at the given time */
    $end_meeting(t: number, notify?: boolean, reason?: string) {
        this.current_booking = null;
        this.status = this.next_booking ? 'pending' : 'free';
    }

    /** Book meeting for the current time */
    $book_now(len: number, t?: string, o?: string) {
        const now = Math.floor(Date.now() / 1000);
        const new_booking = {
            id: `mock-booking-${now}`,
            event_start: now,
            event_end: now + len,
            title: t || this.default_title,
            host: o || 'mock@place.tech',
            attendees: [],
        };
        this.bookings = [new_booking, ...this.bookings];
        this.current_booking = new_booking;
        this.status = 'busy';
        return new_booking;
    }

    /** Check in to current booking */
    $checkin(time: number) {
        if (this.current_booking) {
            this.status = 'busy';
        }
    }

    /** Call waiter service */
    $waiter_call(time: number) {
        // Mock waiter call - just returns success
        return { success: true, time };
    }

    $poll_bookings() {
        updateBookings(this._space, this);
    }
}

export const createBookingsModule = (
    space: HashMap,
    overrides: Partial<MockBookingModule> = {},
) => new MockBookingModule(space, overrides);

function updateBookings(space: HashMap, mod: HashMap) {
    const bookings =
        MOCK_EVENTS.filter((event) =>
            event.attendees?.find(
                (u) =>
                    u.email === space.email ||
                    u.id === space.id ||
                    event.system?.id === space.id,
            ),
        ) || [];
    bookings.sort((a, b) => a.event_start - b.event_start);
    mod.bookings = bookings;
    mod.current_booking = bookings.find((_) =>
        timePeriodsIntersect(
            Date.now(),
            Date.now(),
            _.event_start * 1000,
            _.event_end * 1000,
        ),
    );
    mod.next_booking = bookings.find((_) => _.event_start * 1000 > Date.now());
    const date = new Date();
    const { current_booking, next_booking } = mod;
    const start = new Date((current_booking || next_booking)?.event_start);
    const pending = timePeriodsIntersect(
        date.valueOf(),
        date.valueOf(),
        subSeconds(start, mod.pending_before).valueOf(),
        addSeconds(start, mod.pending_period).valueOf(),
    );
    mod.status = space?.bookable
        ? current_booking
            ? 'busy'
            : pending
              ? 'pending'
              : 'free'
        : 'not-bookable';
}
