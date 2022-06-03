import { Component, OnInit } from '@angular/core';
import { EventFormService, CalendarEvent } from '@placeos/events';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
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
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        true
    );
    public loading$: Observable<boolean> = this._loading.asObservable();
    currentUser$: Observable<any>;
    timeZone: string = 'en-US';

    constructor(
        private _state: EventFormService,
        private _existingBookingsService: ExistingBookingsService
    ) {}

    async ngOnInit() {
        this._loading.next(true);
        console.log('started');
        await this._state.available_spaces.pipe(take(1)).toPromise();
        // this.currentUser$ = this._state......

        // console.log(currentUser, 'current user');

        this._existingBookingsService.getBookings();

        await this._existingBookingsService.events?.pipe(take(1)).toPromise();

        this._existingBookingsService.events?.subscribe((i) =>
            console.log(i, 'events')
        );

        this.bookings$ = this._existingBookingsService.events?.pipe(
            switchMap((bookings) => [
                bookings.map((booking) => ({
                    title: booking.title,
                    date: booking.date,
                    start_time: this._convertTime(1654059600 * 1000),
                    end_time: this._convertTime(1654053300 * 1000),
                    location: booking.location,
                })),
            ])
        );

        await this.bookings$.pipe(take(1)).toPromise();

        this._loading.next(false);
    }

    private _convertTime(unixTime: number) {
        return new Date(unixTime).toLocaleTimeString(this.timeZone, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }
}
