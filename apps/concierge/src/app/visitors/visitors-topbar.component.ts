import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitors-topbar',
    template: `
        <div
            class="flex items-center bg-white dark:bg-neutral-700 h-20 px-4 border-b border-gray-300 dark:border-neutral-500 space-x-2"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    placeholder="All Levels"
                >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="(filters | async)?.period || 1"
                    (ngModelChange)="setFilters({ period: $event })"
                    placeholder="Viewing Period"
                >
                    <mat-option [value]="1">Show Day</mat-option>
                    <mat-option [value]="7">Show Week</mat-option>
                    <mat-option [value]="30">Show Month</mat-option>
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="(filters | async)?.show_guests"
                (ngModelChange)="setFilters({ show_guests: $event })"
                ><div class="text-xs">Only Guests</div></mat-slide-toggle
            >
            <mat-slide-toggle
                class="m-2"
                *ngIf="!(filters | async)?.show_guests"
                [ngModel]="(filters | async)?.all_bookings"
                (ngModelChange)="setFilters({ all_bookings: $event })"
                ><div class="text-xs">All Bookings</div></mat-slide-toggle
            >
            <div class="flex-1 w-2"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar>
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
export class VisitorsTopbarComponent extends BaseClass implements OnInit {
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;

    public readonly filters = this._state.filters;
    /** Set filtered date */
    public readonly setDate = (date) => this._state.setFilters({ date });
    /** Set filtered date */
    public readonly setFilters = (filters) => this._state.setFilters(filters);
    /** Set filter string */
    public readonly setSearch = (str) => this._state.setSearchString(str);
    /** Update active zones for desks */
    public readonly updateZones = (zones) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
        });
        this._state.setFilters({ zones });
    };

    constructor(
        private _state: VisitorsStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        this.zones = zones;
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id
                        );
                    }
                }
            })
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
        this.setSearch('');
    }
}
