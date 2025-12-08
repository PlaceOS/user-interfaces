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
import { BookingDetailsModalComponent } from '@placeos/bookings';
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
import { format, isSameDay, setHours, setMinutes, startOfDay } from 'date-fns';
import { ScheduleStateService } from './schedule-state.service';

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
                        class="rounded-md border border-base-300 bg-base-100 px-2 py-1 text-sm text-base-content"
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
                                class="flex h-16 items-start justify-end text-xs text-base-content opacity-60"
                            >
                                <div class="relative -translate-y-1/2">
                                    {{ slot.label }}
                                </div>
                            </div>
                        }
                    </div>

                    <!-- Calendar grid -->
                    <div
                        class="relative flex-1 overflow-hidden rounded-xl border-x border-b border-base-300 bg-base-100"
                    >
                        <!-- Grid lines -->
                        <div class="absolute inset-0">
                            @for (slot of timeSlots(); track slot.hour) {
                                <div class="relative h-16">
                                    <div
                                        class="absolute inset-x-0 top-0 border-t border-base-300"
                                    ></div>
                                    <div
                                        class="absolute inset-x-0 top-8 border-t border-dashed border-base-300"
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
                                    class="-ml-1 h-2 w-2 rounded-full bg-error"
                                ></div>
                                <div
                                    class="flex-1 border-t-2 border-error"
                                ></div>
                            </div>
                        }

                        <!-- Bookings -->
                        <div class="relative" [style.height.px]="gridHeight()">
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
                                        colors[type(item.booking)][0]
                                    "
                                    [style.z-index]="10"
                                    (click)="viewBooking(item.booking)"
                                    [matTooltip]="
                                        item.booking.title +
                                        (location(item.booking)
                                            ? '
' + location(item.booking)
                                            : '') +
                                        '
' +
                                        (item.booking.user_name ||
                                            (item.booking.host | user | async)
                                                ?.name ||
                                            item.booking.host) +
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
                                        class="flex items-center space-x-1 truncate text-sm font-medium"
                                    >
                                        <div>{{ item.booking.title }}</div>
                                        @if (
                                            item.height <= 5 &&
                                            location(item.booking)
                                        ) {
                                            <div class="text-xs opacity-60">
                                                · {{ location(item.booking) }}
                                            </div>
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
                                    @if (item.height > 7 && item.booking.host) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{
                                                (
                                                    item.booking.host
                                                    | user
                                                    | async
                                                )?.name ||
                                                    item.booking.organiser
                                                        ?.name ||
                                                    item.booking.host
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 7 &&
                                        !item.booking.host &&
                                        item.booking.user_email !==
                                            item.booking.booked_by_email
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            Booked by
                                            {{
                                                item.booking.booked_by_name ||
                                                    (
                                                        item.booking
                                                            .booked_by_email
                                                        | user
                                                        | async
                                                    )?.name ||
                                                    item.booking.booked_by_email
                                            }}
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

    public location(booking: Booking | CalendarEvent): string {
        let location = '';
        let level_name = '';

        if (booking instanceof Booking) {
            location = booking.location || booking.asset_name || '';
            const level = this._org.levelWithID(booking.zones);
            level_name = level?.display_name || level?.name || '';
        } else {
            location =
                booking.location ||
                booking.space?.display_name ||
                booking.space?.name ||
                (booking.system as any)?.name ||
                '';
            level_name =
                booking.space?.level?.display_name ||
                booking.space?.level?.name ||
                (booking.system as any)?.zones
                    ? this._org.levelWithID(
                          (booking.system as any)?.zones || [],
                      )?.display_name ||
                      this._org.levelWithID(
                          (booking.system as any)?.zones || [],
                      )?.name
                    : '';
        }

        if (location && level_name) {
            return `${location} - ${level_name}`;
        }
        return location || level_name || '';
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
            };
            this._dialog.open(view_component, { data });
        }
    }
}
