import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, Booking, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import {
    ParkingRequestFilter,
    ParkingStateService,
} from './parking-state.service';
import {
    isParkingAllDayBooking,
    parkingRequestStatusLabel,
    parkingRequestStatusTone,
} from './parking.utilities';

@Component({
    selector: 'parking-requests-week-view',
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
                            booking of grouped_requests()[day] || [];
                            track booking.id
                        ) {
                            <div
                                class="hover:bg-base-200 flex flex-col rounded-sm border p-2 text-xs"
                                [class.border-success]="
                                    booking.status === 'approved'
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
                                        isAllDayBooking(booking)
                                            ? ('COMMON.ALL_DAY' | translate)
                                            : (booking.date
                                                  | date
                                                      : time_format
                                                      : timezone) +
                                              ' - ' +
                                              (booking.date_end
                                                  | date
                                                      : time_format
                                                      : timezone)
                                    }}
                                </div>
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
                                        [class.text-info-content]="
                                            statusTone(booking) === 'info'
                                        "
                                        [class.bg-info]="
                                            statusTone(booking) === 'info'
                                        "
                                        [class.text-approval-content]="
                                            statusTone(booking) === 'approval'
                                        "
                                        [class.bg-approval]="
                                            statusTone(booking) === 'approval'
                                        "
                                        [class.text-warning-content]="
                                            statusTone(booking) === 'warning'
                                        "
                                        [class.bg-warning]="
                                            statusTone(booking) === 'warning'
                                        "
                                        [class.text-neutral-content]="
                                            booking.status === 'ended'
                                        "
                                        [class.bg-neutral]="
                                            booking.status === 'ended'
                                        "
                                        [matMenuTriggerFor]="menu"
                                        [disabled]="
                                            booking.status === 'ended' ||
                                            !canApproveBooking(booking)
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
                                                    : requestStatusLabel(
                                                          booking
                                                      )
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
                                    <button
                                        icon
                                        matRipple
                                        class="h-6 w-6"
                                        [disabled]="
                                            booking.checked_in ||
                                            booking.state === 'in_progress' ||
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
                                </div>
                            </div>
                        }
                        @if (!grouped_requests()[day]?.length) {
                            <div class="p-4 text-center text-xs opacity-30">
                                {{
                                    'APP.CONCIERGE.PARKING_REQUESTS_EMPTY'
                                        | translate
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
    ],
})
export class ParkingRequestsWeekViewComponent extends AsyncHandler {
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

    public readonly grouped_requests = computed<Record<number, Booking[]>>(
        () => {
            const days = this.days();
            const { search, request_filter } = this.options();
            let list = this.bookings().filter((b) =>
                b.asset_id?.startsWith('unallocated'),
            );
            list = this._applyRequestFilter(list, request_filter);
            list = this._state.filterEventSearch(list, search);
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

    public readonly reject = (e: Booking) => this._state.rejectBooking(e);
    public readonly approve = (e: Booking) => this._state.approveBooking(e);
    public readonly editReservation = (e: Booking) =>
        this._state.editReservation(e);
    public readonly assignSpace = (e: Booking) => this._state.assignSpace(e);
    public readonly canApproveBooking = (e: Booking) =>
        this._state.canApproveBooking(e);

    private _applyRequestFilter(
        list: Booking[],
        filter_type: ParkingRequestFilter,
    ): Booking[] {
        if (filter_type === 'all') return list;
        if (filter_type === 'manual') {
            return list.filter((b) => this._state.isManualRequest(b));
        }
        if (filter_type === 'waitlist') {
            if (!this.show_waitlist) return list;
            return list.filter((b) => this._state.isWaitlisted(b));
        }
        if (filter_type === 'pending') {
            return list.filter(
                (b) =>
                    b.status === 'tentative' &&
                    (!this.show_waitlist || !this._state.isWaitlisted(b)),
            );
        }
        return list;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        return this._state.timezone;
    }

    public get hide_assign_space() {
        return !!this._settings.get('app.parking.hide_assign_space');
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    /** Status colour tone for tentative requests, empty for any other status */
    public statusTone(booking: Booking): string {
        if (booking?.status !== 'tentative') return '';
        return parkingRequestStatusTone(booking, this.show_waitlist);
    }

    public requestStatusLabel(booking: Booking): string {
        return parkingRequestStatusLabel(booking, this.show_waitlist);
    }

    public isAllDayBooking(booking: Booking) {
        return isParkingAllDayBooking(booking, this.timezone);
    }

    public isToday(date: number) {
        return isSameDay(date, Date.now());
    }
}
