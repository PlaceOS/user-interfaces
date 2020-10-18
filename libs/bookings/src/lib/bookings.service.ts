import { Injectable } from '@angular/core';

import { BaseAPIService, HashMap } from '@user-interfaces/common';

import { Booking } from './booking.class';

@Injectable({
    providedIn: 'root',
})
export class BookingsService extends BaseAPIService<Booking> {
    constructor() {
        super();
        this._name = 'Bookings';
        this._api_route = 'bookings';
    }


    public checkIn(booking: Booking, state: boolean = true) {
        return this.task(booking.id, 'check_in', {}, 'post', { state });
    }

    public approve(id: string, fields?: HashMap) {
        return this.task(id, 'approve', fields);
    }

    public reject(id: string, fields?: HashMap) {
        return this.task(id, 'reject', fields);
    }

    protected process(raw_data: HashMap): Booking {
        return new Booking(raw_data);
    }
}
