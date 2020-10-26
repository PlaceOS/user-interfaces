import { Injectable } from '@angular/core';
import { updateMetadata } from '@placeos/ts-client';
import { BaseAPIService, HashMap } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';

import { GuestUser } from './user.class';

@Injectable({
    providedIn: 'root',
})
export class GuestsService extends BaseAPIService<GuestUser> {
    constructor() {
        super();
        this._name = 'Guest';
        this._api_route = 'guests';
    }

    protected process(raw_data: HashMap): GuestUser {
        return new GuestUser(raw_data);
    }

    /**
     * Update metadata associated with guest
     * @param email Email of the guest
     * @param data New state of the guest's metadata
     */
    public updateMetadata(email: string, data: HashMap | any[]) {
        return updateMetadata(email, { id: email, name: 'guest-metadata', details: data });
    }

    /**
     * Get upcoming meetings for a guest
     * @param id Email Address of the guest
     */
    public async meetings(id: string): Promise<CalendarEvent[]> {
        return (await this.task(id, 'meetings', {}, 'get')).map(i => new CalendarEvent(i));
    }
}
