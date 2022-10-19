import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventFormService } from '@placeos/events';
import { CalendarEvent } from '@placeos/events';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'booking-confirmed',
    templateUrl: './booking-confirmed.component.html',
    styles: [``],
})
export class BookingConfirmedComponent implements OnInit {
    public get form() {
        return this._state.form;
    }

    location: CalendarEvent['location'];
    date: Observable<CalendarEvent['date']>;
    start_time$: Observable<string>;
    end_time$: Observable<string>;
    duration: CalendarEvent['duration'];

    constructor(private _state: EventFormService, private _router: Router) {}

    ngOnInit() {
        this.location = this._state.last_success?.location;
        this.date = of(this._state.last_success?.date);
        this.start_time$ = of(
            new Date(this._state.last_success?.date).toLocaleTimeString(
                'en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                }
            )
        );
        this.duration = this._state.last_success?.duration;
        this.end_time$ = of(
            new Date(
                this._state.last_success?.date + this.duration * 60 * 1000
            ).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })
        );
    }
    newBooking() {
        this._router.navigate(['book/spaces']);
    }
}
