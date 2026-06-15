import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Booking, OrganisationService } from '@placeos/common';
import {
    IconComponent,
    InteractiveMapComponent,
    MapPinComponent,
    SimpleTableComponent,
} from '@placeos/components';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { SpacePipe } from '@placeos/events';
import { AssetManagerStateService } from './asset-manager-state.service';
import { SplitJoinPipe } from './split-join.pipe';

@Component({
    selector: 'asset-location-modal',
    template: `
        <div class="relative p-6">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-4 right-4"
            >
                <icon>close</icon>
            </button>
            <h2 class="mb-2 font-medium">
                {{ asset()?.name }} in use location:
                {{ requests().length }}
            </h2>
            <mat-form-field appearance="outline" class="mb-2 h-14">
                <icon matPrefix>search</icon>
                <input matInput placeholder="Search..." />
            </mat-form-field>
            <div class="flex w-[90vw] items-center space-x-4 text-sm">
                <div
                    class="border-base-200 bg-base-200 h-[60vh] w-1/2 flex-1 overflow-auto border"
                >
                    <simple-table
                        class="block w-full"
                        [data]="requests()"
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
                        (row_clicked)="
                            selected.set($any($event)); updateFeatures()
                        "
                    ></simple-table>
                </div>
                <div
                    class="border-base-200 bg-base-200 relative flex h-[60vh] w-1/2 flex-1 items-center justify-center border"
                >
                    @if (selected()) {
                        <div
                            class="border-base-200 bg-base-100 absolute top-4 left-4 rounded-3xl border px-4 py-2"
                        >
                            {{
                                level(selected().zones?.[0])?.display_name ||
                                    'N/A'
                            }}
                        </div>
                    }
                    @if (selected()) {
                        <interactive-map
                            [src]="level(selected().zones?.[0])?.map_id || ''"
                            [styles]="{
                                '#Zones': { display: 'none' },
                                '#zones': { display: 'none' },
                            }"
                            [features]="selected_feature()"
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
                    class="flex w-full items-center rounded-sm bg-none px-2 py-1 text-left"
                    [matMenuTriggerFor]="tracking_menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading()[row.id]"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatDialogModule,
        MatMenuModule,
        IconComponent,
        SplitJoinPipe,
        InteractiveMapComponent,
        SimpleTableComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class AssetLocationModalComponent {
    private _state = inject(AssetManagerStateService);
    private _org = inject(OrganisationService);

    public readonly asset = toSignal(this._state.active_product, {
        initialValue: null,
    });
    public readonly requests = toSignal(this._state.active_product_requests, {
        initialValue: [],
    });

    public readonly _space = new SpacePipe(this._org);

    public readonly selected = signal<Booking | null>(null);
    public readonly selected_feature = signal<any[]>([]);

    public readonly loading = signal<Record<string, boolean>>({});

    public async updateFeatures() {
        const selected = this.selected();
        if (!selected) {
            this.selected_feature.set([]);
            return;
        }
        const space = await this._space.transform(
            selected.extension_data?.location_id,
        );
        this.selected_feature.set([
            {
                location: space.map_id,
                content: MapPinComponent,
                z_index: 99,
                data: {
                    message: `${space.display_name || space.name} is here`,
                },
            },
        ]);
    }

    public async setTracking(item: any, state: string) {
        this.loading.update((loading) => ({ ...loading, [item.id]: true }));
        await this._state.setTracking(item, state);
        this.loading.update((loading) => ({ ...loading, [item.id]: false }));
    }

    public level(zones) {
        return this._org.levelWithID(zones);
    }
}
