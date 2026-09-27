import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CalendarEvent } from '@placeos/common';

@Component({
    selector: 'space-event-details',
    template: `
        @if (event()) {
            <div
                event
                class="bg-base-100 h-full w-full overflow-hidden rounded-sm border px-2 py-1"
                [class.border-base-300]="state() !== 'in_progress'"
                [class.border-info]="state() === 'in_progress'"
                [class.opacity-30!]="state() === 'done'"
            >
                <h2>{{ event().title }}</h2>
                <p>
                    {{ event().date | date: 'shortTime' }} &ndash;
                    {{ event().date_end | date: 'shortTime' }}
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [CommonModule],
})
export class SpaceEventDetailsComponent {
    public readonly event = input<CalendarEvent>(null);
    /** Current time in ms */
    public readonly now = input<number>(0);

    public readonly state = computed(() => {
        const { date, date_end } = this.event();
        if (this.now() >= date_end) return 'done';
        if (this.now() >= date) return 'in_progress';
        return 'future';
    });
}
