import {
    Component,
    effect,
    ElementRef,
    inject,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';

import { lastUpdated, StoreService } from '../data/store.service';
import { Project } from '../data/types';

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

@Component({
    selector: 'map-studio-projects',
    template: `
        <div class="mx-auto max-w-[68.75rem]">
            <div class="mb-7 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <!-- Important margins beat the global heading and paragraph margins -->
                    <h2 class="mb-1! text-2xl font-bold">Projects</h2>
                    <p class="text-base-content/60 m-0! text-sm">
                        Manage your floor plan projects
                    </p>
                </div>
                <div class="flex gap-2.5">
                    <a btn class="inverse gap-1" routerLink="/import">
                        <icon class="text-base" aria-hidden="true">
                            upload_file
                        </icon>
                        Import SVG
                    </a>
                    <button
                        btn
                        class="gap-1"
                        (click)="show_form.set(!show_form())"
                    >
                        <icon class="text-base" aria-hidden="true">
                            {{ show_form() ? 'close' : 'add' }}
                        </icon>
                        {{ show_form() ? 'Cancel' : 'New Project' }}
                    </button>
                </div>
            </div>

            @switch (placeos_sync()) {
                @case ('syncing') {
                    <div
                        class="bg-base-100 border-base-300 text-base-content/60 mb-6 flex items-center gap-3 rounded border px-4 py-3 text-sm"
                        role="status"
                    >
                        <div
                            class="border-base-300 border-t-primary h-4 w-4 animate-spin rounded-full border-2"
                        ></div>
                        Syncing buildings from PlaceOS…
                    </div>
                }
                @case ('error') {
                    <div
                        class="bg-error-light text-error border-error/30 mb-6 flex flex-wrap items-center justify-between gap-3 rounded border px-4 py-3 text-sm"
                        role="alert"
                    >
                        Could not sync buildings from PlaceOS.
                        <button
                            btn
                            class="inverse min-h-0! px-3! py-1! text-xs"
                            (click)="retrySync()"
                        >
                            Retry
                        </button>
                    </div>
                }
            }

            @if (error(); as message) {
                <div
                    class="bg-error-light text-error border-error/30 mb-6 rounded border px-4 py-3 text-sm"
                    role="alert"
                >
                    {{ message }}
                </div>
            }

            @if (show_form()) {
                <form
                    class="bg-base-100 border-base-300 mb-6 rounded-lg border p-6 shadow-sm"
                    (submit)="create($event)"
                    (keydown.escape)="show_form.set(false)"
                >
                    <div class="grid gap-4 sm:grid-cols-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-label>Project name</mat-label>
                            <input
                                #name_input
                                matInput
                                name="name"
                                required
                                placeholder="e.g. Sydney HQ"
                                [(ngModel)]="form_name"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-label>Building name</mat-label>
                            <input
                                matInput
                                name="building"
                                placeholder="e.g. Tower A"
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
                    @if (!show_form()) {
                        <button
                            btn
                            class="mx-auto gap-1"
                            (click)="show_form.set(true)"
                        >
                            <icon class="text-base" aria-hidden="true">
                                add
                            </icon>
                            New Project
                        </button>
                    }
                </div>
            } @else {
                <div
                    class="grid [grid-template-columns:repeat(auto-fill,minmax(18.75rem,1fr))] gap-5"
                >
                    @for (project of projects(); track project.id) {
                        <!-- The name link stretches over the card, so the whole card opens the project -->
                        <div
                            class="bg-base-100 border-base-300 has-[a:focus-visible]:ring-primary relative flex flex-col rounded-lg border p-5 shadow-sm transition-shadow hover:shadow-md has-[a:focus-visible]:ring-2"
                        >
                            <div class="mb-3 min-w-0">
                                <h3
                                    class="mb-1 truncate text-base font-semibold"
                                    [title]="project.name"
                                >
                                    <a
                                        class="no-underline after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                                        [routerLink]="['/project', project.id]"
                                    >
                                        {{ project.name }}
                                    </a>
                                </h3>
                                @if (project.building_name) {
                                    <p class="text-base-content/60 text-xs">
                                        {{ project.building_name }}
                                    </p>
                                }
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
                                    class="clear text-error! relative z-10 min-h-0! px-2.5! py-1! text-xs"
                                    [attr.aria-label]="
                                        'Delete project ' + project.name
                                    "
                                    (click)="remove(project)"
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
    imports: [
        FormsModule,
        IconComponent,
        MatFormField,
        MatInput,
        MatLabel,
        RouterLink,
    ],
})
export class ProjectsComponent {
    private readonly _store = inject(StoreService);
    private readonly _router = inject(Router);
    private readonly _name_input =
        viewChild<ElementRef<HTMLInputElement>>('name_input');

    public readonly projects = signal<Project[]>([]);
    public readonly loading = signal(true);
    public readonly error = signal('');
    public readonly show_form = signal(false);
    public readonly creating = signal(false);
    public readonly form_name = signal('');
    public readonly form_building = signal('');
    public readonly placeos_sync = this._store.placeos_sync;

    constructor() {
        // Focus the name field each time the form opens
        effect(() => this._name_input()?.nativeElement.focus());
        // Load now, then reload quietly after each zone sync so new buildings appear
        effect(() => {
            const version = this._store.zone_sync_version();
            untracked(() => void this.load(version > 0));
        });
    }

    public readonly floorCount = (project: Project) =>
        project.floorplans?.length ?? 0;

    public readonly updatedOn = (project: Project) =>
        formatDate(lastUpdated(project));

    /** Reads the project list. `quiet` keeps the current list on screen. */
    public async load(quiet = false) {
        if (!quiet) this.loading.set(true);
        this.error.set('');
        try {
            this.projects.set(await this._store.listProjects());
        } catch (error) {
            this.error.set(this._message(error, 'Failed to load projects'));
        } finally {
            this.loading.set(false);
        }
    }

    public retrySync() {
        this._store.syncFromPlaceOS();
    }

    public async create(event: Event) {
        event.preventDefault();
        const name = this.form_name().trim();
        if (!name) return;
        this.creating.set(true);
        this.error.set('');
        try {
            const project = await this._store.createProject(
                name,
                this.form_building().trim() || undefined,
            );
            await this._router.navigate(['/project', project.id]);
        } catch (error) {
            this.error.set(this._message(error, 'Failed to create project'));
        } finally {
            this.creating.set(false);
        }
    }

    public async remove(project: Project) {
        const synced = project.building_zone_id
            ? ' It will not be imported from PlaceOS again.'
            : '';
        const confirmed = confirm(
            `Delete project "${project.name}" and all of its floors? This cannot be undone.${synced}`,
        );
        if (!confirmed) return;
        this.error.set('');
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
