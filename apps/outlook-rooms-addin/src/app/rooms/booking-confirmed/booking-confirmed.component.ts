import { Component, OnInit } from '@angular/core';
import { EventFormService } from '@placeos/events';

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
    startTime;
    endTime;

    constructor(private _state: EventFormService) {}

    ngOnInit() {
        console.log(this._state.last_success, 'form in success modal');
        this.location = this._state.last_success.location;
        this.date = this._state.last_success.date;
        this.startTime = new Date(
            this._state.last_success.event_start
        ).toLocaleTimeString();
        this.endTime = new Date(
            this._state.last_success.event_end
        ).toLocaleTimeString();
    }
}
