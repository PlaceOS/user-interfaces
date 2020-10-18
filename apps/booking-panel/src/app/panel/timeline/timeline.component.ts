import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {
    format,
    startOfMinute,
    roundToNearestMinutes,
    addMinutes,
    subMinutes,
    isBefore,
    getMinutes,
    getHours,
    isAfter,
    isSameMinute,
} from 'date-fns';

import { BaseClass } from '@user-interfaces/common';
import { Space } from '@user-interfaces/spaces';
import { CalendarEvent } from '@user-interfaces/events';

import { PanelStateService } from '../panel-state.service';

export interface IPanelTimelineOptions {
    /** Length of time in minutes to display on the timeline after the current time */
    duration: number;
    /** Time offset in minutes which is displayed before the current time marker */
    start_offset: number;
    /** Size of shown blocks in minutes */
    block_size: number;
}

interface ITimelineBlock {
    /** Block time as ms since UTC epoch */
    value: number;
    /** Whether to show block divider */
    show: boolean;
    /** Hour of the day represented by this time block */
    hour: number;
    /** Whether block is in use or not */
    in_use: boolean;
}

@Component({
    selector: 'panel-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class PanelTimelineComponent extends BaseClass implements OnInit, OnChanges {
    /** Space with which to display bookings for */
    @Input() public space: Space;
    /** Display options for the timeline */
    @Input() public options: IPanelTimelineOptions;
    /** Emitter for user events on the timeline */
    @Output() public event = new EventEmitter();

    /** List of display time block  */
    public time_blocks: ITimelineBlock[] = [];
    /** Whether to hide unavailable blocks on the UI */
    public hide_status: boolean;
    /** Whether to hide all booking data */
    public hide_all: boolean;
    /** Whether user is not allowed to make bookings */
    public no_booking: boolean;
    /** Whether user is not allowed to make bookings using the timeline */
    public no_timeline_bookings: boolean;
    /** Default title for bookings */
    public default_title: string;
    /** Maximum allowed booking duation */
    public max_duration: number;
    /** Minimum allowed booking duation */
    public min_duration: number;

    /** Display string for the current time */
    public get display_time(): string {
        return format(new Date(), 'h:mm a');
    }

    constructor(private _state: PanelStateService) {
        super();
    }

    public ngOnInit(): void {
        this.generateTimelineBlocks();
        this.interval('update_blocks', () => this.generateTimelineBlocks(), 60 * 1000);
        this.subscription(
            'bookings',
            this._state.bookings.subscribe((list) => this.checkBookings(list))
        );
    }

    public ngOnChanges(_): void {
        this.generateTimelineBlocks();
    }

    /**
     * Generate time blocks to display
     */
    private generateTimelineBlocks(): void {
        let now = startOfMinute(new Date());
        now = roundToNearestMinutes(addMinutes(now, 2), { nearestTo: 5 });
        const start = subMinutes(now, (this.options ? this.options.start_offset : null) || 120);
        const end = addMinutes(now, (this.options ? this.options.duration : null) || 720);
        let date = new Date(start);
        delete this.time_blocks;
        this.time_blocks = [];
        while (isBefore(date, end)) {
            this.time_blocks.push({
                value: date.valueOf(),
                show:
                    getMinutes(date) % ((this.options ? this.options.block_size : null) || 30) ===
                    0,
                hour:
                    getMinutes(date) === 0
                        ? getHours(date) % 12 === 0
                            ? 12
                            : getHours(date) % 12
                        : null,
                in_use: false,
            });
            date = addMinutes(date, 5);
        }
        this.checkBookings(this._state.booking_list);
    }

    /**
     * Update the statuses of time blocks based off space bookings
     */
    public checkBookings(list: CalendarEvent[]): void {
        if (list && list.length) {
            const block_start = subMinutes(
                new Date(),
                (this.options ? this.options.start_offset : null) || 120
            );
            const block_end = addMinutes(
                new Date(),
                (this.options ? this.options.duration : null) || 720
            );
            // Filter bookings for the shown times
            const bookings = list.filter((i) => {
                const start = new Date(i.date);
                const end = addMinutes(start, i.duration);
                return isAfter(end, block_start) && isBefore(start, block_end);
            });
            this.time_blocks.forEach((i) => (i.in_use = false));
            if (!this.hide_status && !this.hide_all) {
                for (const booking of bookings) {
                    const start = new Date(booking.date);
                    const end = addMinutes(start, booking.duration);
                    for (const block of this.time_blocks) {
                        const block_time = new Date(block.value);
                        if (
                            isSameMinute(block_time, start) ||
                            (isAfter(block_time, start) && isBefore(block_time, end))
                        ) {
                            block.in_use = true;
                        }
                    }
                }
            }
        }
    }

    /**
     * Open modal to make a new booking
     */
    public book(block: ITimelineBlock) {
        this._state.newBooking(block.value);
    }
}
