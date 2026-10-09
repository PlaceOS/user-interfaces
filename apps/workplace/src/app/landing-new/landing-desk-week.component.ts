import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnDestroy,
    OnInit,
    resource,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import {
    BookingDetailsModalComponent,
    BookingFormService,
    queryBookings,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    i18n,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    addDays,
    addWeeks,
    endOfDay,
    endOfWeek,
    format,
    getUnixTime,
    isBefore,
    isSameDay,
    startOfDay,
    startOfWeek,
} from 'date-fns';
import { ScheduleStateService } from '../schedule/schedule-state.service';

interface WeekDay {
    id: string;
    date: number;
    day_name: string;
    day_number: number;
    is_past: boolean;
    is_bookable: boolean;
    is_today: boolean;
    is_weekend: boolean;
}

type WeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

@Component({
    selector: 'landing-desk-week',
    template: `
        <div
            class="border-base-300 bg-base-100 space-y-2 rounded-lg border p-4"
        >
            <div
                class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
            >
                <div>
                    <h3 class="px-2 text-lg font-medium">
                        {{ 'APP.WORKPLACE.DESK_WEEK_TITLE' | translate }}
                    </h3>
                    <p class="px-2 text-sm opacity-60">{{ week_range() }}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button
                        btn
                        matRipple
                        class="h-8 text-sm"
                        [class.inverse]="!is_current_week()"
                        [disabled]="is_current_week()"
                        (click)="goToToday()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse h-8 text-sm"
                        [disabled]="!is_current_week() || !can_go_next_monday()"
                        (click)="goToNextMonday()"
                    >
                        {{ 'APP.WORKPLACE.DESK_WEEK_NEXT_MONDAY' | translate }}
                    </button>
                    <div class="flex items-center">
                        <button
                            icon
                            matRipple
                            class="hover:bg-base-200 h-12 w-12 rounded-lg"
                            [matTooltip]="
                                'APP.WORKPLACE.DESK_WEEK_PREVIOUS' | translate
                            "
                            [disabled]="!can_go_previous_week()"
                            (click)="previousWeek()"
                        >
                            <icon class="text-2xl">chevron_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="hover:bg-base-200 h-12 w-12 rounded-lg"
                            [matTooltip]="
                                'APP.WORKPLACE.DESK_WEEK_NEXT' | translate
                            "
                            [disabled]="!can_go_next_week()"
                            (click)="nextWeek()"
                        >
                            <icon class="text-2xl">chevron_right</icon>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile: All days stacked -->
            <div
                class="flex flex-col gap-2 pt-2 md:hidden"
                [class.opacity-60]="loading()"
            >
                @for (day of weekdays(); track day.id) {
                    <div class="flex flex-col">
                        <div
                            class="mb-1 flex items-center justify-center space-x-2 text-sm"
                            [class.opacity-40]="!day.is_bookable"
                        >
                            <div class="flex items-center space-x-1">
                                <icon
                                    class="text-base"
                                    [class.opacity-40]="day.is_weekend"
                                    >{{
                                        day.is_weekend ? 'star' : 'event_note'
                                    }}</icon
                                >
                                <span class="font-medium uppercase">{{
                                    day.day_name
                                }}</span>
                            </div>
                            <span
                                class="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                                [class.bg-info]="day.is_today"
                                [class.text-info-content]="day.is_today"
                            >
                                {{ day.day_number }}
                            </span>
                        </div>
                        <div
                            class="border-base-300 min-h-16 flex-1 rounded-lg border p-2"
                            [class.opacity-40]="!day.is_bookable"
                            [class.bg-base-200]="day.is_weekend"
                        >
                            @if (bookings_by_date()[day.id]?.length; as count) {
                                @for (
                                    booking of bookings_by_date()[day.id];
                                    track booking.id
                                ) {
                                    <button
                                        matRipple
                                        class="bg-secondary text-secondary-content mb-2 w-full rounded-lg p-2 text-left last:mb-0"
                                        (click)="viewBooking(booking)"
                                        [matTooltip]="bookingTooltip(booking)"
                                    >
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <icon class="text-sm"
                                                >location_on</icon
                                            >
                                            <span class="truncate text-xs">{{
                                                buildingName(booking)
                                            }}</span>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <icon class="text-sm">desk</icon>
                                            <span class="truncate text-xs">{{
                                                deskName(booking)
                                            }}</span>
                                        </div>
                                    </button>
                                }
                            } @else if (day.is_bookable) {
                                <button
                                    btn
                                    matRipple
                                    class="inverse border-base-300 h-full w-full space-x-2 border-2 border-dashed"
                                    (click)="bookDesk(day.date)"
                                >
                                    <icon class="text-xl opacity-60"
                                        >add_circle_outline</icon
                                    >
                                    <span class="text-xs opacity-60">{{
                                        'COMMON.BOOK_DESK' | translate
                                    }}</span>
                                </button>
                            } @else {
                                <div
                                    class="flex h-full min-h-10 w-full items-center justify-center"
                                >
                                    <icon class="text-xl opacity-30">desk</icon>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            <!-- Desktop: 6 columns with stacked weekend -->
            <div
                class="hidden gap-2 pt-2 md:grid md:grid-cols-6"
                [class.opacity-60]="loading()"
            >
                <!-- Weekdays (Mon-Fri) -->
                @for (day of weekdays(); track day.id) {
                    @if (!day.is_weekend) {
                        <div class="flex flex-col">
                            <div
                                class="mb-1 flex items-center justify-center space-x-2 text-sm"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                <div class="flex items-center space-x-1">
                                    <icon class="text-base">event_note</icon>
                                    <span class="font-medium uppercase">{{
                                        day.day_name
                                    }}</span>
                                </div>
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                                    [class.bg-info]="day.is_today"
                                    [class.text-info-content]="day.is_today"
                                >
                                    {{ day.day_number }}
                                </span>
                            </div>
                            <div
                                class="border-base-300 flex min-h-24 flex-1 flex-col space-y-2 rounded-lg border p-2"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                @if (
                                    bookings_by_date()[day.id]?.length;
                                    as count
                                ) {
                                    @for (
                                        booking of bookings_by_date()[day.id];
                                        track booking.id
                                    ) {
                                        <button
                                            matRipple
                                            class="bg-secondary text-secondary-content mb-2 w-full rounded-lg p-2 text-left last:mb-0"
                                            (click)="viewBooking(booking)"
                                            [matTooltip]="
                                                bookingTooltip(booking)
                                            "
                                        >
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >location_on</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        buildingName(booking)
                                                    }}</span
                                                >
                                            </div>
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >desk</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        deskName(booking)
                                                    }}</span
                                                >
                                            </div>
                                        </button>
                                    }
                                } @else if (day.is_bookable) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse border-base-300 h-full w-full flex-col space-y-1 border-2 border-dashed"
                                        (click)="bookDesk(day.date)"
                                    >
                                        <icon class="text-xl opacity-60"
                                            >add_circle_outline</icon
                                        >
                                        <span class="text-xs opacity-60">{{
                                            'COMMON.BOOK_DESK' | translate
                                        }}</span>
                                    </button>
                                } @else {
                                    <div
                                        class="flex h-full w-full flex-col items-center justify-center"
                                    >
                                        <icon class="text-xl opacity-30"
                                            >desk</icon
                                        >
                                    </div>
                                }
                            </div>
                        </div>
                    }
                }
                <!-- Weekend (Sat & Sun stacked) -->
                <div class="flex flex-col space-y-1">
                    @for (day of weekend_days(); track day.id) {
                        <div class="flex flex-1 flex-col">
                            <div
                                class="mb-1 flex items-center justify-center space-x-2 text-sm"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                <div class="flex items-center space-x-1">
                                    <icon class="text-base opacity-40"
                                        >sunny</icon
                                    >
                                    <span class="font-medium uppercase">{{
                                        day.day_name
                                    }}</span>
                                </div>
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                                    [class.bg-info]="day.is_today"
                                    [class.text-info-content]="day.is_today"
                                >
                                    {{ day.day_number }}
                                </span>
                            </div>
                            <div
                                class="border-base-300 bg-base-200 flex min-h-12 flex-1 flex-col space-y-2 rounded-lg border p-2"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                @if (
                                    bookings_by_date()[day.id]?.length;
                                    as count
                                ) {
                                    @for (
                                        booking of bookings_by_date()[day.id];
                                        track booking.id
                                    ) {
                                        <button
                                            matRipple
                                            class="bg-secondary text-secondary-content mb-2 w-full rounded-lg p-2 text-left last:mb-0"
                                            (click)="viewBooking(booking)"
                                            [matTooltip]="
                                                bookingTooltip(booking)
                                            "
                                        >
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >location_on</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        buildingName(booking)
                                                    }}</span
                                                >
                                            </div>
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >desk</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        deskName(booking)
                                                    }}</span
                                                >
                                            </div>
                                        </button>
                                    }
                                } @else if (day.is_bookable) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse border-base-300 h-full w-full gap-2 border-2 border-dashed px-0"
                                        (click)="bookDesk(day.date)"
                                    >
                                        <icon class="text-xl opacity-60"
                                            >add_circle_outline</icon
                                        >
                                        <span class="pr-2 text-xs opacity-60">{{
                                            'COMMON.BOOK_DESK' | translate
                                        }}</span>
                                    </button>
                                } @else {
                                    <div
                                        class="flex h-full w-full flex-col items-center justify-center"
                                    >
                                        <icon class="text-xl opacity-30"
                                            >desk</icon
                                        >
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class LandingDeskWeekComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _booking_form = inject(BookingFormService);
    private _schedule = inject(ScheduleStateService);

    public readonly selected_date = signal(Date.now());
    public readonly offset_weekday = settingSignal<WeekdayIndex>(
        'week_start',
        0,
    );
    public readonly available_days = settingSignal(
        'desks.available_period',
        90,
    );
    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
    );

    public readonly weekdays = computed(() => {
        const days: WeekDay[] = [];
        const week_start = startOfWeek(this.selected_date(), {
            weekStartsOn: this.offset_weekday(),
        });
        const today = Date.now();
        const today_start = startOfDay(today);
        const end_date = this.end_date();
        for (let i = 0; i < 7; i++) {
            const date = addDays(week_start, i);
            const date_value = date.valueOf();
            const day_of_week = date.getDay();
            const is_past = isBefore(date, today_start);
            days.push({
                id: format(date, 'yyyy-MM-dd'),
                date: date_value,
                day_name: format(date, 'EEE'),
                day_number: date.getDate(),
                is_past,
                is_bookable: !is_past && date_value <= end_date,
                is_today: isSameDay(date, today),
                is_weekend: day_of_week === 0 || day_of_week === 6,
            });
        }
        return days;
    });

    public readonly weekend_days = computed(() =>
        this.weekdays().filter((day) => day.is_weekend),
    );

    public readonly week_range = computed(() => {
        const week_start = startOfWeek(this.selected_date(), {
            weekStartsOn: this.offset_weekday(),
        });
        const week_end = endOfWeek(this.selected_date(), {
            weekStartsOn: this.offset_weekday(),
        });
        return `${format(week_start, 'dd MMM')} - ${format(week_end, 'dd MMM yyyy')}`;
    });

    public readonly is_current_week = computed(() => {
        const today = Date.now();
        const current_week_start = startOfWeek(today, {
            weekStartsOn: this.offset_weekday(),
        });
        const selected_week_start = startOfWeek(this.selected_date(), {
            weekStartsOn: this.offset_weekday(),
        });
        return isSameDay(current_week_start, selected_week_start);
    });
    public readonly can_go_previous_week = computed(() =>
        this._weekHasBookableDay(addWeeks(this.selected_date(), -1).valueOf()),
    );
    public readonly can_go_next_week = computed(() =>
        this._weekHasBookableDay(addWeeks(this.selected_date(), 1).valueOf()),
    );
    public readonly can_go_next_monday = computed(() =>
        this._weekHasBookableDay(this._nextMonday().valueOf()),
    );

    private readonly _desk_bookings_resource = resource({
        params: () => ({
            date: this.selected_date(),
            week_start: this.offset_weekday(),
        }),
        loader: ({ params: { date, week_start } }) => {
            const start = startOfWeek(date, { weekStartsOn: week_start });
            const end = endOfWeek(date, { weekStartsOn: week_start });
            return queryBookings({
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                type: 'desk',
                include_checked_out: true,
            }).catch(() => [] as Booking[]);
        },
    });

    public readonly desk_bookings = computed(
        () => this._desk_bookings_resource.value() ?? ([] as Booking[]),
    );
    public readonly loading = computed(() =>
        this._desk_bookings_resource.isLoading(),
    );

    public readonly bookings_by_date = computed(() => {
        const bookings = this.desk_bookings();
        const date_map: Record<string, Booking[]> = {};
        for (const booking of bookings || []) {
            const date_key = format(booking.date, 'yyyy-MM-dd');
            if (!date_map[date_key]) date_map[date_key] = [];
            date_map[date_key].push(booking);
        }
        return date_map;
    });

    ngOnInit(): void {
        // Start polling for updates
        this.interval(
            'poll_bookings',
            () => this._desk_bookings_resource.reload(),
            2 * 60 * 1000,
        );
    }

    public goToToday(): void {
        this.selected_date.set(Date.now());
    }

    public goToNextMonday(): void {
        if (!this.can_go_next_monday()) return;
        this.selected_date.set(this._nextMonday().valueOf());
    }

    public previousWeek(): void {
        if (!this.can_go_previous_week()) return;
        this.selected_date.set(addWeeks(this.selected_date(), -1).valueOf());
    }

    public nextWeek(): void {
        if (!this.can_go_next_week()) return;
        this.selected_date.set(addWeeks(this.selected_date(), 1).valueOf());
    }

    public buildingName(booking: Booking): string {
        const level = this._org.levelWithID(booking.zones);
        const building = level
            ? this._org.buildings.find((b) => b.id === level.parent_id)
            : null;
        return (
            building?.display_name ||
            building?.name ||
            i18n('COMMON.WORK_OFFICE')
        );
    }

    public deskName(booking: Booking): string {
        return booking.asset_name || booking.description || i18n('COMMON.DESK');
    }

    public bookingTooltip(booking: Booking): string {
        const location = this.buildingName(booking);
        const desk = this.deskName(booking);
        const time = booking.all_day
            ? i18n('COMMON.ALL_DAY')
            : `${format(booking.date, 'h:mm a')} - ${format(booking.date_end, 'h:mm a')}`;
        return `${desk}\n${location}\n${time}`;
    }

    public viewBooking(booking: Booking): void {
        this._dialog.open(BookingDetailsModalComponent, {
            data: {
                booking,
                edit_fn: (b) => this._schedule.editBooking(b),
                remove_fn: async (b, s) => {
                    await this._schedule.remove(b, s);
                    this.selected_date.set(Date.now());
                    this._desk_bookings_resource.reload();
                },
                end_fn: (b) => this._schedule.end(b),
            },
        });
    }

    public bookDesk(date: number): void {
        if (date > this.end_date()) return;
        // Navigate first, then prepare the form. The desk flow page resets any
        // unsaved form in its ngOnInit, so populating beforehand would be wiped.
        // A native setTimeout is used (not AsyncHandler.timeout) because this
        // component is destroyed during navigation, which would cancel it.
        this._router.navigate(['/book', 'desk', 'form']);
        setTimeout(
            () =>
                this._booking_form.newForm(
                    'desk',
                    new Booking({ date, booking_type: 'desk' }),
                ),
            300,
        );
    }

    private _weekHasBookableDay(date: number): boolean {
        const week_start = startOfWeek(date, {
            weekStartsOn: this.offset_weekday(),
        }).valueOf();
        const week_end = endOfWeek(date, {
            weekStartsOn: this.offset_weekday(),
        }).valueOf();
        return (
            week_end >= startOfDay(Date.now()).valueOf() &&
            week_start <= this.end_date()
        );
    }

    private _nextMonday(): Date {
        const today = new Date();
        const day_of_week = today.getDay();
        const days_until_monday = day_of_week === 0 ? 1 : 8 - day_of_week;
        return addDays(today, days_until_monday);
    }
}
