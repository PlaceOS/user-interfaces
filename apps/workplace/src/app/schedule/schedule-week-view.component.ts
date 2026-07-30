import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BookingDetailsModalComponent,
    bookingLocationString,
    isInWaitlistWeek,
    visitorDisplayNameFor,
} from '@placeos/bookings';
import {
    Booking,
    BOOKING_TYPE_COLORS,
    CalendarEvent,
    OrganisationService,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    EventDetailsModalComponent,
    GroupEventDetailsModalComponent,
} from '@placeos/events';
import { UserPipe } from '@placeos/users';
import {
    addDays,
    format,
    isBefore,
    isSameDay,
    startOfDay,
    startOfWeek,
} from 'date-fns';
import {
    bookedForLabel,
    isBookingForOtherUser,
    ScheduleStateService,
} from './schedule-state.service';

interface Weekday {
    id: string;
    date: number;
    is_past: boolean;
    is_today: boolean;
}

@Component({
    selector: `schedule-week-view`,
    template: `
        <div
            #scrollContainer
            class="h-full w-full snap-x snap-mandatory overflow-auto"
        >
            <div class="m-2">
                <div class="grid w-full min-w-[87.5rem] grid-cols-7 gap-2">
                    @for (day of weekdays(); track day.id) {
                        <div
                            #dayColumn
                            header
                            class="flex snap-start items-center justify-center space-x-2 py-2"
                            [attr.data-is-today]="day.is_today"
                        >
                            <div
                                [matTooltip]="
                                    day.is_today
                                        ? 'Today'
                                        : (day.date | date: 'fullDate')
                                "
                            >
                                {{ day.date | date: 'EEE, dd' }}
                            </div>
                            <div
                                class="relative flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs"
                                [class.bg-base-300]="!day.is_today"
                                [class.bg-info]="day.is_today"
                                [class.text-info-content]="day.is_today"
                                [matTooltip]="
                                    (bookings_by_date()[day.id]?.length || 0) +
                                    ' bookings'
                                "
                            >
                                {{ bookings_by_date()[day.id]?.length || 0 }}
                            </div>
                        </div>
                    }
                    @for (day of weekdays(); track day.id) {
                        <div
                            body
                            class="border-base-300 bg-base-100 flex min-h-[calc(100vh-15rem)] snap-start flex-col space-y-2 rounded-xl border p-2"
                            [class.opacity-30]="day.is_past"
                        >
                            @for (
                                bkn of bookings_by_date()[day.id] || [];
                                track bkn.id
                            ) {
                                <button
                                    matRipple
                                    class="bg-base-100 w-full rounded-lg border p-2 text-left text-black"
                                    [style.border-color]="colors[type(bkn)][1]"
                                    [style.background-color]="
                                        backgroundColor(bkn)
                                    "
                                    (click)="viewBooking(bkn)"
                                    [matTooltip]="
                                        bkn.title +
                                        (location(bkn)
                                            ? '
' + location(bkn)
                                            : '') +
                                        (visitorName(bkn)
                                            ? '
' + visitorName(bkn)
                                            : '') +
                                        (isBookingForOtherUser(bkn)
                                            ? '
for ' + bookedForLabel(bkn)
                                            : '') +
                                        '
' +
                                        ($any(bkn).user_name ||
                                            ($any(bkn).host | user | async)
                                                ?.name ||
                                            $any(bkn).host) +
                                        '
' +
                                        (bkn.date | date: 'shortTime') +
                                        ' - ' +
                                        (bkn.date_end | date: 'shortTime')
                                    "
                                >
                                    <div
                                        class="flex items-start justify-between gap-2"
                                    >
                                        <div class="min-w-0 truncate text-sm">
                                            {{ bkn.title }}
                                        </div>
                                        @if (bookingStatus(bkn); as status) {
                                            <div
                                                class="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                                                [style.background-color]="
                                                    statusColor(status)
                                                "
                                                [matTooltip]="
                                                    statusLabel(status)
                                                "
                                            ></div>
                                        }
                                    </div>
                                    @if (location(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-75"
                                        >
                                            {{ location(bkn) }}
                                        </div>
                                    }
                                    @if (visitorName(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
                                            {{ visitorName(bkn) }}
                                        </div>
                                    }
                                    @if (isBookingForOtherUser(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
                                            Booked by
                                            {{
                                                $any(bkn).booked_by_name ||
                                                    (
                                                        $any(bkn)
                                                            .booked_by_email
                                                        | user
                                                        | async
                                                    )?.name ||
                                                    $any(bkn).booked_by_email
                                            }}
                                        </div>
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
                                            for {{ bookedForLabel(bkn) }}
                                        </div>
                                    }
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
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        UserPipe,
    ],
})
export class ScheduleWeekViewComponent {
    private _dialog = inject(MatDialog);
    private _state = inject(ScheduleStateService);
    private _org = inject(OrganisationService);
    public readonly date = input(Date.now());
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);
    public readonly loading = input(false);
    public readonly colors = BOOKING_TYPE_COLORS;

    private readonly _scroll_container =
        viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

    constructor() {
        effect(() => {
            this.weekdays(); // Track weekdays changes
            this._scrollToCurrentDay();
        });
    }

    private _scrollToCurrentDay() {
        const container = this._scroll_container()?.nativeElement;
        if (!container) return;

        // Use setTimeout to ensure DOM is fully rendered
        setTimeout(() => {
            const today_column = container.querySelector(
                '[data-is-today="true"]',
            ) as HTMLElement;
            if (!today_column) return;

            // Get positions relative to viewport
            const container_rect = container.getBoundingClientRect();
            const column_rect = today_column.getBoundingClientRect();

            // Calculate the current scroll offset
            const current_scroll = container.scrollLeft;

            // Calculate where the column currently is relative to container
            const column_relative_to_container =
                column_rect.left - container_rect.left + current_scroll;

            // Calculate scroll position to center the column
            const container_center = container.clientWidth / 2;
            const column_center = column_rect.width / 2;
            const scroll_position =
                column_relative_to_container - container_center + column_center;

            container.scrollTo({
                left: scroll_position,
                behavior: 'smooth',
            });
        }, 0);
    }

    public readonly weekdays = computed(() => {
        const days: Weekday[] = [];
        const week_start = startOfWeek(this.date(), {
            weekStartsOn: this._state.offset_weekday,
        });
        for (let i = 0; i < 7; i++) {
            const date = addDays(week_start, i);
            days.push({
                id: format(date, 'yyyy-MM-dd'),
                date: date.valueOf(),
                is_past: isBefore(date, startOfDay(Date.now())),
                is_today: isSameDay(date, Date.now()),
            });
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

    public bookingStatus(
        booking: Booking | CalendarEvent,
    ): 'approved' | 'tentative' | 'declined' | 'waitlisted' | null {
        const status = booking.status;
        if (
            status === 'tentative' &&
            booking instanceof Booking &&
            booking.booking_type === 'parking' &&
            isInWaitlistWeek(booking.date, this._org.building?.timezone)
        ) {
            return 'waitlisted';
        }
        return status === 'approved' ||
            status === 'tentative' ||
            status === 'declined'
            ? status
            : null;
    }

    public statusLabel(
        status: 'approved' | 'tentative' | 'declined' | 'waitlisted',
    ) {
        return status.charAt(0).toUpperCase() + status.slice(1);
    }

    public statusColor(
        status: 'approved' | 'tentative' | 'declined' | 'waitlisted',
    ) {
        if (status === 'approved') return 'var(--success)';
        if (status === 'waitlisted') return 'var(--info)';
        if (status === 'tentative') return 'var(--warn)';
        return 'var(--error)';
    }

    public visitorName(booking: Booking | CalendarEvent): string {
        // Only visitor bookings have a visitor name; for other types this
        // would fall back to the raw `asset_id` (e.g. unallocated parking).
        if (booking instanceof Booking && booking.booking_type === 'visitor') {
            return visitorDisplayNameFor(booking);
        }
        return '';
    }

    public location(booking: Booking | CalendarEvent): string {
        return bookingLocationString(booking, this._org);
    }

    public backgroundColor(booking: Booking | CalendarEvent) {
        const color = this.colors[this.type(booking)][0];
        return this.isBookingForOtherUser(booking) ? `${color}80` : color;
    }

    public isBookingForOtherUser = isBookingForOtherUser;
    public bookedForLabel = bookedForLabel;

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
                        event: bkn,
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
                edit_fn: (i) => this._state.editBooking(i),
                remove_fn: (i, t) => this._state.remove(i, t),
                end_fn: (i) => this._state.end(i),
                refresh_fn: () => this._state.triggerPoll(),
            };
            this._dialog.open(view_component, { data });
        }
    }
}
