import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { distinct, filter, map, timestamp } from 'rxjs/operators';
import { getModule } from '@placeos/ts-client';

import { CalendarEvent } from '@user-interfaces/events';
import { SpacesService } from '@user-interfaces/spaces';
import { BaseClass } from '@user-interfaces/common';

@Injectable()
export class PanelStateService extends BaseClass {
    /** List of current bookings for active system */
    private _bookings = new BehaviorSubject<CalendarEvent[]>([]);

    /** Active system */
    private _system = new BehaviorSubject<string>('');

    /** Observable of the spaces initialised state */
    public readonly initialised = this._spaces.initialised;

    /** List of current bookings for active system */
    public readonly bookings = this._bookings.asObservable();

    /** List of current bookings for active system */
    public readonly space = this._system.pipe(
        map((id) => this._spaces.find(id))
    );

    /** Seconds observble */
    public readonly seconds_interval = timer(
        1000 - new Date().getMilliseconds(),
        1000
    )
        .pipe(timestamp())
        .pipe(map((data) => data.timestamp));

    /** Minute observble */
    public readonly minute_interval = this.seconds_interval.pipe(
        filter((timestamp) => new Date(timestamp).getSeconds() === 0)
    );

    /** Active system */
    public get system() {
        return this._system.getValue();
    }
    public set system(value: string) {
        this._system.next(value);
    }

    constructor(private _spaces: SpacesService) {
        super();

        this.subscription(
            `timetable.system`,
            this._system
                .pipe(filter((id) => !!id))
                .subscribe((id) => this.bookings_subscription(id))
        );
    }

    private bookings_subscription(id: string) {
        const bookings = getModule(id, 'Bookings', 1).binding('bookings');
        bookings.bind();

        this.subscription(
            `timetable.bookings.${id}`,
            bookings
                .listen()
                .pipe(filter((data) => !!data?.length))
                .pipe(distinct())
                .subscribe((data) => {
                    const bookings = data
                        .map(this.process)
                        .sort(this.sortByDate);

                    this._bookings.next(bookings);
                })
        );
    }

    private process(data: Partial<CalendarEvent>) {
        return new CalendarEvent(data);
    }

    private sortByDate(event_a: CalendarEvent, event_b: CalendarEvent) {
        return event_a.date - event_b.date;
    }
}
