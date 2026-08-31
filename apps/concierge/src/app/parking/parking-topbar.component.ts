import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import {
    AsyncHandler,
    currentUser,
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
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { loadPersistedZones, persistZones } from '../ui/zone-persistence';
import {
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
                <button
                    btn
                    matRipple
                    class="w-40 space-x-2"
                    (click)="newParkingSpace()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
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
                @if (can_view_requests) {
                    <button
                        btn
                        matRipple
                        class="w-44 space-x-2"
                        (click)="newRequest()"
                    >
                        <div class="pl-2">
                            {{
                                'APP.CONCIERGE.PARKING_REQUEST_ADD' | translate
                            }}
                        </div>
                        <icon>playlist_add</icon>
                    </button>
                } @else {
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
            @if (!hide_level_selector_on_booking_list()) {
                <mat-form-field appearance="outline" class="no-subscript w-56">
                    @if (view() === 'map') {
                        <mat-select
                            [ngModel]="selected_zone()"
                            (ngModelChange)="updateSingleZone($event)"
                            [placeholder]="'COMMON.LEVEL_SELECT' | translate"
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
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    } @else {
                        <mat-select
                            [(ngModel)]="zones"
                            (ngModelChange)="updateZones($event)"
                            [disabled]="
                                disable_level_selector_on_booking_list()
                            "
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
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
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    }
                </mat-form-field>
            }
            <div class="w-px min-w-2 flex-1"></div>
            @if (section() === 'manage') {
                <div class="flex gap-2">
                    @if (view() === 'spaces') {
                        <button
                            icon
                            default
                            matRipple
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
                            default
                            matRipple
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
                        default
                        matRipple
                        (click)="manageRestrictions()"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate
                        "
                    >
                        <icon>lock_open</icon>
                    </button>
                </div>
            }
            @if (section() === 'events' && !hide_availability_counter) {
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

    private readonly _ready = signal(false);
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });
    private readonly _route_change = signal<unknown>(null);
    private _previous_route_key = '';

    public readonly section = signal<'events' | 'manage'>('events');
    public readonly view = signal<
        'bookings' | 'fleet' | 'list' | 'map' | 'requests' | 'spaces' | 'users'
    >('list');
    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    /** Selected level for views that only support one level */
    public readonly selected_zone = computed(() => this.zones()[0] || '');
    /** List of levels for the active building */
    public readonly all_levels = this._state.levels;
    /** List of levels with parking spaces */
    public readonly bookable_levels = this._state.bookable_levels;
    /** List of levels to show for the current section */
    public readonly levels = computed(() =>
        // The map always renders a single level and can display any parking
        // level, so its selector lists every level. The booking list only
        // offers levels that actually have bookable spaces.
        this.section() === 'manage' || this.view() === 'map'
            ? this.all_levels()
            : this.bookable_levels(),
    );
    /** Options set for week view */
    public readonly options = this._state.options;
    public readonly spaces = this._state.spaces;
    public readonly occupied_bookings = computed(() =>
        this._state.activeBookings(this._state.bookings()),
    );
    public readonly period = this._state.period;
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
    /** Set filtered date while retaining the selected availability hour. */
    public readonly setDate = (value: number | string) => {
        const date = new Date(value).valueOf();
        const hour =
            this.options().all_day === false
                ? new Date(this.options().date).getHours()
                : null;
        const selected_date = new Date(date);
        if (hour !== null) selected_date.setHours(hour, 0, 0, 0);
        this._state.setOptions({
            date: selected_date.valueOf(),
        });
    };
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
        const selector_inactive =
            this.hide_level_selector_on_booking_list() ||
            this.disable_level_selector_on_booking_list();
        if (selector_inactive) {
            zones = [];
        } else if (this.section() === 'events' && this.view() === 'map') {
            zones = zones.slice(0, 1);
        }
        const zone_param = zones.length ? zones.join(',') : null;
        const query_zone_param = this._query_params().get('zone_ids') || null;
        const query_matches = zone_param === query_zone_param;
        const selected_zones_match = this._sameZones(zones, this.zones());
        const option_zones_match = this._sameZones(
            zones,
            this.options().zones || [],
        );
        if (query_matches && selected_zones_match && option_zones_match) {
            return;
        }
        if (!query_matches) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone_ids: zone_param },
                queryParamsHandling: 'merge',
            });
        }
        if (!selected_zones_match) this.zones.set(zones);
        if (!option_zones_match) this._state.setOptions({ zones });
        // Forced clears while the selector is hidden/disabled must not wipe
        // the user's persisted selection.
        if (!selector_inactive) {
            persistZones(
                this.section() === 'manage' ? 'parking-manage' : 'parking',
                this._persistScopeId(),
                zones,
            );
        }
    };

    public readonly updateSingleZone = (zone: string) => {
        this.updateZones(zone ? [zone] : []);
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

    private readonly _hide_level_selector_setting = this._settings.signal(
        'parking.hide_level_selector_on_booking_list',
        false,
    );
    /** Reactive so zone clearing effects re-run when the setting loads late */
    public readonly hide_level_selector_on_booking_list = computed(
        () =>
            this.section() === 'events' &&
            this.view() === 'list' &&
            !!this._hide_level_selector_setting(),
    );

    public readonly disable_level_selector_on_booking_list = computed(() => {
        const request_filter = this.options().request_filter;
        return (
            this.section() === 'events' &&
            this.view() === 'list' &&
            request_filter !== 'all' &&
            request_filter !== 'bookings'
        );
    });

    public get hide_availability_counter() {
        return !!this._settings.get('app.parking.hide_availability_counter');
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
        this.subscription(
            'router',
            this._router.events.subscribe((event) =>
                this._route_change.set(event),
            ),
        );
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
            if (
                this.hide_level_selector_on_booking_list() ||
                this.disable_level_selector_on_booking_list()
            ) {
                if (
                    params.has('zone_ids') ||
                    this.zones().length ||
                    this.options().zones?.length
                ) {
                    this.updateZones([]);
                }
                return;
            }
            if (!params.has('zone_ids')) return;
            const zones = (params.get('zone_ids') || '')
                .split(',')
                .filter(Boolean);
            if (
                this.section() === 'events' &&
                this.view() === 'map' &&
                zones.length > 1
            ) {
                this.updateZones(zones);
                return;
            }
            this._applyQueryZones(zones);
        });
        effect(() => {
            if (!this._ready() || this.use_region) return;
            if (
                this.hide_level_selector_on_booking_list() ||
                this.disable_level_selector_on_booking_list()
            ) {
                if (this.zones().length || this.options().zones?.length) {
                    this.updateZones([]);
                }
                return;
            }
            const levels = this.levels();
            if (!levels.length) return;
            let zones = this.zones().filter((zone) =>
                levels.find((lvl) => lvl.id === zone),
            );
            if (!zones.length) {
                // Fall back to the persisted selection for this section; no
                // selection means all levels.
                zones = loadPersistedZones(
                    this.section() === 'manage' ? 'parking-manage' : 'parking',
                    this._persistScopeId(),
                ).filter((zone) => levels.find((lvl) => lvl.id === zone));
            }
            if (this._sameZones(zones, this.zones())) return;
            this.updateZones(zones);
        });
        effect(() => {
            // The events map view always shows a single level, so the selector
            // must reflect an active level. When the booking list cleared the
            // zones (selector hidden/disabled) the persisted selection isn't
            // restored, so default to the persisted or first available level.
            if (!this._ready()) return;
            if (this.section() !== 'events' || this.view() !== 'map') return;
            const levels = this.levels();
            if (!levels.length) return;
            const has_valid_zone = this.zones().some((zone) =>
                levels.find((lvl) => lvl.id === zone),
            );
            if (has_valid_zone) return;
            const persisted = loadPersistedZones(
                'parking',
                this._persistScopeId(),
            ).filter((zone) => levels.find((lvl) => lvl.id === zone));
            this.updateZones([persisted[0] || levels[0].id]);
        });
    }

    private _persistScopeId() {
        return this.use_region
            ? this._org.region?.id || ''
            : this._org.building?.id || '';
    }

    private _applyQueryZones(zones: string[]) {
        if (
            this._sameZones(zones, this.zones()) &&
            this._sameZones(zones, this.options().zones || [])
        ) {
            return;
        }
        this.zones.set(zones);
        if (!zones.length) return;
        const level = this._org.levelWithID(zones);
        if (!level) return;
        this._org.building = this._org.buildings.find(
            (bld) => bld.id === level.parent_id,
        );
        this._state.setOptions({ zones });
    }

    public async ngOnInit() {
        this._updatePath();
        await this._org.waitUntilInitialised();
        await new Promise((resolve) => setTimeout(resolve, 1000));
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

    public async newRequest() {
        const { date } = this.options();
        this._state.requestParking(date || Date.now());
    }

    private _updatePath() {
        const parts = this._router.url?.split('/') || [''];
        const [section = 'events', view = 'list'] = parts.slice(-2);
        const current_view = (view || 'list').split('?')[0];
        const route_key = `${section}/${current_view}`;
        const section_changed =
            !!this._previous_route_key && this.section() !== section;
        this.section.set(section as any);
        this.view.set(
            current_view === 'bookings' || current_view === 'requests'
                ? 'list'
                : (current_view as any),
        );
        if (
            this._previous_route_key &&
            this._previous_route_key !== route_key
        ) {
            this.setSearch('');
        }
        if (section_changed) this.zones.set([]);
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
        if (
            (this.hide_level_selector_on_booking_list() ||
                this.disable_level_selector_on_booking_list()) &&
            (this.zones().length || this.options().zones?.length)
        ) {
            this.updateZones([]);
        }
    }

    private _sameZones(first: string[], second: string[]) {
        return (
            first.length === second.length &&
            first.every((zone, index) => zone === second[index])
        );
    }
}
