import { Component, Input } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { AvailableRoomsStateModalComponent } from '@placeos/components';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'asset-manager-topbar',
    template: `
        <div
            class="w-full px-8 pt-4 pb-2 bg-base-100 flex items-center space-x-2"
        >
            <a
                btn
                matRipple
                class="secondary"
                *ngIf="active === 'items'"
                [routerLink]="[base_route, 'manage', 'group']"
            >
                Add Product
            </a>
            <a
                btn
                matRipple
                class="secondary"
                *ngIf="active === 'purchase-orders'"
                [routerLink]="[base_route, 'manage', 'purchase-order']"
            >
                Add Purchase Order
            </a>
            <mat-button-toggle-group
                [ngModel]="(options | async)?.view"
                (ngModelChange)="setOptions({ view: $event })"
                *ngIf="active === 'items'"
            >
                <mat-button-toggle value="grid" matTooltip="View as Grid">
                    <div class="flex items-center justify-center h-12 w-8">
                        <app-icon class="text-2xl">view_module</app-icon>
                    </div>
                </mat-button-toggle>
                <mat-button-toggle value="list" matTooltip="View as List">
                    <div class="flex items-center justify-center h-12 w-8">
                        <app-icon class="text-2xl">view_list</app-icon>
                    </div>
                </mat-button-toggle>
            </mat-button-toggle-group>
            <div class="flex-1"></div>
            <button
                btn
                icon
                matRipple
                *ngIf="active === 'items'"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                matTooltip="Edit Config"
                (click)="editConfig()"
            >
                <app-icon>menu_book</app-icon>
            </button>
            <button
                btn
                icon
                matRipple
                *ngIf="active === 'items'"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                matTooltip="Room Availability"
                (click)="setRoomAvailability()"
            >
                <app-icon>event_available</app-icon>
            </button>
            <button
                btn
                icon
                matRipple
                *ngIf="active === 'items'"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                matTooltip="Manage Categories"
                (click)="manageCategories()"
            >
                <app-icon>list_alt</app-icon>
            </button>
            <mat-form-field appearance="outline" class="no-subscript">
                <app-icon matPrefix class="text-2xl relative top-1 -left-1">
                    search
                </app-icon>
                <input
                    matInput
                    [ngModel]="(options | async)?.search"
                    (ngModelChange)="setOptions({ search: $event })"
                    placeholder="Search products and requests"
                />
            </mat-form-field>
        </div>
        <div
            class="flex items-center space-x-2 px-4 pb-2"
            *ngIf="use_region && (building | async)?.length"
        >
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    [ngModel]="(building | async)?.id"
                    (ngModelChange)="setBuilding($event)"
                    placeholder="All Buildings"
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
        private _dialog: MatDialog
    ) {
        super();
    }

    public async setRoomAvailability() {
        const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
            data: {
                type: 'Assets',
                disabled_rooms: await this._state.availability
                    .pipe(take(1))
                    .toPromise(),
            },
        });
        this.subscription(
            'room-availability',
            ref.componentInstance.change.subscribe(async (list) => {
                await this._state
                    .saveSettings({ disabled_rooms: list })
                    .catch();
                ref.componentInstance.loading = false;
            })
        );
    }
}
