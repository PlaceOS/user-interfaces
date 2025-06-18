import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { ExploreStateService } from './explore-state.service';

@Component({
    selector: 'explore-map-controls',
    template: `
        <div class="flex w-full space-x-2">
            @if ((buildings | async)?.length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-[10.5rem] flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building | async"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings | async; track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if ((levels | async)?.length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-[10.25rem] flex-1"
                    [attr.has-bld]="(buildings | async)?.length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level | async"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels | async; track lvl.id) {
                            <mat-option [value]="lvl">
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
    `,
    styles: [
        `
            mat-form-field[has-bld='true'] {
                max-width: calc(50vw - 2.5rem);
            }

            :host[full] mat-form-field {
                max-width: calc(50% - 2.5rem);
            }
        `,
    ],
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
})
export class ExploreMapControlComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _state = inject(ExploreStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    /** List of available buildings */
    public readonly buildings = this._org.active_buildings;
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
            201,
        );
    };
    /** Set the currenly active building */
    public readonly setBuilding = (bld) => (this._org.building = bld);

    constructor() {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                params.has('zone')
                    ? this._state.setLevel(params.get('zone'))
                    : '',
            ),
        );
    }
}
