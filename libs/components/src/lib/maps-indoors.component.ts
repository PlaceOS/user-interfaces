import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { MapMetadata } from './interactive-map.component';
import {
    AsyncHandler,
    MapsPeopleService,
    calculateDistance,
    log,
    notifyError,
    notifyWarn,
    randomString,
} from '@placeos/common';
import { MapService } from 'libs/common/src/lib/mapspeople.service';
import { take } from 'rxjs/operators';

declare let mapsindoors: any;
declare let google: any;
declare let mapboxgl: any;

const DEFAULT_ZOOM = 18.5;

interface MapsIndoorServices {
    mapsindoors: any;
    view: any;
    map: any;
    directions: any;
    directions_renderer: any;
}

const RESOURCE_MAP: Record<string, any> = {};

@Component({
    selector: 'maps-indoors',
    template: `
        <div #map_container class="absolute inset-0 z-0"></div>
        <button
            *ngIf="focus && !show_directions && options?.controls"
            btn
            matRipple
            class="absolute bottom-2 left-2 bg-base-100 text-base-content shadow z-10 border-base-200 space-x-2"
            (click)="toggleDirections()"
        >
            <app-icon>place</app-icon>
            <div class="pr-2">
                {{ viewing_directions ? 'Hide' : 'Show' }} Directions
            </div>
            <mat-spinner diameter="24" *ngIf="loading_directions"></mat-spinner>
        </button>
    `,
    styles: [``],
})
export class MapsIndoorsComponent extends AsyncHandler implements OnInit {
    @Input() public zone: BuildingLevel;
    @Input() public metadata: MapMetadata;
    @Input() public options: any;
    @Input() public focus: string;
    @Input() public zoom = DEFAULT_ZOOM;
    @Input() public reset: number;
    @Output() public zoomChange = new EventEmitter<number>();
    @Output() public zoneChange = new EventEmitter<BuildingLevel>();

    public id: string;
    public show_directions = false;
    public viewing_directions = false;
    public loading_directions = false;
    public ignore_zoom = false;

    private _services: MapsIndoorServices;
    private _floor_list: any[] = [];

    @ViewChild('map_container', { static: true })
    private _container: ElementRef<HTMLDivElement>;

    constructor(
        private _maps_people: MapsPeopleService,
        private _org: OrganisationService
    ) {
        super();
        const data =
            sessionStorage.getItem('PLACEOS.mapsindoors.resources') || '{}';
        const value = JSON.parse(data);
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                RESOURCE_MAP[key] = value[key];
            }
        }
    }

    public ngOnInit() {
        this.id = randomString(8);
        this._initialised.next(false);
        this._initialiseServices();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (!this.is_initialised) {
            return this.timeout('on_changes', () => this.ngOnChanges(changes));
        }
        if (changes.zone && this.zone) {
            this._centerOnZone();
        }
        if (changes.focus && this.focus) {
            this._focusOnLocation();
        }
        if (changes.metadata) {
            this._updateMapStyling();
        }
        if (changes.zoom && this.zoom && !this.ignore_zoom) {
            this._services?.map?.setZoom(this.zoom);
        }
        if (changes.reset) {
            this._services?.map?.setZoom(DEFAULT_ZOOM);
            this._centerOnZone();
        }
        if (changes.options) {
            this._addFloorSelector();
        }
    }

    private _setResource(id: string, resource: any) {
        RESOURCE_MAP[id] = resource;
        this.timeout('set_resource', () => {
            sessionStorage.setItem(
                'PLACEOS.mapsindoors.resources',
                JSON.stringify(RESOURCE_MAP)
            );
        });
    }

    private _initialiseServices() {
        if (!this._maps_people.is_ready || !(window as any).mapsindoors) {
            this.timeout('init', () => this._initialiseServices(), 1000);
            return;
        }
        const [lat, long] = (
            this._org.building?.location || `-33.8567844,151.2152967`
        ).split(',');
        const view_options: Record<string, any> = {
            element: this._container.nativeElement,
            center: { lat: parseFloat(lat), lng: parseFloat(long) },
            zoom: DEFAULT_ZOOM,
            maxZoom: 24,
        };
        let view_instance = null;
        switch (this._maps_people.map_service) {
            case MapService.GoogleMaps:
                log('MapsIndoors', 'Using Google Maps API');
                view_instance = new mapsindoors.mapView.GoogleMapsView(
                    view_options
                );
                break;
            case MapService.Mapbox:
                view_options.accessToken = this._maps_people.map_token;
                log('MapsIndoors', 'Using Mapbox API');
                view_instance = new mapsindoors.mapView.MapboxView(
                    view_options
                );
                break;
        }
        if (!view_instance) {
            notifyWarn('Failed to initialise map view.');
            return;
        }
        const provider =
            this._maps_people.map_service === MapService.GoogleMaps
                ? new mapsindoors.directions.GoogleMapsProvider()
                : new mapsindoors.directions.MapboxProvider(
                      this._maps_people.map_token
                  );
        const maps_indoors = new mapsindoors.MapsIndoors({
            mapView: view_instance,
        });
        this._services = {
            mapsindoors: maps_indoors,
            view: view_instance,
            map: view_instance.getMap(),
            directions: new mapsindoors.services.DirectionsService(provider),
            directions_renderer: new mapsindoors.directions.DirectionsRenderer({
                mapsIndoors: maps_indoors,
            }),
        };
        console.log('Resource:', this._services.mapsindoors);
        this._initialised.next(true);
        if (this.zone) {
            this._services.map.setZoom(DEFAULT_ZOOM);
            this._centerOnZone();
        }
        this._addFloorSelector();
        // Add Events listenders
        this._services.mapsindoors.addListener('building_changed', (e) =>
            this._handleBuildingChange(e)
        );
        this._services.mapsindoors.addListener('floor_changed', (e) =>
            this._handleLevelChange(e)
        );
        this._services.mapsindoors.addListener('zoom_changed', (e) =>
            this._handleZoomChange(e)
        );
        this._services.mapsindoors.addListener('click', (e) =>
            this._handleUserClick(e)
        );
        this.timeout(
            'resize',
            () => window.dispatchEvent(new Event('resize')),
            100
        );
        (window as any).maps_indoors = this._services;
        this.timeout('focus', () => this._focusOnLocation());
        this.timeout('init_zoom', () => this._handleZoomChange(DEFAULT_ZOOM));
    }

    public async toggleDirections() {
        if (this.viewing_directions) {
            this._services.directions_renderer.setRoute(null);
            this._focusOnLocation();
            this.viewing_directions = false;
            return;
        }
        if (!this.focus) return;
        const items = await this._search(this.focus);
        if (!items?.length) {
            notifyError('Failed to find location.');
            return;
        }
        this.loading_directions = true;
        const item = items[0];
        const [d_lng, d_lat] = item.properties?.anchor?.coordinates || [0, 0];
        const options = { timeout: 10000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(
            async (position: GeolocationPosition) => {
                const distance = calculateDistance(
                    d_lat,
                    d_lng,
                    position.coords.latitude,
                    position.coords.longitude
                );
                const routeParameters = {
                    origin: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    destination: { lat: d_lat, lng: d_lng },
                    travelMode: distance < 2 ? 'WALKING' : 'DRIVING',
                };
                console.log('Route Parameters:', routeParameters, distance);
                const result = await this._services.directions
                    .getRoute(routeParameters)
                    .catch((e) => {
                        log(
                            'MapsIndoors',
                            'Error fetching route: ',
                            e.message || e,
                            'warn'
                        );
                        const origin_error =
                            e instanceof TypeError &&
                            e.message?.includes('origin');
                        this.loading_directions = false;
                        if (!origin_error) return;
                        notifyError(
                            'Error: Origin location is outside of map area.'
                        );
                    });
                if (!result) return;
                console.log('Route:', result);
                this._services.directions_renderer.setRoute(result);
                this.viewing_directions = true;
                this.loading_directions = false;
            },
            () => notifyError('Failed to get your current location.'),
            options
        );
    }

    private _handleZoomChange(level: number) {
        this.timeout(
            'zoom_change',
            () => {
                this.ignore_zoom = true;
                this.zoom = level;
                this.zoomChange.emit(level);
                this.timeout(
                    'reset_ignore_zoom',
                    () => (this.ignore_zoom = false),
                    50
                );
            },
            100
        );
    }

    private _handleBuildingChange(building: any) {
        const id = building.externalId || building.id;
        log('MapsIndoors', `Building switched to "${id}"`);
        const floors = building.floors || {};
        this._floor_list = Object.keys(floors).map((key) => ({
            index: key,
            ...floors[key],
        }));
        log('MapsIndoors', 'Floor List:', this._floor_list);
        if (!this._services) return;
        const bld = this._org.buildings.find(
            (_) => _.id === id || _.map_id === id
        );
        this.timeout('set_floor', () => {
            const has_set_floor = this._setFloorFromZone();
            if (!has_set_floor && building.defaultFloor) {
                this._handleLevelChange(building.defaultFloor);
            }
        });
        if (!bld) return;
        this._org.building = bld;
    }

    private async _handleLevelChange(index: any) {
        log('MapsIndoors', `Level switched to "${index}"`);
        const floor = this._floor_list.find((_) => _.index === index);
        const id = floor?.externalId || floor?.id;
        if (!this._services) return;
        const levels = await this._org.active_levels.pipe(take(1)).toPromise();
        if (!levels) return;
        const new_level = levels.find((_) => _.map_id === id || _.id === id);
        if (!new_level) return;
        this.zone = new_level;
        this.zoneChange.emit(new_level);
    }

    private _handleUserClick(event: any) {
        log('MapsIndoors', `Click occurred`, event);
        const id =
            event.properties?.externalId ||
            event.properties?.roomId ||
            event.id;
        const actions = this.metadata?.actions || [];
        log('MapsIndoors', `Registered Actions`, actions);
        const ignore_actions = ['mousedown', 'touchstart', 'enter', 'leave'];
        for (const action of actions) {
            if (
                (action.id === id || action.id === '*') &&
                !ignore_actions.includes(action.action as any)
            ) {
                action.callback(event);
                break;
            }
        }
    }

    private async _search(query: string): Promise<any[]> {
        if (!this._services) return;
        return mapsindoors?.services.LocationsService.getLocations({
            q: query,
        });
    }

    private async _updateMapStyling() {
        if (!this._services) return;
        const styles = this.metadata?.styles || {};
        for (const id in styles) {
            if (!styles[id].fill) continue;
            let resource = RESOURCE_MAP[id];
            if (!resource) {
                const id_simple = id.replace(/#/, '');
                const list = await this._search(id_simple);
                if (!list.length) continue;
                resource = list.find(
                    (_) =>
                        _.properties?.externalId === id_simple ||
                        _.properties?.roomId === id_simple ||
                        _.id === id_simple
                );
                if (resource) this._setResource(id, resource);
            }
            if (!resource) continue;
            const value = {
                extrusionHeight: 0,
                extrusionVisible: false,
                polygonVisible: true,
                polygonFillColor: styles[id].fill,
            };
            this._services.mapsindoors.setDisplayRule(resource.id, value);
        }
    }

    private async _focusOnLocation() {
        if (!this.focus) return;
        const items = await this._search(this.focus);
        if (!items?.length) {
            notifyError('Failed to find location.');
            return;
        }
        const item =
            items.find((_) => _.properties?.externalId === this.focus) ||
            items[0];
        const [lng, lat] = item.properties?.anchor?.coordinates || [0, 0];
        this._services.map.setZoom(DEFAULT_ZOOM);
        this._services.map.setCenter({ lat, lng });
        this._services.mapsindoors.setFloor(item.properties?.floor);
        this._services.mapsindoors.highlight([item.id]);
    }

    private _centerOnZone() {
        if (!this._services || !this.zone) return;
        this.timeout('set_center', () => {
            const bld = this._org.buildings.find(
                (bld) => bld.id === this.zone.parent_id
            );
            if (!bld) return;
            const [lat, long] = bld?.location.split(',');
            this._services.map.setCenter({
                lat: parseFloat(lat),
                lng: parseFloat(long),
            });
            this._setFloorFromZone();
        });
    }

    private _setFloorFromZone() {
        if (!this.zone.map_id || !this._services) return false;
        const map_id = this.zone.map_id;
        const floor = this._floor_list.find(
            (_) =>
                _.index === map_id || _.externalId === map_id || _.id === map_id
        );
        if (!floor) return false;
        this._services.mapsindoors.setFloor(floor.index);
        return true;
    }

    private _added_floor_selector = false;

    private _addFloorSelector() {
        if (!this.options?.controls || this._added_floor_selector) return;
        const element = document.createElement('div');
        new mapsindoors.FloorSelector(element, this._services.mapsindoors);
        if (this._maps_people.map_service === MapService.GoogleMaps) {
            this._services.map.controls[
                google.maps.ControlPosition.RIGHT_TOP
            ].push(element);
        } else {
            this._services.map.addControl({
                onAdd: () => element,
                onRemove: () => {},
            });
        }
        this._added_floor_selector = true;
    }
}
