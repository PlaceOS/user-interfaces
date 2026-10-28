import { Component, inject, signal } from '@angular/core';

import { MapObject, MapObjectType, PlaceOSEntityType } from '../data/types';
import { HEX_COLOR_RE, OBJECT_TYPES } from './constants';
import { EditorStateService } from './editor-state.service';

const ENTITY_TYPES: (PlaceOSEntityType | '')[] = [
    '',
    'system',
    'module',
    'zone',
];

/** PlaceOS id shape for each entity type */
const ENTITY_ID_PLACEHOLDERS: Record<PlaceOSEntityType, string> = {
    system: 'sys-XXXXXXXX',
    module: 'mod-XXXXXXXX',
    zone: 'zone-XXXXXXXX',
};

type EditableField =
    | 'label'
    | 'svg_id'
    | 'entity_id'
    | 'object_type'
    | 'entity_type'
    | 'fill_color'
    | 'stroke_color'
    | 'opacity'
    | 'capacity'
    | 'locked'
    | 'tags'
    | 'width'
    | 'height'
    | 'rotation';

/** Fields with typed values that are validated, and reverted when invalid */
type CheckedField =
    | 'width'
    | 'height'
    | 'rotation'
    | 'capacity'
    | 'fill_color'
    | 'stroke_color';

/** Slug an object's label into a stable svg id */
function generateSvgId(type: MapObjectType, label: string | null): string {
    const base = label
        ? label
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
        : 'unnamed';
    return `${type}-${base}`;
}

@Component({
    selector: 'map-studio-properties-panel',
    template: `
        @if (state.selected(); as object) {
            <div class="flex h-full flex-col">
                <div
                    class="border-base-300 flex items-center justify-between border-b px-3 py-2.5"
                >
                    <span class="text-xs font-bold">Properties</span>
                    <span
                        class="bg-base-200 text-base-content/60 rounded-full px-2 py-0.5 text-xs font-semibold capitalize"
                    >
                        {{ object.object_type }}
                    </span>
                </div>

                <div class="flex-1 space-y-3 overflow-y-auto p-3">
                    <div>
                        <label [attr.for]="'pp-label'">Label</label>
                        <input
                            id="pp-label"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                            [value]="object.label ?? ''"
                            placeholder="Enter label..."
                            (change)="set(object, 'label', asValue($event))"
                        />
                    </div>

                    <div>
                        <label for="pp-type">Object Type</label>
                        <select
                            id="pp-type"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                            (change)="
                                set(object, 'object_type', asValue($event))
                            "
                        >
                            @for (type of object_types; track type) {
                                <option
                                    [value]="type"
                                    [selected]="type === object.object_type"
                                >
                                    {{ type }}
                                </option>
                            }
                        </select>
                    </div>

                    <div>
                        <label for="pp-svg-id">SVG ID</label>
                        <div class="flex gap-1.5">
                            <input
                                id="pp-svg-id"
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                [value]="object.svg_id ?? ''"
                                [placeholder]="suggestedId(object)"
                                (change)="
                                    set(object, 'svg_id', asValue($event))
                                "
                            />
                            <button
                                btn
                                class="inverse min-h-0! px-2! py-1! text-xs"
                                title="Auto-generate from type and label"
                                (click)="
                                    set(object, 'svg_id', suggestedId(object))
                                "
                            >
                                Auto
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label for="pp-x">X</label>
                            <input
                                id="pp-x"
                                type="number"
                                class="border-base-300 bg-base-200 w-full rounded border px-2 py-1 text-xs"
                                [value]="rounded(object.geometry.x)"
                                readonly
                            />
                        </div>
                        <div>
                            <label for="pp-y">Y</label>
                            <input
                                id="pp-y"
                                type="number"
                                class="border-base-300 bg-base-200 w-full rounded border px-2 py-1 text-xs"
                                [value]="rounded(object.geometry.y)"
                                readonly
                            />
                        </div>
                        <p class="text-base-content/60 col-span-2 text-xs">
                            Drag the object on the canvas to move it.
                        </p>
                        <div>
                            <label for="pp-w">Width</label>
                            <input
                                id="pp-w"
                                type="number"
                                min="1"
                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                [value]="fieldText(object, 'width')"
                                (change)="edit(object, 'width', $event)"
                            />
                        </div>
                        <div>
                            <label for="pp-h">Height</label>
                            <input
                                id="pp-h"
                                type="number"
                                min="1"
                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                [value]="fieldText(object, 'height')"
                                (change)="edit(object, 'height', $event)"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="pp-rotation">Rotation (deg)</label>
                        <input
                            id="pp-rotation"
                            type="number"
                            min="0"
                            max="359"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                            [value]="fieldText(object, 'rotation')"
                            (change)="edit(object, 'rotation', $event)"
                        />
                    </div>

                    @if (object.object_type === 'room') {
                        <div>
                            <label for="pp-capacity">Capacity</label>
                            <input
                                id="pp-capacity"
                                type="number"
                                min="0"
                                step="1"
                                placeholder="0"
                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                [value]="fieldText(object, 'capacity')"
                                (change)="edit(object, 'capacity', $event)"
                            />
                        </div>
                    }

                    <div>
                        <label for="pp-fill">Fill Colour</label>
                        <div class="flex gap-1.5">
                            <input
                                id="pp-fill"
                                type="color"
                                class="border-base-300 h-7 w-10 rounded border"
                                [value]="hexOf(object.fill_color, '#cccccc')"
                                (input)="preview(object, 'fill_color', $event)"
                                (change)="
                                    commitPreview(object, 'fill_color', $event)
                                "
                            />
                            <input
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                aria-label="Fill colour hex"
                                [value]="fieldText(object, 'fill_color')"
                                placeholder="#cccccc"
                                (change)="edit(object, 'fill_color', $event)"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="pp-stroke">Stroke Colour</label>
                        <div class="flex gap-1.5">
                            <input
                                id="pp-stroke"
                                type="color"
                                class="border-base-300 h-7 w-10 rounded border"
                                [value]="hexOf(object.stroke_color, '#333333')"
                                (input)="
                                    preview(object, 'stroke_color', $event)
                                "
                                (change)="
                                    commitPreview(
                                        object,
                                        'stroke_color',
                                        $event
                                    )
                                "
                            />
                            <input
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                aria-label="Stroke colour hex"
                                [value]="fieldText(object, 'stroke_color')"
                                placeholder="#333333"
                                (change)="edit(object, 'stroke_color', $event)"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="pp-opacity">
                            Opacity {{ percent(object.opacity) }}
                        </label>
                        <input
                            id="pp-opacity"
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            class="accent-primary w-full"
                            [value]="object.opacity"
                            (input)="preview(object, 'opacity', $event)"
                            (change)="commitPreview(object, 'opacity', $event)"
                        />
                    </div>

                    <hr class="border-base-300" />
                    <div
                        class="text-base-content/60 text-xs font-bold uppercase"
                    >
                        PlaceOS Binding
                    </div>

                    <div>
                        <label for="pp-entity-type">Entity Type</label>
                        <select
                            id="pp-entity-type"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                            (change)="
                                set(object, 'entity_type', asValue($event))
                            "
                        >
                            @for (type of entity_types; track type) {
                                <option
                                    [value]="type"
                                    [selected]="
                                        type === (object.entity_type ?? '')
                                    "
                                >
                                    {{ type || '-- None --' }}
                                </option>
                            }
                        </select>
                    </div>

                    <div>
                        <label for="pp-entity-id">Entity ID</label>
                        <input
                            id="pp-entity-id"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs disabled:opacity-40"
                            [value]="object.entity_id ?? ''"
                            [placeholder]="
                                object.entity_type
                                    ? entity_id_placeholders[object.entity_type]
                                    : ''
                            "
                            [disabled]="!object.entity_type"
                            (change)="set(object, 'entity_id', asValue($event))"
                        />
                    </div>

                    <div>
                        <label for="pp-tags">Tags</label>
                        <input
                            id="pp-tags"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                            [value]="(object.tags ?? []).join(', ')"
                            placeholder="tag1, tag2, ..."
                            (change)="set(object, 'tags', asValue($event))"
                        />
                    </div>

                    <label class="flex items-center gap-2">
                        <input
                            type="checkbox"
                            class="accent-primary h-4 w-4"
                            [checked]="object.locked"
                            (change)="set(object, 'locked', checked($event))"
                        />
                        <span>Locked</span>
                    </label>

                    <button
                        btn
                        class="w-full"
                        [class]="confirm_delete() ? 'error' : 'inverse'"
                        (click)="remove(object)"
                        (blur)="confirm_delete.set(false)"
                    >
                        {{
                            confirm_delete()
                                ? 'Click again to confirm'
                                : 'Delete Object (Del)'
                        }}
                    </button>
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/60 flex h-full flex-col items-center justify-center gap-3 p-6 text-center"
            >
                <p class="text-xs">
                    Select an object on the canvas to view its properties.
                </p>
            </div>
        }
    `,
})
export class PropertiesPanelComponent {
    public readonly state = inject(EditorStateService);

    public readonly object_types = OBJECT_TYPES;
    public readonly entity_types = ENTITY_TYPES;
    public readonly confirm_delete = signal(false);

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement | HTMLSelectElement).value;

    public readonly checked = (event: Event) =>
        (event.target as HTMLInputElement).checked;

    public readonly percent = (value: number) => `${Math.round(value * 100)}%`;

    /** Drag-rotation lands on long floats — show something readable */
    public readonly rounded = (value: number | undefined) =>
        Math.round(value ?? 0);

    public readonly suggestedId = (object: MapObject) =>
        generateSvgId(object.object_type, object.label);

    /** Colour inputs only accept `#rrggbb`, so expand `#rgb` and fall back for rgba() values */
    public readonly hexOf = (color: string | null, fallback: string) => {
        if (!color || !HEX_COLOR_RE.test(color)) return fallback;
        return color.length === 4
            ? `#${[...color.slice(1)].map((c) => c + c).join('')}`
            : color;
    };

    public readonly entity_id_placeholders = ENTITY_ID_PLACEHOLDERS;

    /** `${object id}:${field}` of the slider or colour picker being dragged */
    private _live_key = '';

    /** Text shown in a validated field, so rejected input can revert to it */
    public fieldText(object: MapObject, field: CheckedField): string {
        switch (field) {
            case 'width':
            case 'height':
            case 'rotation':
                return String(this.rounded(object.geometry[field]));
            case 'capacity':
                return object.capacity == null ? '' : String(object.capacity);
            case 'fill_color':
            case 'stroke_color':
                return object[field] ?? '';
        }
    }

    /** Commits one field change as a single undo step */
    public set(
        object: MapObject,
        field: EditableField,
        value: string | boolean,
    ) {
        this._live_key = '';
        const updates = this._updates(object, field, value);
        if (!updates) return;
        this.state.pushHistory();
        this.state.updateObject(object.id, updates);
    }

    /**
     * Commits a typed value. The field then shows the stored value, so input
     * that is rejected reverts and input that is clamped shows the clamp.
     */
    public edit(object: MapObject, field: CheckedField, event: Event) {
        const input = event.target as HTMLInputElement;
        this.set(object, field, input.value);
        const current =
            this.state.objects().find((o) => o.id === object.id) ?? object;
        input.value = this.fieldText(current, field);
    }

    /**
     * Shows a slider or colour picker value while it drags. Only memory
     * changes, and the history entry is recorded once, before the first tick.
     */
    public preview(object: MapObject, field: EditableField, event: Event) {
        const updates = this._updates(object, field, this.asValue(event));
        if (!updates) return;
        const key = `${object.id}:${field}`;
        if (this._live_key !== key) {
            this.state.pushHistory();
            this._live_key = key;
        }
        this.state.patchLocal(object.id, updates);
    }

    /** Persists the value a drag ends on, reusing the history entry `preview` made */
    public commitPreview(
        object: MapObject,
        field: EditableField,
        event: Event,
    ) {
        const updates = this._updates(object, field, this.asValue(event));
        if (!updates) return;
        if (this._live_key !== `${object.id}:${field}`)
            this.state.pushHistory();
        this._live_key = '';
        this.state.updateObject(object.id, updates);
    }

    /** Turns a field value into an object update, or null when it is invalid */
    private _updates(
        object: MapObject,
        field: EditableField,
        value: string | boolean,
    ): Partial<MapObject> | null {
        const text = String(value).trim();
        const number = text === '' ? NaN : Number(text);
        switch (field) {
            case 'label':
            case 'svg_id':
            case 'entity_id':
                return { [field]: String(value) };
            case 'object_type':
                return { object_type: text as MapObjectType };
            case 'entity_type':
                // Without a type the id means nothing, so it goes too
                return text
                    ? { entity_type: text as PlaceOSEntityType }
                    : { entity_type: null, entity_id: null };
            case 'fill_color':
            case 'stroke_color':
                if (text && !HEX_COLOR_RE.test(text)) return null;
                // Store #rrggbb: SVG export reads six-digit hex only
                return { [field]: text ? this.hexOf(text, text) : null };
            case 'opacity':
                return Number.isFinite(number) ? { opacity: number } : null;
            case 'capacity':
                if (!text) return { capacity: null };
                return Number.isFinite(number)
                    ? { capacity: Math.max(0, Math.round(number)) }
                    : null;
            case 'locked':
                return { locked: value === true };
            case 'tags':
                return {
                    tags: text
                        ? text
                              .split(',')
                              .map((tag) => tag.trim())
                              .filter(Boolean)
                        : [],
                };
            case 'width':
            case 'height':
                // An empty or non-positive size would collapse the object
                return Number.isFinite(number) && number > 0
                    ? { geometry: { ...object.geometry, [field]: number } }
                    : null;
            case 'rotation':
                return Number.isFinite(number)
                    ? {
                          geometry: {
                              ...object.geometry,
                              rotation:
                                  ((Math.round(number) % 360) + 360) % 360,
                          },
                      }
                    : null;
        }
    }

    /** First click arms the delete, second confirms it */
    public remove(object: MapObject) {
        if (!this.confirm_delete()) {
            this.confirm_delete.set(true);
            return;
        }
        this.state.deleteObject(object.id);
        this.confirm_delete.set(false);
    }
}
