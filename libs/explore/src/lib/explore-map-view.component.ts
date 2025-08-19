import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Point } from '@placeos/svg-viewer';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import {
    AsyncHandler,
    i18n,
    nextValueFrom,
    notifyError,
    notifyWarn,
    SettingsService,
    unique,
} from '@placeos/common';

import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { MapRadiusComponent } from 'libs/components/src/lib/map-radius.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { SpacesService } from 'libs/spaces/src/lib/spaces.service';
import { MapLocation } from 'libs/users/src/lib/location.class';
import { showStaff } from 'libs/users/src/lib/staff.fn';
import { User } from 'libs/users/src/lib/user.class';

import { ExploreDesksService } from './explore-desks.service';
import { ExploreLockersService } from './explore-lockers.service';
import { ExploreMapControlComponent } from './explore-map-control.component';
import { ExploreParkingService } from './explore-parking.service';
import { ExplorePointOfInterestService } from './explore-poi.service';
import { ExploreSpacesService } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';
import { ExploreZonesService } from './explore-zones.service';

const EMPTY = [];

@Component({
    selector: 'explore-map-view',
    template: `
        <interactive-map
            [src]="url | async"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
            [focus]="locate"
            [options]="{ controls: true }"
            (mapInfo)="map_info = $event || {}"
        />
        @if (!(use_mapsindoors$ | async)) {
            <div
                controls
                class="absolute left-2 top-2 max-w-[calc(100vw-1rem)] space-y-2 overflow-hidden rounded border border-base-200 bg-base-100 p-2"
            >
                <explore-map-controls></explore-map-controls>
                @if (!hide_zones) {
                    <div class="flex items-center space-x-2">
                        <mat-slide-toggle
                            name="zones"
                            class="ml-2"
                            [ngModel]="
                                !(options | async)?.disable?.includes('zones')
                            "
                            (ngModelChange)="toggleZones($event)"
                        ></mat-slide-toggle>
                        <label for="zones" class="mb-0">{{
                            'EXPLORE.AREAS' | translate
                        }}</label>
                    </div>
                }
            </div>
        }
        @if (show_legend && legend.length) {
            <div
                legend
                class="absolute bottom-2 left-2 rounded border border-base-200 bg-base-100 p-2"
            >
                <h3 class="mb-2 font-medium">
                    {{ 'EXPLORE.LEGEND' | translate }}
                </h3>
                @for (pair of legend; track pair) {
                    <div class="flex items-center space-x-2">
                        <div
                            class="h-3 w-3 rounded-full border border-base-200"
                            [style.background-color]="pair[1]"
                        ></div>
                        <div class="text-sm">{{ pair[0] }}</div>
                    </div>
                }
            </div>
        }
        @if (locate) {
            <button
                class="absolute right-2 top-2 h-12 min-w-32 rounded-lg border border-base-300 bg-base-100 px-4 shadow"
                matRipple
                (click)="clearLocate()"
            >
                Clear Pin
            </button>
        }
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
        ExploreDesksService,
        ExploreSpacesService,
        ExploreZonesService,
        ExploreParkingService,
        ExploreLockersService,
        ExplorePointOfInterestService,
        SpacePipe,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        InteractiveMapComponent,
        MatSlideToggle,
        MatRippleModule,
        ExploreMapControlComponent,
    ],
})
export class ExploreMapViewComponent extends AsyncHandler implements OnInit {
    private _state = inject(ExploreStateService);
    private _s = inject(ExploreSpacesService);
    private _desks = inject(ExploreDesksService);
    private _zones = inject(ExploreZonesService);
    private _parking = inject(ExploreParkingService);
    private _lockers = inject(ExploreLockersService);
    private _pois = inject(ExplorePointOfInterestService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _spaces = inject(SpacesService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _space_pipe = inject(SpacePipe);
    private _maps = inject(MapsPeopleService);

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

    public locate = '';
    public map_info: Record<string, any> = {};

    public async toggleZones(enabled: boolean) {
        const options = await nextValueFrom(this.options);
        const disable = !enabled
            ? unique([...(options?.disable || []), 'zones', 'devices'])
            : options?.disable?.filter(
                  (_) => _ !== 'zones' && _ !== 'devices',
              ) || [];
        this.setOptions({ disable });
    }

    public get show_legend() {
        return !!this._settings.get('app.explore.show_legend');
    }

    public get hide_zones() {
        return !!this._settings.get('app.explore.hide_zones');
    }

    public get legend(): [string, string][] {
        return this._settings.get('app.explore.legend') || EMPTY;
    }

    public readonly use_mapsindoors$: Observable<boolean> =
        this._maps.available$;

    constructor() {
        super();
    }

    public async ngOnInit() {
        this._state.reset();
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.toggleZones(false);
        this.subscription('parking_poll', this._parking.startPolling());
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('level') || params.has('zone')) {
                    this._state.setLevel(
                        params.get('level') || params.get('zone'),
                    );
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
                            i18n('EXPLORE.LOCATE_USER_FAILED', {
                                name: params.get('user'),
                            }),
                        );
                    this.locateUser(
                        user instanceof Array ? user[0] : user,
                    ).catch((e) => {
                        notifyError(e);
                        this._router.navigate([], {
                            relativeTo: this._route,
                            queryParams: { user: '' },
                            queryParamsHandling: 'preserve',
                        });
                    });
                } else if (params.has('locate')) {
                    this._locateFeature(
                        params.get('locate'),
                        params.get('name'),
                    );
                } else {
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', []);
                    });
                }
            }),
        );
    }

    public updateZoom(zoom: number) {
        this._state.setPositions(zoom, this._state.positions.center);
    }

    public updateCenter(center: Point) {
        this._state.setPositions(this._state.positions.zoom, center);
    }

    public clearLocate() {
        this.locate = '';
        this._state.setFeatures('_located', []);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                user: undefined,
                space: undefined,
                locate: undefined,
                name: undefined,
            },
            queryParamsHandling: 'merge',
        });
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
        this.timeout('update_location', () => {
            this.locate = id;
            this._state.setFeatures('_located', [feature]);
        });
    }

    private async locateSpace(id: string) {
        const space = await this._space_pipe.transform(id);
        if (!space)
            return notifyError(i18n('EXPLORE.LOCATE_SPACE_DETAILS_FAILED'));
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
        this.timeout('update_location', () => {
            this.locate = id;
            this._state.setFeatures('_located', [feature]);
        });
    }

    private async locateUser(user: User) {
        const binding: any = this._org.binding('location_services');
        const mod = this._org.module('location_services', 'LocationServices');
        if (!mod) throw i18n('EXPLORE.LOCATE_SERVICE_UNAVAILABLE');
        const priority = binding?.priority || [];
        const locations: MapLocation[] = (
            await mod.execute('locate_user', [
                user.email,
                user.username || user.id,
            ])
        ).map((i) => new MapLocation(i));
        locations.sort(
            (a, b) =>
                (priority.includes(a.type) ? priority.indexOf(a.type) : 999) -
                (priority.includes(b.type) ? priority.indexOf(b.type) : 999),
        );
        if (!locations?.length) throw i18n('EXPLORE.LOCATE_USER_NOT_FOUND');
        let loc = locations.find(
            ({ position }) =>
                typeof position !== 'string' || position in this.map_info,
        );
        if (!loc) loc = locations[0];
        if (typeof loc.position !== 'string') {
            notifyWarn(
                i18n(`EXPLORE.LOCATE_USER_FOUND_NO_PIN`, { type: loc.type }),
            );
        }
        this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
        const pos: any = loc.position;
        const { coordinates_from } = loc;
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
                loc.type === 'wireless' ? MapRadiusComponent : MapPinComponent,
            z_index: 99,
            data: {
                message: i18n('EXPLORE.LOCATE_USER', { name: user.name }),
                radius: loc.variance,
                last_seen: loc.last_seen,
            },
        };
        this.timeout('update_location', () => {
            this.locate = user.id || user.email;
            this._state.setFeatures('_located', [feature]);
        });
    }
}
