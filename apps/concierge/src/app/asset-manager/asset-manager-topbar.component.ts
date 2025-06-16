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
                <icon matPrefix class="relative -left-1 top-1 text-2xl">
                    search
                </icon>
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
            @if (active === 'items') {
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="[base_route, 'manage', 'group']"
                >
                    {{ 'APP.CONCIERGE.ASSETS_ITEM_ADD' | translate }}
                </a>
            }
            @if (active === 'purchase-orders') {
                <a
                    btn
                    matRipple
                    class="w-48"
                    [routerLink]="[base_route, 'manage', 'purchase-order']"
                >
                    {{ 'APP.CONCIERGE.ASSETS_PURCHASE_ADD' | translate }}
                </a>
            }
        </div>
        @if (active === 'items') {
            <div class="mb-2 flex items-center space-x-2 px-8">
                <div class="flex items-center rounded border border-secondary">
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l rounded-r-none"
                        [class.bg-secondary]="
                            (options | async)?.view === 'grid'
                        "
                        [class.text-secondary-content]="
                            (options | async)?.view === 'grid'
                        "
                        (click)="setOptions({ view: 'grid' })"
                        [matTooltip]="'COMMON.VIEW_AS_GRID' | translate"
                    >
                        <icon class="text-2xl">view_module</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l-none rounded-r"
                        [class.bg-secondary]="
                            (options | async)?.view === 'list'
                        "
                        [class.text-secondary-content]="
                            (options | async)?.view === 'list'
                        "
                        (click)="setOptions({ view: 'list' })"
                        [matTooltip]="'COMMON.VIEW_AS_LIST' | translate"
                    >
                        <icon class="text-2xl">view_list</icon>
                    </button>
                </div>
                <div class="flex-1"></div>
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    [matTooltip]="
                        'APP.CONCIERGE.ASSETS_MANAGE_CONFIG' | translate
                    "
                    (click)="editConfig()"
                >
                    <icon>menu_book</icon>
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
                    <icon>event_available</icon>
                </button>
                @if (active === 'items') {
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded bg-secondary text-secondary-content"
                        [matTooltip]="
                            'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate
                        "
                        (click)="manageCategories()"
                    >
                        <icon>list_alt</icon>
                    </button>
                }
            </div>
        }
        @if (use_region && (building | async)?.length) {
            <div class="flex items-center space-x-2 px-4 pb-2">
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-select
                        [ngModel]="(building | async)?.id"
                        (ngModelChange)="setBuilding($event)"
                        [placeholder]="'COMMON.BUILDINGS_ALL' | translate"
                    >
                        @for (bld of buildings | async; track bld) {
                            <mat-option [value]="bld.id">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
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
