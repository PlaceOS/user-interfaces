import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import { analyzeSvg, SvgAnalysis } from '../data/svg-import';
import { MapObjectType } from '../data/types';

type ImportStep = 'upload' | 'review' | 'map' | 'confirm';

const STEPS: { key: ImportStep; label: string }[] = [
    { key: 'upload', label: 'Upload' },
    { key: 'review', label: 'Review' },
    { key: 'map', label: 'Map' },
    { key: 'confirm', label: 'Confirm' },
];

const OBJECT_TYPES: MapObjectType[] = [
    'room',
    'desk',
    'zone',
    'area',
    'amenity',
    'decorative',
    'parking',
    'locker',
];

const SPACE_LABELS: Record<string, string> = {
    room: 'Bookable rooms',
    desk: 'Bookable desks',
    locker: 'Assignable lockers',
    zone: 'Monitored zones',
    amenity: 'Amenity points',
    decorative: 'Decorative',
    area: 'Managed areas',
    parking: 'Parking spaces',
};

interface ObjectMapping {
    svgId: string;
    objectType: string;
    label: string;
    excluded: boolean;
    layer: string;
}

@Component({
    selector: 'map-studio-import',
    template: `
        <div class="mx-auto max-w-[56.25rem]">
            <nav class="mb-8 flex justify-center gap-2">
                @for (entry of steps; track entry.key; let i = $index) {
                    <div class="flex items-center gap-1.5">
                        <span
                            class="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 text-sm font-semibold"
                            [class]="dotClass(i)"
                        >
                            @if (i < stepIndex()) {
                                <icon>check</icon>
                            } @else {
                                {{ i + 1 }}
                            }
                        </span>
                        <span
                            class="text-xs"
                            [class]="
                                entry.key === step()
                                    ? 'font-semibold'
                                    : 'text-base-content/60'
                            "
                        >
                            {{ entry.label }}
                        </span>
                        @if (i < steps.length - 1) {
                            <span
                                class="ml-1 inline-block h-0.5 w-10"
                                [class]="
                                    i < stepIndex()
                                        ? 'bg-success'
                                        : 'bg-base-300'
                                "
                            ></span>
                        }
                    </div>
                }
            </nav>

            @switch (step()) {
                @case ('upload') {
                    <h2 class="mb-2 text-xl font-bold">
                        Import SVG Floor Plan
                    </h2>
                    <p class="text-base-content/60 mb-6 text-sm">
                        Upload an SVG file to analyse its structure and import
                        it as a floor plan.
                    </p>

                    @if (error(); as message) {
                        <div
                            class="bg-error-light text-error border-error/30 mb-4 rounded border px-4 py-3 text-sm"
                        >
                            {{ message }}
                        </div>
                    }

                    <label
                        class="bg-base-100 focus-within:ring-primary flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed px-8 py-16 text-center transition-colors focus-within:ring-2"
                        [class]="
                            drag_over() ? 'border-primary' : 'border-base-300'
                        "
                        (dragover)="onDragOver($event)"
                        (dragleave)="drag_over.set(false)"
                        (drop)="onDrop($event)"
                    >
                        @if (analyzing()) {
                            <div
                                class="border-base-300 border-t-primary mb-3 h-8 w-8 animate-spin rounded-full border-4"
                            ></div>
                            <p class="font-semibold">Analysing SVG...</p>
                            <p class="text-base-content/60 text-sm">
                                {{ file_name() }}
                            </p>
                        } @else {
                            <p class="mb-1 font-semibold">
                                Drop your SVG file here
                            </p>
                            <p class="text-base-content/60 text-sm">
                                or click to browse
                            </p>
                        }
                        <!-- sr-only, not hidden, so the input stays keyboard reachable -->
                        <input
                            type="file"
                            accept=".svg"
                            class="sr-only"
                            (change)="onFileInput($event)"
                        />
                    </label>
                }

                @case ('review') {
                    <h2 class="mb-2 text-xl font-bold">Review Analysis</h2>
                    <p class="text-base-content/60 mb-6 text-sm">
                        Review the detected layers and objects. Uncheck layers
                        to exclude them from import.
                    </p>

                    @for (issue of analysis()?.issues ?? []; track $index) {
                        <div
                            class="mb-2 flex items-center gap-1.5 rounded border px-3 py-2 text-sm"
                            [class]="
                                issue.severity === 'warning'
                                    ? 'bg-warning-light border-warning text-warning-content'
                                    : 'bg-base-200 border-base-300 text-base-content/60'
                            "
                        >
                            <icon class="text-base">
                                {{
                                    issue.severity === 'warning'
                                        ? 'warning'
                                        : 'info'
                                }}
                            </icon>
                            {{ issue.message }}
                        </div>
                    }

                    <div
                        class="bg-base-100 border-base-300 mt-5 mb-5 rounded-lg border p-4 shadow-sm"
                    >
                        <h3 class="mb-3 text-sm font-semibold">
                            Layers ({{ analysis()?.layers?.length ?? 0 }})
                        </h3>
                        @for (
                            layer of analysis()?.layers ?? [];
                            track layer.id
                        ) {
                            <label
                                class="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm"
                            >
                                <input
                                    type="checkbox"
                                    class="accent-primary h-4 w-4"
                                    [checked]="enabled_layers().has(layer.id)"
                                    (change)="toggleLayer(layer.id)"
                                />
                                <span class="flex-1 font-medium">
                                    {{ layer.name }}
                                </span>
                                <span class="text-base-content/60 text-xs">
                                    {{ layer.objectCount }} objects
                                </span>
                            </label>
                        }
                    </div>

                    <div class="flex justify-between">
                        <button
                            btn
                            class="inverse"
                            (click)="step.set('upload')"
                        >
                            Back
                        </button>
                        <button btn (click)="applyLayerFilter()">
                            Next: Map Objects
                        </button>
                    </div>
                }

                @case ('map') {
                    <h2 class="mb-2 text-xl font-bold">Map Objects</h2>
                    <p class="text-base-content/60 mb-4 text-sm">
                        Review and adjust the type for each detected object.
                        Exclude objects you don't want to import.
                    </p>

                    <div class="mb-5 flex flex-wrap gap-3">
                        @for (entry of typeCounts(); track entry.type) {
                            <span
                                class="bg-base-200 border-base-300 rounded-xl border px-3 py-1 text-xs font-semibold capitalize"
                            >
                                {{ entry.count }} {{ entry.type
                                }}{{ entry.count === 1 ? '' : 's' }}
                            </span>
                        }
                        <span
                            class="bg-base-200 border-base-300 text-base-content/60 rounded-xl border px-3 py-1 text-xs font-semibold"
                        >
                            {{ excludedCount() }} excluded
                        </span>
                    </div>

                    <div class="mb-3 flex gap-2">
                        <button
                            btn
                            class="inverse min-h-0! px-3! py-1! text-xs"
                            (click)="setAllExcluded(false)"
                        >
                            Include All
                        </button>
                        <button
                            btn
                            class="inverse min-h-0! px-3! py-1! text-xs"
                            (click)="setAllExcluded(true)"
                        >
                            Exclude All
                        </button>
                        <button
                            btn
                            class="inverse min-h-0! px-3! py-1! text-xs"
                            (click)="excludeDecorative()"
                        >
                            Exclude Decorative Only
                        </button>
                    </div>

                    <div
                        class="bg-base-100 border-base-300 mb-5 overflow-x-auto rounded-lg border shadow-sm"
                    >
                        <table class="w-full border-collapse text-sm">
                            <thead>
                                <tr class="bg-base-200 text-left">
                                    <th class="px-3 py-2.5 font-semibold">
                                        Include
                                    </th>
                                    <th class="px-3 py-2.5 font-semibold">
                                        SVG ID
                                    </th>
                                    <th class="px-3 py-2.5 font-semibold">
                                        Label
                                    </th>
                                    <th class="px-3 py-2.5 font-semibold">
                                        Type
                                    </th>
                                    <th class="px-3 py-2.5 font-semibold">
                                        Layer
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                @for (
                                    mapping of mappings();
                                    track mapping.svgId
                                ) {
                                    <tr
                                        class="border-base-300 border-t"
                                        [class.opacity-40]="mapping.excluded"
                                    >
                                        <td class="px-3 py-2">
                                            <input
                                                type="checkbox"
                                                class="accent-primary h-4 w-4"
                                                [checked]="!mapping.excluded"
                                                (change)="
                                                    updateMapping(
                                                        mapping.svgId,
                                                        {
                                                            excluded:
                                                                !mapping.excluded,
                                                        }
                                                    )
                                                "
                                            />
                                        </td>
                                        <td class="text-mono px-3 py-2 text-xs">
                                            {{ mapping.svgId }}
                                        </td>
                                        <td class="px-3 py-2">
                                            <input
                                                class="border-base-300 w-full rounded border px-2 py-1 text-xs"
                                                [value]="mapping.label"
                                                [disabled]="mapping.excluded"
                                                (input)="
                                                    updateMapping(
                                                        mapping.svgId,
                                                        {
                                                            label: asValue(
                                                                $event
                                                            ),
                                                        }
                                                    )
                                                "
                                            />
                                        </td>
                                        <td class="px-3 py-2">
                                            <select
                                                class="border-base-300 rounded border px-2 py-1 text-xs"
                                                [disabled]="mapping.excluded"
                                                (change)="
                                                    updateMapping(
                                                        mapping.svgId,
                                                        {
                                                            objectType:
                                                                asValue($event),
                                                        }
                                                    )
                                                "
                                            >
                                                @for (
                                                    type of object_types;
                                                    track type
                                                ) {
                                                    <option
                                                        [value]="type"
                                                        [selected]="
                                                            type ===
                                                            mapping.objectType
                                                        "
                                                    >
                                                        {{ type }}
                                                    </option>
                                                }
                                            </select>
                                        </td>
                                        <td
                                            class="text-base-content/60 px-3 py-2 text-xs"
                                        >
                                            {{ mapping.layer }}
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-between">
                        <button
                            btn
                            class="inverse"
                            (click)="step.set('review')"
                        >
                            Back
                        </button>
                        <button btn (click)="step.set('confirm')">
                            Next: Confirm
                        </button>
                    </div>
                }

                @case ('confirm') {
                    <h2 class="mb-2 text-xl font-bold">
                        Confirm &amp; Set Up Booking
                    </h2>
                    <p class="text-base-content/60 mb-6 text-sm">
                        These spaces will be managed through PlaceOS — each one
                        can be set as bookable, occupied, or restricted in real
                        time.
                    </p>

                    @if (error(); as message) {
                        <div
                            class="bg-error-light text-error border-error/30 mb-4 rounded border px-4 py-3 text-sm"
                        >
                            {{ message }}
                        </div>
                    }

                    <div
                        class="bg-base-100 border-base-300 mb-5 rounded-lg border p-5 shadow-sm"
                    >
                        <h3 class="mb-4 text-sm font-semibold">
                            Spaces to Manage
                        </h3>
                        <div
                            class="grid [grid-template-columns:repeat(auto-fill,minmax(8.75rem,1fr))] gap-3"
                        >
                            @for (entry of typeCounts(); track entry.type) {
                                <div
                                    class="bg-base-200 rounded-lg px-4 py-3.5 text-center"
                                >
                                    <div
                                        class="text-primary text-2xl font-bold"
                                    >
                                        {{ entry.count }}
                                    </div>
                                    <div class="text-base-content/60 text-xs">
                                        {{ spaceLabel(entry.type) }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div
                        class="bg-base-100 border-base-300 mb-5 rounded-lg border p-5 shadow-sm"
                    >
                        <h3 class="mb-4 text-sm font-semibold">
                            Project Details
                        </h3>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label for="import-project">Project Name</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        id="import-project"
                                        required
                                        placeholder="e.g. Sydney HQ"
                                        [(ngModel)]="project_name"
                                        [ngModelOptions]="{ standalone: true }"
                                    />
                                </mat-form-field>
                            </div>
                            <div>
                                <label for="import-floor">Floor Name</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        id="import-floor"
                                        required
                                        placeholder="e.g. Level 1"
                                        [(ngModel)]="floor_name"
                                        [ngModelOptions]="{ standalone: true }"
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between">
                        <button btn class="inverse" (click)="step.set('map')">
                            Back
                        </button>
                        <button
                            btn
                            [disabled]="
                                importing() ||
                                !project_name().trim() ||
                                !floor_name().trim()
                            "
                            (click)="runImport()"
                        >
                            {{
                                importing()
                                    ? 'Importing...'
                                    : 'Import ' + includedCount() + ' Spaces'
                            }}
                        </button>
                    </div>
                }
            }
        </div>
    `,
    imports: [FormsModule, IconComponent, MatFormField, MatInput],
})
export class ImportComponent {
    private readonly _store = inject(StoreService);
    private readonly _router = inject(Router);

    public readonly steps = STEPS;
    public readonly object_types = OBJECT_TYPES;

    public readonly step = signal<ImportStep>('upload');
    public readonly analyzing = signal(false);
    public readonly importing = signal(false);
    public readonly error = signal('');
    public readonly file_name = signal('');
    public readonly drag_over = signal(false);
    public readonly analysis = signal<SvgAnalysis | null>(null);
    public readonly enabled_layers = signal<Set<string>>(new Set());
    public readonly mappings = signal<ObjectMapping[]>([]);
    public readonly project_name = signal('');
    public readonly floor_name = signal('');

    private _svg_content = '';

    public readonly stepIndex = computed(() =>
        STEPS.findIndex((s) => s.key === this.step()),
    );

    public readonly included = computed(() =>
        this.mappings().filter((m) => !m.excluded),
    );

    public readonly includedCount = computed(() => this.included().length);

    public readonly excludedCount = computed(
        () => this.mappings().length - this.included().length,
    );

    /** Included objects tallied by type, for the summary chips */
    public readonly typeCounts = computed(() => {
        const counts = new Map<string, number>();
        for (const mapping of this.included()) {
            counts.set(
                mapping.objectType,
                (counts.get(mapping.objectType) ?? 0) + 1,
            );
        }
        return [...counts.entries()].map(([type, count]) => ({ type, count }));
    });

    public readonly spaceLabel = (type: string) => SPACE_LABELS[type] ?? type;

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement | HTMLSelectElement).value;

    public dotClass(index: number): string {
        if (index === this.stepIndex())
            return 'bg-primary border-primary text-primary-content';
        if (index < this.stepIndex())
            return 'bg-success border-success text-success-content';
        return 'bg-base-200 border-base-300 text-base-content/60';
    }

    public onDragOver(event: DragEvent) {
        event.preventDefault();
        this.drag_over.set(true);
    }

    public onDrop(event: DragEvent) {
        event.preventDefault();
        this.drag_over.set(false);
        const file = event.dataTransfer?.files?.[0];
        if (file) this.handleFile(file);
    }

    public onFileInput(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) this.handleFile(file);
    }

    public async handleFile(file: File) {
        if (!file.name.toLowerCase().endsWith('.svg')) {
            this.error.set('Please select an SVG file.');
            return;
        }
        this.file_name.set(file.name);
        this.analyzing.set(true);
        this.error.set('');
        try {
            this._svg_content = await file.text();
            if (!this._svg_content.includes('<svg'))
                throw new Error(
                    'File does not appear to be a valid SVG document.',
                );

            const analysis = analyzeSvg(this._svg_content);
            this.analysis.set(analysis);
            this.enabled_layers.set(new Set(analysis.layers.map((l) => l.id)));
            this.mappings.set(
                analysis.objects.map((object) => ({
                    svgId: object.svgId,
                    objectType: object.suggestedType,
                    label: object.label ?? object.svgId,
                    excluded: false,
                    layer: object.layer,
                })),
            );
            this.step.set('review');
        } catch (error) {
            this.error.set(this._message(error, 'Failed to analyse SVG'));
        } finally {
            this.analyzing.set(false);
        }
    }

    public toggleLayer(id: string) {
        this.enabled_layers.update((layers) => {
            const next = new Set(layers);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    /** Carry the layer checkboxes through to the per-object exclusions */
    public applyLayerFilter() {
        const enabled = this.enabled_layers();
        this.mappings.update((mappings) =>
            mappings.map((mapping) => ({
                ...mapping,
                excluded: !enabled.has(mapping.layer),
            })),
        );
        this.step.set('map');
    }

    public updateMapping(svg_id: string, updates: Partial<ObjectMapping>) {
        this.mappings.update((mappings) =>
            mappings.map((mapping) =>
                mapping.svgId === svg_id ? { ...mapping, ...updates } : mapping,
            ),
        );
    }

    public setAllExcluded(excluded: boolean) {
        this.mappings.update((mappings) =>
            mappings.map((mapping) => ({ ...mapping, excluded })),
        );
    }

    public excludeDecorative() {
        this.mappings.update((mappings) =>
            mappings.map((mapping) => ({
                ...mapping,
                excluded: mapping.objectType === 'decorative',
            })),
        );
    }

    public async runImport() {
        const analysis = this.analysis();
        if (!analysis) return;
        this.importing.set(true);
        this.error.set('');
        try {
            const result = await this._store.importSvg({
                svg_content: this._svg_content,
                analysis,
                project_name: this.project_name().trim(),
                floor_name: this.floor_name().trim(),
                mappings: this.included().map((mapping) => ({
                    svgId: mapping.svgId,
                    objectType: mapping.objectType,
                    label: mapping.label || undefined,
                })),
            });
            this._router.navigate(['/editor', result.floorplan_id]);
        } catch (error) {
            this.error.set(this._message(error, 'Import failed'));
        } finally {
            this.importing.set(false);
        }
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
