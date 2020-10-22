import { Component, OnInit } from '@angular/core';

import { ExploreStateService } from './explore-state.service';
import { ExploreSpacesService } from './explore-spaces.service';
import { ExploreZonesService } from './explore-zones.service';
import { ExploreDesksService } from './explore-desks.service';
import { BaseClass } from '@user-interfaces/common';
import { ActivatedRoute } from '@angular/router';
import { SpacesService } from '@user-interfaces/spaces';
import { StaffService } from '@user-interfaces/users';
import { first } from 'rxjs/operators';
import { MapPinComponent } from '@user-interfaces/components';
import { OrganisationService } from '@user-interfaces/organisation';

@Component({
    selector: 'explore-map-view',
    template: `
        <i-map
            [src]="url | async"
            [zoom]="(positions | async).zoom"
            [center]="(positions | async).center"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
        ></i-map>
        <explore-zoom-controls
            class="absolute bottom-0 right-0"
        ></explore-zoom-controls>
        <explore-map-controls
            class="absolute top-0 left-0"
        ></explore-map-controls>
        <explore-search class="absolute top-0 right-0"></explore-search>
        <div
            name="zones"
            class="p-2 bg-white border border-gray-400 absolute left-0 m-2 rounded flex items-center"
        >
            Zones
            <mat-slide-toggle
                class="ml-2"
                [ngModel]="(options | async)?.show_zones"
                (ngModelChange)="setOptions({ show_zones: $event })"
            ></mat-slide-toggle>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [name='zones'] {
                top: 3.5rem;
            }
        `,
    ],
    providers: [ExploreSpacesService, ExploreDesksService, ExploreZonesService],
})
export class ExploreMapViewComponent extends BaseClass implements OnInit {
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the active map */
    public readonly options = this._state.options;

    public readonly setOptions = (o) => this._state.setOptions(o);

    constructor(
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService,
        private _route: ActivatedRoute,
        private _spaces: SpacesService,
        private _users: StaffService,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._spaces.initialised.pipe(first(_ => _)).toPromise();
        this.subscription('route.query', this._route.queryParamMap.subscribe(async (params) => {
            if (params.has('level')) {
                this._state.setLevel(params.get('level'));
            }
            if (params.has('space')) {
                const space = this._spaces.find(params.get('space'));
                if (!space) return;
                this._state.setLevel(this._org.levelWithID(space.zones).id);
                console.log('Space:', space);
                const feature: any = {
                    location: space.map_id,
                    content: MapPinComponent,
                    data: {
                        message: `${space.display_name || space.name} is here`
                    }
                };
                this.timeout('update_location', () => {
                    this._state.setFeatures('_located', [feature]);
                })
            } else if (params.has('user')) {
                const user = await this._users.show(params.get('user'));
                if (!user) return;
            } else {
                this.timeout('update_location', () => {
                    this._state.setFeatures('_located', []);
                })
            }
        }));
    }
}
