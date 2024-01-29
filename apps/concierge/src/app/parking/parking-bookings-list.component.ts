import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-bookings-list',
    template: `
        <custom-table
            class="block min-w-[60rem]"
            [dataSource]="events"
            [columns]="[
                'asset_name',
                'booked_by_name',
                'user_name',
                'plate_number',
                'status',
                'actions'
            ]"
            [display_column]="[
                'Bay No.',
                'Reserved By',
                'Reserved For',
                'Car Plate #',
                'Status',
                ' '
            ]"
            [filter]="(options | async).search"
            [column_size]="['6r', 'flex', '14r', '8r', '6r', '6r']"
            [template]="{
                plate_number: plate_template,
                actions: action_template,
                status: status_template
            }"
            [class.opacity-50]="(loading | async)?.includes('bookings')"
        ></custom-table>
        <ng-template #plate_template let-row="row">
            {{ row?.extension_data?.plate_number }}
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
