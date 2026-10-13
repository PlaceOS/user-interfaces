import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { BookingCardComponent } from '@placeos/bookings';
import { Booking, CalendarEvent } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { EventCardComponent } from '@placeos/events';
import {
    addDays,
    differenceInCalendarDays,
    format,
    isSameDay,
    startOfDay,
} from 'date-fns';
import { overlapsDay, ScheduleStateService } from './schedule-state.service';

interface ScheduleDateBlock {
    id: string;
    date: number;
    bookings: (Booking | CalendarEvent)[];
    is_today: boolean;
}

/** Upper bound for the number of days in the list */
const MAX_LIST_DAYS = 366;

@Component({
    selector: `schedule-list-view`,
    template: `
        @if (booking_dates()?.length) {
            @for (date_block of booking_dates(); track date_block.date) {
                <h3 class="mb-2 font-medium">
                    {{ date_block.date | date: 'EEE dd LLL yyyy' }}
                    @if (date_block.is_today) {
                        <span> ({{ 'COMMON.TODAY' | translate }}) </span>
                    }
                </h3>
                @for (item of date_block.bookings; track item.id) {
                    @if (isEvent(item)) {
                        <event-card
                            [event]="item"
                            [edit_fn]="edit_fn"
                            [remove_fn]="remove_fn"
                        ></event-card>
                    } @else {
                        <booking-card
                            [booking]="item"
                            [edit_fn]="edit_booking_fn"
                            [remove_fn]="remove_fn"
                            [end_fn]="end_fn"
                            [refresh_fn]="refresh_fn"
                        >
                            @if (item.status === 'cancelled') {
                                <span
                                    booking-status
                                    class="text-error text-sm font-medium"
                                >
                                    {{ 'COMMON.TYPE_CANCELLED' | translate }}
                                </span>
                            }
                        </booking-card>
                    }
                }
            }
        } @else {
            <div
                class="flex w-full flex-col items-center justify-center space-y-4 p-8"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">
                    {{ 'APP.WORKPLACE.SCHEDULE_EMPTY' | translate }}
                    @if (end_date() && !isSameDayCheck(date(), end_date())) {
                        {{ date() | date: 'dd LLL yyyy' }} -
                        {{ end_date() | date: 'dd LLL yyyy' }}
                    } @else {
                        {{ date() | date: 'EEEE, dd LLL yyyy' }}
                    }
                </p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        EventCardComponent,
        BookingCardComponent,
    ],
})
export class ScheduleListViewComponent {
    private _state = inject(ScheduleStateService);
    public readonly date = input(Date.now());
    public readonly end_date = input<number | null>(null);
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);
    public readonly loading = input(false);
    public readonly isEvent = (
        i: Booking | CalendarEvent,
    ): i is CalendarEvent => i instanceof CalendarEvent;
    public readonly isSameDayCheck = (a: number, b: number) => isSameDay(a, b);

    public readonly edit_fn = (i: CalendarEvent) => this._state.edit(i);
    public readonly edit_booking_fn = (i: Booking) =>
        this._state.editBooking(i);
    public readonly remove_fn = (i: Booking | CalendarEvent, t?: boolean) =>
        this._state.remove(i, t);
    public readonly end_fn = (i: Booking) => this._state.end(i);
    public readonly refresh_fn = () => this._state.triggerPoll();

    /** Days in the selected date or date range that have bookings */
    public readonly booking_dates = computed(() => {
        if (this.loading()) return [];
        const bookings = [...(this.bookings() || [])].sort(
            (a, b) => a.date - b.date,
        );
        const start = startOfDay(this.date());
        const end = this.end_date();
        // One day when there is no range end
        const day_count = Math.min(
            MAX_LIST_DAYS,
            end ? Math.max(1, differenceInCalendarDays(end, start) + 1) : 1,
        );
        const list: ScheduleDateBlock[] = [];
        for (let i = 0; i < day_count; i++) {
            const day = addDays(start, i).valueOf();
            // A multi-day booking is listed on each day that it covers
            const day_bookings = bookings.filter((_) => overlapsDay(_, day));
            if (!day_bookings.length) continue;
            list.push({
                id: format(day, 'yyyy-MM-dd'),
                date: day,
                bookings: day_bookings,
                is_today: isSameDay(day, Date.now()),
            });
        }
        return list;
    });
}
