import { Component, OnInit } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { startOfDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'app-asset-request-list',
    template: `
        <div class="relative flex h-[calc(100%-1rem)] w-full flex-col">
            <div class="flex items-center justify-between">
                <div class="p-4 text-sm opacity-60">
                    {{
                        'APP.CONCIERGE.ASSETS_REQUESTS_COUNT'
                            | translate: { count: (requests | async)?.length }
                    }}
                </div>
                <date-options
                    [date]="(filters | async)?.date"
                    (dateChange)="setDate($event)"
                ></date-options>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto pt-2">
                <simple-table
                    class="block min-w-[82rem] text-sm"
                    asset-requests
                    [data]="requests"
                    [filter]="(filters | async)?.search"
                    [columns]="[
                        {
                            key: 'user_name',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_USER'
                                | translate,
                            content: user_template,
                        },
                        {
                            key: 'date',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_TIME'
                                | translate,
                            content: date_template,
                            size: '8rem',
                        },
                        {
                            key: 'assets',
                            name: 'RESOURCE.ASSETS' | translate,
                            content: assets_template,
                            sortable: false,
                        },
                        {
                            key: 'level_code',
                            name: 'RESOURCE.LEVEL' | translate,
                            content: level_template,
                            size: '9rem',
                        },
                        {
                            key: 'description',
                            name: 'COMMON.LOCATION' | translate,
                        },
                        {
                            key: 'status',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_APPROVAL'
                                | translate,
                            content: approval_template,
                            size: '11rem',
                        },
                        {
                            key: 'tracking',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING'
                                | translate,
                            content: tracking_template,
                            size: '12rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="
                        ((filters | async)?.search
                            ? 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_REQUESTS_EMPTY'
                        ) | translate
                    "
                    [sortable]="true"
                    (row_clicked)="request = $event"
                ></simple-table>
                <div class="h-20 w-full"></div>
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
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ level(row)?.display_name }}
                <span class="opacity-30" *ngIf="!level(row)">N/A</span>
            </div>
        </ng-template>
        <ng-template #approval_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="flex w-full items-center space-x-2 rounded-3xl !bg-opacity-20 px-2 py-1 text-left"
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
                    <div class="flex-1 capitalize">{{ row.status }}</div>
                    <app-icon class="text-2xl">expand_more</app-icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="setStatus(row, 'approved')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_available</app-icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setStatus(row, 'declined')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_busy</app-icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="flex w-full items-center rounded bg-none px-2 py-1 text-left"
                    [matMenuTriggerFor]="tracking_menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading[row.id]"
                >
                    <div class="min-w-32 flex-1 capitalize">
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
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">trolley</app-icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">place</app-icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION'
                                    | translate
                            }}
                        </div>
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
    standalone: false,
})
export class AssetRequestListComponent extends AsyncHandler implements OnInit {
    public readonly requests = this._state.filtered_requests.pipe(
        map((l) => {
            l.forEach((r) => this.level(r));
            return l;
        }),
    );
    public readonly filters = this._state.options;
    public request;

    public readonly loading: Record<string, boolean> = {};

    public date(booking: Booking) {
        return booking.all_day
            ? startOfDay(booking.date).valueOf()
            : booking.date;
    }

    public async setStatus(item: Booking, status: string) {
        this.loading[item.id] = true;
        await this._state.setStatus(item, status);
        this.loading[item.id] = false;
    }

    public async setTracking(item: Booking, state: string) {
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
        private _settings: SettingsService,
    ) {
        super();
    }

    public level(item) {
        const zones = item.zones;
        const level = this._org.levelWithID(zones);
        item.level = level?.display_name || level?.name || zones[0] || '';
        item.level_code = level?.code || zones[0] || '';
        return level;
    }

    public ngOnInit() {
        this.subscription('polling', this._state.startPolling());
    }
}
