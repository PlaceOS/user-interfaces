import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    model,
    NgZone,
    OnDestroy,
    OnInit,
    output,
    signal,
    TemplateRef,
    Type,
    untracked,
    viewChild,
    viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';

import {
    MapAction,
    MapOverlay,
    MapViewChangeEvent,
    MapViewer,
} from './map-viewer.class';
import { MapZoomControlsComponent } from './map-zoom-controls.component';
import { SanitizePipe } from './sanitise.pipe';
import { TranslatePipe } from './translate.pipe';

type DebugSection = 'styles' | 'features' | 'labels' | 'actions';

interface DebugDetailEntry {
    text: string;
    ref?: string;
    missing?: boolean;
}

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
        @if (debug()) {
            <div
                class="absolute top-2 right-2 z-40 flex max-h-[80%] max-w-[32rem] flex-col rounded bg-black/80 font-mono text-[11px] leading-4 text-white"
            >
                <div class="pointer-events-none p-2 whitespace-pre">
                    {{ debug_text() }}
                </div>
                <div class="flex gap-1 px-2 pb-2">
                    @for (section of debug_sections(); track section.key) {
                        <button
                            class="rounded border border-white/30 px-1 hover:bg-white/20"
                            [class.bg-white/30]="
                                debug_section() === section.key
                            "
                            (click)="toggleDebugSection(section.key)"
                        >
                            {{ section.key }} ({{ section.count }})
                        </button>
                    }
                </div>
                @if (debug_section()) {
                    <input
                        class="mx-2 mb-2 rounded border border-white/30 bg-white/10 px-1 outline-none placeholder:text-white/40"
                        placeholder="Filter..."
                        [(ngModel)]="debug_filter"
                    />
                    <div
                        class="overflow-auto border-t border-white/20 p-2 whitespace-pre select-text"
                    >
                        @if (debug_section() === 'styles') {
                            @for (
                                block of debug_style_blocks();
                                track block.selector
                            ) {
                                <div>{{ block.selector + ' {' }}</div>
                                @for (prop of block.props; track prop.name) {
                                    <div class="flex items-center">
                                        <span>{{
                                            '  ' +
                                                prop.name +
                                                ': ' +
                                                prop.value +
                                                ';'
                                        }}</span>
                                        @if (prop.color) {
                                            <span
                                                class="ml-1.5 inline-block h-2.5 w-2.5 rounded-sm border border-white/40"
                                                [style.background]="prop.color"
                                            ></span>
                                        }
                                    </div>
                                }
                                <div>{{ '}' }}</div>
                            } @empty {
                                <span>{{
                                    debug_filter().trim()
                                        ? 'No matches'
                                        : 'No styles'
                                }}</span>
                            }
                        } @else {
                            @for (
                                entry of debug_detail_entries();
                                track entry.text
                            ) {
                                <div
                                    class="rounded px-1"
                                    [class.bg-red-500/20]="entry.missing"
                                    [class.text-red-200]="entry.missing"
                                    [class.cursor-default]="entry.ref"
                                    (mouseenter)="highlightDebugEntry(entry)"
                                    (mouseleave)="clearDebugHighlight(entry)"
                                >
                                    <span>{{ entry.text }}</span>
                                    @if (entry.missing) {
                                        <span class="ml-1 text-red-300">
                                            [missing on map]
                                        </span>
                                    }
                                </div>
                            } @empty {
                                <span>{{ debug_detail_empty_text() }}</span>
                            }
                        }
                    </div>
                }
            </div>
        }
        @if (injectors().length) {
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
                                                injector: injectors()[i]
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
        FormsModule,
        TranslatePipe,
        SanitizePipe,
        MatProgressSpinnerModule,
        MapZoomControlsComponent,
    ],
})
export class DynamicMapComponent implements OnInit, OnDestroy {
    private _injector = inject(Injector);
    private _zone = inject(NgZone);
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
    /** Show debugging info over the map. Also toggled with Ctrl+Alt+Shift+G */
    public debug = model(false);
    public reset = model(0);
    public styles = input<ViewerStyles>({});
    public features = input<ViewerFeature[]>([]);
    public labels = input<ViewerLabel[]>([]);
    public actions = input<ViewAction[]>([]);
    public options = input({} as MapOptions);
    public focus = input('');
    public mapInfo = output<Record<string, MapElementBounds>>();

    public injectors = signal<Injector[]>([]);
    public loading = signal(false);
    public error = signal(false);

    /** Normalised SVG bounds of map elements, keyed by element ID */
    private _element_mappings = signal<Record<string, MapElementBounds> | null>(
        null,
    );

    private _hotkey_sub = inject(HotkeysService).listen(
        ['Control', 'Alt', 'Shift', 'KeyG'],
        () => this.debug.update((state) => !state),
    );

    /** Viewer state polled for the debug panel while debug mode is active */
    private _debug_state = signal<{
        texture: string;
        aspect: string;
        view: string;
        pointer: string;
        hover: string;
        elements: number;
        overlays: number;
        draw: string;
    } | null>(null);

    public readonly debug_text = computed(() => {
        const state = this._debug_state();
        if (!state) return '';
        const center = this.center();
        const status = this.error()
            ? 'error'
            : this.loading()
              ? 'loading'
              : this.src()
                ? 'ready'
                : 'no map';
        return [
            'MAP DEBUG (Ctrl+Alt+Shift+G)',
            `src:      ${this._middleTruncate(this.src().split('/').pop() || '—', 36)}`,
            `status:   ${status}`,
            `texture:  ${state.texture}${this.highResolution() ? ' (high-res)' : ''}`,
            `aspect:   ${state.aspect}`,
            `view:     ${state.view}`,
            `zoom:     ${this.zoom().toFixed(2)}`,
            `center:   ${center.x.toFixed(3)}, ${center.y.toFixed(3)}`,
            `pointer:  ${state.pointer}`,
            `hover:    ${state.hover}`,
            `elements: ${state.elements}`,
            `overlays: ${state.overlays}`,
            `draw:     ${state.draw}`,
        ].join('\n');
    });

    /** Currently expanded section of the debug panel */
    public readonly debug_section = signal<DebugSection | null>(null);
    /** Text filter applied to entries of the expanded debug section */
    public readonly debug_filter = signal('');

    public readonly debug_sections = computed(
        (): { key: DebugSection; count: number }[] => [
            { key: 'styles', count: Object.keys(this.styles() || {}).length },
            { key: 'features', count: (this.features() || []).length },
            { key: 'labels', count: (this.labels() || []).length },
            { key: 'actions', count: (this.actions() || []).length },
        ],
    );

    /** Style rules for the debug panel, with swatch colours for colour-valued properties */
    public readonly debug_style_blocks = computed(() => {
        if (this.debug_section() !== 'styles') return [];
        const blocks = Object.entries(this.styles() || {}).map(
            ([selector, style]) => ({
                selector,
                props: Object.entries(style).map(([name, value]) => {
                    const value_text = `${value}`;
                    const color = value_text.replace('!important', '').trim();
                    return {
                        name,
                        value: value_text,
                        color:
                            typeof CSS !== 'undefined' &&
                            CSS.supports('color', color)
                                ? color
                                : '',
                    };
                }),
            }),
        );
        const filter = this.debug_filter().trim().toLowerCase();
        if (!filter) return blocks;
        return blocks.filter(
            ({ selector, props }) =>
                selector.toLowerCase().includes(filter) ||
                props.some((prop) =>
                    `${prop.name}: ${prop.value}`
                        .toLowerCase()
                        .includes(filter),
                ),
        );
    });

    public readonly debug_detail_entries = computed(() => {
        const section = this.debug_section();
        let entries: DebugDetailEntry[];
        switch (section) {
            case 'features':
                entries = this._describeFeatures();
                break;
            case 'labels':
                entries = this._describeLabels();
                break;
            case 'actions':
                entries = this._describeActions();
                break;
            default:
                return [];
        }
        const filter = this.debug_filter().trim().toLowerCase();
        if (filter) {
            entries = entries.filter((entry) =>
                entry.text.toLowerCase().includes(filter),
            );
        }
        return entries;
    });

    public readonly debug_detail_empty_text = computed(() => {
        const section = this.debug_section();
        const filter = this.debug_filter().trim();
        return filter ? 'No matches' : `No ${section}`;
    });

    public toggleDebugSection(section: DebugSection) {
        this.debug_section.update((current) =>
            current === section ? null : section,
        );
    }

    public highlightDebugEntry(entry: DebugDetailEntry) {
        if (!entry.ref || entry.missing) return;
        this._map_viewer?.setDebugHighlight(entry.ref);
    }

    public clearDebugHighlight(entry: DebugDetailEntry) {
        if (!entry.ref || entry.missing) return;
        this._map_viewer?.setDebugHighlight('');
    }

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
            if (this._map_viewer) {
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

        // Effect to sync debug mode and poll viewer state for the debug panel
        effect((onCleanup) => {
            this._map_viewer?.setDebug(this.debug());
            if (!this.debug()) {
                this._debug_state.set(null);
                this.debug_section.set(null);
                this.debug_filter.set('');
                return;
            }
            const update = () => {
                const viewer = this._map_viewer;
                if (!viewer) return;
                const image = viewer.map_image;
                const info = viewer.debug_info;
                this._debug_state.set({
                    texture: image ? `${image.width}×${image.height}` : 'none',
                    aspect: (viewer.map?.aspect_ratio || 1).toFixed(3),
                    view: `${viewer.container.clientWidth}×${viewer.container.clientHeight}`,
                    pointer: info.pointer
                        ? `${info.pointer.x.toFixed(3)}, ${info.pointer.y.toFixed(3)}`
                        : '—',
                    hover: info.hover_id ? `#${info.hover_id}` : '—',
                    elements: viewer.map?.element_bounds.size || 0,
                    overlays: viewer.overlay_count,
                    draw: `${info.last_draw_ms.toFixed(1)}ms · ${info.draws_last_second}/s`,
                });
            };
            update();
            const interval = setInterval(update, 250);
            onCleanup(() => clearInterval(interval));
        });
    }

    public ngOnInit() {
        const container = this._map_container()?.nativeElement;
        if (!container) return;
        // Pointer, wheel and resize handlers fire on every frame while
        // interacting with the map, keep them outside the Angular zone so
        // they don't each trigger change detection
        this._map_viewer = this._zone.runOutsideAngular(
            () => new MapViewer(container),
        );

        // Sync view changes from user interaction back to the models.
        // The constructor effects apply all other initial state.
        // View change events are coalesced to one per frame by the viewer,
        // so re-entering the zone here is at most one tick per frame.
        this._map_viewer.onViewChange = (event: MapViewChangeEvent) =>
            this._zone.run(() => {
                this.zoom.set(event.zoom);
                this.center.set(event.center);
            });
    }

    public ngOnDestroy() {
        this._hotkey_sub.unsubscribe();
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
                // Important so applied styles also override inline style
                // attributes on map elements (e.g. polylines exported with
                // style="fill:none"), not just the SVG's own stylesheets
                const important = `${value}`.includes('!important')
                    ? ''
                    : ' !important';
                return `${kebab_prop}: ${value}${important}`;
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

    /** Truncate the middle of a string with "..." to fit the given length */
    private _middleTruncate(value: string, max_length: number): string {
        if (value.length <= max_length) return value;
        const keep = max_length - 3;
        const front = Math.ceil(keep / 2);
        const back = keep - front;
        return `${value.slice(0, front)}...${value.slice(value.length - back)}`;
    }

    private _formatLocation(location: string | Point) {
        return typeof location === 'string'
            ? `#${location}`
            : `${location.x.toFixed(3)}, ${location.y.toFixed(3)}`;
    }

    private _debugRef(ref: string | Point): {
        ref?: string;
        location: string;
        missing: boolean;
    } {
        if (typeof ref !== 'string') {
            return { location: this._formatLocation(ref), missing: false };
        }
        return {
            ref,
            location: this._formatLocation(ref),
            missing:
                !!this._element_mappings() && !this._element_mappings()?.[ref],
        };
    }

    private _describeFeatures(): DebugDetailEntry[] {
        return (this.features() || []).map((feature, index) => {
            const target = this._debugRef(feature.location);
            const content =
                feature.content instanceof HTMLElement
                    ? 'element'
                    : feature.content
                      ? this.contentType(feature.content)
                      : 'none';
            return {
                ref: target.ref,
                missing: target.missing,
                text: [
                    `${index}: ${target.location}`,
                    feature.track_id ? `track: ${feature.track_id}` : '',
                    `content: ${content}`,
                    feature.hover ? 'hover' : '',
                    feature.full_size ? 'full-size' : '',
                    feature.z_index != null ? `z: ${feature.z_index}` : '',
                    feature.data && Object.keys(feature.data).length
                        ? `data: ${Object.keys(feature.data).join(', ')}`
                        : '',
                ]
                    .filter(Boolean)
                    .join(' · '),
            };
        });
    }

    private _describeLabels(): DebugDetailEntry[] {
        return (this.labels() || []).map((label, index) => {
            const target = this._debugRef(label.location);
            return {
                ref: target.ref,
                missing: target.missing,
                text: [
                    `${index}: ${target.location}`,
                    `"${label.content}"`,
                    label.zoom_level != null
                        ? `zoom ≥ ${label.zoom_level}`
                        : '',
                    label.css_class?.length
                        ? `class: ${label.css_class.join(' ')}`
                        : '',
                    label.z_index != null ? `z: ${label.z_index}` : '',
                ]
                    .filter(Boolean)
                    .join(' · '),
            };
        });
    }

    private _describeActions(): DebugDetailEntry[] {
        return (this.actions() || []).map((action, index) => {
            const types = Array.isArray(action.action)
                ? action.action
                : [action.action];
            const target = this._debugRef(action.id);
            return {
                ref: target.ref,
                missing: target.missing,
                text: [
                    `${index}: ${target.location}`,
                    types.join(', '),
                    action.priority != null
                        ? `priority: ${action.priority}`
                        : '',
                    action.zone ? 'zone' : '',
                ]
                    .filter(Boolean)
                    .join(' · '),
            };
        });
    }

    private _updateInjectors() {
        const old_injectors = new Map(
            untracked(() => this.injectors()).map((injector) => [
                injector.get(MAP_FEATURE_DATA)?.track_id,
                injector,
            ]),
        );
        this.injectors.set(
            (this.features() || []).map(
                (f: any) =>
                    (f.track_id && old_injectors.get(f.track_id)) ||
                    Injector.create({
                        providers: [
                            {
                                provide: MAP_FEATURE_DATA,
                                useValue: {
                                    track_id: f.track_id,
                                    ...f.data,
                                },
                            },
                        ],
                        parent: this._injector,
                    }),
            ),
        );
    }
}
