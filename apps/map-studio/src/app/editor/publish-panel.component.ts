import { Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '@placeos/components';

import {
    PlaceOSService,
    PlaceOSSystem,
    PlaceOSZone,
} from '../data/placeos.service';
import { EditorStateService } from './editor-state.service';
import { bookableObjects, buildSvg, preflightChecks } from './svg-export';
import { ToastService } from './toast.service';

@Component({
    selector: 'map-studio-publish-panel',
    template: `
        <div class="flex h-full flex-col overflow-y-auto">
            <div class="border-base-300 border-b p-3">
                <h3 class="mb-2 text-xs font-bold">Pre-publish checks</h3>
                @for (check of checks(); track check.label) {
                    <div class="flex items-start gap-1.5 py-0.5 text-xs">
                        <icon
                            class="text-base"
                            [class]="check.pass ? 'text-success' : 'text-error'"
                        >
                            {{ check.pass ? 'check_circle' : 'cancel' }}
                        </icon>
                        <div class="min-w-0 flex-1">
                            <div>{{ check.label }}</div>
                            @if (!check.pass && check.detail) {
                                <div class="text-error truncate">
                                    {{ check.detail }}
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

            <div class="border-base-300 border-b p-3">
                <h3 class="mb-2 text-xs font-bold">Export</h3>
                <button btn class="w-full" (click)="download()">
                    Download SVG
                </button>
                <p class="text-base-content/60 mt-1.5 text-xs">
                    Vector only — the background image is not included.
                </p>
            </div>

            <div class="p-3">
                <h3 class="mb-2 text-xs font-bold">Publish to PlaceOS</h3>

                @if (!placeos.config.configured) {
                    <p class="text-base-content/60 text-xs">
                        Add a PlaceOS API key in Settings to publish directly.
                    </p>
                } @else {
                    <select
                        class="border-base-300 mb-1.5 w-full rounded border px-2 py-1 text-xs"
                        (change)="pickBuilding(asValue($event))"
                    >
                        <option value="">Select building...</option>
                        @for (zone of buildings(); track zone.id) {
                            <option [value]="zone.id">
                                {{ zone.display_name || zone.name }}
                            </option>
                        }
                    </select>

                    @if (building()) {
                        <select
                            class="border-base-300 mb-1.5 w-full rounded border px-2 py-1 text-xs"
                            (change)="pickLevel(asValue($event))"
                        >
                            <option value="">Select level...</option>
                            @for (zone of levels(); track zone.id) {
                                <option [value]="zone.id">
                                    {{ zone.display_name || zone.name }}
                                </option>
                            }
                        </select>
                    }

                    @if (level() && systems().length) {
                        <div
                            class="text-base-content/60 mb-1 text-xs font-semibold"
                        >
                            Map systems to rooms
                        </div>
                        <div
                            class="border-base-300 mb-2 max-h-40 overflow-y-auto rounded border"
                        >
                            @for (
                                system of bookableSystems();
                                track system.id
                            ) {
                                <div
                                    class="border-base-300 flex items-center gap-1.5 border-b px-2 py-1 text-xs"
                                >
                                    <span
                                        class="h-1.5 w-1.5 shrink-0 rounded-full"
                                        [class]="
                                            isLinked(system)
                                                ? 'bg-success'
                                                : 'bg-warning'
                                        "
                                    ></span>
                                    <span class="min-w-0 flex-1 truncate">
                                        {{ system.display_name || system.name }}
                                    </span>
                                    <select
                                        class="border-base-300 max-w-28 rounded border px-1 py-0.5 text-xs"
                                        (change)="
                                            linkSystem(system, asValue($event))
                                        "
                                    >
                                        <option value="">Unlinked</option>
                                        @for (
                                            object of bookable();
                                            track object.id
                                        ) {
                                            <option
                                                [value]="
                                                    object.svg_id || object.id
                                                "
                                                [selected]="
                                                    (object.svg_id ||
                                                        object.id) ===
                                                    system.map_id
                                                "
                                            >
                                                {{
                                                    object.label ||
                                                        object.svg_id
                                                }}
                                            </option>
                                        }
                                    </select>
                                </div>
                            }
                        </div>
                    }

                    <button
                        btn
                        class="w-full"
                        [disabled]="!allPass() || !level() || publishing()"
                        (click)="publish()"
                    >
                        {{ publishing() ? status() : 'Upload & Publish' }}
                    </button>

                    @if (!allPass()) {
                        <p class="text-error mt-1.5 text-xs">
                            Fix the checks above before publishing.
                        </p>
                    }
                    @if (status() && !publishing()) {
                        <p class="text-base-content/60 mt-1.5 text-xs">
                            {{ status() }}
                        </p>
                    }
                }
            </div>
        </div>
    `,
    imports: [IconComponent],
})
export class PublishPanelComponent {
    public readonly state = inject(EditorStateService);
    public readonly placeos = inject(PlaceOSService);
    private readonly _toasts = inject(ToastService);

    public readonly buildings = signal<PlaceOSZone[]>([]);
    public readonly levels = signal<PlaceOSZone[]>([]);
    public readonly systems = signal<PlaceOSSystem[]>([]);
    public readonly building = signal('');
    public readonly level = signal('');
    public readonly publishing = signal(false);
    public readonly status = signal('');

    public readonly checks = computed(() =>
        preflightChecks(this.state.objects()),
    );

    public readonly allPass = computed(() =>
        this.checks().every((check) => check.pass),
    );

    public readonly bookable = computed(() =>
        bookableObjects(this.state.objects()),
    );

    public readonly bookableSystems = computed(() =>
        this.systems().filter((system) => system.bookable),
    );

    public readonly asValue = (event: Event) =>
        (event.target as HTMLSelectElement).value;

    public readonly isLinked = (system: PlaceOSSystem) =>
        this.bookable().some((o) => (o.svg_id || o.id) === system.map_id);

    constructor() {
        if (this.placeos.config.configured) {
            this.placeos
                .getZones('building')
                .then((zones) => this.buildings.set(zones))
                .catch(() => undefined);
        }
    }

    public async pickBuilding(id: string) {
        this.building.set(id);
        this.level.set('');
        this.systems.set([]);
        this.levels.set(
            id ? await this.placeos.getZones('level', id).catch(() => []) : [],
        );
    }

    public async pickLevel(id: string) {
        this.level.set(id);
        this.systems.set(
            id ? await this.placeos.getSystems(id).catch(() => []) : [],
        );
    }

    public async linkSystem(system: PlaceOSSystem, map_id: string) {
        try {
            await this.placeos.updateSystem(system.id, { map_id });
            this.systems.update((list) =>
                list.map((s) => (s.id === system.id ? { ...s, map_id } : s)),
            );
        } catch (error) {
            this._toasts.show(this._message(error, 'Failed to link'), 'error');
        }
    }

    private _svg(): string {
        return buildSvg(
            this.state.objects(),
            this.state.canvas_width(),
            this.state.canvas_height(),
            this.state.floorplan()?.background_color || '#ffffff',
        );
    }

    private _filename(suffix = ''): string {
        const name =
            this.state.floorplan()?.floor_name?.replace(/\s+/g, '-') ||
            'floorplan';
        return `${name}${suffix}.svg`;
    }

    public download() {
        const url = URL.createObjectURL(
            new Blob([this._svg()], { type: 'image/svg+xml' }),
        );
        const link = document.createElement('a');
        link.href = url;
        link.download = this._filename();
        link.click();
        URL.revokeObjectURL(url);
    }

    /** Uploads the map to PlaceOS and points the level's zone at it */
    public async publish() {
        const level = this.level();
        if (!level) return;
        this.publishing.set(true);
        this.status.set('Building SVG...');
        try {
            const svg = this._svg();
            this.status.set('Uploading to PlaceOS...');
            const result = await this.placeos.uploadSvg(svg, this._filename());
            this.status.set('Updating zone map...');
            await this.placeos.updateZone(level, {
                map_id: result.file_url,
            });
            this.status.set('Published');
            this._toasts.show('Published to PlaceOS', 'success');
        } catch (error) {
            const message = this._message(error, 'Publish failed');
            this.status.set(message);
            this._toasts.show(message, 'error');
        } finally {
            this.publishing.set(false);
        }
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
