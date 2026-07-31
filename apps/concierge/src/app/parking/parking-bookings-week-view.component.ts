import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ParkingSpacePipe } from '@placeos/assets';
import {
    AsyncHandler,
    Booking,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import { ParkingStateService } from './parking-state.service';
import {
    isParkingAllDayBooking,
    parkingRequestStatusLabel,
    parkingRequestStatusTone,
} from './parking.utilities';

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
                            {{ day | date: 'EEE, MMM d' : timezone }}
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
                                    booking.status === 'approved' &&
                                    !isAssignedBooking(booking) &&
                                    !isCancelledBooking(booking)
                                "
                                [class.border-secondary]="
                                    isAssignedBooking(booking)
                                "
                                [class.border-error]="
                                    (isCancelledBooking(booking) ||
                                        booking.status === 'declined') &&
                                    !isAssignedBooking(booking)
                                "
                                [class.border-info]="
                                    statusTone(booking) === 'info'
                                "
                                [class.border-approval]="
                                    statusTone(booking) === 'approval'
                                "
                                [class.border-warning]="
                                    statusTone(booking) === 'warning'
                                "
                                [class.border-base-300]="
                                    booking.status === 'ended' &&
                                    !isAssignedBooking(booking) &&
                                    !isCancelledBooking(booking)
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
                                        ></div>
                                    }
                                    <span class="flex-1 truncate font-medium">
                                        {{
                                            booking.user_name ||
                                                booking.user_email
                                        }}
                                    </span>
                                </div>
                                <div
                                    class="mt-1 opacity-60"
                                    data-testid="parking-booking-time"
                                >
                                    @if (isAllDayBooking(booking)) {
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    } @else {
                                        {{
                                            booking.date
                                                | date: time_format : timezone
                                        }}
                                        -
                                        {{
                                            booking.date_end
                                                | date: time_format : timezone
                                        }}
                                    }
                                </div>
                                @let bay_name =
                                    booking.asset_id | parkingSpace | async;
                                @if (
                                    bay_name &&
                                    !isRequest(booking) &&
                                    !hide_bay_number_column()
                                ) {
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
                                @if (matchedUserGroups(booking); as groups) {
                                    <div class="mt-0.5 opacity-40">
                                        {{ groups }}
                                    </div>
                                }
                                <button
                                    matRipple
                                    class="my-1 min-h-6 w-full flex-1 rounded-full border-none text-left text-xs"
                                    [class.text-success-content]="
                                        booking.status === 'approved' &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [class.bg-success]="
                                        booking.status === 'approved' &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [class.text-secondary-content!]="
                                        isAssignedBooking(booking)
                                    "
                                    [class.bg-secondary!]="
                                        isAssignedBooking(booking)
                                    "
                                    [class.text-error-content!]="
                                        isCancelledBooking(booking) &&
                                        !isAssignedBooking(booking)
                                    "
                                    [class.bg-error!]="
                                        isCancelledBooking(booking) &&
                                        !isAssignedBooking(booking)
                                    "
                                    [class.text-error-content]="
                                        booking.status === 'declined' &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [class.bg-error]="
                                        booking.status === 'declined' &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [class.text-warning-content]="
                                        statusTone(booking) === 'warning'
                                    "
                                    [class.bg-warning]="
                                        statusTone(booking) === 'warning'
                                    "
                                    [class.text-approval-content]="
                                        statusTone(booking) === 'approval'
                                    "
                                    [class.bg-approval]="
                                        statusTone(booking) === 'approval'
                                    "
                                    [class.text-info-content]="
                                        statusTone(booking) === 'info'
                                    "
                                    [class.bg-info]="
                                        statusTone(booking) === 'info'
                                    "
                                    [class.text-neutral-content]="
                                        booking.status === 'ended' &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [class.bg-neutral]="
                                        booking.status === 'ended' &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [class.opacity-30]="
                                        isStatusActionDisabled(booking) &&
                                        !isAssignedBooking(booking) &&
                                        !isCancelledBooking(booking)
                                    "
                                    [matMenuTriggerFor]="menu"
                                    [disabled]="isStatusActionDisabled(booking)"
                                >
                                    <div
                                        class="flex items-center"
                                        [class.justify-center]="
                                            isStatusActionDisabled(booking)
                                        "
                                    >
                                        <div class="px-4">
                                            {{
                                                statusLabel(booking) | translate
                                            }}
                                        </div>
                                        @if (!isStatusActionDisabled(booking)) {
                                            <div class="flex-1"></div>
                                            <icon class="mx-1 text-xl"
                                                >arrow_drop_down</icon
                                            >
                                        }
                                    </div>
                                </button>
                                <div class="mt-1 flex items-center gap-1">
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
                                                default
                                                matRipple
                                                class="text-xs"
                                                [disabled]="
                                                    booking.checked_in ||
                                                    booking.state ===
                                                        'in_progress' ||
                                                    booking.status ===
                                                        'ended' ||
                                                    isCancelledBooking(booking)
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
                                            default
                                            matRipple
                                            class="text-xs"
                                            [disabled]="
                                                booking.checked_in ||
                                                booking.state ===
                                                    'in_progress' ||
                                                booking.status === 'ended' ||
                                                isCancelledBooking(booking) ||
                                                booking.instance
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_EDIT'
                                                    | translate
                                            "
                                            (click)="editReservation(booking)"
                                        >
                                            <icon>edit</icon>
                                        </button>
                                    }
                                    @if (can_delete()) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            class="text-xs"
                                            [disabled]="
                                                booking.checked_in ||
                                                booking.state ===
                                                    'in_progress' ||
                                                booking.status === 'ended' ||
                                                isCancelledBooking(booking)
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.BOOKING_REMOVE_TITLE'
                                                    | translate
                                            "
                                            (click)="removeBooking(booking)"
                                        >
                                            <icon>delete</icon>
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
export class ParkingBookingsWeekViewComponent extends AsyncHandler {
    private _state = inject(ParkingStateService);
    private _settings = inject(SettingsService);
    private _date_pipe = new DatePipe('en');

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;
    public readonly bookings = this._state.bookings;

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
                            this.timezone,
                        );
                        const day_date = this._date_pipe.transform(
                            day,
                            'yyyy-MM-dd',
                            this.timezone,
                        );
                        return booking_date === day_date;
                    })
                    .sort((a, b) => a.date - b.date);
            }
            return grouped;
        },
    );
    public readonly hide_bay_number_column = computed(() => {
        const { request_filter } = this.options();
        return this.hide_bay_number || this.isRequestFilter(request_filter);
    });

    public readonly reject = (e: Booking) => this._state.rejectBooking(e);
    public readonly approve = (e: Booking) => this._state.approveBooking(e);
    public readonly editReservation = (e: Booking) =>
        this._state.editReservation(e);
    public readonly assignSpace = (e: Booking) => this._state.assignSpace(e);
    public readonly removeBooking = (e: Booking) =>
        this._state.removeBooking(e);
    public readonly isRequest = (e: Booking) => this._state.isRequest(e);
    public readonly canApproveBooking = (e: Booking) =>
        this._state.canApproveBooking(e);
    public readonly isStatusActionDisabled = (e: Booking) =>
        e?.status === 'ended' ||
        this.isAssignedBooking(e) ||
        this.isCancelledBooking(e) ||
        !this.canApproveBooking(e);

    public readonly can_edit = settingSignal('parking.allow_editing', true);
    public readonly can_delete = settingSignal('parking.allow_deleting', false);

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        return this._state.timezone;
    }

    public get bookable_period() {
        const period =
            this._settings.get('app.parking.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours');
        return Number.isFinite(period?.start) && Number.isFinite(period?.end)
            ? (period.end - period.start) * 60
            : undefined;
    }

    public get hide_assign_space() {
        return !!this._settings.get('app.parking.hide_assign_space');
    }

    public get hide_bay_number() {
        return !!this._settings.get('app.parking.hide_bay_number');
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    /** Status colour tone for tentative bookings, empty for any other status */
    public statusTone(booking: Booking): string {
        if (
            booking?.status !== 'tentative' ||
            this.isAssignedBooking(booking) ||
            this.isCancelledBooking(booking)
        ) {
            return '';
        }
        return parkingRequestStatusTone(booking, this.show_waitlist);
    }

    public isAssignedBooking(booking: Booking) {
        return !!booking?.extension_data?.is_assigned;
    }

    public isDeletedBooking(booking: Booking) {
        return !!booking?.deleted;
    }

    public isCancelledBooking(booking: Booking) {
        return (
            this.isDeletedBooking(booking) || booking?.status === 'cancelled'
        );
    }

    public isAllDayBooking(booking: Booking) {
        return isParkingAllDayBooking(
            booking,
            this.timezone,
            this.bookable_period,
        );
    }

    public statusLabel(booking: Booking) {
        return this.isAssignedBooking(booking)
            ? 'APP.CONCIERGE.BOOKING_STATUS_ASSIGNED'
            : this.isDeletedBooking(booking)
              ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
              : booking?.status === 'cancelled'
                ? 'COMMON.TYPE_CANCELLED'
                : booking?.status === 'ended'
                  ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                  : booking?.status === 'approved'
                    ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                    : booking?.status === 'declined'
                      ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                      : parkingRequestStatusLabel(booking, this.show_waitlist);
    }

    public isRequestFilter(filter_type?: string) {
        return ['manual', 'pending', 'requests', 'waitlist'].includes(
            filter_type || '',
        );
    }

    public isToday(date: number) {
        return isSameDay(date, Date.now());
    }
}
