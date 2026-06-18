import { Injectable, effect, signal } from '@angular/core';
import { AsyncHandler, CalendarEvent } from '@placeos/common';
import { queryEvents } from '@placeos/events';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';

@Injectable({
    providedIn: 'root',
})
export class ExistingBookingsService extends AsyncHandler {
    public readonly loading = signal(false);
    public readonly date = signal(Date.now());
    public readonly events = signal<CalendarEvent[]>([]);

    constructor() {
        super();
        effect(() => {
            this.date();
            this.getBookings();
        });
    }

    async getBookings() {
        this.loading.set(true);
        const events = await queryEvents({
            period_start: getUnixTime(startOfDay(this.date())),
            period_end: getUnixTime(endOfDay(this.date())),
        });
        this.events.set(events || []);
        this.loading.set(false);
    }
}
