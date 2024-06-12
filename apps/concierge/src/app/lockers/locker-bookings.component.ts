import { Component } from '@angular/core';

import { LockersStateService } from './locker-state.service';
import { map } from 'rxjs/operators';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'locker-bookings',
    template: `
        <div class="w-full h-4"></div>
        <div class="overflow-auto h-full w-full px-4 pb-4">
            <simple-table
                class="min-w-[76rem] block text-sm w-full"
                [data]="bookings"
                [columns]="[
                    { key: 'date', name: 'Date', content: date_template },
                    { key: 'period', name: 'Period', content: period_template },
                    {
                        key: 'user_name',
                        name: 'Person',
                        content: user_template
                    },
                    { key: 'group', name: 'Group' },
                    {
                        key: 'asset_name',
                        name: 'Locker',
                        content: locker_template
                    },
                    { key: 'approver_name', name: 'Approver' },
                    {
                        key: 'status',
                        name: 'Status',
                        content: status_template,
                        size: '11rem'
                    },
                    {
                        key: 'checked_in',
                        name: 'Checked In',
                        content: option_template,
                        size: '5.5rem'
                    }
                ]"
                [sortable]="true"
                [empty_message]="
                    (filters | async)?.search
                        ? 'No matching locker bookings'
                        : 'There are no locker booking for the currently selected date.'
                "
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex flex-col items-center justify-center w-full px-4 py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <ng-container *ngIf="row.status !== 'declined' && !row.deleted">
                    <ng-container *ngIf="!row.all_day">
                        {{ row.date | date: time_format }} &ndash;
                        {{ row.end | date: time_format }}
                    </ng-container>
                    <ng-container *ngIf="row.all_day">All Day</ng-container>
                </ng-container>
                <ng-container *ngIf="row.status === 'declined' || row.deleted">
                    <div
                        class="text-xs py-1 px-2 bg-error rounded-2xl text-white"
                    >
                        Expired
                    </div>
                </ng-container>
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
                        class="text-xs opacity-30 select-all"
                    >
                        {{ row.user_email }}
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <button
                    matRipple
                    [matMenuTriggerFor]="statusMenu"
                    class="rounded-3xl px-2 py-1 flex items-center space-x-2 capitalize"
                    [class.bg-success]="row.approved"
                    [class.text-white]="row.approved || row.rejected"
                    [class.bg-warning]="!row.approved && !row.rejected"
                    [class.text-black]="!row.approved && !row.rejected"
                    [class.bg-error]="row.rejected"
                >
                    <div class="ml-2">
                        {{
                            row.approved
                                ? 'Approved'
                                : row.rejected
                                ? 'Declined'
                                : 'Tentative'
                        }}
                    </div>
                    <app-icon class="text-xl">arrow_drop_down</app-icon>
                </button>
                <mat-menu #statusMenu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl"
                                >event_available</app-icon
                            >
                            <div>Approve Locker</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">event_busy</app-icon>
                            <div>Decline Locker</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <button
                    matRipple
                    class="rounded-3xl px-2 py-1 text-white flex items-center space-x-2"
                    [matMenuTriggerFor]="checkinMenu"
                    [class.bg-neutral-600]="!data"
                    [class.bg-success]="data"
                    [class.opacity-30]="row.status === 'ended'"
                    [disabled]="row.status === 'ended'"
                    [matTooltip]="
                        row.status === 'ended'
                            ? 'Locker booking has ended'
                            : 'Check-in or check-out locker'
                    "
                >
                    <div class="ml-2">{{ data ? 'Yes' : 'No' }}</div>
                    <app-icon class="text-xl">arrow_drop_down</app-icon>
                </button>
                <mat-menu #checkinMenu="matMenu">
                    <button mat-menu-item (click)="checkin(row, true)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">check</app-icon>
                            <div>Check-in</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkin(row, false)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">cancel</app-icon>
                            <div>Check-out</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
        </div>

        <button
            btn
            matRipple
            class="absolute bottom-2 left-2 w-32 mx-auto my-4"
            *ngIf="!loading && (has_more_pages | async)"
            (click)="loadMore()"
        >
            Load More
        </button>
        <button
            icon
            matRipple
            class="absolute bottom-2 right-2 bg-base-100 shadow"
            [matMenuTriggerFor]="menu"
        >
            <app-icon>more_vert</app-icon>
        </button>
        <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="rejectAll()">Reject All</button>
        </mat-menu>
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
})
export class LockerBookingsComponent {
    public loading: string;
    public readonly filters = this._state.filters;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly bookings = this._state.bookings.pipe(
        map((i) =>
            i.map((booking) => ({
                ...booking,
                end: booking.date + booking.duration * 60 * 1000,
            }))
        )
    );

    public readonly rejectAll = () => this._state.rejectAllLockers();
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
        private _state: LockersStateService,
        private _settings: SettingsService
    ) {}

    private async runMethod(name: string, fn: () => Promise<any>) {
        this.loading = name;
        await fn().catch((i) => null);
        this.loading = '';
    }
}
