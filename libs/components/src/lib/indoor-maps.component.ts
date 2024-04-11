import {
    Component,
    ViewChild,
    ElementRef,
    OnInit,
    Input,
    SimpleChanges,
} from '@angular/core';
import {
    AsyncHandler,
    MapsPeopleService,
    log,
    notifyError,
} from '@placeos/common';
import { ViewerStyles, ViewAction } from '@placeos/svg-viewer';
import { ExploreStateService } from '../../../explore/src/lib/explore-state.service';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { filter, map, first, take } from 'rxjs/operators';
import { MapService } from 'libs/common/src/lib/mapspeople.service';

declare let mapsindoors: any;
declare let google: any;
declare let mapboxgl: any;

interface GeolocationCoordinates {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
}

interface GeolocationPosition {
    coords: GeolocationCoordinates;
    timestamp: number;
}

interface CustomCoordinates {
    latitude: number;
    longitude: number;
}

function calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
    const radius = 6371; // Earth's radius in kilometers

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
            Math.sin(dLon / 2) *
            Math.cos(lat1) *
            Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radius * c;
}

function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

@Component({
    selector: 'indoor-maps',
    template: `
        <div
            id="maps-indoors"
            class="absolute inset-0 flex items-center justify-center"
        ></div>
        <div
            class="absolute inset-0 flex items-center justify-center"
            *ngIf="loading"
        >
            <mat-spinner [diameter]="48"></mat-spinner>
        </div>
        <div
            class="absolute inset-0 flex flex-col space-y-2 items-center justify-center"
            *ngIf="geolocation_error_message"
        >
            <img
                src="assets/icons/not-found.svg"
                alt="graphic of magnifying glass"
                width="200px"
                class="items-center"
            />
            <p class="opacity-60 text-sm text-center mt-10">
                {{ geolocation_error_message | translate }}
            </p>
        </div>
        <div
            class="absolute flex flex-col h-min w-min top-2 left-2 bg-base-100 text-base-content rounded-lg z-50 p-2 shadow"
        >
            <mat-form-field appearance="outline" class="map no-subscript">
                <input
                    matInput
                    #searchInput
                    name="location-search"
                    type="text"
                    placeholder="Search"
                    (keyup.enter)="onSearch()"
                />
                <div matSuffix class="h-10 relative">
                    <button
                        icon
                        name="indoor-map-search"
                        matRipple
                        class="hover:bg-base-200"
                        aria-label="search button"
                        matTooltip="Search..."
                        (click)="onSearch()"
                    >
                        <app-icon matPrefix class="text-2xl relative">
                            search
                        </app-icon>
                    </button>
                </div>
            </mat-form-field>

            <ng-container *ngIf="search_result_items?.length">
                <div
                    class="flex items-center justify-between px-2 my-2 space-x-2"
                >
                    <h3 class="font-medium text-lg">
                        Results ({{ search_result_items.length || '0' }})
                    </h3>
                    <button
                        icon
                        matRipple
                        class="hover:bg-base-200"
                        (click)="search_result_items = []"
                        matTooltip="Clear Results"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <ul
                    class="list-none m-0 p-0 w-full space-y-2 max-h-[65vh] overflow-auto"
                >
                    <li
                        class="w-full even:bg-base-200 hover:bg-base-300 rounded border border-base-200"
                        *ngFor="let item of search_result_items | slice: 0:10"
                    >
                        <button
                            class="flex items-center w-full p-2 space-x-2 text-left"
                            (click)="getRoute(item); search_result_items = []"
                        >
                            <div class="flex flex-col flex-1">
                                <div>{{ item.properties.name }}</div>
                                <div class="opacity-30 text-xs">
                                    {{ item.properties.roomId }}, Level
                                    {{ item.properties.floorName }}
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            mat-spinner {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `,
    ],
})
export class IndoorMapsComponent extends AsyncHandler implements OnInit {
    /** Custom CSS styles to apply to the map */
    @Input() public styles: ViewerStyles;
    /** List of available user actions for the map */
    @Input() public actions: ViewAction[];
    /** Custom coordinates to fixate on the map */
    @Input() public custom_coordinates: CustomCoordinates;
    /** Mark location of a specific item */
    @Input() public locate: string;
    /** Default zoom level for the map */
    @Input() public default_zoom: number = 19;

    public view_instance: any;
    public maps_service: any;
    public map_instance: any;
    public directions_service: any;
    public directions_renderer: any;

    public live_data_status: string | boolean = 'enabled';
    public search_result_items: any[] = [];
    public selected_destination: any = null;

    public loading: boolean;
    public actions_hashmap: { [id: string]: ViewAction } = {};

    public user_latitude: number | null = null;
    public user_longitude: number | null = null;
    public geolocation_error_message: string = '';
    public route_error_message: string = '';
    public coordinates: CustomCoordinates | null = null;

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;
    public readonly setBuilding = (b) => {
        this._org.building = b;
        this._setLocationToBuilding();
    };

    public readonly levels = combineLatest([
        this.building,
        this._state.options,
    ]).pipe(
        filter(([_]) => !!_),
        map(([bld]) => [
            {
                id: this._org.building.id,
                name: 'All Levels',
            },
            ...this._org.levelsForBuilding(bld),
        ])
    );
    public floor_mapping: { [id: string]: string } = {};

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    constructor(
        private _api_service: MapsPeopleService,
        private _state: ExploreStateService,
        private _org: OrganisationService
    ) {
        super();
    }

    async ngOnInit() {
        this.loading = true;
        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        this.setBuilding(this._org.building);
        if (this.custom_coordinates) this.coordinates = this.custom_coordinates;
        const get_location = () => {
            this._getUserLocation();
            document.removeEventListener('click', get_location);
        };
        document.addEventListener('click', get_location);
        await this._initMapView();
    }

    async ngOnChanges(change: SimpleChanges) {
        if (change.styles || change.actions) {
            await this.renderSpaceStatus();
            await this.mapActions();
        }
        if (change.locate && this.locate && mapsindoors) {
            const searchParams = { q: this.searchElement.nativeElement.value };
            const locations =
                await mapsindoors?.services.LocationsService.getLocations(
                    searchParams
                );
            if (locations.length) this.getRoute(locations[0]);
        }
        this.mapFloorsToIndex();
        this.loading = false;
    }

    public ngAfterViewInit() {
        this.maps_service?.addListener('click', (location: any, e: Event) => {
            const found_action = this.actions_hashmap[location.id];
            if (found_action) found_action.callback(e);
        });
    }

    private _initMapView() {
        if (!this._api_service.is_ready || !(window as any).mapsindoors) {
            this.timeout('init', () => this._initMapView(), 1000);
            return;
        }
        const view_options: any = {
            element: document.getElementById('maps-indoors'),
            center: { lat: this.user_latitude, lng: this.user_longitude },
            zoom: this.default_zoom || 19,
            maxZoom: 24,
        };

        if (this._api_service.map_service === MapService.GoogleMaps) {
            log('MapsIndoors', 'Using Google Maps API');
            this.view_instance = new mapsindoors.mapView.GoogleMapsView(
                view_options
            );
        } else {
            view_options.accessToken = this._api_service.map_token;
            console.log('View Options:', view_options);
            log('MapsIndoors', 'Using Mapbox API');
            this.view_instance = new mapsindoors.mapView.MapboxView(
                view_options
            );
        }
        if (!this.view_instance) {
            log(
                'MapsIndoors',
                'Failed to initialise map view instance.',
                undefined,
                'warn'
            );
            return;
        }
        this.maps_service = new mapsindoors.MapsIndoors({
            mapView: this.view_instance,
        });
        this.map_instance = this.view_instance.getMap();
        this.initDirections();
        this.handleLocationChange();
        this.mapFloorsToIndex();
        this._setLocationToBuilding();
    }

    public initDirections() {
        const provider =
            this._api_service.map_service === MapService.GoogleMaps
                ? new mapsindoors.directions.GoogleMapsProvider()
                : new mapsindoors.directions.MapboxProvider(
                      this._api_service.map_token
                  );
        this.directions_service = new mapsindoors.services.DirectionsService(
            provider
        );
        const directionsRendererOptions = {
            mapsIndoors: this.maps_service,
        };
        this.directions_renderer =
            new mapsindoors.directions.DirectionsRenderer(
                directionsRendererOptions
            );
    }

    public async mapFloorsToIndex() {
        const building = await this.maps_service?.getBuilding();
        const input_string =
            building?.buildingInfo?.fields?.floorMapping?.value;
        const pairs = input_string?.split(',\n').map((pair) => pair.split(':'));
        console.log('Pairs:', pairs, building);
        this.floor_mapping =
            pairs?.reduce((lvl_map, [key, value]) => {
                lvl_map[key] = value;
                return lvl_map;
            }, {}) || {};
        const floor_index: string = await this.maps_service?.getFloor();
        if (floor_index && this.floor_mapping) {
            const level_id = this.floor_mapping[floor_index];
            this._state.setLevel(level_id);
        }
    }

    public handleLocationChange() {
        const floorSelectorElement = document.createElement('div');
        new mapsindoors.FloorSelector(floorSelectorElement, this.maps_service);
        if (this._api_service.map_service === MapService.GoogleMaps) {
            this.map_instance.controls[
                google.maps.ControlPosition.RIGHT_TOP
            ].push(floorSelectorElement);
        } else {
            const instance = this.view_instance.getMap();
            instance.addControl({
                onAdd: () => floorSelectorElement,
                onRemove: () => {},
            });
        }

        this.maps_service?.addListener('building_changed', (e: any) => {
            const found_building = this._org.buildings.find((building) => {
                building.name.toLowerCase() ===
                    e.buildingInfo?.name.toLowerCase();
                this.setBuilding(found_building);
            });
        });
        this.maps_service?.addListener('floor_changed', (e: string) => {
            if (!e || !this.floor_mapping) return;
            const level_id: string = this.floor_mapping[e];
            this._state.setLevel(level_id);
        });
    }

    public onSearch() {
        const searchParams = { q: this.searchElement.nativeElement.value };
        mapsindoors?.services.LocationsService.getLocations(searchParams).then(
            (locations: any[]) => {
                console.log(
                    'Locations:',
                    locations,
                    this.map_instance.getZoom()
                );
                this.search_result_items = locations;
            }
        );
    }

    private async _getUserLocation(): Promise<void> {
        if (!('geolocation' in navigator)) {
            log(
                'MapsIndoors',
                "User's geolocation not available.",
                undefined,
                'warn'
            );
            return this._setLocationToBuilding();
        }
        if (this.coordinates) {
            console.log('Using custom coordinates:', this.coordinates);
            this.user_latitude = this.coordinates.latitude;
            this.user_longitude = this.coordinates.longitude;
            return;
        } else {
            navigator.geolocation.watchPosition(
                (_) => this._updateGeolocation(_),
                (_) => this._handleGeolocationError(_)
            );
            const options = { timeout: 10000, enableHighAccuracy: true };
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    if (
                        !this._userWithinRadius([
                            position.coords.latitude,
                            position.coords.longitude,
                        ])
                    ) {
                        // Only use geolocation if user is within 1km of building
                        return this._setLocationToBuilding();
                    }
                    this._updateGeolocation(position);
                    this.map_instance.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => this._setLocationToBuilding(),
                options
            );
        }
    }

    private _userWithinRadius(
        [d_lat, d_long]: [number, number],
        radius: number = 1
    ) {
        const [lat_str, long_str] =
            this._org.building?.location.split(',') || [];
        if (lat_str && long_str) {
            const lat = parseFloat(lat_str);
            const long = parseFloat(long_str);
            const distance = calculateDistance(lat, long, d_lat, d_long);
            if (distance >= radius) return false;
        }
        return true;
    }

    private _setLocationToBuilding() {
        log('MapsIndoors', 'Settings location to building:', [
            this._org.building?.display_name || this._org.building?.name,
            this._org.building?.location,
        ]);
        const [lat, long] = this._org.building?.location.split(',');
        if (!this.map_instance) return;
        this.map_instance.setCenter({
            lat: parseFloat(lat),
            lng: parseFloat(long),
        });
    }

    private _updateGeolocation(updated_location: GeolocationPosition) {
        if (!updated_location?.coords) return;
        log(
            'MapsIndoors',
            'Settings location to user:',
            updated_location.coords,
            'warn'
        );
        const { latitude, longitude } = updated_location.coords;
        if (
            latitude !== this.user_latitude ||
            longitude !== this.user_longitude
        ) {
            this.user_latitude = latitude;
            this.user_longitude = longitude;
            this.getRoute(this.selected_destination);
        }
    }

    private _handleGeolocationError(error: any) {
        notifyError(`Error retrieving your geolocation. [${error.message}]`);
    }

    public async getRoute(location: any) {
        this.maps_service?.highlight([]);
        if (!this.directions_service || !location) return;
        console.log('Directions Service:', this.directions_service);
        log('MapsIndoors', 'Getting route to location:', [
            location,
            this.user_latitude,
            this.user_longitude,
        ]);
        this.selected_destination = location;
        const destination = {
            lat: location.properties.anchor.coordinates[1],
            lng: location.properties.anchor.coordinates[0],
            floor: location.properties.floor,
        };
        const level_id: string = (this.floor_mapping || {})[
            location.properties.floor
        ];
        if (level_id) this._state.setLevel(level_id);

        if (
            !this._userWithinRadius(
                [this.user_latitude, this.user_longitude],
                1000
            )
        ) {
            this.map_instance.setZoom(19);
            this.map_instance.setCenter(destination);
            this.maps_service.setFloor(destination.floor);
            this.maps_service.highlight([location.id]);
            return;
        }

        if (!this.user_latitude || !this.user_longitude) {
            return notifyError('Unable to find a route.');
        }

        const origin: any = {
            lat: this.user_latitude,
            lng: this.user_longitude,
        };

        const routeParameters = {
            origin: origin,
            destination: destination,
        };

        console.log('Route Parameters:', routeParameters);

        const result = await this.directions_service
            .getRoute(routeParameters)
            .catch((e) => {
                log(
                    'MapsIndoors',
                    'Error fetching route: ',
                    e.message || e,
                    'warn'
                );
                const origin_error =
                    e instanceof TypeError && e.message?.includes('origin');
                if (!origin_error) return;
                notifyError('Error: Origin location is outside of map area.');
            });
        if (!result) return;
        console.log('Route:', result);
        this.directions_renderer?.setRoute(result);
    }

    async renderSpaceStatus(): Promise<void[]> {
        if (!this.styles) return;
        const promises: Promise<void>[] = [];
        for (const key in this.styles) {
            const colour = this.styles[key]['fill'] as string;
            if (key) {
                const updated_key = key.substring(1);
                promises.push(this._setPolygonFill(updated_key, colour));
            }
        }
        return await Promise.all(promises);
    }

    public async mapActions() {
        return this.actions?.reduce((accumulator, currentValue) => {
            accumulator[currentValue.id] = currentValue;
            return accumulator;
        }, {});
    }

    private _setPolygonFill(location_id: string, colour: string) {
        return this.maps_service?.setDisplayRule(location_id, {
            polygonVisible: true,
            polygonFillOpacity: 0.6,
            polygonZoomFrom: 16,
            polygonZoomTo: 22,
            visible: true,
            polygonFillColor: colour,
        });
    }
}
