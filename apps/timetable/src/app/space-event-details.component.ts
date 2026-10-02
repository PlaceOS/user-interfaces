import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CalendarEvent } from '@placeos/common';

@Component({
    selector: 'space-event-details',
    template: `
        @if (event()) {
            <div
                event
                class="bg-base-100 flex h-full w-full flex-wrap content-start items-baseline gap-x-2 overflow-hidden rounded-sm border px-2 py-0.5 text-sm leading-tight"
                [class.border-base-300]="state() !== 'in_progress'"
                [class.border-info]="state() === 'in_progress'"
                [class.opacity-30!]="state() === 'done'"
            >
                <h2 class="max-w-full truncate font-medium">{{ title() }}</h2>
                <p class="whitespace-nowrap opacity-70">
                    {{ event().date | date: time_format() }} &ndash;
                    {{ event().date_end | date: time_format() }}
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [DatePipe],
})
export class SpaceEventDetailsComponent {
    public readonly event = input<CalendarEvent>(null);
    /** Current time in ms */
    public readonly now = input<number>(0);
    /** Date pipe format for times */
    public readonly time_format = input<string>('h:mm a');
    /** Whether to replace the title with a generic label */
    public readonly hide_title = input<boolean>(false);

    public readonly title = computed(() =>
        this.hide_title() || this.event().private
            ? 'Booked'
            : this.event().title,
    );

    public readonly state = computed(() => {
        const { date, date_end } = this.event();
        if (this.now() >= date_end) return 'done';
        if (this.now() >= date) return 'in_progress';
        return 'future';
    });
}
