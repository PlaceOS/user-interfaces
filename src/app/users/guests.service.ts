import { Injectable } from '@angular/core';
import { get, patch } from '@placeos/ts-client';

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

    public getGuest(id: string): Promise<GuestUser> {
        const url = `${this.route()}/${id}`;
        return get(url).toPromise().then((res) => this.process(res));
    }

    public updateGuest(id: string, body: HashMap) {
        const url = `${this.route()}/${id}`;
        return patch(url, body).toPromise();
    }

    /**
     * Get upcoming meetings for a guest
     * @param id Email Address of the guest
     */
    public meetings(id: string): Promise<CalendarEvent[]> {
        return this.task(id, 'meetings', {}, 'get');
    }
}
