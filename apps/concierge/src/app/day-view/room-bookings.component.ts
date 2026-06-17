import {
    Component,
    effect,
    inject,
    OnInit,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    downloadFile,
    i18n,
    jsonToCsv,
    nextValueFrom,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { requestSpacesForZone } from '@placeos/events';
import { UserPipe } from '@placeos/users';
import { format } from 'date-fns';
import { loadPersistedZones, persistZones } from '../ui/zone-persistence';
import { EventsStateService } from './events-state.service';
import { RoomBookingsApprovalsComponent } from './room-approvals.component';
import { RoomBookingsListComponent } from './room-bookings-list.component';
import { RoomBookingsInvertedTimelineComponent } from './room-timeline-inverted.component';
import { RoomBookingsTimelineComponent } from './room-timeline.component';
import { RoomWeekBookingsTimelineComponent } from './room-week-timeline.component';

const EMPTY = [];
@Component({
    selector: 'room-bookings',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden pl-8">
            <div class="flex w-full items-center space-x-2 py-4 pr-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.ROOM_BOOKINGS' | translate }}
                </h2>
                <div class="w-px flex-1"></div>
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
                <button
                    icon
                    matRipple
                    class="border-secondary h-12 w-12 rounded border"
                    [matTooltip]="
                        'APP.CONCIERGE.DOWNLOAD_USER_LIST' | translate
                    "
                    [disabled]="downloading()"
                    (click)="downloadAttendeeList()"
                >
                    @if (downloading()) {
                        <mat-spinner diameter="24"></mat-spinner>
                    } @else {
                        <icon class="text-2xl">download</icon>
                    }
                </button>
                <button btn matRipple class="space-x-2" (click)="newBooking()">
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.ROOMS_BOOK_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
                <div
                    class="border-base-300 bg-base-100 ml-2 flex rounded border"
                >
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-none"
                        [class.bg-secondary]="view() === 'timeline'"
                        [class.text-secondary-content]="view() === 'timeline'"
                        [class.opacity-70]="view() !== 'timeline'"
                        [matTooltip]="'COMMON.DAY' | translate"
                        (click)="setView('timeline')"
                    >
                        <icon class="text-2xl">view_timeline</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-none"
                        [class.bg-secondary]="view() === 'list'"
                        [class.text-secondary-content]="view() === 'list'"
                        [class.opacity-70]="view() !== 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="setView('list')"
                    >
                        <icon class="text-2xl">view_list</icon>
                    </button>
                </div>
            </div>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-select
                        [ngModel]="zones()"
                        (ngModelChange)="updateZones($event)"
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
                        [ngModel]="ui_options().show_overflow"
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
                        class="border-base-300 flex max-w-lg flex-1 items-center rounded-full border"
                    >
                        <div
                            class="flex w-px flex-1 items-center space-x-1 overflow-x-auto rounded-l-full px-1"
                        >
                            @for (type of types(); track type.id) {
                                @if (!type_list.includes(type.id)) {
                                    <div
                                        class="border-base-300 flex items-center rounded-full border"
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
                            @for (type of types(); track type) {
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
            <div class="border-base-200 mt-4 flex h-px w-full flex-1 border-t">
                @if (view() === 'timeline') {
                    @if (period() === 'day') {
                        @if (day_timeline_view() === 'inverted') {
                            <room-bookings-inverted-timeline
                                class="relative z-0 w-1/2 flex-1"
                            />
                        } @else {
                            <room-bookings-timeline
                                class="relative z-0 w-1/2 flex-1"
                            />
                        }
                    } @else {
                        <room-week-bookings-timeline
                            class="relative z-0 w-1/2 flex-1"
                        />
                    }
                } @else {
                    <room-bookings-list class="relative z-0 w-1/2 flex-1" />
                }
                @if (has_approvals) {
                    <room-bookings-approvals class="relative z-10" />
                }
            </div>
        </div>
    `,
    styles: [``],
    providers: [UserPipe],
    imports: [
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        FormsModule,
        RoomBookingsInvertedTimelineComponent,
        RoomBookingsTimelineComponent,
        RoomWeekBookingsTimelineComponent,
        RoomBookingsListComponent,
        RoomBookingsApprovalsComponent,
        SettingsToggleComponent,
        BuildingPipe,
    ],
})
export class RoomBookingsComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _state = inject(EventsStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _settings = inject(SettingsService);
    private _user_pipe = inject(UserPipe);
    public readonly day_timeline_view = settingSignal(
        'events.day_timeline_view',
        'default',
    );

    public readonly zones = this._state.zones;
    public readonly period = this._state.period;
    public readonly downloading = signal(false);
    public readonly view = signal<'timeline' | 'list'>('timeline');
    public readonly ui_options = this._state.options;
    private readonly _levels = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
            use_region: this.use_region,
        }),
        defaultValue: [],
        loader: async ({ params }) => {
            const zone_id = params.use_region
                ? params.region
                : params.building;
            if (!zone_id) return [];
            const spaces = await nextValueFrom(
                requestSpacesForZone(zone_id),
            ).catch(() => []);
            const level_ids = new Set(
                spaces
                    .filter((space) => space.bookable)
                    .flatMap((space) => space.zones || []),
            );
            const level_list = this.use_region
                ? this._org.levelsForRegion(this._org.region)
                : this._org.levelsForBuilding(this._org.building);
            return level_list.filter((level) => level_ids.has(level.id));
        },
    });
    public readonly levels = this._levels.value;

    constructor() {
        super();
        // Restore or normalise the selected levels whenever the available
        // levels for the active building resolve.
        effect(() => {
            const levels = this.levels();
            if (this._levels.status() !== 'resolved') return;
            untracked(() => {
                if (this.use_region) return;
                const current = this.zones().filter((zone) =>
                    levels.find((lvl) => lvl.id === zone),
                );
                if (!this.zones().length) {
                    // Restore persisted selection when the view first loads
                    // without an explicit URL filter. Empty means "all levels".
                    const persisted = loadPersistedZones(
                        'room-bookings',
                        this._persistScopeId(),
                    ).filter((zone) => levels.find((lvl) => lvl.id === zone));
                    if (persisted.length) {
                        this.updateZones(persisted);
                        return;
                    }
                }
                this.updateZones(current);
            });
        });
    }
    /** List of levels for the active building */
    public readonly updateZones = (zones: string[]) => {
        const zone_ids = this._clean_zone_ids(zones);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: {
                zone_ids: zone_ids.length ? zone_ids.join(',') : null,
            },
            queryParamsHandling: 'merge',
        });
        this._state.setZones(zone_ids);
        persistZones('room-bookings', this._persistScopeId(), zone_ids);
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
    public readonly setView = (view: 'timeline' | 'list') => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view },
            queryParamsHandling: 'merge',
        });
        this.view.set(view);
    };
    /**  */
    public readonly newBooking = (d?) => this._state.newBooking(d);

    public readonly types = signal<any[]>([
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ]);

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
        this.types.set([
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
        ]);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('period')) {
                    this._state.setPeriod(
                        params.get('period') === 'day' ? 'day' : 'week',
                    );
                }
                if (params.has('view')) {
                    this.view.set(
                        params.get('view') === 'list' ? 'list' : 'timeline',
                    );
                }
                if (this.use_region) return;
                if (params.has('zone_ids')) {
                    const zones = this._clean_zone_ids(
                        params.get('zone_ids').split(','),
                    );
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
    }

    private _persistScopeId() {
        return this.use_region
            ? this._org.region?.id || ''
            : this._org.building?.id || '';
    }

    public setFilter(id: string, value: boolean) {
        const filters = this._state.filters;
        let hide_type = filters.hide_type || [];
        hide_type = hide_type.filter((i) => i !== id);
        if (value) hide_type.push(id as any);
        this._state.setFilters({ hide_type });
    }

    public async downloadAttendeeList() {
        this.downloading.set(true);
        try {
            const events = this._state.filtered();
            const emails = new Set<string>();
            for (const event of events) {
                if (event.host && event.system?.email !== event.host)
                    emails.add(event.host);
                for (const attendee of event.attendees || []) {
                    if (
                        attendee.email &&
                        event.system?.email !== attendee.email &&
                        !attendee.resource
                    ) {
                        emails.add(attendee.email);
                    }
                }
            }
            const data = await Promise.all(
                Array.from(emails).map(async (email) => {
                    const user = await this._user_pipe.transform(email);
                    return {
                        name: user?.name || '',
                        email,
                    };
                }),
            );
            const period = this.period();
            const date = format(this._state.getDate(), 'yyyy-MM-dd');
            downloadFile(
                `room-bookings-${date}-${period}.csv`,
                jsonToCsv(data),
            );
        } finally {
            this.downloading.set(false);
        }
    }

    private _clean_zone_ids(zones: string[] = []) {
        return (zones || []).filter((zone_id) => !!zone_id);
    }
}
