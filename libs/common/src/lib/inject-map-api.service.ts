import { Injectable } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InjectMapApiService {
    private is_initialised: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(null);

    public readonly is_initialised$: Observable<boolean> =
        this.is_initialised.asObservable();

    constructor(private _settings: SettingsService) {}

    public injectMapsApiKeys() {
        const maps_key = this._settings.get('app.maps_indoor_api_key');
        if (maps_key) {
            const script = document.createElement('script');
            script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.21.4/mapsindoors-4.21.4.js.gz?apikey=${maps_key}`;
            document.body.appendChild(script);
        }

        const google_key = this._settings.get('app.google_maps_api_key');
        if (google_key) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google_key}`;
            document.body.appendChild(script);
        }

        if (maps_key && google_key) {
            this.is_initialised.next(true);
        }
    }
}
