import { A11yModule } from '@angular/cdk/a11y';
import {
    Component,
    ElementRef,
    HostListener,
    computed,
    effect,
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

type RightTab = 'properties' | 'label' | 'validate' | 'preview' | 'publish';

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
                    <icon class="text-base" aria-hidden="true">arrow_back</icon>
                    Back
                </button>
                <span class="shrink-0 text-lg font-extrabold tracking-tight">
                    Map Studio
                </span>
                @if (state.project_name(); as project) {
                    <span
                        class="hidden min-w-0 truncate text-sm font-medium opacity-60 sm:inline"
                    >
                        / {{ project }}
                    </span>
                }
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
                class="bg-base-100 border-base-300 flex shrink-0 items-start gap-1 border-b px-2.5 py-1.5 whitespace-nowrap"
            >
                <div class="flex min-w-0 flex-1 flex-col gap-1 overflow-x-auto">
                    <div class="flex items-center gap-1">
                        <div class="flex shrink-0 items-center gap-0.5">
                            @for (tool of tools; track tool.id) {
                                <button
                                    [class]="
                                        toolClass(
                                            state.active_tool() === tool.id
                                        )
                                    "
                                    [title]="
                                        tool.key
                                            ? tool.label + ' (' + tool.key + ')'
                                            : tool.label
                                    "
                                    [attr.aria-pressed]="
                                        state.active_tool() === tool.id
                                    "
                                    (click)="pickTool(tool.id)"
                                >
                                    <icon class="text-base" aria-hidden="true">
                                        {{ tool.icon }}
                                    </icon>
                                    {{ tool.label }}
                                </button>
                            }
                        </div>

                        <!-- The layer new shapes go on, beside the tools that draw them -->
                        <span
                            id="active-layer-label"
                            class="text-base-content/60 ml-1.5 shrink-0 text-xs font-medium"
                        >
                            Layer
                        </span>
                        <select
                            id="active-layer"
                            aria-labelledby="active-layer-label"
                            class="border-base-300 shrink-0 rounded border p-2 text-xs"
                            title="Layer that new shapes go on"
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
                        @if (active_layer(); as layer) {
                            @if (layer.locked) {
                                <span
                                    class="text-warning flex shrink-0 items-center gap-0.5 text-xs font-medium"
                                    title="Unlock this layer in the Layers panel to draw on it"
                                >
                                    <icon class="text-base" aria-hidden="true">
                                        lock
                                    </icon>
                                    Locked
                                </span>
                            } @else if (!layer.visible) {
                                <span
                                    class="text-warning flex shrink-0 items-center gap-0.5 text-xs font-medium"
                                    title="Show this layer in the Layers panel to see new shapes"
                                >
                                    <icon class="text-base" aria-hidden="true">
                                        visibility_off
                                    </icon>
                                    Hidden
                                </span>
                            }
                        }

                        <span
                            class="bg-base-300 mx-1.5 h-6 w-px shrink-0"
                        ></span>

                        <map-studio-asset-picker />
                    </div>

                    <div class="flex items-center gap-1">
                        <!-- Actions -->
                        <div class="flex shrink-0 items-center gap-0.5">
                            <button
                                [class]="toolClass(state.dirty())"
                                [title]="
                                    state.dirty()
                                        ? 'Changes save automatically. Save now (Ctrl+S)'
                                        : 'All changes saved. Changes save automatically.'
                                "
                                [disabled]="state.saving() || !state.dirty()"
                                (click)="state.save()"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    save
                                </icon>
                                {{ state.saving() ? 'Saving...' : 'Save' }}
                            </button>
                            <button
                                [class]="toolClass(false)"
                                title="Undo (Ctrl+Z)"
                                [disabled]="!state.can_undo()"
                                (click)="state.undo()"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    undo
                                </icon>
                                Undo
                            </button>
                            <button
                                [class]="toolClass(false)"
                                title="Redo (Ctrl+Shift+Z)"
                                [disabled]="!state.can_redo()"
                                (click)="state.redo()"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    redo
                                </icon>
                                Redo
                            </button>
                            <!-- sr-only, not hidden, so the input stays keyboard reachable.
                                 text-xs! beats the global label font size. -->
                            <label
                                [class]="
                                    toolClass(false) +
                                    ' text-xs! ' +
                                    (uploading()
                                        ? 'opacity-35'
                                        : 'cursor-pointer')
                                "
                                title="Upload a background image"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    upload
                                </icon>
                                {{ uploading() ? 'Uploading...' : 'Image' }}
                                <input
                                    type="file"
                                    accept="image/*"
                                    class="sr-only"
                                    [disabled]="uploading()"
                                    (change)="onUpload($event)"
                                />
                            </label>
                            @if (state.can_reimport_svg()) {
                                <button
                                    [class]="toolClass(false)"
                                    (click)="state.reimportSvg()"
                                >
                                    Reimport original SVG
                                </button>
                            }
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
                                    <icon class="text-base" aria-hidden="true">
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
                                    <icon class="text-base" aria-hidden="true">
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

                        <span
                            class="bg-base-300 mx-1.5 h-6 w-px shrink-0"
                        ></span>

                        <!-- View -->
                        <div class="flex shrink-0 items-center gap-1">
                            <button
                                [class]="toolClass(state.snap_enabled())"
                                title="Toggle snapping"
                                [attr.aria-pressed]="state.snap_enabled()"
                                (click)="state.toggleSnap()"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    grid_goldenratio
                                </icon>
                                Snap
                            </button>
                            <button
                                [class]="toolClass(state.grid_enabled())"
                                title="Toggle grid (G)"
                                [attr.aria-pressed]="state.grid_enabled()"
                                (click)="state.toggleGrid()"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    grid_on
                                </icon>
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
                                    (change)="
                                        state.setGridSize(+asValue($event))
                                    "
                                />
                            }
                        </div>
                    </div>
                </div>
                <!-- Search, right-aligned and outside the scrolling rows so its
                     results are not clipped -->
                <div class="relative shrink-0">
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
                                    <span class="flex-1 truncate font-medium">
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
            </header>

            @if (state.error(); as message) {
                <div
                    class="bg-error-light text-error flex items-center gap-2 px-4 py-2 text-sm"
                    role="alert"
                >
                    <span class="flex-1">{{ message }}</span>
                    <button
                        class="hover:bg-error/10 flex size-6 shrink-0 items-center justify-center rounded"
                        title="Dismiss"
                        aria-label="Dismiss error"
                        (click)="state.clearError()"
                    >
                        <icon aria-hidden="true">close</icon>
                    </button>
                </div>
            } @else if (state.server_save_error(); as message) {
                <div class="bg-warning-light px-4 py-2 text-sm" server-save>
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
                            <div
                                class="border-base-300 flex border-b"
                                role="tablist"
                                aria-label="Layers and objects"
                            >
                                <button
                                    class="flex-1 px-3 py-2 text-xs font-semibold"
                                    [class]="
                                        left_tab() === 'layers'
                                            ? 'border-primary border-b-2'
                                            : 'text-base-content/60'
                                    "
                                    role="tab"
                                    id="editor-left-tab-layers"
                                    aria-controls="editor-left-tabpanel"
                                    [attr.aria-selected]="
                                        left_tab() === 'layers'
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
                                    role="tab"
                                    id="editor-left-tab-objects"
                                    aria-controls="editor-left-tabpanel"
                                    [attr.aria-selected]="
                                        left_tab() === 'objects'
                                    "
                                    (click)="left_tab.set('objects')"
                                >
                                    Objects
                                </button>
                            </div>
                            <div
                                class="min-h-0 flex-1"
                                id="editor-left-tabpanel"
                                role="tabpanel"
                                [attr.aria-labelledby]="
                                    'editor-left-tab-' + left_tab()
                                "
                            >
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
                        @if (is_empty()) {
                            <!-- First-run hint; clicks pass through to the canvas -->
                            <div
                                class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-6"
                            >
                                <p
                                    class="bg-base-100/90 border-base-300 text-base-content/70 max-w-72 rounded-lg border px-4 py-3 text-center text-sm shadow"
                                >
                                    Upload an image to trace, or pick Rect or
                                    Poly to start drawing.
                                </p>
                            </div>
                        }
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
                            <map-studio-minimap
                                [container]="container"
                                [source_image]="canvas()?.sourceImage()"
                            />
                        }
                    </main>

                    <!-- Right sidebar -->
                    @if (right_open()) {
                        <aside
                            id="editor-right-panel"
                            class="bg-base-100 border-base-300 flex shrink-0 flex-col border-l"
                            [style.width.px]="right_width()"
                        >
                            <div
                                class="border-base-300 flex flex-wrap border-b"
                                role="tablist"
                                aria-label="Editor details"
                            >
                                @for (tab of right_tabs; track tab.id) {
                                    <button
                                        class="flex-1 px-1.5 py-2 text-xs font-semibold whitespace-nowrap"
                                        [class]="
                                            right_tab() === tab.id
                                                ? 'border-primary border-b-2'
                                                : 'text-base-content/60'
                                        "
                                        role="tab"
                                        [id]="'editor-tab-' + tab.id"
                                        [attr.aria-controls]="
                                            'editor-tabpanel-' + tab.id
                                        "
                                        [attr.aria-selected]="
                                            right_tab() === tab.id
                                        "
                                        [title]="tab.title"
                                        (click)="openTab(tab.id)"
                                    >
                                        {{ tab.label }}
                                    </button>
                                }
                            </div>
                            <!-- Panels mount on first visit, then hide rather
                                 than unmount, so validation results and publish
                                 selections survive a tab switch -->
                            <div class="min-h-0 flex-1">
                                @for (tab of right_tabs; track tab.id) {
                                    @if (visited_tabs().has(tab.id)) {
                                        <div
                                            class="h-full"
                                            role="tabpanel"
                                            [id]="'editor-tabpanel-' + tab.id"
                                            [attr.aria-labelledby]="
                                                'editor-tab-' + tab.id
                                            "
                                            [hidden]="right_tab() !== tab.id"
                                        >
                                            @switch (tab.id) {
                                                @case ('properties') {
                                                    <map-studio-properties-panel />
                                                }
                                                @case ('label') {
                                                    <map-studio-labelling-panel />
                                                }
                                                @case ('validate') {
                                                    <map-studio-validation-panel
                                                        (reveal)="
                                                            showInProperties(
                                                                $event
                                                            )
                                                        "
                                                    />
                                                }
                                                @case ('preview') {
                                                    <map-studio-availability-panel />
                                                }
                                                @case ('publish') {
                                                    <map-studio-publish-panel />
                                                }
                                            }
                                        </div>
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
                    } @else if (tool_hint(); as hint) {
                        <span class="text-primary font-semibold">
                            {{ hint }}
                        </span>
                    }
                    <span class="ml-auto flex items-center gap-2">
                        <!-- Preview changes what canvas clicks do, so say so outside its tab -->
                        @if (state.availability_enabled()) {
                            <span
                                class="text-primary font-semibold"
                                title="Clicks on rooms and desks change their preview status. Turn preview off in the Preview tab."
                            >
                                Preview mode
                            </span>
                        } @else {
                            <span>Design mode</span>
                        }
                        <span
                            aria-hidden="true"
                            class="bg-base-300 h-3 w-px shrink-0"
                        ></span>
                        <span>
                            {{ state.floorplan()?.floor_name }} v{{
                                state.floorplan()?.version
                            }}
                        </span>
                        <span
                            [class]="
                                state.dirty() || state.saving()
                                    ? 'font-semibold text-[#d97706]'
                                    : 'text-success'
                            "
                        >
                            {{ save_status() }}
                        </span>
                        <span
                            aria-hidden="true"
                            class="bg-base-300 h-3 w-px shrink-0"
                        ></span>
                        <button
                            class="border-base-300 hover:bg-base-200 flex size-5.5 items-center justify-center rounded border bg-transparent text-xs font-bold"
                            title="Keyboard shortcuts (?)"
                            aria-label="Keyboard shortcuts"
                            (click)="openShortcuts()"
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
                        tabindex="-1"
                        (click)="closeShortcuts()"
                    ></button>
                    <section
                        class="bg-base-100 relative max-h-[80vh] w-[min(90%,32rem)] overflow-y-auto rounded-xl px-7 py-6 shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="shortcuts-title"
                        cdkTrapFocus
                    >
                        <header class="mb-5 flex items-center justify-between">
                            <h2 id="shortcuts-title" class="text-lg font-bold">
                                Keyboard Shortcuts
                            </h2>
                            <button
                                #shortcuts_close
                                class="hover:bg-base-200 rounded px-2 py-1 text-xl"
                                aria-label="Close keyboard shortcuts"
                                (click)="closeShortcuts()"
                            >
                                &times;
                            </button>
                        </header>
                        @for (shortcut of shortcuts; track shortcut.label) {
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
        A11yModule,
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
    private readonly _shortcuts_close =
        viewChild<ElementRef<HTMLButtonElement>>('shortcuts_close');
    /** Where focus was before the shortcuts dialog opened, to return it after */
    private _shortcuts_return: HTMLElement | null = null;

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
    public readonly uploading = signal(false);

    public readonly shortcuts = [
        { key: 'V', label: 'Select' },
        { key: 'R', label: 'Rectangle' },
        { key: 'O', label: 'Polygon' },
        { key: 'P', label: 'Place object' },
        { key: 'W', label: 'Wall' },
        { key: 'G', label: 'Toggle grid' },
        {
            key: 'Shift/Ctrl/\u2318 click',
            label: 'Add or remove from selection',
        },
        { key: 'Shift drag', label: 'Select objects in an area' },
        { key: 'Shift', label: 'Constrain lines and angles while drawing' },
        { key: 'Space drag or middle drag', label: 'Pan' },
        { key: 'Pinch or Ctrl/\u2318 wheel', label: 'Zoom' },
        { key: 'Double-click', label: 'Rename' },
        { key: 'Click an edge', label: 'Add a polygon vertex' },
        { key: 'Alt click a vertex', label: 'Delete a polygon vertex' },
        { key: 'Enter', label: 'Close the polygon being drawn' },
        { key: 'Backspace', label: 'Remove the last polygon point' },
        {
            key: 'Ctrl/\u2318 S',
            label: 'Save now (changes also save automatically)',
        },
        { key: 'Ctrl/\u2318 Z', label: 'Undo' },
        { key: 'Ctrl/\u2318 Shift Z or Ctrl/\u2318 Y', label: 'Redo' },
        { key: 'Ctrl/\u2318 D', label: 'Duplicate selected' },
        { key: 'Ctrl/\u2318 F', label: 'Search' },
        { key: 'Delete', label: 'Delete selected' },
        { key: 'Esc', label: 'Deselect or cancel' },
        { key: '?', label: 'Show keyboard shortcuts' },
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
        {
            id: 'properties' as const,
            label: 'Properties',
            title: 'Properties of the selected object',
        },
        { id: 'label' as const, label: 'Labelling', title: 'Bulk labelling' },
        {
            id: 'validate' as const,
            label: 'Validation',
            title: 'Check the plan before you publish',
        },
        {
            id: 'preview' as const,
            label: 'Preview',
            title: 'Availability preview',
        },
        {
            id: 'publish' as const,
            label: 'Publish',
            title: 'Publish and export',
        },
    ];
    public readonly right_tab = signal<RightTab>('properties');
    /** Tabs opened at least once; their panels stay mounted from then on */
    public readonly visited_tabs = signal<ReadonlySet<RightTab>>(
        new Set(['properties']),
    );

    public readonly active_layer = computed(() =>
        this.state.layers().find((l) => l.id === this.state.active_layer_id()),
    );

    /** No objects and no image: show the first-run hint */
    public readonly is_empty = computed(
        () => !this.state.objects().length && !this.state.image_url(),
    );

    public readonly save_status = computed(() => {
        if (this.state.saving()) return 'Saving…';
        return this.state.dirty() ? 'Changes pending' : 'All changes saved';
    });

    /** Status bar guidance for the tools that take several clicks */
    public readonly tool_hint = computed(() => {
        const canvas = this.canvas();
        const tool = this.state.active_tool();
        if (tool === 'polygon') {
            const count = canvas?.outline_points().length ?? 0;
            if (!count) return 'Click to place the first point';
            if (count < 3)
                return 'Click to add points (Shift constrains) · Backspace removes the last · Esc cancels';
            return 'Click the first point or press Enter to close · Backspace removes the last point · Esc cancels';
        }
        if (tool === 'wall') {
            return canvas?.wall_start()
                ? 'Click to end the wall (Shift constrains) · Esc cancels'
                : 'Click to start a wall';
        }
        return '';
    });

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
        // Move focus into the shortcuts dialog as soon as it renders
        effect(() => this._shortcuts_close()?.nativeElement.focus());
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

    public openTab(tab: RightTab) {
        this.right_tab.set(tab);
        this.visited_tabs.update((tabs) =>
            tabs.has(tab) ? tabs : new Set([...tabs, tab]),
        );
    }

    /** Select an object, show its properties and bring it into view */
    public showInProperties(object: MapObject) {
        this.state.clearMultiSelect();
        this.state.select(object.id);
        this.openTab('properties');
        this.canvas()?.scrollIntoView(object);
    }

    public openShortcuts() {
        if (this.show_shortcuts()) return;
        this._shortcuts_return = document.activeElement as HTMLElement | null;
        this.show_shortcuts.set(true);
    }

    public closeShortcuts() {
        this.show_shortcuts.set(false);
        this._shortcuts_return?.focus();
        this._shortcuts_return = null;
    }

    /** Select a search hit, bring it into view and close the dropdown */
    public reveal(object: MapObject) {
        this.state.select(object.id);
        this.search.set('');
        this.canvas()?.scrollIntoView(object);
    }

    /** Back to the project. The route guard saves pending changes first. */
    public leave() {
        this._router.navigate(this.backLink());
    }

    /**
     * Called by the editor route's canDeactivate guard, so Back, in-app links
     * and {@link leave} all save first. Asks only if the save failed.
     */
    public async canLeave(): Promise<boolean> {
        if (await this.state.flush()) return true;
        return confirm(
            'Map Studio could not save the latest changes. Leave anyway?',
        );
    }

    /** A page unload cannot wait, so start the save and ask the browser to hold */
    @HostListener('window:beforeunload', ['$event'])
    public onBeforeUnload(event: BeforeUnloadEvent) {
        if (!this.state.dirty() && !this.state.saving()) return;
        this.state.save();
        event.preventDefault();
    }

    @HostListener('window:resize')
    public onResize() {
        if (window.innerWidth < 720) this.left_open.set(false);
        if (window.innerWidth < 1100) this.right_open.set(false);
    }

    /** Uploads a background image. Replacing one cannot be undone, so ask first. */
    public async onUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;
        if (
            this.state.image_url() &&
            !confirm('Replace the current background image?')
        )
            return;
        this.uploading.set(true);
        try {
            await this.state.uploadSourceImage(file);
        } finally {
            this.uploading.set(false);
        }
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

    /** The multi-selection when it holds the selected object, else the selected object */
    private _selectionIds(): string[] {
        const multi = this.state.multi_select();
        const selected = this.state.selected_id();
        // Search and the object list select one object without clearing the group
        if (multi.length > 1 && (!selected || multi.includes(selected))) {
            return multi;
        }
        return selected ? [selected] : [];
    }

    @HostListener('window:keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent) {
        // The shortcuts dialog is modal: only Escape reaches it, nothing edits
        if (this.show_shortcuts()) {
            if (event.key === 'Escape') this.closeShortcuts();
            return;
        }
        const mod = event.ctrlKey || event.metaKey;

        // Ahead of the text-field check, so Save Page never opens from a field
        if (mod && event.key.toLowerCase() === 's') {
            event.preventDefault();
            if (this.state.dirty() && !this.state.saving()) this.state.save();
            return;
        }

        const target = event.target as HTMLElement;
        if (
            ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) ||
            target.isContentEditable
        )
            return;

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
            const ids = this._selectionIds();
            if (ids.length) this.state.duplicateObjects(ids);
            return;
        }
        if (mod) return;

        if (event.key === 'Escape') {
            this.state.select(null);
            this.state.clearMultiSelect();
            this.state.cancelPlacing();
            this.canvas()?.cancelDrawing();
            if (this.state.active_tool() === 'wall')
                this.state.setTool('select');
            return;
        }
        if (event.key === '?') {
            this.openShortcuts();
            return;
        }

        // A focused button, select or other control keeps its own keys
        const canvas = this.canvas();
        const on_canvas = !!canvas?.ownsKey(target);
        // A row picked in the Objects list keeps focus, and Delete still applies to it
        const in_object_list = !!target.closest('map-studio-object-list-panel');

        // While a polygon is being drawn, these keys edit it, not the selection
        if (canvas?.outline_points().length && on_canvas) {
            if (event.key === 'Enter') {
                event.preventDefault();
                canvas.finishPolygon();
                return;
            }
            if (event.key === 'Backspace' || event.key === 'Delete') {
                event.preventDefault();
                canvas.removeLastPoint();
                return;
            }
        }
        if (event.key === 'Delete' || event.key === 'Backspace') {
            const ids = this._selectionIds();
            if ((on_canvas || in_object_list) && ids.length) {
                event.preventDefault();
                this.state.deleteObjects(ids);
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
