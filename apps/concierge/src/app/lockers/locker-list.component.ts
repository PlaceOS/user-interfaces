import { Component } from '@angular/core';
import { LockerStateService } from './locker-state.service';
import { AsyncHandler, notifySuccess } from '@placeos/common';
import { combineLatest } from 'rxjs';
import { Booking, Locker } from '@placeos/bookings';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'locker-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('lockers')"
            class="w-full"
        ></mat-progress-bar>
        <simple-table
            class="min-w-[52rem] block text-sm"
            [data]="locker_banks"
            [columns]="[
                { key: 'name', name: 'Locker Bank', content: name_template },
                { key: 'map_id', name: 'Map ID', content: id_template },
                { key: 'height', name: 'Height' },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    sortable: false,
                    size: '6.5rem',
                },
            ]"
            [filter]="(options | async)?.search"
            [show_children]="true"
            [child_template]="locker_list_template"
            [sortable]="true"
            empty_message="No lockers for selected zone"
        ></simple-table>
        <div class="w-full h-20"></div>
        <ng-template #id_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight font-mono"
                (click)="copyToClipboard(data)"
            >
                {{ data }}
                <span *ngIf="!data" class="opacity-30">No Map ID</span>
            </button>
        </ng-template>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="text-[0.625rem] opacity-30 font-mono">
                    {{ row.map_id || row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #action_template let-row="row" let-data="data">
        </ng-template>
        <ng-template #locker_list_template let-bank="row"> </ng-template>
    `,
    styles: [],
})
export class LockerListComponent extends AsyncHandler {
    public readonly locker_banks = this._state.locker_banks;
    public readonly lockers = this._state.lockers;
    public readonly options = this._state.filters;
    public readonly loading = this._state.loading;
    public readonly bookings = this._state.bookings;

    public readonly locker_status: Record<string, string> = {};

    public readonly editLocker = (s?) => this._state.editLocker(s);
    public readonly removeLocker = (s) => this._state.removeLocker(s);

    constructor(
        private _state: LockerStateService,
        private _clipboard: Clipboard,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'bookings',
            combineLatest([this.lockers, this.bookings]).subscribe(
                ([lockers, bookings]) =>
                    this._updateStatusList(lockers, bookings),
            ),
        );
    }

    public copyToClipboard(id: string, type?: string) {
        const success = this._clipboard.copy(id);
        if (success)
            notifySuccess(
                type
                    ? 'Assigned user email copied to clipboard.'
                    : 'Locker Bay ID copied to clipboard.',
            );
    }

    public statusTooltip(status: string) {
        switch (status) {
            case 'assigned_free':
                return 'Locker is assigned to a user but available for use';
            case 'assigned_busy':
                return 'Locker is assigned to a user and in use';
            case 'reuse_busy':
                return 'Locker is assigned to a user and in use';
            case 'busy':
                return 'Locker is unassigned and in use';
            case 'free':
                return 'Locker is unassigned and available for use';
        }
        return 'Locker is unassigned and available for use';
    }

    private _updateStatusList(lockers: Locker[], bookings: Booking[]) {
        for (const locker of lockers) {
            const booking = bookings.find(
                (_) =>
                    _.asset_id === locker.id &&
                    _.status !== 'declined' &&
                    _.status !== 'cancelled' &&
                    _.status !== 'ended',
            );
            if (locker.assigned_to && !booking) {
                this.locker_status[locker.id] = 'assigned_free';
            } else if (
                locker.assigned_to &&
                booking &&
                booking.user_email === locker.assigned_to
            ) {
                this.locker_status[locker.id] = 'assigned_busy';
            } else if (
                locker.assigned_to &&
                booking &&
                booking.user_email !== locker.assigned_to
            ) {
                this.locker_status[locker.id] = 'reuse_busy';
            } else if (!locker.assigned_to && booking) {
                this.locker_status[locker.id] = 'busy';
            } else {
                this.locker_status[locker.id] = 'free';
            }
        }
    }
}
