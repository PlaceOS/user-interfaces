import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    OnInit,
    signal,
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
    AsyncHandler,
    Booking,
    BOOKING_TYPE_COLORS,
    CalendarEvent,
    OrganisationService,
} from '@placeos/common';
import {
    EventDetailsModalComponent,
    GroupEventDetailsModalComponent,
} from '@placeos/events';
import { UserPipe } from '@placeos/users';
import {
    format,
    isSameDay,
    setHours,
    setMinutes,
    startOfDay,
} from 'date-fns';
import {
    bookedForLabel,
    isBookingForOtherUser,
    ScheduleStateService,
} from './schedule-state.service';

interface TimeSlot {
    hour: number;
    label: string;
}

interface PositionedBooking {
    booking: Booking | CalendarEvent;
    top: number; // percentage
    height: number; // percentage
    left: number; // percentage
    width: number; // percentage
    column: number;
    totalColumns: number;
}

@Component({
    selector: `schedule-day-view`,
    template: `
        <div class="h-full w-full overflow-auto" #scrollContainer>
            <div class="m-2">
                <div class="mb-4 flex items-center justify-between px-4 py-2">
                    <h2 class="text-xl font-medium">
                        {{ date() | date: 'EEEE, MMMM d, yyyy' }}
                    </h2>
                    <div
                        class="border-base-300 bg-base-100 text-base-content rounded-md border px-2 py-1 text-sm"
                    >
                        {{ bookings()?.length || 0 }} booking{{
                            bookings()?.length !== 1 ? 's' : ''
                        }}
                    </div>
                </div>
                <div class="relative flex">
                    <!-- Time labels -->
                    <div class="w-12 flex-shrink-0 pr-2">
                        @for (slot of timeSlots(); track slot.hour) {
                            <div
                                class="text-base-content flex h-16 items-start justify-end text-xs opacity-60"
                            >
                                <div class="relative -translate-y-1/2">
                                    {{ slot.label }}
                                </div>
                            </div>
                        }
                    </div>

                    <!-- Calendar grid -->
                    <div
                        class="border-base-300 bg-base-100 relative flex-1 overflow-hidden rounded-xl border-x border-b"
                    >
                        <!-- Grid lines -->
                        <div class="absolute inset-0">
                            @for (slot of timeSlots(); track slot.hour) {
                                <div class="relative h-16">
                                    <div
                                        class="border-base-300 absolute inset-x-0 top-0 border-t"
                                    ></div>
                                    <div
                                        class="border-base-300 absolute inset-x-0 top-8 border-t border-dashed"
                                    ></div>
                                </div>
                            }
                        </div>

                        <!-- Current time marker -->
                        @if (currentTimePosition() !== null) {
                            <div
                                #currentTimeMarker
                                class="pointer-events-none absolute inset-x-0 z-20 flex items-center"
                                [style.top.%]="currentTimePosition()"
                            >
                                <div
                                    class="bg-error -ml-1 h-2 w-2 rounded-full"
                                ></div>
                                <div
                                    class="border-error flex-1 border-t-2"
                                ></div>
                            </div>
                        }

                        <!-- Bookings -->
                        <div class="relative h-full">
                            @for (
                                item of positionedBookings();
                                track item.booking.id
                            ) {
                                <button
                                    matRipple
                                    class="absolute overflow-hidden rounded-lg border p-2 text-left text-black shadow-sm transition-shadow hover:shadow-md"
                                    [style.top.%]="item.top"
                                    [style.height.%]="item.height"
                                    [style.left.%]="item.left"
                                    [style.width.%]="item.width"
                                    [style.border-color]="
                                        colors[type(item.booking)][1]
                                    "
                                    [style.background-color]="
                                        backgroundColor(item.booking)
                                    "
                                    [style.z-index]="10"
                                    (click)="viewBooking(item.booking)"
                                    [matTooltip]="
                                        item.booking.title +
                                        (location(item.booking)
                                            ? '
' + location(item.booking)
                                            : '') +
                                        (visitorName(item.booking)
                                            ? '
' + visitorName(item.booking)
                                            : '') +
                                        (isBookingForOtherUser(item.booking)
                                            ? '
for ' + bookedForLabel(item.booking)
                                            : '') +
                                        '
' +
                                        ($any(item.booking).user_name ||
                                            (
                                                $any(item.booking).host
                                                | user
                                                | async
                                            )?.name ||
                                            $any(item.booking).host) +
                                        '
' +
                                        (item.booking.date
                                            | date: 'shortTime') +
                                        ' - ' +
                                        (item.booking.date_end
                                            | date: 'shortTime')
                                    "
                                >
                                    <div
                                        class="flex items-start justify-between gap-2 text-sm font-medium"
                                    >
                                        <div class="min-w-0 truncate">
                                            {{ item.booking.title }}
                                            @if (
                                                item.height <= 5 &&
                                                location(item.booking)
                                            ) {
                                                <span
                                                    class="text-xs opacity-60"
                                                >
                                                    ·
                                                    {{ location(item.booking) }}
                                                </span>
                                            }
                                            @if (
                                                item.height <= 5 &&
                                                visitorName(item.booking)
                                            ) {
                                                <span
                                                    class="text-xs opacity-60"
                                                >
                                                    ·
                                                    {{
                                                        visitorName(
                                                            item.booking
                                                        )
                                                    }}
                                                </span>
                                            }
                                        </div>
                                        @if (
                                            bookingStatus(item.booking);
                                            as status
                                        ) {
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
                                    @if (item.height > 3) {
                                        <div class="text-xs opacity-75">
                                            {{
                                                item.booking.date
                                                    | date: 'shortTime'
                                            }}
                                            -
                                            {{
                                                item.booking.date_end
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 5 &&
                                        location(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{ location(item.booking) }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 5 &&
                                        visitorName(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{ visitorName(item.booking) }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 7 &&
                                        $any(item.booking).host
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{
                                                (
                                                    $any(item.booking).host
                                                    | user
                                                    | async
                                                )?.name ||
                                                    $any(item.booking).organiser
                                                        ?.name ||
                                                    $any(item.booking).host
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 7 &&
                                        isBookingForOtherUser(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            Booked by
                                            {{
                                                $any(item.booking)
                                                    .booked_by_name ||
                                                    (
                                                        $any(item.booking)
                                                            .booked_by_email
                                                        | user
                                                        | async
                                                    )?.name ||
                                                    $any(item.booking)
                                                        .booked_by_email
                                            }}
                                        </div>
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            for
                                            {{ bookedForLabel(item.booking) }}
                                        </div>
                                    }
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [CommonModule, MatRippleModule, MatTooltipModule, UserPipe],
})
export class ScheduleDayViewComponent extends AsyncHandler implements OnInit {
    private _dialog = inject(MatDialog);
    private _state = inject(ScheduleStateService);
    private _org = inject(OrganisationService);

    public readonly date = input(Date.now());
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);
    public readonly loading = input(false);
    public readonly colors = BOOKING_TYPE_COLORS;
    private _changed = signal(0);

    private readonly scrollContainer =
        viewChild<ElementRef<HTMLDivElement>>('scrollContainer');
    private readonly currentTimeMarker =
        viewChild<ElementRef<HTMLDivElement>>('currentTimeMarker');

    constructor() {
        super();
        // Auto-scroll to current time when viewing today
        effect(() => {
            const position = this.currentTimePosition();
            const marker = this.currentTimeMarker()?.nativeElement;
            const container = this.scrollContainer()?.nativeElement;

            if (position !== null && marker && container) {
                // Wait a tick for the view to render
                setTimeout(() => {
                    marker.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }, 100);
            }
        });
    }

    public ngOnInit() {
        this.interval('time', () => this._changed.set(Date.now()), 10 * 1000);
    }

    // Configuration
    private readonly START_HOUR = 0; // Midnight
    private readonly END_HOUR = 23; // 11 PM
    private readonly HOUR_HEIGHT = 64; // pixels

    public readonly timeSlots = computed(() => {
        const slots: TimeSlot[] = [];
        for (let hour = this.START_HOUR; hour <= this.END_HOUR; hour++) {
            const date = setHours(setMinutes(new Date(), 0), hour);
            slots.push({
                hour,
                label: format(date, 'h a'),
            });
        }
        return slots;
    });

    public readonly gridHeight = computed(() => {
        return (this.END_HOUR - this.START_HOUR + 1) * this.HOUR_HEIGHT;
    });

    public readonly isToday = computed(() => {
        return isSameDay(this.date(), Date.now());
    });

    public readonly currentTimePosition = computed(() => {
        if (!this.isToday()) return null;
        this._changed();

        const now = Date.now();
        const dayStart = setHours(
            setMinutes(startOfDay(this.date()), 0),
            this.START_HOUR,
        ).valueOf();
        const dayEnd = setHours(
            setMinutes(startOfDay(this.date()), 0),
            this.END_HOUR + 1,
        ).valueOf();

        // Only show if current time is within visible range
        if (now < dayStart || now > dayEnd) return null;

        const totalMinutes = (dayEnd - dayStart) / (1000 * 60);
        const currentOffset = (now - dayStart) / (1000 * 60);
        const position = (currentOffset / totalMinutes) * 100;

        return position;
    });

    public readonly dayBookings = computed(() => {
        const targetDate = this.date();
        return this.bookings().filter((booking) =>
            isSameDay(booking.date, targetDate),
        );
    });

    public readonly positionedBookings = computed(() => {
        const bookings = this.dayBookings();
        if (!bookings.length) return [];

        // Sort bookings by start time, then by duration (longer first)
        const sorted = [...bookings].sort((a, b) => {
            if (a.date !== b.date) return a.date - b.date;
            return b.duration - a.duration;
        });

        // Calculate overlaps and positions
        const positioned: PositionedBooking[] = [];
        const columns: (Booking | CalendarEvent)[][] = [];

        for (const booking of sorted) {
            // Find the first column where this booking doesn't overlap
            let columnIndex = 0;
            let placed = false;

            while (!placed) {
                if (!columns[columnIndex]) {
                    columns[columnIndex] = [];
                }

                const hasOverlap = columns[columnIndex].some((existing) =>
                    this.checkOverlap(booking, existing),
                );

                if (!hasOverlap) {
                    columns[columnIndex].push(booking);
                    placed = true;
                } else {
                    columnIndex++;
                }
            }
        }

        // Calculate positions for each booking
        for (const booking of sorted) {
            // Find which column this booking is in
            let columnIndex = 0;
            for (let i = 0; i < columns.length; i++) {
                if (columns[i].includes(booking)) {
                    columnIndex = i;
                    break;
                }
            }

            // Find how many columns overlap with this booking
            let totalColumns = 1;
            for (let i = 0; i < columns.length; i++) {
                if (
                    columns[i].some(
                        (b) => this.checkOverlap(booking, b) || b === booking,
                    )
                ) {
                    totalColumns = Math.max(totalColumns, i + 1);
                }
            }

            const position = this.calculatePosition(
                booking,
                columnIndex,
                totalColumns,
            );
            positioned.push(position);
        }

        return positioned;
    });

    private checkOverlap(
        a: Booking | CalendarEvent,
        b: Booking | CalendarEvent,
    ): boolean {
        return a.date < b.date_end && a.date_end > b.date;
    }

    private calculatePosition(
        booking: Booking | CalendarEvent,
        column: number,
        totalColumns: number,
    ): PositionedBooking {
        const dayStart = setHours(
            setMinutes(startOfDay(this.date()), 0),
            this.START_HOUR,
        ).valueOf();
        const dayEnd = setHours(
            setMinutes(startOfDay(this.date()), 0),
            this.END_HOUR + 1,
        ).valueOf();
        const totalMinutes = (dayEnd - dayStart) / (1000 * 60);

        // Clamp booking times to visible range
        const bookingStart = Math.max(booking.date, dayStart);
        const bookingEnd = Math.min(booking.date_end, dayEnd);

        const startOffset = (bookingStart - dayStart) / (1000 * 60);
        const duration = (bookingEnd - bookingStart) / (1000 * 60);

        const top = (startOffset / totalMinutes) * 100;
        const height = Math.max((duration / totalMinutes) * 100, 1); // Minimum 1%

        // Calculate horizontal position with small gaps
        const gap = 0.5; // 0.5% gap between columns
        const availableWidth = 100 - gap * (totalColumns - 1);
        const columnWidth = availableWidth / totalColumns;
        const left = column * (columnWidth + gap);
        const width = columnWidth;

        return {
            booking,
            top,
            height,
            left,
            width,
            column,
            totalColumns,
        };
    }

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
