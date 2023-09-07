import { Component } from '@angular/core';

import { DesksStateService } from './desks-state.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'desk-bookings',
    template: `
        <div class="overflow-auto h-full w-full p-4">
            <custom-table
                class="min-w-[76rem] block"
                [dataSource]="bookings"
                [filter]="(filters | async)?.search"
                [columns]="[
                    'date',
                    'period',
                    'user_name',
                    'group',
                    'asset_name',
                    'approver_name',
                    'status',
                    'checked_in',
                    'actions'
                ]"
                [display_column]="[
                    'Date',
                    'Period',
                    'Person',
                    'Group',
                    'Desk',
                    'Approver',
                    'Status',
                    'Checked In',
                    ' '
                ]"
                [column_size]="[
                    '4r',
                    '10r',
                    'flex',
                    '10r',
                    '10r',
                    '10r',
                    '8r',
                    '7r',
                    '3.5r'
                ]"
                [template]="{
                    user_name: user_template,
                    asset_name: desk_template,
                    date: date_template,
                    period: period_template,
                    status: status_template,
                    checked_in: option_template,
                    access: option_template,
                    actions: action_template
                }"
                [empty]="
                    (filters | async)?.search
                        ? 'No matching desk bookings'
                        : 'There are no desk booking for the currently selected date.'
                "
            ></custom-table>
            <ng-template #date_template let-date="data">
                <div class="flex flex-col items-center justify-center w-full">
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                {{ row.date | date: 'shortTime' }} &ndash;
                {{ row.end | date: 'shortTime' }}
            </ng-template>
            <ng-template #desk_template let-row="row">
                {{ row.asset_name || row.asset_id }}
            </ng-template>
            <ng-template #user_template let-row="row">
                <div class="flex flex-col justify-center">
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
            <ng-template #status_template let-data="data">
                <button
                    matRipple
                    [matMenuTriggerFor]="statusMenu"
                    class="rounded-3xl px-2 py-1 flex items-center space-x-2 capitalize"
                    [class.bg-success]="data === 'approved'"
                    [class.text-white]="data !== 'tentative'"
                    [class.bg-pending]="data === 'tentative'"
                    [class.text-black]="data === 'tentative'"
                    [class.bg-error]="
                        data === 'cancelled' ||
                        data === 'declined' ||
                        data === 'ended'
                    "
                >
                    <div class="ml-2">{{ data }}</div>
                    <app-icon class="text-xl">arrow_drop_down</app-icon>
                </button>
                <mat-menu #statusMenu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl"
                                >event_available</app-icon
                            >
                            <div>Approve Desk</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">event_busy</app-icon>
                            <div>Decline Desk</div>
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
            <ng-template #action_template let-row="row">
                <div class="flex items-center justify-end space-x-2 w-full">
                    <button
                        icon
                        matRipple
                        [disabled]="!row.extension_data?.checkin_qr_code"
                        [matMenuTriggerFor]="menu"
                        matTooltip="View Desk QR code"
                        title=""
                    >
                        <app-icon>qr_code</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <div
                            class="p-2 mx-4 my-2 rounded-lg border border-black"
                        >
                            <img
                                class="w-48"
                                [src]="row.extension_data?.checkin_qr_code"
                            />
                        </div>
                        <div mat-menu-item class="underline">
                            <button btn matRipple class="w-full">
                                Print QR Code
                            </button>
                        </div>
                    </mat-menu>
                </div>
            </ng-template>
        </div>
        <button
            icon
            matRipple
            class="absolute bottom-2 right-2 bg-white shadow"
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
    public readonly bookings = this._state.bookings.pipe(
        map((i) =>
            i.map((booking) => ({
                ...booking,
                end: booking.date + booking.duration * 60 * 1000,
            }))
        )
    );

    public readonly rejectAll = () => this._state.rejectAllDesks();

    public readonly checkin = (d, s?) =>
        this.runMethod('checkin', async () => {
            await this._state.checkinDesk(d, s);
            d.checked_in = s ?? true;
        });
    public readonly approve = (d) =>
        this.runMethod('approve', async () => this._state.approveDesk(d));
    public readonly reject = (d) =>
        this.runMethod('reject', async () => this._state.rejectDesk(d));

    constructor(private _state: DesksStateService) {}

    private async runMethod(name: string, fn: () => Promise<any>) {
        this.loading = name;
        await fn().catch((i) => null);
        this.loading = '';
    }
}
