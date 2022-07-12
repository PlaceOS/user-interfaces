import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, first, take, filter, map, tap } from 'rxjs/operators';
import { ExistingBookingsService } from '../existing-bookings.service';
import { currentUser } from '@placeos/common';
import { User, StaffUser } from '@placeos/users';
import { CalendarEvent } from '@placeos/events';

@Component({
    selector: 'placeos-upcoming-bookings',
    templateUrl: './upcoming-bookings.component.html',
    styles: [``],
})
export class UpcomingBookingsComponent implements OnInit {
    bookings$: Observable<any[]>;
    filter_user_bookings$: Observable<CalendarEvent[]>;
    user_bookings$: Observable<any[]>;
    public loading$: Observable<boolean> =
        this._existingBookingsService.loading$;
    time_zone: string = 'en-US';

    public get user(): User | StaffUser {
        return currentUser();
    }

    constructor(private _existingBookingsService: ExistingBookingsService) {}

    async ngOnInit() {
        await this._existingBookingsService.events?.pipe(take(1)).toPromise();
        await currentUser();
        this.getBookingsFromService();
    }

    public getBookingsFromService() {
        this.filter_user_bookings$ = this._existingBookingsService.events?.pipe(
            map((events) =>
                events.filter(
                    (event) => event.organiser?.name == currentUser()?.name
                )
            )
        );

        this.user_bookings$ = this.filter_user_bookings$.pipe(
            switchMap((bookings: CalendarEvent[]) => [
                bookings.map((booking) => {
                    return {
                        title: booking.title,
                        organiser: booking.organiser,
                        date: booking.date,
                        start_time: this._convertTime(
                            booking.event_start * 1000
                        ),
                        end_time: this._convertTime(booking.event_end * 1000),
                        location: booking.location,
                    };
                }),
            ])
        );

        this.loading$ = this._existingBookingsService.loading$;
    }

    private _convertTime(unixTime: number) {
        return new Date(unixTime).toLocaleTimeString(this.time_zone, {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }
}
