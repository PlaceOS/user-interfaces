import { Component } from '@angular/core';

import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'desk-bookings',
    template: `
        <div class="overflow-auto h-full w-full">
            <custom-table
                class="min-w-[76rem]"
                [dataSource]="bookings"
                [filter]="(filters | async)?.search"
                [columns]="[
                    'user_name',
                    'group',
                    'desk_name',
                    'date',
                    'status',
                    'approver_name',
                    'checked_in',
                    'access',
                    'actions'
                ]"
                [display_column]="[
                    'Person',
                    'Group',
                    'Desk',
                    'Date',
                    'Status',
                    'Approver',
                    'Checked In',
                    'Access',
                    ' '
                ]"
                [column_size]="[
                    'flex',
                    '',
                    '',
                    '12r',
                    '',
                    '10r',
                    '',
                    '',
                    '12r'
                ]"
                [template]="{
                    user_name: user_template,
                    desk_name: desk_template,
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
            <ng-template #date_template let-data="data">
                {{ data | date }} at {{ data | date: 'shortTime' }}
            </ng-template>
            <ng-template #desk_template let-row="row">
                {{ row.asset_name || row.asset_id }}
            </ng-template>
            <ng-template #user_template let-row="row">
                {{
                    row.user_name ||
                        row.user_email ||
                        row.booked_by_name ||
                        row.booked_by_email
                }}
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
                {{ data ? 'Yes' : 'No' }}
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="flex items-center justify-end space-x-2">
                    <action-icon (click)="checkin(row)">how_to_reg</action-icon>
                    <button
                        icon
                        matRipple
                        (click)="approve(row)"
                        matTooltip="Approve Desk"
                    >
                        <app-icon>event_available</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="reject(row)"
                        matTooltip="Reject Desk"
                    >
                        <app-icon>event_busy</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [disabled]="!row.extension_data?.checkin_qr_code"
                        [matMenuTriggerFor]="menu"
                        matTooltip="View Desk QR code"
                    >
                        <app-icon *ngIf="row.extension_data?.checkin_qr_code">
                            qr_code
                        </app-icon>
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
    public readonly bookings = this._state.bookings;

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
