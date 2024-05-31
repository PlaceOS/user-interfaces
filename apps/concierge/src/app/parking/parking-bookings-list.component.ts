import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-bookings-list',
    template: `
        <simple-table
            class="min-w-[76rem] block text-sm"
            [data]="events"
            [columns]="[
                { key: 'asset_name', name: 'Bay Number' },
                { key: 'booked_by_name', name: 'Reserved By' },
                { key: 'user_name', name: 'Reverved For' },
                {
                    key: 'plate_number',
                    name: 'Plate Number',
                    content: plate_template
                },
                { key: 'status', name: 'Status', content: status_template },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '7.5rem'
                }
            ]"
            [filter]="(options | async)?.search"
            [sortable]="true"
        ></simple-table>
        <ng-template #plate_template let-row="row">
            <div class="p-4">{{ row?.extension_data?.plate_number }}</div>
        </ng-template>
        <ng-template #status_template let-data="data">
            <span
                class="capitalize px-2 py-1 rounded border border-base-200"
                [class.bg-success]="data === 'approved'"
                [class.bg-warning]="data === 'tentative'"
                [class.bg-error]="data === 'cancelled' || data === 'declined'"
                [class.text-success-content]="data === 'approved'"
                [class.text-warning-content]="data === 'tentative'"
                [class.text-error-content]="
                    data === 'cancelled' || data === 'declined'
                "
            >
                {{ data }}
            </span>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex items-center justify-end">
                <!-- <button icon matTooltip="Reallocate Parking Reservation">
                    <app-icon>published_with_changes</app-icon>
                </button> -->
                <button
                    icon
                    matTooltip="Reject Parking Reservation"
                    (click)="reject(row)"
                >
                    <app-icon>event_busy</app-icon>
                </button>
                <button
                    icon
                    matTooltip="Approve Parking Reservation"
                    (click)="approve(row)"
                >
                    <app-icon>event_available</app-icon>
                </button>
            </div>
        </ng-template>
        <mat-progress-bar
            *ngIf="(loading | async)?.includes('bookings')"
            class="absolute bottom-0 inset-x-0"
        ></mat-progress-bar>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        `,
    ],
})
export class ParkingBookingsListComponent {
    public readonly events = this._state.bookings;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;

    public readonly reject = (e) => this._state.rejectBooking(e);
    public readonly approve = (e) => this._state.approveBooking(e);

    constructor(private _state: ParkingStateService) {}
}
