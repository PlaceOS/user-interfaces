import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { OrganisationService } from '@placeos/common';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-topbar',
    template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center space-x-2 border-b px-4"
        >
            <!-- <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="(filters | async)?.only_onsite"
                (ngModelChange)="setFilters({ only_onsite: $event })"
                ><div class="text-xs">Onsite Only</div></mat-slide-toggle
            >
            <div class="flex-1 w-2"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar> -->
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
    imports: [],
})
export class SignageTopbarComponent {
    private _state = inject(SignageStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    /** List of selected levels */
    public zones = signal<string[]>([]);
    /** List of levels for the active building */
    public readonly levels = toSignal(this._org.active_levels, {
        initialValue: [],
    });
    /** Route query parameters */
    private readonly _queryParams = toSignal(this._route.queryParamMap);

    constructor() {
        // Handle query parameter changes
        effect(() => {
            const params = this._queryParams();
            if (params?.has('zone_ids')) {
                const zone_ids = params.get('zone_ids').split(',');
                if (zone_ids.length) {
                    const level = this._org.levelWithID(zone_ids);
                    if (!level) {
                        return;
                    }
                    this._org.building = this._org.buildings.find(
                        (bld) => bld.id === level.parent_id,
                    );
                    this.zones.set(zone_ids);
                }
            }
        });

        // Handle level changes
        effect(() => {
            const active_levels = this.levels();
            const current_zones = this.zones();
            const filtered_zones = current_zones.filter((zone) =>
                active_levels.find((lvl) => lvl.id === zone),
            );
            if (!filtered_zones.length && active_levels.length) {
                this.zones.set([active_levels[0].id]);
            } else if (
                filtered_zones.length !== current_zones.length ||
                filtered_zones.some((z, i) => z !== current_zones[i])
            ) {
                this.zones.set(filtered_zones);
            }
            // this.updateZones(this.zones());
        });
        // this.setSearch('');
    }
}
