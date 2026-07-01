import {
    Component,
    computed,
    inject,
    input,
    model,
    output,
} from '@angular/core';

import {
    MapElementBounds,
    MapMetadata,
    MapOptions,
    OrganisationService,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/common';
import { log } from 'libs/common/src/lib/general';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { ExploreStateService } from 'libs/explore/src/lib/explore-state.service';
import { CiscoMapComponent } from './cisco-map.component';
import { DynamicMapComponent } from './dynamic-map.component';
import { MapZoomControlsComponent } from './map-zoom-controls.component';
import { MapsIndoorsComponent } from './maps-indoors.component';

export type { MapMetadata, MapOptions };

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
            <dynamic-map
                [src]="src()"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [center]="center()"
                (centerChange)="center.set($event)"
                [reset]="reset()"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [labels]="labels()"
                [options]="renderer_options()"
                [focus]="focus()"
                [fixedResolution]="fixedResolution()"
                (mapInfo)="mapInfo.emit($event)"
            >
                <ng-content />
            </dynamic-map>
        }
        @if (options()?.controls) {
            <map-zoom-controls [(zoom)]="zoom" [(reset)]="reset" />
        }
    `,
    styles: [``],
    imports: [
        MapsIndoorsComponent,
        DynamicMapComponent,
        CiscoMapComponent,
        MapZoomControlsComponent,
    ],
})
export class InteractiveMapComponent {
    private _settings = inject(SettingsService);
    private _mapspeople = inject(MapsPeopleService);
    private _org = inject(OrganisationService);
    private _explore = inject(ExploreStateService);

    public src = input('');
    public zoom = model(1);
    public center = model({ x: 0.5, y: 0.5 });
    public reset = model(0);
    public styles = input<ViewerStyles>({});
    public features = input<ViewerFeature[]>([]);
    public labels = input<ViewerLabel[]>([]);
    public actions = input<ViewAction[]>([]);
    public options = input({} as MapOptions);
    public focus = input('');
    /**
     * Override the texture budget for fixed (zoom-disabled) maps, in
     * megapixels. Defaults to twice the container's pixel count when 0. Only
     * applies to the dynamic map renderer.
     */
    public fixedResolution = input(0);
    public mapInfo = output<Record<string, MapElementBounds>>();

    public readonly use_mapsindoors = this._mapspeople.available;

    public readonly metadata = computed<MapMetadata>(() => ({
        actions: this.actions() || [],
        labels: this.labels() || [],
        styles: this.styles() || {},
        features: this.features() || [],
    }));

    public readonly location = computed(() =>
        this._org.levels.find((_) => _.map_id === this.src()),
    );
    /** Map controls are rendered by this component, so disable them on the renderer */
    public readonly renderer_options = computed(() => ({
        ...(this.options() || {}),
        controls: false,
    }));
    private readonly _use_cisco_maps = this._settings.signal(
        'explore.cisco_maps.enabled',
        false,
    );

    public get use_cisco_maps() {
        return this._use_cisco_maps();
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
