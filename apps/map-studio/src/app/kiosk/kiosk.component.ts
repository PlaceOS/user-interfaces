import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AsyncHandler } from '@placeos/common';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import {
    AvailabilityState,
    Floorplan,
    MapObject,
    Project,
} from '../data/types';
import { STATE_COLORS } from '../editor/availability';
import { AvailabilityPollingService } from './availability-polling.service';
import { FloorPlan2dComponent } from './floor-plan-2d.component';

const LEGEND_STATES: AvailabilityState[] = [
    'free',
    'booked',
    'pending',
    'occupied',
    'checked-in',
    'out-of-service',
    'available',
    'restricted',
];

@Component({
    selector: 'map-studio-kiosk',
    providers: [AvailabilityPollingService],
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
            } @else {
                <header
                    class="bg-base-200 border-base-300 flex shrink-0 items-center gap-4 border-b px-6 py-3"
                >
                    @if (project(); as detail) {
                        <a
                            class="border-base-300 text-base-content/60 hover:text-base-content shrink-0 rounded-lg border p-2 text-xl no-underline"
                            title="Back to project"
                            [routerLink]="['/project', detail.id]"
                        >
                            <icon>arrow_back</icon>
                        </a>
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
                            {{ floorplan()?.floor_name || 'Level 1' }}
                        </div>
                    </div>

                    <div class="relative mx-auto w-full max-w-96 min-w-32">
                        <input
                            class="bg-base-100 border-base-300 w-full rounded-lg border px-3 py-2 text-sm"
                            placeholder="Search rooms & desks..."
                            [value]="search()"
                            (input)="search.set(asValue($event))"
                        />
                        @if (search()) {
                            <button
                                class="text-base-content/60 absolute top-1/2 right-2 -translate-y-1/2 text-lg"
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
                                        class="border-base-300 hover:bg-base-300 flex w-full items-center gap-2 border-b px-3 py-2 text-left text-sm last:border-b-0"
                                        (click)="reveal(result)"
                                    >
                                        <span
                                            class="h-2 w-2 shrink-0 rounded-full"
                                            [style.background]="
                                                colorFor(result)
                                            "
                                        ></span>
                                        <span class="flex-1 truncate">
                                            {{ result.label }}
                                        </span>
                                        <span class="text-base-content/60">
                                            {{ result.object_type }}
                                        </span>
                                        @if (stateOf(result); as state) {
                                            <span class="text-base-content/60">
                                                {{ state }}
                                            </span>
                                        }
                                    </button>
                                }
                                @if (!results().length) {
                                    <div
                                        class="text-base-content/60 px-3 py-3 text-sm"
                                    >
                                        No results found
                                    </div>
                                }
                            </div>
                        }
                    </div>

                    <button
                        class="border-base-300 rounded-lg border px-4 py-2 text-sm font-bold"
                        [class]="
                            heatmap()
                                ? 'bg-primary text-primary-content'
                                : 'bg-base-100 text-base-content/60'
                        "
                        (click)="heatmap.set(!heatmap())"
                    >
                        Heatmap
                    </button>
                    <button
                        class="border-base-300 rounded-lg border px-4 py-2 text-sm font-bold"
                        [class]="
                            share_open()
                                ? 'bg-primary text-primary-content'
                                : 'bg-base-100 text-base-content/60'
                        "
                        (click)="share_open.set(!share_open())"
                    >
                        Share
                    </button>
                    <span class="text-xl font-bold tabular-nums">
                        {{ clock() }}
                    </span>
                </header>

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
                                        {{ stat.value }}
                                    </span>
                                    <span class="text-base-content/40">/</span>
                                    <span class="text-base-content/60">
                                        {{ stat.total }}
                                    </span>
                                </div>
                                <div class="text-base-content/60 mb-2 text-xs">
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
                                class="text-base-content/60 mb-2 text-xs font-bold tracking-wide uppercase"
                            >
                                Status
                            </div>
                            @for (state of legend_states; track state) {
                                <div
                                    class="flex items-center gap-2 py-1 text-sm capitalize"
                                >
                                    <span
                                        class="h-2.5 w-2.5 rounded-full"
                                        [style.background]="stateColor(state)"
                                    ></span>
                                    {{ state.replace('-', ' ') }}
                                </div>
                            }
                        </div>

                        @if (polling.simulated()) {
                            <p class="text-base-content/40 mt-4 text-xs">
                                Simulated availability — connect PlaceOS in
                                Settings for live status.
                            </p>
                        }
                    </aside>

                    <main class="relative min-w-0 flex-1">
                        @if (floorplan(); as plan) {
                            <map-studio-floor-plan-2d
                                [floorplan]="plan"
                                [objects]="objects()"
                                [availability]="polling.states()"
                                [heatmap_enabled]="heatmap()"
                                [image_url]="image_url()"
                                [highlight]="highlight()"
                            />
                        }

                        @if (share_open()) {
                            <div
                                class="bg-base-200 border-base-300 absolute top-4 right-4 z-20 w-64 rounded-lg border p-4 shadow-lg"
                            >
                                <div
                                    class="mb-3 flex items-center justify-between"
                                >
                                    <span class="font-bold">Share Map</span>
                                    <button
                                        class="text-base-content/60 text-lg"
                                        title="Close"
                                        (click)="share_open.set(false)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                                <button
                                    class="bg-base-100 border-base-300 mb-2 w-full rounded border px-3 py-2 text-sm"
                                    (click)="copyLink()"
                                >
                                    Copy Link
                                </button>
                                <button
                                    class="bg-base-100 border-base-300 w-full rounded border px-3 py-2 text-sm"
                                    (click)="copyEmbed()"
                                >
                                    Copy Embed Code
                                </button>
                                @if (copied(); as message) {
                                    <p class="text-success mt-2 text-xs">
                                        {{ message }}
                                    </p>
                                }
                            </div>
                        }
                    </main>
                </div>

                <footer
                    class="bg-base-200 border-base-300 flex shrink-0 items-center gap-2 border-t px-6 py-2"
                >
                    @for (floor of floors(); track floor.id) {
                        <button
                            class="border-base-300 rounded-lg border px-4 py-1.5 text-sm font-semibold"
                            [class]="
                                floor.id === floorplan_id()
                                    ? 'bg-primary text-primary-content'
                                    : 'bg-base-100 text-base-content/60'
                            "
                            (click)="pickFloor(floor.id)"
                        >
                            {{
                                floor.floor_name || 'Floor ' + floor.floor_index
                            }}
                        </button>
                    }
                    <span
                        class="text-base-content/40 ml-auto text-sm font-semibold"
                    >
                        PlaceOS Map Studio
                    </span>
                </footer>
            }
        </div>
    `,
    imports: [FloorPlan2dComponent, IconComponent, RouterLink],
})
export class KioskComponent extends AsyncHandler {
    private readonly _store = inject(StoreService);
    private readonly _route = inject(ActivatedRoute);
    public readonly polling = inject(AvailabilityPollingService);

    public readonly legend_states = LEGEND_STATES;

    public readonly project = signal<Project | null>(null);
    public readonly floorplan = signal<Floorplan | null>(null);
    public readonly objects = signal<MapObject[]>([]);
    public readonly image_url = signal<string | null>(null);
    public readonly floorplan_id = signal('');
    public readonly loading = signal(true);
    public readonly heatmap = signal(false);
    public readonly share_open = signal(false);
    public readonly search = signal('');
    /** Search hit the map should call out */
    public readonly highlight = signal<string | null>(null);
    public readonly copied = signal('');
    public readonly clock = signal(this._now());

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement).value;

    public readonly floors = computed(() =>
        [...(this.project()?.floorplans ?? [])].sort(
            (a, b) => a.floor_index - b.floor_index,
        ),
    );

    public readonly results = computed(() => {
        const query = this.search().trim().toLowerCase();
        if (!query) return [];
        return this.objects()
            .filter(
                (o) =>
                    (o.object_type === 'room' || o.object_type === 'desk') &&
                    o.label?.toLowerCase().includes(query),
            )
            .slice(0, 8);
    });

    /** Headline counts, treating "no state yet" as free/available */
    public readonly stats = computed(() => {
        const states = this.polling.states();
        const rooms = this.objects().filter((o) => o.object_type === 'room');
        const desks = this.objects().filter((o) => o.object_type === 'desk');
        const count = (
            list: MapObject[],
            match: (state: AvailabilityState | undefined) => boolean,
        ) => list.filter((o) => match(states[o.id])).length;

        const entries = [
            {
                label: 'Rooms Available',
                value: count(rooms, (s) => s === 'free' || !s),
                total: rooms.length,
                color: '#4CAF50',
            },
            {
                label: 'Desks Available',
                value: count(desks, (s) => s === 'available' || !s),
                total: desks.length,
                color: '#2196F3',
            },
            {
                label: 'Rooms Occupied',
                value: count(rooms, (s) => s === 'occupied'),
                total: rooms.length,
                color: '#F44336',
            },
            {
                label: 'Rooms Booked',
                value: count(rooms, (s) => s === 'booked' || s === 'pending'),
                total: rooms.length,
                color: '#FF9800',
            },
        ];
        return entries.map((entry) => ({
            ...entry,
            percent: entry.total ? (entry.value / entry.total) * 100 : 0,
        }));
    });

    public readonly stateColor = (state: AvailabilityState) =>
        STATE_COLORS[state];

    public readonly stateOf = (object: MapObject) =>
        (this.polling.states()[object.id] ?? '').replace(/-/g, ' ');

    public readonly colorFor = (object: MapObject) => {
        const state = this.polling.states()[object.id];
        return state ? STATE_COLORS[state] : '#7d8590';
    };

    constructor() {
        super();
        this.interval('clock', () => this.clock.set(this._now()), 1000);
        const params = this._route.snapshot.paramMap;
        this._load(
            params.get('project_id') ?? '',
            params.get('floorplan_id') ?? '',
        );
    }

    private _now() {
        return new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    private async _load(project_id: string, floorplan_id: string) {
        this.loading.set(true);
        try {
            const project = await this._store.getProject(project_id);
            this.project.set(project);
            const sorted = [...(project.floorplans ?? [])].sort(
                (a, b) => a.floor_index - b.floor_index,
            );
            await this._openFloor(floorplan_id || sorted[0]?.id || '');
        } catch {
            this.project.set(null);
        } finally {
            this.loading.set(false);
        }
    }

    private async _openFloor(id: string) {
        if (!id) return;
        this.floorplan_id.set(id);
        this.highlight.set(null);
        const [floorplan, objects, image_url] = await Promise.all([
            this._store.getFloorplan(id),
            this._store.listObjects(id),
            this._store.getSourceImageUrl(id),
        ]);
        this.floorplan.set(floorplan);
        this.objects.set(objects);
        this.image_url.set(image_url);
        this.polling.start(objects);
    }

    public pickFloor(id: string) {
        if (id !== this.floorplan_id()) this._openFloor(id);
    }

    /** Close the search and call the picked space out on the plan */
    public reveal(object: MapObject) {
        this.search.set('');
        this.highlight.set(object.id);
    }

    public async copyLink() {
        await navigator.clipboard.writeText(window.location.href);
        this._flash('Link copied');
    }

    public async copyEmbed() {
        await navigator.clipboard.writeText(
            `<iframe src="${window.location.href}" width="100%" height="600" frameborder="0"></iframe>`,
        );
        this._flash('Embed code copied');
    }

    private _flash(message: string) {
        this.copied.set(message);
        this.timeout('copied', () => this.copied.set(''), 2000);
    }
}
