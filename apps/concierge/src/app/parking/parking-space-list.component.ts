import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { AsyncHandler, i18n, notifySuccess } from '@placeos/common';
import { ParkingSpace } from '@placeos/explore';
import { combineLatest } from 'rxjs';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-space-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('spaces')"
            class="w-full"
        ></mat-progress-bar>
        <simple-table
            class="block min-w-[52rem] text-sm"
            [data]="spaces"
            [columns]="[
                {
                    key: 'name',
                    name: 'APP.CONCIERGE.PARKING_BAY' | translate,
                    content: name_template,
                },
                {
                    key: 'assigned_to',
                    name: 'Assigned',
                    content: assigned_template,
                },
                { key: 'notes', name: 'FORM.NOTES' | translate },
                {
                    key: 'status',
                    name: 'COMMON.STATUS' | translate,
                    content: status_template,
                    sortable: false,
                    size: '4.5rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    sortable: false,
                    size: '6.5rem',
                },
            ]"
            [filter]="(options | async)?.search"
            [sortable]="true"
        ></simple-table>
        <ng-template #status_template let-row="row">
            <div
                class="mx-auto flex h-8 w-8 items-center justify-center rounded"
                [class.bg-warning]="
                    !space_status[row.id]?.includes('free') &&
                    !space_status[row.id]?.includes('busy')
                "
                [class.text-warning-content]="
                    !space_status[row.id]?.includes('free') &&
                    !space_status[row.id]?.includes('busy')
                "
                [class.bg-success]="space_status[row.id]?.includes('free')"
                [class.text-success-content]="
                    space_status[row.id]?.includes('free')
                "
                [class.bg-error]="space_status[row.id]?.includes('busy')"
                [class.text-error-content]="
                    space_status[row.id]?.includes('busy')
                "
                [matTooltip]="statusTooltip(space_status[row.id]) | translate"
                matTooltipPosition="left"
            >
                <icon class="text-2xl">
                    {{
                        space_status[row.id]?.includes('assigned')
                            ? 'person'
                            : space_status[row.id]?.includes('reuse')
                              ? 'event_available'
                              : 'question_mark'
                    }}
                </icon>
            </div>
        </ng-template>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.map_id || row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #assigned_template let-row="row" let-data="data">
            @if (!data) {
                <div class="p-4 opacity-30">
                    {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                </div>
            }
            @if (data) {
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(data, 'assigned')"
                >
                    <div class="">{{ row.assigned_name || data }}</div>
                    @if (row.assigned_name) {
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ data }}
                        </div>
                    }
                </button>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center space-x-2">
                <button
                    icon
                    matRipple
                    (click)="editSpace(row)"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_SPACE_EDIT' | translate
                    "
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_SPACE_REMOVE' | translate
                    "
                    (click)="removeSpace(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
    `,
    styles: [],
    standalone: false,
})
export class ParkingSpaceListComponent extends AsyncHandler {
    public readonly spaces = this._state.spaces;
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly bookings = this._state.bookings;

    public readonly space_status: Record<string, string> = {};

    public readonly editSpace = (s?) => this._state.editSpace(s);
    public readonly removeSpace = (s) => this._state.removeSpace(s);

    constructor(
        private _state: ParkingStateService,
        private _clipboard: Clipboard,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'bookings',
            combineLatest([this.spaces, this.bookings]).subscribe(
                ([spaces, bookings]) =>
                    this._updateStatusList(spaces, bookings),
            ),
        );
    }

    public copyToClipboard(id: string, type?: string) {
        const success = this._clipboard.copy(id);
        if (success)
            notifySuccess(
                i18n(
                    type
                        ? 'APP.CONCIERGE.PARKING_COPIED_USER'
                        : 'APP.CONCIERGE.PARKING_COPIED_ID',
                ),
            );
    }

    public statusTooltip(status: string) {
        switch (status) {
            case 'assigned_free':
                return 'APP.CONCIERGE.PARKING_STATUS_ASSIGNED_FREE';
            case 'assigned_busy':
                return 'APP.CONCIERGE.PARKING_STATUS_ASSIGNED_BUSY';
            case 'reuse_busy':
                return 'APP.CONCIERGE.PARKING_STATUS_ASSIGNED_OTHER';
            case 'busy':
                return 'APP.CONCIERGE.PARKING_STATUS_BUSY';
            case 'free':
                return 'APP.CONCIERGE.PARKING_STATUS_FREE';
        }
        return 'APP.CONCIERGE.PARKING_STATUS_FREE';
    }

    private _updateStatusList(spaces: ParkingSpace[], bookings: Booking[]) {
        for (const space of spaces) {
            const booking = bookings.find(
                (_) =>
                    _.asset_id === space.id &&
                    _.status !== 'declined' &&
                    _.status !== 'cancelled' &&
                    _.status !== 'ended',
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
    }
}
