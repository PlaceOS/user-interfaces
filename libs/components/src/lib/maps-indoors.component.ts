import {
    Component,
    ElementRef,
    OnInit,
    SimpleChanges,
    inject,
    input,
    model,
    output,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AsyncHandler,
    MapsPeopleService,
    calculateDistance,
    i18n,
    log,
    nextValueFrom,
    notifyError,
    notifyWarn,
    randomString,
} from '@placeos/common';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { MapService } from 'libs/common/src/lib/mapspeople.service';
import { MapMetadata } from './interactive-map.component';

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
        @if (focus() && !show_directions && options()?.controls) {
            <button
                btn
                matRipple
                class="absolute bottom-2 left-2 z-10 space-x-2 border-base-200 bg-base-100 text-base-content shadow"
                (click)="toggleDirections()"
            >
                <icon>place</icon>
                <div class="pr-2">
                    {{ viewing_directions ? 'Hide' : 'Show' }} Directions
                </div>
                @if (loading_directions) {
                    <mat-spinner diameter="24"></mat-spinner>
                }
            </button>
        }
    `,
    styles: [``],
    imports: [MatRippleModule, MatProgressSpinnerModule],
})
export class MapsIndoorsComponent extends AsyncHandler implements OnInit {
    private _maps_people = inject(MapsPeopleService);
    private _org = inject(OrganisationService);

    public readonly zone = model<BuildingLevel>(undefined);
    public readonly metadata = input<MapMetadata>(undefined);
    public readonly options = input<any>(undefined);
    public readonly focus = input<string>(undefined);
    public readonly zoom = model(DEFAULT_ZOOM);
    public readonly reset = input<number>(undefined);
    public readonly zoomChange = output<number>();
    public readonly zoneChange = output<BuildingLevel>();

    public id: string;
    public show_directions = false;
    public viewing_directions = false;
    public loading_directions = false;
    public ignore_zoom = false;

    private _services: MapsIndoorServices;
    private _floor_list: any[] = [];
    private _last_building: string;

    private readonly _container =
        viewChild<ElementRef<HTMLDivElement>>('map_container');

    constructor() {
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
        if (changes.zone && this.zone()) {
            this._centerOnZone();
        }
        if (changes.focus && this.focus()) {
            this._focusOnLocation();
        }
        if (changes.metadata) {
            this._updateMapStyling();
        }
        const zoom = this.zoom();
        if (changes.zoom && zoom && !this.ignore_zoom) {
            this._services?.map?.setZoom(zoom);
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
                JSON.stringify(RESOURCE_MAP),
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
            element: this._container().nativeElement,
            center: { lat: parseFloat(lat), lng: parseFloat(long) },
            zoom: DEFAULT_ZOOM,
            maxZoom: 24,
        };
        let view_instance = null;
        switch (this._maps_people.map_service) {
            case MapService.GoogleMaps:
                log('MapsIndoors', 'Using Google Maps API');
                view_instance = new mapsindoors.mapView.GoogleMapsView(
                    view_options,
                );
                break;
            case MapService.Mapbox:
                view_options.accessToken = this._maps_people.map_token;
                log('MapsIndoors', 'Using Mapbox API');
                view_instance = new mapsindoors.mapView.MapboxView(
                    view_options,
                );
                break;
        }
        if (!view_instance) {
            notifyWarn(i18n('EXPLORE.MAPSINDOORS_INIT_FAILED'));
            return;
        }
        const provider =
            this._maps_people.map_service === MapService.GoogleMaps
                ? new mapsindoors.directions.GoogleMapsProvider()
                : new mapsindoors.directions.MapboxProvider(
                      this._maps_people.map_token,
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
        this._initialised.next(true);
        if (this.zone()) {
            this._services.map.setZoom(DEFAULT_ZOOM);
            this._centerOnZone();
        }
        this._addFloorSelector();
        // Add Events listenders
        this._services.mapsindoors.addListener('building_changed', (e) =>
            this._handleBuildingChange(e),
        );
        this._services.mapsindoors.addListener('floor_changed', (e) =>
            this._handleLevelChange(e),
        );
        this._services.mapsindoors.addListener('zoom_changed', (e) =>
            this._handleZoomChange(e),
        );
        this._services.mapsindoors.addListener('click', (e) =>
            this._handleUserClick(e),
        );
        this.timeout(
            'resize',
            () => window.dispatchEvent(new Event('resize')),
            100,
        );
        (window as any).maps_indoors = this._services;
        this.timeout('focus', () => this._focusOnLocation());
        this.timeout('init_zoom', () => this._handleZoomChange(DEFAULT_ZOOM));
    }

    public clearDirections() {
        this._services.directions_renderer.setRoute(null);
        this.viewing_directions = false;
    }

    private _last_position: GeolocationPosition;

    public async toggleDirections() {
        if (this.viewing_directions) {
            this.clearDirections();
            this._focusOnLocation();
            return;
        }
        const focus = this.focus();
        if (!focus) return;
        const items = await this._search(focus);
        if (!items?.length) {
            notifyError(i18n('EXPLORE.LOCATE_FAILED', { name: focus }));
            return;
        }
        this.loading_directions = true;
        const item = items[0];
        const bld = this._org.buildings.find(
            (bld) => bld.id === this.zone().parent_id,
        );
        const [d_lng, d_lat] = item.properties?.anchor?.coordinates ||
            bld?.location.split(',') || [37.8136, 144.9631];
        const options = { timeout: 10000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(
            async (position: GeolocationPosition) => {
                this._last_position = position;
                this.setDirectionsFromLocation(
                    {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    { lat: d_lat, lng: d_lng },
                );
            },
            () => {
                if (this._last_position) {
                    this.setDirectionsFromLocation(
                        {
                            lat: this._last_position.coords.latitude,
                            lng: this._last_position.coords.longitude,
                        },
                        { lat: d_lat, lng: d_lng },
                    );
                } else notifyError(i18n('EXPLORE.LOCATE_CURRENT_FAILED'));
            },
            options,
        );
    }

    public async setDirectionsFromLocation(
        from: { lat: number; lng: number },
        to: { lat: number; lng: number },
    ) {
        const distance = calculateDistance(to.lat, to.lng, from.lat, from.lng);
        const routeParameters = {
            origin: {
                lat: from.lat,
                lng: from.lng,
            },
            destination: { lat: to.lat, lng: to.lng },
            travelMode: distance < 2 ? 'WALKING' : 'DRIVING',
        };
        const result = await this._services.directions
            .getRoute(routeParameters)
            .catch((e) => {
                log(
                    'MapsIndoors',
                    'Error fetching route: ',
                    e.message || e,
                    'warn',
                );
                const origin_error =
                    e instanceof TypeError && e.message?.includes('origin');
                this.loading_directions = false;
                if (!origin_error) return;
                notifyError(
                    i18n('EXPLORE.LOCATE_ROUTE_FAILED', {
                        error: i18n('EXPLORE.LOCATE_ORIGIN_ERROR'),
                    }),
                );
            });
        if (!result) return;
        this._services.directions_renderer.setRoute(result);
        this.viewing_directions = true;
        this.loading_directions = false;
    }

    private _handleZoomChange(level: number) {
        this.timeout(
            'zoom_change',
            () => {
                this.ignore_zoom = true;
                this.zoom.set(level);
                this.zoomChange.emit(level);
                this.timeout(
                    'reset_ignore_zoom',
                    () => (this.ignore_zoom = false),
                    50,
                );
            },
            100,
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
            (_) => _.id === id || _.map_id === id,
        );
        this.timeout('set_floor', () => {
            const has_set_floor = this._setFloorFromZone();
            if (!has_set_floor && building.defaultFloor) {
                this._handleLevelChange(building.defaultFloor);
            }
        });
        if (!bld) return;
        this._org.building = bld;
        this._last_building = bld.id;
    }

    private async _handleLevelChange(index: any) {
        log('MapsIndoors', `Level switched to "${index}"`);
        const floor = this._floor_list.find((_) => _.index === index);
        const id = floor?.externalId || floor?.id;
        if (!this._services) return;
        const levels = await nextValueFrom(this._org.active_levels);
        if (!levels) return;
        const new_level = levels.find((_) => _.map_id === id || _.id === id);
        if (!new_level) return;
        this.zone.set(new_level);
        this.zoneChange.emit(new_level);
    }

    private _handleUserClick(event: any) {
        log('MapsIndoors', `Click occurred`, event);
        const id =
            event.properties?.externalId ||
            event.properties?.roomId ||
            event.id;
        const actions = this.metadata()?.actions || [];
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
        const styles = this.metadata()?.styles || {};
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
                        _.id === id_simple,
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
        const focus = this.focus();
        if (!focus) return;
        const items = await this._search(focus);
        this.clearDirections();
        if (!items?.length) {
            notifyError(i18n('EXPLORE.LOCATE_FAILED', { name: focus }));
            return;
        }
        const item =
            items.find((_) => _.properties?.externalId === this.focus()) ||
            items[0];
        const bld = this._org.buildings.find(
            (bld) => bld.id === this.zone().parent_id,
        );
        const [lng, lat] = item.properties?.anchor?.coordinates ||
            bld?.location.split(',') || [37.8136, 144.9631];
        this._services.map.setZoom(DEFAULT_ZOOM);
        this._services.map.setCenter({ lat, lng });
        this._services.mapsindoors.setFloor(item.properties?.floor);
        this._services.mapsindoors.highlight([item.id]);
    }

    private _centerOnZone() {
        const zone = this.zone();
        if (
            !this._services ||
            !zone ||
            zone.parent_id === this._last_building ||
            zone.id === this._last_building
        )
            return;
        this.timeout('set_center', () => {
            const bld = this._org.buildings.find(
                (bld) => bld.id === this.zone().parent_id,
            );
            if (!bld) return;
            const [lat, long] = bld?.location.split(',') || ['0', '0'];
            if (!this.focus()) {
                this._services.map.setCenter({
                    lat: parseFloat(lat),
                    lng: parseFloat(long),
                });
            }
            this._setFloorFromZone();
            this._last_building = this.zone().id;
        });
    }

    private _setFloorFromZone() {
        const zone = this.zone();
        if (!zone.map_id || !this._services) return false;
        const map_id = zone.map_id;
        const floor = this._floor_list.find(
            (_) =>
                _.index === map_id ||
                _.externalId === map_id ||
                _.id === map_id,
        );
        if (!floor) return false;
        this._services.mapsindoors.setFloor(floor.index);
        return true;
    }

    private _added_floor_selector = false;

    private _addFloorSelector() {
        if (!this.options()?.controls || this._added_floor_selector) return;
        const element = document.createElement('div');
        new mapsindoors.FloorSelector(element, this._services.mapsindoors);
        if (this._maps_people.map_service === MapService.GoogleMaps) {
            this._services.map.controls[
                google.maps.ControlPosition.RIGHT_TOP
            ].push(element);
        } else {
            this._services.map.addControl({
                onAdd: () => element,
                onRemove: () => null,
            });
        }
        this._added_floor_selector = true;
    }
}
