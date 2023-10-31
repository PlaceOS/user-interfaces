import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, take } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    CateringOrdersService,
    CateringStateService,
    ChargeCodeListModalComponent,
} from '@placeos/catering';
import { MatDialog } from '@angular/material/dialog';
import { AvailableRoomsStateModalComponent } from '@placeos/components';

@Component({
    selector: 'catering-topbar',
    template: `
        <div
            class="flex items-center bg-base-100 h-20 px-4 border-b border-base-200 space-x-2"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    [(ngModel)]="zones[0]"
                    (ngModelChange)="updateZones([$event])"
                    placeholder="All Levels"
                >
                    <mat-option [value]="building?.id"> All Levels </mat-option>
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <button
                *ngIf="
                    page === 'menu' && (!zones[0] || zones[0] === building?.id)
                "
                btn
                matRipple
                matTooltip="Add Item"
                (click)="addItem()"
            >
                <app-icon class="text-2xl">add</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                matTooltip="Edit Config"
                (click)="editConfig()"
            >
                <app-icon class="text-2xl">menu_book</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                matTooltip="Import Menu"
                (click)="importMenu()"
            >
                <app-icon class="text-2xl">cloud_upload</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                matTooltip="Room Availability"
                (click)="setRoomAvailability()"
            >
                <app-icon class="text-2xl">event_available</app-icon>
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                matTooltip="Charge Codes"
                (click)="setChargeCodes()"
            >
                <app-icon class="text-2xl">payments</app-icon>
            </button>
            <div class="flex-1 w-2"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options (dateChange)="setDate($event)"></date-options>
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
    /** Active Building */
    public get building() {
        return this._org.building;
    }
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Set filtered date */
    public readonly setDate = (date) =>
        (this._orders.filters = { ...this._orders.filters, date });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
        });
        this._orders.filters = { ...this._orders.filters, zones: [z] };
        this._catering.zone = z[0] || this._catering.zone;
    };

    public readonly addItem = () => this._catering.addItem();
    public readonly editConfig = () => this._catering.editConfig();
    public readonly importMenu = () => this._catering.importMenu();

    constructor(
        private _orders: CateringOrdersService,
        private _catering: CateringStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog
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
        this.subscription(
            'levels',
            this._org.active_levels.subscribe((levels) => {
                this.zones = this.zones.filter((zone) =>
                    levels.find((lvl) => lvl.id === zone)
                );
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            })
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
