import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler, OrganisationService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitors-topbar',
    template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center space-x-2 border-b px-4"
        >
            <mat-form-field appearance="outline">
                <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
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
            <mat-form-field appearance="outline">
                <mat-label>{{ 'FORM.PERIOD' | translate }}</mat-label>
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
            <div class="w-2 flex-1"></div>
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
    imports: [
        CommonModule,
        DateOptionsComponent,
        SearchbarComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        TranslatePipe,
    ],
})
export class VisitorsTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(VisitorsStateService);
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
                        this.zones = zones;
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
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
