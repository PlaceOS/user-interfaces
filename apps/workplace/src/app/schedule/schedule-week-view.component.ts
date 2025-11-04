import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDetailsModalComponent } from '@placeos/bookings';
import { Booking, CalendarEvent } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    EventDetailsModalComponent,
    GroupEventDetailsModalComponent,
} from '@placeos/events';
import { addDays, format, startOfWeek } from 'date-fns';
import { ScheduleStateService } from './schedule-state.service';
import { BOOKING_TYPE_COLORS } from './schedule.component';

@Component({
    selector: `schedule-week-view`,
    template: `
        <div class="h-full w-full overflow-auto">
            <div class="m-2">
                <div class="grid w-full min-w-[87.5rem] grid-cols-7 gap-2">
                    @for (day of weekdays(); track day.id) {
                        <div header class="flex flex-col items-center">
                            <div>{{ day.date | date: 'EEE, dd' }}</div>
                            <div class="relative pt-2 text-xs">
                                {{ bookings_by_date()[day.id]?.length || 0 }}
                                <icon
                                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl opacity-50"
                                    >calendar_today</icon
                                >
                            </div>
                        </div>
                    }
                    @for (day of weekdays(); track day.id) {
                        <div
                            body
                            class="flex min-h-[calc(100vh-15rem)] flex-col space-y-2 rounded-xl border border-base-300 bg-base-100 p-2"
                        >
                            @for (
                                bkn of bookings_by_date()[day.id] || [];
                                track bkn.id
                            ) {
                                <button
                                    matRipple
                                    class="w-full rounded-lg border bg-base-100 p-2 text-left"
                                    [style.border-color]="colors[type(bkn)][1]"
                                    [style.background-color]="
                                        colors[type(bkn)][0]
                                    "
                                    (click)="viewBooking(bkn)"
                                >
                                    <div class="truncate text-sm">
                                        {{ bkn.title }}
                                    </div>
                                    <div class="text-xs">
                                        {{ bkn.date | date: 'shortTime' }}
                                    </div>
                                </button>
                            }
                            @if (!bookings_by_date()[day.id]?.length) {
                                <div
                                    class="flex h-full w-full flex-col items-center justify-center opacity-30"
                                >
                                    <icon class="text-4xl">event_busy</icon>
                                    <div>No bookings</div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [CommonModule, IconComponent, MatRippleModule],
})
export class ScheduleWeekViewComponent {
    private _dialog = inject(MatDialog);
    private _state = inject(ScheduleStateService);
    public readonly date = input(Date.now());
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);
    public readonly colors = BOOKING_TYPE_COLORS;

    public readonly weekdays = computed(() => {
        const days: { id: string; date: number }[] = [];
        for (let i = 0; i < 7; i++) {
            const date = addDays(startOfWeek(this.date()), i);
            days.push({ id: format(date, 'yyyy-MM-dd'), date: date.valueOf() });
        }
        return days;
    });
    public readonly bookings_by_date = computed(() => {
        const date_map: Record<string, (Booking | CalendarEvent)[]> = {};
        for (const bkn of this.bookings() || []) {
            const date = format(bkn.date, 'yyyy-MM-dd');
            if (!date_map[date]) date_map[date] = [];
            date_map[date].push(bkn);
        }
        return date_map;
    });

    public type(booking: Booking | CalendarEvent) {
        if (booking instanceof Booking) return booking.booking_type;
        return booking.extension_data?.shared_event ? 'group-event' : 'event';
    }

    public viewBooking(bkn: CalendarEvent | Booking) {
        this._dialog.closeAll();
        if (bkn instanceof CalendarEvent) {
            if (bkn.extension_data?.shared_event) {
                this._dialog.open(GroupEventDetailsModalComponent, {
                    data: {
                        event: bkn,
                        edit_fn: (i) => this._state.edit(i),
                        remove_fn: (i, t) => this._state.remove(i, t),
                        concierge: false,
                    },
                });
            } else {
                this._dialog.open(EventDetailsModalComponent, {
                    data: {
                        event: event,
                        edit_fn: (i) => this._state.edit(i),
                        remove_fn: (i, t) => this._state.remove(i, t),
                    },
                });
            }
        } else {
            const view_component: any =
                bkn.booking_type === 'group-event'
                    ? GroupEventDetailsModalComponent
                    : BookingDetailsModalComponent;
            const data = {
                booking:
                    bkn.booking_type === 'group-event'
                        ? { booking: bkn, concierge: false }
                        : bkn,
                edit_fn: (i) => this._state.edit(i),
                remove_fn: (i, t) => this._state.remove(i, t),
                end_fn: (i) => this._state.end(i),
            };
            this._dialog.open(view_component, { data });
        }
    }
}
