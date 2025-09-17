import { Component, inject } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { MapPinComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-location-modal',
    template: `
        <div class="relative p-6">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-4 top-4"
            >
                <icon>close</icon>
            </button>
            <h2 class="mb-2 font-medium">
                {{ (asset | async)?.name }} in use location:
                {{ (requests | async)?.length }}
            </h2>
            <mat-form-field appearance="outline" class="mb-2 h-[3.5rem]">
                <icon matPrefix>search</icon>
                <input matInput placeholder="Search..." />
            </mat-form-field>
            <div class="flex w-[90vw] items-center space-x-4 text-sm">
                <div
                    class="h-[60vh] w-1/2 flex-1 overflow-auto border border-base-200 bg-base-200"
                >
                    <simple-table
                        class="block w-full"
                        [data]="requests"
                        [columns]="[
                            {
                                key: 'zone',
                                name: 'Level',
                                content: level_template,
                            },
                            { key: 'description', name: 'Space' },
                            {
                                key: 'tracking',
                                name: 'Tracking',
                                content: tracking_template,
                            },
                            { key: 'user_name', name: 'Requestee' },
                        ]"
                        [sortable]="true"
                        empty_message="No requested assets for this product"
                        (row_clicked)="selected = $event; updateFeatures()"
                    ></simple-table>
                </div>
                <div
                    class="relative flex h-[60vh] w-1/2 flex-1 items-center justify-center border border-base-200 bg-base-200"
                >
                    @if (selected) {
                        <div
                            class="absolute left-4 top-4 rounded-3xl border border-base-200 bg-base-100 px-4 py-2"
                        >
                            {{ level(selected.zone)?.display_name || 'N/A' }}
                        </div>
                    }
                    @if (selected) {
                        <interactive-map
                            [src]="level(selected.zone)?.map_id || ''"
                            [styles]="{
                                '#Zones': { display: 'none' },
                                '#zones': { display: 'none' },
                            }"
                            [features]="selected_feature"
                        ></interactive-map>
                    } @else {
                        <p class="opacity-30">
                            Select a space from the list to view map location
                        </p>
                    }
                </div>
            </div>
        </div>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ level(data)?.display_name || 'N/A' }}
            </div>
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
                    <icon class="text-2xl">expand_more</icon>
                </button>
            </div>
            <mat-menu #tracking_menu="matMenu">
                <button mat-menu-item (click)="setTracking(row, 'in_storage')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">inventory</icon>
                        <div class="pr-2">In Storage</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">trolley</icon>
                        <div class="pr-2">In Transit</div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">place</icon>
                        <div class="pr-2">At Location</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class AssetLocationModalComponent {
    private _state = inject(AssetManagerStateService);
    private _org = inject(OrganisationService);

    public readonly asset = this._state.active_product;
    public readonly requests = this._state.active_product_requests;

    public readonly _space = new SpacePipe(this._org);

    public selected: Booking;
    public selected_feature;

    public loading = {};

    public async updateFeatures() {
        const space = await this._space.transform(
            this.selected.extension_data?.location_id,
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

    public level(zones) {
        return this._org.levelWithID(zones);
    }
}
