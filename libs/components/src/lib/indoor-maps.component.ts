import {
    Component,
    ViewChild,
    ElementRef,
    OnInit,
    Input,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler, HashMap } from '@placeos/common';
import { ViewerStyles, ViewAction } from '@placeos/svg-viewer';

declare let mapsindoors: any;

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

@Component({
    selector: 'indoor-maps',
    template: `
        <div id="map" class="absolute inset-0 flex items-center justify-center">
            <mat-spinner
                *ngIf="loading"
                class="absolute"
                [diameter]="48"
            ></mat-spinner>
        </div>
        <div
            class="absolute flex flex-col h-min w-min mt-14 left-0 bg-white rounded-lg"
        >
            <div class="flex-auto basis-1/2 px-4">
                <div id="search" class="flex flex-row items-baseline">
                    <mat-form-field appearance="outline">
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
                        class="flex text-black h-10 w-10 rounded-full bg-gray-200 ml-5 mt-12"
                        aria-label="search button"
                        (click)="onSearch()"
                    >
                        <app-icon matPrefix class="text-2xl relative"
                            >search</app-icon
                        >
                    </button>
                </div>
            </div>

            <div class="flex-auto basis-1/2 overflow-y-auto ">
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

    public loading: boolean;
    public actions_hashmap: { [id: string]: ViewAction };

    public user_latitude: number | null = null;
    public user_longitude: number | null = null;

    /** Custom CSS styles to apply to the map */
    @Input() public styles: ViewerStyles;
    /** List of available user actions for the map */
    @Input() public actions: ViewAction[];

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    async ngOnInit() {
        await this._getUserLocation();
        this.loading = true;
        await this.initMapView();
        this.initDirections();
        this.selectFloors();
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
        //Hardcoded coordinates for mock map in Austin
        // this.map_view_options = {
        //     element: document.getElementById('map'),
        //     center: { lat: 30.3603774, lng: -97.7426772 },
        //     zoom: 21,
        //     maxZoom: 26,
        // };

        this.map_view_options = {
            element: document.getElementById('map'),
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

    selectFloors() {
        const floorSelectorElement = document.createElement('div');
        new mapsindoors.FloorSelector(
            floorSelectorElement,
            this.mapsIndoors_instance
        );
        this.googleMaps_instance.controls[
            google.maps.ControlPosition.RIGHT_TOP
        ].push(floorSelectorElement);
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
        return new Promise<GeolocationPosition>(async (resolve, reject) => {
            if ('geolocation' in navigator) {
                await navigator.geolocation.getCurrentPosition(
                    (position: GeolocationPosition) => {
                        this.user_latitude = position.coords.latitude;
                        this.user_longitude = position.coords.longitude;
                        console.log(
                            this.user_latitude,
                            this.user_longitude,
                            'user geolocation'
                        );
                        resolve(position);
                    },
                    (error) => {
                        console.log('Error getting geolocation:', error);
                        reject(error);
                    },
                    { timeout: 10000 }
                );
            } else {
                console.log('no geolocation');
                reject('Geolocation not supported');
            }
        });
    }

    getRoute(location: any) {
        if (this.user_latitude && this.user_longitude) {
            const originLocationCoordinate = {
                lat: this.user_latitude,
                lng: this.user_longitude,
            };

            //Hardcoded coordinates for mock map in Austin
            // const originLocationCoordinate = {
            //     lat: 30.3606484,
            //     lng: this.user_longitude,
            // };

            const destinationCoordinate = {
                lat: location.properties.anchor.coordinates[1],
                lng: location.properties.anchor.coordinates[0],
                floor: location.properties.floor,
            };

            const routeParameters = {
                origin: originLocationCoordinate,
                destination: destinationCoordinate,
                travelMode: 'walking',
            };

            this.mapsIndoors_directions_service_instance
                .getRoute(routeParameters)
                .then((directionsResult: any) => {
                    this.mapsIndoors_directions_renderer_instance?.setRoute(
                        directionsResult
                    );
                });
        } else {
            //alert user cannot get their location
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
