import { Location } from '@angular/common';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

import { AsyncHandler } from '@placeos/common';
import { IconComponent } from '@placeos/components';

import { PlaceOSService } from '../data/placeos.service';
import { StoreService } from '../data/store.service';
import {
    AvailabilityState,
    Floorplan,
    FloorplanSummary,
    MapObject,
    Project,
} from '../data/types';
import { STATE_COLORS } from '../editor/availability';
import { AvailabilityPollingService } from './availability-polling.service';
import {
    FloorPlan2dComponent,
    STATE_SYMBOLS,
    stateLabel,
} from './floor-plan-2d.component';

/** No input for this long puts an unattended kiosk back to its start */
const IDLE_RESET_MS = 60_000;
/** How long a search hit stays called out on the plan */
const HIGHLIGHT_MS = 10_000;
const MAX_RESULTS = 8;

@Component({
    selector: 'map-studio-kiosk',
    providers: [AvailabilityPollingService],
    host: {
        '(document:pointerdown)': 'onActivity()',
        '(document:keydown)': 'onActivity()',
        '(document:wheel)': 'onActivity()',
    },
    template: `
        <div
            class="theme-dark bg-base-100 text-base-content absolute inset-0 flex flex-col"
        >
            @if (loading()) {
                <div
                    class="text-base-content/60 flex flex-1 flex-col items-center justify-center gap-4"
                >
                    <div
                        class="border-base-300 border-t-primary h-10 w-10 animate-spin rounded-full border-4"
                    ></div>
                    <p>Loading floor plan...</p>
                </div>
            } @else if (error(); as message) {
                <div
                    class="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center"
                >
                    <icon
                        class="text-base-content/40 text-6xl"
                        aria-hidden="true"
                    >
                        map
                    </icon>
                    <h1 class="text-2xl font-bold">{{ message }}</h1>
                    <p class="text-base-content/70 max-w-md text-lg">
                        This map is not available on this device. Map Studio
                        keeps maps in the browser where they were made. Open the
                        link on that device, or check that the link is correct.
                    </p>
                    <div class="flex flex-wrap justify-center gap-3">
                        <button
                            class="bg-primary text-primary-content min-h-11 rounded-lg px-6 text-lg font-semibold"
                            (click)="retry()"
                        >
                            Retry
                        </button>
                        <!-- Kiosk screens stay on the map; editors need a way out -->
                        @if (!kiosk_mode) {
                            <a
                                class="border-base-300 flex min-h-11 items-center rounded-lg border px-6 text-lg font-semibold no-underline"
                                routerLink="/"
                            >
                                Back to Projects
                            </a>
                        }
                    </div>
                </div>
            } @else {
                <header
                    class="bg-base-200 border-base-300 flex shrink-0 items-center gap-4 border-b px-6 py-3"
                >
                    @if (project(); as detail) {
                        @if (!kiosk_mode) {
                            <a
                                class="border-base-300 text-base-content/60 hover:text-base-content flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-xl no-underline"
                                aria-label="Back to project"
                                title="Back to project"
                                [routerLink]="['/project', detail.id]"
                            >
                                <icon aria-hidden="true">arrow_back</icon>
                            </a>
                        }
                    }

                    <div class="min-w-0">
                        <div class="truncate text-lg font-bold">
                            {{
                                project()?.building_name ||
                                    project()?.name ||
                                    'Building'
                            }}
                        </div>
                        <div class="text-base-content/60 truncate text-sm">
                            {{ floorplan()?.floor_name }}
                        </div>
                    </div>

                    <div class="relative mx-auto w-full max-w-96 min-w-32">
                        <input
                            class="bg-base-100 border-base-300 placeholder:text-base-content/70! w-full rounded-lg border py-2.5 pr-12 pl-3 text-base"
                            placeholder="Search rooms & desks..."
                            aria-label="Search rooms and desks"
                            [value]="search()"
                            (input)="search.set(asValue($event))"
                            (keydown.escape)="search.set('')"
                            (keydown.enter)="revealFirst()"
                        />
                        @if (search()) {
                            <button
                                class="text-base-content/70 absolute top-1/2 right-0 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-xl"
                                aria-label="Clear search"
                                title="Clear search"
                                (click)="search.set('')"
                            >
                                <icon>close</icon>
                            </button>
                            <div
                                class="bg-base-200 border-base-300 absolute top-full right-0 left-0 z-20 mt-1 overflow-hidden rounded-lg border shadow-lg"
                            >
                                @for (result of results(); track result.id) {
                                    <button
                                        class="border-base-300 hover:bg-base-300 flex min-h-11 w-full items-center gap-2 border-b px-3 py-2 text-left text-base last:border-b-0"
                                        (click)="reveal(result)"
                                    >
                                        <span
                                            class="h-2.5 w-2.5 shrink-0 rounded-full"
                                            [style.background]="
                                                colorFor(result)
                                            "
                                        ></span>
                                        <span class="flex-1 truncate">
                                            {{ result.label }}
                                        </span>
                                        @if (
                                            result.floorplan_id !==
                                            floorplan_id()
                                        ) {
                                            <span class="text-base-content/70">
                                                {{ floorName(result) }}
                                            </span>
                                        }
                                        <span class="text-base-content/70">
                                            {{ result.object_type }}
                                        </span>
                                        @if (stateOf(result); as state) {
                                            <span class="text-base-content/70">
                                                {{ state }}
                                            </span>
                                        }
                                    </button>
                                }
                                @if (!results().length) {
                                    <div
                                        class="text-base-content/70 px-3 py-3 text-base"
                                    >
                                        No results found
                                    </div>
                                }
                            </div>
                        }
                    </div>

                    <button
                        class="border-base-300 min-h-11 rounded-lg border px-4 text-sm font-bold"
                        [class]="
                            heatmap()
                                ? 'bg-primary text-primary-content'
                                : 'bg-base-100 text-base-content/60'
                        "
                        [attr.aria-pressed]="heatmap()"
                        (click)="heatmap.set(!heatmap())"
                    >
                        Heatmap
                    </button>
                    @if (!kiosk_mode) {
                        <button
                            class="border-base-300 min-h-11 rounded-lg border px-4 text-sm font-bold"
                            [class]="
                                share_open()
                                    ? 'bg-primary text-primary-content'
                                    : 'bg-base-100 text-base-content/60'
                            "
                            (click)="share_open.set(!share_open())"
                        >
                            Share
                        </button>
                    }
                    <div class="flex shrink-0 flex-col items-end">
                        <span class="text-xl font-bold tabular-nums">
                            {{ clock() }}
                        </span>
                        @if (updated()) {
                            <span class="text-base-content/70 text-sm">
                                Updated {{ updated() }}
                            </span>
                        }
                    </div>
                </header>

                @if (objects().length) {
                    @if (polling.simulated()) {
                        <div
                            class="bg-warning text-warning-content flex shrink-0 items-center justify-center gap-2 px-6 py-2 text-base font-semibold"
                            role="status"
                        >
                            <icon aria-hidden="true">science</icon>
                            Demo data: availability is simulated, not live.
                            @if (!kiosk_mode) {
                                {{ demo_hint() }}
                            }
                        </div>
                    } @else if (polling.offline()) {
                        <div
                            class="bg-error text-error-content flex shrink-0 items-center justify-center gap-2 px-6 py-2 text-base font-semibold"
                            role="status"
                        >
                            <icon aria-hidden="true">cloud_off</icon>
                            @if (updated()) {
                                Offline — showing data from {{ updated() }}
                            } @else {
                                Offline — live status is not available
                            }
                        </div>
                    }
                }

                <div class="flex min-h-0 flex-1">
                    <aside
                        class="bg-base-200 border-base-300 w-64 shrink-0 overflow-y-auto border-r p-4"
                    >
                        @for (stat of stats(); track stat.label) {
                            <div
                                class="bg-base-100 border-base-300 mb-3 rounded-lg border p-3"
                            >
                                <div class="flex items-baseline gap-1">
                                    <span
                                        class="text-2xl font-bold"
                                        [style.color]="stat.color"
                                    >
                                        {{ stat.value ?? '–' }}
                                    </span>
                                    <span class="text-base-content/40">/</span>
                                    <span class="text-base-content/60">
                                        {{ stat.total }}
                                    </span>
                                </div>
                                <div class="text-base-content/70 mb-2 text-sm">
                                    {{ stat.label }}
                                </div>
                                <div
                                    class="bg-base-300 h-1 overflow-hidden rounded-full"
                                >
                                    <div
                                        class="h-full rounded-full"
                                        [style.width.%]="stat.percent"
                                        [style.background]="stat.color"
                                    ></div>
                                </div>
                            </div>
                        }

                        <div class="mt-5">
                            <div
                                class="text-base-content/70 mb-2 text-sm font-bold tracking-wide uppercase"
                            >
                                Status
                            </div>
                            @for (item of legend(); track item.state) {
                                <div
                                    class="flex items-center gap-2 py-1 text-base capitalize"
                                >
                                    <span
                                        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#0d1117]"
                                        aria-hidden="true"
                                        [style.background]="item.color"
                                    >
                                        {{ item.symbol }}
                                    </span>
                                    {{ item.label }}
                                </div>
                            }
                        </div>
                    </aside>

                    <main class="relative min-w-0 flex-1">
                        @if (floor_error(); as message) {
                            <div
                                class="flex h-full flex-col items-center justify-center gap-4 p-6 text-center"
                            >
                                <p class="text-xl font-semibold">
                                    {{ message }}
                                </p>
                                <button
                                    class="bg-primary text-primary-content min-h-11 rounded-lg px-6 text-lg font-semibold"
                                    (click)="retryFloor()"
                                >
                                    Retry
                                </button>
                            </div>
                        } @else if (!floors().length) {
                            <div
                                class="text-base-content/70 flex h-full items-center justify-center p-6 text-xl"
                            >
                                This project has no floors yet
                            </div>
                        } @else if (floorplan(); as plan) {
                            @if (objects().length) {
                                <map-studio-floor-plan-2d
                                    [floorplan]="plan"
                                    [objects]="objects()"
                                    [availability]="polling.states()"
                                    [heatmap_enabled]="heatmap()"
                                    [image_url]="image_url()"
                                    [highlight]="highlight()"
                                />
                            } @else {
                                <div
                                    class="text-base-content/70 flex h-full items-center justify-center p-6 text-xl"
                                >
                                    No spaces are mapped on this floor yet
                                </div>
                            }
                        }

                        @if (share_open() && !kiosk_mode) {
                            <div
                                class="bg-base-200 border-base-300 absolute top-4 right-4 z-20 w-64 rounded-lg border p-4 shadow-lg"
                            >
                                <div
                                    class="mb-3 flex items-center justify-between"
                                >
                                    <span class="font-bold">Share Map</span>
                                    <button
                                        class="text-base-content/60 -mr-2 flex h-11 w-11 items-center justify-center text-xl"
                                        aria-label="Close share panel"
                                        title="Close"
                                        (click)="share_open.set(false)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                                <button
                                    class="bg-base-100 border-base-300 mb-2 min-h-11 w-full rounded border px-3 text-sm"
                                    (click)="copyLink()"
                                >
                                    Copy Link
                                </button>
                                <button
                                    class="bg-base-100 border-base-300 min-h-11 w-full rounded border px-3 text-sm"
                                    (click)="copyEmbed()"
                                >
                                    Copy Embed Code
                                </button>
                                <p class="text-base-content/60 mt-2 text-xs">
                                    Shared links open in kiosk mode, without
                                    Back or Share.
                                </p>
                                @if (copied(); as status) {
                                    <p
                                        class="mt-2 text-sm"
                                        [class]="
                                            status.ok
                                                ? 'text-success'
                                                : 'text-error'
                                        "
                                        role="status"
                                    >
                                        {{ status.message }}
                                    </p>
                                }
                            </div>
                        }
                    </main>
                </div>

                <!-- Scrolls, so every floor stays reachable in a tall building -->
                <footer
                    class="bg-base-200 border-base-300 flex shrink-0 items-center gap-2 overflow-x-auto border-t px-6 py-2"
                >
                    @for (floor of floors(); track floor.id) {
                        <button
                            class="border-base-300 min-h-11 shrink-0 rounded-lg border px-5 text-base font-semibold whitespace-nowrap"
                            [class]="
                                floor.id === floorplan_id()
                                    ? 'bg-primary text-primary-content'
                                    : 'bg-base-100 text-base-content/60'
                            "
                            [attr.aria-current]="
                                floor.id === floorplan_id() ? 'true' : null
                            "
                            (click)="pickFloor(floor.id)"
                        >
                            {{ floorLabel(floor) }}
                        </button>
                    }
                    <span
                        class="text-base-content/40 ml-auto shrink-0 text-sm font-semibold"
                    >
                        Map Studio
                    </span>
                </footer>
            }
        </div>
    `,
    imports: [FloorPlan2dComponent, IconComponent, RouterLink],
})
export class KioskComponent extends AsyncHandler {
    private readonly _store = inject(StoreService);
    private readonly _placeos = inject(PlaceOSService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _location = inject(Location);
    private readonly _plan = viewChild(FloorPlan2dComponent);
    public readonly polling = inject(AvailabilityPollingService);

    /** `?kiosk=1` hides the editor controls (Back and Share) */
    public readonly kiosk_mode =
        this._route.snapshot.queryParamMap.get('kiosk') === '1';

    public readonly project = signal<Project | null>(null);
    public readonly floorplan = signal<Floorplan | null>(null);
    public readonly objects = signal<MapObject[]>([]);
    /** Rooms and desks on every floor, for search */
    public readonly all_objects = signal<MapObject[]>([]);
    public readonly image_url = signal<string | null>(null);
    public readonly floorplan_id = signal('');
    public readonly loading = signal(true);
    /** Set when the project cannot be loaded; kept apart from `project` */
    public readonly error = signal('');
    /** Set when the open floor cannot be loaded */
    public readonly floor_error = signal('');
    public readonly heatmap = signal(false);
    public readonly share_open = signal(false);
    public readonly search = signal('');
    /** Search hit the map should call out */
    public readonly highlight = signal<string | null>(null);
    public readonly copied = signal<{ message: string; ok: boolean } | null>(
        null,
    );
    public readonly clock = signal(this._time());

    private readonly _project_id: string;
    private readonly _requested_floor_id: string;
    /** Floor the kiosk opened on; the idle reset returns here */
    private _initial_floor_id = '';
    /** Bumped per floor load so a slow, older load cannot win */
    private _floor_request = 0;

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement).value;

    public readonly floors = computed(() =>
        [...(this.project()?.floorplans ?? [])].sort(
            (a, b) => a.floor_index - b.floor_index,
        ),
    );

    /** Matches on every floor, the open floor first */
    public readonly results = computed(() => {
        const query = this.search().trim().toLowerCase();
        if (!query) return [];
        const current = this.floorplan_id();
        const pool = this.all_objects().length
            ? this.all_objects()
            : this.objects();
        return pool
            .filter(
                (o) =>
                    (o.object_type === 'room' || o.object_type === 'desk') &&
                    o.label?.toLowerCase().includes(query),
            )
            .sort(
                (a, b) =>
                    Number(b.floorplan_id === current) -
                    Number(a.floorplan_id === current),
            )
            .slice(0, MAX_RESULTS);
    });

    /** Headline counts; null until the first poll lands */
    public readonly stats = computed(() => {
        const states = this.polling.states();
        const known = Object.keys(states).length > 0;
        const rooms = this.objects().filter((o) => o.object_type === 'room');
        const desks = this.objects().filter((o) => o.object_type === 'desk');
        const count = (
            list: MapObject[],
            match: (state: AvailabilityState | undefined) => boolean,
        ) => (known ? list.filter((o) => match(states[o.id])).length : null);

        const entries = [
            {
                label: 'Rooms Available',
                value: count(rooms, (s) => s === 'free'),
                total: rooms.length,
                color: STATE_COLORS.free,
            },
            {
                label: 'Desks Available',
                value: count(desks, (s) => s === 'available' || s === 'free'),
                total: desks.length,
                color: STATE_COLORS.available,
            },
            {
                label: 'Rooms Occupied',
                value: count(rooms, (s) => s === 'occupied'),
                total: rooms.length,
                color: STATE_COLORS.occupied,
            },
            {
                label: 'Rooms Booked',
                value: count(rooms, (s) => s === 'booked' || s === 'pending'),
                total: rooms.length,
                color: STATE_COLORS.booked,
            },
        ];
        return entries.map((entry) => ({
            ...entry,
            percent:
                entry.total && entry.value
                    ? (entry.value / entry.total) * 100
                    : 0,
        }));
    });

    /** Only the states the current data source can produce */
    public readonly legend = computed(() =>
        this.polling.possible_states().map((state) => ({
            state,
            label: stateLabel(state),
            color: STATE_COLORS[state],
            symbol: STATE_SYMBOLS[state],
        })),
    );

    /** Time of the last good availability update, e.g. "09:41" */
    public readonly updated = computed(() => {
        const at = this.polling.last_updated();
        return at ? this._time(at) : '';
    });

    /** Why the data is simulated, for editors */
    public readonly demo_hint = computed(() =>
        this._placeos.config.configured
            ? 'Link this floor to a PlaceOS level for live status.'
            : 'Connect PlaceOS in Settings for live status.',
    );

    public readonly stateOf = (object: MapObject) => {
        const state = this.polling.states()[object.id];
        return state ? stateLabel(state) : '';
    };

    public readonly colorFor = (object: MapObject) => {
        const state = this.polling.states()[object.id];
        return state ? STATE_COLORS[state] : '#7d8590';
    };

    public readonly floorLabel = (floor: FloorplanSummary) =>
        floor.floor_name || 'Floor ' + floor.floor_index;

    public readonly floorName = (object: MapObject) => {
        const floor = this.floors().find((f) => f.id === object.floorplan_id);
        return floor ? this.floorLabel(floor) : '';
    };

    constructor() {
        super();
        this.interval('clock', () => this.clock.set(this._time()), 1000);
        const params = this._route.snapshot.paramMap;
        this._project_id = params.get('project_id') ?? '';
        this._requested_floor_id = params.get('floorplan_id') ?? '';
        this._load();
    }

    private _time(date = new Date()) {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    private async _load() {
        this.loading.set(true);
        this.error.set('');
        try {
            const project = await this._store.getProject(this._project_id);
            this.project.set(project);
            this._initial_floor_id =
                this._requested_floor_id || this.floors()[0]?.id || '';
            void this._loadSearchIndex(this.floors());
            await this._openFloor(this._initial_floor_id);
        } catch {
            this.project.set(null);
            this.error.set('Map not found');
        } finally {
            this.loading.set(false);
        }
    }

    /** Loads every floor's objects so search can reach other floors */
    private async _loadSearchIndex(floors: FloorplanSummary[]) {
        try {
            const lists = await Promise.all(
                floors.map((floor) => this._store.listObjects(floor.id)),
            );
            this.all_objects.set(lists.flat());
        } catch {
            // Search falls back to the open floor
            this.all_objects.set([]);
        }
    }

    /**
     * Opens a floor and keeps its id in the URL so a reload stays on it.
     * When taps come quickly, only the latest request is applied.
     */
    private async _openFloor(id: string) {
        if (!id) return;
        const request = ++this._floor_request;
        this.floorplan_id.set(id);
        this.floor_error.set('');
        this.highlight.set(null);
        this._location.replaceState(
            this._floorUrl(id, this._route.snapshot.queryParams),
        );
        try {
            const [floorplan, objects, image_url] = await Promise.all([
                this._store.getFloorplan(id),
                this._store.listObjects(id),
                this._store.getSourceImageUrl(id),
            ]);
            // Another floor was picked, or the kiosk closed, while this one loaded
            if (request !== this._floor_request) {
                if (image_url) URL.revokeObjectURL(image_url);
                return;
            }
            this.floorplan.set(floorplan);
            this.objects.set(objects);
            this._setImageUrl(image_url);
            this.polling.start(objects, floorplan.level_zone_id ?? '');
        } catch {
            if (request !== this._floor_request) return;
            this.floorplan.set(null);
            this.objects.set([]);
            this._setImageUrl(null);
            this.polling.start([]);
            this.floor_error.set('This floor could not be loaded.');
        }
    }

    /** Swaps the floor image URL, revoking the one it replaces */
    private _setImageUrl(url: string | null) {
        const previous = this.image_url();
        if (previous && previous !== url) URL.revokeObjectURL(previous);
        this.image_url.set(url);
    }

    public override ngOnDestroy() {
        super.ngOnDestroy();
        // A floor still loading is now stale and revokes its own image
        this._floor_request++;
        this._setImageUrl(null);
    }

    private _floorUrl(floor_id: string, query: Params) {
        return this._router.serializeUrl(
            this._router.createUrlTree(['/kiosk', this._project_id, floor_id], {
                queryParams: query,
            }),
        );
    }

    /** Absolute link to the open floor in kiosk mode */
    private _shareUrl() {
        const path = this._floorUrl(this.floorplan_id(), {
            ...this._route.snapshot.queryParams,
            kiosk: '1',
        });
        return new URL(
            this._location.prepareExternalUrl(path),
            window.location.href,
        ).href;
    }

    public retry() {
        this._load();
    }

    public retryFloor() {
        this._openFloor(this.floorplan_id());
    }

    public pickFloor(id: string) {
        if (id !== this.floorplan_id()) this._openFloor(id);
    }

    /** Enter in the search box picks the top match */
    public revealFirst() {
        const [first] = this.results();
        if (first) this.reveal(first);
    }

    /** Close the search and call the picked space out, on its own floor */
    public async reveal(object: MapObject) {
        this.search.set('');
        if (object.floorplan_id !== this.floorplan_id()) {
            await this._openFloor(object.floorplan_id);
            // A later floor pick or a failed load wins over this hit
            if (
                this.floorplan_id() !== object.floorplan_id ||
                this.floor_error()
            )
                return;
        }
        this.highlight.set(object.id);
        this.timeout('highlight', () => this.highlight.set(null), HIGHLIGHT_MS);
    }

    /** Any input restarts the countdown to the idle reset */
    public onActivity() {
        this.timeout('idle', () => this._resetIdle(), IDLE_RESET_MS);
    }

    /** Puts an unattended kiosk back the way it started */
    private _resetIdle() {
        this.search.set('');
        // Drop focus so an on-screen keyboard closes too
        if (document.activeElement instanceof HTMLElement)
            document.activeElement.blur();
        this.share_open.set(false);
        this.heatmap.set(false);
        this.highlight.set(null);
        this.clearTimeout('highlight');
        this._plan()?.clearSelection();
        this._plan()?.resetView();
        if (
            this._initial_floor_id &&
            this.floorplan_id() !== this._initial_floor_id
        )
            this._openFloor(this._initial_floor_id);
    }

    public copyLink() {
        return this._copy(this._shareUrl(), 'Link copied');
    }

    public copyEmbed() {
        return this._copy(
            `<iframe src="${this._shareUrl()}" width="100%" height="600" frameborder="0"></iframe>`,
            'Embed code copied',
        );
    }

    private async _copy(text: string, message: string) {
        try {
            await navigator.clipboard.writeText(text);
            this._flash(message, true);
        } catch {
            this._flash(
                'Copy failed. The browser blocked the clipboard.',
                false,
            );
        }
    }

    private _flash(message: string, ok: boolean) {
        this.copied.set({ message, ok });
        this.timeout('copied', () => this.copied.set(null), 2000);
    }
}
