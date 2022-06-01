import { Component, OnInit } from '@angular/core';
import { EventFormService, CalendarEvent } from '@placeos/events';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { ExistingBookingsService } from '../existing-bookings.service';
import { getTime } from 'date-fns';

@Component({
    selector: 'placeos-upcoming-bookings',
    templateUrl: './upcoming-bookings.component.html',
    styles: [``],
})
export class UpcomingBookingsComponent implements OnInit {
    bookings$: Observable<any[]>;
    loading: Observable<boolean>;

    constructor(
        // private _state: EventFormService,
        private _existingBookingsService: ExistingBookingsService
    ) {}

    async ngOnInit() {
        // this.loading = of(false);
        console.log('started');
        // await this._state.available_spaces.pipe(take(1)).toPromise();
        // this.bookings$ = this._state.last_success;
        // this.loading = of(true);

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

        this.bookings$.subscribe((i) => console.log(i, 'bookings$'));
    }

    private _convertTime(unixTime: number) {
        return new Date(unixTime).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }
}
