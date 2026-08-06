import { Injectable, computed, inject, signal } from '@angular/core';

import { AsyncHandler } from '@placeos/common';

import type { DetectedRoom } from '../data/floorplan-ai.service';
import { PlaceOSService } from '../data/placeos.service';
import { StoreService } from '../data/store.service';
import {
    AvailabilityState,
    EditorLayer,
    EditorState,
    Floorplan,
    MapObject,
    MapObjectType,
} from '../data/types';
import { cycleState, defaultStateFor, getStatesForType } from './availability';
import {
    AMENITY_ICONS,
    DESK_LAYOUTS,
    EditorMode,
    FURNITURE_ASSETS,
    TYPE_COLORS,
    Tool,
    layerToObjectType,
} from './constants';
import type { Point } from './geometry';
import { boundsOf } from './geometry';

export const DEFAULT_LAYERS: EditorLayer[] = [
    {
        id: 'guide',
        name: 'Guide',
        visible: true,
        locked: true,
        opacity: 0.5,
        order: -1,
    },
    {
        id: 'background',
        name: 'Background',
        visible: true,
        locked: false,
        opacity: 1,
        order: 0,
    },
    {
        id: 'walls',
        name: 'Walls',
        visible: true,
        locked: false,
        opacity: 1,
        order: 1,
    },
    {
        id: 'rooms',
        name: 'Rooms',
        visible: true,
        locked: false,
        opacity: 1,
        order: 2,
    },
    {
        id: 'desks',
        name: 'Desks',
        visible: true,
        locked: false,
        opacity: 1,
        order: 3,
    },
    {
        id: 'lockers',
        name: 'Lockers',
        visible: true,
        locked: false,
        opacity: 1,
        order: 4,
    },
    {
        id: 'zones',
        name: 'Zones',
        visible: true,
        locked: false,
        opacity: 1,
        order: 5,
    },
    {
        id: 'amenities',
        name: 'Amenities',
        visible: true,
        locked: false,
        opacity: 1,
        order: 6,
    },
    {
        id: 'labels',
        name: 'Labels',
        visible: true,
        locked: false,
        opacity: 1,
        order: 7,
    },
];

const HISTORY_LIMIT = 50;

/** Default place-tool footprint per layer */
const PLACE_SIZES: Record<string, { width: number; height: number }> = {
    desks: { width: 30, height: 20 },
    rooms: { width: 80, height: 60 },
};

/**
 * Editor document state: the floorplan, its objects and layers, the current
 * tool, and undo history. Persistence goes through {@link StoreService}, which
 * writes to IndexedDB.
 */
@Injectable()
export class EditorStateService extends AsyncHandler {
    private readonly _store = inject(StoreService);
    private readonly _placeos = inject(PlaceOSService);

    private readonly _floorplan = signal<Floorplan | null>(null);
    private readonly _objects = signal<MapObject[]>([]);
    private readonly _layers = signal<EditorLayer[]>(DEFAULT_LAYERS);
    private readonly _selected_id = signal<string | null>(null);
    private readonly _active_tool = signal<Tool>('select');
    private readonly _active_layer_id = signal('rooms');
    private readonly _mode = signal<EditorMode>('design');
    private readonly _zoom = signal(1);
    private readonly _grid_enabled = signal(true);
    private readonly _snap_enabled = signal(true);
    private readonly _grid_size = signal(20);
    private readonly _dirty = signal(false);
    private readonly _saving = signal(false);
    private readonly _last_saved = signal<Date | null>(null);
    private readonly _loading = signal(true);
    private readonly _error = signal('');
    private readonly _image_url = signal<string | null>(null);
    private readonly _image_dims = signal<{
        width: number;
        height: number;
    } | null>(null);
    private readonly _place_size = signal({ width: 80, height: 60 });
    private readonly _can_undo = signal(false);
    private readonly _can_redo = signal(false);

    private readonly _availability_enabled = signal(false);
    private readonly _availability_states = signal<
        Record<string, AvailabilityState>
    >({});
    private readonly _multi_select = signal<string[]>([]);
    /** Asset id awaiting a click on the canvas, by kind */
    private readonly _placing = signal<{
        kind: 'amenity' | 'furniture' | 'desk-layout';
        id: string;
    } | null>(null);

    private _undo_stack: MapObject[][] = [];
    private _redo_stack: MapObject[][] = [];

    public readonly floorplan = this._floorplan.asReadonly();
    public readonly objects = this._objects.asReadonly();
    public readonly layers = this._layers.asReadonly();
    public readonly selected_id = this._selected_id.asReadonly();
    public readonly active_tool = this._active_tool.asReadonly();
    public readonly active_layer_id = this._active_layer_id.asReadonly();
    public readonly mode = this._mode.asReadonly();
    public readonly zoom = this._zoom.asReadonly();
    public readonly grid_enabled = this._grid_enabled.asReadonly();
    public readonly snap_enabled = this._snap_enabled.asReadonly();
    public readonly grid_size = this._grid_size.asReadonly();
    public readonly dirty = this._dirty.asReadonly();
    public readonly saving = this._saving.asReadonly();
    public readonly last_saved = this._last_saved.asReadonly();
    public readonly loading = this._loading.asReadonly();
    public readonly error = this._error.asReadonly();
    public readonly image_url = this._image_url.asReadonly();
    public readonly image_dims = this._image_dims.asReadonly();
    public readonly place_size = this._place_size.asReadonly();
    public readonly can_undo = this._can_undo.asReadonly();
    public readonly can_redo = this._can_redo.asReadonly();
    public readonly availability_enabled =
        this._availability_enabled.asReadonly();
    public readonly availability_states =
        this._availability_states.asReadonly();
    public readonly multi_select = this._multi_select.asReadonly();
    public readonly placing = this._placing.asReadonly();

    public readonly selected = computed(
        () => this._objects().find((o) => o.id === this._selected_id()) ?? null,
    );

    /** Layers sorted by paint order */
    public readonly sorted_layers = computed(() =>
        [...this._layers()].sort((a, b) => a.order - b.order),
    );

    public readonly visible_objects = computed(() => {
        const visible = new Set(
            this._layers()
                .filter((l) => l.visible)
                .map((l) => l.id),
        );
        return this._objects().filter((o) => o.visible && visible.has(o.layer));
    });

    public readonly layer_opacity = computed(
        () => new Map(this._layers().map((l) => [l.id, l.opacity])),
    );

    public readonly canvas_width = computed(() =>
        Math.max(
            100,
            this._image_dims()?.width ??
                this._floorplan()?.canvas_width ??
                1000,
        ),
    );

    public readonly canvas_height = computed(() =>
        Math.max(
            100,
            this._image_dims()?.height ??
                this._floorplan()?.canvas_height ??
                800,
        ),
    );

    /** Stroke width scaled so lines stay legible on large canvases */
    public readonly stroke_width = computed(() =>
        Math.max(2, Math.min(this.canvas_width() / 500, 6)),
    );

    public readonly handle_radius = computed(() =>
        Math.max(6, this.stroke_width() * 2),
    );

    private _floorplan_id = '';

    // ── Loading ─────────────────────────────────────────────────────────────

    public async load(floorplan_id: string) {
        this._floorplan_id = floorplan_id;
        this._loading.set(true);
        this._error.set('');
        try {
            let floorplan = await this._store.getFloorplan(floorplan_id);
            const server = await this._store
                .getNewerServerFloorplan(floorplan_id)
                .catch(() => null);
            if (
                server?.updated_at &&
                confirm(
                    `A newer server version was saved ${new Date(
                        server.updated_at,
                    ).toLocaleString()}. Use it?\n\nCancel keeps this local version.`,
                )
            ) {
                floorplan = await this._store.applyServerFloorplan(
                    floorplan_id,
                    server,
                );
            }
            let objects = await this._store.listObjects(floorplan_id);
            let imported_svg = false;
            const svg_check_key = `map-studio.svg-import.${floorplan_id}`;
            if (
                floorplan.level_zone_id &&
                !floorplan.canvas_state &&
                !floorplan.svg_output &&
                !floorplan.source_image_path &&
                !objects.length &&
                !localStorage.getItem(svg_check_key)
            ) {
                const svg = await this._placeos
                    .getLevelSvg(floorplan.level_zone_id)
                    .catch(() => null);
                if (svg) {
                    localStorage.setItem(svg_check_key, 'checked');
                    if (
                        confirm(
                            'This level already has an SVG map. Import it into this floorplan?\n\nCancel starts with a blank floorplan.',
                        )
                    ) {
                        floorplan = await this._store.importLevelSvg(
                            floorplan_id,
                            svg,
                        );
                        objects = await this._store.listObjects(floorplan_id);
                        imported_svg = true;
                    }
                }
            }
            this._floorplan.set(floorplan);
            this._objects.set(objects);

            const state = floorplan.canvas_state;
            if (state) {
                if (state.viewport?.zoom) this.setZoom(state.viewport.zoom);
                if (state.gridSize) this._grid_size.set(state.gridSize);
                this._grid_enabled.set(state.gridEnabled ?? true);
                this._snap_enabled.set(state.snapEnabled ?? true);
                if (state.layers?.length) {
                    // Merge in any default layer the saved state predates
                    const saved = new Set(state.layers.map((l) => l.id));
                    this._layers.set([
                        ...state.layers,
                        ...DEFAULT_LAYERS.filter((l) => !saved.has(l.id)),
                    ]);
                }
            }

            await this._loadImage(floorplan_id);
            if (imported_svg) await this.save();
        } catch (error) {
            this._error.set(this._message(error, 'Failed to load floorplan'));
        } finally {
            this._loading.set(false);
        }
    }

    private async _loadImage(floorplan_id: string) {
        const url = await this._store.getSourceImageUrl(floorplan_id);
        this._image_url.set(url);
        if (!url) {
            this._image_dims.set(null);
            return;
        }
        const dims = await new Promise<{
            width: number;
            height: number;
        } | null>((resolve) => {
            const img = new Image();
            img.onload = () =>
                resolve({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                });
            img.onerror = () => resolve(null);
            img.src = url;
        });
        this._image_dims.set(dims);
    }

    public async uploadSourceImage(file: File) {
        try {
            await this._store.uploadSourceImage(this._floorplan_id, file);
            this._floorplan.set(
                await this._store.getFloorplan(this._floorplan_id),
            );
            await this._loadImage(this._floorplan_id);
        } catch (error) {
            this._error.set(this._message(error, 'Upload failed'));
        }
    }

    // ── Tool and view state ─────────────────────────────────────────────────

    public setTool(tool: Tool) {
        this._active_tool.set(tool);
    }

    public setMode(mode: EditorMode) {
        this._mode.set(mode);
    }

    public setActiveLayer(id: string) {
        this._active_layer_id.set(id);
        const size = PLACE_SIZES[id];
        if (size) this._place_size.set(size);
    }

    public setPlaceSize(width: number, height: number) {
        this._place_size.set({ width, height });
    }

    public select(id: string | null) {
        this._selected_id.set(id);
    }

    // View settings ride along with the next real save — on their own they are
    // not unsaved work, and flagging them makes the leave prompt cry wolf.
    public setZoom(zoom: number) {
        this._zoom.set(Math.min(Math.max(zoom, 0.8), 10));
    }

    public zoomBy(factor: number) {
        this.setZoom(this._zoom() * factor);
    }

    public toggleGrid() {
        this._grid_enabled.update((v) => !v);
    }

    public toggleSnap() {
        this._snap_enabled.update((v) => !v);
    }

    public setGridSize(size: number) {
        this._grid_size.set(Math.min(Math.max(size || 20, 5), 100));
    }

    // ── Layers ──────────────────────────────────────────────────────────────

    public setLayers(layers: EditorLayer[]) {
        this._layers.set(layers);
        this._dirty.set(true);
    }

    public updateLayer(id: string, updates: Partial<EditorLayer>) {
        this.setLayers(
            this._layers().map((l) => (l.id === id ? { ...l, ...updates } : l)),
        );
    }

    public addLayer(name: string) {
        const order = this._layers().reduce((m, l) => Math.max(m, l.order), 0);
        this.setLayers([
            ...this._layers(),
            {
                id: `layer-${Date.now()}`,
                name,
                visible: true,
                locked: false,
                opacity: 1,
                order: order + 1,
            },
        ]);
    }

    public deleteLayer(id: string) {
        const remaining = this._layers().filter((l) => l.id !== id);
        this.setLayers(remaining);
        if (this._active_layer_id() === id)
            this.setActiveLayer(remaining[0]?.id ?? 'rooms');
    }

    /** Swap a layer with its neighbour in paint order */
    public moveLayer(id: string, direction: 'up' | 'down') {
        const sorted = this.sorted_layers();
        const index = sorted.findIndex((l) => l.id === id);
        const swap = direction === 'up' ? index - 1 : index + 1;
        if (index < 0 || swap < 0 || swap >= sorted.length) return;
        this.setLayers(
            this._layers().map((layer) => {
                if (layer.id === sorted[index].id)
                    return { ...layer, order: sorted[swap].order };
                if (layer.id === sorted[swap].id)
                    return { ...layer, order: sorted[index].order };
                return layer;
            }),
        );
    }

    // ── Objects ─────────────────────────────────────────────────────────────

    /** Next label and svg id for a new object of this type */
    public nextNaming(type: MapObjectType) {
        const count = this._objects().filter(
            (o) => o.object_type === type,
        ).length;
        const name = type.charAt(0).toUpperCase() + type.slice(1);
        return {
            label: `${name} ${count + 1}`,
            svg_id: `${type}-${String(count + 1).padStart(3, '0')}`,
        };
    }

    /** Fill and stroke a new object of this type should take */
    public colorsFor(type: MapObjectType) {
        const color = TYPE_COLORS[type] ?? '#4b5563';
        return { fill_color: `${color}55`, stroke_color: color };
    }

    public async createObject(
        partial: Partial<MapObject>,
        options: { select?: boolean } = {},
    ): Promise<MapObject> {
        this.pushHistory();
        const created = await this._store.createObject(this._floorplan_id, {
            z_index: this._objects().length,
            opacity: 1,
            visible: true,
            locked: false,
            ...partial,
        });
        this._objects.update((list) => [...list, created]);
        if (options.select !== false) this._selected_id.set(created.id);
        this.markDirty();
        return created;
    }

    /** Creates an object on the active layer with default naming and colours */
    public createOnActiveLayer(
        geometry: MapObject['geometry'],
        extra: Partial<MapObject> = {},
    ) {
        const layer = this._active_layer_id();
        const type = layerToObjectType(layer);
        const { label, svg_id } = this.nextNaming(type);
        return this.createObject({
            object_type: type,
            label,
            svg_id,
            geometry,
            layer,
            ...this.colorsFor(type),
            ...(type === 'desk'
                ? { metadata: { furnitureType: 'desk-single' } }
                : {}),
            ...extra,
        });
    }

    /** Applies an in-memory change without touching history or storage */
    public patchLocal(id: string, updates: Partial<MapObject>) {
        this._objects.update((list) =>
            list.map((o) => (o.id === id ? { ...o, ...updates } : o)),
        );
    }

    public async updateObject(id: string, updates: Partial<MapObject>) {
        this.patchLocal(id, updates);
        this.markDirty();
        await this._store
            .updateObject(this._floorplan_id, id, updates)
            .catch(() => undefined);
    }

    /** Persists whatever geometry the object currently holds after a drag */
    public async commitGeometry(id: string) {
        const object = this._objects().find((o) => o.id === id);
        if (!object) return;
        this.markDirty();
        await this._store
            .updateObject(this._floorplan_id, id, { geometry: object.geometry })
            .catch(() => undefined);
    }

    public async deleteObject(id: string) {
        this.pushHistory();
        this._objects.update((list) => list.filter((o) => o.id !== id));
        if (this._selected_id() === id) this._selected_id.set(null);
        this.markDirty();
        await this._store
            .deleteObject(this._floorplan_id, id)
            .catch(() => undefined);
    }

    public async duplicateObject(id: string): Promise<MapObject | null> {
        const source = this._objects().find((o) => o.id === id);
        if (!source) return null;
        const geometry = { ...source.geometry };
        if (geometry.x != null) geometry.x += 20;
        if (geometry.y != null) geometry.y += 20;
        const { svg_id } = this.nextNaming(source.object_type);
        const { id: _ignored, ...rest } = source;
        void _ignored;
        return this.createObject({
            ...rest,
            label: `${source.label || source.object_type} (copy)`,
            svg_id,
            geometry,
        });
    }

    public async bulkUpdate(ids: string[], updates: Partial<MapObject>) {
        this.pushHistory();
        this._objects.update((list) =>
            list.map((o) => (ids.includes(o.id) ? { ...o, ...updates } : o)),
        );
        this.markDirty();
        await Promise.all(
            ids.map((id) =>
                this._store
                    .updateObject(this._floorplan_id, id, updates)
                    .catch(() => undefined),
            ),
        );
    }

    /** Adds or replaces the single editable outline generated by AI. */
    public async applyAiOutline(points: Point[]): Promise<MapObject> {
        const geometry: MapObject['geometry'] = {
            type: 'polygon',
            points,
            ...boundsOf(points),
        };
        const existing = this._objects().find(
            (object) => object.svg_id === 'ai-outline',
        );
        const values: Partial<MapObject> = {
            object_type: 'area',
            svg_id: 'ai-outline',
            label: 'Building Outline',
            geometry,
            layer: 'background',
            fill_color: 'rgba(107,114,128,0.10)',
            stroke_color: '#1e293b',
            opacity: 1,
            z_index: 0,
            locked: false,
            visible: true,
            metadata: {
                ...(existing?.metadata ?? {}),
                ai_detected: true,
            },
        };

        if (!existing) return this.createObject(values);

        this.pushHistory();
        this.patchLocal(existing.id, values);
        this._selected_id.set(existing.id);
        this.markDirty();
        await this._store.updateObject(this._floorplan_id, existing.id, values);
        return { ...existing, ...values } as MapObject;
    }

    /** Replaces rooms from the previous AI run as one undoable operation. */
    public async replaceAiRooms(rooms: DetectedRoom[]): Promise<number> {
        if (!rooms.length) return 0;

        this.pushHistory();
        const previous = this._objects().filter(
            (object) =>
                object.object_type === 'room' &&
                object.metadata?.['ai_detected'] === true,
        );
        const previous_ids = new Set(previous.map((object) => object.id));
        const kept = this._objects().filter(
            (object) => !previous_ids.has(object.id),
        );

        await Promise.all(
            previous.map((object) =>
                this._store.deleteObject(this._floorplan_id, object.id),
            ),
        );
        const created = await Promise.all(
            rooms.map((room, index) =>
                this._store.createObject(this._floorplan_id, {
                    object_type: 'room',
                    svg_id: room.id,
                    label: room.label,
                    geometry: {
                        type: 'rect',
                        x: room.x,
                        y: room.y,
                        width: room.width,
                        height: room.height,
                    },
                    layer: 'rooms',
                    fill_color: '#7c3aed55',
                    stroke_color: '#7c3aed',
                    opacity: 1,
                    z_index: 5 + index,
                    locked: false,
                    visible: true,
                    metadata: {
                        ai_detected: true,
                        room_type: room.type,
                    },
                }),
            ),
        );
        this._objects.set([...kept, ...created]);
        this._selected_id.set(null);
        this.markDirty();
        return created.length;
    }

    // ── Placement modes ─────────────────────────────────────────────────────

    /** Arms the canvas to drop an asset at the next click */
    public startPlacing(
        kind: 'amenity' | 'furniture' | 'desk-layout',
        id: string,
    ) {
        this._placing.set({ kind, id });
        this._active_tool.set('select');
    }

    public cancelPlacing() {
        this._placing.set(null);
    }

    /** Drops whatever asset is armed at the given canvas point */
    public async placeAt(x: number, y: number): Promise<boolean> {
        const placing = this._placing();
        if (!placing) return false;
        if (placing.kind === 'amenity')
            await this._placeAmenity(placing.id, x, y);
        else if (placing.kind === 'furniture')
            await this._placeFurniture(placing.id, x, y);
        else await this._placeDeskLayout(placing.id, x, y);
        return true;
    }

    private async _placeAmenity(id: string, x: number, y: number) {
        const asset = AMENITY_ICONS.find((a) => a.id === id);
        const count = this._objects().filter(
            (o) => o.object_type === 'amenity',
        ).length;
        await this.createObject({
            object_type: 'amenity',
            label: asset?.label ?? 'Amenity',
            svg_id: `amenity-${String(count + 1).padStart(3, '0')}`,
            geometry: { type: 'circle', x, y, r: 12 },
            layer: 'amenities',
            fill_color: '#dc2626',
            stroke_color: '#ffffff',
            metadata: { icon: id },
        });
    }

    private async _placeFurniture(id: string, x: number, y: number) {
        const asset = FURNITURE_ASSETS.find((a) => a.id === id);
        if (!asset) return;
        const count = this._objects().filter(
            (o) => o.object_type === 'decorative',
        ).length;
        await this.createObject({
            object_type: 'decorative',
            label: asset.label,
            svg_id: `furniture-${String(count + 1).padStart(3, '0')}`,
            geometry: {
                type: 'rect',
                x: x - asset.w / 2,
                y: y - asset.h / 2,
                width: asset.w,
                height: asset.h,
            },
            layer: 'background',
            fill_color: `${asset.color}88`,
            stroke_color: asset.color,
            metadata: { furnitureType: asset.id },
        });
    }

    /** Places a whole grid of desks as one group */
    private async _placeDeskLayout(id: string, x: number, y: number) {
        const layout = DESK_LAYOUTS.find((l) => l.id === id);
        if (!layout) return;
        const group_id = `deskgroup-${this._objects().length}-${layout.id}`;
        const total_w =
            layout.cols * layout.deskW + (layout.cols - 1) * layout.gap;
        const total_h =
            layout.rows * layout.deskH + (layout.rows - 1) * layout.gap;
        const start_x = x - total_w / 2;
        const start_y = y - total_h / 2;
        const existing = this._objects().filter(
            (o) => o.object_type === 'desk',
        ).length;

        this.pushHistory();
        this._placing.set(null);
        for (let row = 0; row < layout.rows; row++) {
            for (let col = 0; col < layout.cols; col++) {
                const index = existing + row * layout.cols + col + 1;
                await this.createObject(
                    {
                        object_type: 'desk',
                        label: `Desk ${index}`,
                        svg_id: `desk-${String(index).padStart(3, '0')}`,
                        geometry: {
                            type: 'rect',
                            x: start_x + col * (layout.deskW + layout.gap),
                            y: start_y + row * (layout.deskH + layout.gap),
                            width: layout.deskW,
                            height: layout.deskH,
                        },
                        layer: 'desks',
                        ...this.colorsFor('desk'),
                        group_id,
                        metadata: {
                            furnitureType: 'desk-single',
                            groupId: group_id,
                        },
                    },
                    { select: false },
                );
            }
        }
    }

    // ── Availability preview ────────────────────────────────────────────────

    public setAvailabilityEnabled(enabled: boolean) {
        this._availability_enabled.set(enabled);
    }

    public setAvailabilityState(id: string, state: AvailabilityState) {
        this._availability_states.update((states) => ({
            ...states,
            [id]: state,
        }));
    }

    /** Advances one object to the next state for its type */
    public cycleAvailability(object: MapObject) {
        this.setAvailabilityState(
            object.id,
            cycleState(
                this._availability_states()[object.id],
                object.object_type,
            ),
        );
    }

    public randomiseAvailability() {
        const states: Record<string, AvailabilityState> = {};
        for (const object of this.bookable()) {
            const options = getStatesForType(object.object_type);
            states[object.id] =
                options[Math.floor(Math.random() * options.length)];
        }
        this._availability_states.set(states);
    }

    public resetAvailability() {
        const states: Record<string, AvailabilityState> = {};
        for (const object of this.bookable()) {
            states[object.id] = defaultStateFor(object.object_type);
        }
        this._availability_states.set(states);
    }

    public readonly bookable = computed(() =>
        this._objects().filter(
            (o) => o.object_type === 'room' || o.object_type === 'desk',
        ),
    );

    // ── Multi-select ────────────────────────────────────────────────────────

    public setMultiSelect(ids: string[]) {
        const objects = this._objects();
        const layer = objects.find((object) => ids.includes(object.id))?.layer;
        const selection = layer
            ? ids.filter(
                  (id, index) =>
                      ids.indexOf(id) === index &&
                      objects.some(
                          (object) =>
                              object.id === id && object.layer === layer,
                      ),
              )
            : [];
        this._multi_select.set(selection);
        this._selected_id.set(selection[0] ?? null);
    }

    public toggleMultiSelect(id: string) {
        const object = this._objects().find((item) => item.id === id);
        if (!object) return;
        this._multi_select.update((ids) => {
            if (ids.includes(id)) return ids.filter((item) => item !== id);
            const selected = this._objects().find((item) =>
                ids.includes(item.id),
            );
            return selected && selected.layer !== object.layer
                ? ids
                : [...ids, id];
        });
    }

    public clearMultiSelect() {
        this._multi_select.set([]);
    }

    /** Ids a drag should move — the multi-selection, or just the dragged object */
    public movingIds(dragged_id: string): string[] {
        const selection = this._multi_select();
        return selection.length > 1 && selection.includes(dragged_id)
            ? selection
            : [dragged_id];
    }

    // ── Bulk labelling ──────────────────────────────────────────────────────

    /**
     * Renumbers every object of the same type as `type`, giving each a
     * sequential svg id. Labels are only rewritten when they still look like
     * the auto-generated default.
     */
    public async autoNumber(
        type: MapObjectType,
        prefix: string,
        start_from: number,
    ) {
        const matching = this._objects().filter((o) => o.object_type === type);
        if (!matching.length) return;
        const name = type.charAt(0).toUpperCase() + type.slice(1);
        const isDefault = new RegExp(`^${type}\\s+\\d+$`, 'i');

        this.pushHistory();
        for (const [index, object] of matching.entries()) {
            const number = start_from + index;
            const updates: Partial<MapObject> = {
                svg_id: `${prefix}${String(number).padStart(3, '0')}`,
            };
            if (!object.label || isDefault.test(object.label)) {
                updates.label = `${name} ${number}`;
            }
            await this.updateObject(object.id, updates);
        }
    }

    // ── History ─────────────────────────────────────────────────────────────

    /**
     * Records the objects as they stand so the mutation about to happen can be
     * undone. Call this immediately *before* changing anything.
     */
    public pushHistory() {
        const current = JSON.stringify(this._objects());
        const top = this._undo_stack.at(-1);
        // A click that changes nothing must not fill the stack
        if (top && JSON.stringify(top) === current) return;
        this._undo_stack.push(JSON.parse(current));
        if (this._undo_stack.length > HISTORY_LIMIT) this._undo_stack.shift();
        this._redo_stack = [];
        this._syncHistoryFlags();
    }

    public undo() {
        if (!this._undo_stack.length) return;
        const current = this._cloneObjects();
        const previous = this._undo_stack.pop() as MapObject[];
        this._redo_stack.push(current);
        this._applyHistory(previous, current);
    }

    public redo() {
        if (!this._redo_stack.length) return;
        const current = this._cloneObjects();
        const next = this._redo_stack.pop() as MapObject[];
        this._undo_stack.push(current);
        this._applyHistory(next, current);
    }

    private _cloneObjects(): MapObject[] {
        return JSON.parse(JSON.stringify(this._objects()));
    }

    private _applyHistory(target: MapObject[], current: MapObject[]) {
        this._objects.set(target);
        this._selected_id.set(null);
        this.markDirty();
        this._syncHistoryFlags();
        // Reconcile storage: drop what the target no longer has, re-write the rest
        const kept = new Set(target.map((o) => o.id));
        for (const object of current) {
            if (!kept.has(object.id)) {
                this._store
                    .deleteObject(this._floorplan_id, object.id)
                    .catch(() => undefined);
            }
        }
        if (target.length) {
            this._store
                .bulkUpsertObjects(this._floorplan_id, target)
                .catch(() => undefined);
        }
    }

    private _syncHistoryFlags() {
        this._can_undo.set(this._undo_stack.length > 0);
        this._can_redo.set(this._redo_stack.length > 0);
    }

    // ── Saving ──────────────────────────────────────────────────────────────

    /** Flags unsaved work and restarts the auto-save countdown */
    public markDirty() {
        this._dirty.set(true);
        this.timeout('save', () => this.save(), 10_000);
    }

    public async save() {
        if (!this._floorplan_id) return;
        this.clearTimeout('save');
        this._saving.set(true);
        try {
            const selected = this._selected_id();
            const state: EditorState = {
                objects: this._objects(),
                viewport: { x: 0, y: 0, zoom: this._zoom() },
                selectedIds: selected ? [selected] : [],
                layers: this._layers(),
                gridEnabled: this._grid_enabled(),
                snapEnabled: this._snap_enabled(),
                gridSize: this._grid_size(),
            };
            await this._store.saveCanvasState(this._floorplan_id, state);
            this._dirty.set(false);
            this._last_saved.set(new Date());
        } catch (error) {
            this._error.set(this._message(error, 'Failed to save'));
        } finally {
            this._saving.set(false);
        }
    }

    public async exportCsv() {
        const csv = await this._store.exportObjectsCsv(this._floorplan_id);
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = `objects-${this._floorplan_id}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    }

    public async importCsv(file: File) {
        await this._store.importObjectsCsv(
            this._floorplan_id,
            await file.text(),
        );
        this._objects.set(await this._store.listObjects(this._floorplan_id));
        this.markDirty();
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
