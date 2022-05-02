import { Component, OnInit } from '@angular/core';
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
    startTime$: Observable<string>;
    endTime$: Observable<string>;
    duration: CalendarEvent['duration'];

    constructor(private _state: EventFormService) {}

    ngOnInit() {
        this.location = this._state.last_success?.location;
        this.date = of(this._state.last_success?.date);
        this.startTime$ = of(
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
        this.endTime$ = of(
            new Date(
                this._state.last_success?.date + this.duration * 60 * 1000
            ).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })
        );
    }
}
