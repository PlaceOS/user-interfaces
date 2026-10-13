import { Component, inject, signal } from '@angular/core';

import { MapObject, MapObjectType, PlaceOSEntityType } from '../data/types';
import { OBJECT_TYPES } from './constants';
import { EditorStateService } from './editor-state.service';

const ENTITY_TYPES: (PlaceOSEntityType | '')[] = [
    '',
    'system',
    'module',
    'zone',
];

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
                        <div>
                            <label for="pp-w">Width</label>
                            <input
                                id="pp-w"
                                type="number"
                                min="1"
                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                [value]="rounded(object.geometry.width)"
                                (change)="set(object, 'width', asValue($event))"
                            />
                        </div>
                        <div>
                            <label for="pp-h">Height</label>
                            <input
                                id="pp-h"
                                type="number"
                                min="1"
                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                [value]="rounded(object.geometry.height)"
                                (change)="
                                    set(object, 'height', asValue($event))
                                "
                            />
                        </div>
                    </div>

                    <div>
                        <label for="pp-rotation">Rotation (deg)</label>
                        <input
                            id="pp-rotation"
                            type="number"
                            min="0"
                            max="360"
                            class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                            [value]="rounded(object.geometry.rotation)"
                            (change)="set(object, 'rotation', asValue($event))"
                        />
                    </div>

                    @if (object.object_type === 'room') {
                        <div>
                            <label for="pp-capacity">Capacity</label>
                            <input
                                id="pp-capacity"
                                type="number"
                                min="0"
                                placeholder="0"
                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                [value]="object.capacity ?? ''"
                                (change)="
                                    set(object, 'capacity', asValue($event))
                                "
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
                                (input)="
                                    set(object, 'fill_color', asValue($event))
                                "
                            />
                            <input
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                [value]="object.fill_color ?? ''"
                                placeholder="#cccccc"
                                (change)="
                                    set(object, 'fill_color', asValue($event))
                                "
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
                                    set(object, 'stroke_color', asValue($event))
                                "
                            />
                            <input
                                class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                                [value]="object.stroke_color ?? ''"
                                placeholder="#333333"
                                (change)="
                                    set(object, 'stroke_color', asValue($event))
                                "
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
                            (input)="set(object, 'opacity', asValue($event))"
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
                            placeholder="sys-XXXXXXXX"
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

    /** Colour inputs only accept `#rrggbb`, so fall back for rgba() values */
    public readonly hexOf = (color: string | null, fallback: string) =>
        color && /^#[0-9a-f]{6}$/i.test(color) ? color : fallback;

    public set(object: MapObject, field: string, value: unknown) {
        const updates: Partial<MapObject> = {};
        switch (field) {
            case 'label':
            case 'svg_id':
            case 'entity_id':
            case 'group_id':
                (updates as Record<string, unknown>)[field] = value as string;
                break;
            case 'object_type':
                updates.object_type = value as MapObjectType;
                break;
            case 'entity_type':
                updates.entity_type = (
                    value === '' ? null : value
                ) as PlaceOSEntityType | null;
                break;
            case 'fill_color':
            case 'stroke_color':
                (updates as Record<string, unknown>)[field] =
                    (value as string) || null;
                break;
            case 'opacity':
                updates.opacity = Number(value);
                break;
            case 'capacity':
                updates.capacity = value === '' ? null : Number(value);
                break;
            case 'locked':
                updates.locked = value as boolean;
                break;
            case 'tags': {
                const text = (value as string).trim();
                updates.tags = text
                    ? text
                          .split(',')
                          .map((tag) => tag.trim())
                          .filter(Boolean)
                    : [];
                break;
            }
            case 'width':
            case 'height':
            case 'rotation':
                updates.geometry = {
                    ...object.geometry,
                    [field]: Number(value),
                };
                break;
            default:
                return;
        }
        this.state.pushHistory();
        this.state.updateObject(object.id, updates);
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
