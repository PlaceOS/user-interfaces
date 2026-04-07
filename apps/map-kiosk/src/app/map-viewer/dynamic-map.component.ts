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
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';

import { MAP_FEATURE_DATA } from '@placeos/common';
import {
    IconComponent,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    MapAction,
    MapOverlay,
    MapViewChangeEvent,
    MapViewer,
    MapViewerMode,
    Vec2,
} from './map-viewer.class';

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
    selector: 'dynamic-map',
    template: `
        <div #mapContainer class="absolute inset-0 z-20"></div>
        <ng-content />
        @if (options()?.controls) {
            <div
                zoom
                class="divide-base-200 border-base-200 bg-base-100 text-base-content absolute right-1 bottom-16 z-40 flex flex-col divide-y overflow-hidden rounded-sm border shadow-sm"
            >
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="zoom.set(zoom() * 1.1); $event.stopPropagation()"
                >
                    <icon>add</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="
                        zoom.set(zoom() * (10 / 11)); $event.stopPropagation()
                    "
                >
                    <icon>remove</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="reset.set(reset() + 1); $event.stopPropagation()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
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
                                class="z-20 h-full w-full"
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
        `,
    ],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        SanitizePipe,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class DynamicMapComponent implements OnInit, OnDestroy {
    private _injector = inject(Injector);
    private _map_viewer: MapViewer | null = null;
    private _map_container =
        viewChild<ElementRef<HTMLDivElement>>('mapContainer');
    private _feature_elements = viewChildren<ElementRef<HTMLDivElement>>(
        'feature',
        {},
    );

    public src = input('');
    public zoom = model(1);
    public center = model<Vec2>({ x: 0, y: 0 });
    public rotation = model(0);
    public mode = input<MapViewerMode>('3d');
    public highResolution = input(false);
    public reset = model(0);
    public metadata = model({} as MapMetadata);
    public styles = input<ViewerStyles>({});
    public features = input<ViewerFeature[]>([]);
    public labels = input<ViewerLabel[]>([]);
    public actions = input<ViewAction[]>([]);
    public options = input({} as MapOptions);
    public focus = input('');
    public mapInfo = output();

    public injectors: Injector[] = [];
    public loading = signal(false);

    private _view_changes = new BehaviorSubject<{
        zoom: number;
        center: Vec2;
        rotation: number;
    }>({ zoom: 1, center: { x: 0, y: 0 }, rotation: 0 });
    /** Flag to prevent feedback loop when syncing view changes */
    private _syncing_from_viewer = false;

    private _extra_data = {
        zoom$: this._view_changes.pipe(map((_) => _.zoom)),
        center$: this._view_changes.pipe(map((_) => _.center)),
        rotation$: this._view_changes.pipe(map((_) => _.rotation)),
    };

    constructor() {
        // Effect to load map when src changes
        effect(() => {
            const src = this.src();
            if (src && this._map_viewer) {
                this._map_viewer.setMap(src);
            }
        });

        // Effect to update styles when styles or metadata changes
        effect(() => {
            const styles = this.styles() || this.metadata()?.styles || {};
            if (this._map_viewer && Object.keys(styles).length > 0) {
                this._applyStyles(styles);
            }
        });

        // Effect to update overlays when features or labels change
        effect(() => {
            const features = this.features() || this.metadata()?.features || [];
            const labels = this.labels() || this.metadata()?.labels || [];
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

        // Effect to update actions when actions or metadata changes
        effect(() => {
            const actions = this.actions() || this.metadata()?.actions || [];
            if (this._map_viewer) {
                this._applyActions(actions);
            }
        });

        // Effect to sync zoom to MapViewer
        effect(() => {
            const zoom_val = this.zoom() ?? 1;
            if (this._map_viewer && !this._syncing_from_viewer) {
                this._map_viewer.setZoom(zoom_val);
            }
        });

        // Effect to sync center to MapViewer
        effect(() => {
            const center_val = this.center();
            if (this._map_viewer && !this._syncing_from_viewer) {
                this._map_viewer.setCenter(
                    center_val ? { ...center_val } : { x: 0, y: 0 },
                );
            }
        });

        // Effect to sync rotation to MapViewer
        effect(() => {
            const rotation_val = this.rotation() ?? 0;
            if (this._map_viewer && !this._syncing_from_viewer) {
                this._map_viewer.setRotation(rotation_val);
            }
        });

        // Effect to sync mode to MapViewer
        effect(() => {
            const mode_val = this.mode() ?? '3d';
            if (this._map_viewer) {
                this._map_viewer.setMode(mode_val);
            }
        });

        // Effect to sync high resolution to MapViewer
        effect(() => {
            const high_res = this.highResolution() ?? false;
            if (this._map_viewer) {
                this._map_viewer.setHighResolution(high_res);
            }
        });

        // Effect to handle reset
        effect(() => {
            const reset_val = this.reset();
            if (reset_val > 0 && this._map_viewer) {
                this._syncing_from_viewer = true;
                this.zoom.set(1);
                this.center.set({ x: 0, y: 0 });
                this.rotation.set(0);
                this._map_viewer.setZoom(1);
                this._map_viewer.setCenter({ x: 0, y: 0 });
                this._map_viewer.setRotation(0);
                this._syncing_from_viewer = false;
            }
        });

        // Effect to update view changes observable
        effect(() => {
            const zoom_val = this.zoom() ?? 1;
            const center_val = this.center() ?? { x: 0, y: 0 };
            const rotation_val = this.rotation() ?? 0;
            this._view_changes.next({
                zoom: zoom_val,
                center: center_val,
                rotation: rotation_val,
            });
        });
    }

    public ngOnInit() {
        const container = this._map_container()?.nativeElement;
        if (container) {
            this._map_viewer = new MapViewer(container);

            // Set up callback to sync view changes from user interaction
            this._map_viewer.onViewChange = (event: MapViewChangeEvent) => {
                this._syncing_from_viewer = true;
                this.zoom.set(event.zoom);
                this.center.set(event.center);
                this.rotation.set(event.rotation);
                this._syncing_from_viewer = false;
            };

            // Apply initial view state (use defaults if values are undefined)
            this._map_viewer.setMode(this.mode() ?? '3d');
            this._map_viewer.setHighResolution(this.highResolution() ?? false);
            this._map_viewer.setZoom(this.zoom() ?? 1);
            this._map_viewer.setCenter(
                this.center() ? { ...this.center() } : { x: 0, y: 0 },
            );
            this._map_viewer.setRotation(this.rotation() ?? 0);

            const src = this.src();
            if (src) {
                this._map_viewer.setMap(src);
            }
        }
    }

    public ngOnDestroy() {
        if (this._map_viewer) {
            this._map_viewer.destroy();
            this._map_viewer = null;
        }
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

    private _applyStyles(styles: ViewerStyles) {
        if (!this._map_viewer) return;

        // Convert ViewerStyles to Map<string, CSSStyleDeclaration>
        const style_map = new Map<string, CSSStyleDeclaration>();
        for (const [id, style_obj] of Object.entries(styles)) {
            // Create a minimal CSSStyleDeclaration-like object
            const css_style = {
                cssText: this._objectToCssText(style_obj),
            } as CSSStyleDeclaration;
            style_map.set(id, css_style);
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

            overlays.push({
                ref: feature.location,
                type: 'box',
                contents,
                scale_with_zoom: false,
                box_scale: 1,
            });
        }

        // Convert labels to overlays
        for (const label of labels) {
            if (!label.location || !label.content) continue;

            overlays.push({
                ref: label.location,
                type: 'point',
                contents: label.content,
                scale_with_zoom: true,
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
            // MapAction callback: (p: Vec2) => void
            const callback = (p: Vec2) => {
                // Create a minimal synthetic event for compatibility
                const synthetic_event = new CustomEvent('mapaction', {
                    detail: { point: p },
                });
                action.callback(synthetic_event, { x: p.x, y: p.y });
            };

            map_actions.push({
                ref: action.id,
                events,
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

        // Remove duplicates
        return [...new Set(events)];
    }

    private _updateInjectors() {
        const old_injectors = this.injectors || [];
        this.injectors = (this.features() || []).map(
            (f: any) =>
                old_injectors.find(
                    (_) =>
                        _.get(MAP_FEATURE_DATA)?.track_id &&
                        _.get(MAP_FEATURE_DATA)?.track_id === f.track_id,
                ) ||
                Injector.create({
                    providers: [
                        {
                            provide: MAP_FEATURE_DATA,
                            useValue: {
                                track_id: f.track_id,
                                ...f.data,
                                ...this._extra_data,
                            },
                        },
                    ],
                    parent: this._injector,
                }),
        );
    }
}
