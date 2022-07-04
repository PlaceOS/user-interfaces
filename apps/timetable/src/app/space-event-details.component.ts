import { Component, Input } from '@angular/core';
import { CalendarEvent } from '@placeos/events';
import { getHours, getMinutes } from 'date-fns';

@Component({
    selector: 'space-event-details',
    template: `
        <div
            event
            class="absolute inset-x-1 bg-[#212121] text-white rounded border border-white/50 overflow-hidden px-2 py-1"
            [style.top]="top + '%'"
            [style.height]="height + '%'"
            [class.!bg-primary]="event?.state === 'in_progress'"
            [class.!opacity-30]="event?.state === 'done'"
            *ngIf="event"
        >
            <h2>{{ event?.title }}</h2>
            <p>
                {{ event?.date | date: 'shortTime' }} &ndash;
                {{
                    event?.date + event?.duration * 60 * 1000
                        | date: 'shortTime'
                }}
            </p>
        </div>
    `,
    styles: [``],
})
export class SpaceEventDetailsComponent {
    @Input() public event?: CalendarEvent;

    public get top() {
        return (
            ((getHours(this.event?.date || Date.now()) +
                getMinutes(this.event?.date || Date.now()) / 60) /
                24) *
            100
        );
    }

    public get height() {
        return ((this.event?.duration || 60) / 60 / 24) * 100;
    }
}
