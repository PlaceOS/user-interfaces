import { Injectable } from '@angular/core';
import { SettingsService } from '@placeos/common';

@Injectable({
    providedIn: 'root',
})
export class InjectMapApiService {
    constructor(private _settings: SettingsService) {}

    public getKeyFromSettings() {}

    public injectMapsIndoorsKey() {
        // const script = document.getElementById(
        //     'mapsindoors-key'
        // ) as HTMLScriptElement;
        // if (script) {
        //
        // }
        const maps_key = this._settings.get('app.maps_indoor_api_key');
        const script = document.createElement('script');
        script.src = `https://app.mapsindoors.com/mapsindoors/js/sdk/4.21.4/mapsindoors-4.21.4.js.gz?apikey=${maps_key}`;
        document.head.appendChild(script);
    }

    public injectGoogleKey() {
        // const script = document.getElementById(
        //     'google-maps-key'
        // ) as HTMLScriptElement;
        // if (script) {
        //     script.src =
        //         'https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyBl2GmXukb_6GPHfIwCzIdv2YUYadyGThQ';
        // }
        const google_key = this._settings.get('app.google_maps_api_key');
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?libraries=geometry&key=${google_key}`;
        document.head.appendChild(script);
    }
}
