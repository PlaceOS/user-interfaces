import { Component } from '@angular/core';
import { OrganisationService } from '@user-interfaces/organisation';

import { ExploreStateService } from './explore-state.service';

@Component({
    selector: 'explore-map-controls',
    template: `
        <div class="space-x-2">
            <mat-form-field
                overlay
                *ngIf="(buildings | async)?.length > 1"
                appearance="outline"
            >
                <mat-select
                    placeholder="Select Building..."
                    [ngModel]="building | async"
                    (ngModelChange)="setBuilding($event)"
                >
                    <mat-option
                        *ngFor="let bld of buildings | async"
                        [value]="bld"
                    >
                        {{ bld.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field
                overlay
                *ngIf="(levels | async)?.length"
                appearance="outline"
            >
                <mat-select
                    placeholder="Select Level..."
                    [ngModel]="level | async"
                    (ngModelChange)="setLevel($event)"
                >
                    <mat-option
                        *ngFor="let lvl of levels | async"
                        [value]="lvl"
                    >
                        {{ lvl.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
    `,
    styles: [
        `
            :host {
                padding: 0.5rem;
            }
        `,
    ],
})
export class ExploreMapControlComponent {
    /** List of available buildings */
    public readonly buildings = this._org.building_list;
    /** Currently active building */
    public readonly building = this._org.active_building;
    /** List of availabel levels */
    public readonly levels = this._org.active_levels;
    /** Currently active level */
    public readonly level = this._state.level;
    /** Set the currently active level */
    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);
    /** Set the currenly active building */
    public readonly setBuilding = (bld) => (this._org.building = bld);

    constructor(
        private _org: OrganisationService,
        private _state: ExploreStateService
    ) {}
}
