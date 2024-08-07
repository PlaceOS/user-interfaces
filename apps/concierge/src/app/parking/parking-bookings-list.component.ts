import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-bookings-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('bookings')"
            class="sticky left-0 w-full"
        ></mat-progress-bar>
        <simple-table
            class="min-w-[76rem] block text-sm"
            [data]="events"
            [columns]="[
                {
                    key: 'state',
                    name: 'In Use',
                    content: state_template,
                    size: '4.75rem',
                    sortable: false,
                },
                { key: 'description', name: 'Bay Number' },
                {
                    key: 'user_name',
                    name: 'Reserved For',
                    content: person_template,
                },
                {
                    key: 'booked_by_name',
                    name: 'Reserved By',
                    content: host_template,
                },
                {
                    key: 'plate_number',
                    name: 'Plate Number',
                    content: plate_template,
                    size: '10rem',
                    sortable: false,
                },
                {
                    key: 'status',
                    name: 'Status',
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
        ></simple-table>
        <ng-template #person_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.user_name || row.user_email }}</div>
                <div
                    *ngIf="row.user_name && row.user_email"
                    class="opacity-30 text-xs"
                >
                    {{ row.user_email }}
                </div>
            </div>
        </ng-template>
        <ng-template #host_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.booked_by_name || row.booked_by_email }}</div>
                <div
                    *ngIf="row.booked_by_name && row.booked_by_email"
                    class="opacity-30 text-xs"
                >
                    {{ row.booked_by_email }}
                </div>
            </div>
        </ng-template>
        <ng-template #state_template let-row="row">
            <div
                *ngIf="!row?.checked_in && row.checked_out_at"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-300 text-base-100 mx-auto"
                [matTooltip]="
                    'Left at ' + (row.checked_out_at * 1000 | date: time_format)
                "
                matTooltipPosition="right"
            >
                <app-icon>done</app-icon>
            </div>
            <div
                *ngIf="!row?.checked_in && !row.checked_out_at"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto"
                matTooltip="Has not arrived at space"
                matTooltipPosition="right"
            >
                <app-icon>question_mark</app-icon>
            </div>
            <div
                *ngIf="row?.checked_in"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto"
                matTooltip="Arrived at space"
                matTooltipPosition="right"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #plate_template let-row="row">
            <div class="p-4 font-mono text-sm uppercase">
                {{ row?.extension_data?.plate_number }}
                <span
                    *ngIf="!row?.extension_data?.plate_number"
                    class="opacity-30"
                >
                    N/A
                </span>
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="rounded-3xl border-none w-[7.5rem] h-10"
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
                        <app-icon class="text-2xl">arrow_drop_down</app-icon>
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approve(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_available</app-icon>
                        <div class="pr-2">Approve Reservation</div>
                    </div>
                </button>
                <button mat-menu-item (click)="reject(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_busy</app-icon>
                        <div class="pr-2">Decline Reservation</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end space-x-2 mx-auto">
                <button
                    icon
                    matRipple
                    [matMenuTriggerFor]="menu"
                    [disabled]="row.checked_in || row.status === 'ended'"
                    (click)="editReservation(row)"
                >
                    <app-icon class="text-2xl">edit</app-icon>
                </button>
            </div>
        </ng-template>
        <div class="w-full h-20"></div>
    `,
    styles: [``],
})
export class ParkingBookingsListComponent {
    public readonly events = this._state.bookings;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;

    public readonly reject = (e) => this._state.rejectBooking(e);
    public readonly approve = (e) => this._state.approveBooking(e);
    public readonly editReservation = (e) => this._state.editReservation(e);

    constructor(private _state: ParkingStateService) {}
}
