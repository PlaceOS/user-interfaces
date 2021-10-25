import { Component, Input } from "@angular/core";
import { Booking } from "@placeos/bookings";

@Component({
    selector: 'booking-card',
    template: `
        <div class="w-full bg-white rounded-lg shadow p-4">

        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }
    `]
})
export class BookingCardComponent {
    @Input() public booking: Booking;
}
