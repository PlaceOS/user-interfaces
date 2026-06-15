import { Component, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, firstTruthyValueFrom } from '@placeos/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService } from '@placeos/common';
import { ExploreStateService } from './explore-state.service';

@Component({
    selector: 'explore-map-controls',
    template: `
        <div class="flex w-full space-x-2">
            @if (buildings().length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-42 flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building()"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings(); track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (levels().length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-41 flex-1"
                    [attr.has-bld]="buildings().length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels(); track lvl.id) {
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
    imports: [MatFormFieldModule, MatSelectModule, FormsModule],
})
export class ExploreMapControlComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _state = inject(ExploreStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    /** List of available buildings */
    public readonly buildings = toSignal(this._org.active_buildings, {
        initialValue: [],
    });
    /** Currently active building */
    public readonly building = toSignal(this._org.active_building, {
        initialValue: null,
    });
    /** List of availabel levels */
    public readonly levels = toSignal(this._org.active_levels, {
        initialValue: [],
    });
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
        await firstTruthyValueFrom(this._org.initialised);
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
