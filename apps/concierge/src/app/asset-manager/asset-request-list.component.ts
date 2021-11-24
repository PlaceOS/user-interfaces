import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'app-asset-request-list',
    template: `
        <div class="relative -left-4 w-[calc(100%+2rem)] mt-4">
            <div class="bg-white p-4">
                <div class="opacity-60 text-sm">
                    {{ (requests | async).length }} asset request{{
                        (requests | async).length === '1' ? '' : 's'
                    }}
                </div>
            </div>
            <custom-table
                asset-requests
                class="min-w-[76rem] text-sm"
                [dataSource]="requests"
                [columns]="[
                    'user',
                    'assets',
                    'date',
                    'period',
                    'location_floor',
                    'location_name',
                    'approval',
                    'tracking'
                ]"
                [display_column]="[
                    'Requester',
                    'Assets Requested',
                    'Date for',
                    'Period',
                    'Floor',
                    'Room',
                    'Approval',
                    'Tracking'
                ]"
                [column_size]="['flex', '', '', '', '', '', '10r', '10r']"
                [template]="{
                    user: user_template,
                    assets: assets_template,
                    date: date_template,
                    period: period_template,
                    approval: approval_template,
                    tracking: tracking_template
                }"
                [empty]="
                    (filters | async)?.search
                        ? 'No matching desk bookings'
                        : 'There are no desk booking for the currently selected date.'
                "
            ></custom-table>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex items-center space-x-2">
                <a-user-avatar [user]="{ name: row.user_name }"></a-user-avatar>
                <div class="flex-1">{{ row.user_name }}</div>
            </div>
        </ng-template>
        <ng-template #assets_template let-row="row">
            <p class="whitespace-pre-line">
                <span *ngFor="let asset of row.assets"
                    >{{ asset.amount || 1 }}× {{ asset.name }}</span
                >
            </p>
        </ng-template>
        <ng-template #date_template let-row="row">
            {{ row.date | date: 'mediumDate' }}
        </ng-template>
        <ng-template #period_template let-row="row">
            {{ row.date | date: 'shortTime' }}
        </ng-template>
        <ng-template #approval_template let-row="row">
            <button
                matRipple
                class="rounded-3xl !bg-opacity-20 flex items-center p-2 w-full text-left space-x-2"
                [class.bg-green-600]="row.status === 'approved'"
                [class.bg-red-600]="row.status === 'declined'"
                [class.bg-yellow-600]="row.status === 'pending'"
                [matMenuTriggerFor]="menu"
            >
                <div
                    class="h-5 w-5 rounded-full text-white flex items-center justify-center"
                    [class.bg-green-600]="row.status === 'approved'"
                    [class.bg-red-600]="row.status === 'declined'"
                    [class.bg-yellow-600]="row.status === 'pending'"
                >
                    <app-icon>{{
                        row.status === 'approved'
                            ? 'done'
                            : row.status === 'declined'
                            ? 'close'
                            : 'warning'
                    }}</app-icon>
                </div>
                <div class="capitalize flex-1">{{ row.status }}</div>
                <app-icon>expand_more</app-icon>
            </button>
            <mat-menu #menu="matMenu" class="w-36">
                <button mat-menu-item>Approve</button>
                <button mat-menu-item>Decline</button>
            </mat-menu>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <button
                matRipple
                class="bg-none w-full flex items-center p-2 text-left"
                [matMenuTriggerFor]="tracking_menu"
            >
                <div class="capitalize flex-1">{{ row.tracking }}</div>
                <app-icon>expand_more</app-icon>
            </button>
            <mat-menu #tracking_menu="matMenu" class="w-36">
                <button mat-menu-item>In Storage</button>
                <button mat-menu-item>In Transit</button>
                <button mat-menu-item>At Location</button>
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
})
export class AssetRequestListComponent {
    public readonly requests = this._state.filtered_requests;
    public readonly filters = this._state.options;

    constructor(private _state: AssetManagerStateService) {}
}
