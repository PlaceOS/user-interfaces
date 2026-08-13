import {
    cleanObject,
    del,
    get,
    patch,
    post,
    put,
    query,
} from '@placeos/ts-client';

import {
    BookableResource,
    Booking,
    BookingClash,
    BookingType,
    CalendarEvent,
    currentUser,
    flatten,
    fromBookingRecurrence,
    GuestUser,
    isRecurrenceInstanceDate,
    setting,
    toQueryString,
    unique,
    VERSION,
} from '@placeos/common';

import {
    addDays,
    addMinutes,
    endOfDay,
    getUnixTime,
    startOfDay,
} from 'date-fns';

export interface BookingsQueryParams {
    /** Comma seperated list of zone ids to check availability */
    zones?: string;
    /** User ID to filter bookings */
    user?: string;
    /** Email address to filter bookings */
    email?: string;
    /** Epoch in seconds for the start of the availability period */
    period_start: number;
    /** Epoch in seconds for the end of the availability period */
    period_end: number;
    /** Category of booking */
    type: BookingType;
    /** Include checked out bookings in the response */
    include_checked_out?: boolean;
    /** Include bookings made by the current user in the response */
    include_booked_by?: boolean;
    /** Include deleted bookings in the response */
    include_deleted?: boolean;
    /** Include deleted bookings in the response */
    deleted?: boolean;
    /**  */
    event_id?: string;
    /**  */
    booking_id?: string;
    /**  */
    ical_uid?: string;
    /** Set the size of the page */
    limit?: number;
    /** Whether to also query rejected bookings */
    rejected?: boolean;
}

const BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;

const APP_VERSION = VERSION.raw || VERSION.version || VERSION.hash;

function appName() {
    return (
        setting<string>('app.name') ||
        setting<string>('app.short_name') ||
        'PlaceOS'
    );
}

function bookingUtmSource() {
    return `${appName()}_${VERSION.hash}_${currentUser().email || ''}`;
}

function withAppVersion(data: Partial<Booking>): Partial<Booking> {
    const booking_data = { ...data };
    delete booking_data.created_at;
    return {
        ...booking_data,
        extension_data: {
            ...(booking_data.extension_data || {}),
            app_name: appName(),
            app_version: APP_VERSION,
        },
    };
}

/**
 * Get a single page of bookings
 * @param q Parameters to pass to the API request
 */
export async function queryBookings(
    q: BookingsQueryParams,
): Promise<Booking[]> {
    const query = toQueryString(q);
    try {
        const list = await get(
            `${BOOKINGS_ENDPOINT}${query ? '?' + query : ''}`,
        );
        return list.map((item) => new Booking(item));
    } catch (_) {
        return [];
    }
}

/**
 * List resources that are booked within the given parameters
 * @param q Parameters to pass to the API request
 */
export async function bookedResourceList(
    q: BookingsQueryParams,
    resource_count?: number,
): Promise<string[]> {
    try {
        let { data, next, total } = await query<string>({
            query_params: { ...q, limit: Math.max(200, resource_count || 0) },
            endpoint: BOOKINGS_ENDPOINT,
            path: 'booked',
        });
        let list = [...data];
        let count = 1;
        while (next && (!total || list.length < total) && count <= MAX_PAGES) {
            const resp = await next();
            data = resp.data;
            next = resp.next;
            total = resp.total;
            list = [...list, ...data];
            count += 1;
        }
        return unique(list);
    } catch (_) {
        return [];
    }
}

export interface BookingClashQueryOptions {
    // Requires multple assets in the booking to use
    return_available?: boolean;
    // Added the time that the clashes occur with each returned asset
    include_clash_time?: boolean;
}

/**
 * List resources that clash within the given parameters
 * @param q Parameters to pass to the API request
 */
export async function findBookingClashes(
    booking: Booking,
    q: BookingClashQueryOptions = {},
): Promise<string[] | BookingClash[]> {
    const query = toQueryString({ ...q, limit: 1000 });
    try {
        const list = await post(
            `${BOOKINGS_ENDPOINT}/clashing-assets${query ? '?' + query : ''}`,
            booking.toJSON(),
        ).catch(() => []);
        return q.include_clash_time
            ? (list as BookingClash[])
            : (list as string[]);
    } catch (_) {
        return [];
    }
}

/**
 * List bookings with link to next page of bookings
 * @param q Parameters to pass to the API request
 */
export function queryPagedBookings(q: BookingsQueryParams) {
    return query<Booking>({
        query_params: q,
        fn: (item) => new Booking(item),
        endpoint: BOOKINGS_ENDPOINT,
        path: '',
    });
}

const MAX_PAGES = 50;

/**
 * List all bookings
 * @param q Parameters to pass to the API request
 */
export async function queryAllBookings(
    q: BookingsQueryParams,
): Promise<Booking[]> {
    try {
        let { data, next } = await query<Booking>({
            query_params: q,
            fn: (item) => new Booking(item),
            endpoint: BOOKINGS_ENDPOINT,
            path: '',
        });
        let list = [...data];
        let count = 1;
        while (next && count <= MAX_PAGES) {
            const resp = await next();
            data = resp.data;
            next = resp.next;
            list = [...list, ...data];
            count += 1;
        }
        return unique(list, 'id');
    } catch (_) {
        return [];
    }
}

/**
 * Get booking details
 * @param id ID of the booking to grab
 * @param q Parameters to pass to the API request
 */
export async function showBooking(id: string): Promise<Booking> {
    return new Booking(
        await get(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`),
    );
}

/**
 * Create new booking and add it to the database
 * @param data New booking fields
 */
export async function createBooking(
    data: Partial<Booking>,
    q?: { event_id?: string; ical_uid?: string },
): Promise<Booking> {
    const query = toQueryString({ ...q, utm_source: bookingUtmSource() });
    return new Booking(
        await post(
            `${BOOKINGS_ENDPOINT}${query ? '?' + query : ''}`,
            withAppVersion(data),
        ),
    );
}

/**
 * Update an existing booking
 * @param id ID of the booking to update
 * @param data New values for booking fields
 * @param method HTTP verb to use with API request
 */
export async function updateBooking(
    id: string,
    data: Partial<Booking>,
    method: 'put' | 'patch' = 'patch',
): Promise<Booking> {
    return new Booking(
        await (method === 'patch' ? patch : put)(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`,
            withAppVersion(data),
        ),
    );
}

/**
 * Update the induction status of an existing booking
 * @param id ID of the booking to update
 * @param status New induction status of the booking
 */
export async function updateBookingInductionStatus(
    id: string,
    status: 'tentative' | 'accepted' | 'declined',
): Promise<Booking> {
    return new Booking(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/update_induction?induction=${encodeURIComponent(status)}`,
            {},
        ),
    );
}

/**
 * Update instance of an existing booking series
 * @param id ID of the booking to update
 * @param start_time Unix seconds of the start time of the booking
 * @param data New values for booking fields
 * @param method HTTP verb to use with API request
 */
export async function updateBookingInstance(
    id: string,
    start_time: number,
    data: Partial<Booking>,
    method: 'put' | 'patch' = 'patch',
): Promise<Booking> {
    return new Booking(
        await (method === 'patch' ? patch : put)(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}`,
            withAppVersion(data),
        ),
    );
}

/**
 * Save changes to or create a booking
 * @param data State of the booking
 * @param q Parameters to pass to the API request
 */
export const saveBooking = async (
    data: Partial<Booking>,
    q?: {
        booking_id?: string;
        event_id?: string;
        ical_uid?: string;
        instance?: number;
    },
): Promise<Booking> => {
    const id = data.id;
    delete (data as any).id;
    const instance = q?.instance;
    if (q) delete (q as any).instance;
    return id
        ? instance
            ? updateBookingInstance(
                  id,
                  data.instance || data.booking_start,
                  data,
              )
            : updateBooking(id, data)
        : createBooking(cleanObject(data, ['', null, undefined]) || {}, q);
};

/**
 * Remove booking from the database
 * @param id ID of the booking to remove
 */
export function removeBooking(id: string, q: any = {}): Promise<void> {
    if (q.instance) {
        return removeBookingInstance(id, q.start_time);
    }
    const query = toQueryString({ utm_source: bookingUtmSource() });
    return del(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}?${query}`, {
        response_type: 'void',
    });
}

/** Whether two bookings overlap by time-of-day (all-day spans the whole day) */
function bookingsTimeOfDayOverlap(a: Booking, b: Booking): boolean {
    const window = (bk: Booking): [number, number] => {
        if (bk.all_day) return [0, 24 * 60];
        const date = new Date(bk.date);
        const start = date.getHours() * 60 + date.getMinutes();
        return [start, start + (bk.duration || 0)];
    };
    const [a_start, a_end] = window(a);
    const [b_start, b_end] = window(b);
    return a_start < b_end && b_start < a_end;
}

/**
 * Reject the assignee's bookings of the given type, within the next
 * `window_days` days, that overlap with instances of a recurring booking.
 * Used when assigning a desk/parking space to a recurring booking so the
 * assignee's existing ad-hoc bookings on those days/times are rejected. A
 * no-op for non-recurring bookings.
 * @param booking Recurring booking being assigned (must have a `user_email`)
 * @param type Booking type to clear (e.g. 'desk', 'parking')
 * @param window_days How far ahead to look (default 28)
 * @returns ids of the bookings that were rejected
 */
export async function rejectOverlappingRecurringBookings(
    booking: Booking,
    type: BookingType,
    window_days = 28,
): Promise<string[]> {
    if (!booking?.recurrence_type || booking.recurrence_type === 'none') {
        return [];
    }
    const email = booking.user_email;
    if (!email) return [];
    const now = Date.now();
    const existing = await queryBookings({
        period_start: getUnixTime(startOfDay(now)),
        period_end: getUnixTime(endOfDay(addDays(now, window_days))),
        type,
        email,
        limit: 1000,
    });
    const recurrence = fromBookingRecurrence(booking as any);
    const overlapping = existing.filter(
        (other) =>
            other.id !== booking.id &&
            other.parent_id !== booking.id &&
            other.status !== 'declined' &&
            other.status !== 'cancelled' &&
            !other.rejected &&
            isRecurrenceInstanceDate(recurrence, booking.date, other.date) &&
            bookingsTimeOfDayOverlap(booking, other),
    );
    await Promise.all(
        overlapping.map((other) =>
            (other.instance
                ? rejectBookingInstance(other.id, other.instance)
                : rejectBooking(other.id)
            ).catch(() => null),
        ),
    );
    return overlapping.map((_) => _.id);
}

/**
 * Remove instance of an existing booking series
 * @param id ID of the booking to update
 * @param start_time Unix seconds of the start time of the booking
 */
export function removeBookingInstance(
    id: string,
    start_time: number,
): Promise<void> {
    const query = toQueryString({ utm_source: bookingUtmSource() });
    return del(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/instance/${start_time}?${query}`,
        {
            response_type: 'void',
        },
    );
}

/**
 * Set the approval state of the booking to `approved`
 * @param id ID of the booking to approve
 * @param system_id Associated system to approve
 */
export async function approveBooking(id: string): Promise<Booking> {
    return new Booking(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve`,
            '',
        ),
    );
}

/**
 * Set the approval state of the booking instance to `approved`
 * @param id ID of the booking to reject
 * @param start_time Start time of the booking instance
 */
export async function approveBookingInstance(
    id: string,
    start_time: number,
): Promise<Booking> {
    return new Booking(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve/${start_time}`,
            '',
        ),
    );
}

/**
 * Set the approval state of the booking to `rejected`
 * @param id ID of the booking to reject
 * @param system_id Associated system to reject
 */
export async function rejectBooking(id: string): Promise<Booking> {
    return new Booking(
        await post(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject`, ''),
    );
}

/**
 * Set the approval state of the booking instance to `rejected`
 * @param id ID of the booking to reject
 * @param start_time Start time of the booking instance
 */
export async function rejectBookingInstance(
    id: string,
    start_time: number,
): Promise<Booking> {
    return new Booking(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject/${start_time}`,
            '',
        ),
    );
}

export async function setBookingState(
    id: string,
    state: string,
    utm_source?: string,
): Promise<Booking> {
    const query = toQueryString({ state, utm_source });
    return new Booking(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/update_state${
                query ? '?' + query : ''
            }`,
            {},
        ),
    );
}

/**
 * List the guests in a booking
 * @param id ID of the booking to reject
 */
export async function queryBookingGuests(id: string): Promise<GuestUser> {
    return new GuestUser(
        await post(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/guests`, ''),
    );
}

/**
 * Set the checkin state of a guest in a booking
 * @param id ID of the booking to reject
 * @param guest_id ID of the guest to check in
 */
export async function checkinBookingGuest(
    id: string,
    guest_id: string,
    state = true,
): Promise<GuestUser> {
    return new GuestUser(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(
                id,
            )}/guests/${encodeURIComponent(guest_id)}/check_in?state=${state}&utm_source=${bookingUtmSource()}`,
            '',
        ),
    );
}

/**
 * Add a guest to a booking
 * @param id ID of the booking
 * @param guest Guest to add to the booking
 */
export async function bookingAddGuest(
    id: string,
    guest: GuestUser,
): Promise<GuestUser> {
    return new GuestUser(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/attendee`,
            guest,
        ),
    );
}

/**
 * Remove an attendee from a booking
 * @param id ID of the booking
 * @param guest Guest to remove from the booking
 */
export async function bookingRemoveGuest(
    id: string,
    guest: GuestUser,
): Promise<GuestUser> {
    return new GuestUser(
        await del(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(
                id,
            )}/attendee/${encodeURIComponent(guest.email)}`,
        ),
    );
}

/**
 * Set the checkin state of a booking
 * @param id ID of the booking to grab
 * @param state New checkin state of the booking
 */
export async function checkinBooking(
    id: string,
    state: boolean,
): Promise<Booking> {
    const query = toQueryString({ state });
    try {
        return new Booking(
            await post(
                `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in?${query}&utm_source=${bookingUtmSource()}`,
                '',
            ),
        );
    } catch (e) {
        const body = await e.json();
        throw body.error || body.message || body;
    }
}

/**
 * Set the checkin state of a booking instance
 * @param id ID of the booking to grab
 * @param start_time Start time of the booking instance
 * @param state New checkin state of the booking instance
 */
export async function checkinBookingInstance(
    id: string,
    start_time: number,
    state: boolean,
): Promise<Booking> {
    const query = toQueryString({ state });
    try {
        return new Booking(
            await post(
                `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in/${start_time}?${query}&utm_source=${bookingUtmSource()}`,
                '',
            ),
        );
    } catch (e) {
        const body = await e.json();
        throw body.error || body.message || body;
    }
}

/**
 * Set the checkin state of a booking
 * @param id ID of the booking to grab
 * @param state New checkin state of the booking
 */
export async function checkinBookingAttendee(
    id: string,
    email: string,
    state: boolean,
): Promise<GuestUser> {
    const query = toQueryString({ state });
    return new GuestUser(
        await post(
            `${BOOKINGS_ENDPOINT}/${encodeURIComponent(
                id,
            )}/guests/${encodeURIComponent(email)}/check_in?${query}&utm_source=${bookingUtmSource()}`,
            '',
        ),
    );
}

/**
 * Filter list of resources based of the bookings found in the given query
 * @param asset_id_list List of resource IDs
 * @param query Booking query
 */
export async function queryResourceAvailability(
    id_list: string[],
    start: number,
    duration: number,
    ignore?: string,
    type: BookingType = 'room',
): Promise<boolean[]> {
    const bookings = await queryBookings({
        type,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    });
    return id_list.map(
        (id) =>
            !bookings.find(
                (b) => b.asset_id === id && (!ignore || ignore !== b.id),
            ),
    );
}

export async function isResourceAvailable(
    id: string,
    start: number,
    duration: number,
    ignore?: string,
    type: BookingType = 'room',
): Promise<boolean> {
    const bookings = await queryBookings({
        type,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    });
    return (
        bookings.filter((_) => _.asset_id === id && _.id !== ignore).length ===
        0
    );
}

/**
 *
 * @param event
 * @param type
 * @param resources
 */
export async function createBookingsForEvent(
    event: CalendarEvent,
    type: BookingType,
    resources: BookableResource,
) {
    const bookings = (
        await queryBookings({
            type,
            period_start: getUnixTime(event.date),
            period_end: getUnixTime(addMinutes(event.date, event.duration)),
        })
    ).filter((_) => _.parent_id === event.id);
    await Promise.all(bookings.map((_) => removeBooking(_.id)));
    await Promise.all(
        event.linked_bookings
            .filter((_) => _.booking_type === type)
            .map((_) => removeBooking(_.id)),
    );
    const zones =
        (event.system?.zones as any) ||
        unique(flatten(event.resources.map((_) => _.zones))) ||
        [];
    await Promise.all(
        resources.map((item) => {
            const booking = bookings.find((_) =>
                _.asset_ids.find((id) =>
                    item.items?.find((i) => i.item_ids.includes(id)),
                ),
            );
            return createBooking(
                new Booking({
                    type,
                    booking_type: type,
                    date: event.date,
                    duration: event.duration,
                    description: event.title || (item as any).name,
                    user_email: event.host,
                    asset_id: item.email || item.id,
                    asset_name: (item as any).name,
                    title: event.title,
                    attendees: item.email ? [item] : [],
                    approved: booking?.approved && !item._changed,
                    rejected: booking?.rejected && !item._changed,
                    extension_data: {
                        parent_id: event.id,
                        name: (item as any).name,
                        location_id: event.location,
                        details: item,
                    },
                    zones,
                }).toJSON(),
                { ical_uid: event.ical_uid, event_id: event.id },
            );
        }),
    );
}
