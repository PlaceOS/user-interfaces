import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
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
export class CiscoMapComponent {
    @Input() public zone: BuildingLevel;
    @Input() public metadata: MapMetadata;
    @Input() public options: any;
    @Input() public focus: string;
    @Input() public zoom = DEFAULT_ZOOM;
    @Input() public reset: number;
    @Output() public zoomChange = new EventEmitter<number>();
    @Output() public zoneChange = new EventEmitter<BuildingLevel>();

    @ViewChild('map_container', { static: true })
    private _mapContainer!: ElementRef<HTMLDivElement>;
    private _map: SpacesRichMap;

    constructor(private _org: OrganisationService) {}

    public ngOnInit(): void {
        this._initialiseMap();
    }

    private _initialiseMap(): void {
        if (!SpacesRichMap) {
            console.error('Cisco Spaces Rich Map is not defined');
            return;
        }
        const accessToken = '<your-spaces-rich-map-access-token>';
        this._map = new (SpacesRichMap as any)({
            mapContainer: 'cisco-map-container',
            token: accessToken,
            tenantId: 'spaces-tenant-id',
            locationId: 'spaces-location-id',
            defaultFloor: 0,
            initialPos: [0, 0],
            initialZoom: 20,
            initialPitch: 65,
            initialBearing: 118,
            poiLegendHolder: 'poi-switch',
            hideNavigationControls: true,
        });
    }
}
