import { Component, computed, input } from '@angular/core';
import { CalendarEvent } from '@placeos/common';
import { getHours, getMinutes } from 'date-fns';

@Component({
    selector: 'space-event-details',
    template: `
        @if (event()) {
            <div
                event
                class="absolute inset-x-1 overflow-hidden rounded border bg-base-100 px-2 py-1"
                [style.top]="top() + '%'"
                [style.height]="height() + '%'"
                [class.border-base-300]="event().state !== 'in_progress'"
                [class.border-info]="event().state === 'in_progress'"
                [class.!opacity-30]="event().state === 'done'"
            >
                <h2>{{ event().title }}</h2>
                <p>
                    {{ event().date | date: 'shortTime' }} &ndash;
                    {{
                        event().date + event().duration * 60 * 1000
                            | date: 'shortTime'
                    }}
                </p>
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class SpaceEventDetailsComponent {
    public readonly event = input<CalendarEvent>(null);
    public readonly time_offset = input<number>(0);
    public readonly time_period = input<number>(24);

    public readonly top = computed(() => {
        const date = this.event().date || this.event().event_start * 1000;
        const start_hour = getHours(date) + getMinutes(date) / 60;
        const start_offset = start_hour - this.time_offset();
        return (start_offset / this.time_period()) * 100;
    });

    public readonly height = computed(() => {
        let duration = this.event().duration;
        if (!duration) {
            const duration_s =
                this.event().event_end - this.event().event_start;
            duration = Math.floor(duration_s / 60);
        }
        const duration_hours = duration / 60;
        return (duration_hours / this.time_period()) * 100;
    });
}
