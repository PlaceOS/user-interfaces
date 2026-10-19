import {
    Component,
    computed,
    inject,
    signal,
    WritableSignal,
} from '@angular/core';
import { IconComponent } from '@placeos/components';

import {
    PlaceOSService,
    PlaceOSSystem,
    PlaceOSZone,
} from '../data/placeos.service';
import { StoreService } from '../data/store.service';
import { Floorplan, MapObject } from '../data/types';
import { EditorStateService } from './editor-state.service';
import { bookableObjects, buildSvg, preflightChecks } from './svg-export';
import { ToastService } from './toast.service';

/** A PlaceOS list request and its result */
interface Loadable<T> {
    state: 'idle' | 'loading' | 'ready' | 'error';
    items: T[];
    error: string;
}

/** What the last publish wrote, and the plan it was built from */
interface PublishResult {
    level: string;
    url: string;
    failed_links: number;
    objects: MapObject[];
    floorplan: Floorplan | null;
}

function idle<T>(): Loadable<T> {
    return { state: 'idle', items: [], error: '' };
}

/** Copy of `record` without `key` */
function without(record: Record<string, string>, key: string) {
    const next = { ...record };
    delete next[key];
    return next;
}

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
                            aria-hidden="true"
                            [class]="check.pass ? 'text-success' : 'text-error'"
                        >
                            {{ check.pass ? 'check_circle' : 'cancel' }}
                        </icon>
                        <div class="min-w-0 flex-1">
                            <div>
                                <span class="sr-only">
                                    {{ check.pass ? 'Passed:' : 'Failed:' }}
                                </span>
                                {{ check.label }}
                            </div>
                            @if (!check.pass && check.detail) {
                                <div class="text-error wrap-break-word">
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
                    @switch (buildings().state) {
                        @case ('loading') {
                            <p class="text-base-content/60 mb-1.5 text-xs">
                                Loading buildings...
                            </p>
                        }
                        @case ('error') {
                            <div class="text-error mb-1.5 text-xs">
                                Could not load buildings:
                                {{ buildings().error }}
                                <button
                                    class="underline"
                                    (click)="loadBuildings()"
                                >
                                    Retry
                                </button>
                            </div>
                        }
                        @default {
                            @if (!buildings().items.length) {
                                <p class="text-base-content/60 mb-1.5 text-xs">
                                    No buildings found.
                                </p>
                            } @else {
                                <select
                                    class="border-base-300 mb-1.5 w-full rounded border px-2 py-1 text-xs"
                                    aria-label="Building"
                                    [disabled]="publishing()"
                                    (change)="pickBuilding(asValue($event))"
                                >
                                    <option value="">Select building...</option>
                                    @for (
                                        zone of buildings().items;
                                        track zone.id
                                    ) {
                                        <option
                                            [value]="zone.id"
                                            [selected]="zone.id === building()"
                                        >
                                            {{ zone.display_name || zone.name }}
                                        </option>
                                    }
                                </select>
                            }
                        }
                    }

                    @if (building()) {
                        @switch (levels().state) {
                            @case ('loading') {
                                <p class="text-base-content/60 mb-1.5 text-xs">
                                    Loading levels...
                                </p>
                            }
                            @case ('error') {
                                <div class="text-error mb-1.5 text-xs">
                                    Could not load levels: {{ levels().error }}
                                    <button
                                        class="underline"
                                        (click)="pickBuilding(building())"
                                    >
                                        Retry
                                    </button>
                                </div>
                            }
                            @default {
                                @if (!levels().items.length) {
                                    <p
                                        class="text-base-content/60 mb-1.5 text-xs"
                                    >
                                        No levels in this building.
                                    </p>
                                } @else {
                                    <select
                                        class="border-base-300 mb-1.5 w-full rounded border px-2 py-1 text-xs"
                                        aria-label="Level"
                                        [disabled]="publishing()"
                                        (change)="pickLevel(asValue($event))"
                                    >
                                        <option value="">
                                            Select level...
                                        </option>
                                        @for (
                                            zone of levels().items;
                                            track zone.id
                                        ) {
                                            <option
                                                [value]="zone.id"
                                                [selected]="zone.id === level()"
                                            >
                                                {{
                                                    zone.display_name ||
                                                        zone.name
                                                }}
                                            </option>
                                        }
                                    </select>
                                }
                            }
                        }
                    }

                    @if (level_zone(); as zone) {
                        <p class="text-base-content/60 mb-2 text-xs">
                            @if (zone.map_id) {
                                Current map:
                                <span class="break-all">{{ zone.map_id }}</span>
                                <br />
                                Publishing replaces it.
                            } @else {
                                This level has no map yet.
                            }
                        </p>

                        @switch (systems().state) {
                            @case ('loading') {
                                <p class="text-base-content/60 mb-2 text-xs">
                                    Loading systems...
                                </p>
                            }
                            @case ('error') {
                                <div class="text-error mb-2 text-xs">
                                    Could not load systems:
                                    {{ systems().error }}
                                    <button
                                        class="underline"
                                        (click)="pickLevel(level())"
                                    >
                                        Retry
                                    </button>
                                </div>
                            }
                            @default {
                                @if (!bookableSystems().length) {
                                    <p
                                        class="text-base-content/60 mb-2 text-xs"
                                    >
                                        No bookable systems on this level.
                                    </p>
                                } @else {
                                    <div
                                        class="text-base-content/60 mb-1 text-xs font-semibold"
                                    >
                                        Map systems to rooms
                                    </div>
                                    <div
                                        class="border-base-300 mb-1 max-h-40 overflow-y-auto rounded border"
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
                                                        hasConflict(system)
                                                            ? 'bg-error'
                                                            : isLinked(system)
                                                              ? 'bg-success'
                                                              : 'bg-warning'
                                                    "
                                                ></span>
                                                <span
                                                    class="min-w-0 flex-1 truncate"
                                                    [title]="
                                                        system.display_name ||
                                                        system.name
                                                    "
                                                >
                                                    {{
                                                        system.display_name ||
                                                            system.name
                                                    }}
                                                </span>
                                                @if (hasConflict(system)) {
                                                    <span
                                                        class="text-error shrink-0"
                                                        title="Another system is linked to the same room"
                                                    >
                                                        Duplicate
                                                    </span>
                                                }
                                                <select
                                                    class="border-base-300 max-w-28 rounded border px-1 py-0.5 text-xs"
                                                    [attr.aria-label]="
                                                        'Room for ' +
                                                        (system.display_name ||
                                                            system.name)
                                                    "
                                                    [disabled]="publishing()"
                                                    (change)="
                                                        setLink(
                                                            system,
                                                            asValue($event)
                                                        )
                                                    "
                                                >
                                                    <option
                                                        value=""
                                                        [selected]="
                                                            !linkOf(system)
                                                        "
                                                    >
                                                        Unlinked
                                                    </option>
                                                    @for (
                                                        object of bookable();
                                                        track object.id
                                                    ) {
                                                        @let room_id =
                                                            object.svg_id ||
                                                            object.id;
                                                        @let taken =
                                                            isTaken(
                                                                system,
                                                                room_id
                                                            );
                                                        <option
                                                            [value]="room_id"
                                                            [selected]="
                                                                room_id ===
                                                                linkOf(system)
                                                            "
                                                            [disabled]="
                                                                taken &&
                                                                room_id !==
                                                                    linkOf(
                                                                        system
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                object.label ||
                                                                    object.svg_id
                                                            }}{{
                                                                taken
                                                                    ? ' (in use)'
                                                                    : ''
                                                            }}
                                                        </option>
                                                    }
                                                </select>
                                            </div>
                                        }
                                    </div>
                                    <p
                                        class="text-base-content/60 mb-2 text-xs"
                                    >
                                        @if (link_changes()) {
                                            {{ link_changes() }} link
                                            {{
                                                link_changes() === 1
                                                    ? 'change applies'
                                                    : 'changes apply'
                                            }}
                                            when you publish.
                                        } @else {
                                            Link changes apply when you publish.
                                        }
                                    </p>
                                }
                            }
                        }
                    }

                    @if (confirming() && level_zone(); as zone) {
                        <div
                            class="border-base-300 bg-base-200 space-y-1 rounded border p-2 text-xs"
                            role="group"
                            aria-label="Confirm publish"
                        >
                            <p class="font-bold">
                                Publish to {{ zone.display_name || zone.name }}?
                            </p>
                            <p>
                                {{
                                    zone.map_id
                                        ? 'This replaces the level’s current map.'
                                        : 'This adds the first map to this level.'
                                }}
                            </p>
                            <p>
                                {{ link_changes() }} system link
                                {{
                                    link_changes() === 1 ? 'change' : 'changes'
                                }}.
                            </p>
                            <div class="flex gap-1.5 pt-1">
                                <button
                                    btn
                                    class="inverse flex-1"
                                    (click)="confirming.set(false)"
                                >
                                    Cancel
                                </button>
                                <button
                                    btn
                                    class="flex-1"
                                    [disabled]="!allPass()"
                                    (click)="publish()"
                                >
                                    Publish
                                </button>
                            </div>
                        </div>
                    } @else {
                        <button
                            btn
                            class="w-full"
                            [disabled]="
                                !allPass() || !level_zone() || publishing()
                            "
                            (click)="confirming.set(true)"
                        >
                            {{ publishing() ? status() : 'Upload & Publish' }}
                        </button>
                    }

                    @if (!allPass()) {
                        <p class="text-error mt-1.5 text-xs">
                            Fix the checks above before publishing.
                        </p>
                    }
                    @if (status() && !publishing()) {
                        <p class="text-error mt-1.5 text-xs">
                            {{ status() }}
                        </p>
                    }
                    @if (published(); as result) {
                        <div class="mt-1.5 text-xs" role="status">
                            <p class="text-success font-semibold">
                                Published to {{ result.level }}
                            </p>
                            <p class="text-base-content/60 break-all">
                                {{ result.url }}
                            </p>
                            @if (result.failed_links) {
                                <p class="text-error">
                                    {{ result.failed_links }} system
                                    {{
                                        result.failed_links === 1
                                            ? 'link'
                                            : 'links'
                                    }}
                                    failed and stay pending. Publish again to
                                    retry.
                                </p>
                            }
                        </div>
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
    private readonly _store = inject(StoreService);

    public readonly buildings = signal(idle<PlaceOSZone>());
    public readonly levels = signal(idle<PlaceOSZone>());
    public readonly systems = signal(idle<PlaceOSSystem>());
    public readonly building = signal('');
    public readonly level = signal('');
    public readonly publishing = signal(false);
    public readonly confirming = signal(false);
    public readonly status = signal('');
    /** System id to the room id it will link to on publish */
    public readonly pending = signal<Record<string, string>>({});
    private readonly _result = signal<PublishResult | null>(null);

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
        this.systems().items.filter((system) => system.bookable),
    );

    public readonly level_zone = computed(() =>
        this.levels().items.find((zone) => zone.id === this.level()),
    );

    public readonly link_changes = computed(
        () => Object.keys(this.pending()).length,
    );

    /** Room id to the systems that link to it, pending changes included */
    private readonly _owners = computed(() => {
        const owners = new Map<string, string[]>();
        for (const system of this.bookableSystems()) {
            const room_id = this.linkOf(system);
            if (room_id)
                owners.set(room_id, [
                    ...(owners.get(room_id) ?? []),
                    system.id,
                ]);
        }
        return owners;
    });

    /** The last publish result, until the plan changes again */
    public readonly published = computed(() => {
        const result = this._result();
        return result &&
            result.objects === this.state.objects() &&
            result.floorplan === this.state.floorplan()
            ? result
            : null;
    });

    public readonly asValue = (event: Event) =>
        (event.target as HTMLSelectElement).value;

    /** The room a system links to, pending changes included */
    public readonly linkOf = (system: PlaceOSSystem) =>
        this.pending()[system.id] ?? system.map_id ?? '';

    public readonly isLinked = (system: PlaceOSSystem) =>
        this.bookable().some((o) => (o.svg_id || o.id) === this.linkOf(system));

    /** True when a system other than `system` links to the room */
    public readonly isTaken = (system: PlaceOSSystem, room_id: string) =>
        (this._owners().get(room_id) ?? []).some((id) => id !== system.id);

    public readonly hasConflict = (system: PlaceOSSystem) =>
        !!this.linkOf(system) && this.isTaken(system, this.linkOf(system));

    constructor() {
        if (this.placeos.config.configured) this.loadBuildings();
    }

    public loadBuildings() {
        return this._load(
            this.buildings,
            () => this.placeos.getZones('building'),
            () => true,
        );
    }

    public pickBuilding(id: string) {
        this.building.set(id);
        this.pickLevel('');
        this.levels.set(idle());
        if (!id) return;
        return this._load(
            this.levels,
            () => this.placeos.getZones('level', id),
            () => this.building() === id,
        );
    }

    public pickLevel(id: string) {
        this.level.set(id);
        this.systems.set(idle());
        this.pending.set({});
        this.confirming.set(false);
        if (!id) return;
        return this._load(
            this.systems,
            () => this.placeos.getSystems(id),
            () => this.level() === id,
        );
    }

    /** Stages a link change locally; PlaceOS is only written on publish */
    public setLink(system: PlaceOSSystem, map_id: string) {
        this.pending.update((pending) =>
            map_id === (system.map_id ?? '')
                ? without(pending, system.id)
                : { ...pending, [system.id]: map_id },
        );
    }

    /** Loads a list into `target`, dropping the response once `isCurrent` fails */
    private async _load<T>(
        target: WritableSignal<Loadable<T>>,
        request: () => Promise<T[]>,
        isCurrent: () => boolean,
    ) {
        target.set({ state: 'loading', items: [], error: '' });
        try {
            const items = await request();
            if (isCurrent()) target.set({ state: 'ready', items, error: '' });
        } catch (error) {
            if (!isCurrent()) return;
            const message = this._message(error, 'Request failed');
            target.set({ state: 'error', items: [], error: message });
        }
    }

    private _svg(): string {
        return buildSvg(
            this.state.objects(),
            this.state.canvas_width(),
            this.state.canvas_height(),
            this.state.floorplan()?.background_color || '#ffffff',
            this.state.floorplan()?.svg_source,
            this.state.floorplan()?.svg_source_ids,
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

    /**
     * Uploads the map to PlaceOS, points the level's zone at it, then writes
     * the pending system links. Called from the confirmation summary.
     */
    public async publish() {
        const zone = this.level_zone();
        if (!zone) return;
        this.confirming.set(false);
        this.publishing.set(true);
        this._result.set(null);
        const objects = this.state.objects();
        const floorplan = this.state.floorplan();
        this.status.set('Building SVG...');
        try {
            const svg = this._svg();
            this.status.set('Uploading to PlaceOS...');
            const upload = await this.placeos.uploadSvg(svg, this._filename());
            this.status.set('Updating zone map...');
            await this.placeos.updateZone(zone.id, {
                map_id: upload.file_url,
            });
            if (floorplan?.level_zone_id === zone.id) {
                await this._store.updateFloorplan(floorplan.id, {
                    source_map_id: upload.file_url,
                });
            }
            this.levels.update((levels) => ({
                ...levels,
                items: levels.items.map((z) =>
                    z.id === zone.id ? { ...z, map_id: upload.file_url } : z,
                ),
            }));
            this.status.set('Linking systems...');
            const failed_links = await this._applyLinks();
            this._result.set({
                level: zone.display_name || zone.name,
                url: upload.file_url,
                failed_links,
                objects,
                floorplan,
            });
            this.status.set('');
            this._toasts.show(
                failed_links
                    ? 'Published, but some system links failed'
                    : 'Published to PlaceOS',
                failed_links ? 'error' : 'success',
            );
        } catch (error) {
            const message = this._message(error, 'Publish failed');
            this.status.set(message);
            this._toasts.show(message, 'error');
        } finally {
            this.publishing.set(false);
        }
    }

    /** Writes each pending link to PlaceOS; failed links stay pending */
    private async _applyLinks(): Promise<number> {
        let failed = 0;
        for (const [id, map_id] of Object.entries(this.pending())) {
            try {
                await this.placeos.updateSystem(id, { map_id });
                this.systems.update((systems) => ({
                    ...systems,
                    items: systems.items.map((s) =>
                        s.id === id ? { ...s, map_id } : s,
                    ),
                }));
                this.pending.update((pending) => without(pending, id));
            } catch {
                failed++;
            }
        }
        return failed;
    }

    private _message(error: unknown, fallback: string) {
        return error instanceof Error ? error.message : fallback;
    }
}
