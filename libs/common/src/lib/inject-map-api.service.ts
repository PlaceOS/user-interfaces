import { Injectable } from '@angular/core';
import { SettingsService, notifyError } from '@placeos/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export enum MapService {
    GoogleMaps,
    Mapbox,
}

@Injectable({
    providedIn: 'root',
})
export class InjectMapApiService {
    private _map_service = new BehaviorSubject<MapService>(null);
    private _map_token = new BehaviorSubject<string>('');
    private is_initialised: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(null);

    public readonly is_initialised$: Observable<boolean> =
        this.is_initialised.asObservable();

    public get map_service(): MapService {
        return this._map_service.getValue();
    }

    public get map_token(): string {
        return this._map_token.getValue();
    }

    constructor(private _settings: SettingsService) {}

    public injectMapsApiKeys() {
        const maps_key = this._settings.get('app.maps_indoor_api_key');
        if (maps_key) {
            const script = document.createElement('script');
            script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.21.4/mapsindoors-4.21.4.js.gz?apikey=${maps_key}`;
            document.body.appendChild(script);
        }

        const google_key = this._settings.get('app.google_maps_api_key');
        const mapbox_key = this._settings.get('app.mapbox_api_key');
        if (google_key && mapbox_key) {
            notifyError(
                "You can't use both Google and Mapbox maps at the same time"
            );
            return;
        }
        if (google_key) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google_key}`;
            document.body.appendChild(script);
            this._map_service.next(MapService.GoogleMaps);
        } else if (mapbox_key) {
            const script = document.createElement('script');
            script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
            document.body.appendChild(script);
            const styles = document.createElement('link');
            styles.rel = 'stylesheet';
            styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
            document.head.appendChild(styles);
            this._map_service.next(MapService.Mapbox);
            this._map_token.next(mapbox_key);
        }

        if (maps_key && google_key) {
            this.is_initialised.next(true);
        }
    }
}
