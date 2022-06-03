import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { take, switchMap, first } from 'rxjs/operators';
import { ExistingBookingsService } from '../existing-bookings.service';
import { getTime } from 'date-fns';
import { currentUser } from '@placeos/common';

@Component({
    selector: 'placeos-upcoming-bookings',
    templateUrl: './upcoming-bookings.component.html',
    styles: [``],
})
export class UpcomingBookingsComponent implements OnInit {
    bookings$: Observable<any[]>;
    public loading$: Observable<boolean> =
        this._existingBookingsService.loading$;
    currentUser$: Observable<any>;
    timeZone: string = 'en-US';

    constructor(private _existingBookingsService: ExistingBookingsService) {}

    async ngOnInit() {
        // this.currentUser$ = this._state......

        // console.log(currentUser, 'current user');

        await this._existingBookingsService.events
            ?.pipe(first((_) => !!_))
            .toPromise();

        this.getBookingsFromService();
    }

    public getBookingsFromService() {
        this.bookings$ = this._existingBookingsService.events?.pipe(
            switchMap((bookings) => [
                bookings.map((booking) => ({
                    title: booking.title,
                    date: booking.date,
                    start_time: this._convertTime(booking.event_start * 1000),
                    end_time: this._convertTime(booking.event_end * 1000),
                    location: booking.location,
                })),
            ])
        );
    }
    private _convertTime(unixTime: number) {
        return new Date(unixTime).toLocaleTimeString(this.timeZone, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }
}
