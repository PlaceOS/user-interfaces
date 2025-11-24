import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { BookingCardComponent } from '@placeos/bookings';
import { CalendarEvent } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { EventCardComponent } from '@placeos/events';
import { format, isSameDay, parse } from 'date-fns';
import { ScheduleStateService } from './schedule-state.service';

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
                        ></booking-card>
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
                    {{ date() | date: 'EEEE, dd LLL yyyy' }}
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
    public readonly bookings = input<any[]>([]);
    public readonly loading = input<any[]>([]);
    public readonly isEvent = (i) => i instanceof CalendarEvent;

    public readonly edit_fn = (i) => this._state.edit(i);
    public readonly edit_booking_fn = (i) => this._state.editBooking(i);
    public readonly remove_fn = (i, t?) => this._state.remove(i, t);
    public readonly end_fn = (i) => this._state.end(i);

    public readonly booking_dates = computed(() => {
        if (this.loading()) return [];
        const sorted = (this.bookings() || []).sort((a, b) => a.date - b.date);
        const filtered = sorted.filter((b) => isSameDay(b.date, this.date()));
        const dates = new Set<string>();
        for (const booking of filtered) {
            const date = format(booking.date, 'yyyy-MM-dd');
            if (!dates.has(date)) dates.add(date);
        }
        const list = [];
        for (const date of dates) {
            const day = parse(date, 'yyyy-MM-dd', 0);
            list.push({
                id: date,
                date: day.valueOf(),
                bookings: sorted.filter((booking) =>
                    isSameDay(booking.date, day),
                ),
                is_today: isSameDay(day, Date.now()),
            });
        }
        return list;
    });
}
