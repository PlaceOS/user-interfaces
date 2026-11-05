import {
    Component,
    ElementRef,
    inject,
    input,
    OnInit,
    output,
    signal,
    viewChild,
} from '@angular/core';
import {
    AsyncHandler,
    BuildingLevel,
    MapMetadata,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from './translate.pipe';

declare class SpacesDigitalMap {
    constructor(options: Record<string, unknown>);
}

const DEFAULT_ZOOM = 18.5;
/** Checks for the Cisco Spaces script, 1 second apart, before the map shows an error */
const MAX_INIT_ATTEMPTS = 30;

@Component({
    selector: 'cisco-map',
    template: `
        <div
            #map_container
            id="cisco-map-container"
            class="absolute inset-0 z-0"
        ></div>
        @if (error()) {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [TranslatePipe],
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
    /** Whether the map could not start */
    public readonly error = signal(false);

    private readonly _mapContainer =
        viewChild.required<ElementRef<HTMLDivElement>>('map_container');
    private _map: SpacesDigitalMap;

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
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

    /**
     * Start the map. Waits up to 30 seconds for the Cisco Spaces script, and
     * shows an error if a step fails.
     */
    private async _initialiseMap(attempt = 1) {
        if (typeof SpacesDigitalMap !== 'function') {
            if (attempt >= MAX_INIT_ATTEMPTS) {
                console.error('Cisco Spaces namespace is not defined');
                this.error.set(true);
                return;
            }
            this.timeout('init', () => this._initialiseMap(attempt + 1), 1000);
            return;
        }
        try {
            const config = this._settings.get('app.explore.cisco_maps');
            const api_endpoint = config.api_endpoint;
            const headers = { 'x-api-key': config.access_token };
            const b_resp = await fetch(`${api_endpoint}/buildings`, {
                method: 'POST',
                headers,
            });
            if (!b_resp.ok) throw new Error('Failed to load buildings');
            const { result } = await b_resp.json();
            const bld = result?.buildings?.[0];
            if (!bld) throw new Error('No building found');
            // GET requests cannot have a body, so send the building ID in the URL
            const query = new URLSearchParams({ building_id: bld.id });
            const resp = await fetch(`${api_endpoint}/sessionKey?${query}`, {
                method: 'GET',
                headers,
            });
            if (!resp.ok) throw new Error('Failed to load session key');
            const { session_key } = await resp.json();
            this._map = new SpacesDigitalMap({
                mapContainer: 'cisco-map-container',
                sessionKey: session_key,
                tenantId: result.hashed_tenant_id,
                locationId: bld.hashed_id,
                defaultFloor: bld.floors?.[0]?.levelIndex,
                initialPos: bld.coordinates,
                initialZoom: 20,
                initialPitch: 65,
                initialBearing: 118,
                poiLegendHolder: 'poi-switch',
            });
            console.log('Map initialized', this._map);
        } catch (e) {
            console.error('[CISCO] Failed to initialise map.', e);
            this.error.set(true);
        }
    }
}
