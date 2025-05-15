import { Component } from '@angular/core';

import { SettingsService } from '@placeos/common';
import { map } from 'rxjs/operators';
import { LockerStateService } from './locker-state.service';

@Component({
    selector: 'locker-bookings',
    template: `
        @let more_pages = has_more_pages | async;
        <div class="h-4 w-full"></div>
        <div
            class="flex h-full w-full flex-col pt-4"
            [class.pb-16]="!loading && more_pages"
            [class.pb-4]="!(!loading && more_pages)"
        >
            <simple-table
                class="mr-4 block w-full min-w-[72rem] flex-1 overflow-auto text-sm"
                [data]="bookings"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    {
                        key: 'user_name',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    { key: 'group', name: 'COMMON.GROUP' | translate },
                    {
                        key: 'asset_name',
                        name: 'RESOURCE.LOCKER' | translate,
                        content: locker_template,
                    },
                    {
                        key: 'approver_name',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '11rem',
                    },
                ]"
                [sortable]="true"
                [page_size]="100"
                [empty_message]="
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    <ng-container
                        *ngIf="
                            row.status !== 'declined' &&
                            !row.deleted &&
                            row.status !== 'ended'
                        "
                    >
                        <div class="p-2">
                            <ng-container
                                *ngIf="!(row.all_day || row.duration > 12 * 60)"
                            >
                                {{ row.date | date: time_format }} &ndash;
                                {{ row.date_end | date: time_format }}
                            </ng-container>
                            <ng-container
                                *ngIf="row.all_day || row.duration > 12 * 60"
                            >
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </ng-container>
                        </div>
                    </ng-container>
                    <ng-container
                        *ngIf="
                            row.status === 'declined' ||
                            row.deleted ||
                            row.status === 'ended'
                        "
                    >
                        <div
                            class="rounded-3xl bg-error px-4 py-2 text-xs text-white"
                        >
                            {{
                                (row.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_ENDED'
                                    : 'APP.CONCIERGE.BOOKING_EXPIRED'
                                ) | translate
                            }}
                        </div>
                    </ng-container>
                </div>
            </ng-template>
            <ng-template #locker_template let-row="row">
                <div class="p-4">
                    {{ row.asset_name || row.asset_id }}
                </div>
            </ng-template>
            <ng-template #user_template let-row="row">
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{
                            row.user_name ||
                                row.user_email ||
                                row.booked_by_name ||
                                row.booked_by_email
                        }}
                    </div>
                    <div
                        *ngIf="row.user_name"
                        class="select-all text-xs opacity-30"
                    >
                        {{ row.user_email }}
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="h-10 w-[7.5rem] rounded-3xl border-none bg-warning text-warning-content"
                        [class.!text-success-content]="
                            row?.status === 'approved'
                        "
                        [class.!bg-success]="row?.status === 'approved'"
                        [class.!text-error-content]="row?.status === 'declined'"
                        [class.!bg-error]="row?.status === 'declined'"
                        [class.!text-neutral-content]="row?.status === 'ended'"
                        [class.!bg-neutral]="row?.status === 'ended'"
                        [class.opacity-30]="row?.status === 'ended'"
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
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_APPROVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_DECLINE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="h-10 w-24 rounded-3xl border-none bg-warning text-warning-content"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.!bg-neutral]="!data"
                        [class.!text-neutral-content]="!data"
                        [class.!bg-success]="data"
                        [class.!text-success-content]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Locker booking has ended'
                                : 'Check-in or check-out locker'
                        "
                    >
                        <div class="flex items-center space-x-2 pl-4 pr-2">
                            <div class="flex-1 text-left">
                                {{
                                    (data ? 'COMMON.TRUE' : 'COMMON.FALSE')
                                        | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #checkinMenu="matMenu">
                    <button mat-menu-item (click)="checkin(row, true)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">check</icon>
                            <div>{{ 'COMMON.CHECK_IN' | translate }}</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkin(row, false)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">cancel</icon>
                            <div>{{ 'COMMON.CHECK_OUT' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
        </div>
        <button
            btn
            matRipple
            class="absolute bottom-2 left-4 z-20 w-32"
            *ngIf="!loading && more_pages"
            (click)="loadMore()"
        >
            {{ 'COMMON.LOAD_MORE' | translate }}
        </button>
    `,
    styles: [
        `
            :host {
                position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class LockerBookingsComponent {
    public loading: string;
    public readonly filters = this._state.filters;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly bookings = this._state.filtered_bookings.pipe(
        map((i) =>
            i.map((booking) => ({
                ...booking,
                end: booking.date + booking.duration * 60 * 1000,
            })),
        ),
    );

    public readonly loadMore = () => this._state.nextPage();

    public readonly checkin = (d, s?) =>
        this.runMethod('checkin', async () => {
            await this._state.checkinLocker(d, s);
            d.checked_in = s ?? true;
        });
    public readonly approve = (d) =>
        this.runMethod('approve', async () => this._state.approveLocker(d));
    public readonly reject = (d) =>
        this.runMethod('reject', async () => this._state.rejectLocker(d));

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: LockerStateService,
        private _settings: SettingsService,
    ) {}

    private async runMethod(name: string, fn: () => Promise<any>) {
        this.loading = name;
        await fn().catch((i) => null);
        this.loading = '';
    }
}
