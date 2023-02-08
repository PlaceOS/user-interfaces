import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { EventsStateService } from '../day-view/events-state.service';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-topbar',
    template: `
        <div class="flex items-center bg-white dark:bg-neutral-700 px-2 h-20">
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="zones[0]"
                    (ngModelChange)="updateZones([$event]); zones = [$event]"
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
            <div class="flex-1 w-0"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `,
    styles: [
        `
            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
})
export class ParkingTopbarComponent extends AsyncHandler implements OnInit {
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._state.levels;
    /** Options set for week view */
    public readonly options = this._state.options;
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setOptions({ date: d });
    /** Set filter string */
    public readonly setSearch = (str) =>
        this._state.setOptions({ search: str });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
        });
        this._state.setOptions({ zones: z });
    };

    constructor(
        private _state: ParkingStateService,
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
            this._state.levels.subscribe((levels) => {
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
}
