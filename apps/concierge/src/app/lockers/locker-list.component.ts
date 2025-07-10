import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, inject } from '@angular/core';
import { Booking, Locker } from '@placeos/bookings';
import { AsyncHandler, i18n, notifySuccess } from '@placeos/common';
import { combineLatest } from 'rxjs';
import { LockerStateService } from './locker-state.service';

@Component({
    selector: 'locker-list',
    template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('lockers')"
            class="w-full"
        />
        <simple-table
            class="block min-w-[52rem] text-sm"
            [data]="locker_banks"
            [columns]="[
                {
                    key: 'name',
                    name: 'APP.CONCIERGE.LOCKERS_BANK' | translate,
                    content: name_template,
                },
                {
                    key: 'map_id',
                    name: 'EXPLORE.MAP_ID' | translate,
                    content: id_template,
                },
                {
                    key: 'height',
                    name: 'COMMON.HEIGHT' | translate,
                    size: '6rem',
                    content: height_template,
                },
                { key: 'tags', name: 'COMMON.TAGS' | translate, size: '8rem' },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    sortable: false,
                    size: '6rem',
                },
            ]"
            [filter]="search | async"
            [show_children]="show_children"
            [child_template]="locker_list_template"
            [sortable]="true"
            [empty_message]="'APP.CONCIERGE.LOCKERS_BANK_EMPTY' | translate"
        />
        <div class="h-20 w-full"></div>
        <ng-template #height_template let-data="data">
            <div class="px-4 font-mono">{{ data || 1 }}u</div>
        </ng-template>
        <ng-template #id_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left font-mono leading-tight"
                (click)="copyToClipboard(data)"
            >
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'EXPLORE.MAP_ID_EMPTY' | translate
                    }}</span>
                }
            </button>
        </ng-template>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                @if (row.id !== row.map_id) {
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.id }}
                    </div>
                }
            </button>
        </ng-template>
        <ng-template #action_template let-row="row" let-data="data">
            <div class="flex w-full items-center justify-end space-x-2 px-2">
                <button icon matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editLocker(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">add</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_ADD' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="viewBank(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">visibility</icon>
                            <span>View Locker Bank Layout</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editLockerBank(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_BANK_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeLockerBank(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_BANK_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
                <button
                    icon
                    matRipple
                    [disabled]="!row.lockers?.length"
                    (click)="show_children[row.id] = !show_children[row.id]"
                >
                    <icon class="text-2xl">
                        {{
                            show_children[row.id]
                                ? 'keyboard_arrow_down'
                                : 'chevron_right'
                        }}
                    </icon>
                </button>
                <mat-menu></mat-menu>
            </div>
        </ng-template>
        <ng-template #locker_list_template let-bank="row">
            <simple-table
                [data]="bank.lockers"
                [show_header]="false"
                [columns]="[
                    { key: 'name', name: 'Locker' },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'position',
                        name: 'Position',
                        content: pos_template,
                        size: '7.5rem',
                    },
                    {
                        key: 'size',
                        name: 'Size',
                        content: size_template,
                        size: '7.5rem',
                    },
                    {
                        key: 'accessible',
                        name: 'Accessible',
                        content: accessible_template,
                        size: '4rem',
                    },
                    {
                        key: 'bookable',
                        name: 'Bookable',
                        content: bool_template,
                        size: '4rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: locker_action_template,
                        sortable: false,
                        size: '5.9rem',
                    },
                ]"
                [filter]="search | async"
                [empty_message]="'APP.CONCIERGE.LOCKERS_EMPTY' | translate"
            />
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
            <ng-template #pos_template let-data="data">
                <div class="flex w-full space-x-2 p-2">
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.COLUMN' | translate }}
                        </div>
                        <div
                            class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                        >
                            {{ data[0] + 1 }}u
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.ROW' | translate }}
                        </div>
                        <div
                            class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                        >
                            {{ data[1] + 1 }}u
                        </div>
                    </div>
                </div>
            </ng-template>
            <ng-template #size_template let-data="data">
                <div class="flex w-full space-x-2 p-2">
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.WIDTH' | translate }}
                        </div>
                        <div
                            class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                        >
                            {{ data[0] }}u
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-xs opacity-30">
                            {{ 'COMMON.HEIGHT' | translate }}
                        </div>
                        <div
                            class="w-12 rounded bg-base-200 px-2 py-1 text-center"
                        >
                            {{ data[1] }}u
                        </div>
                    </div>
                </div>
            </ng-template>
            <ng-template #accessible_template let-data="data">
                <div class="flex w-full items-center justify-center p-2">
                    @if (data) {
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded bg-info text-info-content"
                            [matTooltip]="
                                'APP.CONCIERGE.LOCKERS_ACCESSIBLE_INFO'
                                    | translate
                            "
                        >
                            <icon class="text-2xl">accessible</icon>
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                @if (data) {
                    <div
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                        [matTooltip]="'COMMON.BOOKABLE' | translate"
                    >
                        <icon>done</icon>
                    </div>
                }
            </ng-template>
            <ng-template #locker_action_template let-row="row">
                <div
                    class="flex w-full items-center justify-end space-x-2 px-2"
                >
                    <button icon matRipple [matMenuTriggerFor]="locker_menu">
                        <icon>more_vert</icon>
                    </button>
                </div>
                <mat-menu #locker_menu="matMenu">
                    <button mat-menu-item (click)="editLocker(bank, row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    @if (has_driver) {
                        <button mat-menu-item (click)="openLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">meeting_room</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_OPEN' | translate
                                }}</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="shareLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">share</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_SHARE' | translate
                                }}</span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="releaseLocker(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">event_busy</icon>
                                <span>{{
                                    'APP.CONCIERGE.LOCKERS_RELEASE' | translate
                                }}</span>
                            </div>
                        </button>
                    }
                    <button mat-menu-item (click)="removeLocker(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.LOCKERS_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
        </ng-template>
    `,
    styles: [],
    standalone: false,
})
export class LockerListComponent extends AsyncHandler implements OnInit {
    private _state = inject(LockerStateService);
    private _clipboard = inject(Clipboard);

    public show_children = {};
    public readonly locker_banks = this._state.filtered_banks;
    public readonly lockers = this._state.filtered_lockers;
    public readonly options = this._state.filters;
    public readonly loading = this._state.loading;
    public readonly bookings = this._state.bookings;
    public readonly search = this._state.search;

    public readonly locker_status: Record<string, string> = {};

    public readonly viewBank = (b) => this._state.viewLockerBank(b);
    public readonly editLocker = (bid, s?) => this._state.editLocker(bid, s);
    public readonly editLockerBank = (b?) => this._state.editLockerBank(b);
    public readonly removeLocker = (s) => this._state.removeLocker(s);
    public readonly removeLockerBank = (b) => this._state.removeLockerBank(b);
    public readonly shareLocker = (l) => this._state.shareLocker(l);
    public readonly releaseLocker = (l) => this._state.releaseLocker(l, true);
    public readonly openLocker = (l) => this._state.openLocker(l, true);

    public get has_driver() {
        return this._state.has_driver;
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
                i18n(
                    type
                        ? 'APP.CONCIERGE.LOCKERS_COPIED_USER'
                        : 'APP.CONCIERGE.LOCKERS_COPIED_ID',
                ),
            );
    }

    public statusTooltip(status: string) {
        switch (status) {
            case 'assigned_free':
                return 'APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_FREE';
            case 'assigned_busy':
                return 'APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_BUSY';
            case 'reuse_busy':
                return 'APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_OTHER';
            case 'busy':
                return 'APP.CONCIERGE.LOCKERS_STATUS_BUSY';
            case 'free':
                return 'APP.CONCIERGE.LOCKERS_STATUS_FREE';
        }
        return 'APP.CONCIERGE.LOCKERS_STATUS_FREE';
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
