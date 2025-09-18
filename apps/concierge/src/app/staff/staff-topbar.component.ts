import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AsyncHandler, OrganisationService } from '@placeos/common';
import { StaffStateService } from './staff-state.service';

@Component({
    selector: 'staff-topbar',
    template: `
        <div
            class="flex h-20 items-center space-x-2 border-b border-base-200 bg-base-100 px-4"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="(filters | async)?.only_onsite"
                (ngModelChange)="setFilters({ only_onsite: $event })"
                ><div class="text-xs">
                    {{ 'APP.CONCIERGE.DIRECTORY_ONSITE_ONLY' | translate }}
                </div></mat-slide-toggle
            >
            <div class="w-2 flex-1"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar>
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
    standalone: false,
})
export class StaffTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(StaffStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

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
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        if (!level) {
                            return;
                        }
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                        this.zones = zones;
                    }
                }
            }),
        );
        this.subscription(
            'levels',
            this._org.active_levels.subscribe((levels) => {
                this.zones = this.zones.filter((zone) =>
                    levels.find((lvl) => lvl.id === zone),
                );
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            }),
        );
        this.setSearch('');
    }
}
