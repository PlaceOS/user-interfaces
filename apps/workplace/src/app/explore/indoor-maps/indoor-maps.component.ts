import { Component, ViewChild, ElementRef } from '@angular/core';
import { RoomStatusService } from './room-status.service';

declare let mapsindoors: any;

@Component({
    selector: 'indoor-maps',
    templateUrl: './indoor-maps.component.html',
    styles: [``],
})
export class IndoorMapsComponent {
    map_view_options: any;
    map_view_instance: any;
    mapsIndoors_instance: any;
    googleMaps_instance: any;
    mapsIndoors_directions_service_instance: any;
    mapsIndoors_directions_renderer_instance: any;
    available_external_IDs: string[];

    live_data_status: string | boolean = 'enabled';
    search_result_items: any[];

    selected_transport_mode: string = 'walking';
    transport_modes = [
        { label: 'Walking', value: 'walking' },
        { label: 'Bicycling', value: 'bicycling' },
        { label: 'Driving', value: 'driving' },
        { label: 'Transit', value: 'transit' },
    ];

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    constructor(private _roomStatus: RoomStatusService) {}

    async ngOnInit() {
        await this.initMapView();
        this.initDirections();
        this.selectFloors();
        await this.enableLiveData();
        await this._roomStatus.getAvailableSpaceIDs();
        this.available_external_IDs = await this._roomStatus.getLocationIDs();
        this.renderRoomStatus();
    }

    initMapView(): Promise<void> {
        this.map_view_options = {
            element: document.getElementById('map'),
            center: { lat: 30.3603774, lng: -97.7426772 },
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
        await mapsindoors.services.LocationsService.getLocations(
            searchParams
        ).then((locations: any[]) => {
            this.search_result_items = locations;
        });
    }

    getRoute(location: any) {
        const originLocationCoordinate = {
            lat: 30.3606484,
            lng: -97.7419834,
        }; //Hardcoded coordinate and floor index. TODO: get user location

        const destinationCoordinate = {
            lat: location.properties.anchor.coordinates[1],
            lng: location.properties.anchor.coordinates[0],
            floor: location.properties.floor,
        };

        const routeParameters = {
            origin: originLocationCoordinate,
            destination: destinationCoordinate,
            travelMode: this.selected_transport_mode || 'walking',
        };

        this.mapsIndoors_directions_service_instance
            .getRoute(routeParameters)
            .then((directionsResult: any) => {
                this.mapsIndoors_directions_renderer_instance.setRoute(
                    directionsResult
                );
            });
    }

    changeLiveDataStatus(value: any) {
        (this.live_data_status = 'enabled')
            ? (this.live_data_status = 'disabled')
            : (this.live_data_status = 'enabled');
    }

    async enableLiveData() {
        if (this.live_data_status !== 'enabled') return;

        const liveDataManagerInstance = await new mapsindoors.LiveDataManager(
            this.mapsIndoors_instance
        );

        try {
            await liveDataManagerInstance.enableLiveData(
                mapsindoors.LiveDataManager.LiveDataDomainTypes
                    .POSITION as string
            );
            // liveDataManagerInstance.enableLiveData(
            //   mapsindoors.LiveDataManager.LiveDataDomainTypes.AVAILABILITY
            // );
            // liveDataManagerInstance.enableLiveData(
            //   mapsindoors.LiveDataManager.LiveDataDomainTypes.OCCUPANCY
            // );
        } catch (err) {
            console.log(err, 'error');
        }
    }

    async disableLiveData() {
        if (this.live_data_status) return;

        const liveDataManagerInstance = await new mapsindoors.LiveDataManager(
            this.mapsIndoors_instance
        );

        try {
            await liveDataManagerInstance.disableLiveData(
                mapsindoors.LiveDataManager.LiveDataDomainTypes
                    .POSITION as string
            );
        } catch (err) {
            console.log(err, 'error');
        }
    }

    renderRoomStatus(): void {
        this.available_external_IDs.map((id: string) => {
            this._setPolygonFill(id, '#00C851');
        });
    }

    private async _setPolygonFill(location_id: string, color: string) {
        await this.mapsIndoors_instance.setDisplayRule(location_id, {
            polygonVisible: true,
            polygonFillOpacity: 0.6,
            polygonZoomFrom: 16,
            polygonZoomTo: 22,
            visible: true,
            polygonFillColor: color,
        });
    }
}
