import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { CalendarEvent } from '@placeos/common';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'booking-confirmed',
    template: `
        <div
            class="bg-base-200 z-0 flex h-full flex-1 flex-col overflow-y-auto"
        >
            <section
                class="justify-content border-base-200 flex h-full items-center border-b py-5"
            >
                <div
                    class="mx-auto flex w-[calc(100%-2rem)] max-w-[375px] flex-col items-center"
                >
                    <div class="mb-3">
                        <span class="mr-auto text-3xl font-bold text-gray-700">
                            Booking Confirmed!</span
                        >
                    </div>
                    <div>
                        <img src="assets/tick_success.svg" />
                    </div>

                    <div class="mx-3 flex items-center justify-center">
                        <span class="flex text-justify"
                            >Your room booking for
                            {{ location() }}
                            has been successfully booked for the
                            {{ date() | date: 'dd MMMM yyyy' }} at
                            {{ start_time() }} -
                            {{ end_time() }}
                        </span>
                    </div>
                    <div class="mt-3 flex items-center">
                        <button
                            btn
                            matRipple
                            (click)="newBooking()"
                            class="border-secondary bg-base-100 text-secondary my-2 text-sm"
                        >
                            <span class="text-sm">New Booking</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    `,
    styles: [``],
    imports: [CommonModule, MatRippleModule],
})
export class BookingConfirmedComponent {
    private _state = inject(EventFormService);
    private _router = inject(Router);

    public readonly form = this._state.form;
    public readonly booking = computed(() => this._state.last_success());
    public readonly location = computed(() => {
        const booking = this.booking();
        return booking?.location;
    });
    public readonly date = computed(() => {
        const booking = this.booking();
        return booking?.date;
    });
    public readonly duration = computed(() => {
        const booking = this.booking();
        return booking?.duration;
    });
    public readonly start_time = computed(() => {
        const booking = this.booking();
        return this.format_time(booking?.date);
    });
    public readonly end_time = computed(() => {
        const booking = this.booking();
        return this.format_time(booking?.date + this.duration() * 60 * 1000);
    });

    private format_time(time: CalendarEvent['date']) {
        return new Date(time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }

    newBooking() {
        this._router.navigate(['book/spaces']);
    }
}
