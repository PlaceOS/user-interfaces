import { Component, input, signal } from '@angular/core';
import { AsyncHandler, Space } from '@placeos/common';

@Component({
    selector: 'space-timetable',
    template: `
        @if (space()) {
            <i
                binding
                class="hidden"
                [sys]="space().id"
                mod="Bookings"
                bind="bookings"
                (modelChange)="bookings.set($event)"
            ></i>
            <div
                class="flex min-h-[3rem] w-full items-center justify-center border-b border-base-300 bg-base-100 text-xl font-medium"
            >
                {{ space().display_name || space().name }}
            </div>
            @if (bookings()) {
                <div space class="relative h-1/2 w-full flex-1">
                    @for (event of bookings(); track event.id) {
                        {{ event.date }}
                        <space-event-details
                            [event]="event"
                            [time_offset]="time_offset()"
                            [time_period]="time_period()"
                        ></space-event-details>
                    }
                </div>
            }
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                min-height: 51rem;
            }
        `,
    ],
    standalone: false,
})
export class SpaceTimetableComponent extends AsyncHandler {
    public readonly space = input<Space>(null);
    public readonly time_offset = input<number>(0);
    public readonly time_period = input<number>(24);

    public readonly bookings = signal<any[]>([]);
}
