import {
    Component,
    computed,
    inject,
    input,
    model,
    OnChanges,
    OnInit,
    output,
    SimpleChanges,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    setCustomHeaders,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';

import { OrganisationService } from '@placeos/common';
import { apiKey, token } from '@placeos/ts-client';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { isMobileSafari, log } from 'libs/common/src/lib/general';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';
import { CiscoMapComponent } from './cisco-map.component';
import { IconComponent } from './icon.component';
import { MapRendererComponent } from './map-renderer.component';
import { MapsIndoorsComponent } from './maps-indoors.component';
import { TranslatePipe } from './translate.pipe';

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

let _initialized = false;

@Component({
    selector: 'interactive-map',
    template: `
        @if (use_mapsindoors()) {
            <maps-indoors
                [zone]="location()"
                (zoneChange)="onLevelChange($event)"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [options]="options()"
                [reset]="reset()"
                [focus]="focus()"
                [metadata]="metadata()"
            >
                <ng-content />
            </maps-indoors>
        } @else if (use_cisco_maps) {
            <cisco-map>
                <ng-content />
            </cisco-map>
        } @else {
            <map-renderer
                [src]="src()"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [reset]="reset()"
                [styles]="styles() || metadata()?.styles"
                [features]="features() || metadata()?.features"
                [actions]="actions() || metadata()?.actions"
                [labels]="labels() || metadata()?.labels"
                (mapInfo)="mapInfo.emit($event)"
            >
                <ng-content />
            </map-renderer>
        }
        @if (options()?.controls) {
            <div
                zoom
                class="divide-base-200 border-base-200 bg-base-100 text-base-content absolute right-1 bottom-16 flex flex-col divide-y overflow-hidden rounded-sm border shadow-sm"
            >
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="zoom.set(zoom() * 1.1)"
                >
                    <icon>add</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="zoom.set(zoom() * (10 / 11))"
                >
                    <icon>remove</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="reset.set(reset() + 1)"
                >
                    <icon>refresh</icon>
                </button>
            </div>
        }
    `,
    styles: [``],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MapsIndoorsComponent,
        MapRendererComponent,
        CiscoMapComponent,
    ],
})
export class InteractiveMapComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _settings = inject(SettingsService);
    private _mapspeople = inject(MapsPeopleService);
    private _org = inject(OrganisationService);
    private _explore = inject(ExploreStateService);

    public src = input('');
    public zoom = model(1);
    public center = model({ x: 0.5, y: 0.5 });
    public reset = model(0);
    public metadata = model({} as MapMetadata);
    public styles = input<ViewerStyles>({});
    public features = input<ViewerFeature[]>([]);
    public labels = input<ViewerLabel[]>([]);
    public actions = input([]);
    public options = input({} as MapOptions);
    public focus = input('');
    public mapInfo = output();

    public readonly use_mapsindoors = toSignal(this._mapspeople.available$);

    public readonly location = computed(() =>
        this._org.levels.find((_) => _.map_id === this.src()),
    );
    private readonly _use_cisco_maps = this._settings.signal(
        'explore.cisco_maps.enabled',
        false,
    );

    public get use_cisco_maps() {
        return this._use_cisco_maps();
    }

    public ngOnInit() {
        if (!_initialized) this._setSafariHeaders();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (
            changes.actions ||
            changes.labels ||
            changes.styles ||
            changes.features
        ) {
            this.metadata.set({
                actions: this.actions() || [],
                labels: this.labels() || [],
                styles: this.styles() || {},
                features: this.features() || [],
            });
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

    private _setSafariHeaders() {
        _initialized = true;
        if (isMobileSafari()) return;
        const tkn = token();
        setCustomHeaders(
            tkn === 'x-api-key'
                ? { 'x-api-key': apiKey() }
                : { Authorization: `Bearer ${tkn}` },
        );
    }
}
