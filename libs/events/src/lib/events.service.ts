import { Injectable } from '@angular/core';
import { get, post } from '@placeos/ts-client';

import { BaseAPIService, HashMap, toQueryString } from '@user-interfaces/common';
import { CalendarEvent } from './event.class';

import * as dayjs from 'dayjs';

@Injectable({
    providedIn: 'root',
})
export class EventsService extends BaseAPIService<CalendarEvent> {
    constructor() {
        super();
        this._name = 'Events';
        this._api_route = 'events';
    }

    /** Check in guest
     * @param query_params Need `system_id` and `state`
     */
    public checkinAttendee(id: string, guest_id: string, query_params: HashMap = {}) {
        const query = toQueryString(query_params);
        return this.task(id, `guests/${guest_id}/checkin${query}`, {}, 'post');
    }

    /** Retrieve events for selected date for the given calendar
     * @param calendar_ids Array of user calendars
     * @param date Date in unix ms
     */
    public getDayEvents(date: number, calendar_ids: string[]) {
        const period_start = dayjs(date).startOf('d').unix();
        const period_end = dayjs(date).endOf('d').unix();
        const calendars = calendar_ids.join(',');
        return this.query({
            period_start,
            period_end,
            calendars,
        });
    }

    /** Get event */
    public getEvent(id: string, query_params: HashMap = {}) {
        const query = toQueryString(query_params);
        const url = `${this.route()}/${id}?${query}`;
        return get(url)
            .toPromise()
            .then((res) => this.process(res));
    }

    /** Check in guest
     * @param query_params Need `system_id` and `state`
     */
    public checkInGuest(event_id: string, guest_id: string, query_params: HashMap = {}) {
        const query = toQueryString(query_params);
        const url = `${this.route()}/${event_id}/guests/${guest_id}/checkin?${query}`;
        return post(url, {}).toPromise();
    }

    public accept(id: string, fields?: HashMap) {
        return this.task(id, 'approve', fields, 'post', fields);
    }

    public decline(id: string, fields?: HashMap) {
        return this.task(id, 'reject', fields, 'post', fields);
    }

    protected process(raw_data: HashMap): CalendarEvent {
        return new CalendarEvent(raw_data);
    }
}
