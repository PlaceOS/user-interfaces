import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { combineLatest, map } from 'rxjs';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-bookings-list',
    template: `
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
                    key: 'asset_name',
                    name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
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
                    size: '3.5rem',
                    sortable: false,
                },
            ]"
            [filter]="(options | async)?.search"
            [sortable]="true"
            [empty_message]="'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY' | translate"
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-base-300 text-2xl text-base-100"
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-warning text-2xl text-warning-content"
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
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm bg-success text-2xl text-success-content"
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
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.opacity-30]="row?.status === 'ended'"
                    [class.text-warning-content]="row?.status === 'tentative'"
                    [class.bg-warning]="row?.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="row?.status === 'ended'"
                >
                    <div class="flex items-center space-x-2 pl-4 pr-2">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
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
                            {{ 'APP.CONCIERGE.PARKING_APPROVE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="reject(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_busy</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_DECLINE' | translate }}
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
                    [disabled]="
                        row.checked_in ||
                        row.state === 'in_progress' ||
                        row.status === 'ended' ||
                        row.instance
                    "
                    [matTooltip]="'APP.CONCIERGE.PARKING_EDIT' | translate"
                    (click)="editReservation(row)"
                >
                    <icon class="text-2xl">edit</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
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
        IconComponent,
    ],
})
export class ParkingBookingsListComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(ParkingStateService);
    private _settings = inject(SettingsService);

    public readonly events = this._state.bookings;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;

    public readonly filtered_events = combineLatest([
        this._state.bookings,
        this.options,
    ]).pipe(
        map(([booking_list, { search }]) => {
            const s = search.toLowerCase();
            return !s
                ? booking_list
                : booking_list.filter(
                      (b) =>
                          b.user_name.toLowerCase().includes(s) ||
                          b.user_email.toLowerCase().includes(s) ||
                          b.booked_by_name.toLowerCase().includes(s) ||
                          b.booked_by_email.toLowerCase().includes(s) ||
                          b.asset_name.toLowerCase().includes(s),
                  );
        }),
    );

    public readonly reject = (e) => this._state.rejectBooking(e);
    public readonly approve = (e) => this._state.approveBooking(e);
    public readonly editReservation = (e) => this._state.editReservation(e);

    public get time_format() {
        return this._settings.time_format;
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
    }
}
