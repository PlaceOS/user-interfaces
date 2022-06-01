import { Component, OnInit } from '@angular/core';
import { EventFormService, CalendarEvent } from '@placeos/events';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { ExistingBookingsService } from '../existing-bookings.service';

@Component({
    selector: 'placeos-upcoming-bookings',
    templateUrl: './upcoming-bookings.component.html',
    styles: [``],
})
export class UpcomingBookingsComponent implements OnInit {
    bookings$: Observable<CalendarEvent[]>;
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

        this.bookings$ = this._existingBookingsService.events;
    }
}
