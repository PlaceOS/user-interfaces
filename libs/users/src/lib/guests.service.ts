import { Injectable } from '@angular/core';
import { BaseClass } from '@user-interfaces/common';
import {
    GuestsQueryParams,
    listGuestMeetings,
    queryGuests,
    removeGuest,
    searchGuests,
    showGuest,
    updateGuest,
} from './guests.fn';

import { GuestUser } from './user.class';

@Injectable({
    providedIn: 'root',
})
export class GuestsService extends BaseClass {
    /**
     * Search guests
     * @param q Search string for filtering guests
     */
    public readonly search = (q: string) => searchGuests(q);

    /**
     * List guests
     * @param q Parameters to pass to the API request
     */
    public readonly query = (q: GuestsQueryParams) => queryGuests(q);

    /**
     * Get guest details
     * @param id ID of the guest
     */
    public readonly show = (id: string) => showGuest(id);

    /**
     * Update guest metadata
     * @param id ID of the guest
     * @param data New metadata state
     */
    public readonly update = (id: string, data: Partial<GuestUser>) =>
        updateGuest(id, data);

    /**
     * Remove a guest
     * @param id ID of the guest to remove
     */
    public readonly remove = (id: string) => removeGuest(id);

    /**
     * List upcoming meetings for a guest
     * @param id ID of the guest
     */
    public readonly meetings = (id: string) => listGuestMeetings(id);
}
