import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
    endOfDay,
    format,
    startOfMonth,
    startOfWeek,
    subMonths,
} from 'date-fns';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { loadPersistedZones, persistZones } from '../ui/zone-persistence';
import { EventCalendarComponent } from './event-calendar.component';
import { EventListingComponent } from './event-listing.component';
import { EventStateService } from './event-state.service';

@Component({
    selector: 'app-event-list',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.EVENTS_HEADER' | translate }}
                </h2>
                <a
                    btn
                    matRipple
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
                        [ngModel]="zones()"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels(); track level.id) {
                            <mat-option [value]="level.id">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs opacity-30">
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
                <p class="max-w-lg text-lg opacity-60">
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
    changeDetection: ChangeDetectionStrategy.Eager,
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

    public readonly period = toSignal(
        this._state.options.pipe(
            map((_) => _.period),
            distinctUntilChanged(),
        ),
        { initialValue: this._state.period },
    );

    public readonly view = signal<'list' | 'calendar'>('list');
    public readonly period_list = signal<any[]>([]);
    public readonly selected_range = signal<number>(undefined);
    /** Currently selected level ids (empty = all levels) */
    public readonly zones = signal<string[]>([]);
    /** Levels available for the active building/region */
    public readonly levels = toSignal(
        combineLatest([
            this._org.active_building,
            this._org.active_region,
        ]).pipe(
            map(([bld, region]) =>
                this._settings.get('app.use_region')
                    ? this._org.levelsForRegion(region)
                    : this._org.levelsForBuilding(bld),
            ),
        ),
        { initialValue: [] },
    );

    public get has_calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this.subscription('poll_events', this._state.startPolling());
        this.subscription(
            'period',
            this._state.options
                .pipe(
                    map((_) => _.period),
                    distinctUntilChanged(),
                )
                .subscribe(() => {
                    this._generatePeriods();
                    this._initPeriod();
                }),
        );
        this._generatePeriods();
        this._initPeriod();
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
                this._generatePeriods();

                if (q.has('zone_ids')) {
                    const zones = (q.get('zone_ids') || '')
                        .split(',')
                        .filter(Boolean);
                    this._applyZones(zones, false);
                }

                if (q.has('range')) {
                    this.timeout('update', () => {
                        const id = parseInt(q.get('range'), 10);
                        const item = this.period_list().find(
                            (_) => id >= _.start && id < _.end,
                        ) ||
                            this.period_list()[0] || {
                                start: id,
                                end:
                                    this._state.period === 'week'
                                        ? addWeeks(id, 1).valueOf()
                                        : addMonths(id, 1).valueOf(),
                            };
                        const range_id = item.id || id;
                        this.selected_range.set(range_id);
                        this._state.setOptions({
                            date: item.start,
                            end: item.end,
                        });
                        if (range_id !== id) this.setPeriod(range_id);
                    });
                }
            }),
        );
        this.subscription(
            'levels',
            combineLatest([
                this._org.active_building,
                this._org.active_region,
            ]).subscribe(() => {
                const levels = this.levels();
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
                    this._persistScopeId(),
                ).filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (persisted.length) this._applyZones(persisted, true);
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
            persistZones('events', this._persistScopeId(), zones);
        }
    }

    private _persistScopeId() {
        return this._settings.get('app.use_region')
            ? this._org.region?.id || ''
            : this._org.building?.id || '';
    }

    public setView(view: 'list' | 'calendar') {
        this.view.set(view);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: view },
            queryParamsHandling: 'merge',
        });
    }

    public setPeriodType(type: 'week' | 'month', set_route = true) {
        this._state.setOptions({ period: type });
        if (set_route) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { period: type },
                queryParamsHandling: 'merge',
            });
        }
    }

    public setPeriod(id: number) {
        this.timeout('set_period', () => {
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
        });
    }

    private _generatePeriods() {
        this.timeout('generate_periods', async () => {
            const periods = [];
            const period_type = this.period();
            let date = subMonths(Date.now(), 6).valueOf();
            const end_date = addMonths(Date.now(), 6).valueOf();
            const week_offset = this._settings.get('app.week_start') || 0;
            if (period_type === 'month') {
                date = startOfMonth(date).valueOf();
            } else if (period_type === 'week') {
                date = startOfWeek(date, {
                    weekStartsOn: week_offset,
                }).valueOf();
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
            this.period_list.set(periods);
        });
    }

    private _initPeriod() {
        this.timeout(
            'update',
            () => {
                if (this.period_list().length) {
                    let index = this.period_list().findIndex(
                        (_) => _.start <= Date.now() && _.end >= Date.now(),
                    );
                    if (index < 0) index = 0;
                    this.setPeriod(this.period_list()[index].id);
                    this.selected_range.set(this.period_list()[index].id);
                }
            },
            350,
        );
    }
}
