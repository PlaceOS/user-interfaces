import { Component } from '@angular/core';
import { ParkingStateService } from './parking-state.service';
import { AsyncHandler } from '@placeos/common';
import { combineLatest } from 'rxjs';
import { ParkingSpace } from '@placeos/explore';
import { Booking } from '@placeos/bookings';

@Component({
    selector: 'parking-space-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('spaces')"
            class="w-full"
        ></mat-progress-bar>
        <simple-table
            class="min-w-[76rem] block text-sm"
            [data]="spaces"
            [columns]="[
                { key: 'name', name: 'Name' },
                { key: 'map_id', name: 'Bay Number', content: id_template },
                { key: 'assigned_to', name: 'Assigned' },
                { key: 'notes', name: 'Notes' },
                {
                    key: 'status',
                    name: 'Status Today',
                    content: status_template,
                    sortable: false,
                    size: '4.5rem'
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    sortable: false,
                    size: '7.5rem'
                }
            ]"
            [filter]="(options | async)?.search"
            [sortable]="true"
        ></simple-table>
        <ng-template #status_template let-row="row">
            <div
                class="flex items-center justify-center h-8 w-8 rounded bg-warning text-warning-content mx-auto"
                [class.!bg-success]="space_status[row.id]?.includes('free')"
                [class.!text-success-content]="
                    space_status[row.id]?.includes('free')
                "
                [class.!bg-error]="space_status[row.id]?.includes('busy')"
                [class.!text-error-content]="
                    space_status[row.id]?.includes('busy')
                "
                [matTooltip]="statusTooltip(space_status[row.id])"
                matTooltipPosition="left"
            >
                <app-icon class="text-2xl">
                    {{
                        space_status[row.id]?.includes('assigned')
                            ? 'person'
                            : space_status[row.id]?.includes('reuse')
                            ? 'alert'
                            : 'question_mark'
                    }}
                </app-icon>
            </div>
        </ng-template>
        <ng-template #id_template let-data="data">
            <span class="font-mono text-sm p-4">{{ data }}</span>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex items-center justify-end space-x-2 px-4">
                <button
                    icon
                    matRipple
                    (click)="editSpace(row)"
                    matTooltip="Edit Parking Space"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    matTooltip="Remove Parking Space"
                    (click)="removeSpace(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
        <div class="w-full h-20"></div>
    `,
    styles: [],
})
export class ParkingSpaceListComponent extends AsyncHandler {
    public readonly spaces = this._state.spaces;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly bookings = this._state.bookings;

    public readonly space_status: Record<string, string> = {};

    public readonly editSpace = (s?) => this._state.editSpace(s);
    public readonly removeSpace = (s) => this._state.removeSpace(s);

    constructor(private _state: ParkingStateService) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'bookings',
            combineLatest([this.spaces, this.bookings]).subscribe(
                ([spaces, bookings]) => this._updateStatusList(spaces, bookings)
            )
        );
    }

    public statusTooltip(status: string) {
        switch (status) {
            case 'assigned_free':
                return 'Space is assigned to a user but available for use';
            case 'assigned_busy':
                return 'Space is assigned to a user and in use';
            case 'reuse_busy':
                return 'Space is assigned to a user and in use';
            case 'busy':
                return 'Space is unassigned and in use';
            case 'free':
                return 'Space is unassigned and available for use';
        }
        return 'Space is unassigned and available for use';
    }

    private _updateStatusList(spaces: ParkingSpace[], bookings: Booking[]) {
        for (const space of spaces) {
            const booking = bookings.find(
                (_) =>
                    _.asset_id === space.id &&
                    _.status !== 'declined' &&
                    _.status !== 'cancelled'
            );
            if (space.assigned_to && !booking) {
                this.space_status[space.id] = 'assigned_free';
            } else if (
                space.assigned_to &&
                booking &&
                booking.user_email === space.assigned_to
            ) {
                this.space_status[space.id] = 'assigned_busy';
            } else if (
                space.assigned_to &&
                booking &&
                booking.user_email !== space.assigned_to
            ) {
                this.space_status[space.id] = 'reuse_busy';
            } else if (!space.assigned_to && booking) {
                this.space_status[space.id] = 'busy';
            } else {
                this.space_status[space.id] = 'free';
            }
        }
        console.log('Space Status:', this.space_status);
    }
}
