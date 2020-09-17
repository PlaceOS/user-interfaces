import { Injectable } from '@angular/core';
import { BaseAPIService } from '../common/base.service';
import { Booking } from './booking.class';
import { HashMap } from 'src/app/common/types';

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
