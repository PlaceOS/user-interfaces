import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Point } from '@placeos/common';

import { MatRippleModule } from '@angular/material/core';

import {
    AsyncHandler,
    i18n,
    MapsPeopleService,
    notifyError,
    notifyWarn,
    settingSignal,
    SettingsService,
    unique,
    User,
} from '@placeos/common';

import { OrganisationService } from '@placeos/common';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { MapRadiusComponent } from 'libs/components/src/lib/map-radius.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { SpacesService } from 'libs/events/src/lib/spaces.service';
import { MapLocation } from 'libs/users/src/lib/location.class';
import { showStaff } from 'libs/users/src/lib/staff.fn';

import { FormsModule } from '@angular/forms';
import { SettingsToggleComponent } from '@placeos/components';
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
            [src]="url()"
            [styles]="styles()"
            [features]="features()"
            [actions]="actions()"
            [labels]="labels()"
            [focus]="locate()"
            [options]="{ controls: true }"
            (mapInfo)="map_info.set($event ?? $any({}))"
        />
        @if (!use_mapsindoors()) {
            <div
                controls
                class="flex flex-col border-base-300 bg-base-100 absolute top-2 left-2 max-w-[calc(100vw-1rem)] gap-2 overflow-hidden rounded-lg border p-2 shadow-xl"
            >
                <explore-map-controls></explore-map-controls>
                @if (toggle_count() >= 2) {
                    <button
                        toggle-controls
                        matRipple
                        type="button"
                        class="bg-base-200 rounded flex w-full items-center justify-between space-x-4 font-medium p-2"
                        [attr.aria-expanded]="!toggles_collapsed()"
                        aria-controls="explore-map-toggle-options"
                        (click)="toggles_collapsed.set(!toggles_collapsed())"
                    >
                        <div class="px-2">Map Overlays</div>
                        <div class="text-sm underline">
                            {{ toggles_collapsed() ? 'Show' : 'Hide' }}
                        </div>
                    </button>
                }
                <div
                    id="explore-map-toggle-options"
                    class="space-y-2"
                    [class.hidden]="toggles_collapsed() && toggle_count() >= 2"
                >
                    @if (!hide_zones()) {
                        <settings-toggle
                            [label]="'EXPLORE.AREAS' | translate"
                            [ngModel]="!options()?.disable?.includes('zones')"
                            (ngModelChange)="toggleFeature('zones', $event)"
                        />
                    }
                    @if (!hide_devices()) {
                        <settings-toggle
                            label="Show Devices"
                            [ngModel]="!options()?.disable?.includes('devices')"
                            (ngModelChange)="toggleFeature('devices', $event)"
                        />
                    }
                    @if (!hide_sensors()) {
                        <settings-toggle
                            label="Show Sensors"
                            [ngModel]="!options()?.disable?.includes('sensors')"
                            (ngModelChange)="toggleFeature('sensors', $event)"
                        />
                    }
                </div>
            </div>
        }
        @if (show_legend() && legend().length) {
            <div
                legend
                class="border-base-300 bg-base-100 absolute bottom-2 left-2 gap-2 rounded-lg border"
            >
                @if (legend().length > 3) {
                    <button
                        type="button"
                        class="flex w-full min-w-64 items-center justify-between space-x-4 p-3 text-left font-medium"
                        [attr.aria-expanded]="!legend_collapsed()"
                        aria-controls="explore-map-legend-items"
                        (click)="legend_collapsed.set(!legend_collapsed())"
                    >
                        <div>{{ 'EXPLORE.LEGEND' | translate }}</div>
                        <div class="text-sm underline">
                            {{ legend_collapsed() ? 'Show' : 'Hide' }}
                        </div>
                    </button>
                } @else {
                    <h3 class="min-w-64 p-3 font-medium">
                        {{ 'EXPLORE.LEGEND' | translate }}
                    </h3>
                }
                <div
                    id="explore-map-legend-items"
                    class="space-y-1 px-4 pb-3"
                    [class.hidden]="legend_collapsed() && legend().length > 3"
                >
                    @for (pair of legend(); track pair) {
                        <div class="flex items-center space-x-2">
                            <div
                                class="border-base-200 h-3 w-3 rounded-full border"
                                [style.background-color]="pair[1]"
                            ></div>
                            <div class="text-sm">{{ pair[0] }}</div>
                        </div>
                    }
                </div>
            </div>
        }
        @if (locate()) {
            <button
                class="border-base-300 bg-base-100 absolute bottom-2 right-2 h-12 min-w-32 rounded-lg border px-4 shadow-sm"
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
        TranslatePipe,
        InteractiveMapComponent,
        MatRippleModule,
        ExploreMapControlComponent,
        FormsModule,
        SettingsToggleComponent,
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

    /** Signal for the active map */
    public readonly url = this._state.map_url;
    /** Signal for the active map */
    public readonly styles = this._state.map_styles;
    /** Signal for the active map */
    public readonly positions = this._state.map_positions;
    /** Signal for the active map */
    public readonly features = this._state.map_features;
    /** Signal for the active map */
    public readonly actions = this._state.map_actions;
    /** Signal for the labels map */
    public readonly labels = this._state.map_labels;
    /** Signal for the active map */
    public readonly options = this._state.options;
    /** Signal for user messages */
    public readonly message = this._state.message;

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly locate = signal('');
    public readonly map_info = signal<Record<string, any>>({});
    public readonly legend_collapsed = signal(true);
    public readonly toggles_collapsed = signal(true);

    public toggleFeature(
        feature: 'zones' | 'devices' | 'sensors',
        enabled: boolean,
    ) {
        const options = this.options();
        const disable = !enabled
            ? unique([...(options?.disable || []), feature])
            : options?.disable?.filter((_) => _ !== feature) || [];
        this.setOptions({ disable });
    }

    public readonly show_legend = settingSignal('explore.show_legend', false);

    public readonly hide_zones = settingSignal('explore.hide_zones', false);
    public readonly hide_devices = settingSignal('explore.hide_devices', true);
    public readonly hide_sensors = settingSignal('explore.hide_sensors', true);
    public readonly toggle_count = computed(
        () =>
            +!this.hide_zones() +
            +!this.hide_devices() +
            +!this.hide_sensors(),
    );

    public readonly legend = settingSignal<[string, string][]>(
        'explore.legend',
        EMPTY,
    );

    public readonly use_mapsindoors = computed(() =>
        this._maps.available instanceof Function
            ? this._maps.available()
            : false,
    );

    constructor() {
        super();
    }

    public async ngOnInit() {
        this._state.reset();
        while (
            this._spaces.initialised instanceof Function &&
            !this._spaces.initialised()
        ) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        this.toggleFeature('zones', false);
        const stop_polling: (() => void) | { unsubscribe?: () => void } =
            this._parking.startPolling?.() || (() => undefined);
        const cleanup_polling =
            typeof stop_polling === 'function'
                ? stop_polling
                : () =>
                      (
                          stop_polling as { unsubscribe?: () => void }
                      ).unsubscribe?.();
        this.subscription('parking_poll', {
            unsubscribe: cleanup_polling,
        });
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
                        user = await showStaff(params.get('user'));
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
        this.locate.set('');
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
            this.locate.set(id);
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
            this.locate.set(id);
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
                typeof position !== 'string' || position in this.map_info(),
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
            this.locate.set(user.id || user.email);
            this._state.setFeatures('_located', [feature]);
        });
    }
}
