import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    input,
    OnInit,
    output,
    viewChild,
} from '@angular/core';
import {
    AsyncHandler,
    BuildingLevel,
    firstTruthyValueFrom,
    MapMetadata,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

declare class SpacesDigitalMap {}

const DEFAULT_ZOOM = 18.5;

@Component({
    selector: 'cisco-map',
    template: `
        <div
            #map_container
            id="cisco-map-container"
            class="absolute inset-0 z-0"
        ></div>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styles: [``],
})
export class CiscoMapComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly zone = input<BuildingLevel>(undefined);
    public readonly metadata = input<MapMetadata>(undefined);
    public readonly options = input<any>(undefined);
    public readonly focus = input<string>(undefined);
    public readonly zoom = input(DEFAULT_ZOOM);
    public readonly reset = input<number>(undefined);
    public readonly zoomChange = output<number>();
    public readonly zoneChange = output<BuildingLevel>();

    private readonly _mapContainer =
        viewChild.required<ElementRef<HTMLDivElement>>('map_container');
    private _map: SpacesDigitalMap;

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this._injectScript();
        this.timeout('init', () => this._initialiseMap());
    }

    private _injectScript(): void {
        if (document.getElementById('cisco-spaces-maps-script')) return;
        const script = document.createElement('script');
        script.id = 'cisco-spaces-maps-script';
        script.src = this._settings.get('app.explore.cisco_maps.script');
        document.body.appendChild(script);
    }

    private async _initialiseMap() {
        try {
            SpacesDigitalMap;
        } catch {
            console.error('Cisco Spaces namespace is not defined');
            this.timeout('init', () => this._initialiseMap(), 1000);
            return;
        }
        if (!SpacesDigitalMap) {
            console.error('Cisco Spaces namespace is not defined');
            this.timeout('init', () => this._initialiseMap(), 1000);
            return;
        }
        const config = this._settings.get('app.explore.cisco_maps');
        const api_endpoint = config.api_endpoint;
        const b_resp = await fetch(`${api_endpoint}/buildings`, {
            method: 'POST',
            headers: { 'x-api-key': config.access_token },
        });
        const { result } = await b_resp.json();
        const { hashed_tenant_id, buildings } = result;
        const bld = buildings[0] || {};
        const resp = await fetch(`${api_endpoint}/sessionKey`, {
            method: 'GET',
            headers: { 'x-api-key': config.access_token },
            body: JSON.stringify({ building_id: bld.id }),
        });
        const { session_key } = await resp.json();
        this._map = new (SpacesDigitalMap as any)({
            mapContainer: 'cisco-map-container',
            sessionKey: session_key,
            tenantId: hashed_tenant_id,
            locationId: bld?.hashed_id,
            defaultFloor: bld?.floors[0]?.levelIndex,
            initialPos: bld?.coordinates,
            initialZoom: 20,
            initialPitch: 65,
            initialBearing: 118,
            poiLegendHolder: 'poi-switch',
        });
        console.log('Map initialized', this._map);
    }
}
