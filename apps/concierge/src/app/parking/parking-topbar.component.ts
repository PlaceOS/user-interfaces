import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import { debounceTime, filter, map, startWith } from 'rxjs/operators';

import {
    AsyncHandler,
    currentUser,
    firstTruthyValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { lastValueFrom, timer } from 'rxjs';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { loadPersistedZones, persistZones } from '../ui/zone-persistence';
import {
    ParkingOptions,
    ParkingRequestFilter,
    ParkingStateService,
} from './parking-state.service';

@Component({
    selector: 'parking-topbar',
    template: `
        <div class="flex w-full items-center gap-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (section() !== 'events'
                        ? 'APP.CONCIERGE.PARKING_HEADER'
                        : 'APP.CONCIERGE.PARKING_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            @if (section() === 'events' && view() !== 'map') {
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period()"
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
            }
            <searchbar
                [model]="options().search"
                (modelChange)="setSearch($event)"
            ></searchbar>
            @if (view() === 'spaces') {
                <div
                    [matTooltip]="
                        options().zones?.length
                            ? ''
                            : 'Select a level to add a space'
                    "
                >
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newParkingSpace()"
                        [disabled]="!options().zones?.length"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                        </div>
                        <icon>add</icon>
                    </button>
                </div>
            }
            @if (view() === 'users') {
                <button
                    btn
                    matRipple
                    class="w-40 space-x-2"
                    (click)="newParkingUser()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_USER_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
            @if (view() === 'fleet') {
                <button
                    btn
                    matRipple
                    class="w-52 space-x-2"
                    (click)="newFleetVehicle()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_FLEET_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
            @if (section() === 'events' && !disable_reservations) {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newReservation()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
        </div>
        <div class="bg-base-100 mb-2 flex h-14 items-center px-8">
            @if (section() === 'events') {
                <div class="mr-2 flex items-center">
                    <a
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="view() === 'map'"
                        [routerLink]="['events', 'list']"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </a>
                    <a
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="view() !== 'map'"
                        [routerLink]="['events', 'map']"
                        [matTooltip]="'COMMON.MAP' | translate"
                    >
                        <icon class="text-2xl">map</icon>
                    </a>
                </div>
            }
            @if (!hide_level_selector_on_booking_list) {
                <mat-form-field appearance="outline" class="no-subscript w-56">
                    <mat-select
                        [(ngModel)]="zones"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="
                            (section() === 'manage'
                                ? 'COMMON.LEVEL_SELECT'
                                : 'COMMON.LEVEL_ALL'
                            ) | translate
                        "
                        multiple
                    >
                        @for (level of levels(); track level) {
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
            }
            <div class="w-px min-w-2 flex-1"></div>
            @if (section() === 'manage') {
                <div class="flex gap-2">
                    @if (view() === 'spaces') {
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content relative h-12 w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_CSV_UPLOAD' | translate
                            "
                            [disabled]="!options().zones?.length"
                        >
                            <icon>upload</icon>
                            <input
                                type="file"
                                accept=".csv"
                                class="absolute inset-0 opacity-0"
                                [disabled]="!options().zones?.length"
                                (change)="uploadSpacesCSV($any($event))"
                            />
                        </button>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            (click)="downloadSpacesCSV()"
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_CSV_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                    }
                    <button
                        icon
                        matRipple
                        class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                        (click)="manageRestrictions()"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate
                        "
                    >
                        <icon>lock_open</icon>
                    </button>
                </div>
            }
            @if (section() === 'events') {
                <div
                    class="border-base-300 mr-2 flex items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                    matTooltip="Parking Spaces Occupied"
                >
                    @let occupied = occupied_bookings().length || 0;
                    {{ occupied }} of
                    {{ spaces().length || '' }}
                    <icon class="ml-1! text-lg">car_lock</icon>
                    @let percent = occupied / (spaces().length || 0);
                    <span
                        class="rounded-sm px-2 py-1 font-mono text-xs"
                        [class.bg-error]="percent === 100"
                        [class.text-error-content]="percent === 100"
                        [class.bg-warning]="percent > 50 && percent < 100"
                        [class.text-warning-content]="
                            percent > 50 && percent < 100
                        "
                        [class.bg-success]="percent < 50"
                        [class.text-success-content]="percent < 50"
                        >{{ percent * 100 | number: '2.0-0' }}%</span
                    >
                </div>
            }
            @if (view() === 'list' || view() === 'map') {
                <date-options
                    [step]="period() === 'week' ? 7 : 1"
                    (dateChange)="setDate($event)"
                ></date-options>
            }
        </div>
        @if (section() === 'events' && view() === 'list' && can_view_requests) {
            <div
                class="border-base-300 mx-8 mb-2 inline-flex w-full max-w-[calc(100%-4rem)] items-center gap-1 rounded-xl border p-1"
            >
                @for (filter of filter_options; track filter.value) {
                    <button
                        btn
                        matRipple
                        class="h-8 min-w-24 flex-1 rounded-lg px-3"
                        [class.inverse]="
                            options().request_filter !== filter.value
                        "
                        (click)="setRequestFilter(filter.value)"
                    >
                        {{ filter.label | translate }}
                    </button>
                }
            </div>
        }
    `,
    styles: [
        `
            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateOptionsComponent,
        MatTooltipModule,
        MatRippleModule,
        IconComponent,
        BuildingPipe,
        MatFormFieldModule,
        MatSelectModule,
        SearchbarComponent,
        TranslatePipe,
        RouterModule,
    ],
})
export class ParkingTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(ParkingStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    private readonly _default_options: ParkingOptions = {
        date: Date.now(),
        search: '',
        zones: [],
        period: 'day',
        request_filter: 'all',
    };
    private readonly _ready = signal(false);
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });
    private readonly _route_change = toSignal(
        this._router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this._router.url),
            startWith(this._router.url),
        ),
        { initialValue: this._router.url },
    );
    private _previous_route_key = '';

    public readonly section = signal<'events' | 'manage'>('events');
    public readonly view = signal<
        'bookings' | 'fleet' | 'list' | 'map' | 'requests' | 'spaces' | 'users'
    >('list');
    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    /** List of levels for the active building */
    public readonly levels = toSignal(this._state.levels, { initialValue: [] });
    /** Options set for week view */
    public readonly options = toSignal(this._state.options, {
        initialValue: this._default_options,
    });
    public readonly spaces = toSignal(this._state.spaces, { initialValue: [] });
    public readonly occupied_bookings = toSignal(
        this._state.bookings.pipe(
            debounceTime(50),
            map((bookings) => this._state.activeBookings(bookings)),
        ),
        { initialValue: [] },
    );
    public readonly period = toSignal(this._state.period, {
        initialValue: 'day',
    });
    public get filter_options(): ReadonlyArray<{
        label: string;
        value: ParkingRequestFilter;
    }> {
        const filter_options: Array<{
            label: string;
            value: ParkingRequestFilter;
        }> = [
            { label: 'COMMON.ALL', value: 'all' },
            {
                label: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_REQUEST',
                value: 'requests',
            },
            {
                label: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_PENDING_MANUAL',
                value: 'manual',
            },
            {
                label: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_BOOKED',
                value: 'bookings',
            },
        ];
        if (this.show_waitlist) {
            filter_options.splice(3, 0, {
                label: 'APP.CONCIERGE.PARKING_BOOKING_TYPE_WAITLISTED',
                value: 'waitlist',
            });
        }
        return filter_options;
    }
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setOptions({ date: d });
    /** Set filter string */
    public readonly setSearch = (str) =>
        this._state.setOptions({ search: str });
    /** Set list filter for event list */
    public readonly setRequestFilter = (f: ParkingRequestFilter) =>
        this._state.setOptions({ request_filter: f });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        let zones = (z || []).filter((_) => !!_);
        if (!this._router.url.includes('parking')) return;
        if (this.hide_level_selector_on_booking_list) {
            zones = [];
        }
        // Manage section must always have a specific zone; snap empty
        // selections back to the first available level.
        if (this.section() === 'manage' && !zones.length) {
            const first = this.levels()[0]?.id;
            if (first) zones = [first];
        }
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.length ? zones.join(',') : null },
            queryParamsHandling: 'merge',
        });
        this.zones.set(zones);
        this._state.setOptions({ zones });
        persistZones(
            this.section() === 'manage' ? 'parking-manage' : 'parking',
            this._persistScopeId(),
            zones,
        );
    };

    public readonly setPeriod = (p: 'day' | 'week') => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { period: p },
            queryParamsHandling: 'merge',
        });
        this._state.setPeriod(p);
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get disable_reservations() {
        return !!this._settings.get('app.parking.disable_bookings');
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    public get hide_level_selector_on_booking_list() {
        return (
            this.section() === 'events' &&
            this.view() === 'list' &&
            !!this._settings.get(
                'app.parking.hide_level_selector_on_booking_list',
            )
        );
    }

    public get can_view_requests() {
        if (!this._settings.get('app.parking.show_requests')) return false;
        const feature_groups = this._settings.get('app.feature_groups') || {};
        const request_groups = feature_groups['parking-requests'] || [];
        const admin_group = this._settings.get('app.admin_group') || 'admin';
        const groups = currentUser()?.groups || [];
        return (
            groups.includes(admin_group) ||
            groups.includes('placeos_admin') ||
            groups.includes('placeos_support') ||
            !request_groups.length ||
            groups.some((grp) => request_groups.includes(grp))
        );
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'parking' },
        });
    }

    constructor() {
        super();
        effect(() => {
            this._route_change();
            this._updatePath();
        });
        effect(() => {
            if (!this._ready() || !this._router.url.includes('parking')) return;
            const params = this._query_params();
            if (params.has('period')) {
                this._state.setPeriod(
                    params.get('period') === 'week' ? 'week' : 'day',
                );
            }
            if (this.hide_level_selector_on_booking_list) {
                if (params.has('zone_ids') || this.zones().length) {
                    this.updateZones([]);
                }
                return;
            }
            if (!params.has('zone_ids')) return;
            const zones = (params.get('zone_ids') || '')
                .split(',')
                .filter(Boolean);
            this.zones.set(zones);
            if (!zones.length) return;
            const level = this._org.levelWithID(zones);
            if (!level) return;
            this._org.building = this._org.buildings.find(
                (bld) => bld.id === level.parent_id,
            );
            this._state.setOptions({ zones });
        });
        effect(() => {
            if (!this._ready() || this.use_region) return;
            if (this.hide_level_selector_on_booking_list) {
                if (this.zones().length) this.updateZones([]);
                return;
            }
            const levels = this.levels();
            if (!levels.length) return;
            let zones = this.zones().filter((zone) =>
                levels.find((lvl) => lvl.id === zone),
            );
            if (!zones.length) {
                // Fall back to persisted selection for this section. Manage
                // view additionally guarantees at least the first level.
                const persisted = loadPersistedZones(
                    this.section() === 'manage' ? 'parking-manage' : 'parking',
                    this._persistScopeId(),
                ).filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (persisted.length) {
                    zones = persisted;
                } else if (this.section() === 'manage') {
                    zones = [levels[0].id];
                }
            }
            if (this._sameZones(zones, this.zones())) return;
            this.updateZones(zones);
        });
    }

    private _persistScopeId() {
        return this.use_region
            ? this._org.region?.id || ''
            : this._org.building?.id || '';
    }

    public async ngOnInit() {
        this._updatePath();
        await firstTruthyValueFrom(this._org.initialised);
        await lastValueFrom(timer(1000));
        this.setSearch('');
        this._ready.set(true);
        this._updatePath();
    }

    public newParkingSpace() {
        this._state.editSpace();
    }

    public downloadSpacesCSV() {
        this._state.downloadSpacesCSV();
    }

    public uploadSpacesCSV(event: InputEvent) {
        this._state.uploadSpacesCSV(event);
    }

    public newParkingUser() {
        this._state.editUser();
    }

    public newFleetVehicle() {
        this._state.editFleetVehicle();
    }

    public async newReservation() {
        const { date } = this.options();
        this._state.editReservation(undefined, {
            date: date || Date.now(),
            allow_time_changes: true,
        });
    }

    private _updatePath() {
        const parts = this._router.url?.split('/') || [''];
        const [section = 'events', view = 'list'] = parts.slice(-2);
        const current_view = (view || 'list').split('?')[0];
        const route_key = `${section}/${current_view}`;
        this.section.set(section as any);
        this.view.set(
            current_view === 'bookings' || current_view === 'requests'
                ? 'list'
                : (current_view as any),
        );
        if (this._previous_route_key && this._previous_route_key !== route_key) {
            this.setSearch('');
        }
        this._previous_route_key = route_key;
        if (current_view === 'bookings') {
            this.setRequestFilter('bookings');
        } else if (current_view === 'requests' && this.can_view_requests) {
            this.setRequestFilter('requests');
        }
        if (
            this.section() === 'events' &&
            (!this.can_view_requests ||
                !this._settings.get('app.parking.show_requests'))
        ) {
            this.setRequestFilter('bookings');
        }
        if (
            this.section() === 'events' &&
            !this.show_waitlist &&
            this.options().request_filter === 'waitlist'
        ) {
            this.setRequestFilter(
                this.can_view_requests ? 'requests' : 'bookings',
            );
        }
        if (this.hide_level_selector_on_booking_list && this.zones().length) {
            this.updateZones([]);
        }
        this.selectDefaultZoneForManage();
    }

    private async selectDefaultZoneForManage() {
        if (
            this.section() !== 'manage' ||
            this.use_region ||
            this.zones().length
        ) {
            return;
        }
        const levels = this.levels();
        if (!levels.length) return;
        const persisted = loadPersistedZones(
            'parking-manage',
            this._persistScopeId(),
        ).filter((zone) => levels.find((lvl) => lvl.id === zone));
        this.updateZones(persisted.length ? persisted : [levels[0].id]);
    }

    private _sameZones(first: string[], second: string[]) {
        return (
            first.length === second.length &&
            first.every((zone, index) => zone === second[index])
        );
    }
}
