import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, Booking, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ParkingRequestsWeekViewComponent } from './parking-requests-week-view.component';
import { ParkingSpecialRequestModalComponent } from './parking-special-request-modal.component';
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
    selector: 'parking-requests-list',
    template: `
        <div class="w-fit px-8">
            <div class="flex items-center justify-end gap-2 px-2 py-1 text-xs">
                @if (last_updated()) {
                    <span class="opacity-60">
                        {{
                            'COMMON.LAST_UPDATED'
                                | translate
                                    : {
                                          time:
                                              (last_updated()
                                              | date: time_format : timezone),
                                      }
                        }}
                    </span>
                }
                <button
                    icon
                    default
                    matRipple
                    [disabled]="loading().includes('[BOOKINGS]')"
                    [matTooltip]="'COMMON.REFRESH' | translate"
                    (click)="refresh()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
            @if (period() === 'week') {
                <parking-requests-week-view />
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
                            name:
                                'APP.CONCIERGE.PARKING_RESERVED_FOR'
                                | translate,
                            content: person_template,
                        },
                        {
                            key: 'booked_by_name',
                            name:
                                'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
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
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [filter]="options().search"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.PARKING_REQUESTS_EMPTY' | translate
                    "
                />
                <ng-template #date_template let-row="row">
                    <div class="px-4 py-2">
                        {{
                            isAllDayBooking(row)
                                ? ('COMMON.ALL_DAY' | translate)
                                : (row.date | date: time_format : timezone) +
                                  ' - ' +
                                  (row.date_end | date: time_format : timezone)
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
                        <div>
                            {{ row.booked_by_name || row.booked_by_email }}
                        </div>
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
                                                  | date
                                                      : time_format
                                                      : timezone),
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
                                'APP.CONCIERGE.PARKING_NOT_CHECKED_IN'
                                    | translate
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
                            [class.text-error-content]="
                                row?.status === 'declined'
                            "
                            [class.bg-error]="row?.status === 'declined'"
                            [class.text-neutral-content]="
                                row?.status === 'ended'
                            "
                            [class.bg-neutral]="row?.status === 'ended'"
                            [class.opacity-30]="row?.status === 'ended'"
                            [class.text-info-content]="
                                statusTone(row) === 'info'
                            "
                            [class.bg-info]="statusTone(row) === 'info'"
                            [class.text-approval-content]="
                                statusTone(row) === 'approval'
                            "
                            [class.bg-approval]="statusTone(row) === 'approval'"
                            [class.text-warning-content]="
                                statusTone(row) === 'warning'
                            "
                            [class.bg-warning]="statusTone(row) === 'warning'"
                            [matMenuTriggerFor]="menu"
                            [disabled]="
                                row?.status === 'ended' ||
                                !canApproveBooking(row)
                            "
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
                                                : requestStatusLabel(row)
                                        ) | translate
                                    }}
                                </div>
                                @if (
                                    !(
                                        row?.status === 'ended' ||
                                        !canApproveBooking(row)
                                    )
                                ) {
                                    <icon class="text-2xl"
                                        >arrow_drop_down</icon
                                    >
                                }
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
                                        'APP.CONCIERGE.PARKING_APPROVE'
                                            | translate
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
                                        'APP.CONCIERGE.PARKING_DECLINE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </ng-template>
                <ng-template #action_template let-row="row">
                    <div class="flex w-full items-center justify-end gap-2 p-2">
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate
                            "
                            [disabled]="request_type(row) !== 'special'"
                            (click)="viewSpecialNeedsRequest(row)"
                        >
                            <icon>description</icon>
                        </button>
                        @if (!hide_assign_space) {
                            <button
                                icon
                                default
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
                                <icon>add_location</icon>
                            </button>
                        }
                        <button
                            icon
                            default
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
                            <icon>edit</icon>
                        </button>
                    </div>
                </ng-template>
                <div class="h-20 w-full"></div>
            }
            @if (!loading().includes('[BOOKINGS]') && has_more_pages()) {
                <button btn matRipple class="mb-4 w-32" (click)="loadMore()">
                    {{ 'COMMON.LOAD_MORE' | translate }}
                </button>
            }
        </div>
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

    public readonly bookings = this._state.bookings;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly period = this._state.period;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly last_updated = this._state.last_updated;
    public readonly loadMore = () => this._state.nextPage();
    public readonly refresh = () => this._state.refresh();

    public readonly filtered_events = computed(() => {
        const { search, request_filter } = this.options();
        let unallocated = this.bookings().filter((b) =>
            b.asset_id?.startsWith('unallocated'),
        );
        unallocated = this._applyRequestFilter(unallocated, request_filter);
        const type_index = (booking: Booking) =>
            this.request_type(booking) === 'special'
                ? 2
                : this.request_type(booking) === 'after_hours'
                  ? 1
                  : 0;
        unallocated = [...unallocated].sort((first, second) => {
            const type_diff = type_index(first) - type_index(second);
            if (type_diff !== 0) return type_diff;
            const submitted_first = this.request_submitted_at(first);
            const submitted_second = this.request_submitted_at(second);
            if (submitted_first !== submitted_second) {
                return submitted_second - submitted_first;
            }
            return second.date - first.date;
        });
        return this._state.filterEventSearch(unallocated, search);
    });

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

    public ngOnInit() {
        this._state.refresh();
    }
}
