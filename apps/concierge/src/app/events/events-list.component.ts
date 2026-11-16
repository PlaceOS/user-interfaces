import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    addDays,
    addMonths,
    addWeeks,
    type Day,
    endOfDay,
    format,
    startOfMonth,
    startOfWeek,
    subMonths,
} from 'date-fns';
import {
    loadPersistedZones,
    persistZones,
    zoneScopeId,
} from '../ui/zone-persistence';
import { EventCalendarComponent } from './event-calendar.component';
import { EventListingComponent } from './event-listing.component';
import { EventStateService } from './event-state.service';

/** A week or a month that the events list can show */
interface PeriodOption {
    id: number;
    start: number;
    end: number;
    display: string;
}

/** The weeks or months from 6 months ago to 6 months ahead */
function periodOptions(
    period_type: 'week' | 'month',
    week_start: Day,
): PeriodOption[] {
    const periods: PeriodOption[] = [];
    let date = subMonths(Date.now(), 6).valueOf();
    const end_date = addMonths(Date.now(), 6).valueOf();
    if (period_type === 'month') {
        date = startOfMonth(date).valueOf();
    } else if (period_type === 'week') {
        date = startOfWeek(date, { weekStartsOn: week_start }).valueOf();
    }
    while (date < end_date) {
        if (period_type === 'week') {
            const end = endOfDay(addDays(date, 6)).valueOf();
            periods.push({
                id: date,
                start: date,
                end,
                display: `${format(date, 'EEE, do MMM')} – ${format(
                    end,
                    'do MMM',
                )}`,
            });
            date = addDays(date, 7).valueOf();
        } else if (period_type === 'month') {
            const end = addDays(addMonths(date, 1), -1).valueOf();
            periods.push({
                id: date,
                start: date,
                end,
                display: `${format(date, 'MMMM yyyy')}`,
            });
            date = addMonths(date, 1).valueOf();
        } else break;
    }
    return periods;
}

@Component({
    selector: 'app-event-list',
    template: `
        <div
            class="absolute inset-0 flex flex-col"
            [attr.inert]="has_calendar ? null : ''"
        >
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.EVENTS_HEADER' | translate }}
                </h2>
                <a
                    btn
                    matRipple
                    data-shortcut="new"
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.EVENTS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">chevron_right</icon>
                </a>
            </div>
            <div filters class="flex items-center space-x-2 px-8 pb-4">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view() !== 'list'"
                    [attr.aria-pressed]="view() === 'list'"
                    (click)="setView('list')"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">list</icon>
                        <div class="pr-2">{{ 'COMMON.LIST' | translate }}</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view() !== 'calendar'"
                    [attr.aria-pressed]="view() === 'calendar'"
                    (click)="setView('calendar')"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">event</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CALENDAR' | translate }}
                        </div>
                    </div>
                </button>
                <div class="h-full px-2">
                    <div class="bg-base-300 h-full w-px"></div>
                </div>
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [aria-label]="'FORM.PERIOD' | translate"
                        [ngModel]="period()"
                        (ngModelChange)="setPeriodType($event)"
                    >
                        <mat-option value="week">{{
                            'COMMON.WEEK' | translate
                        }}</mat-option>
                        <mat-option value="month">{{
                            'COMMON.MONTH' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript w-64">
                    <mat-select
                        [aria-label]="'FORM.DATE' | translate"
                        [ngModel]="selected_range()"
                        (ngModelChange)="setPeriod($event)"
                    >
                        @for (range of period_list(); track range.id) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript w-56">
                    <mat-select
                        [aria-label]="
                            'APP.CONCIERGE.BUILDINGS_LEVELS' | translate
                        "
                        [ngModel]="zones()"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels(); track level.id) {
                            <mat-option [value]="level.id">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs opacity-70">
                                            {{
                                                (level.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ level.display_name || level.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-y-auto px-8">
                @if (view() === 'list') {
                    <div class="min-h-full w-full overflow-x-auto">
                        <event-listing class="block"></event-listing>
                    </div>
                }
                @if (view() === 'calendar') {
                    <event-calendar></event-calendar>
                }
            </div>
        </div>
        @if (!has_calendar) {
            <div class="absolute inset-0 z-50 flex items-center justify-center">
                <div class="bg-base-100 absolute inset-0 opacity-80"></div>
                <p role="alert" class="relative max-w-lg text-lg opacity-70">
                    {{ 'APP.CONCIERGE.EVENTS_CONFIG_ERROR' | translate }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                flex: 1;
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        EventCalendarComponent,
        EventListingComponent,
        MatRippleModule,
        RouterModule,
        FormsModule,
        BuildingPipe,
    ],
})
export class EventsListComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _state = inject(EventStateService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly period = computed(() => this._state.options().period);

    public readonly view = signal<'list' | 'calendar'>('list');
    public readonly period_list = computed(() =>
        periodOptions(this.period(), this._settings.get('app.week_start') || 0),
    );
    public readonly selected_range = signal<number>(undefined);
    /** Currently selected level ids (empty = all levels) */
    public readonly zones = signal<string[]>([]);
    /** Levels available for the active building/region */
    public readonly levels = computed(() => {
        const bld = this._org.active_building();
        const region = this._org.active_region();
        return this._settings.get('app.use_region')
            ? this._org.levelsForRegion(region)
            : this._org.levelsForBuilding(bld);
    });

    constructor() {
        super();
        // Keep selected zones valid as the active building/region changes
        effect(() => {
            const levels = this.levels();
            untracked(() => {
                if (!levels.length) return;
                const valid = this.zones().filter((zone) =>
                    levels.find((lvl) => lvl.id === zone),
                );
                if (valid.length !== this.zones().length) {
                    this._applyZones(valid, true);
                    return;
                }
                if (this.zones().length) return;
                // No selection yet: restore persisted zones (if any).
                const persisted = loadPersistedZones(
                    'events',
                    zoneScopeId(
                        this._org,
                        !!this._settings.get('app.use_region'),
                    ),
                ).filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (persisted.length) this._applyZones(persisted, true);
            });
        });
    }

    public get has_calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this.subscription('poll_events', this._state.startPolling());
        // The route sets the period. Without a range, show the current period.
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((q) => {
                if (q.has('view')) {
                    this.view.set(q.get('view') as 'list' | 'calendar');
                }
                if (q.has('period') && q.get('period') !== this._state.period) {
                    this.setPeriodType(
                        q.get('period') as 'week' | 'month',
                        false,
                    );
                }
                if (q.has('zone_ids')) {
                    const zones = (q.get('zone_ids') || '')
                        .split(',')
                        .filter(Boolean);
                    this._applyZones(zones, false);
                }

                if (q.has('range')) {
                    const id = parseInt(q.get('range'), 10);
                    const item = this.period_list().find(
                        (_) => id >= _.start && id < _.end,
                    ) ||
                        this.period_list()[0] || {
                            id,
                            start: id,
                            end:
                                this._state.period === 'week'
                                    ? addWeeks(id, 1).valueOf()
                                    : addMonths(id, 1).valueOf(),
                        };
                    this.selected_range.set(item.id);
                    this._state.setOptions({ date: item.start, end: item.end });
                    if (item.id !== id) this.setPeriod(item.id);
                } else {
                    this._initPeriod();
                }
            }),
        );
    }

    public updateZones(zones: string[]) {
        this._applyZones(
            (zones || []).filter((_) => !!_),
            true,
        );
    }

    private _applyZones(zones: string[], persist: boolean) {
        this.zones.set(zones);
        this._state.setOptions({ zone_ids: zones });
        if (persist) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: {
                    zone_ids: zones.length ? zones.join(',') : null,
                },
                queryParamsHandling: 'merge',
            });
            persistZones(
                'events',
                zoneScopeId(this._org, !!this._settings.get('app.use_region')),
                zones,
            );
        }
    }

    public setView(view: 'list' | 'calendar') {
        this.view.set(view);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: view },
            queryParamsHandling: 'merge',
        });
    }

    /** Change the period type. The range is cleared, so the current period shows. */
    public setPeriodType(type: 'week' | 'month', set_route = true) {
        this._state.setOptions({ period: type });
        if (set_route) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { period: type, range: null },
                queryParamsHandling: 'merge',
            });
        }
    }

    public setPeriod(id: number) {
        const item =
            this.period_list().find((_) => id >= _.start && id < _.end) ||
            this.period_list()[0];
        if (!item) return;
        this.selected_range.set(item.id);
        const { start, end } = item;
        this._state.setOptions({ date: start, end });
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { range: id },
            queryParamsHandling: 'merge',
        });
    }

    /** Show the period that contains the current time */
    private _initPeriod() {
        const list = this.period_list();
        if (!list.length) return;
        const now = Date.now();
        const item =
            list.find((_) => _.start <= now && _.end >= now) || list[0];
        this.setPeriod(item.id);
    }
}
