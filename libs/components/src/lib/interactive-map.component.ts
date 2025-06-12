import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    InjectionToken,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    AsyncHandler,
    MapsPeopleService,
    SettingsService,
    log,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';
import { CiscoMapComponent } from './cisco-map.component';
import { IconComponent } from './icon.component';
import { MapRendererComponent } from './map-renderer.component';
import { MapsIndoorsComponent } from './maps-indoors.component';
import { TranslatePipe } from './translate.pipe';

export const MAP_FEATURE_DATA = new InjectionToken<any>(
    'Data for Map Features',
);

export interface MapOptions {
    disable_zoom?: boolean;
    disable_pan?: boolean;
    controls?: boolean;
}

export interface MapMetadata {
    styles?: ViewerStyles;
    features?: ViewerFeature[];
    labels?: ViewerLabel[];
    actions?: ViewAction[];
}

@Component({
    selector: 'interactive-map',
    template: `
        @if (use_mapsindoors$ | async) {
            <maps-indoors
                [zone]="location"
                (zoneChange)="onLevelChange($event)"
                [(zoom)]="zoom"
                (zoomChange)="zoomChange.next($event)"
                [options]="options"
                [reset]="reset"
                [focus]="focus"
                [metadata]="metadata"
            >
                <ng-content></ng-content>
            </maps-indoors>
        } @else if (use_cisco_maps) {
            <cisco-map>
                <ng-content></ng-content>
            </cisco-map>
        } @else {
            <map-renderer
                [src]="src"
                [(zoom)]="zoom"
                (zoomChange)="zoomChange.next($event)"
                [reset]="reset"
                [styles]="styles || metadata?.styles"
                [features]="features || metadata?.features"
                [actions]="actions || metadata?.actions"
                [labels]="labels || metadata?.labels"
                (mapInfo)="mapInfo.next($event)"
            >
                <ng-content></ng-content>
            </map-renderer>
        }
        <div
            zoom
            *ngIf="options?.controls"
            class="absolute bottom-16 right-1 flex flex-col divide-y divide-base-200 overflow-hidden rounded border border-base-200 bg-base-100 text-base-content shadow"
        >
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                matTooltipPosition="left"
                class="rounded-none"
                (click)="zoom = zoom * 1.1"
            >
                <icon>add</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                matTooltipPosition="left"
                class="rounded-none"
                (click)="zoom = zoom * (10 / 11)"
            >
                <icon>remove</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                matTooltipPosition="left"
                class="rounded-none"
                (click)="reset = reset + 1"
            >
                <icon>refresh</icon>
            </button>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MapsIndoorsComponent,
        MapRendererComponent,
        CiscoMapComponent,
    ],
})
export class InteractiveMapComponent extends AsyncHandler implements OnChanges {
    @Input() public src: string;
    @Input() public zoom = 1;
    @Input() public center: any = { x: 0.5, y: 0.5 };
    @Input() public reset = 0;
    @Input() public metadata: MapMetadata = {};
    @Input() public styles: any;
    @Input() public features: any[];
    @Input() public labels: any[];
    @Input() public actions: any[];
    @Input() public options: MapOptions = {};
    @Input() public focus: string;
    @Output() public zoomChange = new EventEmitter<number>();
    @Output() public centerChange = new EventEmitter<any>();
    @Output() public mapInfo = new EventEmitter<any>();

    public readonly use_mapsindoors$ = this._mapspeople.available$;

    public get location() {
        return this._org.levels.find((_) => _.map_id === this.src);
    }

    public get use_cisco_maps() {
        return this._settings.get('app.explore.use_cisco_maps');
    }

    constructor(
        private _settings: SettingsService,
        private _mapspeople: MapsPeopleService,
        private _org: OrganisationService,
        private _explore: ExploreStateService,
    ) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (
            changes.actions ||
            changes.labels ||
            changes.styles ||
            changes.features
        ) {
            this.metadata = {
                actions: this.actions || [],
                labels: this.labels || [],
                styles: this.styles || {},
                features: this.features || [],
            };
        }
    }

    public onLevelChange(zone: any) {
        log(
            'Map',
            'Level changed to:',
            zone?.display_name || zone?.name || zone,
        );
        this._explore.setLevel(zone.id);
    }
}
