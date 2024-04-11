import { Component } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { MapPinComponent } from '@placeos/components';
import { AssetManagerStateService } from './asset-manager-state.service';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

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
                    class="flex-1 h-[60vh] w-1/2 border border-base-200 bg-base-200 overflow-auto"
                >
                    <custom-table
                        [dataSource]="requests"
                        [columns]="[
                            'zones',
                            'description',
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
                            zones: level_template,
                        }"
                        (row_clicked)="selected = $event; updateFeatures()"
                    ></custom-table>
                </div>
                <div
                    class="flex-1 h-[60vh] w-1/2 border border-base-200 bg-base-200 relative flex items-center justify-center"
                >
                    <div
                        class="absolute top-4 left-4 bg-base-100 px-4 py-2 rounded-3xl border border-base-200"
                        *ngIf="selected"
                    >
                        {{ level(selected.zone)?.display_name || 'N/A' }}
                    </div>
                    <interactive-map
                        *ngIf="selected; else empty_state"
                        [src]="level(selected.zone)?.map_id || ''"
                        [styles]="{
                            '#Zones': { display: 'none' },
                            '#zones': { display: 'none' }
                        }"
                        [features]="selected_feature"
                    ></interactive-map>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <p class="opacity-30">
                Select a space from the list to view map location
            </p>
        </ng-template>
        <ng-template #level_template let-data="data">
            {{ level(data)?.display_name || 'N/A' }}
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
    `,
    styles: [``],
})
export class AssetLocationModalComponent {
    public readonly asset = this._state.active_product;
    public readonly requests = this._state.active_product_requests;

    public selected: Booking;
    public selected_feature;

    public loading = {};

    public async updateFeatures() {
        const space = await this._space.transform(
            this.selected.extension_data?.location_id
        );
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

    constructor(
        private _state: AssetManagerStateService,
        private _org: OrganisationService,
        private _space: SpacePipe
    ) {}

    public level(zones) {
        return this._org.levelWithID(zones);
    }
}
