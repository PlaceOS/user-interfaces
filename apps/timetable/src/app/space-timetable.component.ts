import { Component, Input, SimpleChanges } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { Observable } from 'rxjs';
import { TimetableStateService } from './timetable-state.service';

@Component({
    selector: 'space-timetable',
    template: `
        <div
            class="w-full min-h-[3rem] bg-[#212121] border-b border-white/50 flex items-center justify-center text-white text-xl font-medium"
        >
            {{ space?.display_name || space?.name }}
        </div>
        <div space class="w-full h-1/2 flex-1 relative" *ngIf="space?.id && bookings">
            <space-event-details
                *ngFor="let event of bookings | async"
                [event]="event"
            ></space-event-details>
        </div>
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
