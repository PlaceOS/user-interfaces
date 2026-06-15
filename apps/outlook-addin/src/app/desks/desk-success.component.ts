import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'desk-booking-success',
    template: `
        <div
            class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4 text-center"
        >
            <h3 class="text-3xl">Booking Confirmed!</h3>
            <img src="assets/tick_success.svg" />
            <p>
                Your desk booking for
                <i>{{
                    last_success()?.asset_name || last_success()?.asset_id
                }}</i>
                has been successfully booked for the
                {{ last_success()?.date | date: 'dd MMMM yyyy' }}
                at
                {{ last_success()?.date | date: 'shortTime' }}
                -
                {{ end_time() | date: 'shortTime' }}
            </p>
            @if (true) {
                <p>
                    Please allow for some time for your booking to be approved.
                </p>
            }
            <a btn matRipple [routerLink]="['/book', 'desks']" class="w-64">
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, RouterModule, CommonModule],
})
export class DeskBookingSuccessComponent {
    private _service = inject(BookingFormService);

    public readonly last_success = signal(this._service.last_success);
    public readonly end_time = computed(() => {
        const booking = this.last_success();
        return booking?.date + booking?.duration * 60 * 1000;
    });
}
