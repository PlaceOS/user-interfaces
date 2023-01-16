import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    CateringOrdersService,
    CateringStateService,
    ChargeCodeListModalComponent,
} from '@placeos/catering';
import { CateringRoomsStateModalComponent } from 'libs/catering/src/lib/catering-rooms-state-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'catering-topbar',
    template: `
        <div
            class="flex items-center bg-white dark:bg-neutral-700 h-20 px-4 border-b border-gray-300 dark:border-neutral-500 space-x-2"
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
                (click)="addItem()"
            >
                Add Item
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                (click)="editConfig()"
            >
                Edit Config
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                (click)="importMenu()"
            >
                Import Menu
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                (click)="setRoomAvailability()"
            >
                Room Availability
            </button>
            <button
                *ngIf="page === 'menu'"
                btn
                matRipple
                (click)="setChargeCodes()"
            >
                Charge Codes
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
export class CateringTopbarComponent extends BaseClass implements OnInit {
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

    public setRoomAvailability() {
        this._dialog.open(CateringRoomsStateModalComponent);
    }

    public setChargeCodes() {
        this._dialog.open(ChargeCodeListModalComponent);
    }
}
