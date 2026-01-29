import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
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
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    addDays,
    addWeeks,
    endOfWeek,
    format,
    getUnixTime,
    isBefore,
    isSameDay,
    startOfDay,
    startOfWeek,
} from 'date-fns';
import { catchError, of, shareReplay, switchMap, tap } from 'rxjs';
import { ScheduleStateService } from '../schedule/schedule-state.service';

interface WeekDay {
    id: string;
    date: number;
    day_name: string;
    day_number: number;
    is_past: boolean;
    is_today: boolean;
    is_weekend: boolean;
}

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
                        [disabled]="!is_current_week()"
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
                            [class.opacity-40]="day.is_past"
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
                            [class.opacity-40]="day.is_past"
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
                            } @else if (!day.is_past && !day.is_weekend) {
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
                                [class.opacity-40]="day.is_past"
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
                                [class.opacity-40]="day.is_past"
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
                                } @else if (!day.is_past) {
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
                                [class.opacity-40]="day.is_past"
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
                                [class.opacity-40]="day.is_past"
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

    public readonly loading = signal(false);
    public readonly selected_date = signal(Date.now());

    public readonly weekdays = computed(() => {
        const days: WeekDay[] = [];
        const week_start = startOfWeek(this.selected_date(), {
            weekStartsOn: this._offset_weekday,
        });
        for (let i = 0; i < 7; i++) {
            const date = addDays(week_start, i);
            const day_of_week = date.getDay();
            days.push({
                id: format(date, 'yyyy-MM-dd'),
                date: date.valueOf(),
                day_name: format(date, 'EEE'),
                day_number: date.getDate(),
                is_past: isBefore(date, startOfDay(Date.now())),
                is_today: isSameDay(date, Date.now()),
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
            weekStartsOn: this._offset_weekday,
        });
        const week_end = endOfWeek(this.selected_date(), {
            weekStartsOn: this._offset_weekday,
        });
        return `${format(week_start, 'dd MMM')} - ${format(week_end, 'dd MMM yyyy')}`;
    });

    public readonly is_current_week = computed(() => {
        const today = Date.now();
        const current_week_start = startOfWeek(today, {
            weekStartsOn: this._offset_weekday,
        });
        const selected_week_start = startOfWeek(this.selected_date(), {
            weekStartsOn: this._offset_weekday,
        });
        return isSameDay(current_week_start, selected_week_start);
    });

    private readonly _desk_bookings$ = toObservable(this.selected_date).pipe(
        tap(() => this.loading.set(true)),
        switchMap((date) => {
            const week_start = startOfWeek(date, {
                weekStartsOn: this._offset_weekday,
            });
            const week_end = endOfWeek(date, {
                weekStartsOn: this._offset_weekday,
            });
            return queryBookings({
                period_start: getUnixTime(week_start),
                period_end: getUnixTime(week_end),
                type: 'desk',
                include_checked_out: true,
            }).pipe(catchError(() => of([])));
        }),
        tap(() => this.loading.set(false)),
        shareReplay(1),
    );

    public readonly desk_bookings = toSignal(this._desk_bookings$, {
        initialValue: [],
    });

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

    private get _offset_weekday(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
        return this._settings.get('app.week_start') || 0;
    }

    ngOnInit(): void {
        // Start polling for updates
        this.interval(
            'poll_bookings',
            () => this.selected_date.set(this.selected_date()),
            2 * 60 * 1000,
        );
    }

    public goToToday(): void {
        this.selected_date.set(Date.now());
    }

    public goToNextMonday(): void {
        const today = new Date();
        const day_of_week = today.getDay();
        // Calculate days until next Monday (day 1)
        const days_until_monday = day_of_week === 0 ? 1 : 8 - day_of_week;
        this.selected_date.set(addDays(today, days_until_monday).valueOf());
    }

    public previousWeek(): void {
        this.selected_date.set(addWeeks(this.selected_date(), -1).valueOf());
    }

    public nextWeek(): void {
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
                remove_fn: (b) => {
                    this._schedule.remove(b);
                    this.selected_date.set(Date.now());
                },
                end_fn: (b) => this._schedule.end(b),
            },
        });
    }

    public bookDesk(date: number): void {
        this._booking_form.newForm(
            'desk',
            new Booking({ date, booking_type: 'desk' }),
        );
        this._router.navigate(['/book', 'desk']);
        this.timeout(
            'set_date',
            () => this._booking_form.form.patchValue({ date }),
            100,
        );
    }
}
