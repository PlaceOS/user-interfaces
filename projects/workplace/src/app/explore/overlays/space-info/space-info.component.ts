import { Component, OnInit } from '@angular/core';
import { AMapFeature } from '@acaprojects/ngx-interactive-map';

import { BaseClass } from 'src/app/common/base.class';
import { Space } from 'src/app/spaces/space.class';
import { getFreeBookingSlots } from 'src/app/bookings/booking.utilities';
import { timeFormatString, humaniseDuration } from '../../../shared/utilities/general.utilities';
import { RoomConfiguration } from 'src/app/common/room-configuration.interface';
import { CalendarEvent } from 'src/app/events/event.class';

import * as dayjs from 'dayjs';

@Component({
    selector: 'a-space-info',
    templateUrl: './space-info.component.html',
    styleUrls: ['./space-info.component.scss'],
})
export class ExploreSpaceInfoComponent extends BaseClass implements OnInit {
    /** Status of the space */
    public status: string;
    /** String of time until next booking */
    public available_until: string;

    /** Named position of the element location on the map */
    public get quadrant(): 'top left' | 'top right' | 'bottom left' | 'bottom right' {
        if (!this.context || !this.context.position) {
            return 'top left';
        }
        const pos = this.context.position;
        return pos.x > 50 && pos.y > 50
            ? 'bottom right'
            : pos.x < 50 && pos.y > 50
            ? 'bottom left'
            : pos.y < 50
            ? 'top left'
            : 'top right';
    }

    /** CSS class for the current status of the space */
    public get status_class(): string {
        return (this.status || '').toLowerCase().split(' ').join('-');
    }

    /** Space to display on the component */
    public get space(): Space {
        if (!this.context || !this.context.data) {
            return null;
        }
        return this.context.data.space;
    }

    /** List of bookings from the space for the currently displayed time */
    public get bookings(): CalendarEvent[] {
        if (!this.context || !this.context.data) {
            return [];
        }
        return this.context.data.bookings || [];
    }

    public get features(): string[] {
        if (!this.context || !this.context.data) {
            return [];
        }
        return this.context.data.features || [];
    }

    public get configurations(): RoomConfiguration[] {
        if (!this.context || !this.context.data) {
            return [];
        }
        return this.context.data.configurations || [];
    }

    constructor(private context: AMapFeature<{ space: Space; bookings: CalendarEvent[] }>) {
        super();
    }

    public ngOnInit(): void {
        this.processBookings();
        this.interval('update_bookings', () => this.processBookings(), 60 * 1000);
    }

    /**
     * Calculate availability of space based off given bookings
     */
    public processBookings(): void {
        if (!this.space) {
            return;
        }
        const free_slots = getFreeBookingSlots(this.bookings);
        const now = dayjs();
        const next_free_slot = free_slots.find((slot) => {
            const _start = dayjs(slot.start);
            const _end = dayjs(slot.end);
            return _start.isAfter(now) || (now.isAfter(_start, 's') && now.isBefore(_end, 'm'));
        });
        const start = dayjs(next_free_slot.start);
        const end = dayjs(next_free_slot.end);
        const currently_free = now.isAfter(start, 's') && now.isBefore(end, 'm');
        const time_until_next_block = humaniseDuration(
            currently_free ? end.diff(now, 'm') : start.diff(now, 'm'),
            true
        );
        const free_tomorrow = !currently_free && !start.isSame(now, 'd');
        const free_today = currently_free && !end.isSame(now, 'd');
        this.status = !this.space.bookable ? 'Not Bookable' : this.context.data.status || 'unknown';
        this.available_until = free_today
            ? 'No meetings today'
            : currently_free
            ? `Free until ${end.format(timeFormatString())}(${time_until_next_block})`
            : free_tomorrow
            ? 'Unavailable today'
            : `Free at ${start.format(timeFormatString())}(${time_until_next_block})`;
    }
}
