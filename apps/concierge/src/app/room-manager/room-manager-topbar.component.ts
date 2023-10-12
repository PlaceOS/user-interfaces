import { Component } from '@angular/core';
import { RoomManagementService } from './room-management.service';
import { OrganisationService } from '@placeos/organisation';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { first, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';

@Component({
    selector: 'room-manager-topbar',
    template: `
        <div class="flex items-center justify-between p-4">
            <h2 class="text-2xl font-medium">Room Management</h2>
            <button btn (click)="newRoom()" class="w-32">New Room</button>
        </div>
        <div
            class="flex items-center bg-white dark:bg-neutral-700 h-20 px-4 space-x-2"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="(this.filters | async)?.zone"
                    (ngModelChange)="updateZones($event)"
                    placeholder="All Levels"
                >
                    <mat-option [value]="building?.id">All Levels</mat-option>
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <div class="flex-1 w-2"></div>
            <button
                btn
                icon
                matRipple
                class="bg-primary text-white rounded"
                (click)="manageRestrictions()"
                matTooltip="Room Restrictions"
            >
                <app-icon>lock_open</app-icon>
            </button>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
})
export class RoomManagerTopbarComponent extends AsyncHandler {
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;

    public readonly filters = this._manager.options;
    /** Set filtered date */
    public readonly setFilters = (filters) => this._manager.setFilters(filters);
    /** Set filter string */
    public readonly setSearch = (str) => this._manager.setSearchString(str);
    /** Update active zones for desks */
    public readonly updateZones = (zone) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_id: zone },
        });
        this._manager.setFilters({ zone });
    };

    public readonly newRoom = () => this._manager.editRoom();

    public get building() {
        return this._org.building;
    }

    constructor(
        private _manager: RoomManagementService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog
    ) {
        super();
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'room' },
        });
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('zone_id')) {
                    const new_zone = params.get('zone_id');
                    const { zone } = await this._manager.options
                        .pipe(take(1))
                        .toPromise();
                    if (new_zone && new_zone !== zone) {
                        const level = this._org.levelWithID([new_zone]);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id
                        );
                        this.setFilters({ zone: new_zone });
                    }
                }
            })
        );
        this.subscription(
            'levels',
            this._org.active_levels.subscribe((levels) => {
                var zone = levels.find((lvl) => lvl.id === zone);
                if (!zone && levels.length) zone = levels[0].id;
                this.updateZones(zone);
            })
        );
        this.setSearch('');
    }
}
