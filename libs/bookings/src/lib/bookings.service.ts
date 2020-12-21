import { Injectable } from '@angular/core';

import { BaseClass } from '@user-interfaces/common';
import { Booking } from './booking.class';
import {
    approveBooking,
    BookingsQueryParams,
    checkinBooking,
    queryBookings,
    rejectBooking,
    removeBooking,
    saveBooking,
    showBooking,
} from './bookings.fn';

@Injectable({
    providedIn: 'root',
})
export class BookingsService extends BaseClass {
    /**
     * List bookings
     * @param q Parameters to pass to the API request
     */
    public readonly query = (q: BookingsQueryParams) => queryBookings(q);

    /**
     * Get booking details
     * @param id ID of the booking to grab
     * @param q Parameters to pass to the API request
     */
    public readonly show = (id: string) => showBooking(id);

    /**
     * Save changes to or create a booking
     * @param data State of the booking
     * @param q Parameters to pass to the API request
     */
    public readonly save = (data: Partial<Booking>) => saveBooking(data);

    /**
     * Remove booking from the database
     * @param id ID of the booking to remove
     * @param q Parameters to pass to the API request
     */
    public readonly remove = (id: string) => removeBooking(id);

    /**
     * Set the approval state of the booking to approved
     * @param id ID of the booking to approve
     * @param system_id Associated system to approve
     */
    public readonly approve = (id: string) => approveBooking(id);

    /**
     * Set the approval state of the booking to rejected
     * @param id ID of the booking to reject
     * @param system_id Associated system to reject
     */
    public readonly reject = (id: string) => rejectBooking(id);

    /**
     * Set the checkin state of a booking
     * @param id ID of the booking to grab
     * @param state New checkin state of the booking
     */
    public readonly checkin = (id: string, state: boolean) =>
        checkinBooking(id, state);
}
