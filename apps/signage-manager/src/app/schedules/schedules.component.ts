import { DatePipe } from '@angular/common';
import {
    Component,
    DestroyRef,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, isSameDay, startOfDay } from 'date-fns';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { ScheduleTimelineComponent } from './schedule-timeline.component';
import {
    ScheduleTimelineRow,
    buildDisplayScheduleAssignments,
    buildScheduleBlocks,
    buildZoneScheduleAssignments,
} from './signage-schedule.util';

const TAB_QUERY_PARAM = 'tab';

function parseScheduleTab(value: string | null): 'displays' | 'zones' {
    return value === 'zones' ? 'zones' : 'displays';
}

@Component({
    selector: 'schedules-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div
                    class="bg-base-100 border-base-300 relative z-10 border-b px-4 py-3"
                >
                    <div
                        class="flex flex-col gap-3 sm:flex-row sm:items-center"
                    >
                        <div class="min-w-0 flex-1">
                            <h2 class="text-lg font-semibold">
                                {{
                                    'SIGNAGE_MANAGER.NAV_SCHEDULES' | translate
                                }}
                            </h2>
                            <group-breadcrumbs />
                        </div>
                        <div
                            class="bg-base-content/5 flex max-w-52 overflow-hidden rounded-lg p-1"
                            role="tablist"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SCHEDULE_TYPES' | translate
                            "
                        >
                            <button
                                type="button"
                                role="tab"
                                class="flex rounded-md p-2 font-medium transition-all duration-150"
                                [class.bg-base-100]="view_tab() === 'displays'"
                                [class.shadow-sm]="view_tab() === 'displays'"
                                [class.text-primary]="view_tab() === 'displays'"
                                [class.opacity-50]="view_tab() !== 'displays'"
                                [attr.aria-selected]="view_tab() === 'displays'"
                                (click)="setViewTab('displays')"
                            >
                                <div class="px-1">
                                    {{
                                        'SIGNAGE_MANAGER.NAV_DISPLAYS'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-content/5 h-6 min-w-6 rounded-full p-1 text-xs opacity-60"
                                >
                                    {{ display_total() }}
                                </div>
                            </button>
                            <button
                                type="button"
                                role="tab"
                                class="flex rounded-md p-2 font-medium transition-all duration-150"
                                [class.bg-base-100]="view_tab() === 'zones'"
                                [class.shadow-sm]="view_tab() === 'zones'"
                                [class.text-primary]="view_tab() === 'zones'"
                                [class.opacity-50]="view_tab() !== 'zones'"
                                [attr.aria-selected]="view_tab() === 'zones'"
                                (click)="setViewTab('zones')"
                            >
                                <div class="px-1">
                                    {{
                                        'SIGNAGE_MANAGER.NAV_ZONES' | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-content/5 h-6 min-w-6 rounded-full p-1 text-xs opacity-60"
                                >
                                    {{ zone_total() }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="mt-2.5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
                    >
                        <div class="flex items-center gap-0.5">
                            <button
                                icon
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.PREVIOUS_DAY' | translate
                                "
                                (click)="previousDay()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHOW_PREVIOUS_DAY'
                                        | translate
                                "
                            >
                                <icon>chevron_left</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                [matTooltip]="'COMMON.TODAY' | translate"
                                (click)="goToToday()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHOW_TODAY' | translate
                                "
                            >
                                <icon>today</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.NEXT_DAY' | translate
                                "
                                (click)="nextDay()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHOW_NEXT_DAY' | translate
                                "
                            >
                                <icon>chevron_right</icon>
                            </button>
                            <div class="ml-1.5">
                                <div class="text-sm leading-tight font-medium">
                                    {{
                                        selected_date()
                                            | date: 'EEEE, d MMMM yyyy'
                                    }}
                                </div>
                                <div class="text-base-content/45 text-[11px]">
                                    {{ selected_date() | date: 'EEE' }}
                                </div>
                            </div>
                        </div>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript min-w-1/2"
                        >
                            <icon matPrefix class="text-2xl">search</icon>
                            <input
                                matInput
                                type="search"
                                [value]="search_term()"
                                [placeholder]="search_placeholder() | translate"
                                (input)="setSearch($event)"
                                [attr.aria-label]="
                                    search_placeholder() | translate
                                "
                            />
                            @if (search_term()) {
                                <button
                                    icon
                                    matSuffix
                                    type="button"
                                    matRipple
                                    (click)="clearSearch()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.CLEAR_SCHEDULE_SEARCH'
                                            | translate
                                    "
                                >
                                    <icon>close</icon>
                                </button>
                            }
                        </mat-form-field>
                    </div>
                </div>

                <div class="min-h-0 flex-1 p-2">
                    <div
                        class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-hidden rounded-lg border"
                    >
                        @if (rows().length === 0) {
                            <div
                                class="text-base-content/40 flex flex-1 flex-col items-center justify-center gap-3"
                            >
                                <icon class="text-4xl">
                                    {{
                                        view_tab() === 'displays'
                                            ? 'tv_off'
                                            : 'layers_clear'
                                    }}
                                </icon>
                                <p class="text-sm">
                                    {{
                                        (search_term()
                                            ? 'SIGNAGE_MANAGER.NO_SCHEDULES_MATCH'
                                            : view_tab() === 'displays'
                                              ? 'SIGNAGE_MANAGER.NO_DISPLAYS_AVAILABLE'
                                              : 'SIGNAGE_MANAGER.NO_ZONES_AVAILABLE'
                                        ) | translate
                                    }}
                                </p>
                            </div>
                        } @else {
                            <schedule-timeline
                                [rows]="rows()"
                                [view_tab]="view_tab()"
                                [selected_date]="selected_date()"
                                [current_minutes]="current_minutes()"
                                [show_current_time]="show_current_time()"
                                [playlist_approval_status]="
                                    playlist_approval_status()
                                "
                            />
                        }
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        DatePipe,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        NavSidebarComponent,
        NavFooterComponent,
        GroupBreadcrumbsComponent,
        ScheduleTimelineComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
    ],
})
export class SchedulesSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _destroy_ref = inject(DestroyRef);

    public readonly tab = input<string | null>(null);
    public readonly view_tab = signal<'displays' | 'zones'>('displays');
    public readonly search_term = signal('');
    public readonly selected_date = signal(startOfDay(new Date()));
    public readonly current_time = signal(new Date());

    private readonly _playlists = this._service.playlists;
    private readonly _displays = this._service.displays;
    private readonly _zones = this._service.zones;

    public readonly playlist_approval_status =
        this._service.playlist_approval_status;
    public readonly display_total = computed(() => this._displays().length);
    public readonly zone_total = computed(() => this._zones().length);
    public readonly search_placeholder = computed(() =>
        this.view_tab() === 'displays'
            ? 'SIGNAGE_MANAGER.SEARCH_DISPLAYS_ZONES_PLAYLISTS'
            : 'SIGNAGE_MANAGER.SEARCH_ZONES_PLAYLISTS',
    );
    public readonly current_minutes = computed(() => {
        const now = this.current_time();
        return now.getHours() * 60 + now.getMinutes();
    });
    public readonly show_current_time = computed(() =>
        isSameDay(this.selected_date(), this.current_time()),
    );

    public readonly display_rows = computed<ScheduleTimelineRow[]>(() => {
        const playlists = this._playlists();
        const zones = this._zones();
        const date = this.selected_date();
        const search = this.search_term().trim().toLowerCase();

        return this._displays()
            .map((display) => {
                const assignments = buildDisplayScheduleAssignments(
                    display,
                    zones,
                    playlists,
                );
                const blocks = buildScheduleBlocks(assignments, [date]).sort(
                    (left, right) =>
                        left.start_minutes - right.start_minutes ||
                        left.playlist.name.localeCompare(right.playlist.name),
                );
                const zone_count = (display.zones || []).length;
                const zone_label = zone_count
                    ? ` · ${i18n(
                          'SIGNAGE_MANAGER.ZONE_COUNT_LABEL',
                          {
                              count: zone_count,
                          },
                          zone_count,
                      )}`
                    : '';
                const search_index = [
                    display.display_name || display.name,
                    display.description || '',
                    ...assignments.map((item) => item.playlist.name),
                    ...assignments.map((item) => item.source_label || ''),
                ]
                    .join(' ')
                    .toLowerCase();
                return {
                    id: display.id,
                    name: display.display_name || display.name,
                    description: display.description || '',
                    subtitle: `${i18n(
                        'SIGNAGE_MANAGER.PLAYLIST_COUNT_LABEL',
                        {
                            count: assignments.length,
                        },
                        assignments.length,
                    )}${zone_label}`,
                    icon: 'tv',
                    route: ['/displays', display.id],
                    blocks,
                    search_index,
                    signage_last_seen: display.signage_last_seen,
                    updated_at: display.updated_at,
                };
            })
            .filter((row) => !search || row.search_index.includes(search));
    });

    public readonly zone_rows = computed<ScheduleTimelineRow[]>(() => {
        const playlists = this._playlists();
        const displays = this._displays();
        const date = this.selected_date();
        const search = this.search_term().trim().toLowerCase();

        return this._zones()
            .map((zone) => {
                const assignments = buildZoneScheduleAssignments(
                    zone,
                    playlists,
                );
                const blocks = buildScheduleBlocks(assignments, [date]).sort(
                    (left, right) =>
                        left.start_minutes - right.start_minutes ||
                        left.playlist.name.localeCompare(right.playlist.name),
                );
                const display_count = displays.filter((display) =>
                    display.zones?.includes(zone.id),
                ).length;
                const search_index = [
                    zone.display_name || zone.name,
                    zone.description || '',
                    ...assignments.map((item) => item.playlist.name),
                ]
                    .join(' ')
                    .toLowerCase();
                return {
                    id: zone.id,
                    name: zone.display_name || zone.name,
                    description: zone.description || '',
                    subtitle: `${i18n(
                        'SIGNAGE_MANAGER.PLAYLIST_COUNT_LABEL',
                        {
                            count: assignments.length,
                        },
                        assignments.length,
                    )} · ${i18n(
                        'SIGNAGE_MANAGER.DISPLAY_COUNT_LABEL',
                        {
                            count: display_count,
                        },
                        display_count,
                    )}`,
                    icon: 'layers',
                    route: ['/zones', zone.id],
                    blocks,
                    search_index,
                    updated_at: zone.updated_at,
                };
            })
            .filter((row) => !search || row.search_index.includes(search));
    });

    public readonly rows = computed(() =>
        this.view_tab() === 'displays' ? this.display_rows() : this.zone_rows(),
    );

    constructor() {
        effect(() => {
            const route_tab = parseScheduleTab(this.tab());
            if (route_tab !== this.view_tab()) {
                this.view_tab.set(route_tab);
            }
        });

        const timer = setInterval(
            () => this.current_time.set(new Date()),
            60_000,
        );
        this._destroy_ref.onDestroy(() => clearInterval(timer));
    }

    public setSearch(event: Event) {
        const target = event.target as HTMLInputElement | null;
        this.search_term.set(target?.value || '');
    }

    public clearSearch() {
        this.search_term.set('');
    }

    public setViewTab(tab: 'displays' | 'zones') {
        if (tab === this.view_tab()) return;
        this.view_tab.set(tab);
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { [TAB_QUERY_PARAM]: tab },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }

    public previousDay() {
        this.selected_date.update((date) => addDays(date, -1));
    }

    public nextDay() {
        this.selected_date.update((date) => addDays(date, 1));
    }

    public goToToday() {
        this.selected_date.set(startOfDay(new Date()));
    }
}
