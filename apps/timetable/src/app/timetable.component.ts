import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { isOnline } from '@placeos/ts-client';
import { getHours, getMinutes, startOfDay, startOfSecond } from 'date-fns';
import { SpaceTimetableComponent } from './space-timetable.component';

/** Delay after user input before the grid scrolls back to the current time */
const IDLE_DELAY = 2 * 60 * 1000;
/** Delay between scrolls to the current time while the display is idle */
const RECENTER_DELAY = 5 * 60 * 1000;

@Component({
    selector: 'app-timetable',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div
                topbar
                class="border-base-300 bg-base-100 relative z-20 flex h-16 w-full items-center border-b p-2 shadow-sm"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [source]="logo()?.src || logo()"
                />
                <div class="flex-1"></div>
                @if (offline_since()) {
                    <div
                        offline
                        class="bg-error text-error-content mr-2 flex items-center gap-1 rounded-full px-3 py-1 text-sm"
                    >
                        <icon className="material-symbols-sharp"
                            >cloud_off</icon
                        >
                        Offline since
                        {{ offline_since() | date: time_format() }}
                    </div>
                }
                <div class="p-2 text-xl">
                    <span>{{ time() | date: 'mediumDate' }}</span>
                    <span class="mx-2">•</span>
                    <span class="ml-1">{{ time() | date: time_format() }}</span>
                </div>
            </div>
            <div
                #grid
                class="bg-base-200 relative z-10 h-1/2 w-full flex-1 overflow-auto"
                (pointerdown)="onInteraction()"
                (wheel)="onInteraction()"
                (keydown)="onInteraction()"
            >
                <!-- Sized to the tallest column so every column shares one height -->
                <div class="flex min-h-full w-max min-w-full">
                    <div
                        class="border-base-300 bg-base-100 sticky left-0 z-20 flex min-h-full w-16 min-w-16 flex-col border-r"
                    >
                        <div
                            class="border-base-300 bg-base-100 sticky top-0 z-50 min-h-12 w-full border-b"
                        ></div>
                        <div class="relative flex h-1/2 w-full flex-1 flex-col">
                            @if (
                                current_offset() >= 0 && current_offset() <= 100
                            ) {
                                <div
                                    now
                                    class="bg-secondary absolute left-0 z-20 h-[2px] w-screen -translate-y-1/2"
                                    [style.top]="current_offset() + '%'"
                                >
                                    <div
                                        class="arrow absolute top-0 left-0 -translate-y-1/2"
                                    ></div>
                                </div>
                            }
                            @for (hr of hours(); track hr; let i = $index) {
                                <div
                                    hour
                                    class="border-base-300 relative z-10 min-h-8 w-full flex-1 border-b"
                                >
                                    <div
                                        text
                                        class="bg-base-100 absolute top-0 right-2 left-0 -translate-y-1/2 pr-2 text-right text-sm"
                                    >
                                        @if (i > 0) {
                                            @if (use_24_hour()) {
                                                {{ hr < 10 ? '0' + hr : hr }}:00
                                            } @else {
                                                {{
                                                    hr % 12 === 0
                                                        ? '12'
                                                        : hr % 12
                                                }}
                                                <span class="text-[0.625rem]">{{
                                                    hr >= 12 ? 'PM' : 'AM'
                                                }}</span>
                                            }
                                        }
                                    </div>
                                    <div
                                        class="border-base-300 absolute inset-x-0 top-1/2 w-full border-b"
                                    ></div>
                                </div>
                            }
                        </div>
                    </div>
                    @for (space of spaces(); track space.id) {
                        <space-timetable
                            class="border-base-300 relative z-10 min-w-[24vw] flex-1 border-r"
                            [space]="space"
                            [day]="day()"
                            [now]="date()"
                            [time_format]="time_format()"
                            [time_offset]="offset()"
                            [time_period]="length()"
                        ></space-timetable>
                    }
                    @for (id of missing_ids(); track id) {
                        <div
                            missing
                            class="border-base-300 flex min-h-full min-w-[24vw] flex-1 flex-col items-center justify-center border-r p-4 text-center opacity-60"
                        >
                            <icon
                                className="material-symbols-sharp"
                                class="text-6xl"
                                >error</icon
                            >
                            <p>Space not found</p>
                            <p class="font-mono text-sm break-all">{{ id }}</p>
                        </div>
                    }
                    @if (!spaces().length && !missing_ids().length) {
                        <div
                            class="flex min-w-[30vw] flex-1 flex-col items-center justify-center opacity-30"
                        >
                            <icon
                                className="material-symbols-sharp"
                                class="text-8xl"
                                >no_meeting_room</icon
                            >
                            <p>No spaces have been selected</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            [hour]:last-child {
                border: none !important;
            }

            .arrow {
                width: 0;
                height: 0;
                border-top: 0.6rem solid transparent;
                border-bottom: 0.6rem solid transparent;
                border-left: 0.75rem solid var(--secondary);
            }
        `,
    ],
    imports: [
        CommonModule,
        AuthenticatedImageDirective,
        SpaceTimetableComponent,
        IconComponent,
    ],
})
export class AppTimetableComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _spaces = inject(SpacesService);
    private _spaces_initialised = toObservable(this._spaces.initialised);
    private _org = inject(OrganisationService);
    private _grid = viewChild<ElementRef<HTMLElement>>('grid');

    public readonly spaces = signal<Space[]>([]);
    /** IDs from the `sys_ids` query parameter with no matching space */
    public readonly missing_ids = signal<string[]>([]);
    public readonly date = signal(Date.now());
    /** Time the connection to PlaceOS was lost. `0` when online */
    public readonly offline_since = signal(0);
    public readonly time_format = this._settings.time_format_signal;
    public readonly use_24_hour = computed(
        () => this.time_format() === 'HH:mm',
    );
    public readonly hours = signal([]);
    public readonly offset = signal(0);
    public readonly length = signal(24);

    public readonly time = computed(() => startOfSecond(this.date()));
    /** Start of the current day. Only changes at midnight */
    public readonly day = computed(() => startOfDay(this.date()).valueOf());

    public readonly current_offset = computed(() => {
        const current_hour =
            getHours(this.date()) + getMinutes(this.date()) / 60;
        return ((current_hour - this.offset()) / this.length()) * 100;
    });

    public readonly logo = computed(() => {
        // Recompute the logo whenever the active building changes.
        this._org.active_building();
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    });

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        await firstTruthyValueFrom(this._settings.initialised);
        await firstTruthyValueFrom(this._spaces_initialised);
        this.interval('time', () => this._tick(), 2000);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                const id_list = listParam(params.get('sys_ids'));
                const zone_ids = listParam(params.get('zone_ids'));
                const spaces = id_list.map((_) => this._spaces.find(_));
                const zone_spaces = this._spaces
                    .filter(
                        (space) =>
                            space.bookable &&
                            !id_list.includes(space.id) &&
                            zone_ids.some((_) => space.zones.includes(_)),
                    )
                    .sort((a, b) =>
                        (a.display_name || a.name).localeCompare(
                            b.display_name || b.name,
                        ),
                    );
                this.spaces.set([...spaces.filter((_) => _), ...zone_spaces]);
                this.missing_ids.set(id_list.filter((_, i) => !spaces[i]));
                this._initTimeBlocks();
                // Wait for the grid to render before scrolling
                this._scheduleRecenter(500);
            }),
        );
    }

    /** Pause scrolling to the current time while a user reads the grid */
    public onInteraction() {
        this._scheduleRecenter(IDLE_DELAY);
    }

    private _tick() {
        this.date.set(Date.now());
        if (isOnline()) this.offline_since.set(0);
        else if (!this.offline_since()) this.offline_since.set(Date.now());
    }

    /** Scroll the current time into view after the delay, then repeat */
    private _scheduleRecenter(delay: number) {
        this.timeout(
            'recenter',
            () => {
                this._scrollToNow();
                this._scheduleRecenter(RECENTER_DELAY);
            },
            delay,
        );
    }

    /** Place the current-time line one third from the top of the grid */
    private _scrollToNow() {
        const grid = this._grid()?.nativeElement;
        const now = grid?.querySelector('[now]');
        if (!now) return;
        const offset =
            now.getBoundingClientRect().top - grid.getBoundingClientRect().top;
        grid.scrollBy({
            top: offset - grid.clientHeight / 3,
            behavior: 'smooth',
        });
    }

    private _initTimeBlocks() {
        // Keep at least one hour visible within the day
        const block_start = Math.min(
            23,
            Math.max(0, Math.floor(this._settings.get('app.block_start') || 0)),
        );
        const block_end = Math.min(
            24,
            Math.max(
                block_start + 1,
                Math.floor(this._settings.get('app.block_end') || 24),
            ),
        );
        this.offset.set(block_start);
        this.length.set(block_end - block_start);
        this.hours.set(
            new Array(block_end - block_start)
                .fill(0)
                .map((_, i) => i + block_start),
        );
    }
}

/** Split a comma separated query parameter into a list of IDs */
function listParam(value: string | null) {
    return (value || '')
        .split(',')
        .map((_) => _.trim())
        .filter((_) => _);
}
