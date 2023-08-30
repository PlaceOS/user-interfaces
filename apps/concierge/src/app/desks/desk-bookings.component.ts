import { Component } from '@angular/core';

import { DesksStateService } from './desks-state.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'desk-bookings',
    template: `
        <div class="overflow-auto h-full w-full">
            <custom-table
                class="min-w-[85rem] block"
                [dataSource]="bookings"
                [filter]="(filters | async)?.search"
                [columns]="[
                    'user_name',
                    'group',
                    'asset_name',
                    'date',
                    'status',
                    'approver_name',
                    'checked_in',
                    'actions'
                ]"
                [display_column]="[
                    'Person',
                    'Group',
                    'Desk',
                    'Period',
                    'Status',
                    'Approver',
                    'Checked In',
                    ' '
                ]"
                [column_size]="[
                    '14r',
                    '10r',
                    '10r',
                    '10r',
                    '7r',
                    '10r',
                    '8r',
                    'flex'
                ]"
                [template]="{
                    user_name: user_template,
                    asset_name: desk_template,
                    date: date_template,
                    status: status_template,
                    checked_in: bool_template,
                    access: bool_template,
                    actions: action_template
                }"
                [empty]="
                    (filters | async)?.search
                        ? 'No matching desk bookings'
                        : 'There are no desk booking for the currently selected date.'
                "
            ></custom-table>
            <ng-template #date_template let-row="row">
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
                <span
                    class="capitalize text-white px-2 py-1 rounded border border-gray-200"
                    [class.bg-success]="data === 'approved'"
                    [class.bg-pending]="data === 'tentative'"
                    [class.bg-error]="
                        data === 'cancelled' ||
                        data === 'declined' ||
                        data === 'ended'
                    "
                >
                    {{ data }}
                </span>
            </ng-template>
            <ng-template #bool_template let-data="data">
                <div
                    [class.bg-red-500]="!data"
                    [class.bg-green-500]="data"
                    class="rounded h-8 w-8 flex items-center justify-center text-2xl text-white mx-auto"
                >
                    <app-icon>{{ data ? 'done' : 'close' }}</app-icon>
                </div>
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
                        <app-icon *ngIf="row.extension_data?.checkin_qr_code">
                            qr_code
                        </app-icon>
                    </button>
                    <action-icon matTooltip="Check-in" (click)="checkin(row)">
                        how_to_reg
                    </action-icon>
                    <button
                        icon
                        matRipple
                        (click)="approve(row)"
                        matTooltip="Approve Desk"
                        title=""
                    >
                        <app-icon>event_available</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="reject(row)"
                        matTooltip="Reject Desk"
                        title=""
                    >
                        <app-icon>event_busy</app-icon>
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

    public readonly checkin = (d) =>
        this.runMethod('checkin', async () => this._state.checkinDesk(d));
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
