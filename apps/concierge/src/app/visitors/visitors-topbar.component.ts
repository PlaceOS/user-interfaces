import {
    ChangeDetectionStrategy,
    Component,
    Injector,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

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
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels(); track level.id) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="filters()?.period || 1"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
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
    private _injector = inject(Injector);

    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    /** List of levels for the active building */
    public readonly levels = signal<any[]>([]);

    public readonly filters = signal<any>({});
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
        await this._org.waitUntilInitialised();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        this.zones.set(zones);
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
            toObservable(this._org.active_levels, {
                injector: this._injector,
            }).subscribe((levels) => {
                const current_levels = levels || [];
                this.levels.set(current_levels);
                const zones = this.zones().filter((zone) =>
                    current_levels.find((lvl) => lvl.id === zone),
                );
                if (!zones.length && current_levels.length) {
                    zones.push(current_levels[0].id);
                }
                this.zones.set(zones);
                this.updateZones(zones);
            }),
        );
        if (this._state.filters?.subscribe) {
            this.subscription(
                'filters',
                this._state.filters.subscribe((filters) => {
                    this.filters.set(filters || {});
                }),
            );
        }
        this.setSearch('');
    }
}
