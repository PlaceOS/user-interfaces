import {
    Component,
    ViewChild,
    ElementRef,
    OnInit,
    Input,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler, HashMap, notifyError } from '@placeos/common';
import { ViewerStyles, ViewAction } from '@placeos/svg-viewer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExploreStateService } from '../../../explore/src/lib/explore-state.service';
import {
    BuildingLevel,
    Building,
    OrganisationService,
} from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { filter, map, first, take } from 'rxjs/operators';

declare let mapsindoors: any;
declare let google: any;

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

@Component({
    selector: 'indoor-maps',
    template: `
        <div
            id="maps-indoors"
            class="absolute inset-0 flex items-center justify-center"
        >
            <mat-spinner
                *ngIf="loading"
                class="absolute"
                [diameter]="48"
            ></mat-spinner>
            <div
                *ngIf="geolocation_error_message"
                class="flex flex-col items-center z-50"
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
        </div>
        <div
            class="absolute flex flex-col h-min w-min top-0 left-0 bg-white rounded-lg z-50"
        >
            <div class="flex basis-1/2 px-4">
                <div class="flex flex-row items-center max-h-20">
                    <mat-form-field appearance="outline" class="h-16 mt-4">
                        <input
                            matInput
                            #searchInput
                            name="location-search"
                            type="text"
                            placeholder="Search"
                        />
                    </mat-form-field>
                    <button
                        icon
                        name="indoor-map-search"
                        matRipple
                        class="flex text-black h-10 w-10 rounded-full bg-gray-200 ml-5"
                        aria-label="search button"
                        (click)="onSearch()"
                    >
                        <app-icon matPrefix class="text-2xl relative"
                            >search</app-icon
                        >
                    </button>
                </div>
            </div>

            <div class="flex basis-1/2 overflow-y-auto ">
                <div class="ml-6">
                    <ul>
                        <div *ngIf="search_result_items">
                            <span class="font-medium text-lg">Results</span>
                            <li *ngFor="let item of search_result_items">
                                <div class="flex items-center mt-3 mb-3 h-10">
                                    <span class="flex mr-3 text-base">
                                        {{ item.properties.name }}</span
                                    >
                                    <button
                                        icon
                                        name="get-directions"
                                        matRipple
                                        aria-label="get directions button"
                                        (click)="getRoute(item)"
                                        class="flex text-white h-7 w-7 rounded-md bg-secondary dark:bg-neutral-800 dark:text-white"
                                    >
                                        <app-icon class="text-sm"
                                            >near_me</app-icon
                                        >
                                    </button>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
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
    public map_view_options: any;
    public map_view_instance: any;
    public mapsIndoors_instance: any;
    public googleMaps_instance: any;
    public mapsIndoors_directions_service_instance: any;
    public mapsIndoors_directions_renderer_instance: any;

    public live_data_status: string | boolean = 'enabled';
    public search_result_items: any[];
    public selected_destination: any = null;

    public loading: boolean;
    public actions_hashmap: { [id: string]: ViewAction };

    public user_latitude: number | null = null;
    public user_longitude: number | null = null;
    public geolocation_error_message: string = '';
    public route_error_message: string = '';
    public coordinates: CustomCoordinates | null = null;

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;
    public readonly setBuilding = (b) => (this._org.building = b);

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
    public levels_list: any[] = [];
    public buildings_list: Building[] = [];

    /** Custom CSS styles to apply to the map */
    @Input() public styles: ViewerStyles;
    /** List of available user actions for the map */
    @Input() public actions: ViewAction[];
    /** Custom coordinates to fixate on the map */
    @Input() public custom_coordinates: CustomCoordinates;

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    constructor(
        private _state: ExploreStateService,
        private _org: OrganisationService
    ) {
        super();
    }

    async ngOnInit() {
        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        this.setBuilding(this._org.building);
        this.levels_list = await this.levels.pipe(take(1)).toPromise();
        this.buildings_list = await this._org.building_list
            .pipe(take(1))
            .toPromise();

        if (this.custom_coordinates) {
            this.coordinates = this.custom_coordinates;
        }
        await this._getUserLocation();

        this.loading = true;
        await this.initMapView();
        this.initDirections();
        this.handleLocationChange();
    }

    async ngOnChanges(change: SimpleChanges) {
        if (change.styles || change.actions) {
            await this.renderSpaceStatus();
            await this.mapActions();
            this.loading = false;
        }
    }

    ngAfterViewInit() {
        this.mapsIndoors_instance?.addListener(
            'click',
            (location: any, e: Event) => {
                const found_action = this.actions_hashmap[location.id];
                if (found_action) {
                    found_action.callback(e);
                }
            }
        );
    }

    initMapView(): Promise<void> {
        // Hardcoded coordinates for mock map in Austin
        // this.map_view_options = {
        //     element: document.getElementById('maps-indoors'),
        //     center: { lat: 30.3603774, lng: -97.7426772 },
        //     zoom: 21,
        //     maxZoom: 26,
        // };

        this.map_view_options = {
            element: document.getElementById('maps-indoors'),
            center: { lat: this.user_latitude, lng: this.user_longitude },
            zoom: 21,
            maxZoom: 26,
        };
        this.map_view_instance = new mapsindoors.mapView.GoogleMapsView(
            this.map_view_options
        );

        this.mapsIndoors_instance = new mapsindoors.MapsIndoors({
            mapView: this.map_view_instance,
        });
        return (this.googleMaps_instance = this.map_view_instance.getMap());
    }

    initDirections() {
        const externalDirectionsProvider =
            new mapsindoors.directions.GoogleMapsProvider();
        this.mapsIndoors_directions_service_instance =
            new mapsindoors.services.DirectionsService(
                externalDirectionsProvider
            );
        const directionsRendererOptions = {
            mapsIndoors: this.mapsIndoors_instance,
        };
        this.mapsIndoors_directions_renderer_instance =
            new mapsindoors.directions.DirectionsRenderer(
                directionsRendererOptions
            );
    }

    handleLocationChange() {
        const floorSelectorElement = document.createElement('div');
        new mapsindoors.FloorSelector(
            floorSelectorElement,
            this.mapsIndoors_instance
        );
        this.googleMaps_instance.controls[
            google.maps.ControlPosition.RIGHT_TOP
        ].push(floorSelectorElement);

        this.mapsIndoors_instance?.addListener('building_changed', (e) => {
            const found_building = this.buildings_list.find((building) => {
                building.name === e.buildingInfo.name;
                this.setBuilding(found_building);
            });
        });
        this.mapsIndoors_instance?.addListener('floor_changed', (e) => {
            const found_level_id = this.levels_list.find(
                (level) => level.id === e
            );
            this._state.setLevel(found_level_id);
        });
    }

    async onSearch(): Promise<any> {
        const searchParams = { q: this.searchElement.nativeElement.value };
        await mapsindoors?.services.LocationsService.getLocations(
            searchParams
        ).then((locations: any[]) => {
            this.search_result_items = locations;
        });
    }

    private _getUserLocation() {
        const options = { timeout: 10000, enableHighAccuracy: true };

        return new Promise<GeolocationPosition>(async (resolve, reject) => {
            if ('geolocation' in navigator) {
                if (this.coordinates) {
                    const customPosition = {
                        coords: {
                            latitude: this.coordinates.latitude,
                            longitude: this.coordinates.longitude,
                            accuracy: 10,
                        },
                        timestamp: new Date().getTime(),
                    };
                    this.user_latitude = this.coordinates.latitude;
                    this.user_longitude = this.coordinates.longitude;

                    resolve(customPosition as GeolocationPosition);
                }

                if (!this.coordinates) {
                    await navigator.geolocation.getCurrentPosition(
                        (position: GeolocationPosition) => {
                            this.user_latitude = position.coords.latitude;
                            this.user_longitude = position.coords.longitude;
                            resolve(position);
                        },
                        (error) => {
                            this.geolocation_error_message =
                                'Error: ' +
                                error.message?.toString() +
                                '. Please enable geolocation settings.';
                            reject(error);
                        },
                        options
                    );
                    navigator.geolocation.watchPosition(
                        (_) => this._updateGeolocation(_),
                        (_) => this._handleGeolocationError(_)
                    );
                }
            } else {
                this.geolocation_error_message =
                    'Error: geolocation is not supported.';
                reject('Geolocation not supported');
            }
        });
    }

    private _updateGeolocation(updated_location: GeolocationPosition) {
        if (updated_location) {
            if (
                updated_location.coords?.latitude !== this.user_latitude ||
                updated_location.coords?.longitude !== this.user_longitude
            ) {
                this.user_latitude = updated_location.coords?.latitude;
                this.user_longitude = updated_location.coords?.longitude;
                this.getRoute(this.selected_destination);
            }
        }
    }

    private _handleGeolocationError(error: any) {
        notifyError('Error updating your geolocation.');
    }

    getRoute(location: any) {
        this.selected_destination = location;
        if (this.user_latitude && this.user_longitude) {
            const originLocationCoordinate: any = {
                lat: this.user_latitude,
                lng: this.user_longitude,
            };

            //Hardcoded coordinates for mock map in Austin
            // const originLocationCoordinate = {
            //     lat: 30.3603774,
            //     lng: -97.7426772,
            // };

            const destinationCoordinate = {
                lat: location.properties.anchor.coordinates[1],
                lng: location.properties.anchor.coordinates[0],
                floor: location.properties.floor,
            };

            const routeParameters = {
                origin: originLocationCoordinate,
                destination: destinationCoordinate,
                travelMode: 'WALKING',
            };

            this.mapsIndoors_directions_service_instance
                .getRoute(routeParameters)
                .then((directionsResult: any) => {
                    this.mapsIndoors_directions_renderer_instance?.setRoute(
                        directionsResult
                    );
                })
                .catch((error: any) => {
                    console.error('Error fetching route: ' + error);
                    if (
                        error instanceof TypeError &&
                        error.message?.includes('origin')
                    ) {
                        notifyError(
                            'Error: Cannot create route as origin location is outside of map area.'
                        );
                    }
                });
        } else {
            notifyError('Error: unable to find a route.');
        }
    }

    async renderSpaceStatus(): Promise<void[]> {
        if (this.styles) {
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
    }

    async mapActions() {
        return new Promise<HashMap<ViewAction>>((resolve, reject) => {
            this.actions_hashmap = this.actions?.reduce(
                (accumulator, currentValue) => {
                    accumulator[currentValue.id] = currentValue;
                    return accumulator;
                },
                {}
            );
            resolve(this.actions_hashmap);
        });
    }

    private async _setPolygonFill(location_id: string, colour: string) {
        await this.mapsIndoors_instance?.setDisplayRule(location_id, {
            polygonVisible: true,
            polygonFillOpacity: 0.6,
            polygonZoomFrom: 16,
            polygonZoomTo: 22,
            visible: true,
            polygonFillColor: colour,
        });
    }
}
