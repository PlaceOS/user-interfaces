import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { RoomManagementService } from './room-management.service';

@Component({
    selector: 'room-manager-topbar',
    template: `
        <div class="flex items-center space-x-2 px-8 pt-4">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.ROOMS_HEADER' | translate }}
            </h2>
            <div class="w-2 flex-1"></div>
            <searchbar (modelChange)="setSearch($event)"></searchbar>
            <button btn (click)="newRoom()" class="w-40">
                {{ 'APP.CONCIERGE.ROOMS_ADD' | translate }}
            </button>
        </div>
        <div class="flex h-20 items-center space-x-2 bg-base-100 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="(filters | async)?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
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
            <div class="w-2 flex-1"></div>
            <button
                btn
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                (click)="manageRestrictions()"
                [matTooltip]="'APP.CONCIERGE.ROOMS_BOOKING_RULES' | translate"
            >
                <app-icon>lock_open</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
    standalone: false,
})
export class RoomManagerTopbarComponent extends AsyncHandler implements OnInit {
    /** List of levels for the active building */
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld),
        ),
    );

    public readonly filters = this._manager.options;
    /** Set filtered date */
    public readonly setFilters = (filters) => this._manager.setFilters(filters);
    /** Set filter string */
    public readonly setSearch = (str) => this._manager.setSearchString(str);
    /** Update active zones for desks */
    public readonly updateZones = (zones) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
    };

    public readonly newRoom = () => this._manager.editRoom();

    public get building() {
        return this._org.building;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get root_zone() {
        return (
            (this.use_region ? this._org.region.id : '') ||
            this._org.building.id
        );
    }

    constructor(
        private _manager: RoomManagementService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog,
        private _settings: SettingsService,
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
                if (params.has('zone_ids')) {
                    const zone_list = (params.get('zone_ids') || '').split(',');
                    const zones = zone_list.filter((z) => z);
                    this._manager.setFilters({ zones });
                }
            }),
        );
        this.setSearch('');
    }
}
