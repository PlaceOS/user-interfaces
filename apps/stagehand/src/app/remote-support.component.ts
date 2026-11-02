import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
    WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    CalendarEvent,
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
import { CameraSnapshotModalComponent } from './camera-snapshot-modal.component';
import { Alert } from './dashboards/broker-alerts';
import { DashboardsService } from './dashboards/dashboards.service';
import { SupportService } from './support.service';
import { backofficeLink } from './ui/sidebar.component';
import { StagehandPageComponent } from './ui/stagehand-page.component';

@Component({
    selector: 'stagehand-remote-support',
    template: `
        <stagehand-page heading="AV Systems Remote Support">
            <div
                class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2"
            >
                <div
                    class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-lg border px-4 py-2 shadow-sm"
                >
                    <icon class="text-info mb-5 text-3xl">sensors</icon>
                    <div class="flex-1">
                        <h3 class="text-xl font-medium">Total Rooms</h3>
                        <div class="stagehand-muted text-sm">
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
                    <icon class="text-error text-3xl">warning</icon>
                    <div class="flex-1">
                        <h3 class="text-xl font-medium">Active Alerts</h3>
                    </div>
                    <div class="px-2 text-4xl font-bold">
                        {{ room_alerts().length }}
                    </div>
                </div>
            </div>
            <div class="flex items-start space-x-4 px-4">
                <div class="flex-1">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript bg-base-100 w-full"
                    >
                        <icon matPrefix class="relative -left-2 text-2xl"
                            >search</icon
                        >
                        <input
                            id="remote-support-search"
                            matInput
                            aria-label="Search rooms"
                            [(ngModel)]="search_term"
                            placeholder="Search rooms..."
                        />
                    </mat-form-field>
                </div>
                <div>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript bg-base-100"
                    >
                        <mat-select
                            id="remote-support-state"
                            aria-label="Room state"
                            placeholder="All Rooms"
                            [(ngModel)]="state"
                        >
                            <mat-option>All Rooms</mat-option>
                            <mat-option value="in_use">In Use</mat-option>
                            <mat-option value="available">Available</mat-option>
                            <mat-option value="issues">Has Issues</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
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
                            name: 'Schedule',
                            content: status_template,
                            size: '8rem',
                        },
                        {
                            key: 'current_event',
                            name: is_eduction()
                                ? 'Current Class'
                                : 'Current Event',
                            content: event_template,
                        },
                        {
                            key: 'next_event',
                            name: is_eduction() ? 'Next Class' : 'Next Event',
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
                    [empty_message]="
                        loading()
                            ? 'Loading rooms...'
                            : room_list().length
                              ? 'No rooms match the current filters'
                              : 'No rooms able to be remotely supported'
                    "
                ></simple-table>
                <ng-template #status_template let-space="row">
                    <i
                        binding
                        (modelChange)="setCurrentBooking(space, $event)"
                        [sys]="space.id"
                        mod="Bookings"
                        bind="current_booking"
                    ></i>
                    <i
                        binding
                        (modelChange)="setNextBooking(space, $event)"
                        [sys]="space.id"
                        mod="Bookings"
                        bind="next_booking"
                    ></i>
                    <div class="flex items-center space-x-2 p-4">
                        <div
                            class="h-3 w-3 rounded-full"
                            aria-hidden="true"
                            [class.bg-error]="status()[space.id] === 'busy'"
                            [class.bg-warning]="
                                status()[space.id] !== 'busy' &&
                                status()[space.id] !== 'free'
                            "
                            [class.bg-success]="status()[space.id] === 'free'"
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
                <ng-template #event_template let-key="key" let-space="row">
                    @let events = key === 'current_event' ? current() : next();
                    <div class="p-4">
                        @if (events[space.id]) {
                            <div>{{ events[space.id].title }}</div>
                            <div class="stagehand-subtle text-xs">
                                {{
                                    events[space.id].event_start * 1000
                                        | date: 'shortTime'
                                }}
                                &ndash;
                                {{
                                    events[space.id].event_end * 1000
                                        | date: 'shortTime'
                                }}
                            </div>
                        } @else {
                            <span class="stagehand-subtle">None</span>
                        }
                    </div>
                </ng-template>
                <ng-template #feed_template let-space="row">
                    @let feed_url = cameraSnapshotFeed(space);
                    @if (feed_url) {
                        <button
                            snap
                            type="button"
                            matRipple
                            class="border-base-300 bg-base-300 hover:border-info relative m-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm border hover:border-2"
                            (click)="openCameraSnapshot(space)"
                            (mouseenter)="setHovering(true)"
                            (mouseleave)="setHovering(false)"
                            [attr.aria-label]="
                                'View camera feed for ' +
                                (space.display_name || space.name)
                            "
                            matTooltip="View Camera Feed"
                        >
                            <div viewport-only class="h-full w-full">
                                <img
                                    auth
                                    [source]="snapshotUrl(feed_url)"
                                    class="h-full w-full object-cover"
                                    [alt]="
                                        'Camera feed for ' +
                                        (space.display_name || space.name)
                                    "
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
                            <icon class="text-3xl opacity-30">hide_image</icon>
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
                                    <div class="stagehand-subtle text-xs">
                                        +{{ data.length - 1 }} more issues
                                    </div>
                                }
                            </div>
                        </div>
                    } @else {
                        <div class="stagehand-subtle p-4">No issues</div>
                    }
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex space-x-2 p-2">
                        <a
                            icon
                            matRipple
                            [attr.aria-label]="
                                'Manage room ' + (row.display_name || row.name)
                            "
                            [href]="
                                (backoffice_link() || '/backoffice/') +
                                '#/systems/' +
                                row.id +
                                '/modules'
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                            matTooltip="Manage Room"
                            class="rounded-sm"
                        >
                            <icon class="text-2xl">build</icon>
                        </a>
                        <a
                            icon
                            matRipple
                            [attr.aria-label]="
                                'Control room ' + (row.display_name || row.name)
                            "
                            [href]="
                                row.support_url ||
                                service_link() + '#/tabbed/' + row.id
                            "
                            target="_blank"
                            rel="noopener noreferrer"
                            matTooltip="Control Room"
                            class="rounded-sm"
                        >
                            <icon class="text-2xl">devices</icon>
                        </a>
                    </div>
                </ng-template>
            </div>
        </stagehand-page>
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
        IconComponent,
        BindingDirective,
        SimpleTableComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        StagehandPageComponent,
        FormsModule,
        MatTooltipModule,
        ViewportVisibilityComponent,
        AuthenticatedImageDirective,
    ],
})
export class RemoteSupportComponent extends AsyncHandler implements OnInit {
    private readonly _dashboard = inject(DashboardsService);
    private readonly _support = inject(SupportService);
    private readonly _router = inject(Router);
    private readonly _route = inject(ActivatedRoute);
    private readonly _dialog = inject(MatDialog);
    private _initialized = signal(false);

    public readonly is_eduction = settingSignal('educational_environment');
    public readonly loading = this._support.loading;

    public readonly alerts = this._dashboard.dashboard_alerts;
    public readonly alert_sort = (a: unknown[], b: unknown[]) =>
        (a?.length || 0) - (b?.length || 0);

    public readonly search_term = signal('');
    public readonly status = signal<Record<string, string>>({});
    public readonly current = signal<Record<string, CalendarEvent>>({});
    public readonly next = signal<Record<string, CalendarEvent>>({});
    public readonly state = signal('');
    private _query_checks = effect(() => {
        const search = this.search_term();
        const state = this.state();
        const location_params = this._dashboard.location_query_params();
        const initialized = this._initialized();

        // Skip until after we've loaded from query params
        if (!initialized) {
            return;
        }

        const query_params: Record<string, string | undefined> = {
            search: search || undefined,
            state: state || undefined,
            ...location_params,
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
    public readonly room_data = computed(() => {
        // alerts by room, so each room doesn't scan every alert
        const issues = new Map<string, Alert[]>();
        for (const alert of this.alerts()) {
            if (!issues.has(alert.location)) issues.set(alert.location, []);
            issues.get(alert.location).push(alert);
        }
        return this.zone_rooms().map((rm) => ({
            ...rm,
            issues: issues.get(rm.id) || [],
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
    public readonly backoffice_link = backofficeLink();
    public readonly service_link = settingSignal(
        'service_link',
        `${location.origin}/control/`,
    );

    public readonly filtered_rooms = computed(() => {
        const term = this.search_term().toLowerCase();
        const current_state = this.state();
        // read only when filtering on it, so each room's status coming in
        // doesn't filter the list again
        const status_map =
            current_state === 'in_use' || current_state === 'available'
                ? this.status()
                : {};

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
                    !(room.name || '').toLowerCase().includes(term) &&
                    !(room.display_name || '').toLowerCase().includes(term)
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

    public cameraSnapshotFeed(
        space: Partial<Space> & { camera_snapshot_urls?: string[] },
    ): string {
        return space.camera_snapshot_urls?.[0] || '';
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
        this._dashboard.applyLocationParams(query_params);

        // Enable effect after loading from query params
        this._initialized.set(true);

        this._dashboard.setDashboard('');
        this._dashboard.listenForDashboardAlerts(true);
    }

    private readonly _room_list_sync = effect(() => {
        this.room_list.set(this._support.space_list() as Space[]);
    });

    public setCurrentBooking(space: Space, event: CalendarEvent) {
        this._setBooking(this.current, space, event);
    }

    public setNextBooking(space: Space, event: CalendarEvent) {
        this._setBooking(this.next, space, event);
    }

    /** Sets the room's booking in `bookings`, or removes it when there is none */
    private _setBooking(
        bookings: WritableSignal<Record<string, CalendarEvent>>,
        space: Space,
        event: CalendarEvent,
    ) {
        const current = bookings();
        if (!event && current[space.id]) {
            // a new object, so the signal sees the booking end
            const { [space.id]: _, ...rest } = current;
            bookings.set(rest);
            return;
        }
        // Only update if the event actually changed
        if (JSON.stringify(current[space.id]) !== JSON.stringify(event)) {
            bookings.update((old) => ({ ...old, [space.id]: event }));
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
                camera_snapshot_urls: space.camera_snapshot_urls,
                camera_url: space.camera_url,
                room_name: space.display_name || space.name,
            },
        });
    }
}
