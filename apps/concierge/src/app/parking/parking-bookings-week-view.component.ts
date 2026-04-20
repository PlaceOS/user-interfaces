import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ParkingSpacePipe } from '@placeos/assets';
import { AsyncHandler, Booking, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import { ParkingOptions, ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-bookings-week-view',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!loading().includes('[BOOKINGS]')"
            class="sticky left-0 w-full"
        />
        <div class="flex h-full min-h-0 flex-1">
            @for (day of days(); track day) {
                <div
                    class="border-base-200 flex min-w-36 flex-1 flex-col border-r last:border-r-0"
                >
                    <div
                        class="border-base-200 bg-base-100 flex h-14 flex-col items-center justify-center border-b px-2 text-center"
                    >
                        <div class="text-sm font-medium">
                            {{ day | date: 'EEE, MMM d' }}
                        </div>
                        <div
                            class="text-info text-xs"
                            [class.invisible]="!isToday(day)"
                        >
                            {{ 'COMMON.TODAY' | translate }}
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col gap-1 overflow-auto p-2">
                        @for (
                            booking of grouped_bookings()[day] || [];
                            track booking.id
                        ) {
                            <div
                                class="hover:bg-base-200 flex flex-col rounded-sm border p-2 text-xs"
                                [class.border-success]="
                                    booking.status === 'approved'
                                "
                                [class.border-info]="
                                    booking.status === 'tentative' &&
                                    isVisibleWaitlisted(booking)
                                "
                                [class.border-warning]="
                                    booking.status === 'tentative' &&
                                    !isVisibleWaitlisted(booking)
                                "
                                [class.border-error]="
                                    booking.status === 'declined'
                                "
                                [class.border-base-300]="
                                    booking.status === 'ended'
                                "
                                [class.opacity-50]="booking.status === 'ended'"
                            >
                                <div class="flex items-center gap-1">
                                    @if (booking.checked_in) {
                                        <div
                                            class="bg-success text-success-content flex h-5 w-5 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-xs">done</icon>
                                        </div>
                                    } @else if (booking.checked_out_at) {
                                        <div
                                            class="bg-base-300 text-base-100 flex h-5 w-5 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-xs">done</icon>
                                        </div>
                                    } @else {
                                        <div
                                            class="bg-warning text-warning-content flex h-5 w-5 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-xs"
                                                >question_mark</icon
                                            >
                                        </div>
                                    }
                                    <span class="flex-1 truncate font-medium">
                                        {{
                                            booking.user_name ||
                                                booking.user_email
                                        }}
                                    </span>
                                </div>
                                <div class="mt-1 opacity-60">
                                    {{
                                        booking.all_day ||
                                        booking.duration > 12 * 60
                                            ? ('COMMON.ALL_DAY' | translate)
                                            : (booking.date
                                                  | date: time_format) +
                                              ' - ' +
                                              (booking.date_end
                                                  | date: time_format)
                                    }}
                                </div>
                                @let bay_name =
                                    booking.asset_id | parkingSpace | async;
                                @if (bay_name && !isRequest(booking)) {
                                    <div class="mt-0.5 opacity-40">
                                        {{
                                            bay_name?.identifier ||
                                                booking.asset_id
                                        }}
                                    </div>
                                }
                                @if (
                                    booking.extension_data?.plate_number;
                                    as plate
                                ) {
                                    <div
                                        class="mt-0.5 font-mono uppercase opacity-40"
                                    >
                                        {{ plate }}
                                    </div>
                                }
                                <div class="mt-1 flex items-center gap-1">
                                    <button
                                        matRipple
                                        class="h-6 flex-1 rounded-full border-none text-xs"
                                        [class.text-success-content]="
                                            booking.status === 'approved'
                                        "
                                        [class.bg-success]="
                                            booking.status === 'approved'
                                        "
                                        [class.text-error-content]="
                                            booking.status === 'declined'
                                        "
                                        [class.bg-error]="
                                            booking.status === 'declined'
                                        "
                                        [class.text-warning-content]="
                                            booking.status === 'tentative' &&
                                            !isVisibleWaitlisted(booking)
                                        "
                                        [class.bg-warning]="
                                            booking.status === 'tentative' &&
                                            !isVisibleWaitlisted(booking)
                                        "
                                        [class.text-info-content]="
                                            booking.status === 'tentative' &&
                                            isVisibleWaitlisted(booking)
                                        "
                                        [class.bg-info]="
                                            booking.status === 'tentative' &&
                                            isVisibleWaitlisted(booking)
                                        "
                                        [class.text-neutral-content]="
                                            booking.status === 'ended'
                                        "
                                        [class.bg-neutral]="
                                            booking.status === 'ended'
                                        "
                                        [class.opacity-30]="
                                            isStatusActionDisabled(booking)
                                        "
                                        [matMenuTriggerFor]="menu"
                                        [disabled]="
                                            isStatusActionDisabled(booking)
                                        "
                                    >
                                        {{
                                            (booking.status === 'ended'
                                                ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                                : booking.status === 'approved'
                                                  ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                                  : booking.status ===
                                                      'declined'
                                                    ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                                    : isVisibleWaitlisted(
                                                            booking
                                                        )
                                                      ? 'APP.CONCIERGE.PARKING_WAITLISTED'
                                                      : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                            ) | translate
                                        }}
                                    </button>
                                    <mat-menu #menu="matMenu">
                                        <button
                                            mat-menu-item
                                            [disabled]="
                                                !canApproveBooking(booking)
                                            "
                                            (click)="approve(booking)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >event_available</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'APP.CONCIERGE.PARKING_APPROVE'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            mat-menu-item
                                            [disabled]="
                                                !canApproveBooking(booking)
                                            "
                                            (click)="reject(booking)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >event_busy</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'APP.CONCIERGE.PARKING_DECLINE'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                    </mat-menu>
                                    @if (isRequest(booking)) {
                                        @if (!hide_assign_space) {
                                            <button
                                                icon
                                                matRipple
                                                class="h-6 w-6"
                                                [disabled]="
                                                    booking.checked_in ||
                                                    booking.state ===
                                                        'in_progress' ||
                                                    booking.status === 'ended'
                                                "
                                                [matTooltip]="
                                                    'APP.CONCIERGE.PARKING_ASSIGN_SPACE'
                                                        | translate
                                                "
                                                (click)="assignSpace(booking)"
                                            >
                                                <icon class="text-base"
                                                    >add_location</icon
                                                >
                                            </button>
                                        }
                                    }
                                    @if (can_edit()) {
                                        <button
                                            icon
                                            matRipple
                                            class="h-6 w-6"
                                            [disabled]="
                                                booking.checked_in ||
                                                booking.state ===
                                                    'in_progress' ||
                                                booking.status === 'ended' ||
                                                booking.instance
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_EDIT'
                                                    | translate
                                            "
                                            (click)="editReservation(booking)"
                                        >
                                            <icon class="text-base">edit</icon>
                                        </button>
                                    }
                                </div>
                            </div>
                        }
                        @if (!grouped_bookings()[day]?.length) {
                            <div class="p-4 text-center text-xs opacity-30">
                                {{
                                    (isRequestFilter(options().request_filter)
                                        ? 'APP.CONCIERGE.PARKING_REQUESTS_EMPTY'
                                        : 'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY'
                                    ) | translate
                                }}
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow: auto;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatProgressBarModule,
        MatRippleModule,
        MatMenuModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        ParkingSpacePipe,
    ],
})
export class ParkingBookingsWeekViewComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(ParkingStateService);
    private _settings = inject(SettingsService);
    private _date_pipe = new DatePipe('en');

    private readonly _default_options: ParkingOptions = {
        date: Date.now(),
        search: '',
        zones: [],
        period: 'day',
        request_filter: 'all',
    };

    public readonly loading = toSignal(this._state.loading, {
        initialValue: [],
    });
    public readonly options = toSignal(this._state.options, {
        initialValue: this._default_options,
    });
    public readonly bookings = toSignal(this._state.bookings, {
        initialValue: [],
    });

    public readonly days = computed(() => {
        const options = this.options();
        const week_start = this._state.week_start;
        const start = startOfWeek(options.date, {
            weekStartsOn: week_start,
        });
        return Array.from({ length: 7 }, (_, i) => addDays(start, i).valueOf());
    });

    public readonly grouped_bookings = computed<Record<number, Booking[]>>(
        () => {
            const days = this.days();
            const { search, request_filter } = this.options();
            const filtered = this._state.filterEventList(
                this.bookings(),
                request_filter,
            );
            const list = this._state.filterEventSearch(filtered, search);
            const grouped: Record<number, Booking[]> = {};
            for (const day of days) {
                grouped[day] = list
                    .filter((b) => {
                        const booking_date = this._date_pipe.transform(
                            b.date,
                            'yyyy-MM-dd',
                        );
                        const day_date = this._date_pipe.transform(
                            day,
                            'yyyy-MM-dd',
                        );
                        return booking_date === day_date;
                    })
                    .sort((a, b) => a.date - b.date);
            }
            return grouped;
        },
    );

    public readonly reject = (e: Booking) => this._state.rejectBooking(e);
    public readonly approve = (e: Booking) => this._state.approveBooking(e);
    public readonly editReservation = (e: Booking) =>
        this._state.editReservation(e);
    public readonly assignSpace = (e: Booking) => this._state.assignSpace(e);
    public readonly isRequest = (e: Booking) => this._state.isRequest(e);
    public readonly isWaitlisted = (e: Booking) => this._state.isWaitlisted(e);
    public readonly canApproveBooking = (e: Booking) =>
        this._state.canApproveBooking(e);
    public readonly isStatusActionDisabled = (e: Booking) =>
        e?.status === 'ended' || !this.canApproveBooking(e);

    public readonly can_edit = this._settings.signal(
        'app.parking.allow_editing',
        true,
    );

    public get time_format() {
        return this._settings.time_format;
    }

    public get hide_assign_space() {
        return !!this._settings.get('app.parking.hide_assign_space');
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    public isVisibleWaitlisted(booking: Booking) {
        return this.show_waitlist && this.isWaitlisted(booking);
    }

    public isRequestFilter(filter_type?: string) {
        return ['manual', 'pending', 'requests', 'waitlist'].includes(
            filter_type || '',
        );
    }

    public isToday(date: number) {
        return isSameDay(date, Date.now());
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
    }
}
