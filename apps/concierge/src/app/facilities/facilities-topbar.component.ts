import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler, Identity, OrganisationService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { EventsStateService } from '../day-view/events-state.service';
import { SearchbarComponent } from '../ui/searchbar.component';

@Component({
    selector: 'facilities-topbar',
    template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center space-x-2 border-b px-4"
        >
            <mat-form-field appearance="outline">
                <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
                <mat-select
                    multiple
                    [ngModel]="zones()"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-label>Events</mat-label>
                <mat-select
                    multiple
                    [ngModel]="type_list()"
                    (ngModelChange)="updateTypes($event)"
                    placeholder="No Events"
                >
                    <mat-select-trigger>Legend</mat-select-trigger>
                    @for (type of types; track type) {
                        <mat-option [value]="type.id">
                            {{ type.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="flex-full"></div>
            <searchbar class="mr-2"></searchbar>
        </div>
    `,
    styles: [
        `
            .flex-full {
                flex: 1;
                width: 0.5em;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
                margin-left: 1em;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        SearchbarComponent,
        FormsModule,
        TranslatePipe,
    ],
})
export class FacilitiesTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventsStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    private readonly _ready = signal(false);
    private readonly _query_params = toSignal(this._route.queryParamMap);

    /** List of selected levels */
    public readonly zones = signal<string[]>([]);

    public readonly types: Identity[] = [
        { id: 'internal', name: 'Internal' },
        { id: 'external', name: 'External' },
        { id: 'cancelled', name: 'Cancelled' },
    ];
    /** List of selected types */
    public readonly type_list = signal(this.types.map((i) => `${i.id}`));
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setDate(d);
    /** List of levels for the active building */
    public readonly levels = toSignal(this._org.active_levels, {
        initialValue: [],
    });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this.zones.set(z);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setZones(z);
    };
    /** List of levels for the active building */
    public readonly updateTypes = (types) => {
        this.type_list.set(types);
        this._state.setFilters({
            hide_type: this.types.reduce((list, item) => {
                !types.includes(item.id) ? list.push(item) : '';
                return list;
            }, []),
        });
    };

    constructor() {
        super();
        effect(() => {
            if (!this._ready()) return;
            const params = this._query_params();
            if (!params?.has('zone_ids')) return;
            const zones = (params.get('zone_ids') || '')
                .split(',')
                .filter(Boolean);
            if (!zones.length) return;
            const level = this._org.levelWithID(zones);
            if (!level) return;
            this._org.building = this._org.buildings.find(
                (bld) => bld.id === level.parent_id,
            );
            this.zones.set(zones);
        });
        effect(() => {
            if (!this._ready()) return;
            const levels = this.levels();
            if (!levels.length) return;
            const zones = this.zones().filter((zone) =>
                levels.find((lvl) => lvl.id === zone),
            );
            if (!zones.length) {
                zones.push(levels[0].id);
            }
            if (this._same_zones(zones, this.zones())) return;
            this.updateZones(zones);
        });
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._ready.set(true);
        this.updateTypes(this.type_list());
    }

    private _same_zones(left: string[], right: string[]) {
        return (
            left.length === right.length &&
            left.every((zone, index) => zone === right[index])
        );
    }
}
