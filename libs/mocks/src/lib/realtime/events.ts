import { addMinutes, subMinutes } from 'date-fns';

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
    /** Minutes after the start with which to cancel pending bookings */
    pending_period = 15;
    /** Minutes before the start to show pending state */
    pending_before = 5;
    /** Control UI associated with the space */
    control_ui = '';
    /** Catering UI associated with the space */
    catering_ui = '';
    /** Time of the last booking started by a user */
    last_booking_started = 0;
    current_booking: HashMap | null = null;
    next_booking: HashMap | null = null;
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
    /** Whether sensors detect people in the space. True during a started meeting */
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
    /** IDs of bookings that were checked in or started */
    _started = new Set<string>();
    /** IDs of bookings that were ended or released */
    _ended = new Set<string>();
    /** Time the mock was created. Meetings in progress before this count as started */
    _created = Date.now();

    constructor(space, _data: Partial<MockBookingModule>) {
        this._space = space;
        this.room_name = space?.display_name || space?.name || '';
        this.room_capacity = space?.capacity || 10;
        // Apply any overrides
        if (_data) {
            Object.assign(this, _data);
        }
    }

    /** Start the meeting that begins at `t` (unix seconds) */
    $start_meeting(t: number) {
        const booking = this.bookings.find((_) => _.event_start === t);
        if (!booking) return;
        this.last_booking_started = t;
        this._started.add(booking.id);
        updateBookings(this._space, this);
    }

    /** End the meeting that begins at `t` (unix seconds) */
    $end_meeting(t: number, notify?: boolean, reason?: string) {
        const booking =
            this.bookings.find((_) => _.event_start === t) ||
            this.current_booking;
        if (!booking) return;
        this._ended.add(booking.id);
        updateBookings(this._space, this);
    }

    /** Book the space from now for `len` seconds. The meeting starts at once. */
    $book_now(len: number, t?: string, o?: string) {
        const now = Math.floor(Date.now() / 1000);
        const new_booking = {
            id: `mock-booking-${now}`,
            event_start: now,
            event_end: now + len,
            title: t || this.default_title,
            host: o || 'mock@place.tech',
            system: this._space,
            attendees: [{ ...this._space, resource: true }],
            extension_data: {},
        };
        MOCK_EVENTS.push(new_booking);
        this._started.add(new_booking.id);
        updateBookings(this._space, this);
        return new_booking;
    }

    /** Check in to the pending booking */
    $checkin(time: number) {
        const booking = this.current_booking || this.next_booking;
        if (!booking || this.status !== 'pending') return;
        this._started.add(booking.id);
        updateBookings(this._space, this);
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

/**
 * Update the bookings, current and next booking, presence and status
 * of the mock module from the mock events for `space`.
 * Releases current bookings that were not checked in within `pending_period`.
 */
function updateBookings(space: HashMap, mod: MockBookingModule) {
    const now = Date.now();
    const start = (event: HashMap) => event.event_start * 1000;
    const end = (event: HashMap) => event.event_end * 1000;
    const bookings = MOCK_EVENTS.filter(
        (event) =>
            !mod._ended.has(event.id) &&
            (event.system?.id === space.id ||
                event.attendees?.some(
                    (u) => u.email === space.email || u.id === space.id,
                )),
    ).sort((a, b) => a.event_start - b.event_start);
    for (const event of bookings) {
        const in_progress = timePeriodsIntersect(
            now,
            now,
            start(event),
            end(event),
        );
        if (!in_progress || mod._started.has(event.id)) continue;
        if (start(event) < mod._created || !mod.pending) {
            mod._started.add(event.id);
        } else if (
            now > addMinutes(start(event), mod.pending_period).valueOf()
        ) {
            mod._ended.add(event.id);
        }
    }
    mod.bookings = bookings.filter((event) => !mod._ended.has(event.id));
    mod.current_booking =
        mod.bookings.find((_) =>
            timePeriodsIntersect(now, now, start(_), end(_)),
        ) || null;
    mod.next_booking = mod.bookings.find((_) => start(_) > now) || null;
    const { current_booking, next_booking } = mod;
    const target = current_booking || next_booking;
    const started = !!current_booking && mod._started.has(current_booking.id);
    const pending =
        mod.pending &&
        !!target &&
        !mod._started.has(target.id) &&
        timePeriodsIntersect(
            now,
            now,
            subMinutes(start(target), mod.pending_before).valueOf(),
            addMinutes(start(target), mod.pending_period).valueOf(),
        );
    mod.presence = started;
    mod.status = !space?.bookable
        ? 'not-bookable'
        : pending
          ? 'pending'
          : current_booking
            ? 'busy'
            : 'free';
}
