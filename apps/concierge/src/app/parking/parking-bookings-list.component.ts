import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnInit,
    TemplateRef,
} from '@angular/core';
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
    TableColumn,
    TranslatePipe,
} from '@placeos/components';
import { ParkingBookingsWeekViewComponent } from './parking-bookings-week-view.component';
import { ParkingOptions, ParkingStateService } from './parking-state.service';
import { isParkingAllDayBooking } from './parking.utilities';

interface ParkingBookingExtensionColumn {
    field: string;
    name?: string;
    display_name?: string;
    size?: string;
}

interface ParkingBookingColumnTemplates {
    state_template: TemplateRef<any>;
    type_template: TemplateRef<any>;
    date_template: TemplateRef<any>;
    bay_template: TemplateRef<any>;
    person_template: TemplateRef<any>;
    host_template: TemplateRef<any>;
    plate_template: TemplateRef<any>;
    status_template: TemplateRef<any>;
    action_template: TemplateRef<any>;
    status_busy_label: string;
    type_label: string;
    time_label: string;
    bay_number_label: string;
    reserved_for_label: string;
    reserved_by_label: string;
    plate_number_label: string;
    status_label: string;
}

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
                [columns]="
                    bookingColumns({
                        state_template,
                        type_template,
                        date_template,
                        bay_template,
                        person_template,
                        host_template,
                        plate_template,
                        status_template,
                        action_template,
                        status_busy_label: 'COMMON.STATUS_BUSY' | translate,
                        type_label: 'COMMON.TYPE' | translate,
                        time_label: 'FORM.TIME' | translate,
                        bay_number_label:
                            'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                        reserved_for_label:
                            'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                        reserved_by_label:
                            'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                        plate_number_label:
                            'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        status_label: 'COMMON.STATUS' | translate,
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
                                              | date: time_format : timezone),
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
                            row?.status === 'approved' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.bg-success]="
                            row?.status === 'approved' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.text-secondary-content!]="isAssignedBooking(row)"
                        [class.bg-secondary!]="isAssignedBooking(row)"
                        [class.text-neutral-content!]="isDeletedBooking(row)"
                        [class.bg-neutral!]="isDeletedBooking(row)"
                        [class.text-error-content]="
                            row?.status === 'declined' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.bg-error]="
                            row?.status === 'declined' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.text-neutral-content]="
                            row?.status === 'ended' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.bg-neutral]="
                            row?.status === 'ended' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.opacity-30]="
                            isStatusActionDisabled(row) &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row)
                        "
                        [class.text-warning-content]="
                            row?.status === 'tentative' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row) &&
                            !isVisibleWaitlisted(row)
                        "
                        [class.bg-warning]="
                            row?.status === 'tentative' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row) &&
                            !isVisibleWaitlisted(row)
                        "
                        [class.text-info-content]="
                            row?.status === 'tentative' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row) &&
                            isVisibleWaitlisted(row)
                        "
                        [class.bg-info]="
                            row?.status === 'tentative' &&
                            !isAssignedBooking(row) &&
                            !isDeletedBooking(row) &&
                            isVisibleWaitlisted(row)
                        "
                        [matMenuTriggerFor]="menu"
                        [disabled]="isStatusActionDisabled(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{ statusLabel(row) | translate }}
                            </div>
                            @if (!isStatusActionDisabled(row)) {
                                <icon class="text-2xl">arrow_drop_down</icon>
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
                                <icon class="text-2xl">event_available</icon>
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
                                <icon class="text-2xl">event_available</icon>
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
                    }
                </mat-menu>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div
                    class="flex w-full items-center justify-end space-x-2 px-2"
                >
                    @if (isRequest(row) && !hide_assign_space) {
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
                    @if (can_delete()) {
                        <button
                            icon
                            matRipple
                            [disabled]="
                                row.checked_in ||
                                row.state === 'in_progress' ||
                                row.status === 'ended'
                            "
                            [matTooltip]="
                                'APP.CONCIERGE.BOOKING_REMOVE_TITLE' | translate
                            "
                            (click)="removeBooking(row)"
                        >
                            <icon class="text-2xl">delete</icon>
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
            ...this.customExtensionColumnValues(booking),
        }));
    });

    public action_count(row) {
        let count = 0;
        if (this.isRequest(row) && !this.hide_assign_space) count += 1;
        if (this.can_edit()) count += 1;
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
    public readonly isRequest = (e) => this._state.isRequest(e);
    public readonly isManualRequest = (e) => this._state.isManualRequest(e);
    public readonly isWaitlisted = (e) => this._state.isWaitlisted(e);
    public readonly bookingTypeSort = (a: number, b: number) => a - b;
    public readonly canApproveBooking = (e: Booking) =>
        this._state.canApproveBooking(e);
    public readonly isStatusActionDisabled = (e: Booking) =>
        e?.status === 'ended' ||
        this.isAssignedBooking(e) ||
        this.isDeletedBooking(e) ||
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

    public readonly can_edit = settingSignal('parking.allow_editing', true);
    public readonly can_delete = settingSignal('parking.allow_deleting', false);

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

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get timezone() {
        return this._state.timezone;
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

    public isAssignedBooking(booking: Booking) {
        return !!booking?.extension_data?.is_assigned;
    }

    public isDeletedBooking(booking: Booking) {
        return !!booking?.deleted;
    }

    public isRecurringInstance(booking: Booking) {
        return !!booking?.instance;
    }

    public isAllDayBooking(booking: Booking) {
        return isParkingAllDayBooking(booking, this.timezone);
    }

    public statusLabel(booking: Booking) {
        return this.isAssignedBooking(booking)
            ? 'APP.CONCIERGE.BOOKING_STATUS_ASSIGNED'
            : this.isDeletedBooking(booking)
              ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
              : booking?.status === 'ended'
                ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                : booking?.status === 'approved'
                  ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                  : booking?.status === 'declined'
                    ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                    : this.isVisibleWaitlisted(booking)
                      ? 'APP.CONCIERGE.PARKING_WAITLISTED'
                      : 'APP.CONCIERGE.BOOKING_STATUS_PENDING';
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
                key: 'booking_type',
                name: templates.type_label,
                content: templates.type_template,
                size: '5.5rem',
                sort_fn: this.bookingTypeSort,
                show: this.show_request_types,
            },
            {
                key: 'date',
                name: templates.time_label,
                content: templates.date_template,
            },
            {
                key: 'asset_id',
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
                sortable: false,
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
                key: 'actions',
                name: ' ',
                content: templates.action_template,
                size: 3.5 + (max_count - 1) * 3 + 'rem',
                sortable: false,
                show: this.show_action_column(),
            },
        ];
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
