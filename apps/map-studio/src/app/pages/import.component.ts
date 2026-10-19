import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import { analyzeSvg, SvgAnalysis } from '../data/svg-import';
import { MapObjectType, Project } from '../data/types';

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
                        @if (target_project(); as project) {
                            Upload an SVG file to add it as a new floor in
                            <span class="font-semibold">{{ project.name }}</span
                            >.
                        } @else {
                            Upload an SVG file to analyse its structure and
                            import it as a floor plan.
                        }
                    </p>

                    @if (error(); as message) {
                        <div
                            class="bg-error-light text-error border-error/30 mb-4 rounded border px-4 py-3 text-sm"
                            role="alert"
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
                    <p class="text-base-content/60 mt-3 text-xs">
                        Have a PNG or JPG plan? Create a floor, open it in the
                        editor, and upload the image there to trace it.
                    </p>

                    <div class="mt-6 flex justify-between">
                        <a btn class="inverse" [routerLink]="cancel_link">
                            Cancel
                        </a>
                        @if (analysis()) {
                            <button btn (click)="step.set('review')">
                                Next: Review
                            </button>
                        }
                    </div>
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
                            Exclude Decorative
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
                                                [attr.aria-label]="
                                                    'Include ' + mapping.svgId
                                                "
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
                                                [attr.aria-label]="
                                                    'Label for ' + mapping.svgId
                                                "
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
                                                [attr.aria-label]="
                                                    'Type for ' + mapping.svgId
                                                "
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
                            role="alert"
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
                            @for (entry of spaceCounts(); track entry.type) {
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
                        @if (decorativeCount()) {
                            <p class="text-base-content/60 mt-3 text-xs">
                                Plus {{ decorativeCount() }} decorative
                                {{
                                    decorativeCount() === 1 ? 'shape' : 'shapes'
                                }}
                                that are not managed.
                            </p>
                        }
                    </div>

                    <div
                        class="bg-base-100 border-base-300 mb-5 rounded-lg border p-5 shadow-sm"
                    >
                        <h3 class="mb-4 text-sm font-semibold">
                            {{
                                target_project()
                                    ? 'Floor Details'
                                    : 'Project Details'
                            }}
                        </h3>
                        @if (target_project(); as project) {
                            <p class="text-base-content/60 mb-4 text-sm">
                                The floor is added to
                                <span class="font-semibold">{{
                                    project.name
                                }}</span
                                >.
                            </p>
                        }
                        <div class="grid gap-4 sm:grid-cols-2">
                            @if (!target_project()) {
                                <div>
                                    <label for="import-project"
                                        >Project Name</label
                                    >
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
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        />
                                    </mat-form-field>
                                </div>
                            }
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
                                !includedCount() ||
                                (!target_project() && !project_name().trim()) ||
                                !floor_name().trim()
                            "
                            (click)="runImport()"
                        >
                            {{
                                importing()
                                    ? 'Importing...'
                                    : 'Import ' +
                                      includedCount() +
                                      (includedCount() === 1
                                          ? ' Space'
                                          : ' Spaces')
                            }}
                        </button>
                    </div>
                }
            }
        </div>
    `,
    imports: [FormsModule, IconComponent, MatFormField, MatInput, RouterLink],
})
export class ImportComponent {
    private readonly _store = inject(StoreService);
    private readonly _router = inject(Router);
    /** Existing project to add the floor to, from `?project=<id>` */
    private readonly _project_id =
        inject(ActivatedRoute).snapshot.queryParamMap.get('project');

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
    public readonly target_project = signal<Project | null>(null);
    public readonly cancel_link = this._project_id
        ? ['/project', this._project_id]
        : ['/'];

    private _svg_content = '';
    /** Layers whose state was last carried through to `mappings` */
    private _applied_layers = new Set<string>();

    constructor() {
        if (this._project_id) this._loadProject(this._project_id);
    }

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

    /** Included objects tallied by type, without decorative shapes */
    public readonly spaceCounts = computed(() =>
        this.typeCounts().filter((entry) => entry.type !== 'decorative'),
    );

    public readonly decorativeCount = computed(
        () =>
            this.included().filter((m) => m.objectType === 'decorative').length,
    );

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
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        // Clear so that picking the same file again still fires a change
        input.value = '';
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
            if (!analysis.objects.length) {
                throw new Error(
                    'No importable shapes were found in this SVG. Each room, desk or zone shape needs an id attribute.',
                );
            }
            this.analysis.set(analysis);
            const layers = new Set(analysis.layers.map((l) => l.id));
            this.enabled_layers.set(layers);
            this._applied_layers = new Set(layers);
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
            this.analysis.set(null);
            this.mappings.set([]);
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

    /**
     * Carry the layer checkboxes through to the per-object exclusions. Only
     * rows on a layer that changed since the last pass are touched, so
     * choices made on the Map step survive going Back and forward.
     */
    public applyLayerFilter() {
        const enabled = this.enabled_layers();
        const applied = this._applied_layers;
        this.mappings.update((mappings) =>
            mappings.map((mapping) =>
                enabled.has(mapping.layer) === applied.has(mapping.layer)
                    ? mapping
                    : { ...mapping, excluded: !enabled.has(mapping.layer) },
            ),
        );
        this._applied_layers = new Set(enabled);
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
            mappings.map((mapping) =>
                mapping.objectType === 'decorative'
                    ? { ...mapping, excluded: true }
                    : mapping,
            ),
        );
    }

    public async runImport() {
        const analysis = this.analysis();
        if (!analysis) return;
        // A missing target project must not fall back to creating a new one
        if (this._project_id && !this.target_project()) {
            this.error.set('The project to import into was not found.');
            return;
        }
        this.importing.set(true);
        this.error.set('');
        try {
            const result = await this._store.importSvg({
                svg_content: this._svg_content,
                analysis,
                project_id: this.target_project()?.id,
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

    private async _loadProject(id: string) {
        try {
            this.target_project.set(await this._store.getProject(id));
        } catch (error) {
            this.error.set(this._message(error, 'Project not found'));
        }
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
