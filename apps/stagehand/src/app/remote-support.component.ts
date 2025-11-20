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
    settingSignal,
    Space,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    BindingDirective,
    IconComponent,
    SafePipe,
    SimpleTableComponent,
    ViewportVisibilityComponent,
} from '@placeos/components';
import { startOfMonth } from 'date-fns';
import { DashboardsService } from './dashboards/dashboards.service';
import { SupportService } from './support.service';
import { SidebarComponent } from './ui/sidebar.component';

function contains(str: string, substr: string) {
    return str.toLowerCase().includes(substr.toLowerCase());
}

@Component({
    selector: 'stagehand-remote-support',
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />
            <div class="flex w-px flex-1 flex-col">
                <header
                    class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
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
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">Total Rooms</h3>
                                <icon class="text-3xl text-info">sensors</icon>
                            </div>
                            <div class="text-4xl font-bold">
                                {{ room_list()?.length || '0' }}
                            </div>
                            <!-- <div class="text-sm opacity-40">
                                +{{ new_rooms()?.length || '0' }} this month
                            </div> -->
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    Active Alerts
                                </h3>
                                <icon class="text-3xl text-error">warning</icon>
                            </div>
                            <div class="text-4xl font-bold">
                                {{ alerts().length }}
                            </div>
                            <div class="text-sm opacity-40">
                                {{ critical_alerts() }} critical
                            </div>
                        </div>
                        <!-- <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
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
                            class="no-subscript flex-1 bg-base-100"
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
                            class="block w-full min-w-[64rem] overflow-hidden bg-base-100 text-sm"
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
                                    {{ next()[space.id].title }}
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
                                        class="m-1 flex items-center rounded bg-info-light px-2 py-1"
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
                            @if (space.camera_url) {
                                <a
                                    matRipple
                                    class="m-2 flex h-16 w-16 items-center justify-center rounded bg-base-300"
                                    [href]="space.camera_url | safe: 'url'"
                                    matTooltip="Manage Camera"
                                >
                                    @if (space.camera_snapshot_url) {
                                        <div viewport-only>
                                            <img
                                                auth
                                                [source]="
                                                    space.camera_snapshot_url
                                                "
                                                class="h-full w-full object-cover"
                                                alt="Camera Feed"
                                            />
                                        </div>
                                    } @else {
                                        <icon class="text-3xl opacity-30"
                                            >hide_image</icon
                                        >
                                    }
                                </a>
                            } @else {
                                <div
                                    class="m-2 flex h-16 w-16 items-center justify-center rounded bg-base-300"
                                >
                                    @if (space.camera_snapshot_url) {
                                        <div viewport-only>
                                            <img
                                                auth
                                                [source]="
                                                    space.camera_snapshot_url
                                                "
                                                class="h-full w-full object-cover"
                                                alt="Camera Feed"
                                            />
                                        </div>
                                    } @else {
                                        <icon class="text-3xl opacity-30"
                                            >hide_image</icon
                                        >
                                    }
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
                                    <div>{{ issue.subject }}</div>
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
                                        row.id
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    matTooltip="Manage Room"
                                    class="rounded"
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
                                    class="rounded"
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
    styles: [``],
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
        SafePipe,
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
    private _initialized = false;

    public readonly is_eduction = settingSignal('educational_environment');

    public readonly alerts = this._dashboard.dashboard_alerts;
    public readonly alert_sort = (a: any[], b: any[]) =>
        (a?.length || 0) - (b?.length || 0);
    public readonly critical_alerts = computed(
        () =>
            this.alerts().filter((alert) => alert.severity === 'critical')
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

        // Skip until after we've loaded from query params
        if (!this._initialized) {
            return;
        }

        const query_params: Record<string, string | undefined> = {
            search: search || undefined,
            state: state || undefined,
            region: region || undefined,
            // Only include building if region is selected
            building: region && building ? building : undefined,
        };

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: query_params,
            replaceUrl: true,
        });
    });

    public readonly room_list = signal<Space[]>([]);
    public readonly new_rooms = computed(() =>
        this.room_list().filter(
            (rm) => rm.created_at * 1000 > startOfMonth(Date.now()).valueOf(),
        ),
    );
    public readonly room_data = computed(() => {
        const r_id = this._dashboard.region_id();
        const bld_id = this._dashboard.building_id();
        const alerts_list = this.alerts();
        return this.room_list()
            .filter(
                (rm) =>
                    (!bld_id && !r_id) ||
                    rm.zones.includes(bld_id) ||
                    (!bld_id && rm.zones.includes(r_id)),
            )
            .map((rm) => ({
                ...rm,
                issues: alerts_list.filter((a) => a.location === rm.id),
            }));
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

    public ngOnInit() {
        // Load filters from query parameters
        const query_params = this._route.snapshot.queryParams;
        if (query_params['search']) {
            this.search_term.set(query_params['search']);
        }
        if (query_params['state']) {
            this.state.set(query_params['state']);
        }
        if (query_params['region']) {
            const region = this._org.regions.find(
                (r) => r.id === query_params['region'],
            );
            if (region) {
                this._org.region = region;

                // Only apply building if region is set
                if (query_params['building']) {
                    const building = this._org.buildings.find(
                        (b) => b.id === query_params['building'],
                    );
                    if (building) {
                        this._org.building = building;
                    }
                }
            }
        }

        // Enable effect after loading from query params
        this._initialized = true;

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
        const current = this.next();
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
}
