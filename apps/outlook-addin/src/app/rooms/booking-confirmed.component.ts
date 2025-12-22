import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { CalendarEvent } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { Observable, of } from 'rxjs';

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
export class BookingConfirmedComponent implements OnInit {
    private _state = inject(EventFormService);
    private _router = inject(Router);

    public get form() {
        return this._state.form;
    }

    location: CalendarEvent['location'];
    date: Observable<CalendarEvent['date']>;
    start_time$: Observable<string>;
    end_time$: Observable<string>;
    duration: CalendarEvent['duration'];

    ngOnInit() {
        this.location = this._state.last_success()?.location;
        this.date = of(this._state.last_success()?.date);
        this.start_time$ = of(
            new Date(this._state.last_success()?.date).toLocaleTimeString(
                'en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                },
            ),
        );
        this.duration = this._state.last_success()?.duration;
        this.end_time$ = of(
            new Date(
                this._state.last_success()?.date + this.duration * 60 * 1000,
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
