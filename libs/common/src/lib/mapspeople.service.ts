import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { OrganisationService } from '@placeos/common';
import { AsyncHandler } from './async-handler.class';
import { log } from './general';
import { SettingsService } from './settings.service';

export enum MapService {
    GoogleMaps,
    Mapbox,
}

export interface MapsPeopleKeys {
    mapsindoors?: string;
    google?: string;
    mapbox?: string;
}

@Injectable({
    providedIn: 'root',
})
export class MapsPeopleService extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private _map_service = signal<MapService>(null);
    private _map_token = signal<string>('');
    private _ready = signal(false);
    private _injected: Record<string, boolean> = {};
    private _custom_zone = signal<string>('');

    public readonly available = computed(() => {
        const bld = this._org.building_signal();
        const zone = this._custom_zone();
        if (!this._org.initialised_signal() || !bld?.id) return false;
        return (
            !!this.map_keys.mapsindoors &&
            (this.use_service.includes(zone || bld.id) ||
                this.use_service.includes('*'))
        );
    });

    public get map_keys(): MapsPeopleKeys {
        return this._settings.get('app.maps_people.keys') || {};
    }

    public get use_service(): string[] {
        return this._settings.get('app.maps_people.use_zones') || [];
    }

    public get map_service(): MapService {
        return this._map_service();
    }

    public get map_token(): string {
        return this._map_token();
    }

    public get is_ready(): boolean {
        return this._ready();
    }

    constructor() {
        super();
        effect(() => {
            if (!this.available()) return;
            this._injectMapsApiKeys();
        });
    }

    public setCustomZone(zone_id: string) {
        this._custom_zone.set(zone_id);
    }

    private _injectMapsApiKeys() {
        log('MapsPeople', 'Initializing Maps API Keys');
        this._ready.set(false);
        const { mapsindoors, google, mapbox } = this.map_keys;
        if (!mapsindoors) return;
        if (mapsindoors && !this._injected.mapsindoors) {
            const script = document.createElement('script');
            script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.35.0/mapsindoors-4.35.0.js.gz?apikey=${mapsindoors}`;
            document.body.appendChild(script);
            this._injected.mapsindoors = true;
        }
        if (google && mapbox) {
            log(
                'MapsPeople',
                'Both Google and Mapbox keys provided',
                undefined,
                'error',
            );
            return;
        }
        if (google && !this._injected.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google}`;
            document.body.appendChild(script);
            this._map_service.set(MapService.GoogleMaps);
            this._injected.google = true;
        } else if (mapbox && !this._injected.mapbox) {
            const script = document.createElement('script');
            script.src = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js`;
            document.body.appendChild(script);
            const styles = document.createElement('link');
            styles.rel = 'stylesheet';
            styles.href = `https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css`;
            document.head.appendChild(styles);
            this._map_service.set(MapService.Mapbox);
            this._map_token.set(mapbox);
            this._injected.mapbox = true;
        }

        if (google || mapbox) {
            log(
                'MapsPeople',
                `Initialized Maps API Keys for ${
                    google ? 'Google Maps' : 'Mapbox'
                }`,
            );
            this.timeout('ready', () => this._ready.set(true), 300);
        }
    }
}
