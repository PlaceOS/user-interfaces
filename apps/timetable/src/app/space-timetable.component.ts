import { Component, Input, SimpleChanges } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { Observable } from 'rxjs';
import { TimetableStateService } from './timetable-state.service';

@Component({
    selector: 'space-timetable',
    template: `
        <div
            class="flex min-h-[3rem] w-full items-center justify-center border-b border-white/50 bg-[#212121] text-xl font-medium text-white"
        >
            {{ space?.display_name || space?.name }}
        </div>
        @if (space?.id && bookings) {
            <div space class="relative h-1/2 w-full flex-1">
                @for (event of bookings | async; track event) {
                    <space-event-details [event]="event"></space-event-details>
                }
            </div>
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
export class SpaceTimetableComponent {
    @Input() public space?: Space;

    public bookings: Observable<CalendarEvent[]>;

    constructor(private _state: TimetableStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.space && this.space?.id) {
            this.bookings = this._state.bookingsFor(this.space.id);
        }
    }
}
