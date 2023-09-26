import { Injectable } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InjectMapApiService {
    private maps_key_exists = new BehaviorSubject<boolean>(null);

    private _setKeyExists(value: boolean) {
        this.maps_key_exists.next(value);
    }

    public getKeyExistsAsObservable(): Observable<boolean> {
        return this.maps_key_exists.asObservable();
    }

    constructor(private _settings: SettingsService) {}

    public injectMapsApiKeys() {
        const maps_key = this._settings.get('app.maps_indoor_api_key');
        if (maps_key) {
            const script = document.createElement('script');
            script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.21.4/mapsindoors-4.21.4.js.gz?apikey=${maps_key}`;
            document.head.appendChild(script);
        }

        const google_key = this._settings.get('app.google_maps_api_key');
        if (google_key) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google_key}`;
            document.head.appendChild(script);
        }

        if (maps_key && google_key) {
            this._setKeyExists(true);
        }
    }
}
