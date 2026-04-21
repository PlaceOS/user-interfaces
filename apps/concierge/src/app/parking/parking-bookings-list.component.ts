import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ParkingBookingsWeekViewComponent } from './parking-bookings-week-view.component';
import { ParkingOptions, ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-bookings-list',
    template: `
        @if (period() === 'week') {
            <parking-bookings-week-view />
        } @else {
            <mat-progress-bar
                [class.opacity-0]="!loading().includes('[BOOKINGS]')"
                class="sticky left-0 w-full"
            />
            <simple-table
                class="block min-w-304 text-sm"
                [data]="filtered_events()"
                [columns]="[
                    {
                        key: 'state',
                        name: 'COMMON.STATUS_BUSY' | translate,
                        content: state_template,
                        size: '4.75rem',
                        sortable: false,
                    },
                    {
                        key: 'booking_type',
                        name: 'COMMON.TYPE' | translate,
                        content: type_template,
                        size: '5.5rem',
                        sort_fn: bookingTypeSort,
                        show: show_request_types,
                    },
                    {
                        key: 'date',
                        name: 'FORM.TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'asset_id',
                        name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                        content: bay_template,
                        show: !hide_bay_number_column(),
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                        content: person_template,
                    },
                    {
                        key: 'booked_by_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                        content: host_template,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                        size: '10rem',
                        sortable: false,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '9.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '6.5rem',
                        sortable: false,
                    },
                ]"
                [filter]="options().search"
                [sortable]="true"
                [empty_message]="
                    (isRequestFilter(options().request_filter)
                        ? 'APP.CONCIERGE.PARKING_REQUESTS_EMPTY'
                        : 'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY'
                    ) | translate
                "
            />
            <ng-template #date_template let-row="row">
                <div class="px-4 py-2">
                    {{
                        row.all_day || row.duration > 12 * 60
                            ? ('COMMON.ALL_DAY' | translate)
                            : (row.date | date: time_format) +
                              ' - ' +
                              (row.date_end | date: time_format)
                    }}
                </div>
            </ng-template>
            <ng-template #person_template let-row="row">
                <div class="px-4 py-2">
                    <div>{{ row.user_name || row.user_email }}</div>
                    @if (row.user_name && row.user_email) {
                        <div class="text-xs opacity-30">
                            {{ row.user_email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #host_template let-row="row">
                <div class="px-4 py-2">
                    <div>{{ row.booked_by_name || row.booked_by_email }}</div>
                    @if (row.booked_by_name && row.booked_by_email) {
                        <div class="text-xs opacity-30">
                            {{ row.booked_by_email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #state_template let-row="row">
                @if (!row?.checked_in && row.checked_out_at) {
                    <div
                        class="bg-base-300 text-base-100 mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_CHECKED_OUT_AT'
                                | translate
                                    : {
                                          time:
                                              (row.checked_out_at * 1000
                                              | date: time_format),
                                      }
                        "
                        matTooltipPosition="right"
                    >
                        <icon>done</icon>
                    </div>
                }
                @if (!row?.checked_in && !row.checked_out_at) {
                    <div
                        class="bg-warning text-warning-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_NOT_CHECKED_IN' | translate
                        "
                        matTooltipPosition="right"
                    >
                        <icon>question_mark</icon>
                    </div>
                }
                @if (row?.checked_in) {
                    <div
                        class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_CHECKED_IN' | translate
                        "
                        matTooltipPosition="right"
                    >
                        <icon>done</icon>
                    </div>
                }
            </ng-template>
            <ng-template #bay_template let-id="data">
                <div class="px-4 py-2">
                    @if (id && !isRequestId(id)) {
                        {{ (id | parkingSpace | async)?.identifier || id }}
                    } @else {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #plate_template let-row="row">
                <div class="p-4 font-mono text-sm uppercase">
                    {{ row?.extension_data?.plate_number }}
                    @if (!row?.extension_data?.plate_number) {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #type_template let-row="row">
                @let type = bookingType(row);
                <div class="flex justify-center px-4 py-2">
                    <div
                        class="inline-flex h-8 w-8 items-center justify-center rounded"
                        [class.bg-success]="type === 'booked'"
                        [class.text-success-content]="type === 'booked'"
                        [class.bg-base-300]="type === 'request'"
                        [class.text-base-content]="type === 'request'"
                        [class.bg-warning]="type === 'pending_manual'"
                        [class.text-warning-content]="type === 'pending_manual'"
                        [class.bg-info]="type === 'waitlisted'"
                        [class.text-info-content]="type === 'waitlisted'"
                        [matTooltip]="bookingTypeLabel(row) | translate"
                        matTooltipPosition="right"
                    >
                        <icon class="text-2xl">{{ bookingTypeIcon(row) }}</icon>
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-4">
                    <button
                        matRipple
                        class="h-10 w-30 rounded-3xl border-none"
                        [class.text-success-content]="
                            row?.status === 'approved'
                        "
                        [class.bg-success]="row?.status === 'approved'"
                        [class.text-error-content]="row?.status === 'declined'"
                        [class.bg-error]="row?.status === 'declined'"
                        [class.text-neutral-content]="row?.status === 'ended'"
                        [class.bg-neutral]="row?.status === 'ended'"
                        [class.opacity-30]="isStatusActionDisabled(row)"
                        [class.text-warning-content]="
                            row?.status === 'tentative' &&
                            !isVisibleWaitlisted(row)
                        "
                        [class.bg-warning]="
                            row?.status === 'tentative' &&
                            !isVisibleWaitlisted(row)
                        "
                        [class.text-info-content]="
                            row?.status === 'tentative' &&
                            isVisibleWaitlisted(row)
                        "
                        [class.bg-info]="
                            row?.status === 'tentative' &&
                            isVisibleWaitlisted(row)
                        "
                        [matMenuTriggerFor]="menu"
                        [disabled]="isStatusActionDisabled(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (row?.status === 'ended'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                        : row?.status === 'approved'
                                          ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                          : row?.status === 'declined'
                                            ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                            : isVisibleWaitlisted(row)
                                              ? 'APP.CONCIERGE.PARKING_WAITLISTED'
                                              : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    ) | translate
                                }}
                            </div>
                            <icon class="text-2xl">arrow_drop_down</icon>
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [disabled]="!canApproveBooking(row)"
                        (click)="approve(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.PARKING_APPROVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        [disabled]="!canApproveBooking(row)"
                        (click)="reject(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.PARKING_DECLINE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div
                    class="flex w-full items-center justify-end space-x-2 px-2"
                >
                    @if (isRequest(row)) {
                        @if (!hide_assign_space) {
                            <button
                                icon
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended'
                                "
                                [matTooltip]="
                                    'APP.CONCIERGE.PARKING_ASSIGN_SPACE'
                                        | translate
                                "
                                (click)="assignSpace(row)"
                            >
                                <icon class="text-2xl">add_location</icon>
                            </button>
                        }
                    }
                    @if (can_edit()) {
                        <button
                            icon
                            matRipple
                            [disabled]="
                                row.checked_in ||
                                row.state === 'in_progress' ||
                                row.status === 'ended' ||
                                row.instance
                            "
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_EDIT' | translate
                            "
                            (click)="editReservation(row)"
                        >
                            <icon class="text-2xl">edit</icon>
                        </button>
                    }
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatProgressBarModule,
        SimpleTableComponent,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        MatMenuModule,
        MatTooltipModule,
        ParkingBookingsWeekViewComponent,
        ParkingSpacePipe,
    ],
})
export class ParkingBookingsListComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(ParkingStateService);
    private _settings = inject(SettingsService);

    private readonly _default_options: ParkingOptions = {
        date: Date.now(),
        search: '',
        zones: [],
        period: 'day',
        request_filter: 'all',
    };

    public readonly bookings = toSignal(this._state.bookings, {
        initialValue: [],
    });
    public readonly options = toSignal(this._state.options, {
        initialValue: this._default_options,
    });
    public readonly loading = toSignal(this._state.loading, {
        initialValue: [],
    });
    public readonly period = toSignal(this._state.period, {
        initialValue: 'day',
    });

    public readonly filtered_events = computed(() => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(
            this.bookings(),
            request_filter,
        );
        return this._state.filterEventSearch(list, search).map((booking) => ({
            ...booking,
            booking_type: this.bookingTypeSortValue(booking),
        }));
    });

    public readonly reject = (e) => this._state.rejectBooking(e);
    public readonly approve = (e) => this._state.approveBooking(e);
    public readonly editReservation = (e) => this._state.editReservation(e);
    public readonly assignSpace = (e) => this._state.assignSpace(e);
    public readonly isRequest = (e) => this._state.isRequest(e);
    public readonly isManualRequest = (e) => this._state.isManualRequest(e);
    public readonly isWaitlisted = (e) => this._state.isWaitlisted(e);
    public readonly bookingTypeSort = (a: number, b: number) => a - b;
    public readonly canApproveBooking = (e: Booking) =>
        this._state.canApproveBooking(e);
    public readonly isStatusActionDisabled = (e: Booking) =>
        e?.status === 'ended' || !this.canApproveBooking(e);
    public readonly hide_bay_number_column = computed(() => {
        const { request_filter } = this.options();
        return this.hide_bay_number || this.isRequestFilter(request_filter);
    });

    public readonly can_edit = settingSignal('parking.allow_editing', true);

    public get show_request_types() {
        return !!this._settings.get('app.parking.show_requests');
    }

    public get hide_bay_number() {
        return !!this._settings.get('app.parking.hide_bay_number');
    }

    public get hide_assign_space() {
        return !!this._settings.get('app.parking.hide_assign_space');
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public isVisibleWaitlisted(booking: Booking) {
        return this.show_waitlist && this.isWaitlisted(booking);
    }

    public isRequestFilter(filter_type?: string) {
        return ['manual', 'pending', 'requests', 'waitlist'].includes(
            filter_type || '',
        );
    }

    public isRequestId(id?: string) {
        return !!id?.startsWith('unallocated');
    }

    public bookingType(booking: Booking) {
        if (!this.isRequest(booking)) {
            return 'booked';
        }
        if (this.isVisibleWaitlisted(booking)) {
            return 'waitlisted';
        }
        if (this.isManualRequest(booking) || booking.status === 'tentative') {
            return 'pending_manual';
        }
        return 'request';
    }

    public bookingTypeSortValue(booking: Booking) {
        return {
            request: 0,
            pending_manual: 1,
            waitlisted: 2,
            booked: 3,
        }[this.bookingType(booking)];
    }

    public bookingTypeLabel(booking: Booking) {
        return {
            booked: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_BOOKED',
            request: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_REQUEST',
            pending_manual: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_PENDING_MANUAL',
            waitlisted: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_WAITLISTED',
        }[this.bookingType(booking)];
    }

    public bookingTypeIcon(booking: Booking) {
        return {
            booked: 'event_available',
            request: 'outbox',
            pending_manual: 'pending_actions',
            waitlisted: 'hourglass_top',
        }[this.bookingType(booking)];
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
    }
}
