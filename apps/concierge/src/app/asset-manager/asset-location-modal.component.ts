import { Component } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { MapPinComponent } from '@placeos/components';
import {
    AssetManagerStateService,
    AssetRequest,
} from './asset-manager-state.service';

@Component({
    selector: 'asset-location-modal',
    template: `
        <div class="p-6 relative">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-4 right-4"
            >
                <app-icon>close</app-icon>
            </button>
            <h2 class="font-medium mb-2">
                {{ (asset | async)?.name }} in use location:
                {{ (requests | async)?.length }}
            </h2>
            <mat-form-field appearance="outline" class="h-[3.5rem] mb-2">
                <app-icon matPrefix>search</app-icon>
                <input matInput placeholder="Search..." />
            </mat-form-field>
            <div class="flex items-center space-x-4 w-[90vw] text-sm">
                <div
                    class="flex-1 h-[60vh] w-1/2 border border-gray-300 bg-gray-50 overflow-auto"
                >
                    <custom-table
                        [dataSource]="requests"
                        [columns]="[
                            'location_floor',
                            'location_name',
                            'tracking',
                            'user_name'
                        ]"
                        [display_column]="[
                            'Level',
                            'Space',
                            'Tracking',
                            'Requestee'
                        ]"
                        [column_size]="['4r', 'flex', '10r', '6r']"
                        [template]="{
                            tracking: tracking_template,
                            location_floor: level_template,
                            location_name: space_template
                        }"
                        (row_clicked)="selected = $event; updateFeatures()"
                    ></custom-table>
                </div>
                <div
                    class="flex-1 h-[60vh] w-1/2 border border-gray-300 bg-gray-100 relative flex items-center justify-center"
                >
                    <div
                        class="absolute top-4 left-4 bg-white px-4 py-2 rounded-3xl border border-gray-300"
                        *ngIf="selected"
                    >
                        {{
                            selected.extension_data?.space?.level
                                ?.display_name ||
                                selected.extension_data?.space?.level?.name
                        }}
                    </div>
                    <i-map
                        *ngIf="selected; else empty_state"
                        [src]="selected.extension_data?.space?.level?.map_id"
                        [styles]="{
                            '#Zones': { display: 'none' },
                            '#zones': { display: 'none' }
                        }"
                        [features]="selected_feature"
                    ></i-map>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <p class="opacity-30">
                Select a space from the list to view map location
            </p>
        </ng-template>
        <ng-template #space_template let-row="row">
            {{
                row.extension_data?.space?.display_name ||
                    row.extension_data?.space?.name
            }}
        </ng-template>
        <ng-template #level_template let-row="row">
            {{
                row.extension_data?.space?.level?.display_name ||
                    row.extension_data?.space?.level?.name
            }}
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
                    {{ row.extension_data?.tracking | splitjoin }}
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
    `,
    styles: [``],
})
export class AssetLocationModalComponent {
    public readonly asset = this._state.active_asset;
    public readonly requests = this._state.active_asset_requests;

    public selected: Booking;
    public selected_feature;

    public loading = {};

    public updateFeatures() {
        const space = this.selected.extension_data?.space || {};
        this.selected_feature = this.selected
            ? [
                  {
                      location: space.map_id,
                      content: MapPinComponent,
                      z_index: 99,
                      data: {
                          message: `${
                              space.display_name || space.name
                          } is here`,
                      },
                  },
              ]
            : [];
    }

    public async setTracking(item: any, state: string) {
        this.loading[item.id] = true;
        await this._state.setTracking(item, state);
        this.loading[item.id] = false;
    }

    constructor(private _state: AssetManagerStateService) {}
}
