import { del, get, patch, post, put, query } from '@placeos/ts-client';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { toQueryString } from 'libs/common/src/lib/api';
import { Booking, BookingType } from './booking.class';
import { GuestUser } from 'libs/users/src/lib/user.class';
import { addMinutes, getUnixTime } from 'date-fns';
import { CalendarEvent } from '@placeos/events';
import { BookableResource, flatten, unique } from '@placeos/common';

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
}

const BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;

/**
 * Get a single page of bookings
 * @param q Parameters to pass to the API request
 */
export function queryBookings(q: BookingsQueryParams): Observable<Booking[]> {
    const query = toQueryString(q);
    return get(`${BOOKINGS_ENDPOINT}${query ? '?' + query : ''}`).pipe(
        map((list) => list.map((item) => new Booking(item))),
        catchError((_) => of([]))
    );
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

/**
 * List all bookings
 * @param q Parameters to pass to the API request
 */
export function queryAllBookings(
    q: BookingsQueryParams
): Observable<Booking[]> {
    return query<Booking>({
        query_params: q,
        fn: (item) => new Booking(item),
        endpoint: BOOKINGS_ENDPOINT,
        path: '',
    }).pipe(
        switchMap(async ({ data, next }) => {
            let list = [...data];
            while (next) {
                const resp = await next().toPromise();
                data = resp.data;
                next = resp.next;
                list = [...list, ...data];
            }
            return list;
        }),
        catchError((_) => of([]))
    );
}

/**
 * Get booking details
 * @param id ID of the booking to grab
 * @param q Parameters to pass to the API request
 */
export function showBooking(id: string) {
    return get(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`).pipe(
        map((item) => new Booking(item))
    );
}

/**
 * Create new booking and add it to the database
 * @param data New booking fields
 */
export function createBooking(
    data: Partial<Booking>,
    q?: { event_id?: string; ical_uid?: string }
) {
    const query = toQueryString(q);
    return post(`${BOOKINGS_ENDPOINT}${query ? '?' + query : ''}`, data).pipe(
        map((item) => new Booking(item))
    );
}

/**
 * Update an existing booking
 * @param id ID of the booking to update
 * @param data New values for booking fields
 * @param method HTTP verb to use with API request
 */
export function updateBooking(
    id: string,
    data: Partial<Booking>,
    method: 'put' | 'patch' = 'patch'
) {
    return (method === 'patch' ? patch : put)(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`,
        data
    ).pipe(map((item) => new Booking(item)));
}

/**
 * Save changes to or create a booking
 * @param data State of the booking
 * @param q Parameters to pass to the API request
 */
export const saveBooking = (
    data: Partial<Booking>,
    q?: { booking_id?: string; event_id?: string; ical_uid?: string }
) => {
    const id = data.id;
    delete (data as any).id;
    return id ? updateBooking(id, data) : createBooking(data, q);
};

/**
 * Remove booking from the database
 * @param id ID of the booking to remove
 * @param q Parameters to pass to the API request
 */
export function removeBooking(id: string) {
    return del(`${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}`, {
        response_type: 'void',
    });
}

/**
 * Set the approval state of the booking to approved
 * @param id ID of the booking to approve
 * @param system_id Associated system to approve
 */
export function approveBooking(id: string) {
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/approve`,
        ''
    ).pipe(map((item) => new Booking(item)));
}

/**
 * Set the approval state of the booking to rejected
 * @param id ID of the booking to reject
 * @param system_id Associated system to reject
 */
export function rejectBooking(id: string) {
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/reject`,
        ''
    ).pipe(map((item) => new Booking(item)));
}

export function setBookingState(
    id: string,
    state: string,
    utm_source?: string
) {
    const query = toQueryString({ state, utm_source });
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/update_state${
            query ? '?' + query : ''
        }`,
        {}
    ).pipe(map((item) => new Booking(item)));
}

/**
 * List the guests in a booking
 * @param id ID of the booking to reject
 */
export function queryBookingGuests(id: string) {
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/guests`,
        ''
    ).pipe(map((item) => new GuestUser(item)));
}

/**
 * Set the checkin state of a guest in a booking
 * @param id ID of the booking to reject
 * @param guest_id ID of the guest to check in
 */
export function checkinBookingGuest(
    id: string,
    guest_id: string,
    state: boolean = true
) {
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(
            id
        )}/guests/${encodeURIComponent(guest_id)}/check_in?state=${state}`,
        ''
    ).pipe(map((item) => new GuestUser(item)));
}

/**
 * Add a guest to a booking
 * @param id ID of the booking
 * @param guest Guest to add to the booking
 */
export function bookingAddGuest(id: string, guest: GuestUser) {
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/attendee`,
        guest
    ).pipe(map((item) => new GuestUser(item)));
}

/**
 * Remove an attendee from a booking
 * @param id ID of the booking
 * @param guest Guest to remove from the booking
 */
export function bookingRemoveGuest(id: string, guest: GuestUser) {
    return del(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(
            id
        )}/attendee/${encodeURIComponent(guest.email)}`
    ).pipe(map((item) => new GuestUser(item)));
}

/**
 * Set the checkin state of a booking
 * @param id ID of the booking to grab
 * @param state New checkin state of the booking
 */
export function checkinBooking(id: string, state: boolean) {
    const query = toQueryString({ state });
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(id)}/check_in?${query}`,
        ''
    ).pipe(
        map((item) => new Booking(item)),
        catchError(async (e) => {
            const body = await e.json();
            throw body.error || body.message || body;
        })
    );
}

/**
 * Set the checkin state of a booking
 * @param id ID of the booking to grab
 * @param state New checkin state of the booking
 */
export function checkinBookingAttendee(
    id: string,
    email: string,
    state: boolean
) {
    const query = toQueryString({ state });
    return post(
        `${BOOKINGS_ENDPOINT}/${encodeURIComponent(
            id
        )}/guests/${encodeURIComponent(email)}/check_in?${query}`,
        ''
    ).pipe(map((item) => new GuestUser(item)));
}

/**
 * Filter list of resources based of the bookings found in the given query
 * @param asset_id_list List of resource IDs
 * @param query Booking query
 */
export function queryResourceAvailability(
    id_list: string[],
    start: number,
    duration: number,
    ignore?: string,
    type: BookingType = 'room',
    ignore_period: [number, number] = [0, 0]
): Observable<boolean[]> {
    return queryBookings({
        type,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    }).pipe(
        map((_) =>
            id_list.map(
                (id) =>
                    !_.find(
                        (b) => b.asset_id === id && (!ignore || ignore !== b.id)
                    )
            )
        )
    );
}

export function isResourceAvailable(
    id: string,
    start: number,
    duration: number,
    ignore?: string,
    type: BookingType = 'room'
) {
    return queryBookings({
        type,
        period_start: getUnixTime(start),
        period_end: getUnixTime(addMinutes(start, duration)),
    }).pipe(
        map(
            (_) =>
                _.filter((_) => _.asset_id === id && _.id !== ignore).length ===
                0
        )
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
    resources: BookableResource
) {
    const bookings = await queryBookings({
        type,
        period_start: getUnixTime(event.date),
        period_end: getUnixTime(addMinutes(event.date, event.duration)),
    })
        .pipe(map((_) => _.filter((_) => _.parent_id === event.id)))
        .toPromise();
    await Promise.all(bookings.map((_) => removeBooking(_.id).toPromise()));
    await Promise.all(
        event.linked_bookings
            .filter((_) => _.booking_type === type)
            .map((_) => removeBooking(_.id).toPromise())
    );
    const zones =
        (event.system?.zones as any) ||
        unique(flatten(event.resources.map((_) => _.zones))) ||
        [];
    await Promise.all(
        resources.map((item) => {
            const booking = bookings.find((_) =>
                _.asset_ids.find((id) =>
                    item.items?.find((i) => i.item_ids.includes(id))
                )
            );
            return createBooking(
                new Booking({
                    type,
                    booking_type: type,
                    date: event.date,
                    duration: event.duration,
                    description: event.title,
                    user_email: event.host,
                    asset_id: item.email,
                    asset_name: (item as any).name,
                    title: (item as any).name,
                    attendees: [item],
                    approved: booking?.approved && !item._changed,
                    rejected: booking?.rejected && !item._changed,
                    extension_data: {
                        parent_id: event.id,
                        name: (item as any).name,
                        location_id: event.location,
                    },
                    zones,
                }),
                { ical_uid: event.ical_uid, event_id: event.id }
            ).toPromise();
        })
    );
}
