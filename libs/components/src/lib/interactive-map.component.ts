import {
    Component,
    computed,
    effect,
    inject,
    input,
    model,
    output,
    signal,
    viewChild,
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
import { hasMap3D } from 'libs/map-3d/src/lib/annotations';
import { CiscoMapComponent } from './cisco-map.component';
import { DynamicMapComponent } from './dynamic-map.component';
import { getMapDetails } from './map-viewer.class';
import { MapZoomControlsComponent } from './map-zoom-controls.component';
import { MapsIndoorsComponent } from './maps-indoors.component';

export type { MapMetadata, MapOptions };

const MODE_KEY = 'PLACEOS.map_view_mode';
const ISOMETRIC_KEY = 'PLACEOS.map_view_isometric';

function storedMode(): '2d' | '3d' {
    try {
        return localStorage.getItem(MODE_KEY) === '3d' ? '3d' : '2d';
    } catch {
        return '2d';
    }
}

function storedIsometric(): boolean {
    try {
        return localStorage.getItem(ISOMETRIC_KEY) === 'true';
    } catch {
        return false;
    }
}

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
                [mode]="mode()"
                [isometric]="isometric()"
                (mode3dFailed)="unsupported_3d.set(true)"
                (mapInfo)="mapInfo.emit($event)"
            >
                <ng-content />
            </dynamic-map>
        }
        @if (options()?.controls) {
            <map-zoom-controls
                [zoom]="zoom()"
                (zoomChange)="zoomTo($event)"
                [(reset)]="reset"
                [can3d]="can_3d()"
                [mode]="mode()"
                (modeChange)="setMode($event)"
                [isometric]="isometric()"
                (isometricChange)="setIsometric($event)"
                (rotate)="rotate($event)"
            />
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

    /** Whether the map on show has a 3D view */
    public readonly has_3d = signal(false);
    /** Set when this device could not start the 3D view */
    public readonly unsupported_3d = signal(false);
    /** The view the user last chose, kept for their next visit */
    public readonly preferred_mode = signal<'2d' | '3d'>(storedMode());
    /** Whether the user has the 3D view locked to an isometric one */
    public readonly isometric = signal(storedIsometric());
    /**
     * Whether this map can show 3D at all: an SVG map with our zoom controls,
     * which hold the switch back to 2D
     */
    private readonly _allows_3d = computed(
        () =>
            !!this.options()?.controls &&
            !this.options()?.disable_zoom &&
            !this.use_mapsindoors() &&
            !this.use_cisco_maps,
    );
    /** The switch shows only on a map that allows 3D and has a 3D view */
    public readonly can_3d = computed(
        () => this._allows_3d() && this.has_3d() && !this.unsupported_3d(),
    );
    public readonly mode = computed<'2d' | '3d'>(() =>
        this.can_3d() && this.preferred_mode() === '3d' ? '3d' : '2d',
    );

    private readonly _map = viewChild(DynamicMapComponent);

    constructor() {
        effect((onCleanup) => {
            const src = this.src();
            let current = true;
            onCleanup(() => (current = false));
            if (!src || !this._allows_3d()) return this.has_3d.set(false);
            // has_3d keeps its last value until the next map has loaded
            getMapDetails(src)
                .then((details) => hasMap3D(details.raw_data))
                .catch(() => false)
                .then((has_3d) => {
                    if (current) this.has_3d.set(has_3d);
                });
        });
    }

    public setMode(mode: '2d' | '3d') {
        this.preferred_mode.set(mode);
        try {
            localStorage.setItem(MODE_KEY, mode);
        } catch {
            // Storage can be unavailable, the choice then lasts for the page
        }
    }

    public setIsometric(isometric: boolean) {
        this.isometric.set(isometric);
        try {
            localStorage.setItem(ISOMETRIC_KEY, `${isometric}`);
        } catch {
            // Storage can be unavailable, the choice then lasts for the page
        }
    }

    public rotate(degrees: number) {
        this._map()?.rotateBy(degrees);
    }

    /** Change the zoom, as a short animation where the map on show can. */
    public zoomTo(zoom: number) {
        const map = this._map();
        if (map) map.zoomTo(zoom);
        else this.zoom.set(zoom);
    }

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
