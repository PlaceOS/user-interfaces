import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
import { AvailableRoomsStateModalComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-manager-topbar',
    template: `
        <div
            class="flex w-full items-center space-x-2 bg-base-100 px-8 pb-2 pt-4"
        >
            <h2 class="text-2xl font-medium">
                {{
                    (active !== 'items' && active !== 'purchase-orders'
                        ? 'APP.CONCIERGE.ASSETS_HEADER'
                        : 'APP.CONCIERGE.ASSETS_MANAGE_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <mat-form-field appearance="outline" class="no-subscript">
                <app-icon matPrefix class="relative -left-1 top-1 text-2xl">
                    search
                </app-icon>
                <input
                    matInput
                    [ngModel]="(options | async)?.search"
                    (ngModelChange)="setOptions({ search: $event })"
                    [placeholder]="
                        (active === 'items'
                            ? 'APP.CONCIERGE.ASSETS_ITEM_SEARCH'
                            : active === 'purchase-orders'
                              ? 'APP.CONCIERGE.ASSETS_ITEM_SEARCH'
                              : 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH'
                        ) | translate
                    "
                />
            </mat-form-field>
            <a
                btn
                matRipple
                class="w-40"
                *ngIf="active === 'items'"
                [routerLink]="[base_route, 'manage', 'group']"
            >
                {{ 'APP.CONCIERGE.ASSETS_ITEM_ADD' | translate }}
            </a>
            <a
                btn
                matRipple
                class="w-48"
                *ngIf="active === 'purchase-orders'"
                [routerLink]="[base_route, 'manage', 'purchase-order']"
            >
                {{ 'APP.CONCIERGE.ASSETS_PURCHASE_ADD' | translate }}
            </a>
        </div>
        <div
            class="mb-2 flex items-center space-x-2 px-8"
            *ngIf="active === 'items'"
        >
            <mat-button-toggle-group
                [ngModel]="(options | async)?.view"
                (ngModelChange)="setOptions({ view: $event })"
            >
                <mat-button-toggle
                    value="grid"
                    [matTooltip]="'COMMON.VIEW_AS_GRID' | translate"
                >
                    <div class="flex h-12 w-8 items-center justify-center">
                        <app-icon class="text-2xl">view_module</app-icon>
                    </div>
                </mat-button-toggle>
                <mat-button-toggle
                    value="list"
                    [matTooltip]="'COMMON.VIEW_AS_LIST' | translate"
                >
                    <div class="flex h-12 w-8 items-center justify-center">
                        <app-icon class="text-2xl">view_list</app-icon>
                    </div>
                </mat-button-toggle>
            </mat-button-toggle-group>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [matTooltip]="'APP.CONCIERGE.ASSETS_MANAGE_CONFIG' | translate"
                (click)="editConfig()"
            >
                <app-icon>menu_book</app-icon>
            </button>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [matTooltip]="
                    'APP.CONCIERGE.ASSETS_MANAGE_BOOKING_RULES' | translate
                "
                (click)="setRoomAvailability()"
            >
                <app-icon>event_available</app-icon>
            </button>
            <button
                icon
                matRipple
                *ngIf="active === 'items'"
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [matTooltip]="
                    'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate
                "
                (click)="manageCategories()"
            >
                <app-icon>list_alt</app-icon>
            </button>
        </div>
        <div
            class="flex items-center space-x-2 px-4 pb-2"
            *ngIf="use_region && (building | async)?.length"
        >
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="(building | async)?.id"
                    (ngModelChange)="setBuilding($event)"
                    [placeholder]="'COMMON.BUILDINGS_ALL' | translate"
                >
                    <mat-option
                        *ngFor="let bld of buildings | async"
                        [value]="bld.id"
                    >
                        {{ bld.display_name || bld.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AssetManagerTopbarComponent extends AsyncHandler {
    @Input() public active = '';

    public readonly options = this._state.options;
    public readonly region = this._org.active_region;
    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly manageCategories = () => this._state.manageCategories();
    public readonly editConfig = () => this._state.editConfig();

    public get base_route() {
        return this._state.base_route;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public setBuilding(id: string) {
        const bld = this._org.buildings.find((_) => _.id === id);
        if (!bld) return;
        this._org.building = bld;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _dialog: MatDialog,
    ) {
        super();
    }

    public async setRoomAvailability() {
        const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
            data: {
                type: 'Assets',
                disabled_rooms: await nextValueFrom(this._state.availability),
            },
        });
        this.subscription(
            'room-availability',
            ref.componentInstance.change.subscribe(async (list) => {
                await this._state
                    .saveSettings({ disabled_rooms: list })
                    .catch();
                ref.componentInstance.loading = false;
            }),
        );
    }
}
