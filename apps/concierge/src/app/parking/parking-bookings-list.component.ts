import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnInit,
    TemplateRef,
} from '@angular/core';
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
    CustomTooltipComponent,
    IconComponent,
    SimpleTableComponent,
    TableColumn,
    TranslatePipe,
} from '@placeos/components';
import { isSameDay } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { ParkingBookingsWeekViewComponent } from './parking-bookings-week-view.component';
import { ParkingStateService } from './parking-state.service';
import {
    isParkingAllDayBooking,
    parkingRequestStatusLabel,
    parkingRequestStatusTone,
} from './parking.utilities';

interface ParkingBookingExtensionColumn {
    field: string;
    name?: string;
    display_name?: string;
    size?: string;
}

interface ParkingSpaceRestrictionOption {
    id: string | number;
    name: string;
}

interface ParkingBookingColumnTemplates {
    state_template: TemplateRef<any>;
    type_template: TemplateRef<any>;
    date_template: TemplateRef<any>;
    bay_template: TemplateRef<any>;
    person_template: TemplateRef<any>;
    host_template: TemplateRef<any>;
    plate_template: TemplateRef<any>;
    notes_template: TemplateRef<any>;
    status_template: TemplateRef<any>;
    requested_at_template: TemplateRef<any>;
    user_groups_template: TemplateRef<any>;
    action_template: TemplateRef<any>;
    status_busy_label: string;
    type_label: string;
    time_label: string;
    bay_number_label: string;
    reserved_for_label: string;
    reserved_by_label: string;
    plate_number_label: string;
    notes_label: string;
    status_label: string;
    user_groups_label: string;
}

@Component({
    selector: '[parking-bookings-list]',
    template: `
        <div class="w-fit px-8">
            <div
                class="bg-base-100 border-base-300 fixed right-8 bottom-4 flex items-center justify-end gap-2 rounded-xl border px-2 py-1 shadow-lg"
            >
                <span class="mr-8 text-xs opacity-60">
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
                <button
                    icon
                    default
                    matRipple
                    class="absolute top-1/2 -right-2 -translate-y-1/2"
                    [disabled]="loading().includes('[BOOKINGS]')"
                    [matTooltip]="'COMMON.REFRESH' | translate"
                    (click)="refresh()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
            @if (period() === 'week') {
                <parking-bookings-week-view />
            } @else {
                <mat-progress-bar
                    [class.opacity-0]="!loading().includes('[BOOKINGS]')"
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                />
                <simple-table
                    class="block min-w-372 text-sm"
                    [data]="filtered_events()"
                    [columns]="
                        bookingColumns({
                            state_template,
                            type_template,
                            date_template,
                            bay_template,
                            person_template,
                            host_template,
                            plate_template,
                            notes_template,
                            status_template,
                            requested_at_template,
                            user_groups_template,
                            action_template,
                            status_busy_label: 'COMMON.STATUS_BUSY' | translate,
                            type_label:
                                'BOOKINGS.PARKING_VEHICLE_TYPE' | translate,
                            time_label: 'COMMON.TIME' | translate,
                            bay_number_label:
                                'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                            reserved_for_label:
                                'APP.CONCIERGE.PARKING_RESERVED_FOR'
                                | translate,
                            reserved_by_label:
                                'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                            plate_number_label:
                                'BOOKINGS.PARKING_PLATE_NUMBER' | translate,
                            notes_label: 'FORM.NOTES' | translate,
                            status_label: 'COMMON.STATUS' | translate,
                            user_groups_label:
                                'APP.CONCIERGE.PARKING_USER_GROUPS' | translate,
                        })
                    "
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
                    <div class="px-4 py-2" data-testid="parking-booking-time">
                        @if (isAllDayBooking(row)) {
                            {{ 'COMMON.ALL_DAY' | translate }}
                        } @else {
                            {{ row.date | date: time_format : timezone }} -
                            {{ row.date_end | date: time_format : timezone }}
                            @if (isNextDay(row)) {
                                <sup>+1</sup>
                            }
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
                    @if (row.deleted) {
                        <div
                            class="bg-error text-error-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                            [matTooltip]="'COMMON.TYPE_CANCELLED' | translate"
                            matTooltipPosition="right"
                        >
                            <icon>close</icon>
                        </div>
                    } @else {
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
                                    'APP.CONCIERGE.PARKING_CHECKED_IN'
                                        | translate
                                "
                                matTooltipPosition="right"
                            >
                                <icon>done</icon>
                            </div>
                        }
                    }
                </ng-template>
                <ng-template #bay_template let-row="row">
                    <div class="px-4 py-2">
                        @let id = row.asset_id;
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
                <ng-template #notes_template let-row="row">
                    <div class="flex justify-center px-4 py-2">
                        @if (row.notes) {
                            <span
                                class="text-base-content/70 bg-base-200 border-base-300 flex h-8 w-8 items-center justify-center rounded-full border"
                                customTooltip
                                tabindex="0"
                                [content]="notes_tooltip"
                                [data]="{ notes: row.notes }"
                                [hover]="true"
                                [backdrop]="false"
                                [xPosition]="'center'"
                                [yPosition]="'top'"
                                [attr.aria-label]="
                                    ('FORM.NOTES' | translate) +
                                    ': ' +
                                    row.notes
                                "
                            >
                                <icon class="text-xl">sticky_note_2</icon>
                            </span>
                        } @else {
                            <span class="opacity-30">
                                {{ 'COMMON.EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #notes_tooltip let-notes="notes">
                    <div
                        class="border-base-300 bg-base-100 text-base-content my-2 max-w-96 rounded-lg border px-4 py-3 text-left text-sm leading-snug whitespace-pre-wrap shadow-xl"
                    >
                        {{ notes }}
                    </div>
                </ng-template>
                <ng-template #type_template let-row="row">
                    <div class="mx-auto flex justify-center px-4 py-2">
                        <div
                            class="bg-base-300 text-base-content inline-flex h-8 w-8 items-center justify-center rounded"
                            [matTooltip]="vehicleTypeLabel(row) | translate"
                            matTooltipPosition="right"
                        >
                            <icon class="text-2xl">{{
                                vehicleTypeIcon(row)
                            }}</icon>
                        </div>
                    </div>
                </ng-template>
                <ng-template #status_template let-row="row">
                    <div class="px-4">
                        <button
                            matRipple
                            class="h-10 w-30 rounded-3xl border-none"
                            [class.text-success-content]="
                                row?.status === 'approved' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.bg-success]="
                                row?.status === 'approved' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.text-secondary-content!]="
                                isAssignedBooking(row)
                            "
                            [class.bg-secondary!]="isAssignedBooking(row)"
                            [class.text-error-content!]="
                                isCancelledBooking(row) &&
                                !isAssignedBooking(row)
                            "
                            [class.bg-error!]="
                                isCancelledBooking(row) &&
                                !isAssignedBooking(row)
                            "
                            [class.text-error-content]="
                                row?.status === 'declined' &&
                                !isAssignedBooking(row) &&
                                !isCancelledBooking(row)
                            "
                            [class.bg-error]="
                                row?.status === 'declined' &&
                                !isAssignedBooking(row) &&
                                !isCancelledBooking(row)
                            "
                            [class.text-neutral-content]="
                                row?.status === 'ended' &&
                                !isAssignedBooking(row) &&
                                !isCancelledBooking(row)
                            "
                            [class.bg-neutral]="
                                row?.status === 'ended' &&
                                !isAssignedBooking(row) &&
                                !isCancelledBooking(row)
                            "
                            [class.opacity-30]="
                                isStatusActionDisabled(row) &&
                                !isAssignedBooking(row) &&
                                !isCancelledBooking(row)
                            "
                            [class.text-warning-content]="
                                statusTone(row) === 'warning'
                            "
                            [class.bg-warning]="statusTone(row) === 'warning'"
                            [class.text-approval-content]="
                                statusTone(row) === 'approval'
                            "
                            [class.bg-approval]="statusTone(row) === 'approval'"
                            [class.text-info-content]="
                                statusTone(row) === 'info'
                            "
                            [class.bg-info]="statusTone(row) === 'info'"
                            [matMenuTriggerFor]="menu"
                            [disabled]="isStatusActionDisabled(row)"
                        >
                            <div class="flex items-center space-x-2 pr-2 pl-4">
                                <div class="flex-1 text-left">
                                    {{ statusLabel(row) | translate }}
                                </div>
                                @if (!isStatusActionDisabled(row)) {
                                    <icon class="text-2xl"
                                        >arrow_drop_down</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                    <mat-menu #menu="matMenu">
                        @if (isRecurringInstance(row)) {
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="approve(row)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >event_available</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_APPROVE_INSTANCE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="approve(row, true)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >event_available</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_APPROVE_SERIES'
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
                                            'APP.CONCIERGE.PARKING_DECLINE_INSTANCE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="reject(row, true)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">event_busy</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_DECLINE_SERIES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        } @else {
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="approve(row)"
                            >
                                <div class="flex items-center space-x-2">
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
                        }
                    </mat-menu>
                </ng-template>
                <ng-template #requested_at_template let-row="row">
                    <div class="px-4 py-2">
                        @if (row.created_at) {
                            {{
                                row.created_at
                                    | date: 'MMM d, ' + time_format : timezone
                            }}
                        } @else {
                            <span class="opacity-30">
                                {{ 'COMMON.EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #user_groups_template let-row="row">
                    <div class="px-4 py-2">
                        {{ row.user_groups.join(', ') }}
                    </div>
                </ng-template>
                <ng-template #action_template let-row="row">
                    <div class="flex w-full items-center justify-end gap-2 p-2">
                        <button
                            icon
                            default
                            matRipple
                            data-testid="parking-booking-history"
                            [attr.aria-label]="
                                'APP.CONCIERGE.BOOKING_VIEW_HISTORY' | translate
                            "
                            [matTooltip]="
                                'APP.CONCIERGE.BOOKING_VIEW_HISTORY' | translate
                            "
                            (click)="viewBookingHistory(row)"
                        >
                            <icon>history</icon>
                        </button>
                        @if (isRequest(row) && !hide_assign_space) {
                            <button
                                icon
                                default
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended' ||
                                    isCancelledBooking(row)
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
                        @if (canEdit(row)) {
                            <button
                                icon
                                default
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended' ||
                                    isCancelledBooking(row) ||
                                    row.instance
                                "
                                [matTooltip]="
                                    'APP.CONCIERGE.PARKING_EDIT' | translate
                                "
                                (click)="editReservation(row)"
                            >
                                <icon>edit</icon>
                            </button>
                        }
                        @if (can_delete()) {
                            <button
                                icon
                                default
                                error
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended' ||
                                    isCancelledBooking(row)
                                "
                                [matTooltip]="
                                    'APP.CONCIERGE.BOOKING_REMOVE_TITLE'
                                        | translate
                                "
                                (click)="removeBooking(row)"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    </div>
                </ng-template>
                <div class="h-20 w-full"></div>
            }
            @if (!loading().includes('[BOOKINGS]') && has_more_pages()) {
                <button
                    matRipple
                    class="border-base-300 bg-base-100 fixed bottom-2 left-1/2 flex items-center gap-2 rounded-full border px-3 py-2 text-sm shadow-xl"
                    (click)="loadMore()"
                >
                    <icon>arrow_cool_down</icon>
                    <div class="pr-1">{{ 'COMMON.LOAD_MORE' | translate }}</div>
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
        CustomTooltipComponent,
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

    public readonly bookings = computed(() => {
        const selected_date = this._state.options().date;
        return this._state
            .bookings()
            .filter((booking) => this._isSameDay(booking.date, selected_date));
    });
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly period = this._state.period;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly last_updated = this._state.last_updated;
    public readonly loadMore = () => this._state.nextPage();
    public readonly refresh = () => this._state.refresh();

    public readonly filtered_events = computed(() => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(
            this.bookings(),
            request_filter,
        );
        return this._state
            .filterEventSearch(list, search)
            .map((booking) => ({
                ...booking,
                vehicle_type: this.vehicleType(booking),
                notes: booking.extension_data?.notes || '',
                // Surface plate number as a root field so the table can sort by it
                plate_number: booking.extension_data?.plate_number || '',
                created_at: ((booking as any).created_at || 0) * 1000,
                // Resolve the human-readable bay identifier onto the row so the
                // table's built-in search matches it (the `asset_id` field only
                // holds the space id, not the bay number/name).
                bay_number: this._state.bayNumber(booking),
                // Intersection of the booking's user groups with the
                // configured `show_user_groups` filter, surfaced for display.
                user_groups: this.matchedUserGroups(booking),
                space_restriction: this.spaceRestriction(booking),
                ...this.customExtensionColumnValues(booking),
            }))
            .sort((a, b) =>
                (a.bay_number || a.asset_name || '').localeCompare(
                    b.bay_number || b.asset_name || '',
                ),
            );
    });

    public action_count(row) {
        let count = 1;
        if (this.isRequest(row) && !this.hide_assign_space) count += 1;
        if (this.canEdit(row)) count += 1;
        if (this.can_delete()) count += 1;
        return count;
    }

    public readonly reject = (e, series = false) =>
        this._state.rejectBooking(e, series);
    public readonly approve = (e, series = false) =>
        this._state.approveBooking(e, series);
    public readonly editReservation = (e) => this._state.editReservation(e);
    public readonly assignSpace = (e) => this._state.assignSpace(e);
    public readonly removeBooking = (e) => this._state.removeBooking(e);
    public readonly viewBookingHistory = (e) =>
        this._state.viewBookingHistory(e);
    public readonly isRequest = (e) => this._state.isRequest(e);
    public readonly isManualRequest = (e) => this._state.isManualRequest(e);
    public readonly canApproveBooking = (e: Booking) =>
        this._state.canApproveBooking(e);
    public readonly isStatusActionDisabled = (e: Booking) =>
        e?.status === 'ended' ||
        this.isAssignedBooking(e) ||
        this.isCancelledBooking(e) ||
        !this.canApproveBooking(e);
    public readonly hide_bay_number_column = computed(() => {
        const { request_filter } = this.options();
        return this.hide_bay_number || this.isRequestFilter(request_filter);
    });
    public readonly show_action_column = computed(() => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(
            this.bookings(),
            request_filter,
        );
        return this._state
            .filterEventSearch(list, search)
            .some((booking) => this.action_count(booking) > 0);
    });
    public readonly show_notes_column = computed(() => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(
            this.bookings(),
            request_filter,
        );
        return this._state
            .filterEventSearch(list, search)
            .some((booking) => !!booking.extension_data?.notes);
    });

    public readonly can_edit = settingSignal('parking.allow_editing', true);
    public readonly can_edit_allocated = settingSignal(
        'parking.allow_editing_allocated',
    );
    public readonly can_delete = settingSignal('parking.allow_deleting', false);

    public canEdit(bkn: Booking) {
        const allocated = !bkn?.asset_id?.startsWith('unallocated');
        return allocated
            ? (this.can_edit_allocated() ?? this.can_edit())
            : this.can_edit();
    }

    public get show_request_types() {
        return !!this._settings.get('app.parking.show_requests');
    }

    public get hide_bay_number() {
        return !!this._settings.get('app.parking.hide_bay_number');
    }

    public get hide_assign_space() {
        return !!this._settings.get('app.parking.hide_assign_space');
    }

    public get custom_extension_columns(): ParkingBookingExtensionColumn[] {
        const columns = this._settings.get(
            'app.parking.custom_booking_columns',
        );
        return Array.isArray(columns)
            ? columns.filter((column) => !!column?.field)
            : [];
    }

    public get show_user_groups(): string[] {
        const groups = this._settings.get('app.parking.show_user_groups');
        return Array.isArray(groups) ? groups.filter(Boolean) : [];
    }

    public matchedUserGroups(booking: Booking): string[] {
        const allowed = this.show_user_groups;
        if (!allowed.length) return [];
        const groups = booking?.extension_data?.user_groups;
        if (!Array.isArray(groups)) return [];
        return groups.filter((group) => allowed.includes(group));
    }

    public sortUserGroups(a: string[] = [], b: string[] = []) {
        return (a[0] || '').localeCompare(b[0] || '');
    }

    public get space_restriction_options(): ParkingSpaceRestrictionOption[] {
        const options = this._settings.get(
            'app.parking.request_space_restrictions',
        );
        return Array.isArray(options)
            ? options.filter(
                  (option) =>
                      option?.name &&
                      option?.id !== undefined &&
                      option?.id !== null,
              )
            : [];
    }

    public spaceRestriction(booking: Booking): string {
        const restriction_id = booking?.extension_data?.space_restrictions;
        if (
            restriction_id === undefined ||
            restriction_id === null ||
            restriction_id === false ||
            restriction_id === ''
        ) {
            return '';
        }
        return (
            this.space_restriction_options.find(
                (option) => `${option.id}` === `${restriction_id}`,
            )?.name || `${restriction_id}`
        );
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

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

    public isRequestFilter(filter_type?: string) {
        return ['manual', 'pending', 'requests', 'waitlist'].includes(
            filter_type || '',
        );
    }

    public isRequestId(id?: string) {
        return !!id?.startsWith('unallocated');
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

    public isRecurringInstance(booking: Booking) {
        return !!booking?.instance;
    }

    public isAllDayBooking(booking: Booking) {
        return isParkingAllDayBooking(
            booking,
            this.timezone,
            this.bookable_period,
        );
    }

    public isNextDay(booking: Booking) {
        return !this._isSameDay(booking.date, booking.date_end);
    }

    private _isSameDay(first: number, second: number) {
        const timezone = this.timezone;
        return isSameDay(
            timezone ? toZonedTime(first, timezone) : first,
            timezone ? toZonedTime(second, timezone) : second,
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

    public bookingColumns(
        templates: ParkingBookingColumnTemplates,
    ): TableColumn[] {
        let max_count = 0;
        for (const bkn of this.bookings()) {
            max_count = Math.max(max_count, this.action_count(bkn));
        }
        return [
            {
                key: 'state',
                name: templates.status_busy_label,
                content: templates.state_template,
                size: '4.75rem',
                sortable: false,
            },
            {
                key: 'vehicle_type',
                name: templates.type_label,
                content: templates.type_template,
                size: '5.5rem',
                show: this.show_request_types,
            },
            {
                key: 'date',
                name: templates.time_label,
                content: templates.date_template,
            },
            {
                key: 'bay_number',
                name: templates.bay_number_label,
                content: templates.bay_template,
                show: !this.hide_bay_number_column(),
            },
            {
                key: 'user_name',
                name: templates.reserved_for_label,
                content: templates.person_template,
            },
            {
                key: 'booked_by_name',
                name: templates.reserved_by_label,
                content: templates.host_template,
            },
            {
                key: 'plate_number',
                name: templates.plate_number_label,
                content: templates.plate_template,
                size: '10rem',
            },
            {
                key: 'notes',
                name: templates.notes_label,
                content: templates.notes_template,
                size: '5rem',
                sortable: false,
                show: this.show_notes_column(),
            },
            ...this.custom_extension_columns.map((column) => ({
                key: this.customExtensionColumnKey(column.field),
                name: column.display_name || column.name || column.field,
                size: column.size,
            })),
            {
                key: 'status',
                name: templates.status_label,
                content: templates.status_template,
                size: '9.5rem',
            },
            {
                key: 'created_at',
                name: 'Requested at',
                content: templates.requested_at_template,
                size: '10rem',
            },
            {
                key: 'user_groups',
                name: templates.user_groups_label,
                content: templates.user_groups_template,
                size: '12rem',
                sort_fn: this.sortUserGroups,
                show: this.show_user_groups.length > 0,
            },
            {
                key: 'space_restriction',
                name: 'Space Restriction',
                size: '12rem',
            },
            {
                key: 'actions',
                name: ' ',
                content: templates.action_template,
                size: 3.25 + (max_count - 1) * 2.75 + 'rem',
                sortable: false,
                show: this.show_action_column(),
            },
        ];
    }

    public vehicleType(booking: Booking) {
        return booking?.extension_data?.vehicle_type || 'car';
    }

    public vehicleTypeLabel(booking: Booking) {
        return `BOOKINGS.PARKING_VEHICLE_${this.vehicleType(booking).toUpperCase()}`;
    }

    public vehicleTypeIcon(booking: Booking) {
        const icons = {
            bike: 'pedal_bike',
            motorcycle: 'motorcycle',
            car: 'directions_car',
            truck: 'local_shipping',
            van: 'airport_shuttle',
        };
        return icons[this.vehicleType(booking)] || 'category';
    }

    public ngOnInit() {
        this._state.refresh();
    }

    private customExtensionColumnKey(field: string) {
        return `extension_data.${field}`;
    }

    private customExtensionColumnValues(booking: Booking) {
        const values: Record<string, unknown> = {};
        for (const column of this.custom_extension_columns) {
            values[this.customExtensionColumnKey(column.field)] =
                this.formatExtensionValue(
                    this.extensionFieldValue(booking, column.field),
                );
        }
        return values;
    }

    private extensionFieldValue(booking: Booking, field: string) {
        return field
            .split('.')
            .filter(Boolean)
            .reduce((value, key) => value?.[key], booking?.extension_data);
    }

    private formatExtensionValue(value: unknown) {
        return Array.isArray(value)
            ? value.join(', ')
            : value && typeof value === 'object'
              ? JSON.stringify(value)
              : value;
    }
}
