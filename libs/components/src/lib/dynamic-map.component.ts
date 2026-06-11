import { CommonModule } from '@angular/common';
import {
    Component,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    model,
    OnDestroy,
    OnInit,
    output,
    signal,
    TemplateRef,
    Type,
    viewChild,
    viewChildren,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    MAP_FEATURE_DATA,
    MapElementBounds,
    MapOptions,
    Point,
    unique,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/common';

import {
    MapAction,
    MapOverlay,
    MapViewChangeEvent,
    MapViewer,
} from './map-viewer.class';
import { MapZoomControlsComponent } from './map-zoom-controls.component';
import { SanitizePipe } from './sanitise.pipe';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'dynamic-map',
    template: `
        <div
            #mapContainer
            tabindex="0"
            role="map"
            class="absolute inset-0"
            [class.hidden]="!src()"
        ></div>
        @if (src()) {
            @if (loading()) {
                <mat-spinner class="absolute z-30" [diameter]="48" />
            }
            @if (error()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="opacity-30">
                        {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                    </div>
                </div>
            }
        } @else {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_EMPTY' | translate }}
                </div>
            </div>
        }
        <ng-content />
        @if (options()?.controls) {
            <map-zoom-controls [(zoom)]="zoom" [(reset)]="reset" />
        }
        @if (injectors?.length) {
            <div hidden>
                @for (
                    element of features();
                    track $any(element).track_id || $index;
                    let i = $index
                ) {
                    @if (element) {
                        <div>
                            <div
                                #feature
                                class="pointer-events-none h-full w-full"
                                [attr.el-id]="element.location"
                                [attr.track-id]="$any(element).track_id"
                            >
                                @switch (contentType(element.content)) {
                                    @case ('component') {
                                        <ng-container
                                            *ngComponentOutlet="
                                                $any(element.content);
                                                injector: injectors[i]
                                            "
                                        ></ng-container>
                                    }
                                    @case ('html') {
                                        <div
                                            [innerHTML]="
                                                element.content | sanitize
                                            "
                                        ></div>
                                    }
                                    @default {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                $any(element.content);
                                                context: $any(element).data
                                            "
                                        ></ng-container>
                                    }
                                }
                            </div>
                        </div>
                    }
                }
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }

            mat-spinner {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        SanitizePipe,
        MatProgressSpinnerModule,
        MapZoomControlsComponent,
    ],
})
export class DynamicMapComponent implements OnInit, OnDestroy {
    private _injector = inject(Injector);
    private _map_viewer: MapViewer | null = null;
    /** Previously loaded map URL, used to reset the view on map changes */
    private _last_src = '';
    private _map_container =
        viewChild<ElementRef<HTMLDivElement>>('mapContainer');
    private _feature_elements = viewChildren<ElementRef<HTMLDivElement>>(
        'feature',
        {},
    );

    public src = input('');
    public zoom = model(1);
    public center = model<Point>({ x: 0.5, y: 0.5 });
    public highResolution = input(false);
    public reset = model(0);
    public styles = input<ViewerStyles>({});
    public features = input<ViewerFeature[]>([]);
    public labels = input<ViewerLabel[]>([]);
    public actions = input<ViewAction[]>([]);
    public options = input({} as MapOptions);
    public focus = input('');
    public mapInfo = output<Record<string, MapElementBounds>>();

    public injectors: Injector[] = [];
    public loading = signal(false);
    public error = signal(false);

    /** Normalised SVG bounds of map elements, keyed by element ID */
    private _element_mappings = signal<Record<string, MapElementBounds> | null>(
        null,
    );

    constructor() {
        // Effect to load map when src changes
        effect(() => {
            const src = this.src();
            if (src && this._map_viewer) {
                // Reset the view when changing to a different map
                if (this._last_src && this._last_src !== src) {
                    this.zoom.set(1);
                    this.center.set({ x: 0.5, y: 0.5 });
                }
                this._last_src = src;
                this._loadMap(src);
            }
        });

        // Effect to update styles when styles change
        effect(() => {
            const styles = this.styles() || {};
            if (this._map_viewer && Object.keys(styles).length > 0) {
                this._applyStyles(styles);
            }
        });

        // Effect to update overlays when features or labels change
        effect(() => {
            const features = this.features() || [];
            const labels = this.labels() || [];
            // Read feature elements to create dependency
            const feature_elements = this._feature_elements();
            if (this._map_viewer) {
                this._applyOverlays(features, labels, feature_elements);
            }
        });

        // Keep feature injectors aligned with the signal-based input.
        effect(() => {
            this.features();
            this._updateInjectors();
        });

        // Effect to update actions when actions change
        effect(() => {
            const actions = this.actions() || [];
            if (this._map_viewer) {
                this._applyActions(actions);
            }
        });

        // Effect to sync zoom to MapViewer
        effect(() => {
            const zoom_val = this.zoom() ?? 1;
            this._map_viewer?.setZoom(zoom_val);
        });

        // Effect to sync center to MapViewer
        effect(() => {
            const center_val = this.center() ?? { x: 0.5, y: 0.5 };
            this._map_viewer?.setCenter({ ...center_val });
        });

        // Effect to sync high resolution to MapViewer
        effect(() => {
            const high_res = this.highResolution() ?? false;
            this._map_viewer?.setHighResolution(high_res);
        });

        // Effect to sync interaction options to MapViewer
        effect(() => {
            const options = this.options();
            this._map_viewer?.setOptions(options || {});
        });

        // Effect to handle reset
        effect(() => {
            if (this.reset() > 0) {
                this.zoom.set(1);
                this.center.set({ x: 0.5, y: 0.5 });
            }
        });

        // Effect to focus the view on a map element
        effect(() => {
            const focus = this.focus();
            if (focus && this._element_mappings()) {
                this._map_viewer?.focusOn(focus);
            }
        });
    }

    public ngOnInit() {
        const container = this._map_container()?.nativeElement;
        if (!container) return;
        this._map_viewer = new MapViewer(container);

        // Sync view changes from user interaction back to the models.
        // The constructor effects apply all other initial state.
        this._map_viewer.onViewChange = (event: MapViewChangeEvent) => {
            this.zoom.set(event.zoom);
            this.center.set(event.center);
        };
    }

    public ngOnDestroy() {
        this._map_viewer?.destroy();
        this._map_viewer = null;
    }

    /**
     * Determine the type of content for rendering in template
     */
    public contentType(
        content: string | TemplateRef<any> | Type<any>,
    ): 'html' | 'template' | 'component' {
        return typeof content === 'string'
            ? 'html'
            : content instanceof TemplateRef
              ? 'template'
              : 'component';
    }

    private _loadMap(src: string) {
        const simp_url = src.toLowerCase();
        if (!simp_url.includes('svg') && !simp_url.includes('upload')) return;
        this.loading.set(true);
        this.error.set(false);
        this._map_viewer
            .setMap(src)
            .then(() => {
                if (this.src() !== src || !this._map_viewer) return;
                this.loading.set(false);
                const mappings = Object.fromEntries(
                    this._map_viewer.map?.element_bounds || [],
                );
                this._element_mappings.set(mappings);
                this.mapInfo.emit(mappings);
            })
            .catch((e) => {
                console.warn('[MAP] Failed to load map.', e);
                if (this.src() !== src) return;
                this.loading.set(false);
                this.error.set(true);
            });
    }

    private _applyStyles(styles: ViewerStyles) {
        if (!this._map_viewer) return;

        // Convert each selector's style object to CSS declaration text
        const style_map: Record<string, string> = {};
        for (const [selector, style_obj] of Object.entries(styles)) {
            style_map[selector] = this._objectToCssText(style_obj);
        }

        this._map_viewer.setStyles(style_map);
    }

    private _objectToCssText(
        style_obj: Record<string, string | number>,
    ): string {
        return Object.entries(style_obj)
            .map(([prop, value]) => {
                // Convert camelCase to kebab-case
                const kebab_prop = prop.replace(
                    /[A-Z]/g,
                    (match) => `-${match.toLowerCase()}`,
                );
                return `${kebab_prop}: ${value}`;
            })
            .join('; ');
    }

    private _applyOverlays(
        features: ViewerFeature[],
        labels: ViewerLabel[],
        feature_elements: readonly ElementRef<HTMLDivElement>[],
    ) {
        if (!this._map_viewer) return;

        const overlays: MapOverlay[] = [];

        // Convert features to overlays
        for (let i = 0; i < features.length; i++) {
            const feature = features[i];
            if (!feature.location) continue;

            // Get the content element
            let contents: HTMLElement | string;
            const content_type = this.contentType(feature.content);

            if (content_type === 'component' || content_type === 'template') {
                // Use the rendered element from the hidden container
                const rendered_el = feature_elements[i]?.nativeElement;
                if (!rendered_el) continue;
                contents = rendered_el;
            } else if (feature.content instanceof HTMLElement) {
                contents = feature.content;
            } else if (typeof feature.content === 'string') {
                contents = feature.content;
            } else {
                continue;
            }

            // Features are only sized to their reference element when shown
            // on hover or explicitly marked as full size, otherwise they
            // render at their natural size centered on the reference
            const fill_bounds = feature.hover || feature.full_size;
            overlays.push({
                ref: feature.location,
                type: fill_bounds ? 'box' : 'point',
                contents,
                scale_with_zoom: !fill_bounds,
                hover: feature.hover,
                z_index: feature.z_index,
            });
        }

        // Convert labels to overlays
        for (const label of labels) {
            if (!label.location || !label.content) continue;

            const classes = ['map-label', ...(label.css_class || [])].join(' ');
            overlays.push({
                ref: label.location,
                type: 'point',
                contents: `<label class="${classes}">${label.content}</label>`,
                scale_with_zoom: true,
                min_zoom: label.zoom_level,
                z_index: label.z_index,
            });
        }

        this._map_viewer.setOverlays(overlays);
    }

    private _applyActions(actions: ViewAction[]) {
        if (!this._map_viewer) return;

        const map_actions: MapAction[] = [];

        for (const action of actions) {
            if (!action.id) continue;

            // Convert ViewAction action types to DOM event names
            const events = this._convertActionTypes(action.action);
            if (events.length === 0) continue;

            // Wrap the callback to adapt the signature
            // ViewAction callback: (e: Event, p?: Point) => void
            // MapAction callback: (p: Point) => void
            const callback = (p: Point) => {
                // Create a minimal synthetic event for compatibility
                const synthetic_event = new CustomEvent('mapaction', {
                    detail: { point: p },
                });
                action.callback(synthetic_event, { x: p.x, y: p.y });
            };

            map_actions.push({
                ref: action.id,
                events,
                priority: action.priority,
                callback,
            });
        }

        this._map_viewer.setActions(map_actions);
    }

    private _convertActionTypes(action_types: string | string[]): string[] {
        const types = Array.isArray(action_types)
            ? action_types
            : [action_types];
        const events: string[] = [];

        for (const type of types) {
            switch (type) {
                case 'click':
                    events.push('click');
                    break;
                case 'mousedown':
                case 'touchstart':
                    events.push('pointerdown');
                    break;
                case 'mouseup':
                case 'touchend':
                    events.push('pointerup');
                    break;
                case 'enter':
                    events.push('pointerenter');
                    break;
                case 'leave':
                    events.push('pointerleave');
                    break;
                case '*':
                    events.push(
                        'click',
                        'pointerdown',
                        'pointerup',
                        'pointerenter',
                        'pointerleave',
                    );
                    break;
                default:
                    // Pass through unknown event types as-is
                    events.push(type);
            }
        }

        return unique(events);
    }

    private _updateInjectors() {
        const old_injectors = new Map(
            (this.injectors || []).map((injector) => [
                injector.get(MAP_FEATURE_DATA)?.track_id,
                injector,
            ]),
        );
        this.injectors = (this.features() || []).map(
            (f: any) =>
                (f.track_id && old_injectors.get(f.track_id)) ||
                Injector.create({
                    providers: [
                        {
                            provide: MAP_FEATURE_DATA,
                            useValue: { track_id: f.track_id, ...f.data },
                        },
                    ],
                    parent: this._injector,
                }),
        );
    }
}
