import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { EventFormService, SpacePipe } from '@placeos/events';

@Component({
    selector: 'meeting-booking-success',
    template: `
        <div
            class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4 text-center"
        >
            @let booking = last_success();
            <h3 class="text-3xl">Booking Confirmed!</h3>
            <img src="assets/tick_success.svg" />
            @let room = room_email() | space | async;
            <p>
                Your meeting booking for
                <i>{{
                    booking_location() || room?.display_name || room?.name
                }}</i>
                has been successfully booked for the
                {{ booking?.date | date: 'dd MMMM yyyy' }} at
                {{ booking?.date | date: 'shortTime' }} -
                {{ booking_end() | date: 'shortTime' }}
            </p>
            <a btn matRipple [routerLink]="['/book', 'meeting']" class="w-64">
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
    imports: [CommonModule, SpacePipe, MatRippleModule, RouterModule],
})
export class MeetingBookingSuccessComponent {
    private _service = inject(EventFormService);

    public readonly last_success = this._service.last_success;
    public readonly room_email = computed(
        () => this.last_success()?.system?.email || '',
    );
    public readonly booking_location = computed(
        () => this.last_success()?.location || '',
    );
    public readonly booking_end = computed(() => {
        const booking = this.last_success();
        return booking
            ? booking.date + booking.duration * 60 * 1000
            : undefined;
    });
}
