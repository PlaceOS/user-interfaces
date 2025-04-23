import { Component } from '@angular/core';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'meeting-booking-success',
    template: `
        <div
            class="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-base-100 p-4 text-center"
        >
            <h3 class="text-3xl">Booking Confirmed!</h3>
            <img src="assets/tick_success.svg" />
            @let room = last_success?.system?.email || '' | space;
            <p>
                Your meeting booking for
                <i>{{
                    last_success?.location || room.display_name || room.name
                }}</i>
                has been successfully booked for the
                {{ last_success?.date | date: 'dd MMMM yyyy' }} at
                {{ last_success?.date | date: 'shortTime' }} -
                {{
                    last_success?.date + last_success?.duration * 60 * 1000
                        | date: 'shortTime'
                }}
            </p>
            <a
                btn
                btn
                matRipple
                [routerLink]="['/book', 'meeting']"
                class="w-64"
            >
                New Booking
            </a>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class MeetingBookingSuccessComponent {
    public readonly last_success = this._service.last_success;

    constructor(private _service: EventFormService) {}
}
