import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { format } from 'date-fns';
import { combineLatest } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { EventsStateService } from './events-state.service';
import { RoomBookingsApprovalsComponent } from './room-approvals.component';
import { RoomBookingsTimelineComponent } from './room-timeline.component';
import { RoomListTimelineComponent } from './room-list-timeline.component';
import { RoomWeekBookingsTimelineComponent } from './room-week-timeline.component';

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
                        [ngModel]="dropdown_period | async"
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
                    matRipple
                    class="flex h-12 items-center space-x-1 rounded border px-3 text-sm font-medium"
                    [class.border-primary]="(period | async) === 'list'"
                    [class.text-primary]="(period | async) === 'list'"
                    [class.border-base-300]="(period | async) !== 'list'"
                    [ngClass]="(period | async) === 'list' ? 'bg-primary/10' : ''"
                    (click)="toggleList()"
                >
                    <icon class="text-xl">view_list</icon>
                    <span>List</span>
                </button>
                <button
                    icon
                    matRipple
                    class="border-secondary h-12 w-12 rounded border"
                    [matTooltip]="
                        'APP.CONCIERGE.DOWNLOAD_USER_LIST' | translate
                    "
                    [disabled]="downloading()"
                    (click)="downloadCsv()"
                >
                    @if (downloading()) {
                        <mat-spinner diameter="24"></mat-spinner>
                    } @else {
                        <icon class="text-2xl">download</icon>
                    }
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
                <div class="flex flex-1 items-center justify-end space-x-4 pr-2">
                    <div class="flex items-center space-x-1">
                        <div class="h-3 w-3 rounded-full bg-success"></div>
                        <span class="text-xs opacity-60">Confirmed</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <div class="h-3 w-3 rounded-full bg-warning"></div>
                        <span class="text-xs opacity-60">Pending</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <div class="h-3 w-3 rounded-full bg-error"></div>
                        <span class="text-xs opacity-60">Rejected</span>
                    </div>
                </div>
            </div>
            <div class="border-base-200 mt-4 flex h-px w-full flex-1 border-t">
                @if ((period | async) === 'day') {
                    <room-bookings-timeline class="relative z-0 w-1/2 flex-1" />
                } @else if ((period | async) === 'week') {
                    <room-week-bookings-timeline
                        class="relative z-0 w-1/2 flex-1"
                    />
                } @else if ((period | async) === 'list') {
                    <room-list-timeline class="relative z-0 w-1/2 flex-1" />
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
        CommonModule,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        MatRippleModule,
        FormsModule,
        RoomBookingsTimelineComponent,
        RoomListTimelineComponent,
        RoomWeekBookingsTimelineComponent,
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

    public readonly zones = this._state.zones;
    public readonly period = this._state.period;
    private _base_period: 'day' | 'week' = 'day';
    public readonly dropdown_period = this.period.pipe(
        map((p) => {
            if (p === 'day' || p === 'week') this._base_period = p;
            return this._base_period;
        }),
    );
    public readonly downloading = signal(false);
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

    public toggleList() {
        const current = this._state.getPeriod();
        this.setPeriod(current === 'list' ? this._base_period : 'list');
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
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('period')) {
                    const p = params.get('period');
                    this._state.setPeriod(
                        p === 'day' ? 'day' : p === 'list' ? 'list' : 'week',
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

    public readonly downloadCsv = async () => {
        this.downloading.set(true);
        try {
            const events = await nextValueFrom(this._state.filtered);
            const emails = new Set<string>();
            for (const event of events) {
                if (event.host) emails.add(event.host);
                for (const attendee of event.attendees || []) {
                    if (attendee.email) emails.add(attendee.email);
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
            const period = await nextValueFrom(this.period);
            const date = format(this._state.getDate(), 'yyyy-MM-dd');
            downloadFile(
                `room-bookings-${date}-${period}.csv`,
                jsonToCsv(data),
            );
        } finally {
            this.downloading.set(false);
        }
    };
}
