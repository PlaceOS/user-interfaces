import { Component, OnInit } from '@angular/core';
import { EventFormService } from '@placeos/events';
import { of } from 'rxjs';

@Component({
    selector: 'booking-confirmed',
    templateUrl: './booking-confirmed.component.html',
    styles: [``],
})
export class BookingConfirmedComponent implements OnInit {
    public get form() {
        return this._state.form;
    }

    location;
    date;
    startTime$;
    endTime$;
    duration;

    constructor(private _state: EventFormService) {}

    ngOnInit() {
        console.log(this._state.last_success, 'form in success modal');
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

        this.endTime$.subscribe((i) => console.log(i, 'end time'));
    }
}
