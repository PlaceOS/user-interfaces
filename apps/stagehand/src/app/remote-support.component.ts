import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    CalendarEvent,
    OrganisationService,
    randomInt,
    settingSignal,
    Space,
    unique,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    BindingDirective,
    IconComponent,
    SimpleTableComponent,
    ViewportVisibilityComponent,
} from '@placeos/components';
import { startOfMonth } from 'date-fns';
import { CameraSnapshotModalComponent } from './camera-snapshot-modal.component';
import { DashboardsService } from './dashboards/dashboards.service';
import { SupportService } from './support.service';
import { SidebarComponent } from './ui/sidebar.component';

function contains(str: string, substr: string) {
    return str.toLowerCase().includes(substr.toLowerCase());
}

@Component({
    selector: 'stagehand-remote-support',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <sidebar />
            <div class="flex w-px flex-1 flex-col">
                <header
                    class="border-base-400 bg-base-100 flex h-18 w-full items-center justify-between p-4"
                >
                    <h1 class="text-2xl font-bold">
                        AV Systems Remote Support
                    </h1>
                </header>
                <main class="w-full flex-1 overflow-auto">
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2"
                    >
                        <div
                            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-lg border px-4 py-2 shadow-sm"
                        >
                            <icon class="text-info mb-5 text-3xl">sensors</icon>
                            <div class="flex-1">
                                <h3 class="text-xl font-medium">Total Rooms</h3>
                                <div class="text-sm opacity-40">
                                    Total room count with devices
                                </div>
                            </div>
                            <div class="px-2 text-4xl font-bold">
                                {{ zone_rooms()?.length || '0' }}
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-lg border p-4 shadow-sm"
                        >
                            <icon class="text-error mb-5 text-3xl"
                                >warning</icon
                            >
                            <div class="flex-1">
                                <h3 class="text-xl font-medium">
                                    Active Alerts
                                </h3>
                                <div class="text-sm opacity-40">
                                    {{ critical_alerts() }} critical
                                </div>
                            </div>
                            <div class="px-2 text-4xl font-bold">
                                {{ room_alerts().length }}
                            </div>
                        </div>
                        <!-- <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    System Uptime
                                </h3>
                                <icon class="text-3xl text-success"
                                    >show_chart</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">99.9%</div>
                            <div class="text-sm opacity-40">Last 30 days</div>
                        </div> -->
                    </div>
                    <div class="flex items-center space-x-4 px-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript bg-base-100 flex-1"
                        >
                            <icon matPrefix class="relative -left-2 text-2xl"
                                >search</icon
                            >
                            <input
                                matInput
                                [(ngModel)]="search_term"
                                placeholder="Search rooms..."
                            />
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript bg-base-100"
                        >
                            <mat-select
                                placeholder="All Rooms"
                                [(ngModel)]="state"
                            >
                                <mat-option>All Rooms</mat-option>
                                <mat-option value="in_use">In Use</mat-option>
                                <mat-option value="available"
                                    >Available</mat-option
                                >
                                <mat-option value="issues"
                                    >Has Issues</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="overflow-auto p-4">
                        @for (space of room_list(); track space.id) {
                            <i
                                binding
                                class="hidden"
                                (modelChange)="setStatus(space, $event)"
                                [sys]="space.id"
                                mod="Bookings"
                                bind="status"
                            ></i>
                        }
                        <simple-table
                            class="bg-base-100 block w-full min-w-5xl overflow-hidden text-sm"
                            [data]="filtered_rooms()"
                            [columns]="[
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: actions_template,
                                    size: '6rem',
                                },
                                {
                                    key: 'display_name',
                                    name: 'Room',
                                },
                                {
                                    key: 'available',
                                    name: 'Occupancy',
                                    content: status_template,
                                    size: '8rem',
                                },
                                {
                                    key: 'event',
                                    name: is_eduction()
                                        ? 'Next Class'
                                        : 'Next Event',
                                    content: event_template,
                                },
                                {
                                    key: 'camera',
                                    name: 'Feed',
                                    content: feed_template,
                                    size: '5rem',
                                },
                                {
                                    key: 'issues',
                                    name: 'Alerts',
                                    sort_fn: alert_sort,
                                    content: issue_template,
                                },
                            ]"
                            [sortable]="true"
                            empty_message="No rooms able to be remotely supported"
                        ></simple-table>
                        <ng-template #status_template let-space="row">
                            <div class="flex items-center space-x-2 p-4">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-error]="
                                        status()[space.id] === 'busy'
                                    "
                                    [class.bg-warning]="
                                        status()[space.id] !== 'busy' &&
                                        status()[space.id] !== 'free'
                                    "
                                    [class.bg-success]="
                                        status()[space.id] === 'free'
                                    "
                                ></div>
                                <div>
                                    {{
                                        status()[space.id] === 'free'
                                            ? 'Available'
                                            : status()[space.id] === 'busy'
                                              ? 'In Use'
                                              : status()[space.id] === 'pending'
                                                ? 'Pending'
                                                : 'No status'
                                    }}
                                </div>
                            </div>
                        </ng-template>
                        <ng-template #event_template let-space="row">
                            <i
                                binding
                                (modelChange)="setNextBooking(space, $event)"
                                [sys]="space.id"
                                mod="Bookings"
                                bind="next_booking"
                            ></i>
                            <div class="p-4">
                                @if (next()[space.id]) {
                                    {{
                                        next()[space.id].event_start * 1000
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{ next()[space.id]?.title }}
                                } @else {
                                    <span class="opacity-30">None</span>
                                }
                            </div>
                        </ng-template>
                        <ng-template #mics_template let-data="data">
                            <div class="flex flex-wrap p-2">
                                @for (
                                    mic of data;
                                    let idx = $index;
                                    track idx
                                ) {
                                    <div
                                        class="bg-info-light m-1 flex items-center rounded-sm px-2 py-1"
                                    >
                                        <icon
                                            class="mr-1 text-2xl"
                                            className="material-symbols-outlined"
                                            >{{ mic.icon || 'mic' }}</icon
                                        >
                                        <div
                                            class="relative top-1 flex flex-col items-center"
                                        >
                                            <div class="text-xs">
                                                {{ mic.value }}%
                                            </div>
                                            <icon
                                                className="material-symbols-outlined"
                                                class="-mt-2 text-2xl"
                                                [class.text-success]="
                                                    mic.value > 50
                                                "
                                                [class.text-warning]="
                                                    mic.value > 20 &&
                                                    mic.value <= 50
                                                "
                                                [class.text-error]="
                                                    mic.value <= 20
                                                "
                                            >
                                                @if (mic.value > 75) {
                                                    battery_full_alt
                                                } @else if (mic.value > 50) {
                                                    battery_horiz_075
                                                } @else if (mic.value > 25) {
                                                    battery_horiz_050
                                                } @else if (mic.value > 10) {
                                                    battery_low
                                                } @else {
                                                    battery_very_low
                                                }
                                            </icon>
                                        </div>
                                    </div>
                                }
                            </div>
                        </ng-template>
                        <ng-template #feed_template let-space="row">
                            @if (space.camera_snapshot_url) {
                                <button
                                    snap
                                    matRipple
                                    class="border-base-300 bg-base-300 hover:border-info relative m-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm border hover:border-2"
                                    (click)="openCameraSnapshot(space)"
                                    (mouseenter)="setHovering(true)"
                                    (mouseleave)="setHovering(false)"
                                    matTooltip="View Camera Feed"
                                >
                                    <div viewport-only class="h-full w-full">
                                        <img
                                            auth
                                            [source]="
                                                snapshotUrl(
                                                    space.camera_snapshot_url
                                                )
                                            "
                                            class="h-full w-full object-cover"
                                            alt="Camera Feed"
                                        />
                                    </div>
                                    <div class="absolute top-0 right-0">
                                        <icon class="text-2xl text-white"
                                            >expand_content</icon
                                        >
                                    </div>
                                </button>
                            } @else {
                                <div
                                    class="border-base-300 bg-base-300 m-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm border"
                                >
                                    <icon class="text-3xl opacity-30"
                                        >hide_image</icon
                                    >
                                </div>
                            }
                        </ng-template>
                        <ng-template #issue_template let-data="data">
                            @if (data?.length) {
                                @let issue = data[0];
                                <div class="flex items-center space-x-2 p-4">
                                    <icon
                                        className="material-symbols-outlined"
                                        class="text-2xl"
                                        [class.text-error]="
                                            issue.severity === 'critical'
                                        "
                                        [class.text-warning]="
                                            issue.severity !== 'critical'
                                        "
                                        >{{
                                            issue.severity === 'critical'
                                                ? 'warning'
                                                : 'error'
                                        }}</icon
                                    >
                                    <div class="flex flex-col">
                                        <div>{{ issue.subject }}</div>
                                        @if (data.length > 1) {
                                            <div class="text-xs opacity-30">
                                                +{{ data.length - 1 }} more
                                                issues
                                            </div>
                                        }
                                    </div>
                                </div>
                            } @else {
                                <div class="p-4 opacity-30">No issues</div>
                            }
                        </ng-template>
                        <ng-template #actions_template let-row="row">
                            <div class="flex space-x-2 p-2">
                                <a
                                    icon
                                    matRipple
                                    [href]="
                                        (backoffice_link() || '/backoffice/') +
                                        '#/systems/' +
                                        row.id +
                                        '/modules'
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    matTooltip="Manage Room"
                                    class="rounded-sm"
                                >
                                    <icon class="text-2xl">build</icon>
                                </a>
                                <a
                                    icon
                                    matRipple
                                    [href]="
                                        row.support_url ||
                                        service_link() + '#/tabbed/' + row.id
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    matTooltip="Control Room"
                                    class="rounded-sm"
                                >
                                    <icon class="text-2xl">devices</icon>
                                </a>
                            </div>
                        </ng-template>
                    </div>
                </main>
            </div>
        </div>
    `,
    styles: [
        `
            [snap] {
                transition: border 200ms;
            }

            [snap] icon {
                display: none;
            }

            [snap]:hover icon {
                display: block;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        MatMenuModule,
        IconComponent,
        BindingDirective,
        SimpleTableComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        SidebarComponent,
        FormsModule,
        MatTooltipModule,
        ViewportVisibilityComponent,
        AuthenticatedImageDirective,
    ],
})
export class RemoteSupportComponent extends AsyncHandler implements OnInit {
    private readonly _dashboard = inject(DashboardsService);
    private readonly _support = inject(SupportService);
    private readonly _org = inject(OrganisationService);
    private readonly _router = inject(Router);
    private readonly _route = inject(ActivatedRoute);
    private readonly _dialog = inject(MatDialog);
    private _initialized = signal(false);

    public readonly is_eduction = settingSignal('educational_environment');

    public readonly alerts = this._dashboard.dashboard_alerts;
    public readonly alert_sort = (a: any[], b: any[]) =>
        (a?.length || 0) - (b?.length || 0);
    public readonly critical_alerts = computed(
        () =>
            this.room_alerts().filter((alert) => alert.severity === 'critical')
                .length,
    );

    public readonly search_term = signal('');
    public readonly status = signal<Record<string, string>>({});
    public readonly next = signal<Record<string, CalendarEvent>>({});
    public readonly state = signal('');
    private _query_checks = effect(() => {
        const search = this.search_term();
        const state = this.state();
        const region = this._dashboard.region_id();
        const building = this._dashboard.building_id();
        const initialized = this._initialized();

        // Skip until after we've loaded from query params
        if (!initialized) {
            return;
        }

        const query_params: Record<string, string | undefined> = {
            search: search || undefined,
            state: state || undefined,
            // Use 'all' to represent all regions selected, actual region id otherwise
            region: region || 'all',
            // Use 'all' to represent all buildings when region is selected
            building: region ? building || 'all' : undefined,
        };

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: query_params,
            replaceUrl: true,
        });
    });

    public readonly room_list = signal<Space[]>([]);
    public readonly zone_rooms = computed(() => {
        const r_id = this._dashboard.region_id();
        const bld_id = this._dashboard.building_id();
        return this.room_list().filter(
            (rm) =>
                (!bld_id && !r_id) ||
                rm.zones.includes(bld_id) ||
                (!bld_id && rm.zones.includes(r_id)),
        );
    });
    public readonly new_rooms = computed(() =>
        this.room_list().filter(
            (rm) => rm.created_at * 1000 > startOfMonth(Date.now()).valueOf(),
        ),
    );
    public readonly room_data = computed(() => {
        const alerts_list = this.alerts();
        return this.zone_rooms().map((rm) => ({
            ...rm,
            issues: alerts_list.filter((a) => a.location === rm.id),
        }));
    });
    public readonly room_alerts = computed(() => {
        const rooms = this.room_data();
        const alerts = unique(
            rooms.flatMap((room) => room.issues || []).filter((alert) => alert),
            'id',
        );
        return alerts;
    });
    public readonly backoffice_link = settingSignal(
        'backoffice_link',
        `${location.origin}/backoffice/`,
    );
    public readonly service_link = settingSignal(
        'service_link',
        `${location.origin}/control/`,
    );

    public readonly filtered_rooms = computed(() => {
        const term = this.search_term().toLowerCase();
        const current_state = this.state();
        const status_map = this.status();

        // Use room_data as base which includes location filtering and issues
        const rooms = this.room_data();

        return rooms.filter((room) => {
            // Filter by state
            switch (current_state) {
                case 'in_use':
                    if (status_map[room.id] !== 'busy') return false;
                    break;
                case 'available':
                    if (status_map[room.id] !== 'free') return false;
                    break;
                case 'issues':
                    if (!room.issues?.length) return false;
                    break;
            }

            // Filter by search term
            if (term) {
                if (
                    !room.name.toLowerCase().includes(term) &&
                    !room.display_name.toLowerCase().includes(term)
                ) {
                    return false;
                }
            }

            return true;
        });
    });

    private readonly _snapshot_timestamp = signal(Date.now());
    private readonly _snapshot_interval = settingSignal(
        'snapshot_interval',
        10 * 1000,
    );
    private readonly _is_hovering = signal(false);

    private _on_snapshot_interval = effect(() => {
        const delay = this._snapshot_interval();
        this._refreshSnapshots(delay);
    });

    public snapshotUrl(base_url: string): string {
        if (!base_url) return '';
        const timestamp = this._snapshot_timestamp();
        const separator = base_url.includes('?') ? '&' : '?';
        return `${base_url}${separator}t=${timestamp}`;
    }

    public setHovering(hovering: boolean) {
        this._is_hovering.set(hovering);
    }

    private _refreshSnapshots(delay: number) {
        const multiplier = this._is_hovering() ? 1 : 3;
        this.timeout(
            'refresh_snapshots',
            () => {
                this._snapshot_timestamp.set(Date.now());
                this._refreshSnapshots(delay);
            },
            delay * multiplier + randomInt(1000),
        );
    }

    public ngOnInit() {
        // Load filters from query parameters
        const query_params = this._route.snapshot.queryParams;
        if (query_params['search']) {
            this.search_term.set(query_params['search']);
        }
        if (query_params['state']) {
            this.state.set(query_params['state']);
        }
        // Handle region query param - 'all' means all regions, otherwise specific region id
        const region_param = query_params['region'];
        const building_param = query_params['building'];
        if (region_param === 'all') {
            // Explicitly set to all regions via dashboard service
            this._dashboard.setRegionFromParams('', '');
        } else if (region_param) {
            const region = this._org.regions.find((r) => r.id === region_param);
            if (region) {
                this._org.region = region;
                // Handle building param - 'all' means all buildings, otherwise specific building id
                const building_id =
                    building_param === 'all' ? '' : building_param || '';
                // Set via dashboard service to prevent constructor overwrite
                this._dashboard.setRegionFromParams(region.id, building_id);

                // Only apply building to org if specific building is set (not 'all')
                if (building_param && building_param !== 'all') {
                    const building = this._org.buildings.find(
                        (b) => b.id === building_param,
                    );
                    if (building) {
                        this._org.building = building;
                    }
                }
            }
        }
        // Note: If no region param exists, we don't call setRegionFromParams
        // so the constructor can set defaults from org service

        // Enable effect after loading from query params
        this._initialized.set(true);

        this.subscription(
            'room_list',
            this._support.space_list.subscribe((l) => {
                this.room_list.set(l);
                this._dashboard.setDashboard('');
                this._dashboard.listenForDashboardAlerts(true);
            }),
        );
    }

    public setNextBooking(space: Space, event: CalendarEvent) {
        console.log('Next:', space, event);
        const current = this.next();
        if (!event && current[space.id]) {
            delete current[space.id];
            this.next.set(current);
            return;
        }
        // Only update if the event actually changed
        if (JSON.stringify(current[space.id]) !== JSON.stringify(event)) {
            this.next.update((old) => ({ ...old, [space.id]: event }));
        }
    }

    public setStatus(space: Space, status: string) {
        const current = this.status();
        // Only update if the status actually changed
        if (current[space.id] !== status) {
            this.status.update((old) => ({ ...old, [space.id]: status }));
        }
    }

    public openCameraSnapshot(space: Space) {
        this._dialog.open(CameraSnapshotModalComponent, {
            data: {
                camera_snapshot_url: space.camera_snapshot_url,
                camera_url: space.camera_url,
                room_name: space.display_name || space.name,
            },
        });
    }
}
