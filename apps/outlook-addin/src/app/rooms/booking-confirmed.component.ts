import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'booking-confirmed',
    template: `
        <div
            class="z-0 flex h-full flex-1 flex-col overflow-y-auto bg-base-200"
        >
            <section
                class="justify-content flex h-full items-center border-b border-base-200 py-5"
            >
                <div
                    class="mx-auto flex w-[calc(100%-2rem)] max-w-[375px] flex-col items-center"
                >
                    <div class="mb-3">
                        <span class="text-gray-700 mr-auto text-3xl font-bold">
                            Booking Confirmed!</span
                        >
                    </div>
                    <div>
                        <img src="assets/tick_success.svg" />
                    </div>

                    <div class="mx-3 flex items-center justify-center">
                        <span class="flex text-justify"
                            >Your room booking for
                            {{ location }}
                            has been successfully booked for the
                            {{ date | async | date: 'dd MMMM yyyy' }} at
                            {{ start_time$ | async }} -
                            {{ end_time$ | async }}
                        </span>
                    </div>
                    <div class="mt-3 flex items-center">
                        <button
                            btn
                            matRipple
                            (click)="newBooking()"
                            class="my-2 border-secondary bg-base-100 text-sm text-secondary"
                        >
                            <span class="text-sm">New Booking</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    `,
    styles: [``],
    standalone: false,
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

    constructor(
        private _state: EventFormService,
        private _router: Router,
    ) {}

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
                },
            ),
        );
        this.duration = this._state.last_success?.duration;
        this.end_time$ = of(
            new Date(
                this._state.last_success?.date + this.duration * 60 * 1000,
            ).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }),
        );
    }
    newBooking() {
        this._router.navigate(['book/spaces']);
    }
}
