import { Component, ViewChild, ElementRef } from '@angular/core';

declare let mapsindoors: any;
@Component({
    selector: 'indoor-maps',
    templateUrl: './indoor-maps.component.html',
    styles: [``],
})
export class IndoorMapsComponent {
    mapViewOptions: any;
    mapViewInstance: any;
    mapsIndoorsInstance: any;
    googleMapsInstance: any;
    mapsIndoorsDirectionsServiceInstance: any;
    mapsIndoorsDirectionsRendererInstance: any;

    @ViewChild('searchInput', { static: true }) searchElement: ElementRef;
    @ViewChild('searchResultItems') searchResults: ElementRef;

    async ngOnInit() {
        await this.initMapView();
        this.initDirections();
    }

    initMapView(): Promise<void> {
        this.mapViewOptions = {
            element: document.getElementById('map'),
            center: { lat: 30.3603774, lng: -97.7426772 },
            zoom: 21,
            maxZoom: 26,
        };
        this.mapViewInstance = new mapsindoors.mapView.GoogleMapsView(
            this.mapViewOptions
        );

        this.mapsIndoorsInstance = new mapsindoors.MapsIndoors({
            mapView: this.mapViewInstance,
        });

        return (this.googleMapsInstance = this.mapViewInstance.getMap());
    }

    initDirections() {
        const externalDirectionsProvider =
            new mapsindoors.directions.GoogleMapsProvider();
        this.mapsIndoorsDirectionsServiceInstance =
            new mapsindoors.services.DirectionsService(
                externalDirectionsProvider
            );
        const directionsRendererOptions = {
            mapsIndoors: this.mapsIndoorsInstance,
        };
        this.mapsIndoorsDirectionsRendererInstance =
            new mapsindoors.directions.DirectionsRenderer(
                directionsRendererOptions
            );
    }
}
