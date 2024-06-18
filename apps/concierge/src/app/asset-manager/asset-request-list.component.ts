import { Component } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { AssetManagerStateService } from './asset-manager-state.service';
import { OrganisationService } from '@placeos/organisation';
import { startOfDay } from 'date-fns';

@Component({
    selector: 'app-asset-request-list',
    template: `
        <div class="relative w-full h-[calc(100%-1rem)] flex flex-col">
            <div class="flex items-center justify-between">
                <div class="opacity-60 text-sm p-4">
                    {{ (requests | async)?.length }} asset request{{
                        (requests | async)?.length === '1' ? '' : 's'
                    }}
                </div>
                <date-options
                    [date]="(filters | async)?.date"
                    (dateChange)="setDate($event)"
                ></date-options>
            </div>
            <div class="w-full overflow-auto h-1/2 flex-1 pt-2">
                <simple-table
                    class="block min-w-[82rem] text-sm"
                    asset-requests
                    [data]="requests"
                    [filter]="(filters | async)?.search"
                    [columns]="[
                        {
                            key: 'user_name',
                            name: 'Requester',
                            content: user_template
                        },
                        {
                            key: 'date',
                            name: 'Deliver At',
                            content: date_template,
                            size: '8rem'
                        },
                        {
                            key: 'assets',
                            name: 'Asset',
                            content: assets_template,
                            sortable: false
                        },
                        {
                            key: 'zones',
                            name: 'Floor',
                            content: level_template,
                            size: '9rem',
                            sortable: false
                        },
                        { key: 'description', name: 'Location' },
                        {
                            key: 'status',
                            name: 'Approval',
                            content: approval_template,
                            size: '11rem'
                        },
                        {
                            key: 'tracking',
                            name: 'Tracking',
                            content: tracking_template,
                            size: '12rem',
                            sortable: false
                        }
                    ]"
                    [empty_message]="
                        (filters | async)?.search
                            ? 'No matching asset requests'
                            : 'There are no asset requests for the currently selected date.'
                    "
                    [sortable]="true"
                    (row_clicked)="request = $event"
                ></simple-table>
                <div class="w-full h-20"></div>
            </div>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex flex-col px-4 py-2 text-left">
                <div>{{ row.user_name }}</div>
                <div class="text-xs opacity-30">
                    {{ date(row) | date: 'MMM d, ' + time_format }} &ndash;
                    {{
                        date(row) + row.duration * 60 * 1000
                            | date: 'MMM d, ' + time_format
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #assets_template let-row="row">
            <div class="flex flex-col p-4">
                <div
                    *ngFor="
                        let asset of row.extension_data?.request?.items || []
                    "
                >
                    <span class="font-mono text-sm">
                        {{ asset.quantity || 1 }}×
                    </span>
                    {{ asset.name }}
                </div>
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="p-4">
                {{
                    row.date +
                        row.extension_data?.request?.deliver_offset *
                            60 *
                            1000 +
                        row.extension_data?.request?.deliver_day_offset *
                            24 *
                            60 *
                            60 *
                            1000 | date: 'MMM d, ' + time_format
                }}
            </div>
        </ng-template>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ level(data)?.display_name }}
                <span class="opacity-30" *ngIf="!level(data)">N/A</span>
            </div>
        </ng-template>
        <ng-template #approval_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="rounded-3xl !bg-opacity-20 flex items-center px-2 py-1 w-full text-left space-x-2"
                    [class.bg-success]="row.status === 'approved'"
                    [class.bg-error]="row.status === 'declined'"
                    [class.bg-warning]="row.status === 'tentative'"
                    [class.text-success-content]="row.status === 'approved'"
                    [class.text-error-content]="row.status === 'declined'"
                    [class.text-warning-content]="row.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading[row.id]"
                >
                    <app-icon class="text-xl">
                        {{
                            row.status === 'approved'
                                ? 'done'
                                : row.status === 'declined'
                                ? 'close'
                                : 'warning'
                        }}
                    </app-icon>
                    <div class="capitalize flex-1">{{ row.status }}</div>
                    <app-icon class="text-2xl">expand_more</app-icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="setStatus(row, 'approved')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_available</app-icon>
                        <div class="pr-2">Approve Asset Request</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setStatus(row, 'declined')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_busy</app-icon>
                        <div class="pr-2">Decline Asset Request</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="bg-none w-full flex items-center px-2 py-1 text-left rounded"
                    [matMenuTriggerFor]="tracking_menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading[row.id]"
                >
                    <div class="capitalize flex-1 min-w-32">
                        {{
                            (row.extension_data?.tracking | splitjoin) ||
                                'In Storage'
                        }}
                    </div>
                    <app-icon class="text-2xl">expand_more</app-icon>
                </button>
            </div>
            <mat-menu #tracking_menu="matMenu">
                <button mat-menu-item (click)="setTracking(row, 'in_storage')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">inventory</app-icon>
                        <div class="pr-2">In Storage</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">trolley</app-icon>
                        <div class="pr-2">In Transit</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">place</app-icon>
                        <div class="pr-2">At Location</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <asset-request-details [(request)]="request"></asset-request-details>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class AssetRequestListComponent extends AsyncHandler {
    public readonly requests = this._state.filtered_requests;
    public readonly filters = this._state.options;
    public request;

    public readonly loading: Record<string, boolean> = {};

    public date(booking: any) {
        return booking.all_day
            ? startOfDay(booking.date).valueOf()
            : booking.date;
    }

    public async setStatus(item: any, status: string) {
        this.loading[item.id] = true;
        await this._state.setStatus(item, status);
        this.loading[item.id] = false;
    }

    public async setTracking(item: any, state: string) {
        this.loading[item.id] = true;
        await this._state.setTracking(item, state);
        this.loading[item.id] = false;
    }

    public readonly setDate = (date) => this._state.setOptions({ date });

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public level(zones) {
        return this._org.levelWithID(zones);
    }

    public ngOnInit() {
        this.subscription('polling', this._state.startPolling());
    }
}
