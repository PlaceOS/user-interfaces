import {
    Component,
    ElementRef,
    HostListener,
    computed,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent } from '@placeos/components';

import type { DetectedRoom } from '../data/floorplan-ai.service';
import { FloorplanAiService } from '../data/floorplan-ai.service';
import { MapObject } from '../data/types';
import { AssetPickerComponent } from './asset-picker.component';
import { AvailabilityPanelComponent } from './availability-panel.component';
import { CanvasComponent } from './canvas.component';
import {
    SIDEBAR_DEFAULTS,
    SIDEBAR_MAX,
    SIDEBAR_MIN,
    Tool,
    clampSidebar,
    nextSidebarWidth,
} from './constants';
import { EditorStateService } from './editor-state.service';
import { clipRoomRectToOutline, pointInPolygon } from './geometry';
import { LabellingPanelComponent } from './labelling-panel.component';
import { LayerPanelComponent } from './layer-panel.component';
import { MinimapComponent } from './minimap.component';
import { ObjectListPanelComponent } from './object-list-panel.component';
import { PropertiesPanelComponent } from './properties-panel.component';
import { PublishPanelComponent } from './publish-panel.component';
import { ToastService, ToastsComponent } from './toast.service';
import { ValidationPanelComponent } from './validation-panel.component';

/** Toolbar button, styled after the reference app's `.dc-tool-btn` */
const TOOL_BTN =
    'inline-flex shrink-0 items-center gap-1 rounded-md border border-transparent px-2 py-1.5 text-xs font-medium leading-none whitespace-nowrap disabled:opacity-35';
const TOOL_BTN_IDLE =
    'text-base-content/60 hover:bg-base-200 hover:text-base-content';
const TOOL_BTN_ACTIVE = 'bg-primary/10 text-primary border-primary/30';

const SIDEBAR_KEY = 'map-studio.editor-sidebars';

const TOOLS: { id: Tool; label: string; key: string; icon: string }[] = [
    { id: 'select', label: 'Select', key: 'V', icon: 'arrow_selector_tool' },
    { id: 'rect', label: 'Rect', key: 'R', icon: 'crop_square' },
    { id: 'polygon', label: 'Poly', key: 'O', icon: 'pentagon' },
    { id: 'pen', label: 'Place', key: 'P', icon: 'add_box' },
    { id: 'wall', label: 'Wall', key: 'W', icon: 'straighten' },
];

@Component({
    selector: 'map-studio-editor',
    providers: [EditorStateService],
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col">
            <!-- Nav bar, matching the reference app's breadcrumb strip -->
            <nav
                class="bg-secondary text-secondary-content flex h-13 shrink-0 items-center gap-3 overflow-hidden px-5"
            >
                <button
                    class="flex items-center gap-2 rounded-lg bg-white/15 px-3.5 py-1.5 text-sm font-semibold hover:bg-white/25"
                    (click)="leave()"
                >
                    <icon class="text-base">arrow_back</icon>
                    Back
                </button>
                <span class="shrink-0 text-lg font-extrabold tracking-tight">
                    PlaceOS
                </span>
                <span
                    class="hidden shrink-0 text-sm font-medium opacity-60 sm:inline"
                >
                    / Floor Plan Studio
                </span>
                <span class="min-w-0 truncate text-sm opacity-45">
                    / {{ state.floorplan()?.floor_name || 'Editor' }}
                </span>
                <div class="ml-auto flex shrink-0 items-center gap-1">
                    <button
                        class="flex size-8 items-center justify-center rounded-md hover:bg-white/15"
                        [class.bg-white/15]="left_open()"
                        [attr.aria-expanded]="left_open()"
                        aria-controls="editor-left-panel"
                        [attr.aria-label]="
                            left_open()
                                ? 'Hide layers and objects panel'
                                : 'Show layers and objects panel'
                        "
                        [title]="
                            left_open()
                                ? 'Hide layers and objects panel'
                                : 'Show layers and objects panel'
                        "
                        (click)="left_open.set(!left_open())"
                    >
                        <icon>left_panel_open</icon>
                    </button>
                    <button
                        class="flex size-8 items-center justify-center rounded-md hover:bg-white/15"
                        [class.bg-white/15]="right_open()"
                        [attr.aria-expanded]="right_open()"
                        aria-controls="editor-right-panel"
                        [attr.aria-label]="
                            right_open()
                                ? 'Hide editor details panel'
                                : 'Show editor details panel'
                        "
                        [title]="
                            right_open()
                                ? 'Hide editor details panel'
                                : 'Show editor details panel'
                        "
                        (click)="right_open.set(!right_open())"
                    >
                        <icon>right_panel_open</icon>
                    </button>
                </div>
            </nav>

            <!-- Toolbar. Two fixed rows: what you draw, then how you edit. -->
            <header
                class="bg-base-100 border-base-300 flex shrink-0 flex-col gap-1 overflow-x-auto border-b px-2.5 py-1.5 whitespace-nowrap"
            >
                <div class="flex items-center gap-1">
                    <div class="flex shrink-0 items-center gap-0.5">
                        @for (tool of tools; track tool.id) {
                            <button
                                [class]="
                                    toolClass(state.active_tool() === tool.id)
                                "
                                [title]="
                                    tool.key
                                        ? tool.label + ' (' + tool.key + ')'
                                        : tool.label
                                "
                                (click)="pickTool(tool.id)"
                            >
                                <icon class="text-base">
                                    {{ tool.icon }}
                                </icon>
                                {{ tool.label }}
                            </button>
                        }
                    </div>

                    <span class="bg-base-300 mx-1.5 h-6 w-px shrink-0"></span>

                    <map-studio-asset-picker />

                    <!-- Search, right-aligned as in the reference toolbar -->
                    <div class="relative ml-auto shrink-0">
                        <input
                            #search_input
                            class="border-base-300 w-36 rounded border p-2 text-xs"
                            placeholder="Search (Ctrl+F)"
                            aria-label="Search objects"
                            [value]="search()"
                            (input)="search.set(asValue($event))"
                            (keydown.escape)="search.set('')"
                        />
                        @if (search_results(); as results) {
                            <div
                                class="bg-base-100 border-base-300 absolute top-full right-0 z-30 mt-1 max-h-52 w-56 overflow-y-auto rounded-md border shadow-lg"
                            >
                                @for (object of results; track object.id) {
                                    <button
                                        class="border-base-300 hover:bg-base-200 flex w-full items-center gap-1.5 border-b px-2.5 py-1.5 text-left text-xs last:border-b-0"
                                        (click)="reveal(object)"
                                    >
                                        <span
                                            class="flex-1 truncate font-medium"
                                        >
                                            {{ object.label }}
                                        </span>
                                        <span
                                            class="text-base-content/60 text-[0.65rem] uppercase"
                                        >
                                            {{ object.object_type }}
                                        </span>
                                    </button>
                                }
                                @if (!results.length) {
                                    <p
                                        class="text-base-content/60 m-0 px-2.5 py-2 text-center text-xs"
                                    >
                                        No results
                                    </p>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div class="flex items-center gap-1">
                    <!-- Actions -->
                    <div class="flex shrink-0 items-center gap-0.5">
                        <button
                            [class]="toolClass(state.dirty())"
                            [title]="
                                state.dirty()
                                    ? 'Save changes (Ctrl+S)'
                                    : 'No unsaved changes'
                            "
                            [disabled]="state.saving() || !state.dirty()"
                            (click)="state.save()"
                        >
                            <icon class="text-base">save</icon>
                            {{ state.saving() ? 'Saving...' : 'Save' }}
                        </button>
                        <button
                            [class]="toolClass(false)"
                            title="Undo (Ctrl+Z)"
                            [disabled]="!state.can_undo()"
                            (click)="state.undo()"
                        >
                            <icon class="text-base">undo</icon>
                            Undo
                        </button>
                        <button
                            [class]="toolClass(false)"
                            title="Redo (Ctrl+Shift+Z)"
                            [disabled]="!state.can_redo()"
                            (click)="state.redo()"
                        >
                            <icon class="text-base">redo</icon>
                            Redo
                        </button>
                        <!-- sr-only, not hidden, so the input stays keyboard reachable -->
                        <label
                            [class]="toolClass(false) + ' cursor-pointer'"
                            title="Upload a background image"
                        >
                            <icon class="text-base">upload</icon>
                            Image
                            <input
                                type="file"
                                accept="image/*"
                                class="sr-only"
                                (change)="onUpload($event)"
                            />
                        </label>
                        @if (ai_configured) {
                            <button
                                [class]="toolClass(false)"
                                [title]="
                                    state.image_url()
                                        ? 'AI: detect building outline'
                                        : 'Upload a floor plan image first'
                                "
                                [disabled]="!state.image_url() || ai_busy()"
                                (click)="detectAiOutline()"
                            >
                                <icon class="text-base">
                                    {{
                                        ai_outline_analyzing()
                                            ? 'progress_activity'
                                            : 'border_outer'
                                    }}
                                </icon>
                                {{
                                    ai_outline_analyzing()
                                        ? 'Detecting...'
                                        : 'AI Outline'
                                }}
                            </button>
                            <button
                                [class]="toolClass(false)"
                                [title]="
                                    state.image_url()
                                        ? 'AI: detect rooms and add them to the map'
                                        : 'Upload a floor plan image first'
                                "
                                [disabled]="!state.image_url() || ai_busy()"
                                (click)="detectAiRooms()"
                            >
                                <icon class="text-base">
                                    {{
                                        ai_rooms_analyzing()
                                            ? 'progress_activity'
                                            : 'meeting_room'
                                    }}
                                </icon>
                                {{
                                    ai_rooms_analyzing()
                                        ? 'Detecting...'
                                        : 'AI Rooms'
                                }}
                            </button>
                        }
                    </div>

                    <span class="bg-base-300 mx-1.5 h-6 w-px shrink-0"></span>

                    <!-- View -->
                    <div class="flex shrink-0 items-center gap-1">
                        <select
                            id="active-layer"
                            class="border-base-300 shrink-0 rounded border p-2 text-xs"
                            title="Active layer"
                            aria-label="Active layer"
                            (change)="state.setActiveLayer(asValue($event))"
                        >
                            @for (
                                layer of state.sorted_layers();
                                track layer.id
                            ) {
                                <option
                                    [value]="layer.id"
                                    [selected]="
                                        layer.id === state.active_layer_id()
                                    "
                                >
                                    {{ layer.name }}
                                </option>
                            }
                        </select>
                        <button
                            [class]="toolClass(state.snap_enabled())"
                            title="Toggle snapping"
                            (click)="state.toggleSnap()"
                        >
                            <icon class="text-base">grid_goldenratio</icon>
                            Snap
                        </button>
                        <button
                            [class]="toolClass(state.grid_enabled())"
                            title="Toggle grid (G)"
                            (click)="state.toggleGrid()"
                        >
                            <icon class="text-base">grid_on</icon>
                            Grid
                        </button>
                        @if (state.grid_enabled()) {
                            <input
                                type="number"
                                min="5"
                                max="100"
                                step="5"
                                class="border-base-300 w-16 rounded border p-2 text-center text-xs"
                                title="Grid size (px)"
                                aria-label="Grid size in pixels"
                                [value]="state.grid_size()"
                                (change)="state.setGridSize(+asValue($event))"
                            />
                        }
                    </div>
                </div>
            </header>

            @if (state.error(); as message) {
                <div class="bg-error-light text-error px-4 py-2 text-sm">
                    {{ message }}
                </div>
            }

            @if (state.loading()) {
                <div
                    class="text-base-content/60 flex flex-1 flex-col items-center justify-center gap-4"
                >
                    <div
                        class="border-base-300 border-t-primary h-8 w-8 animate-spin rounded-full border-4"
                    ></div>
                    <p class="text-sm">Loading editor...</p>
                </div>
            } @else {
                <div class="relative flex min-h-0 flex-1">
                    <!-- Left sidebar -->
                    @if (left_open()) {
                        <aside
                            id="editor-left-panel"
                            class="bg-base-100 border-base-300 flex shrink-0 flex-col border-r"
                            [style.width.px]="left_width()"
                        >
                            <div class="border-base-300 flex border-b">
                                <button
                                    class="flex-1 px-3 py-2 text-xs font-semibold"
                                    [class]="
                                        left_tab() === 'layers'
                                            ? 'border-primary border-b-2'
                                            : 'text-base-content/60'
                                    "
                                    (click)="left_tab.set('layers')"
                                >
                                    Layers
                                </button>
                                <button
                                    class="flex-1 px-3 py-2 text-xs font-semibold"
                                    [class]="
                                        left_tab() === 'objects'
                                            ? 'border-primary border-b-2'
                                            : 'text-base-content/60'
                                    "
                                    (click)="left_tab.set('objects')"
                                >
                                    Objects
                                </button>
                            </div>
                            <div class="min-h-0 flex-1">
                                @if (left_tab() === 'layers') {
                                    <map-studio-layer-panel />
                                } @else {
                                    <map-studio-object-list-panel
                                        (scrollTo)="scrollTo($event)"
                                    />
                                }
                            </div>
                        </aside>
                    }

                    <!-- Canvas -->
                    <main class="relative min-w-0 flex-1">
                        <map-studio-canvas />
                        <!-- Zoom controls, matching <dynamic-map>'s overlay stack -->
                        <div
                            class="border-base-300 bg-base-100 absolute top-3 right-3 z-20 flex flex-col overflow-hidden rounded border shadow"
                        >
                            <button
                                class="hover:bg-base-200 border-base-300 border-b p-1 text-base"
                                title="Zoom in"
                                aria-label="Zoom in"
                                (click)="state.zoomBy(1.1)"
                            >
                                <icon>add</icon>
                            </button>
                            <button
                                class="hover:bg-base-200 border-base-300 border-b p-1 text-base"
                                title="Zoom out"
                                aria-label="Zoom out"
                                (click)="state.zoomBy(10 / 11)"
                            >
                                <icon>remove</icon>
                            </button>
                            <button
                                class="hover:bg-base-200 p-1 text-base"
                                title="Reset zoom"
                                aria-label="Reset zoom"
                                (click)="resetView()"
                            >
                                <icon>refresh</icon>
                            </button>
                        </div>
                        @if (canvas()?.containerEl(); as container) {
                            <map-studio-minimap [container]="container" />
                        }
                    </main>

                    <!-- Right sidebar -->
                    @if (right_open()) {
                        <aside
                            id="editor-right-panel"
                            class="bg-base-100 border-base-300 flex shrink-0 flex-col border-l"
                            [style.width.px]="right_width()"
                        >
                            <div class="border-base-300 flex border-b">
                                @for (tab of right_tabs; track tab.id) {
                                    <button
                                        class="flex-1 px-1 py-2 text-xs font-semibold"
                                        [class]="
                                            right_tab() === tab.id
                                                ? 'border-primary border-b-2'
                                                : 'text-base-content/60'
                                        "
                                        [title]="tab.title"
                                        (click)="right_tab.set(tab.id)"
                                    >
                                        {{ tab.label }}
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1">
                                @switch (right_tab()) {
                                    @case ('properties') {
                                        <map-studio-properties-panel />
                                    }
                                    @case ('label') {
                                        <map-studio-labelling-panel />
                                    }
                                    @case ('validate') {
                                        <map-studio-validation-panel />
                                    }
                                    @case ('preview') {
                                        <map-studio-availability-panel />
                                    }
                                    @case ('publish') {
                                        <map-studio-publish-panel />
                                    }
                                }
                            </div>
                        </aside>
                    }

                    <!-- Resize handles. Overlaid on the sidebar borders rather
                         than placed in the flow, so they take no layout space
                         and never paint a strip beside the canvas. -->
                    @if (left_open()) {
                        <div
                            role="separator"
                            tabindex="0"
                            aria-orientation="vertical"
                            aria-label="Resize the layers and objects panel"
                            [attr.aria-valuenow]="left_width()"
                            [attr.aria-valuemin]="sidebar_min"
                            [attr.aria-valuemax]="sidebar_max"
                            class="hover:bg-primary/40 focus-visible:bg-primary/40 absolute inset-y-0 z-30 w-1 cursor-col-resize"
                            [style.left.px]="left_width() - 2"
                            (pointerdown)="startResize($event, 'left')"
                            (keydown.arrowleft)="nudge($event, 'left', -16)"
                            (keydown.arrowright)="nudge($event, 'left', 16)"
                        ></div>
                    }
                    @if (right_open()) {
                        <div
                            role="separator"
                            tabindex="0"
                            aria-orientation="vertical"
                            aria-label="Resize the properties panel"
                            [attr.aria-valuenow]="right_width()"
                            [attr.aria-valuemin]="sidebar_min"
                            [attr.aria-valuemax]="sidebar_max"
                            class="hover:bg-primary/40 focus-visible:bg-primary/40 absolute inset-y-0 z-30 w-1 cursor-col-resize"
                            [style.right.px]="right_width() - 2"
                            (pointerdown)="startResize($event, 'right')"
                            (keydown.arrowleft)="nudge($event, 'right', -16)"
                            (keydown.arrowright)="nudge($event, 'right', 16)"
                        ></div>
                    }
                </div>

                <!-- Status bar -->
                <footer
                    class="bg-base-100 border-base-300 text-base-content/60 flex shrink-0 items-center gap-5 overflow-x-auto border-t px-4 py-1.5 text-[0.72rem] whitespace-nowrap"
                >
                    <span>{{ zoomPercent() }}% zoom</span>
                    <span
                        aria-hidden="true"
                        class="bg-base-300 h-3 w-px shrink-0"
                    ></span>
                    <span>
                        {{ state.objects().length }}
                        {{
                            state.objects().length === 1 ? 'object' : 'objects'
                        }}
                    </span>
                    <span
                        aria-hidden="true"
                        class="bg-base-300 h-3 w-px shrink-0"
                    ></span>
                    <span>
                        Grid: {{ state.grid_size() }}px
                        {{ state.grid_enabled() ? '' : '(off)' }}
                    </span>
                    <span
                        aria-hidden="true"
                        class="bg-base-300 h-3 w-px shrink-0"
                    ></span>
                    <span>Snap: {{ state.snap_enabled() ? 'On' : 'Off' }}</span>
                    @if (canvas()?.cursor_coords(); as coords) {
                        <span
                            aria-hidden="true"
                            class="bg-base-300 h-3 w-px shrink-0"
                        ></span>
                        <span>X: {{ coords.x }} Y: {{ coords.y }}</span>
                    }
                    @if (state.selected(); as selected) {
                        <span
                            aria-hidden="true"
                            class="bg-base-300 h-3 w-px shrink-0"
                        ></span>
                        <span class="text-base-content font-semibold">
                            {{
                                selected.label ||
                                    selected.svg_id ||
                                    selected.id.slice(0, 8)
                            }}
                            <span class="text-base-content/60 ml-1 font-normal">
                                ({{ selected.object_type }})
                                {{ round(selected.geometry.width ?? 0) }}x{{
                                    round(selected.geometry.height ?? 0)
                                }}
                            </span>
                        </span>
                    }
                    @if (state.placing(); as placing) {
                        <span class="text-primary font-semibold">
                            Click to place {{ placing.id }} (Esc to cancel)
                        </span>
                    }
                    <span class="ml-auto flex items-center gap-2">
                        <span class="capitalize">{{ state.mode() }} mode</span>
                        <span
                            aria-hidden="true"
                            class="bg-base-300 h-3 w-px shrink-0"
                        ></span>
                        <span>
                            {{ state.floorplan()?.floor_name }} v{{
                                state.floorplan()?.version
                            }}
                        </span>
                        @if (state.dirty()) {
                            <span class="font-semibold text-[#d97706]">
                                Unsaved
                            </span>
                        } @else if (state.last_saved()) {
                            <span class="text-success">Saved</span>
                        }
                        <span
                            aria-hidden="true"
                            class="bg-base-300 h-3 w-px shrink-0"
                        ></span>
                        <button
                            class="border-base-300 hover:bg-base-200 flex size-5.5 items-center justify-center rounded border bg-transparent text-xs font-bold"
                            title="Keyboard shortcuts (?)"
                            aria-label="Keyboard shortcuts"
                            (click)="show_shortcuts.set(true)"
                        >
                            ?
                        </button>
                    </span>
                </footer>
            }

            @if (show_shortcuts()) {
                <div
                    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    role="presentation"
                >
                    <button
                        class="absolute inset-0 cursor-default bg-transparent"
                        aria-label="Close keyboard shortcuts"
                        (click)="show_shortcuts.set(false)"
                    ></button>
                    <section
                        class="bg-base-100 relative max-h-[80vh] w-[min(90%,32rem)] overflow-y-auto rounded-xl px-7 py-6 shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="shortcuts-title"
                    >
                        <header class="mb-5 flex items-center justify-between">
                            <h2 id="shortcuts-title" class="text-lg font-bold">
                                Keyboard Shortcuts
                            </h2>
                            <button
                                class="hover:bg-base-200 rounded px-2 py-1 text-xl"
                                aria-label="Close keyboard shortcuts"
                                (click)="show_shortcuts.set(false)"
                            >
                                &times;
                            </button>
                        </header>
                        @for (shortcut of shortcuts; track shortcut.key) {
                            <div
                                class="border-base-300 flex items-center justify-between border-b py-2 text-sm last:border-b-0"
                            >
                                <span>{{ shortcut.label }}</span>
                                <kbd
                                    class="bg-base-200 border-base-300 rounded border px-2 py-0.5 font-mono text-xs"
                                >
                                    {{ shortcut.key }}
                                </kbd>
                            </div>
                        }
                    </section>
                </div>
            }

            <map-studio-toasts />
        </div>
    `,
    imports: [
        AssetPickerComponent,
        AvailabilityPanelComponent,
        CanvasComponent,
        IconComponent,
        LabellingPanelComponent,
        LayerPanelComponent,
        MinimapComponent,
        ObjectListPanelComponent,
        PropertiesPanelComponent,
        PublishPanelComponent,
        ToastsComponent,
        ValidationPanelComponent,
    ],
})
export class EditorComponent {
    public readonly state = inject(EditorStateService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _ai = inject(FloorplanAiService);
    private readonly _toasts = inject(ToastService);

    public readonly canvas = viewChild(CanvasComponent);
    public readonly searchInput =
        viewChild<ElementRef<HTMLInputElement>>('search_input');

    public readonly tools = TOOLS;
    public readonly left_tab = signal<'layers' | 'objects'>('layers');
    public readonly search = signal('');
    public readonly show_shortcuts = signal(false);
    public readonly ai_configured = this._ai.configured;
    public readonly ai_outline_analyzing = signal(false);
    public readonly ai_rooms_analyzing = signal(false);
    public readonly ai_busy = computed(
        () => this.ai_outline_analyzing() || this.ai_rooms_analyzing(),
    );

    public readonly shortcuts = [
        { key: 'V', label: 'Select' },
        { key: 'Shift/Ctrl/⌘ click', label: 'Add or remove from selection' },
        { key: 'Shift drag', label: 'Select objects in an area' },
        { key: 'R', label: 'Rectangle' },
        { key: 'O', label: 'Polygon' },
        { key: 'P', label: 'Place object' },
        { key: 'W', label: 'Wall' },
        { key: 'G', label: 'Toggle grid' },
        { key: 'Ctrl/\u2318 S', label: 'Save' },
        { key: 'Ctrl/\u2318 Z', label: 'Undo' },
        { key: 'Ctrl/\u2318 Shift Z', label: 'Redo' },
        { key: 'Delete', label: 'Delete selected' },
        { key: 'Esc', label: 'Deselect or cancel' },
    ];

    public readonly sidebar_min = SIDEBAR_MIN;
    public readonly sidebar_max = SIDEBAR_MAX;
    public readonly left_width = signal(SIDEBAR_DEFAULTS.left);
    public readonly right_width = signal(SIDEBAR_DEFAULTS.right);
    public readonly left_open = signal(window.innerWidth >= 720);
    public readonly right_open = signal(window.innerWidth >= 1100);

    public readonly toolClass = (active: boolean) =>
        `${TOOL_BTN} ${active ? TOOL_BTN_ACTIVE : TOOL_BTN_IDLE}`;

    /** Rooms and desks matching the toolbar search — null hides the dropdown */
    public readonly search_results = computed(() => {
        const query = this.search().trim().toLowerCase();
        if (!query) return null;
        return this.state
            .objects()
            .filter(
                (object) =>
                    (object.object_type === 'room' ||
                        object.object_type === 'desk') &&
                    object.label?.toLowerCase().includes(query),
            )
            .slice(0, 8);
    });

    public readonly right_tabs = [
        { id: 'properties' as const, label: 'Props', title: 'Properties' },
        { id: 'label' as const, label: 'Label', title: 'Labelling' },
        { id: 'validate' as const, label: 'Check', title: 'Validation' },
        { id: 'preview' as const, label: 'Preview', title: 'Availability' },
        { id: 'publish' as const, label: 'Publish', title: 'Publish & export' },
    ];
    public readonly right_tab = signal<
        'properties' | 'label' | 'validate' | 'preview' | 'publish'
    >('properties');

    public readonly zoomPercent = computed(() =>
        Math.round(this.state.zoom() * 100),
    );

    public readonly backLink = computed(() => {
        const project_id = this.state.floorplan()?.project_id;
        return project_id ? ['/project', project_id] : ['/'];
    });

    public readonly asValue = (event: Event) =>
        (event.target as HTMLSelectElement).value;

    public readonly round = Math.round;

    constructor() {
        this._restoreWidths();
        const id = this._route.snapshot.paramMap.get('floorplan_id') ?? '';
        this.state.load(id);
    }

    // ── Sidebar resizing ────────────────────────────────────────────────────

    private _widthFor(side: 'left' | 'right') {
        return side === 'left' ? this.left_width : this.right_width;
    }

    /**
     * Drag a separator. The listeners live on the window, not the handle, so
     * the drag survives the pointer outrunning a 4px strip.
     */
    public startResize(event: PointerEvent, side: 'left' | 'right') {
        event.preventDefault();
        const width = this._widthFor(side);
        const start_x = event.clientX;
        const start_width = width();

        const onMove = (move: PointerEvent) =>
            width.set(
                nextSidebarWidth(start_width, move.clientX - start_x, side),
            );
        const onDone = () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onDone);
            window.removeEventListener('pointercancel', onDone);
            this._saveWidths();
        };

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onDone);
        window.addEventListener('pointercancel', onDone);
    }

    /** Keyboard equivalent, so the separators are not mouse-only */
    public nudge(event: Event, side: 'left' | 'right', delta: number) {
        event.preventDefault();
        const width = this._widthFor(side);
        width.set(nextSidebarWidth(width(), delta, side));
        this._saveWidths();
    }

    private _restoreWidths() {
        try {
            const stored = JSON.parse(
                localStorage.getItem(SIDEBAR_KEY) || '{}',
            );
            this.left_width.set(
                clampSidebar(stored.left ?? SIDEBAR_DEFAULTS.left),
            );
            this.right_width.set(
                clampSidebar(stored.right ?? SIDEBAR_DEFAULTS.right),
            );
        } catch {
            // Unreadable or absent — the defaults already apply
        }
    }

    private _saveWidths() {
        localStorage.setItem(
            SIDEBAR_KEY,
            JSON.stringify({
                left: this.left_width(),
                right: this.right_width(),
            }),
        );
    }

    /** Reset zoom and scroll back to the origin, like <dynamic-map>'s reset. */
    public resetView() {
        this.state.setZoom(1);
        this.canvas()?.containerEl()?.scrollTo({ top: 0, left: 0 });
    }

    public pickTool(tool: Tool) {
        this.canvas()?.cancelDrawing();
        this.state.setTool(tool);
    }

    public scrollTo(object: MapObject) {
        this.canvas()?.scrollIntoView(object);
    }

    /** Select a search hit, bring it into view and close the dropdown */
    public reveal(object: MapObject) {
        this.state.select(object.id);
        this.search.set('');
        this.canvas()?.scrollIntoView(object);
    }

    /** Warn before dropping unsaved work on the way back to the project */
    public leave() {
        if (
            this.state.dirty() &&
            !confirm('You have unsaved changes. Leave without saving?')
        )
            return;
        this._router.navigate(this.backLink());
    }

    @HostListener('window:beforeunload', ['$event'])
    public onBeforeUnload(event: BeforeUnloadEvent) {
        if (this.state.dirty()) event.preventDefault();
    }

    @HostListener('window:resize')
    public onResize() {
        if (window.innerWidth < 720) this.left_open.set(false);
        if (window.innerWidth < 1100) this.right_open.set(false);
    }

    public async onUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) await this.state.uploadSourceImage(file);
        input.value = '';
    }

    public async detectAiOutline() {
        const floorplan_id = this.state.floorplan()?.id;
        if (!floorplan_id || this.ai_busy()) return;
        this.ai_outline_analyzing.set(true);
        try {
            const result = await this._ai.analyze(floorplan_id, 'outline');
            if (!result.outline?.points.length) {
                this._toasts.show('No outline detected. Try again.', 'error');
                return;
            }
            await this.state.applyAiOutline(result.outline.points);
            this._toasts.show(
                `Building outline detected (${result.outline.points.length} vertices)`,
                'success',
            );
        } catch (error) {
            this._toasts.show(
                this._errorMessage(error, 'Outline detection failed'),
                'error',
            );
        } finally {
            this.ai_outline_analyzing.set(false);
        }
    }

    public async detectAiRooms() {
        const floorplan_id = this.state.floorplan()?.id;
        if (!floorplan_id || this.ai_busy()) return;
        this.ai_rooms_analyzing.set(true);
        try {
            const result = await this._ai.analyze(floorplan_id, 'rooms');
            if (!result.rooms.length) {
                this._toasts.show('No rooms detected. Try again.', 'error');
                return;
            }
            const rooms = this._confineRoomsToOutline(result.rooms);
            if (!rooms.length) {
                this._toasts.show(
                    'No detected rooms were inside the building outline.',
                    'error',
                );
                return;
            }
            const count = await this.state.replaceAiRooms(rooms);
            this._toasts.show(
                `${count} room(s) detected and added to the map`,
                'success',
            );
        } catch (error) {
            this._toasts.show(
                this._errorMessage(error, 'Room detection failed'),
                'error',
            );
        } finally {
            this.ai_rooms_analyzing.set(false);
        }
    }

    private _confineRoomsToOutline(rooms: DetectedRoom[]): DetectedRoom[] {
        const outlines = this.state
            .objects()
            .filter(
                (object) =>
                    object.geometry.type === 'polygon' &&
                    !!object.geometry.points?.length &&
                    (object.svg_id === 'ai-outline' ||
                        object.svg_id === 'floor-outline' ||
                        object.object_type === 'area'),
            );
        const outline =
            outlines.find((object) => object.svg_id === 'ai-outline') ??
            outlines.find((object) => object.svg_id === 'floor-outline') ??
            [...outlines].sort(
                (a, b) => this._polygonArea(b) - this._polygonArea(a),
            )[0];
        const points = outline?.geometry.points;
        if (!points) return rooms;

        return rooms.flatMap((room): DetectedRoom[] => {
            const center_x = room.x + room.width / 2;
            const center_y = room.y + room.height / 2;
            if (!pointInPolygon(center_x, center_y, points)) return [];
            const clipped = clipRoomRectToOutline(room, points, 20);
            return clipped ? [{ ...room, ...clipped }] : [];
        });
    }

    private _polygonArea(object: MapObject): number {
        const points = object.geometry.points ?? [];
        return Math.abs(
            points.reduce((sum, point, index) => {
                const next = points[(index + 1) % points.length];
                return sum + point.x * next.y - next.x * point.y;
            }, 0) / 2,
        );
    }

    private _errorMessage(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }

    @HostListener('window:keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent) {
        const target = event.target as HTMLElement;
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

        const mod = event.ctrlKey || event.metaKey;

        if (mod && event.key.toLowerCase() === 's') {
            event.preventDefault();
            if (this.state.dirty() && !this.state.saving()) this.state.save();
            return;
        }
        if (mod && event.key.toLowerCase() === 'z') {
            event.preventDefault();
            if (event.shiftKey) this.state.redo();
            else this.state.undo();
            return;
        }
        if (mod && event.key.toLowerCase() === 'y') {
            event.preventDefault();
            this.state.redo();
            return;
        }
        if (mod && event.key.toLowerCase() === 'f') {
            event.preventDefault();
            this.searchInput()?.nativeElement.focus();
            return;
        }
        if (mod && event.key.toLowerCase() === 'd') {
            event.preventDefault();
            const selected = this.state.selected_id();
            if (selected) this.state.duplicateObject(selected);
            return;
        }
        if (mod) return;

        if (event.key === 'Escape') {
            if (this.show_shortcuts()) {
                this.show_shortcuts.set(false);
                return;
            }
            this.state.select(null);
            this.state.clearMultiSelect();
            this.state.cancelPlacing();
            this.canvas()?.cancelDrawing();
            if (this.state.active_tool() === 'wall')
                this.state.setTool('select');
            return;
        }
        if (event.key === '?') {
            this.show_shortcuts.set(true);
            return;
        }
        if (event.key === 'Delete' || event.key === 'Backspace') {
            const selected = this.state.selected_id();
            if (selected) {
                event.preventDefault();
                this.state.deleteObject(selected);
            }
            return;
        }

        switch (event.key.toLowerCase()) {
            case 'v':
                this.pickTool('select');
                break;
            case 'r':
                this.pickTool('rect');
                break;
            case 'p':
                this.pickTool('pen');
                break;
            case 'w':
                this.pickTool('wall');
                break;
            case 'o':
                this.pickTool('polygon');
                break;
            case 'g':
                this.state.toggleGrid();
                break;
        }
    }
}
