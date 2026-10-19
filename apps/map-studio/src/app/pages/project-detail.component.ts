import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import { FloorplanSummary, Project } from '../data/types';

const BADGE_CLASSES: Record<string, string> = {
    draft: 'border-base-300 text-base-content/60 border',
    published: 'bg-success-light text-success',
    archived: 'bg-warning-light text-warning',
};

/** Inline rename target: the project name, building name, or a floor id */
type RenameTarget = 'name' | 'building' | { floor: string };

@Component({
    selector: 'map-studio-project-detail',
    template: `
        <ng-template #rename_input let-label="label">
            <input
                #edit_input
                class="border-base-300 bg-base-100 w-full rounded border px-2 py-1"
                [attr.aria-label]="label"
                [(ngModel)]="draft"
                [ngModelOptions]="{ standalone: true }"
                (keydown.enter)="saveRename()"
                (keydown.escape)="editing.set(null)"
                (blur)="saveRename()"
            />
        </ng-template>

        @if (loading()) {
            <div
                class="text-base-content/60 flex flex-col items-center gap-4 py-16"
            >
                <div
                    class="border-base-300 border-t-primary h-8 w-8 animate-spin rounded-full border-4"
                ></div>
                <p class="text-sm">Loading project...</p>
            </div>
        } @else if (!project()) {
            <div class="mx-auto max-w-[50rem]">
                <div
                    class="bg-error-light text-error border-error/30 mb-4 rounded border px-4 py-3 text-sm"
                    role="alert"
                >
                    {{ error() || 'Project not found' }}
                </div>
                <a btn class="inverse w-48" routerLink="/">Back to Projects</a>
            </div>
        } @else if (project(); as detail) {
            <div class="mx-auto max-w-[68.75rem]">
                <div class="mb-7">
                    <a
                        btn
                        class="clear mb-4 w-44 justify-start! gap-1 px-0! text-sm"
                        routerLink="/"
                    >
                        <icon class="text-base" aria-hidden="true">
                            arrow_back
                        </icon>
                        Back to Projects
                    </a>
                    <div
                        class="flex flex-wrap items-start justify-between gap-3"
                    >
                        <div class="min-w-0">
                            @if (isEditing('name')) {
                                <div class="mb-1 text-2xl font-bold">
                                    <ng-container
                                        [ngTemplateOutlet]="rename_input"
                                        [ngTemplateOutletContext]="{
                                            label: 'Project name',
                                        }"
                                    />
                                </div>
                            } @else {
                                <div class="mb-1 flex items-center gap-1">
                                    <h2 class="text-2xl font-bold">
                                        {{ detail.name }}
                                    </h2>
                                    <button
                                        icon
                                        class="hover:bg-base-200 text-base-content/50 hover:text-base-content text-sm"
                                        aria-label="Rename project"
                                        (click)="
                                            startRename('name', detail.name)
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                </div>
                            }
                            @if (isEditing('building')) {
                                <div class="text-sm">
                                    <ng-container
                                        [ngTemplateOutlet]="rename_input"
                                        [ngTemplateOutletContext]="{
                                            label: 'Building name',
                                        }"
                                    />
                                </div>
                            } @else {
                                <div
                                    class="text-base-content/60 flex items-center gap-1 text-sm"
                                >
                                    <p>
                                        {{
                                            detail.building_name ||
                                                'No building name'
                                        }}
                                    </p>
                                    <button
                                        icon
                                        class="hover:bg-base-200 text-base-content/50 hover:text-base-content text-xs"
                                        aria-label="Rename building"
                                        (click)="
                                            startRename(
                                                'building',
                                                detail.building_name ?? ''
                                            )
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                </div>
                            }
                        </div>
                        <div class="flex flex-wrap items-center gap-2">
                            <a
                                btn
                                class="inverse min-h-9! gap-1 text-sm"
                                routerLink="/import"
                                [queryParams]="{ project: detail.id }"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    upload_file
                                </icon>
                                Import SVG
                            </a>
                            @if (floorplans().length) {
                                <a
                                    btn
                                    class="inverse min-h-9! text-sm"
                                    [routerLink]="['/kiosk', detail.id]"
                                >
                                    View Kiosk
                                </a>
                            }
                        </div>
                    </div>
                </div>

                <div
                    class="mb-5 flex flex-wrap items-center justify-between gap-3"
                >
                    <h3 class="text-lg font-semibold">
                        Floors ({{ floorplans().length }})
                    </h3>
                    <button
                        btn
                        class="gap-1"
                        (click)="show_form.set(!show_form())"
                    >
                        <icon class="text-base" aria-hidden="true">
                            {{ show_form() ? 'close' : 'add' }}
                        </icon>
                        {{ show_form() ? 'Cancel' : 'New Floor' }}
                    </button>
                </div>

                @if (error(); as message) {
                    <div
                        class="bg-error-light text-error border-error/30 mb-4 rounded border px-4 py-3 text-sm"
                        role="alert"
                    >
                        {{ message }}
                    </div>
                }

                @if (show_form()) {
                    <form
                        class="bg-base-100 border-base-300 mb-5 flex items-center gap-3 rounded-lg border p-5 shadow-sm"
                        (submit)="addFloor($event)"
                    >
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1"
                        >
                            <mat-label>Floor name</mat-label>
                            <input
                                #floor_input
                                matInput
                                name="floor"
                                required
                                placeholder="e.g. Level 3"
                                [(ngModel)]="floor_name"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                        <button
                            btn
                            type="submit"
                            [disabled]="creating() || !floor_name().trim()"
                        >
                            {{ creating() ? 'Adding...' : 'Add Floor' }}
                        </button>
                    </form>
                }

                @if (!floorplans().length) {
                    <div
                        class="bg-base-100 border-base-300 rounded-lg border p-12 text-center shadow-sm"
                    >
                        <p class="mb-2 font-semibold">No floors yet</p>
                        <p class="text-base-content/60 mb-5 text-sm">
                            Add a floor to start designing.
                        </p>
                        @if (!show_form()) {
                            <button
                                btn
                                class="mx-auto gap-1"
                                (click)="show_form.set(true)"
                            >
                                <icon class="text-base" aria-hidden="true">
                                    add
                                </icon>
                                Add Floor
                            </button>
                        }
                    </div>
                } @else {
                    <div
                        class="grid [grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr))] gap-4"
                    >
                        @for (
                            floor of floorplans();
                            track floor.id;
                            let first = $first, last = $last
                        ) {
                            <div
                                class="bg-base-100 border-base-300 overflow-hidden rounded-lg border shadow-sm"
                            >
                                <!-- Mouse shortcut to the editor; the Edit link serves keyboard and screen reader users -->
                                <a
                                    class="bg-base-200 border-base-300 flex h-36 items-center justify-center border-b no-underline"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    [routerLink]="['/editor', floor.id]"
                                >
                                    @if (previewFor(floor); as preview) {
                                        <img
                                            [src]="preview"
                                            alt=""
                                            class="h-full w-full object-cover"
                                        />
                                    } @else {
                                        <span
                                            class="text-base-content/60 text-xs"
                                        >
                                            No source image
                                        </span>
                                    }
                                </a>

                                <div class="p-4">
                                    <div
                                        class="mb-3 flex items-center justify-between gap-2"
                                    >
                                        @if (isEditing({ floor: floor.id })) {
                                            <div class="flex-1 text-sm">
                                                <ng-container
                                                    [ngTemplateOutlet]="
                                                        rename_input
                                                    "
                                                    [ngTemplateOutletContext]="{
                                                        label: 'Floor name',
                                                    }"
                                                />
                                            </div>
                                        } @else {
                                            <div
                                                class="flex min-w-0 items-center gap-1"
                                            >
                                                <h4
                                                    class="truncate text-sm font-semibold"
                                                >
                                                    {{ floor.floor_name }}
                                                </h4>
                                                <button
                                                    icon
                                                    class="hover:bg-base-200 text-base-content/50 hover:text-base-content text-xs"
                                                    [attr.aria-label]="
                                                        'Rename ' +
                                                        floor.floor_name
                                                    "
                                                    (click)="
                                                        startRename(
                                                            { floor: floor.id },
                                                            floor.floor_name
                                                        )
                                                    "
                                                >
                                                    <icon>edit</icon>
                                                </button>
                                            </div>
                                        }
                                        <span
                                            class="rounded-xl px-2.5 py-0.5 text-xs font-semibold capitalize"
                                            [class]="badgeClass(floor.status)"
                                        >
                                            {{ floor.status }}
                                        </span>
                                    </div>
                                    <div
                                        class="flex items-center justify-between gap-2"
                                    >
                                        <div class="flex items-center gap-1">
                                            <button
                                                icon
                                                class="hover:bg-base-200 text-xs disabled:opacity-30"
                                                [attr.aria-label]="
                                                    'Move ' +
                                                    floor.floor_name +
                                                    ' up'
                                                "
                                                [disabled]="
                                                    first || reordering()
                                                "
                                                (click)="moveFloor(floor, -1)"
                                            >
                                                <icon>arrow_upward</icon>
                                            </button>
                                            <button
                                                icon
                                                class="hover:bg-base-200 text-xs disabled:opacity-30"
                                                [attr.aria-label]="
                                                    'Move ' +
                                                    floor.floor_name +
                                                    ' down'
                                                "
                                                [disabled]="
                                                    last || reordering()
                                                "
                                                (click)="moveFloor(floor, 1)"
                                            >
                                                <icon>arrow_downward</icon>
                                            </button>
                                            <span
                                                class="text-base-content/60 ml-1 text-xs"
                                            >
                                                v{{ floor.version }}
                                            </span>
                                        </div>
                                        <div class="flex flex-wrap gap-1.5">
                                            <a
                                                btn
                                                class="min-h-0! px-3! py-1! text-xs"
                                                [routerLink]="[
                                                    '/editor',
                                                    floor.id,
                                                ]"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                btn
                                                class="inverse min-h-0! px-2! py-1! text-xs"
                                                [routerLink]="[
                                                    '/kiosk',
                                                    detail.id,
                                                    floor.id,
                                                ]"
                                            >
                                                Kiosk
                                            </a>
                                            <button
                                                btn
                                                class="clear text-error! hover:bg-error-light! ml-3 min-h-0! px-2! py-1! text-xs"
                                                [attr.aria-label]="
                                                    'Delete ' + floor.floor_name
                                                "
                                                (click)="removeFloor(floor)"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        }
    `,
    imports: [
        FormsModule,
        IconComponent,
        MatFormField,
        MatInput,
        MatLabel,
        NgTemplateOutlet,
        RouterLink,
    ],
})
export class ProjectDetailComponent {
    private readonly _store = inject(StoreService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _floor_input =
        viewChild<ElementRef<HTMLInputElement>>('floor_input');
    private readonly _edit_input =
        viewChild<ElementRef<HTMLInputElement>>('edit_input');

    private readonly _id = this._route.snapshot.paramMap.get('id') ?? '';

    public readonly project = signal<Project | null>(null);
    public readonly loading = signal(true);
    public readonly error = signal('');
    public readonly show_form = signal(false);
    public readonly creating = signal(false);
    public readonly reordering = signal(false);
    public readonly floor_name = signal('');
    /** Field being renamed inline, and its draft value */
    public readonly editing = signal<RenameTarget | null>(null);
    public readonly draft = signal('');
    /** Object URLs for stored background images, keyed by floorplan id */
    public readonly previews = signal<Record<string, string>>({});

    private _destroyed = false;

    constructor() {
        this.load();
        inject(DestroyRef).onDestroy(() => {
            this._destroyed = true;
            this._revokePreviews(this.previews());
        });
        // Focus the floor name field each time the form opens
        effect(() => this._floor_input()?.nativeElement.focus());
        // Focus and select the rename field when it appears
        effect(() => this._edit_input()?.nativeElement.select());
    }

    public readonly badgeClass = (status: string) =>
        BADGE_CLASSES[status] ?? BADGE_CLASSES['draft'];

    public readonly floorplans = computed(() =>
        [...(this.project()?.floorplans ?? [])].sort(
            (a, b) => a.floor_index - b.floor_index,
        ),
    );

    public readonly previewFor = (floor: FloorplanSummary) =>
        this.previews()[floor.id] ?? null;

    public readonly isEditing = (target: RenameTarget) => {
        const editing = this.editing();
        if (typeof target === 'string' || typeof editing === 'string') {
            return target === editing;
        }
        return editing?.floor === target.floor;
    };

    public async load() {
        if (!this._id) return;
        this.loading.set(true);
        this.error.set('');
        try {
            const project = await this._store.getProject(this._id);
            this.project.set(project);
            await this._loadPreviews(project.floorplans ?? []);
        } catch (error) {
            this.error.set(this._message(error, 'Failed to load project'));
        } finally {
            this.loading.set(false);
        }
    }

    public startRename(target: RenameTarget, value: string) {
        this.draft.set(value);
        this.editing.set(target);
    }

    /** Saves the inline rename. Enter and blur both call this. */
    public async saveRename() {
        const target = this.editing();
        const project = this.project();
        if (!target || !project) return;
        this.editing.set(null);
        const value = this.draft().trim();
        try {
            if (target === 'name') {
                if (!value || value === project.name) return;
                await this._store.updateProject(project.id, { name: value });
                this._patchProject({ name: value });
            } else if (target === 'building') {
                const building_name = value || null;
                if (building_name === project.building_name) return;
                await this._store.updateProject(project.id, { building_name });
                this._patchProject({ building_name });
            } else {
                const floor = this.floorplans().find(
                    (f) => f.id === target.floor,
                );
                if (!floor || !value || value === floor.floor_name) return;
                this._replaceFloor(
                    await this._store.updateFloorplan(floor.id, {
                        floor_name: value,
                    }),
                );
            }
        } catch (error) {
            this.error.set(this._message(error, 'Failed to rename'));
        }
    }

    /** Moves a floor one place up (-1) or down (1) and renumbers `floor_index` */
    public async moveFloor(floor: FloorplanSummary, offset: -1 | 1) {
        const order = [...this.floorplans()];
        const from = order.findIndex((f) => f.id === floor.id);
        const to = from + offset;
        if (from < 0 || to < 0 || to >= order.length) return;
        [order[from], order[to]] = [order[to], order[from]];
        this.reordering.set(true);
        try {
            const changed = order
                .map((f, floor_index) => ({ f, floor_index }))
                .filter(({ f, floor_index }) => f.floor_index !== floor_index);
            const updated = await Promise.all(
                changed.map(({ f, floor_index }) =>
                    this._store.updateFloorplan(f.id, { floor_index }),
                ),
            );
            updated.forEach((f) => this._replaceFloor(f));
        } catch (error) {
            this.error.set(this._message(error, 'Failed to reorder floors'));
        } finally {
            this.reordering.set(false);
        }
    }

    public async addFloor(event: Event) {
        event.preventDefault();
        const name = this.floor_name().trim();
        if (!name) return;
        this.creating.set(true);
        try {
            const floor = await this._store.addFloorplan(this._id, name);
            this._patchProject({
                floorplans: [...this.floorplans(), floor],
            });
            this.floor_name.set('');
            this.show_form.set(false);
        } catch (error) {
            this.error.set(this._message(error, 'Failed to add floor'));
        } finally {
            this.creating.set(false);
        }
    }

    public async removeFloor(floor: FloorplanSummary) {
        const synced = floor.level_zone_id
            ? ' It will not be imported from PlaceOS again.'
            : '';
        const confirmed = confirm(
            `Delete floor "${floor.floor_name}" and its floor plan? This cannot be undone.${synced}`,
        );
        if (!confirmed) return;
        try {
            await this._store.deleteFloorplan(floor.id);
            this._patchProject({
                floorplans: this.floorplans().filter((f) => f.id !== floor.id),
            });
        } catch (error) {
            this.error.set(this._message(error, 'Failed to delete floor'));
        }
    }

    private _patchProject(data: Partial<Project>) {
        this.project.update((project) =>
            project ? { ...project, ...data } : project,
        );
    }

    private _replaceFloor(floor: FloorplanSummary) {
        this._patchProject({
            floorplans: this.floorplans().map((f) =>
                f.id === floor.id ? floor : f,
            ),
        });
    }

    private async _loadPreviews(floorplans: FloorplanSummary[]) {
        const entries = await Promise.all(
            floorplans.map(
                async (floor) =>
                    [
                        floor.id,
                        await this._store.getSourceThumbnailUrl(floor.id),
                    ] as const,
            ),
        );
        const previews = Object.fromEntries(
            entries.filter((entry): entry is [string, string] => !!entry[1]),
        );
        if (this._destroyed) return this._revokePreviews(previews);
        this._revokePreviews(this.previews());
        this.previews.set(previews);
    }

    private _revokePreviews(previews: Record<string, string>) {
        for (const url of Object.values(previews)) URL.revokeObjectURL(url);
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
