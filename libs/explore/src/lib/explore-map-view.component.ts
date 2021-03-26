import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getModule } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import {
    BaseClass,
    notifyError,
    SettingsService,
} from '@user-interfaces/common';
import { Space, SpacesService } from '@user-interfaces/spaces';
import { MapLocation, showStaff, User } from '@user-interfaces/users';
import {
    MapPinComponent,
    MapRadiusComponent,
} from '@user-interfaces/components';
import { OrganisationService } from '@user-interfaces/organisation';

import { ExploreStateService } from './explore-state.service';
import { ExploreSpacesService } from './explore-spaces.service';
import { ExploreZonesService } from './explore-zones.service';
import { ExploreDesksService } from './explore-desks.service';

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
            [labels]="labels | async"
        ></i-map>
        <explore-zoom-controls
            class="absolute bottom-0 right-0"
        ></explore-zoom-controls>
        <explore-map-controls
            class="absolute top-0 left-0"
        ></explore-map-controls>
        <!-- <explore-search class="absolute top-0 right-0"></explore-search> -->
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
                background: var(--bg);
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
    /** Observable for the labels map */
    public readonly labels = this._state.map_labels;
    /** Observable for the active map */
    public readonly options = this._state.options;
    /** Observable for user messages */
    public readonly message = this._state.message;

    public readonly setOptions = (o) => this._state.setOptions(o);

    constructor(
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _spaces: SpacesService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('level')) {
                    this._state.setLevel(params.get('level'));
                }
                this._state.setFeatures('_located', []);
                if (params.has('space')) {
                    const space = this._spaces.find(params.get('space'));
                    if (!space) return;
                    this.locateSpace(space);
                } else if (params.has('user')) {
                    let user = this._settings.value('last_search');
                    if (!user || params.get('user') !== user.email) {
                        user = null;
                        user = await showStaff(params.get('user')).toPromise();
                    }
                    if (!user)
                        return notifyError(`Unable to user details for ${params.get('user')}`);
                    this.locateUser(user instanceof Array ? user[0] : user).catch((_) => {
                        notifyError(`Unable to locate ${params.get('user')}`);
                        this._router.navigate([], { relativeTo: this._route, queryParams: {} });
                    });
                } else {
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', []);
                    });
                }
            })
        );
    }

    private locateSpace(space: Space) {
        this._state.setLevel(this._org.levelWithID(space.zones).id);
        const feature: any = {
            location: space.map_id,
            content: MapPinComponent,
            data: {
                message: `${space.display_name || space.name} is here`,
            },
        };
        this.timeout('update_location', () => {
            this._state.setFeatures('_located', [feature]);
        });
    }

    private async locateUser(user: User) {
        let locate_details: any = this._org.organisation.bindings.location_services;
        if (!locate_details) return;
        if (typeof locate_details === 'string') {
            locate_details = {
                system_id: locate_details,
                module: 'LocationServices',
            };
        }
        const mod = getModule(locate_details.system_id, locate_details.module);
        const locations: MapLocation[] = (
            await mod.execute('locate_user', [user.email, user.id])
        ).map((i) => new MapLocation(i));
        locations.sort(
            (a, b) =>
                locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type)
        );
        if (!locations?.length) {
            throw 'No locations for the given user';
        }
        this._state.setLevel(this._org.levelWithID([locations[0]?.level]).id);
        const feature: any = {
            location: locations[0].position,
            content: locations[0].type === 'wireless' ? MapRadiusComponent : MapPinComponent,
            data: {
                message: `${user.name} is here`,
                radius: locations[0].variance,
                last_seen: locations[0].last_seen,
            },
        };
        this.timeout('update_location', () => {
            this._state.setFeatures('_located', [feature]);
        });
    }
}
