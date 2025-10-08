import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    nextValueFrom,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { EventsStateService } from './events-state.service';

const EMPTY = [];
@Component({
    selector: 'room-bookings',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden pl-8">
            <div class="flex w-full items-center space-x-4 py-4 pr-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.ROOM_BOOKINGS' | translate }}
                </h2>
                <div class="w-px flex-1"></div>
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period | async"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option value="day">
                            {{ 'COMMON.DAY' | translate }}
                        </mat-option>
                        <mat-option value="week">
                            {{ 'COMMON.WEEK' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <button btn matRipple class="space-x-2" (click)="newBooking()">
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.ROOMS_BOOK_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
            </div>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-select
                        [ngModel]="zones | async"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels | async; track level) {
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
                @if (allow_setup_breakdown) {
                    <settings-toggle
                        [ngModel]="(ui_options | async)?.show_overflow"
                        (ngModelChange)="
                            updateUIOptions({ show_overflow: $event })
                        "
                        >{{
                            'APP.CONCIERGE.SETUP_BREAKDOWN' | translate
                        }}</settings-toggle
                    >
                }
                <div class="flex flex-1 justify-end pr-2">
                    <div
                        class="flex max-w-[32rem] flex-1 items-center rounded-full border border-base-300"
                    >
                        <div
                            class="flex w-px flex-1 items-center space-x-1 overflow-x-auto rounded-full px-1"
                        >
                            @for (type of types; track type.id) {
                                @if (!type_list.includes(type.id)) {
                                    <div
                                        class="flex items-center rounded-full border border-base-300"
                                    >
                                        <div
                                            class="m-2 h-4 w-4 rounded-full"
                                            [style.background-color]="
                                                type.color
                                            "
                                        ></div>
                                        <div class="truncate text-sm">
                                            {{ type.name }}
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            class="text-base-300 hover:text-base-content"
                                            (click)="setFilter(type.id, true)"
                                        >
                                            <icon class="text-xl">close</icon>
                                        </button>
                                    </div>
                                }
                            }
                        </div>
                        <button
                            btn
                            matRipple
                            class="inverse bg-base-100"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>filter_list</icon>
                            <div class="mx-2">
                                {{ 'COMMON.FILTERS' | translate }}
                            </div>
                        </button>
                    </div>
                    <mat-menu #menu="matMenu" class="">
                        <div
                            class="flex w-48 flex-col space-y-2 overflow-hidden"
                        >
                            @for (type of types; track type) {
                                <mat-checkbox
                                    [ngModel]="!type_list.includes(type.id)"
                                    (ngModelChange)="
                                        setFilter(type.id, !$event)
                                    "
                                >
                                    {{ type.name }}
                                </mat-checkbox>
                            }
                        </div>
                    </mat-menu>
                </div>
            </div>
            <div class="mt-4 flex h-px w-full flex-1 border-t border-base-200">
                @if ((period | async) === 'day') {
                    <room-bookings-timeline class="relative z-0 w-1/2 flex-1" />
                }
                @if ((period | async) === 'week') {
                    <room-week-bookings-timeline
                        class="relative z-0 w-1/2 flex-1"
                    />
                }
                @if (has_approvals) {
                    <room-bookings-approvals class="relative z-10" />
                }
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RoomBookingsComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _state = inject(EventsStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _settings = inject(SettingsService);

    public readonly zones = this._state.zones;
    public readonly period = this._state.period;
    public readonly ui_options = this._state.options;
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld),
        ),
    );
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setZones(z);
    };
    public readonly updateUIOptions = (o) => this._state.setUIOptions(o);
    public readonly setPeriod = (p) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { period: p },
            queryParamsHandling: 'merge',
        });
        this._state.setPeriod(p);
    };
    /**  */
    public readonly newBooking = (d?) => this._state.newBooking(d);

    public types: any[] = [
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ];

    public get type_list() {
        return this._state.filters.hide_type || EMPTY;
    }

    public get has_approvals() {
        return this._org.binding('approvals');
    }

    public get allow_setup_breakdown() {
        return this._settings.get('app.events.allow_setup_breakdown');
    }

    public get use_region() {
        return this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this.types = [
            {
                id: 'internal',
                name: i18n('COMMON.TYPE_INTERNAL'),
                color: '#D81B60',
            },
            {
                id: 'external',
                name: i18n('COMMON.TYPE_EXTERNAL'),
                color: '#1E88E5',
            },
            {
                id: 'cancelled',
                name: i18n('COMMON.TYPE_CANCELLED'),
                color: '#eeeeee',
            },
        ];
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('period')) {
                    this._state.setPeriod(
                        params.get('period') === 'day' ? 'day' : 'week',
                    );
                }
                if (this.use_region) return;
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                        this.updateZones(zones);
                    }
                }
            }),
        );
        this.subscription(
            'levels',
            this._org.active_levels
                .pipe(debounceTime(300))
                .subscribe(async (levels) => {
                    if (this.use_region) return;
                    const zones = (await nextValueFrom(this.zones)).filter(
                        (zone) => levels.find((lvl) => lvl.id === zone),
                    );
                    if (!zones.length && levels.length) {
                        zones.push(levels[0].id);
                    }
                    this.updateZones(zones);
                }),
        );
        this.subscription(
            'region',
            this._org.active_region
                .pipe(filter((_) => !!_))
                .subscribe(async (_) => {
                    const zones = await nextValueFrom(this.zones);
                    if (zones.length) return;
                    this.updateZones([_.id]);
                }),
        );
    }

    public setFilter(id: string, value: boolean) {
        const filters = this._state.filters;
        let hide_type = filters.hide_type || [];
        hide_type = hide_type.filter((i) => i !== id);
        if (value) hide_type.push(id as any);
        this._state.setFilters({ hide_type });
    }
}
