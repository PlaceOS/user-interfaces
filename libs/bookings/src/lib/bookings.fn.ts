import { del, get, patch, post, put } from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { toQueryString } from 'libs/common/src/lib/api';
import { Booking } from './booking.class';

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
    type: string;
}

const BOOKINGS_ENDPOINT = `/api/staff/v1/bookings`;

/**
 * List bookings
 * @param q Parameters to pass to the API request
 */
export function queryBookings(q: BookingsQueryParams): Observable<Booking[]> {
    const query = toQueryString(q);
    return get(`${BOOKINGS_ENDPOINT}${query ? '?' + query : ''}`).pipe(
        map((list) => list.map((item) => new Booking(item)))
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
export function createBooking(data: Partial<Booking>) {
    return post(`${BOOKINGS_ENDPOINT}`, data).pipe(
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
export const saveBooking = (data: Partial<Booking>) =>
    data.id ? updateBooking(data.id, data) : createBooking(data);

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
    ).pipe(map((item) => new Booking(item)));
}
