import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import { Project } from '../data/types';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

const BADGE_CLASSES: Record<Project['status'], string> = {
    draft: 'border-base-300 text-base-content/60 border',
    published: 'bg-success-light text-success',
    archived: 'bg-warning-light text-warning',
};

@Component({
    selector: 'map-studio-projects',
    template: `
        <div class="mx-auto max-w-[68.75rem]">
            <div class="mb-7 flex items-center justify-between">
                <div>
                    <h2 class="mb-1 text-2xl font-bold">Projects</h2>
                    <p class="text-base-content/60 text-sm">
                        Manage your floor plan projects
                    </p>
                </div>
                <div class="flex gap-2.5">
                    <a btn class="inverse gap-1" routerLink="/import">
                        <icon class="text-base">upload_file</icon>
                        Import SVG
                    </a>
                    <button
                        btn
                        class="gap-1"
                        (click)="show_form.set(!show_form())"
                    >
                        <icon class="text-base">
                            {{ show_form() ? 'close' : 'add' }}
                        </icon>
                        {{ show_form() ? 'Cancel' : 'New Project' }}
                    </button>
                </div>
            </div>

            @if (error(); as message) {
                <div
                    class="bg-error-light text-error border-error/30 mb-6 rounded border px-4 py-3 text-sm"
                >
                    {{ message }}
                </div>
            }

            @if (show_form()) {
                <form
                    class="bg-base-100 border-base-300 mb-6 rounded-lg border p-6 shadow-sm"
                    (submit)="create($event)"
                >
                    <div class="grid gap-4 sm:grid-cols-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                name="name"
                                required
                                placeholder="Project name e.g. Sydney HQ"
                                [(ngModel)]="form_name"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                name="building"
                                placeholder="Building name e.g. Tower A"
                                [(ngModel)]="form_building"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                    </div>
                    <div class="mt-4 flex justify-end">
                        <button
                            btn
                            type="submit"
                            [disabled]="creating() || !form_name().trim()"
                        >
                            {{ creating() ? 'Creating...' : 'Create Project' }}
                        </button>
                    </div>
                </form>
            }

            @if (loading()) {
                <div
                    class="text-base-content/60 flex flex-col items-center gap-4 py-16"
                >
                    <div
                        class="border-base-300 border-t-primary h-8 w-8 animate-spin rounded-full border-4"
                    ></div>
                    <p class="text-sm">Loading projects...</p>
                </div>
            } @else if (!projects().length) {
                <div
                    class="bg-base-100 border-base-300 rounded-lg border p-16 text-center shadow-sm"
                >
                    <p class="mb-2 text-lg font-semibold">No projects yet</p>
                    <p class="text-base-content/60 mb-5 text-sm">
                        Create your first project to start designing floor
                        plans.
                    </p>
                    <button
                        btn
                        class="mx-auto gap-1"
                        (click)="show_form.set(true)"
                    >
                        <icon class="text-base">add</icon>
                        New Project
                    </button>
                </div>
            } @else {
                <div
                    class="grid [grid-template-columns:repeat(auto-fill,minmax(18.75rem,1fr))] gap-5"
                >
                    @for (project of projects(); track project.id) {
                        <div
                            class="bg-base-100 border-base-300 focus-within:ring-primary flex cursor-pointer flex-col rounded-lg border p-5 shadow-sm transition-shadow focus-within:ring-2 hover:shadow-md"
                            role="link"
                            tabindex="0"
                            [attr.aria-label]="'Open ' + project.name"
                            (click)="open(project)"
                            (keydown.enter)="open(project)"
                            (keydown.space)="
                                $event.preventDefault(); open(project)
                            "
                        >
                            <div class="mb-3 flex items-start justify-between">
                                <div class="min-w-0 flex-1">
                                    <h3
                                        class="mb-1 truncate text-base font-semibold"
                                    >
                                        <span>
                                            {{ project.name }}
                                        </span>
                                    </h3>
                                    @if (project.building_name) {
                                        <p class="text-base-content/60 text-xs">
                                            {{ project.building_name }}
                                        </p>
                                    }
                                </div>
                                <span
                                    class="rounded-xl px-2.5 py-0.5 text-xs font-semibold capitalize"
                                    [class]="badgeClass(project)"
                                >
                                    {{ project.status }}
                                </span>
                            </div>

                            <div
                                class="border-base-300 mt-auto flex items-center justify-between border-t pt-3"
                            >
                                <div
                                    class="text-base-content/60 flex gap-4 text-xs"
                                >
                                    <span>
                                        {{ floorCount(project) }}
                                        {{
                                            floorCount(project) === 1
                                                ? 'floor'
                                                : 'floors'
                                        }}
                                    </span>
                                    <span
                                        >Updated {{ updatedOn(project) }}</span
                                    >
                                </div>
                                <button
                                    btn
                                    class="clear text-error! min-h-0! px-2.5! py-1! text-xs"
                                    (click)="remove($event, project)"
                                    (keydown)="$event.stopPropagation()"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    `,
    imports: [FormsModule, IconComponent, MatFormField, MatInput, RouterLink],
})
export class ProjectsComponent {
    private readonly _store = inject(StoreService);
    private readonly _router = inject(Router);

    public readonly projects = signal<Project[]>([]);
    public readonly loading = signal(true);
    public readonly error = signal('');
    public readonly show_form = signal(false);
    public readonly creating = signal(false);
    public readonly form_name = signal('');
    public readonly form_building = signal('');

    constructor() {
        this.load();
    }

    public readonly floorCount = (project: Project) =>
        project.floorplans?.length ?? 0;

    public readonly updatedOn = (project: Project) =>
        formatDate(project.updated_at);

    public readonly badgeClass = (project: Project) =>
        BADGE_CLASSES[project.status] ?? BADGE_CLASSES.draft;

    public async load() {
        this.loading.set(true);
        this.error.set('');
        try {
            this.projects.set(await this._store.listProjects());
        } catch (error) {
            this.error.set(this._message(error, 'Failed to load projects'));
        } finally {
            this.loading.set(false);
        }
    }

    public async create(event: Event) {
        event.preventDefault();
        const name = this.form_name().trim();
        if (!name) return;
        this.creating.set(true);
        try {
            await this._store.createProject(
                name,
                this.form_building().trim() || undefined,
            );
            this.form_name.set('');
            this.form_building.set('');
            this.show_form.set(false);
            await this.load();
        } catch (error) {
            this.error.set(this._message(error, 'Failed to create project'));
        } finally {
            this.creating.set(false);
        }
    }

    public open(project: Project) {
        this._router.navigate(['/project', project.id]);
    }

    public async remove(event: Event, project: Project) {
        event.stopPropagation();
        const confirmed = confirm(
            `Delete project "${project.name}"? This cannot be undone.`,
        );
        if (!confirmed) return;
        try {
            await this._store.deleteProject(project.id);
            this.projects.update((list) =>
                list.filter((p) => p.id !== project.id),
            );
        } catch (error) {
            this.error.set(this._message(error, 'Failed to delete project'));
        }
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
