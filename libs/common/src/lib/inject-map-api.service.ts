import { Injectable } from '@angular/core';
import { SettingsService, notifyError } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    private _ready = new BehaviorSubject(false);
    private _injected: Record<string, boolean> = {};

    public readonly use_mapspeople$ = this._org.active_building.pipe(
        tap((_) => this.injectMapsApiKeys()),
        map(
            (_) =>
                this._settings.get('app.maps_indoor_api_key') &&
                (this._settings.get('app.google_maps_api_key') ||
                    this._settings.get('app.mapbox_api_key'))
        )
    );

    public get map_service(): MapService {
        return this._map_service.getValue();
    }

    public get map_token(): string {
        return this._map_token.getValue();
    }

    public get is_ready(): boolean {
        return this._ready.getValue();
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public injectMapsApiKeys() {
        this._ready.next(false);
        const maps_key = this._settings.get('app.maps_indoor_api_key');
        if (!maps_key) return;
        if (maps_key && !this._injected.mapsindoors) {
            const script = document.createElement('script');
            script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.21.4/mapsindoors-4.21.4.js.gz?apikey=${maps_key}`;
            document.body.appendChild(script);
            this._injected.mapsindoors = true;
        }

        const google_key = this._settings.get('app.google_maps_api_key');
        const mapbox_key = this._settings.get('app.mapbox_api_key');
        if (google_key && mapbox_key) {
            notifyError(
                "You can't use both Google and Mapbox maps at the same time"
            );
            return;
        }
        if (google_key && !this._injected.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google_key}`;
            document.body.appendChild(script);
            this._map_service.next(MapService.GoogleMaps);
            this._injected.google = true;
        } else if (mapbox_key && !this._injected.mapbox) {
            const script = document.createElement('script');
            script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
            document.body.appendChild(script);
            const styles = document.createElement('link');
            styles.rel = 'stylesheet';
            styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
            document.head.appendChild(styles);
            this._map_service.next(MapService.Mapbox);
            this._map_token.next(mapbox_key);
            this._injected.mapbox = true;
        }
        if (google_key || mapbox_key) this._ready.next(true);
    }
}
