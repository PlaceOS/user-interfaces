import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { first } from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { ExploreStateService } from './explore-state.service';

@Component({
    selector: 'explore-map-controls',
    template: `
        <div class="flex space-x-2">
            <mat-form-field
                overlay
                buildings
                class="flex-1"
                has-bld="true"
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
                        {{ bld.display_name || bld.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field
                overlay
                levels
                class="flex-1"
                [attr.has-bld]="(buildings | async)?.length > 1"
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
                        {{ lvl.display_name || lvl.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                min-width: 12rem;
                height: 3.5rem;
            }

            mat-form-field[has-bld='true'] {
                max-width: calc(50vw - 2.5rem);
            }

            :host[full] mat-form-field {
                max-width: calc(50% - 2.5rem);
            }
        `,
    ],
})
export class ExploreMapControlComponent extends BaseClass implements OnInit {
    /** List of available buildings */
    public readonly buildings = this._org.building_list;
    /** Currently active building */
    public readonly building = this._org.active_building;
    /** List of availabel levels */
    public readonly levels = this._org.active_levels;
    /** Currently active level */
    public readonly level = this._state.level;
    /** Set the currently active level */
    public readonly setLevel = (lvl) => {
        this._state.setFeatures('_located', []);
        this.timeout(
            'set_level',
            () =>
                this._router.navigate([], {
                    relativeTo: this._route,
                    queryParams: { zone: lvl.id },
                }),
            201
        );
    };
    /** Set the currenly active building */
    public readonly setBuilding = (bld) => (this._org.building = bld);

    constructor(
        private _org: OrganisationService,
        private _state: ExploreStateService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                params.has('zone')
                    ? this._state.setLevel(params.get('zone'))
                    : ''
            )
        );
    }
}
