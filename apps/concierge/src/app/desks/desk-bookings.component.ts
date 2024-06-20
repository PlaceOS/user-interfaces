import { Component } from '@angular/core';

import { DesksStateService } from './desks-state.service';
import { map } from 'rxjs/operators';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'desk-bookings',
    template: `
        <div class="overflow-auto h-full w-full pb-4">
            <simple-table
                class="min-w-[72rem] block text-sm"
                [data]="bookings"
                [filter]="(filters | async)?.search"
                [columns]="[
                    {
                        key: 'date',
                        name: 'Date',
                        content: date_template,
                        size: '4rem',
                        sortable: false
                    },
                    {
                        key: 'period',
                        name: 'Period',
                        content: period_template,
                        size: '9rem'
                    },
                    {
                        key: 'user_name',
                        name: 'Person',
                        content: user_template
                    },
                    { key: 'group', name: 'Group', content: group_template },
                    { key: 'asset_name', name: 'Desk' },
                    { key: 'approver', name: 'Approver' },
                    {
                        key: 'status',
                        name: 'Status',
                        content: status_template,
                        size: '8.5rem',
                        sortable: false
                    },
                    {
                        key: 'checked_in',
                        name: 'Checked In',
                        content: option_template,
                        size: '7rem',
                        sortable: false
                    }
                ]"
                [empty_message]="
                    (filters | async)?.search
                        ? 'No matching desk bookings'
                        : 'There are no desk booking for the currently selected date.'
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex flex-col items-center justify-center w-full py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #group_template let-row="row">
                <div class="p-4 text-[0.625rem] font-mono">
                    {{ row.group || row.extension_data?.group }}
                    <span
                        class="opacity-30"
                        *ngIf="!(row.group || row.extension_data?.group)"
                    >
                        No Group
                    </span>
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
                            <ng-container *ngIf="!row.all_day">
                                {{ row.date | date: time_format }} &ndash;
                                {{ row.date_end | date: time_format }}
                            </ng-container>
                            <ng-container *ngIf="row.all_day"
                                >All Day</ng-container
                            >
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
                            class="text-xs py-2 px-4 bg-error rounded-3xl text-white"
                        >
                            {{
                                row.status === 'ended'
                                    ? 'Manually Ended'
                                    : 'Expired'
                            }}
                        </div>
                    </ng-container>
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
                <div class="px-2">
                    <button
                        matRipple
                        class="rounded-3xl bg-warning text-warning-content border-none w-[7.5rem] h-10"
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
                        <div class="flex items-center pl-4 pr-2 space-x-2">
                            <div class="flex-1 text-left">
                                {{
                                    row?.status === 'ended'
                                        ? 'Ended'
                                        : row?.status === 'approved'
                                        ? 'Approved'
                                        : row?.status === 'declined'
                                        ? 'Declined'
                                        : 'Pending'
                                }}
                            </div>
                            <app-icon class="text-2xl"
                                >arrow_drop_down</app-icon
                            >
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl"
                                >event_available</app-icon
                            >
                            <div class="pr-2">Approve Desk</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">event_busy</app-icon>
                            <div class="pr-2">Decline Desk</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="rounded-3xl bg-warning text-warning-content border-none w-[4.5rem] h-10"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.!bg-neutral]="!data"
                        [class.!text-neutral-content]="!data"
                        [class.!bg-success]="data"
                        [class.!text-success-content]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Desk booking has ended'
                                : 'Check-in or check-out desk'
                        "
                    >
                        <div class="flex items-center pl-4 pr-2 space-x-2">
                            <div class="flex-1 text-left">
                                {{ data ? 'Yes' : 'No' }}
                            </div>
                            <app-icon class="text-2xl">
                                arrow_drop_down
                            </app-icon>
                        </div>
                    </button>
                </div>
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
export class DeskBookingsComponent {
    public loading: string;
    public readonly filters = this._state.filters;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly bookings = this._state.bookings;

    public readonly rejectAll = () => this._state.rejectAllDesks();
    public readonly loadMore = () => this._state.nextPage();

    public get columns() {
        return [
            'date',
            'period',
            'user_name',
            'group',
            'asset_name',
            'approver_name',
            'status',
            'checked_in',
        ];
    }

    public readonly checkin = (d, s?) =>
        this.runMethod('checkin', async () => {
            await this._state.checkinDesk(d, s);
            d.checked_in = s ?? true;
        });
    public readonly approve = (d) =>
        this.runMethod('approve', async () => this._state.approveDesk(d));
    public readonly reject = (d) =>
        this.runMethod('reject', async () => this._state.rejectDesk(d));

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: DesksStateService,
        private _settings: SettingsService
    ) {}

    private async runMethod(name: string, fn: () => Promise<any>) {
        this.loading = name;
        await fn().catch((i) => null);
        this.loading = '';
    }
}
