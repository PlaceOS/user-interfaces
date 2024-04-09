import {
    Component,
    EventEmitter,
    InjectionToken,
    Input,
    Output,
} from '@angular/core';
import { AsyncHandler, MapsPeopleService, log } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';

export const MAP_FEATURE_DATA = new InjectionToken<any>(
    'Data for Map Features'
);

export interface MapMetadata {
    styles?: ViewerStyles;
    features?: ViewerFeature[];
    labels?: ViewerLabel[];
    actions?: ViewAction[];
}

@Component({
    selector: 'interactive-map',
    template: `
        <ng-container
            *ngIf="!(use_mapsindoors$ | async); else mapsindoors_template"
        >
            <map-renderer
                [src]="src"
                [(zoom)]="zoom"
                (zoomChange)="zoomChange.next($event)"
                [reset]="reset"
                [styles]="styles || metadata?.styles"
                [features]="features || metadata?.features"
                [actions]="actions || metadata?.actions"
                [labels]="labels || metadata?.labels"
            >
                <ng-content></ng-content>
            </map-renderer>
        </ng-container>
        <ng-template #mapsindoors_template>
            <maps-indoors
                [zone]="location"
                (zoneChange)="onLevelChange($event)"
                [(zoom)]="zoom"
                (zoomChange)="zoomChange.next($event)"
                [reset]="reset"
                [focus]="focus"
                [styles]="styles || metadata?.styles"
                [features]="features || metadata?.features"
                [actions]="actions || metadata?.actions"
                [labels]="labels || metadata?.labels"
            >
                <ng-content></ng-content>
            </maps-indoors>
        </ng-template>
        <div
            zoom
            class="absolute bottom-16 right-1 border border-base-200 divide-y divide-base-200 shadow flex flex-col bg-base-100 text-base-content rounded overflow-hidden"
        >
            <button
                icon
                matRipple
                matTooltip="Zoom In"
                class="rounded-none"
                (click)="zoom = zoom * 1.1"
            >
                <app-icon>add</app-icon>
            </button>
            <button
                icon
                matRipple
                matTooltip="Zoom Out"
                class="rounded-none"
                (click)="zoom = zoom * (10 / 11)"
            >
                <app-icon>remove</app-icon>
            </button>
            <button
                icon
                matRipple
                matTooltip="Reset Zoom and Position"
                class="rounded-none"
                (click)="reset = reset + 1"
            >
                <app-icon>refresh</app-icon>
            </button>
        </div>
    `,
    styles: [``],
})
export class InteractiveMapComponent extends AsyncHandler {
    @Input() public src: string;
    @Input() public zoom = 1;
    @Input() public center: any = { x: 0.5, y: 0.5 };
    @Input() public reset = 0;
    @Input() public metadata: MapMetadata;
    @Input() public styles: any;
    @Input() public features: any[];
    @Input() public labels: any[];
    @Input() public actions: any[];
    @Input() public options: any;
    @Input() public focus: string;
    @Output() public zoomChange = new EventEmitter<number>();
    @Output() public centerChange = new EventEmitter<any>();

    public readonly use_mapsindoors$ = this._mapspeople.available$;

    public get location() {
        return this._org.levels.find((_) => _.map_id === this.src);
    }

    constructor(
        private _mapspeople: MapsPeopleService,
        private _org: OrganisationService,
        private _explore: ExploreStateService
    ) {
        super();
    }

    public onLevelChange(zone: any) {
        log('Map', 'Level Changed to:', zone);
        this._explore.setLevel(zone);
    }
}
