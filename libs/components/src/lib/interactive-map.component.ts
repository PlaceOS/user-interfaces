import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    model,
    OnChanges,
    output,
    SimpleChanges,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { log } from 'libs/common/src/lib/general';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
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

@Component({
    selector: 'interactive-map',
    template: `
        @if (use_mapsindoors$ | async) {
            <maps-indoors
                [zone]="location"
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
                class="absolute bottom-16 right-1 flex flex-col divide-y divide-base-200 overflow-hidden rounded border border-base-200 bg-base-100 text-base-content shadow"
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

    public readonly use_mapsindoors$ = this._mapspeople.available$;

    public readonly location = computed(() =>
        this._org.levels.find((_) => _.map_id === this.src()),
    );

    public get use_cisco_maps() {
        return this._settings.get('app.explore.use_cisco_maps');
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
}
