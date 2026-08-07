import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import { Floorplan, Project } from '../data/types';

const BADGE_CLASSES: Record<string, string> = {
    draft: 'border-base-300 text-base-content/60 border',
    published: 'bg-success-light text-success',
    archived: 'bg-warning-light text-warning',
};

@Component({
    selector: 'map-studio-project-detail',
    template: `
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
                        <icon class="text-base">arrow_back</icon>
                        Back to Projects
                    </a>
                    <div class="flex items-start justify-between">
                        <div>
                            <h2 class="mb-1 text-2xl font-bold">
                                {{ detail.name }}
                            </h2>
                            @if (detail.building_name) {
                                <p class="text-base-content/60 text-sm">
                                    {{ detail.building_name }}
                                </p>
                            }
                        </div>
                        <div class="flex items-center gap-2">
                            <a
                                btn
                                class="inverse min-h-9! text-sm"
                                [routerLink]="['/kiosk', detail.id]"
                            >
                                View Kiosk
                            </a>
                            <span
                                class="rounded-xl px-2.5 py-0.5 text-xs font-semibold capitalize"
                                [class]="badgeClass(detail.status)"
                            >
                                {{ detail.status }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mb-5 flex items-center justify-between">
                    <h3 class="text-lg font-semibold">
                        Floorplans ({{ floorplans().length }})
                    </h3>
                    <button
                        btn
                        class="gap-1"
                        (click)="show_form.set(!show_form())"
                    >
                        <icon class="text-base">
                            {{ show_form() ? 'close' : 'add' }}
                        </icon>
                        {{ show_form() ? 'Cancel' : 'New Floor' }}
                    </button>
                </div>

                @if (error(); as message) {
                    <div
                        class="bg-error-light text-error border-error/30 mb-4 rounded border px-4 py-3 text-sm"
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
                            <input
                                matInput
                                name="floor"
                                required
                                placeholder="Floor name e.g. Level 3"
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
                        <p class="mb-2 font-semibold">No floorplans yet</p>
                        <p class="text-base-content/60 mb-5 text-sm">
                            Add a floor to start designing.
                        </p>
                        <button
                            btn
                            class="mx-auto gap-1"
                            (click)="show_form.set(true)"
                        >
                            <icon class="text-base">add</icon>
                            Add Floor
                        </button>
                    </div>
                } @else {
                    <div
                        class="grid [grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr))] gap-4"
                    >
                        @for (floor of floorplans(); track floor.id) {
                            <div
                                class="bg-base-100 border-base-300 overflow-hidden rounded-lg border shadow-sm"
                            >
                                <div
                                    class="bg-base-200 border-base-300 flex h-36 items-center justify-center border-b"
                                >
                                    @if (previewFor(floor); as preview) {
                                        <img
                                            [src]="preview"
                                            [alt]="floor.floor_name"
                                            class="h-full w-full object-cover"
                                        />
                                    } @else {
                                        <span
                                            class="text-base-content/60 text-xs"
                                        >
                                            No source image
                                        </span>
                                    }
                                </div>

                                <div class="p-4">
                                    <div
                                        class="mb-3 flex items-center justify-between"
                                    >
                                        <h4 class="text-sm font-semibold">
                                            {{ floor.floor_name }}
                                        </h4>
                                        <span
                                            class="rounded-xl px-2.5 py-0.5 text-xs font-semibold capitalize"
                                            [class]="badgeClass(floor.status)"
                                        >
                                            {{ floor.status }}
                                        </span>
                                    </div>
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <span
                                            class="text-base-content/60 text-xs"
                                        >
                                            v{{ floor.version }}
                                        </span>
                                        <div class="flex flex-wrap gap-1.5">
                                            <button
                                                btn
                                                class="clear text-error! min-h-0! px-2! py-1! text-xs"
                                                (click)="removeFloor(floor)"
                                            >
                                                Delete
                                            </button>
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
                                            <a
                                                btn
                                                class="min-h-0! px-2! py-1! text-xs"
                                                [routerLink]="[
                                                    '/editor',
                                                    floor.id,
                                                ]"
                                            >
                                                Edit
                                            </a>
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
    imports: [FormsModule, IconComponent, MatFormField, MatInput, RouterLink],
})
export class ProjectDetailComponent {
    private readonly _store = inject(StoreService);
    private readonly _route = inject(ActivatedRoute);

    private readonly _id = this._route.snapshot.paramMap.get('id') ?? '';

    public readonly project = signal<Project | null>(null);
    public readonly loading = signal(true);
    public readonly error = signal('');
    public readonly show_form = signal(false);
    public readonly creating = signal(false);
    public readonly floor_name = signal('');
    /** Object URLs for stored background images, keyed by floorplan id */
    public readonly previews = signal<Record<string, string>>({});

    constructor() {
        this.load();
    }

    public readonly badgeClass = (status: string) =>
        BADGE_CLASSES[status] ?? BADGE_CLASSES['draft'];

    public readonly floorplans = () =>
        [...(this.project()?.floorplans ?? [])].sort(
            (a, b) => a.floor_index - b.floor_index,
        );

    public readonly previewFor = (floor: Floorplan) =>
        this.previews()[floor.id] ?? null;

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

    public async addFloor(event: Event) {
        event.preventDefault();
        const name = this.floor_name().trim();
        if (!name) return;
        this.creating.set(true);
        try {
            await this._store.addFloorplan(
                this._id,
                name,
                this.floorplans().length,
            );
            this.floor_name.set('');
            this.show_form.set(false);
            await this.load();
        } catch (error) {
            this.error.set(this._message(error, 'Failed to add floorplan'));
        } finally {
            this.creating.set(false);
        }
    }

    public async removeFloor(floor: Floorplan) {
        const confirmed = confirm(
            `Delete floor "${floor.floor_name}"? This cannot be undone.`,
        );
        if (!confirmed) return;
        try {
            await this._store.deleteFloorplan(floor.id);
            await this.load();
        } catch (error) {
            this.error.set(this._message(error, 'Failed to delete floor'));
        }
    }

    private async _loadPreviews(floorplans: Floorplan[]) {
        const entries = await Promise.all(
            floorplans.map(
                async (floor) =>
                    [
                        floor.id,
                        await this._store.getSourceImageUrl(floor.id),
                    ] as const,
            ),
        );
        this.previews.set(
            Object.fromEntries(
                entries.filter(
                    (entry): entry is [string, string] => !!entry[1],
                ),
            ),
        );
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
