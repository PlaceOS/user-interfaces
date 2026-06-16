import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    BuildingLevel,
    UploadsService,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    getMapDetails,
} from '@placeos/components';
import { authority, updateZone } from '@placeos/ts-client';

interface SvgMapElement {
    editor_index: number;
    tag: string;
    id: string;
    fill: string;
    stroke: string;
    text: string;
    can_edit_text: boolean;
    label: string;
}

interface SvgStyleRule {
    selectors: readonly string[];
    styles: Record<string, string>;
}

const EDITABLE_TAGS = new Set([
    'a',
    'circle',
    'ellipse',
    'g',
    'image',
    'line',
    'path',
    'polygon',
    'polyline',
    'rect',
    'text',
    'tspan',
    'use',
]);

const TEXT_TAGS = new Set(['text', 'tspan']);
const CONTAINER_TAGS = new Set(['a', 'g']);
const LINE_TAGS = new Set(['line']);
const REFERENCE_TAGS = new Set(['image', 'use']);
const NON_RENDERED_TAGS = new Set([
    'clippath',
    'defs',
    'filter',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'pattern',
    'radialgradient',
    'script',
    'style',
    'symbol',
]);
const SVG_NS = 'http://www.w3.org/2000/svg';
const SELECTED_OUTLINE_COLOUR = '#00A3FF';
const HOVERED_OUTLINE_COLOUR = '#FFB020';

@Component({
    selector: 'level-map-editor-modal',
    template: `
        <fullscreen-modal-shell
            heading="Edit SVG map"
            [full_width]="true"
            [loading]="loading()"
            [confirm_disabled]="!can_save()"
            confirm_text="Save SVG map"
            (confirm)="save()"
        >
            @if (error()) {
                <div
                    class="border-error/30 bg-error/10 mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center rounded border p-8 text-center"
                >
                    <icon class="text-error text-4xl">error</icon>
                    <p class="mt-2">{{ error() }}</p>
                </div>
            } @else {
                <section
                    class="grid h-[calc(100vh-10rem)] min-h-0 grid-cols-[24rem_minmax(0,1fr)] gap-4 overflow-hidden"
                >
                    <aside
                        class="border-base-300 bg-base-100 flex min-h-0 flex-col overflow-hidden rounded-md border shadow-sm"
                    >
                        <div
                            class="border-base-300 flex flex-col gap-2 border-b p-3"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-semibold">
                                    Map elements
                                </h3>
                                <span
                                    class="bg-base-200 rounded-full px-2 py-0.5 text-xs font-medium opacity-70"
                                >
                                    {{ filtered_elements().length }} /
                                    {{ elements().length }}
                                </span>
                            </div>
                            <mat-form-field
                                appearance="outline"
                                subscriptSizing="dynamic"
                                class="w-full"
                            >
                                <icon matPrefix class="mx-1 opacity-50"
                                    >search</icon
                                >
                                <input
                                    matInput
                                    name="element-filter"
                                    placeholder="Filter elements"
                                    [(ngModel)]="filter"
                                />
                            </mat-form-field>
                            <label
                                class="flex cursor-pointer items-center gap-2 text-xs"
                                for="svg-elements-with-ids"
                            >
                                <input
                                    id="svg-elements-with-ids"
                                    name="svg-elements-with-ids"
                                    type="checkbox"
                                    class="accent-secondary h-4 w-4"
                                    [(ngModel)]="show_only_ids"
                                />
                                <span>Only show elements with IDs</span>
                            </label>
                        </div>
                        <div class="min-h-0 flex-1 overflow-auto">
                            @for (
                                element of filtered_elements();
                                track element.editor_index
                            ) {
                                <button
                                    matRipple
                                    class="border-base-200 hover:bg-base-200 relative flex w-full items-center gap-3 border-b px-3 py-2 text-left transition-colors"
                                    [class.bg-secondary]="
                                        selected_index() ===
                                        element.editor_index
                                    "
                                    [class.text-secondary-content]="
                                        selected_index() ===
                                        element.editor_index
                                    "
                                    (click)="
                                        selectElement(element.editor_index)
                                    "
                                    (mouseenter)="
                                        hoverElement(element.editor_index)
                                    "
                                    (mouseleave)="
                                        clearHoveredElement(
                                            element.editor_index
                                        )
                                    "
                                >
                                    @if (
                                        selected_index() ===
                                        element.editor_index
                                    ) {
                                        <div
                                            class="bg-secondary-content/60 absolute inset-y-0 left-0 w-1"
                                        ></div>
                                    }
                                    <span class="colour-stack shrink-0">
                                        <span
                                            class="checker border-base-300 colour-tile stroke-tile"
                                        >
                                            <span
                                                class="block h-full w-full"
                                                [style.background]="
                                                    colourPreview(
                                                        element.stroke
                                                    )
                                                "
                                            ></span>
                                        </span>
                                        <span
                                            class="checker border-base-300 colour-tile fill-tile"
                                        >
                                            <span
                                                class="block h-full w-full"
                                                [style.background]="
                                                    colourPreview(element.fill)
                                                "
                                            ></span>
                                        </span>
                                    </span>
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
                                            {{ element.label }}
                                        </div>
                                        <div
                                            class="truncate font-mono text-xs opacity-50"
                                        >
                                            &lt;{{ element.tag }}&gt;
                                        </div>
                                    </div>
                                    @if (
                                        isElementEdited(element.editor_index)
                                    ) {
                                        <span
                                            class="bg-warning text-warning-content flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                            title="Edited"
                                        >
                                            <icon class="text-base">edit</icon>
                                        </span>
                                    }
                                </button>
                            } @empty {
                                <div
                                    class="flex h-full items-center justify-center p-8 text-center opacity-50"
                                >
                                    No SVG elements found.
                                </div>
                            }
                        </div>
                    </aside>
                    <main class="flex min-h-0 min-w-0 flex-col gap-4">
                        <div
                            class="canvas border-base-300 relative flex min-h-0 flex-1 items-center justify-center overflow-auto rounded-md border p-4 shadow-sm"
                        >
                            @if (preview_url()) {
                                <div class="map-preview">
                                    <img
                                        [src]="preview_url()"
                                        alt="SVG map preview"
                                    />
                                    @if (overlay_url()) {
                                        <img
                                            class="pointer-events-none"
                                            [src]="overlay_url()"
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    }
                                </div>
                            } @else {
                                <div
                                    class="flex flex-col items-center gap-2 opacity-40"
                                >
                                    <icon class="text-4xl">image</icon>
                                    <p>No SVG loaded.</p>
                                </div>
                            }
                        </div>
                        <section
                            class="border-base-300 bg-base-100 rounded-md border p-4 shadow-sm"
                        >
                            @if (selected_element(); as element) {
                                <div class="mb-3 flex items-center gap-2">
                                    <h3 class="truncate text-sm font-semibold">
                                        {{ element.label }}
                                    </h3>
                                    <span
                                        class="bg-base-200 rounded px-1.5 py-0.5 font-mono text-xs opacity-60"
                                    >
                                        &lt;{{ element.tag }}&gt;
                                    </span>
                                    @if (
                                        isElementEdited(element.editor_index)
                                    ) {
                                        <button
                                            type="button"
                                            class="border-base-300 hover:bg-base-200 ml-auto flex shrink-0 items-center gap-1 rounded border px-2 py-1 text-xs"
                                            (click)="
                                                resetElement(
                                                    element.editor_index
                                                )
                                            "
                                        >
                                            <icon class="text-base">undo</icon>
                                            Reset
                                        </button>
                                    }
                                </div>
                                <div
                                    class="grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                    <div class="flex flex-col">
                                        <label for="svg-element-id">
                                            Element ID
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <input
                                                matInput
                                                id="svg-element-id"
                                                name="svg-element-id"
                                                [ngModel]="selected_id()"
                                                (ngModelChange)="
                                                    updateSelectedId($event)
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="svg-element-fill">
                                            Fill colour
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <input
                                                matInput
                                                id="svg-element-fill"
                                                name="svg-element-fill"
                                                placeholder="#FFFFFF, none"
                                                [ngModel]="selected_fill()"
                                                (ngModelChange)="
                                                    updateSelectedFill($event)
                                                "
                                            />
                                            <button
                                                matSuffix
                                                type="button"
                                                class="checker border-base-300 mr-2 block h-6 w-6 overflow-hidden rounded border"
                                                aria-label="Pick fill colour"
                                                (click)="fill_picker.click()"
                                            >
                                                <span
                                                    class="block h-full w-full"
                                                    [style.background]="
                                                        colourPreview(
                                                            selected_fill()
                                                        )
                                                    "
                                                ></span>
                                            </button>
                                            <input
                                                #fill_picker
                                                class="colour-picker-input"
                                                type="color"
                                                [value]="
                                                    colourPickerValue(
                                                        selected_fill()
                                                    )
                                                "
                                                tabindex="-1"
                                                aria-hidden="true"
                                                (input)="
                                                    updateSelectedFill(
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                    <div class="flex flex-col">
                                        <label for="svg-element-stroke">
                                            Stroke colour
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <input
                                                matInput
                                                id="svg-element-stroke"
                                                name="svg-element-stroke"
                                                placeholder="#111111, none"
                                                [ngModel]="selected_stroke()"
                                                (ngModelChange)="
                                                    updateSelectedStroke($event)
                                                "
                                            />
                                            <button
                                                matSuffix
                                                type="button"
                                                class="checker border-base-300 mr-2 block h-6 w-6 overflow-hidden rounded border"
                                                aria-label="Pick stroke colour"
                                                (click)="stroke_picker.click()"
                                            >
                                                <span
                                                    class="block h-full w-full"
                                                    [style.background]="
                                                        colourPreview(
                                                            selected_stroke()
                                                        )
                                                    "
                                                ></span>
                                            </button>
                                            <input
                                                #stroke_picker
                                                class="colour-picker-input"
                                                type="color"
                                                [value]="
                                                    colourPickerValue(
                                                        selected_stroke()
                                                    )
                                                "
                                                tabindex="-1"
                                                aria-hidden="true"
                                                (input)="
                                                    updateSelectedStroke(
                                                        $any($event.target)
                                                            .value
                                                    )
                                                "
                                            />
                                        </mat-form-field>
                                    </div>
                                </div>
                                @if (element.can_edit_text) {
                                    <div class="mt-2 flex flex-col">
                                        <label for="svg-element-text">
                                            Text
                                        </label>
                                        <mat-form-field
                                            appearance="outline"
                                            subscriptSizing="dynamic"
                                        >
                                            <textarea
                                                matInput
                                                id="svg-element-text"
                                                name="svg-element-text"
                                                rows="3"
                                                [ngModel]="selected_text()"
                                                (ngModelChange)="
                                                    updateSelectedText($event)
                                                "
                                            ></textarea>
                                        </mat-form-field>
                                    </div>
                                }
                            } @else {
                                <div
                                    class="flex items-center gap-3 py-4 opacity-50"
                                >
                                    <icon class="text-2xl">touch_app</icon>
                                    <p>
                                        Select an element from the list to edit
                                        its ID, colours, or text.
                                    </p>
                                </div>
                            }
                        </section>
                    </main>
                </section>
            }
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            :host ::ng-deep fullscreen-modal-shell > div {
                overflow: hidden;
            }

            :host ::ng-deep fullscreen-modal-shell main {
                min-height: 0;
                overflow: hidden;
            }

            label {
                margin-bottom: 0.25rem;
                font-size: 0.75rem;
                font-weight: 500;
                opacity: 0.75;
            }

            .checker {
                background-color: var(--base-100);
                background-image:
                    linear-gradient(
                        45deg,
                        var(--base-300) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        -45deg,
                        var(--base-300) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        45deg,
                        transparent 75%,
                        var(--base-300) 75%
                    ),
                    linear-gradient(
                        -45deg,
                        transparent 75%,
                        var(--base-300) 75%
                    );
                background-size: 8px 8px;
                background-position:
                    0 0,
                    0 4px,
                    4px -4px,
                    -4px 0;
            }

            .colour-stack {
                position: relative;
                width: 2.25rem;
                height: 2.25rem;
            }

            .colour-tile {
                position: absolute;
                display: block;
                height: 1.5rem;
                width: 1.5rem;
                overflow: hidden;
                border-width: 1px;
                border-radius: 0.25rem;
                box-shadow: 0 1px 2px rgb(0 0 0 / 0.16);
            }

            .stroke-tile {
                top: 0;
                right: 0;
            }

            .fill-tile {
                bottom: 0;
                left: 0;
            }

            .colour-picker-input {
                position: absolute;
                width: 1px;
                height: 1px;
                opacity: 0;
                pointer-events: none;
            }

            .map-preview {
                position: relative;
                width: 100%;
                height: 100%;
                min-width: 0;
                min-height: 0;
                filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1));
            }

            .map-preview > img {
                position: absolute;
                inset: 0;
                display: block;
                width: 100%;
                height: 100%;
                min-width: 0;
                min-height: 0;
                object-fit: contain;
            }

            .canvas {
                background-color: var(--base-100);
                background-image:
                    linear-gradient(
                        45deg,
                        var(--base-200) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        -45deg,
                        var(--base-200) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        45deg,
                        transparent 75%,
                        var(--base-200) 75%
                    ),
                    linear-gradient(
                        -45deg,
                        transparent 75%,
                        var(--base-200) 75%
                    );
                background-size: 22px 22px;
                background-position:
                    0 0,
                    0 11px,
                    11px -11px,
                    -11px 0;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FormsModule,
        FullscreenModalShellComponent,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
    ],
})
export class LevelMapEditorModalComponent implements OnInit, OnDestroy {
    private readonly _uploads = inject(UploadsService);
    private readonly _level = inject<BuildingLevel>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<LevelMapEditorModalComponent>>(MatDialogRef);

    private _document: Document | null = null;
    private _preview_object_url = '';
    private _overlay_object_url = '';
    private _style_rules: SvgStyleRule[] = [];
    private _original_elements = new Map<number, Element>();

    public readonly loading = signal('');
    public readonly error = signal('');
    public readonly elements = signal<SvgMapElement[]>([]);
    public readonly filter = signal('');
    public readonly show_only_ids = signal(false);
    public readonly selected_index = signal(-1);
    public readonly hovered_index = signal(-1);
    public readonly selected_id = signal('');
    public readonly selected_fill = signal('');
    public readonly selected_stroke = signal('');
    public readonly selected_text = signal('');
    public readonly preview_url = signal('');
    public readonly overlay_url = signal('');
    public readonly svg_markup = signal('');
    public readonly dirty = signal(false);
    public readonly edited_elements = signal<Set<number>>(new Set());

    public readonly filtered_elements = computed(() => {
        const filter_text = this.filter().trim().toLowerCase();
        const elements = this.show_only_ids()
            ? this.elements().filter((element) => !!element.id)
            : this.elements();
        if (!filter_text) return elements;
        return elements.filter((element) =>
            [
                element.id,
                element.tag,
                element.text,
                element.fill,
                element.stroke,
            ]
                .join(' ')
                .toLowerCase()
                .includes(filter_text),
        );
    });

    public readonly selected_element = computed(() =>
        this.elements().find(
            (element) => element.editor_index === this.selected_index(),
        ),
    );

    public readonly outlined_indices = computed(() => {
        const selected_index = this.selected_index();
        const hovered_index = this.hovered_index();
        const indices: number[] = [];
        if (selected_index >= 0) indices.push(selected_index);
        if (hovered_index >= 0 && hovered_index !== selected_index) {
            indices.push(hovered_index);
        }
        return indices;
    });

    public readonly can_save = computed(
        () => !!this.svg_markup() && this.dirty() && !this.loading(),
    );

    public async ngOnInit() {
        if (!this._level?.map_id) {
            this.error.set('This level does not have an SVG map URL set.');
            return;
        }
        this.loading.set('Loading SVG map...');
        try {
            const details = await getMapDetails(this._level.map_id);
            this._loadSvg(details.raw_data);
        } catch (error) {
            this.error.set(
                `Failed to load the SVG map. ${this._errorMessage(error)}`,
            );
        } finally {
            this.loading.set('');
        }
    }

    public ngOnDestroy() {
        this._revokePreviewUrl();
    }

    public selectElement(editor_index: number) {
        if (!this._setSelectedElement(editor_index)) return;
        this._refreshOverlay();
    }

    public hoverElement(editor_index: number) {
        if (this.hovered_index() === editor_index) return;
        this.hovered_index.set(editor_index);
        this._refreshOverlay();
    }

    public clearHoveredElement(editor_index: number) {
        if (this.hovered_index() !== editor_index) return;
        this.hovered_index.set(-1);
        this._refreshOverlay();
    }

    public updateSelectedId(value: string) {
        this.selected_id.set(value);
        this.applySelectedChanges();
    }

    public updateSelectedFill(value: string) {
        this.selected_fill.set(value);
        this.applySelectedChanges();
    }

    public updateSelectedStroke(value: string) {
        this.selected_stroke.set(value);
        this.applySelectedChanges();
    }

    public updateSelectedText(value: string) {
        this.selected_text.set(value);
        this.applySelectedChanges();
    }

    public applySelectedChanges() {
        const editor_index = this.selected_index();
        const element = this._elementAtIndex(editor_index);
        if (!element) return;
        this._setAttribute(element, 'id', this.selected_id().trim());
        this._setColourAttribute(element, 'fill', this.selected_fill().trim());
        this._setColourAttribute(
            element,
            'stroke',
            this.selected_stroke().trim(),
        );
        if (TEXT_TAGS.has(element.tagName.toLowerCase())) {
            element.textContent = this.selected_text();
        }
        this._refreshElements();
        this.selected_index.set(editor_index);
        this.edited_elements.update(
            (indices) => new Set([...indices, editor_index]),
        );
        this.dirty.set(true);
        this._refreshPreview();
    }

    public colourPreview(value: string) {
        const colour = (value || '').replace('!important', '').trim();
        return colour &&
            typeof CSS !== 'undefined' &&
            CSS.supports('color', colour)
            ? colour
            : 'transparent';
    }

    public colourPickerValue(value: string) {
        const colour = (value || '').replace('!important', '').trim();
        return /^#[0-9a-f]{6}$/i.test(colour) ? colour : '#000000';
    }

    public isElementEdited(editor_index: number) {
        return this.edited_elements().has(editor_index);
    }

    public resetElement(editor_index: number) {
        const element = this._elementAtIndex(editor_index);
        const original = this._original_elements.get(editor_index);
        if (!element || !original) return;
        element.replaceWith(original.cloneNode(true));
        this.edited_elements.update((indices) => {
            const next = new Set(indices);
            next.delete(editor_index);
            return next;
        });
        this._refreshElements();
        this.hovered_index.set(-1);
        this._setSelectedElement(editor_index);
        this.dirty.set(this.edited_elements().size > 0);
        this._refreshPreview();
    }

    public async save() {
        if (!this._document || !this.svg_markup()) return;
        const duplicate_id = this._duplicateId();
        if (duplicate_id) {
            notifyError(`Duplicate SVG element ID "${duplicate_id}"`);
            return;
        }
        this.loading.set('Uploading edited SVG map...');
        try {
            const file = new File([this.svg_markup()], this._fileName(), {
                type: 'image/svg+xml',
            });
            const upload_id = await this._uploads.uploadFileToCompletion(file);
            const map_id = `/api/engine/v2/uploads/${encodeURIComponent(
                upload_id,
            )}/url`;
            this.loading.set('Updating level map URL...');
            const level_name =
                this._level.name ||
                `LEVEL ${authority().description} ${
                    this._level.display_name || this._level.id
                }`;
            const response = await updateZone(this._level.id, {
                id: this._level.id,
                display_name: this._level.display_name,
                parent_id: this._level.parent_id,
                map_id,
                name: level_name,
                tags: this._level.tags?.length ? this._level.tags : ['level'],
            });
            notifySuccess('Successfully updated level SVG map.');
            this._dialog_ref.close({
                ...this._level,
                ...response,
                map_id,
                tags: (response as any)?.tags?.length
                    ? (response as any).tags
                    : this._level.tags?.length
                      ? this._level.tags
                      : ['level'],
            });
        } catch (error) {
            notifyError(
                `Failed to save the SVG map. ${this._errorMessage(error)}`,
            );
        } finally {
            this.loading.set('');
        }
    }

    private _loadSvg(svg_markup: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svg_markup, 'image/svg+xml');
        const parser_error = doc.querySelector('parsererror');
        const svg = doc.querySelector('svg');
        if (parser_error || !svg) throw new Error('Invalid SVG document.');
        this._document = doc;
        this._style_rules = this._svgStyleRules(doc);
        this._original_elements = this._originalElementMap(doc);
        this.edited_elements.set(new Set());
        this.error.set('');
        this._refreshElements();
        this._setSelectedElement(this.elements()[0]?.editor_index ?? -1);
        this.dirty.set(false);
        this._refreshPreview();
    }

    private _refreshElements() {
        const svg = this._document?.querySelector('svg');
        if (!svg) {
            this.elements.set([]);
            return;
        }
        const elements = Array.from(svg.querySelectorAll('*'))
            .map((element, index) => ({ element, index }))
            .filter(({ element }) => this._isEditableElement(element))
            .filter(({ element }) => this._isVisibleElement(element))
            .map(({ element, index }) => this._elementDetails(element, index));
        this.elements.set(elements);
    }

    private _setSelectedElement(editor_index: number) {
        const element = this._elementAtIndex(editor_index);
        if (!element) return false;
        const details = this._elementDetails(element, editor_index);
        this.selected_index.set(editor_index);
        this.selected_id.set(details.id);
        this.selected_fill.set(details.fill);
        this.selected_stroke.set(details.stroke);
        this.selected_text.set(details.text);
        return true;
    }

    private _originalElementMap(doc: Document) {
        const svg = doc.querySelector('svg');
        const elements = new Map<number, Element>();
        if (!svg) return elements;
        Array.from(svg.querySelectorAll('*')).forEach((element, index) =>
            elements.set(index, element.cloneNode(true) as Element),
        );
        return elements;
    }

    private _refreshPreview() {
        const markup = this._serialiseSvg();
        this.svg_markup.set(markup);
        this._revokeMapPreviewUrl();
        this._preview_object_url = URL.createObjectURL(
            new Blob([markup], { type: 'image/svg+xml' }),
        );
        this.preview_url.set(this._preview_object_url);
        this._refreshOverlay();
    }

    private _refreshOverlay() {
        this._revokeOverlayUrl();
        const overlay_markup = this._serialiseSelectionOverlay();
        if (!overlay_markup) {
            this.overlay_url.set('');
            return;
        }
        this._overlay_object_url = URL.createObjectURL(
            new Blob([overlay_markup], { type: 'image/svg+xml' }),
        );
        this.overlay_url.set(this._overlay_object_url);
    }

    private _serialiseSvg() {
        const svg = this._document?.querySelector('svg');
        if (!svg) return '';
        return new XMLSerializer().serializeToString(svg);
    }

    private _serialiseSelectionOverlay() {
        const svg = this._document?.querySelector('svg');
        const outlines = this.outlined_indices();
        if (!svg || !outlines.length) return '';
        const overlay_doc = document.implementation.createDocument(
            SVG_NS,
            'svg',
            null,
        );
        const overlay_svg = overlay_doc.documentElement;
        this._copySvgViewport(svg, overlay_svg);
        overlay_svg.setAttribute('pointer-events', 'none');
        for (const editor_index of outlines) {
            const selected_element = this._elementAtIndex(editor_index);
            if (!selected_element) continue;
            const overlay_element = overlay_doc.importNode(
                this._selectedOverlayElement(selected_element),
                true,
            ) as Element;
            this._highlightElement(
                overlay_element,
                this._outlineColour(editor_index),
            );
            overlay_svg.appendChild(overlay_element);
        }
        return new XMLSerializer().serializeToString(overlay_svg);
    }

    private _outlineColour(editor_index: number) {
        return editor_index === this.hovered_index()
            ? HOVERED_OUTLINE_COLOUR
            : SELECTED_OUTLINE_COLOUR;
    }

    private _revokePreviewUrl() {
        this._revokeMapPreviewUrl();
        this._revokeOverlayUrl();
    }

    private _revokeMapPreviewUrl() {
        if (this._preview_object_url) {
            URL.revokeObjectURL(this._preview_object_url);
            this._preview_object_url = '';
        }
        this.preview_url.set('');
    }

    private _revokeOverlayUrl() {
        if (this._overlay_object_url) {
            URL.revokeObjectURL(this._overlay_object_url);
            this._overlay_object_url = '';
        }
        this.overlay_url.set('');
    }

    private _elementAtIndex(editor_index: number) {
        const svg = this._document?.querySelector('svg');
        if (!svg || editor_index < 0) return null;
        return Array.from(svg.querySelectorAll('*'))[editor_index] || null;
    }

    private _elementDetails(
        element: Element,
        editor_index: number,
    ): SvgMapElement {
        const tag = element.tagName.toLowerCase();
        const can_edit_text = TEXT_TAGS.has(tag);
        const text = can_edit_text ? (element.textContent || '').trim() : '';
        const id = element.getAttribute('id') || '';
        return {
            editor_index,
            tag,
            id,
            fill: this._visibleColourValue(element, 'fill'),
            stroke: this._visibleColourValue(element, 'stroke'),
            text,
            can_edit_text,
            label: id || text || `${tag} ${editor_index + 1}`,
        };
    }

    private _isEditableElement(element: Element) {
        const tag = element.tagName.toLowerCase();
        return (
            EDITABLE_TAGS.has(tag) ||
            !!element.getAttribute('id') ||
            !!this._colourAttribute(element, 'fill') ||
            !!this._colourAttribute(element, 'stroke')
        );
    }

    private _isVisibleElement(element: Element): boolean {
        if (this._hasHiddenAncestor(element)) return false;
        const tag = element.tagName.toLowerCase();
        if (NON_RENDERED_TAGS.has(tag)) return false;
        if (CONTAINER_TAGS.has(tag)) {
            return Array.from(element.children).some((child) =>
                this._isVisibleElement(child),
            );
        }
        if (TEXT_TAGS.has(tag)) {
            return (
                !!(element.textContent || '').trim() &&
                (this._hasVisibleFill(element) ||
                    this._hasVisibleStroke(element))
            );
        }
        if (LINE_TAGS.has(tag)) return this._hasVisibleStroke(element);
        if (REFERENCE_TAGS.has(tag)) return this._hasReference(element);
        return this._hasVisibleFill(element) || this._hasVisibleStroke(element);
    }

    private _hasHiddenAncestor(element: Element) {
        let current: Element | null = element;
        while (current) {
            const tag = current.tagName.toLowerCase();
            if (NON_RENDERED_TAGS.has(tag)) return true;
            if (
                current.hasAttribute('hidden') ||
                this._styleValue(current, 'display') === 'none' ||
                ['hidden', 'collapse'].includes(
                    this._styleValue(current, 'visibility'),
                ) ||
                this._numberValue(this._styleValue(current, 'opacity')) === 0
            ) {
                return true;
            }
            current = current.parentElement;
        }
        return false;
    }

    private _hasVisibleFill(element: Element) {
        const fill = this._inheritedStyleValue(element, 'fill', 'black');
        const fill_opacity = this._numberValue(
            this._inheritedStyleValue(element, 'fill-opacity', '1'),
        );
        return (
            !this._isTransparentColour(fill || 'black') && fill_opacity !== 0
        );
    }

    private _hasVisibleStroke(element: Element) {
        const stroke = this._inheritedStyleValue(element, 'stroke', '');
        const stroke_opacity = this._numberValue(
            this._inheritedStyleValue(element, 'stroke-opacity', '1'),
        );
        const stroke_width = this._numberValue(
            this._inheritedStyleValue(element, 'stroke-width', '1'),
        );
        return (
            !!stroke &&
            !this._isTransparentColour(stroke) &&
            stroke_opacity !== 0 &&
            stroke_width !== 0
        );
    }

    private _hasReference(element: Element) {
        return (
            element.hasAttribute('href') ||
            element.hasAttribute('xlink:href') ||
            element.hasAttributeNS('http://www.w3.org/1999/xlink', 'href')
        );
    }

    private _colourAttribute(element: Element, name: 'fill' | 'stroke') {
        return (
            element.getAttribute(name) ||
            (element as SVGElement).style?.getPropertyValue(name) ||
            ''
        );
    }

    private _visibleColourValue(element: Element, name: 'fill' | 'stroke') {
        const fallback = name === 'fill' ? 'black' : '';
        return this._inheritedStyleValue(element, name, fallback);
    }

    private _styleValue(element: Element, name: string) {
        const inline_value = (element as SVGElement).style?.getPropertyValue(
            name,
        );
        if (inline_value) return this._cleanStyleValue(inline_value);
        const css_value = this._cssStyleValue(element, name);
        if (css_value) return css_value;
        return this._cleanStyleValue(element.getAttribute(name) || '') || '';
    }

    private _cssStyleValue(element: Element, name: string) {
        let value = '';
        let specificity = -1;
        for (const rule of this._style_rules) {
            const style_value = rule.styles[name];
            if (!style_value) continue;
            for (const selector of rule.selectors) {
                if (!this._matchesSelector(element, selector)) continue;
                const next_specificity = this._selectorSpecificity(selector);
                if (next_specificity >= specificity) {
                    value = style_value;
                    specificity = next_specificity;
                }
            }
        }
        return value;
    }

    private _svgStyleRules(doc: Document): SvgStyleRule[] {
        const rules: SvgStyleRule[] = [];
        for (const style of Array.from(doc.querySelectorAll('style'))) {
            const css = (style.textContent || '').replace(
                /\/\*[\s\S]*?\*\//g,
                '',
            );
            const rule_regex = /([^{}@]+)\{([^{}]+)\}/g;
            let match: RegExpExecArray | null;
            while ((match = rule_regex.exec(css))) {
                const selectors = match[1]
                    .split(',')
                    .map((_) => _.trim())
                    .filter((_) => !!_);
                const styles = match[2]
                    .split(';')
                    .map((_) => _.trim())
                    .filter((_) => _.includes(':'))
                    .reduce(
                        (map, declaration) => {
                            const [key, ...parts] = declaration.split(':');
                            const value = this._cleanStyleValue(
                                parts.join(':'),
                            );
                            if (key.trim() && value) {
                                map[key.trim()] = value;
                            }
                            return map;
                        },
                        {} as Record<string, string>,
                    );
                if (selectors.length && Object.keys(styles).length) {
                    rules.push({ selectors, styles });
                }
            }
        }
        return rules;
    }

    private _matchesSelector(element: Element, selector: string) {
        try {
            return element.matches(selector);
        } catch {
            return false;
        }
    }

    private _selectorSpecificity(selector: string) {
        const id_count = selector.match(/#[\w-]+/g)?.length || 0;
        const class_count =
            selector.match(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g)?.length || 0;
        const tag_count =
            selector
                .replace(/#[\w-]+/g, ' ')
                .replace(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g, ' ')
                .split(/[\s>+~]+/)
                .filter((_) => !!_.trim() && _.trim() !== '*').length || 0;
        return id_count * 100 + class_count * 10 + tag_count;
    }

    private _cleanStyleValue(value: string) {
        return value.replace('!important', '').trim();
    }

    private _inheritedStyleValue(
        element: Element,
        name: string,
        fallback: string,
    ) {
        let current: Element | null = element;
        while (current) {
            const value = this._styleValue(current, name);
            if (value) return value;
            current = current.parentElement;
        }
        return fallback;
    }

    private _numberValue(value: string) {
        if (!value) return null;
        const number = parseFloat(value);
        return Number.isFinite(number) ? number : null;
    }

    private _isTransparentColour(value: string) {
        const colour = value.trim().toLowerCase();
        return (
            !colour ||
            colour === 'none' ||
            colour === 'transparent' ||
            colour === 'rgba(0,0,0,0)' ||
            colour === 'rgba(0, 0, 0, 0)'
        );
    }

    private _copySvgViewport(source: SVGSVGElement, target: Element) {
        target.setAttribute('xmlns', SVG_NS);
        for (const attribute of [
            'viewBox',
            'width',
            'height',
            'preserveAspectRatio',
        ]) {
            const value = source.getAttribute(attribute);
            if (value) target.setAttribute(attribute, value);
        }
        if (!target.getAttribute('viewBox')) {
            const width = source.getAttribute('width') || '100%';
            const height = source.getAttribute('height') || '100%';
            target.setAttribute('width', width);
            target.setAttribute('height', height);
        }
    }

    private _selectedOverlayElement(element: Element) {
        let clone = element.cloneNode(true) as Element;
        let parent = element.parentElement;
        while (parent && parent.tagName.toLowerCase() !== 'svg') {
            const parent_clone = parent.cloneNode(false) as Element;
            parent_clone.appendChild(clone);
            clone = parent_clone;
            parent = parent.parentElement;
        }
        return clone;
    }

    private _highlightElement(element: Element, colour: string) {
        this._stripIds(element);
        const targets = [element, ...Array.from(element.querySelectorAll('*'))];
        for (const target of targets) {
            if (target.tagName === 'title' || target.tagName === 'desc') {
                continue;
            }
            target.setAttribute('data-map-editor-highlight', 'true');
            target.setAttribute('fill', 'none');
            target.setAttribute('stroke', colour);
            target.setAttribute('stroke-width', '3');
            target.setAttribute('vector-effect', 'non-scaling-stroke');
            target.setAttribute('pointer-events', 'none');
            target.setAttribute('opacity', '1');
            target.removeAttribute('display');
            target.removeAttribute('visibility');
            const style = (target as SVGElement).style;
            style?.setProperty('fill', 'none', 'important');
            style?.setProperty('stroke', colour, 'important');
            style?.setProperty('stroke-width', '3', 'important');
            style?.setProperty(
                'vector-effect',
                'non-scaling-stroke',
                'important',
            );
            style?.setProperty('pointer-events', 'none', 'important');
            style?.setProperty('opacity', '1', 'important');
            style?.removeProperty('display');
            style?.removeProperty('visibility');
        }
        const title = element.ownerDocument.createElementNS(SVG_NS, 'title');
        title.textContent = 'Selected map element';
        element.insertBefore(title, element.firstChild);
    }

    private _stripIds(element: Element) {
        element.removeAttribute('id');
        for (const child of Array.from(element.querySelectorAll('[id]'))) {
            child.removeAttribute('id');
        }
    }

    private _setAttribute(element: Element, name: string, value: string) {
        if (value) element.setAttribute(name, value);
        else element.removeAttribute(name);
    }

    private _setColourAttribute(
        element: Element,
        name: 'fill' | 'stroke',
        value: string,
    ) {
        if (value) {
            element.setAttribute(name, value);
            (element as SVGElement).style?.setProperty(name, value);
        } else {
            element.removeAttribute(name);
            (element as SVGElement).style?.removeProperty(name);
        }
    }

    private _duplicateId() {
        const svg = this._document?.querySelector('svg');
        if (!svg) return '';
        const seen = new Set<string>();
        for (const element of Array.from(svg.querySelectorAll('[id]'))) {
            const id = element.getAttribute('id') || '';
            if (!id) continue;
            if (seen.has(id)) return id;
            seen.add(id);
        }
        return '';
    }

    private _fileName() {
        const name =
            this._level.display_name || this._level.name || this._level.id;
        const slug =
            name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '') || 'level-map';
        return `${slug}.svg`;
    }

    private _errorMessage(error: any) {
        return error?.message || error?.error || `${error || ''}`;
    }
}
