import { Injectable } from '@angular/core';
import { updateMetadata } from '@placeos/ts-client';

import { GuestUser } from './user.class';
import { CalendarEvent } from '../events/event.class';
import { BaseAPIService } from '../common/base.service';
import { HashMap } from '../common/types';

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
    public meetings(id: string): Promise<CalendarEvent[]> {
        return this.task(id, 'meetings', {}, 'get');
    }
}
