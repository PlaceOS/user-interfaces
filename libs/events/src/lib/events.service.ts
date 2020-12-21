import { Injectable } from '@angular/core';

import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent } from './event.class';
import {
    approveEvent,
    CalendarEventQueryParams,
    CalendarEventShowParams,
    checkinEventGuest,
    queryEventGuests,
    queryEvents,
    rejectEvent,
    removeEvent,
    saveEvent,
    showEvent,
} from './events.fn';

@Injectable({
    providedIn: 'root',
})
export class EventsService extends BaseClass {
    /**
     * List events
     * @param q Parameters to pass to the API request
     */
    public readonly query = (q: CalendarEventQueryParams) => queryEvents(q);

    /**
     * Get event details
     * @param id ID of the event to grab
     * @param q Parameters to pass to the API request
     */
    public readonly show = (id: string, q: CalendarEventShowParams) =>
        showEvent(id, q);

    /**
     * Save changes to or create a calendar event
     * @param data State of the calendar event
     * @param q Parameters to pass to the API request
     */
    public readonly save = (
        data: Partial<CalendarEvent>,
        q?: CalendarEventShowParams
    ) => saveEvent(data, q);

    /**
     * Remove calendar event from the database
     * @param id ID of the event to remove
     * @param q Parameters to pass to the API request
     */
    public readonly remove = (id: string, q?: CalendarEventShowParams) =>
        removeEvent(id, q);
    /**
     * Set the approval state of the event to approved
     * @param id ID of the event to approve
     * @param system_id Associated system to approve
     */
    public readonly approve = (id: string, system_id: string) =>
        approveEvent(id, system_id);

    /**
     * Set the approval state of the event to rejected
     * @param id ID of the event to reject
     * @param system_id Associated system to reject
     */
    public readonly reject = (id: string, system_id: string) =>
        rejectEvent(id, system_id);

    /**
     * List guests for event
     * @param id ID of the event to grab
     * @param q Parameters to pass to the API request
     */
    public readonly queryGuests = (id: string, q: CalendarEventShowParams) =>
        queryEventGuests(id, q);

    /**
     * Set the checkin state of an event guest
     * @param id ID of the event to grab
     * @param guest_id ID of the guest to update
     * @param state New checkin state of the guest
     * @param q Parameters to pass to the API request
     */
    public readonly checkinGuest = (
        id: string,
        guest: string,
        state: boolean,
        q: CalendarEventShowParams
    ) => checkinEventGuest(id, guest, state, q);
}
