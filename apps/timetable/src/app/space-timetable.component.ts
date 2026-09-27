import { Component, computed, input, signal } from '@angular/core';
import { AsyncHandler, CalendarEvent, Space } from '@placeos/common';
import { BindingDirective } from '@placeos/components';
import { setHours } from 'date-fns';
import { SpaceEventDetailsComponent } from './space-event-details.component';

/** Booking positioned on the grid. Values are percentages of the column */
export interface TimetableBlock {
    event: CalendarEvent;
    top: number;
    height: number;
    left: number;
    width: number;
}

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
                (modelChange)="updateBookings($event)"
            ></i>
            <div
                class="border-base-300 bg-base-100 flex min-h-12 w-full items-center justify-center border-b text-xl font-medium"
            >
                {{ space().display_name || space().name }}
            </div>
            <div space class="relative h-1/2 w-full flex-1">
                @for (block of blocks(); track block.event.id) {
                    <space-event-details
                        class="absolute px-0.5"
                        [style.top.%]="block.top"
                        [style.height.%]="block.height"
                        [style.left.%]="block.left"
                        [style.width.%]="block.width"
                        [event]="block.event"
                        [now]="now()"
                    ></space-event-details>
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
    imports: [BindingDirective, SpaceEventDetailsComponent],
})
export class SpaceTimetableComponent extends AsyncHandler {
    public readonly space = input<Space>(null);
    /** Start of the displayed day in ms */
    public readonly day = input<number>(0);
    /** Current time in ms */
    public readonly now = input<number>(0);
    public readonly time_offset = input<number>(0);
    public readonly time_period = input<number>(24);

    public readonly bookings = signal<CalendarEvent[]>([]);

    /**
     * Bookings clipped to the displayed hours of the day.
     * Overlapping bookings are split into side-by-side lanes.
     */
    public readonly blocks = computed(() => {
        const period_start = setHours(this.day(), this.time_offset()).valueOf();
        const period_end = setHours(
            this.day(),
            this.time_offset() + this.time_period(),
        ).valueOf();
        const period_length = period_end - period_start;
        const visible = this.bookings()
            .map((event) => ({
                event,
                start: Math.max(event.date, period_start),
                end: Math.min(event.date_end, period_end),
            }))
            .filter(({ start, end }) => end > start)
            .sort((a, b) => a.start - b.start || b.end - a.end);

        const blocks: TimetableBlock[] = [];
        let cluster: { block: TimetableBlock; lane: number }[] = [];
        let lane_ends: number[] = [];
        let cluster_end = 0;
        const closeCluster = () => {
            for (const { block, lane } of cluster) {
                block.width = 100 / lane_ends.length;
                block.left = lane * block.width;
            }
            cluster = [];
            lane_ends = [];
        };
        for (const { event, start, end } of visible) {
            if (start >= cluster_end) closeCluster();
            let lane = lane_ends.findIndex((lane_end) => lane_end <= start);
            if (lane < 0) lane = lane_ends.length;
            lane_ends[lane] = end;
            cluster_end = Math.max(cluster_end, end);
            const block: TimetableBlock = {
                event,
                top: ((start - period_start) / period_length) * 100,
                height: ((end - start) / period_length) * 100,
                left: 0,
                width: 100,
            };
            cluster.push({ block, lane });
            blocks.push(block);
        }
        closeCluster();
        return blocks;
    });

    public updateBookings(list: Partial<CalendarEvent>[] | null) {
        this.bookings.set((list || []).map((_) => new CalendarEvent(_)));
    }
}
