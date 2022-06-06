import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { ExistingBookingsService } from '../existing-bookings.service';
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
    time_zone: string = 'en-US';

    constructor(private _existingBookingsService: ExistingBookingsService) {}

    async ngOnInit() {
        console.log(currentUser().name, 'current user');

        await this._existingBookingsService.events
            ?.pipe(first((_) => !!_))
            .toPromise();

        this.getBookingsFromService();
    }

    public getBookingsFromService() {
        this.bookings$ = this._existingBookingsService.events?.pipe(
            switchMap((bookings) => [
                bookings.map((booking) => this.filterBookings(booking)),
            ])
        );

        this.bookings$.subscribe((i) => console.log(i, 'bookings'));
    }

    filterBookings(booking) {
        if (booking.organiser?.name === currentUser().name) {
            return {
                title: booking.title,
                organiser: booking.organiser?.name,
                date: booking.date,
                start_time: this._convertTime(booking.event_start * 1000),
                end_time: this._convertTime(booking.event_end * 1000),
                location: booking.location,
            };
        } else {
            return null;
        }
    }

    private _convertTime(unixTime: number) {
        return new Date(unixTime).toLocaleTimeString(this.time_zone, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }
}
