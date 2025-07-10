import {
    Component,
    ElementRef,
    OnInit,
    inject,
    input,
    output,
    viewChild,
} from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { MapMetadata } from './interactive-map.component';

declare class SpacesRichMap {}

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
    private _map: SpacesRichMap;

    constructor() {
        super();
    }

    public ngOnInit(): void {
        this._injectScript();
        this.timeout('init', () => this._initialiseMap());
    }

    private _injectScript(): void {
        if (document.getElementById('cisco-spaces-rich-maps-script')) return;
        const script = document.createElement('script');
        script.id = 'cisco-spaces-rich-maps-script';
        script.src =
            'https://maps.ciscospaces.io/js/spaces-rich-maps-2.0-beta.min.js';
        document.body.appendChild(script);
    }

    private _initialiseMap(): void {
        if (!SpacesRichMap) {
            console.error('Cisco Spaces Rich Map is not defined');
            return;
        }
        const config = this._settings.get('app.explore.cisco_maps');
        this._map = new (SpacesRichMap as any)({
            mapContainer: 'cisco-map-container',
            token: config.token,
            tenantId: config.tenant_id,
            locationId: config.location_id,
            defaultFloor: 0,
            initialPos: [0, 0],
            initialZoom: 20,
            initialPitch: 65,
            initialBearing: 118,
            poiLegendHolder: 'poi-switch',
            hideNavigationControls: true,
        });
        console.log('Map initialized', this._map);
    }
}
