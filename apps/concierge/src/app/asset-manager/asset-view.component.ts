import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { first } from 'rxjs/operators';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-view',
    template: `
        <div
            class="h-full w-full"
            *ngIf="!loading && (asset | async); else loading_state"
        >
            <div class="flex items-center space-x-4 p-2">
                <a
                    button
                    mat-button
                    class="inverse"
                    [routerLink]="['/asset-manager', 'list', 'items']"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">arrow_back</app-icon>
                        <div class="mr-2">Back</div>
                    </div>
                </a>
                <div class="flex items-center space-x-2 font-medium">
                    <span>Assets</span>
                    <span>
                        <app-icon class="text-2xl">chevron_right</app-icon>
                    </span>
                    <span>{{ (asset | async)?.category }}</span>
                    <span>
                        <app-icon class="text-2xl">chevron_right</app-icon>
                    </span>
                    <span>{{ (asset | async)?.name }}</span>
                </div>
            </div>
            <div class="flex items-center">
                <div class="bg-white flex-1 w-1/2 h-[360px]">
                    <image-carousel
                        [images]="(asset | async)?.images || []"
                    ></image-carousel>
                </div>
                <div class="w-[512px] h-[360px] px-4 flex flex-col">
                    <div
                        class="w-full flex items-center justify-between border-b border-gray-300"
                    >
                        <div class="font-medium">
                            {{ (asset | async)?.name }}
                        </div>
                        <div class="flex items-center text-sm ">
                            <button mat-button class="clear">
                                <div class="flex items-center text-secondary">
                                    <app-icon class="text-lg">edit</app-icon>
                                    <div class="mr-2">Edit</div>
                                </div>
                            </button>
                            <div class="w-px h-4 bg-gray-300"></div>
                            <button mat-button class="clear">
                                <div class="flex items-center text-secondary">
                                    <app-icon class="text-lg">delete</app-icon>
                                    <div class="mr-2">Delete</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="py-4 w-full flex-1 h-1/2 overflow-auto">
                        {{ (asset | async)?.description || '~No Description~' }}
                    </div>
                    <div class="rounded bg-white shadow border border-gray-300 w-full divide-y divide-gray-200">
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">Available: {{ ((asset | async)?.count - (asset | async)?.locations?.length) || 0 }}</div>
                            <button mat-button>Assign to Location</button>
                        </div>
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">In Use: {{ (asset | async)?.locations?.length || 0 }}</div>
                            <button mat-button (click)="viewLocations()">View Locations</button>
                        </div>
                    </div>
                </div>
            </div>

            <mat-tab-group>
                <mat-tab label="Specifications">
                </mat-tab>
                <mat-tab label="Purchase information">
                </mat-tab>
                <mat-tab label="Consumable assets">
                </mat-tab>
            </mat-tab-group>
        </div>
        <ng-template #loading_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Loading asset details...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class AssetViewComponent extends BaseClass {
    public loading = false;
    public readonly asset = this._state.active_asset;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _state: AssetManagerStateService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public viewLocations() {
        this._dialog.open(AssetLocationModalComponent);
    }

    public ngOnInit() {
        this.loading = true;
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this._state.setOptions({ active_asset: params.get('id') });
                }
            })
        );
        this.timeout(
            'no_asset',
            () => this._router.navigate(['/asset-mananger']),
            1000
        );
        this._state.active_asset.pipe(first((_) => !!_)).subscribe(() => {
            this.clearTimeout('no_asset');
            this.loading = false;
        });
    }
}
