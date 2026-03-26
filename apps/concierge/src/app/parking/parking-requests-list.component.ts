import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    Booking,
    SettingsService,
    currentUser,
} from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { endOfWeek, startOfWeek } from 'date-fns';
import { combineLatest, map } from 'rxjs';
import { ParkingRequestsWeekViewComponent } from './parking-requests-week-view.component';
import { ParkingSpecialRequestModalComponent } from './parking-special-request-modal.component';
import {
    ParkingRequestFilter,
    ParkingStateService,
} from './parking-state.service';

@Component({
    selector: 'parking-requests-list',
    template: `
        @if ((period | async) === 'week') {
            <parking-requests-week-view />
        } @else {
            <mat-progress-bar
                [class.opacity-0]="!(loading | async)?.includes('bookings')"
                class="sticky left-0 w-full"
            />
            <simple-table
                class="block min-w-304 text-sm"
                [data]="filtered_events"
                [columns]="[
                    {
                        key: 'state',
                        name: 'COMMON.STATUS_BUSY' | translate,
                        content: state_template,
                        size: '4.75rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'request_type',
                        name: 'BOOKINGS.PARKING_REQUEST_TYPE' | translate,
                        content: request_type_template,
                        size: '9rem',
                    },
                    {
                        key: 'submission_date',
                        name: 'COMMON.CREATED_AT' | translate,
                        content: submission_template,
                        size: '9rem',
                        sortable: false,
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
                [filter]="(options | async)?.search"
                [sortable]="true"
                [empty_message]="
                    'APP.CONCIERGE.PARKING_REQUESTS_EMPTY' | translate
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
            <ng-template #request_type_template let-row="row">
                <div class="px-4 py-2">
                    {{ request_type_label(request_type(row)) | translate }}
                </div>
            </ng-template>
            <ng-template #submission_template let-row="row">
                <div class="px-4 py-2">
                    @if (request_submitted_at(row)) {
                        {{
                            request_submitted_at(row)
                                | date: 'MMM d, ' + time_format
                        }}
                    } @else {
                        {{ 'COMMON.EMPTY' | translate }}
                    }
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
                        [class.opacity-30]="row?.status === 'ended'"
                        [class.text-info-content]="
                            row?.status === 'tentative' && isWaitlisted(row)
                        "
                        [class.bg-info]="
                            row?.status === 'tentative' && isWaitlisted(row)
                        "
                        [class.text-warning-content]="
                            row?.status === 'tentative' && !isWaitlisted(row)
                        "
                        [class.bg-warning]="
                            row?.status === 'tentative' && !isWaitlisted(row)
                        "
                        [matMenuTriggerFor]="menu"
                        [disabled]="row?.status === 'ended'"
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
                                            : isWaitlisted(row)
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
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.PARKING_APPROVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
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
                <div class="mx-auto flex items-center justify-end space-x-2">
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate
                        "
                        [disabled]="request_type(row) !== 'special'"
                        (click)="viewSpecialNeedsRequest(row)"
                    >
                        <icon class="text-2xl">description</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [disabled]="
                            row.checked_in ||
                            row.state === 'in_progress' ||
                            row.status === 'ended'
                        "
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_ASSIGN_SPACE' | translate
                        "
                        (click)="assignSpace(row)"
                    >
                        <icon class="text-2xl">add_location</icon>
                    </button>
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
        ParkingRequestsWeekViewComponent,
    ],
})
export class ParkingRequestsListComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(ParkingStateService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly period = this._state.period;

    public readonly filtered_events = combineLatest([
        this._state.bookings,
        this.options,
    ]).pipe(
        map(([booking_list, { search, request_filter }]) => {
            const user_groups = currentUser()?.groups || [];
            let unallocated = booking_list.filter((b) => {
                if (!b.asset_id?.startsWith('unallocated')) return false;
                const approver_group = b.extension_data?.approver_group;
                if (approver_group && !user_groups.includes(approver_group))
                    return false;
                return true;
            });
            unallocated = this._applyRequestFilter(unallocated, request_filter);
            const s = search.toLowerCase();
            const type_index = (i) =>
                this.request_type(i) == 'special'
                    ? 2
                    : this.request_type(i) == 'after_hours'
                      ? 1
                      : 0;
            unallocated.sort((a, b) => {
                const type_diff = type_index(a) - type_index(b);
                if (type_diff !== 0) return type_diff;
                const submitted_a = this.request_submitted_at(a);
                const submitted_b = this.request_submitted_at(b);
                if (submitted_a !== submitted_b)
                    return submitted_b - submitted_a;
                return b.date - a.date;
            });
            return !s
                ? unallocated
                : unallocated.filter(
                      (b) =>
                          b.user_name.toLowerCase().includes(s) ||
                          b.user_email.toLowerCase().includes(s) ||
                          b.booked_by_name.toLowerCase().includes(s) ||
                          b.booked_by_email.toLowerCase().includes(s) ||
                          b.asset_name.toLowerCase().includes(s),
                  );
        }),
    );

    public readonly reject = (e: Booking) => this._state.rejectBooking(e);
    public readonly approve = (e: Booking) => this._state.approveBooking(e);
    public readonly editReservation = (e: Booking) =>
        this._state.editReservation(e);
    public readonly assignSpace = (e: Booking) => this._state.assignSpace(e);
    public readonly viewSpecialNeedsRequest = (booking: Booking) =>
        this._dialog.open(ParkingSpecialRequestModalComponent, {
            data: { booking },
        });
    public readonly request_type = (booking: Booking) =>
        booking?.extension_data?.request_type || '';
    public readonly request_submitted_at = (booking: Booking): number => {
        const value =
            booking?.extension_data?.submitted_at ||
            booking?.extension_data?.submission_date ||
            booking?.extension_data?.created_at ||
            booking?.extension_data?.created ||
            0;
        if (!value) return 0;
        if (typeof value === 'string') {
            const parsed_value = Date.parse(value);
            return Number.isFinite(parsed_value) ? parsed_value : 0;
        }
        if (typeof value === 'number') {
            return value < 1_000_000_000_000 ? value * 1000 : value;
        }
        return 0;
    };

    private readonly _request_type_labels: Record<string, string> = {
        standard: 'Standard',
        special: 'P2',
        after_hours: 'After-hours',
    };

    public readonly request_type_label = (request_type: string) =>
        this._request_type_labels[request_type] || 'COMMON.EMPTY';

    private _applyRequestFilter(
        list: Booking[],
        filter_type: ParkingRequestFilter,
    ): Booking[] {
        if (filter_type === 'all') return list;
        const now = Date.now();
        const week_start = this._state.week_start;
        const current_week_start = startOfWeek(now, {
            weekStartsOn: week_start,
        }).valueOf();
        const current_week_end = endOfWeek(now, {
            weekStartsOn: week_start,
        }).valueOf();
        if (filter_type === 'waitlist') {
            return list.filter(
                (b) =>
                    b.status === 'tentative' &&
                    b.date >= current_week_start &&
                    b.date <= current_week_end,
            );
        }
        if (filter_type === 'pending') {
            return list.filter(
                (b) =>
                    b.status === 'tentative' &&
                    (b.date < current_week_start || b.date > current_week_end),
            );
        }
        return list;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public isWaitlisted(booking: Booking): boolean {
        if (booking.status !== 'tentative') return false;
        const now = Date.now();
        const week_start = this._state.week_start;
        const current_week_start = startOfWeek(now, {
            weekStartsOn: week_start,
        }).valueOf();
        const current_week_end = endOfWeek(now, {
            weekStartsOn: week_start,
        }).valueOf();
        return (
            booking.date >= current_week_start &&
            booking.date <= current_week_end
        );
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
    }
}
