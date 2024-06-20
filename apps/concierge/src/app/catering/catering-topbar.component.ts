import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, take } from 'rxjs/operators';

import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    CateringOrdersService,
    CateringStateService,
    ChargeCodeListModalComponent,
} from '@placeos/catering';
import { MatDialog } from '@angular/material/dialog';
import { AvailableRoomsStateModalComponent } from '@placeos/components';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'catering-topbar',
    template: `
        <div class="flex items-center w-full pt-4 pb-2 px-8 space-x-2">
            <h2 class="text-2xl font-medium">
                Catering {{ page === 'menu' ? 'Menu' : 'Orders' }}
            </h2>
            <div class="flex-1 w-px"></div>
            <searchbar
                class="mr-2"
                [model]="filters?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
        <div class="flex items-center bg-base-100 h-20 px-8 space-x-2">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="filters?.zones"
                    (ngModelChange)="updateZones($event)"
                    placeholder="All Levels"
                    multiple
                >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        <div class="flex flex-col-reverse">
                            <div class="text-xs opacity-30" *ngIf="use_region">
                                {{ (level.parent_id | building)?.display_name }}
                                <span class="opacity-0"> - </span>
                            </div>
                            <div>
                                {{ level.display_name || level.name }}
                            </div>
                        </div>
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <div *ngIf="page === 'menu'" class="flex-1 w-2"></div>
            <button
                *ngIf="
                    page === 'menu' && (!zones[0] || zones[0] === building?.id)
                "
                icon
                matRipple
                matTooltip="Add Item"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                (click)="addItem()"
            >
                <app-icon class="text-2xl">add</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                icon
                matRipple
                matTooltip="Edit Config"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                (click)="editConfig()"
            >
                <app-icon class="text-2xl">menu_book</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                icon
                matRipple
                matTooltip="Import Menu"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                (click)="importMenu()"
            >
                <app-icon class="text-2xl">cloud_upload</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                icon
                matRipple
                matTooltip="Room Availability"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                (click)="setRoomAvailability()"
            >
                <app-icon class="text-2xl">event_available</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                icon
                matRipple
                matTooltip="Charge Codes"
                class="bg-secondary text-secondary-content rounded h-12 w-12"
                (click)="setChargeCodes()"
            >
                <app-icon class="text-2xl">payments</app-icon>
            </button>
            <div *ngIf="page !== 'menu'" class="flex-1 w-2"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options
                *ngIf="page !== 'menu'"
                (dateChange)="setDate($event)"
            ></date-options>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
})
export class CateringTopbarComponent extends AsyncHandler implements OnInit {
    /** List of selected levels */
    public zones: string[] = [];
    /** Currently active page */
    public page: string;
    public readonly filters = this._orders.filters;
    /** List of levels for the active building */
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this._settings.get('app.use_region')
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld)
        )
    );
    /** Set filtered date */
    public readonly setDate = (date) =>
        (this._orders.filters = { ...this._orders.filters, date });
    public readonly setSearch = (str) =>
        (this._orders.filters = { ...this._orders.filters, search: str });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
        });
        this._orders.filters = { ...this._orders.filters, zones: [z] };
        this._catering.zone = z[0];
    };

    public readonly addItem = () => this._catering.addItem();
    public readonly editConfig = () => this._catering.editConfig();
    public readonly importMenu = () => this._catering.importMenu();

    public get building() {
        return this._org.building;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        private _orders: CateringOrdersService,
        private _catering: CateringStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._catering.zone =
            (this._orders.filters?.zones || [])[0] || this._org.building?.id;
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (!zones.length) return;
                    const level = this._org.levelWithID(zones);
                    this.zones = zones;
                    if (!level) return;
                    this._org.building = this._org.buildings.find(
                        (bld) => bld.id === level.parent_id
                    );
                }
            })
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(
                (params) =>
                    (this.page = params.has('view') ? params.get('view') : '')
            )
        );
    }

    public async setRoomAvailability() {
        const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
            data: {
                type: 'Catering',
                disabled_rooms: await this._catering.availability
                    .pipe(take(1))
                    .toPromise(),
            },
        });
        this.subscription(
            'room-availability',
            ref.componentInstance.change.subscribe(async (list) => {
                await this._catering
                    .saveSettings({ disabled_rooms: list })
                    .catch();
                ref.componentInstance.loading = false;
            })
        );
    }

    public setChargeCodes() {
        this._dialog.open(ChargeCodeListModalComponent);
    }
}
