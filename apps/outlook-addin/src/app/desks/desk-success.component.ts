import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'desk-booking-success',
    template: `
        <div
            class="absolute inset-0 bg-base-100 flex flex-col items-center justify-center space-y-4 p-4 text-center"
        >
            <h3 class="text-3xl">Booking Confirmed!</h3>
            <img src="assets/tick_success.svg" />
            <p>
                Your desk booking for
                <i>{{ last_success?.asset_name || last_success?.asset_id }}</i>
                has been successfully booked for the
                {{ last_success?.date | date: 'dd MMMM yyyy' }} at
                {{ last_success?.date | date: 'shortTime' }} -
                {{
                    last_success?.date + last_success?.duration * 60 * 1000
                        | date: 'shortTime'
                }}
            </p>
            <p *ngIf="true">
                Please allow up to 5 minutes for you booking to be approved.
            </p>
            <a btn btn matRipple [routerLink]="['/book', 'desks']" class="w-64">
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
})
export class DeskBookingSuccessComponent {
    public readonly last_success = this._service.last_success;

    constructor(private _service: BookingFormService) {}
}
