import { Component, OnInit } from '@angular/core';
import { EventFormService } from '@placeos/events';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { ExistingBookingsService } from '../existing-bookings.service';

@Component({
    selector: 'placeos-upcoming-bookings',
    templateUrl: './upcoming-bookings.component.html',
    styles: [``],
})
export class UpcomingBookingsComponent implements OnInit {
    bookings$: any;
    loading: Observable<boolean>;

    constructor(
        private _state: EventFormService,
        private _existingBookingsService: ExistingBookingsService
    ) {}

    async ngOnInit() {
        this.loading = of(false);
        await this._state.available_spaces.pipe(take(1)).toPromise();
        this.bookings$ = this._state.last_success;
        this.loading = of(true);

        this._existingBookingsService.getBookings;
    }
}
