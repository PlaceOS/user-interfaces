import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getModule } from '@placeos/ts-client';
import { first, take } from 'rxjs/operators';

import {
    AsyncHandler,
    notifyError,
    SettingsService,
    unique,
} from '@placeos/common';
import { MapLocation, showStaff, User } from '@placeos/users';

import { SpacesService } from 'libs/spaces/src/lib/spaces.service';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { MapRadiusComponent } from 'libs/components/src/lib/map-radius.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { ExploreStateService } from './explore-state.service';
import { ExploreSpacesService } from './explore-spaces.service';
import { ExploreZonesService } from './explore-zones.service';
import { ExploreDesksService } from './explore-desks.service';
import { ExploreParkingService } from './explore-parking.service';
import { Point } from '@placeos/svg-viewer';

const EMPTY = [];

@Component({
    selector: 'explore-map-view',
    template: `
        <i-map
            [src]="url | async"
            [zoom]="(positions | async)?.zoom"
            [center]="(positions | async)?.center"
            (zoomChange)="updateZoom($event)"
            (centerChange)="updateCenter($event)"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
        ></i-map>
        <explore-zoom-controls
            class="absolute bottom-2 right-2"
        ></explore-zoom-controls>
        <div
            controls
            class="absolute top-2 left-2 max-w-[calc(100vw-1rem)] bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-500 rounded p-2 space-y-2 overflow-hidden"
        >
            <explore-map-controls></explore-map-controls>
            <div class="flex items-center space-x-2">
                <mat-slide-toggle
                    name="zones"
                    class="ml-2"
                    [ngModel]="!(options | async)?.disable?.includes('zones')"
                    (ngModelChange)="toggleZones($event)"
                ></mat-slide-toggle>
                <label for="zones" class="mb-0" i18n>Zones</label>
            </div>
        </div>
        <div
            legend
            *ngIf="show_legend && legend.length"
            class="absolute bottom-2 left-2 p-2 rounded bg-white dark:bg-neutral-800 border border-gray-300"
        >
            <h3 class="mb-2 font-medium" i18n>Legend</h3>
            <div
                class="flex items-center space-x-2"
                *ngFor="let pair of legend"
            >
                <div
                    class="w-3 h-3 rounded-full border border-gray-400"
                    [style.background-color]="pair[1]"
                ></div>
                <div class="text-sm">{{ pair[0] }}</div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [zones] {
                top: 3.5rem;
            }
        `,
    ],
    providers: [
        ExploreSpacesService,
        ExploreDesksService,
        ExploreZonesService,
        ExploreParkingService,
        SpacePipe,
    ],
})
export class ExploreMapViewComponent extends AsyncHandler implements OnInit {
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

    public async toggleZones(enabled: boolean) {
        const options = await this.options.pipe(take(1)).toPromise();
        const disable = !enabled
            ? unique([...(options.disable || []), 'zones', 'devices'])
            : options.disable?.filter(
                  (_) => _ !== 'zones' && _ !== 'devices'
              ) || [];
        this.setOptions({ disable });
    }

    public get show_legend() {
        return !!this._settings.get('app.explore.show_legend');
    }

    public get legend(): [string, string][] {
        return this._settings.get('app.explore.legend') || EMPTY;
    }

    constructor(
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService,
        private _parking: ExploreParkingService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _spaces: SpacesService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _space_pipe: SpacePipe
    ) {
        super();
    }

    public async ngOnInit() {
        this._state.reset();
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.toggleZones(false);
        this.subscription('desks', this._desks.startPolling());
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('level')) {
                    this._state.setLevel(params.get('level'));
                }
                this._state.setFeatures('_located', []);
                if (params.has('space')) {
                    this.locateSpace(params.get('space'));
                } else if (params.has('user')) {
                    let user = this._settings.value('last_search');
                    if (!user || params.get('user') !== user.email) {
                        user = null;
                        user = await showStaff(params.get('user')).toPromise();
                    }
                    if (!user)
                        return notifyError(
                            `Unable to user details for ${params.get('user')}`
                        );
                    this.locateUser(
                        user instanceof Array ? user[0] : user
                    ).catch((_) => {
                        notifyError(`Unable to locate ${params.get('user')}`);
                        this._router.navigate([], {
                            relativeTo: this._route,
                            queryParams: {},
                        });
                    });
                } else if (params.has('locate')) {
                    this._locateFeature(
                        params.get('locate'),
                        params.get('name')
                    );
                } else {
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', []);
                    });
                }
            })
        );
    }

    public updateZoom(zoom: number) {
        this._state.setPositions(zoom, this._state.positions.center);
    }

    public updateCenter(center: Point) {
        this._state.setPositions(this._state.positions.zoom, center);
    }

    private _locateFeature(id: string, name = '') {
        const has_coordinates = id.includes(',');
        const parts = id.split(',');
        const feature: any = {
            track_id: `locate-${id}`,
            location: has_coordinates
                ? { x: parseFloat(parts[0]), y: parseFloat(parts[1]) }
                : id,
            content: MapPinComponent,
            z_index: 99,
            data: { message: name },
        };
        this.timeout('update_location', () =>
            this._state.setFeatures('_located', [feature])
        );
    }

    private async locateSpace(id: string) {
        const space = await this._space_pipe.transform(id);
        if (!space) return notifyError('Unable to load space details.');
        this._state.setLevel(this._org.levelWithID(space.zones)?.id);
        const feature: any = {
            track_id: `locate-${space.id}`,
            location: space.map_id,
            content: MapPinComponent,
            z_index: 99,
            data: {
                message: `${space.display_name || space.name} is here`,
            },
        };
        this.timeout('update_location', () =>
            this._state.setFeatures('_located', [feature])
        );
    }

    private async locateUser(user: User) {
        let locate_details: any = this._org.binding('location_services');
        if (!locate_details)
            throw 'Location services is not setup for this application.';
        if (typeof locate_details === 'string') {
            locate_details = {
                system_id: locate_details,
                module: 'LocationServices',
            };
        }
        const mod = getModule(locate_details.system_id, locate_details.module);
        const locations: MapLocation[] = (
            await mod.execute('locate_user', [
                user.email,
                user.username || user.id,
            ])
        ).map((i) => new MapLocation(i));
        locations.sort(
            (a, b) =>
                locate_details.priority.indexOf(a.type) -
                locate_details.priority.indexOf(b.type)
        );
        if (!locations?.length) {
            throw 'No locations for the given user';
        }
        this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
        const pos: any = locations[0].position;
        const { coordinates_from } = locations[0];
        const feature: any = {
            track_id: `locate-${user.id}`,
            location:
                locations[0].type === 'wireless'
                    ? {
                          x: coordinates_from?.includes('right')
                              ? 1 - pos.x
                              : pos.x,
                          y: coordinates_from?.includes('bottom')
                              ? 1 - pos.y
                              : pos.y,
                      }
                    : pos,
            content:
                locations[0].type === 'wireless'
                    ? MapRadiusComponent
                    : MapPinComponent,
            z_index: 99,
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
