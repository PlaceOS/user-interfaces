import { Component } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { AssetManagerStateService } from './asset-manager-state.service';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'app-asset-request-list',
    template: `
        <div
            class="relative -left-4 w-[calc(100%+2rem)] mt-4 h-[calc(100%-1rem)] flex flex-col"
        >
            <div
                class="bg-white dark:bg-neutral-700 px-4 border-t border-b border-gray-300 dark:border-neutral-500 flex items-center justify-between"
            >
                <div class="opacity-60 text-sm">
                    {{ (requests | async)?.length }} asset request{{
                        (requests | async)?.length === '1' ? '' : 's'
                    }}
                </div>
                <date-options (dateChange)="setDate($event)"></date-options>
            </div>
            <div class="w-full overflow-auto h-1/2 flex-1 p-4">
                <custom-table
                    asset-requests
                    class="block min-w-[82rem] text-sm"
                    [dataSource]="requests"
                    [columns]="[
                        'user',
                        'title',
                        'date',
                        'period',
                        'zones',
                        'description',
                        'approval',
                        'tracking'
                    ]"
                    [display_column]="[
                        'Requester',
                        'Asset',
                        'Date',
                        'Time',
                        'Floor',
                        'Location',
                        'Approval',
                        'Tracking'
                    ]"
                    [column_size]="[
                        'flex',
                        '12r',
                        '',
                        '9.5r',
                        '6r',
                        '12r',
                        '10r',
                        '10r'
                    ]"
                    [template]="{
                        user: user_template,
                        assets: assets_template,
                        date: date_template,
                        period: period_template,
                        approval: approval_template,
                        tracking: tracking_template,
                        zones: level_template,
                    }"
                    [empty]="
                        (filters | async)?.search
                            ? 'No matching asset requests'
                            : 'There are no asset requests for the currently selected date.'
                    "
                    (row_clicked)="request = $event"
                ></custom-table>
            </div>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex items-center space-x-2">
                <a-user-avatar [user]="{ name: row.user_name }"></a-user-avatar>
                <div class="flex-1">{{ row.user_name }}</div>
            </div>
        </ng-template>
        <ng-template #assets_template let-row="row">
            <div class="flex flex-col">
                <div *ngFor="let asset of row.extension_data?.assets || []">
                    {{ asset.amount || 1 }}× {{ asset.name }}
                </div>
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            {{ row.date | date: 'mediumDate' }}
        </ng-template>
        <ng-template #level_template let-data="data">
            {{ level(data)?.display_name || 'N/A' }}
        </ng-template>
        <ng-template #period_template let-row="row">
            {{ row.date | date: 'shortTime' }} &ndash;
            {{ row.date + row.duration * 60 * 1000 | date: 'shortTime' }}
        </ng-template>
        <ng-template #approval_template let-row="row">
            <button
                matRipple
                class="rounded-3xl !bg-opacity-20 flex items-center px-2 py-1 w-full text-left space-x-2"
                [class.bg-green-600]="row.status === 'approved'"
                [class.bg-red-600]="row.status === 'declined'"
                [class.bg-yellow-400]="row.status === 'tentative'"
                [matMenuTriggerFor]="menu"
                (click)="$event.stopPropagation()"
                [disabled]="loading[row.id]"
            >
                <app-icon
                    class="text-xl"
                    [class.text-green-600]="row.status === 'approved'"
                    [class.text-red-600]="row.status === 'declined'"
                    [class.text-yellow-400]="row.status === 'tentative'"
                >
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
            <mat-menu #menu="matMenu" class="w-36">
                <button mat-menu-item (click)="setStatus(row, 'approved')">
                    Approve
                </button>
                <button mat-menu-item (click)="setStatus(row, 'declined')">
                    Decline
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <button
                matRipple
                class="bg-none w-full flex items-center px-2 py-1 text-left"
                [matMenuTriggerFor]="tracking_menu"
                (click)="$event.stopPropagation()"
                [disabled]="loading[row.id]"
            >
                <div class="capitalize flex-1">
                    {{
                        (row.extension_data?.tracking | splitjoin) ||
                            'In Storage'
                    }}
                </div>
                <app-icon class="text-2xl">expand_more</app-icon>
            </button>
            <mat-menu #tracking_menu="matMenu" class="w-36">
                <button mat-menu-item (click)="setTracking(row, 'in_storage')">
                    In Storage
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    In Transit
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    At Location
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

    constructor(
        private _state: AssetManagerStateService,
        private _org: OrganisationService
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
