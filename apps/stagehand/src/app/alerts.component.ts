import { AsyncPipe, CommonModule } from '@angular/common';
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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { DashboardsService } from './dashboards/dashboards.service';
import { SidebarComponent } from './ui/sidebar.component';

@Component({
    selector: 'stagehand-alerts',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <sidebar />

            <div class="flex w-px flex-1 flex-col">
                <header
                    class="border-base-400 bg-base-100 flex h-18 w-full items-center justify-between space-x-2 p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Alerts</h1>
                    <div class="flex-1"></div>
                    @if (dashboard()) {
                        <a
                            icon
                            matRipple
                            class="hover:bg-base-200 rounded-xl"
                            [routerLink]="[
                                '/dashboards',
                                dashboard(),
                                'alerts',
                            ]"
                            matTooltip="Manage Dashboard"
                        >
                            <icon>settings</icon>
                        </a>
                    }
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-64"
                    >
                        <mat-select
                            [(ngModel)]="dashboard"
                            (ngModelChange)="setDashboard($event)"
                            placeholder="Select dashboard"
                        >
                            <mat-option [value]="''"
                                >Disconnected Devices</mat-option
                            >
                            @for (item of dashboards(); track item.id) {
                                <mat-option [value]="item.id">{{
                                    item.name
                                }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </header>
                <main class="bg-base-200 w-full flex-1 overflow-auto">
                    <!-- @if (dashboard()) { -->
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3"
                    >
                        <div
                            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-lg border px-4 py-2 shadow-sm"
                        >
                            <icon
                                class="text-error mb-5 text-3xl"
                                className="outlined"
                                >warning</icon
                            >
                            <div class="flex-1">
                                <h3 class="text-xl font-medium">Critical</h3>
                                <div class="text-sm opacity-40">
                                    Attention required
                                </div>
                            </div>
                            <div class="px-2 text-4xl font-bold">
                                {{ critical_alerts() || '0' }}
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-lg border px-4 py-2 shadow-sm"
                        >
                            <icon
                                class="text-warning mb-5 text-3xl"
                                className="outlined"
                                >error</icon
                            >
                            <div class="flex-1">
                                <h3 class="text-xl font-medium">Warnings</h3>
                                <div class="text-sm opacity-40">
                                    May require attention
                                </div>
                            </div>
                            <div class="px-2 text-4xl font-bold">
                                {{ warning_alerts() || '0' }}
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-lg border px-4 py-2 shadow-sm"
                        >
                            <icon
                                class="text-info mb-5 text-3xl"
                                className="outlined"
                                >schedule</icon
                            >
                            <div class="flex-1">
                                <h3 class="text-xl font-medium">Open</h3>
                                <div class="text-sm opacity-40">
                                    Pending resolution
                                </div>
                            </div>
                            <div class="px-2 text-4xl font-bold">
                                {{ open_alerts() || '0' }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col items-center space-y-2 px-4 lg:flex-row lg:space-y-0 lg:space-x-2"
                    >
                        <div class="w-full max-w-full flex-1 lg:max-w-1/2">
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript bg-base-100 w-full"
                            >
                                <icon
                                    matPrefix
                                    class="relative -left-2 text-2xl"
                                    >search</icon
                                >
                                <input
                                    matInput
                                    [ngModel]="search()"
                                    (ngModelChange)="search.set($event)"
                                    placeholder="Search for alert or location..."
                                />
                            </mat-form-field>
                        </div>
                        <div
                            class="flex w-full max-w-full flex-1 items-center space-x-2 lg:max-w-1/2"
                        >
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript bg-base-100 flex-1"
                            >
                                <mat-select
                                    placeholder="All Severities"
                                    [ngModel]="severity()"
                                    (ngModelChange)="severity.set($event)"
                                >
                                    <mat-option value=""
                                        >All Severities</mat-option
                                    >
                                    <mat-option value="critical"
                                        >Critical</mat-option
                                    >
                                    <mat-option value="high"
                                        >Warning</mat-option
                                    >
                                    <mat-option value="medium">Info</mat-option>
                                </mat-select>
                            </mat-form-field>
                            <!-- <mat-form-field
                                appearance="outline"
                                class="no-subscript flex-1 bg-base-100"
                            >
                                <mat-select
                                    placeholder="All Statuses"
                                    [ngModel]="status()"
                                    (ngModelChange)="status.set($event)"
                                >
                                    <mat-option value=""
                                        >All Statuses</mat-option
                                    >
                                    <mat-option value="open">Open</mat-option>
                                    <mat-option value="in progress"
                                        >In Progress</mat-option
                                    >
                                    <mat-option value="resolved"
                                        >Resolved</mat-option
                                    >
                                    <mat-option value="closed"
                                        >Closed</mat-option
                                    >
                                </mat-select>
                            </mat-form-field> -->
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript bg-base-100 flex-1"
                            >
                                <mat-select
                                    placeholder="All Device Types"
                                    [ngModel]="device_type()"
                                    (ngModelChange)="device_type.set($event)"
                                >
                                    <mat-option value=""
                                        >All Devices</mat-option
                                    >
                                    <mat-option value="display"
                                        >Display</mat-option
                                    >
                                    <mat-option value="audio">Audio</mat-option>
                                    <mat-option value="video">Video</mat-option>
                                    <mat-option value="network"
                                        >Network</mat-option
                                    >
                                    <mat-option value="control"
                                        >Control System</mat-option
                                    >
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="overflow-auto p-4">
                        <simple-table
                            class="bg-base-100 block w-full min-w-4xl overflow-hidden text-sm"
                            [data]="filtered_alerts()"
                            [filter]="search()"
                            [columns]="[
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: actions_template,
                                    sortable: false,
                                    size: '3.125rem',
                                },
                                {
                                    key: 'severity',
                                    name: 'Severity',
                                    content: severity_template,
                                    size: '8rem',
                                },
                                {
                                    key: 'issue',
                                    name: 'Issue',
                                    content: issue_template,
                                },
                                {
                                    key: 'type',
                                    name: 'Device',
                                    content: device_template,
                                },
                                {
                                    key: 'location',
                                    name: 'Location',
                                    content: location_template,
                                },
                                {
                                    key: 'status',
                                    name: 'Status',
                                    content: status_template,
                                    show: false,
                                    size: '9rem',
                                },
                            ]"
                            [sortable]="true"
                            empty_message="No requested assets for this product"
                        ></simple-table>
                        <ng-template #issue_template let-row="row">
                            <div class="p-4 text-sm">
                                <div class="truncate font-medium">
                                    {{ row.subject }}
                                </div>
                                <div class="max-w-48 opacity-50">
                                    {{ row.body }}
                                </div>
                            </div>
                        </ng-template>
                        <ng-template #severity_template let-data="data">
                            <div
                                [class]="
                                    'flex items-center space-x-2 p-4 ' +
                                    severity_types[data]?.class
                                "
                            >
                                <icon
                                    class="text-xl"
                                    className="material-symbols-outlined"
                                    >{{ severity_types[data]?.icon }}</icon
                                >
                                <div>{{ severity_types[data]?.text }}</div>
                            </div>
                        </ng-template>
                        <ng-template #device_template let-alert="row">
                            <div
                                class="flex items-center space-x-2 p-4 font-mono text-xs"
                            >
                                {{ alert.device }}
                                <icon
                                    class="text-xl"
                                    className="material-symbols-outlined"
                                    >{{ device_types[alert.type]?.icon }}</icon
                                >
                                <div>
                                    {{ device_types[alert.type]?.text }}
                                </div>
                            </div>
                        </ng-template>
                        <ng-template #location_template let-data="data">
                            <div class="px-4 py-2">
                                @let space = data | space | async;
                                @let name = space?.display_name || space?.name;
                                <div>{{ name || data }}</div>
                                @if (name) {
                                    <div class="text-xs opacity-30">
                                        {{ data }}
                                    </div>
                                }
                            </div>
                        </ng-template>
                        <ng-template #status_template let-data="data">
                            <div
                                class="mx-4 rounded-full px-4 py-2 text-sm capitalize"
                                [class.bg-success-light]="
                                    data === 'resolved' || data === 'closed'
                                "
                                [class.text-success]="
                                    data === 'resolved' || data === 'closed'
                                "
                                [class.bg-error-light]="data === 'open'"
                                [class.text-error]="data === 'open'"
                                [class.bg-warning-light]="
                                    data === 'in progress'
                                "
                                [class.text-warning]="data === 'in progress'"
                            >
                                {{ data }}
                            </div>
                        </ng-template>
                        <ng-template #actions_template let-row="row">
                            <div class="flex space-x-2 p-2">
                                <a
                                    icon
                                    matRipple
                                    [href]="
                                        (backoffice_link() || '/backoffice/') +
                                        '#/systems/' +
                                        row.location +
                                        '/modules'
                                    "
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="rounded-sm"
                                    matTooltip="Manage Room"
                                >
                                    <icon class="text-2xl">build</icon>
                                </a>
                                <!-- <a
                                    icon
                                    matRipple
                                    [href]="service_link()"
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="rounded-sm"
                                    matTooltip="Raise Ticket"
                                >
                                    <icon class="text-2xl"
                                        >person_raised_hand</icon
                                    >
                                </a> -->
                            </div>
                        </ng-template>
                    </div>
                    <!-- } @else {
                        <div
                            class="flex h-full w-full flex-col items-center justify-center space-y-4 p-12 opacity-30"
                        >
                            <icon class="text-8xl">arrow_warm_up</icon>
                            <p>
                                {{
                                    'Select an alerts dashboard from above'
                                        | translate
                                }}
                            </p>
                        </div>
                    } -->
                </main>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        AsyncPipe,
        MatMenuModule,
        MatRippleModule,
        SimpleTableComponent,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        SidebarComponent,
        FormsModule,
        SpacePipe,
        MatTooltipModule,
        RouterLink,
    ],
})
export class AlertsComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dashboards = inject(DashboardsService);
    private _org = inject(OrganisationService);
    private _initialized = signal(false);

    public readonly search = signal('');
    public readonly severity_types = {
        critical: { icon: 'dangerous', class: 'text-error', text: 'Critical' },
        high: { icon: 'warning', class: 'text-warning', text: 'Warning' },
        medium: { icon: 'info', class: 'text-info', text: 'Info' },
        low: { icon: 'info', class: 'text-info', text: 'Low' },
    };
    public readonly device_types = {
        display: { icon: 'devices', text: 'Display' },
        audio: { icon: 'mic', text: 'Audio' },
        video: { icon: 'videocam', text: 'Video' },
        network: { icon: 'lan', text: 'Network' },
        control: { icon: 'tv_remote', text: 'Control System' },
    };
    public readonly severity = signal('');
    public readonly device_type = signal('');
    public readonly status = signal('');

    private _query_sync = effect(() => {
        const search = this.search();
        const severity = this.severity();
        const device_type = this.device_type();
        const status = this.status();
        const region = this._dashboards.region_id();
        const building = this._dashboards.building_id();
        const initialized = this._initialized();

        // Skip until after we've loaded from query params
        if (!initialized) {
            return;
        }

        const query_params: Record<string, string | undefined> = {
            search: search || undefined,
            severity: severity || undefined,
            device_type: device_type || undefined,
            status: status || undefined,
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
    public readonly alert_list = this._dashboards.dashboard_alerts;
    public readonly dashboard = signal(null);
    public readonly dashboards = this._dashboards.dashboard_list.asReadonly();

    public readonly info_alerts = computed(
        () =>
            this.alert_list().filter(
                (a) => a.severity === 'medium' || a.severity === 'low',
            ).length,
    );
    public readonly critical_alerts = computed(
        () => this.alert_list().filter((a) => a.severity === 'critical').length,
    );
    public readonly warning_alerts = computed(
        () => this.alert_list().filter((a) => a.severity === 'high').length,
    );
    public readonly open_alerts = computed(
        () => this.alert_list().filter((a) => a.status === 'open').length,
    );

    public readonly filtered_alerts = computed(() => {
        let list = this.alert_list();
        if (this.severity())
            list = list.filter((a) => a.severity === this.severity());
        if (this.device_type())
            list = list.filter((a) => a.type === this.device_type());
        if (this.status())
            list = list.filter((a) => a.status === this.status());
        return list;
    });

    public readonly backoffice_link = settingSignal(
        'backoffice_link',
        `${location.origin}/backoffice/`,
    );
    public readonly service_link = settingSignal(
        'service_link',
        `${location.origin}/control/`,
    );

    public ngOnInit() {
        // Load filters from query parameters
        const query_params = this._route.snapshot.queryParams;
        if (query_params['search']) {
            this.search.set(query_params['search']);
        }
        if (query_params['severity']) {
            this.severity.set(query_params['severity']);
        }
        if (query_params['device_type']) {
            this.device_type.set(query_params['device_type']);
        }
        if (query_params['status']) {
            this.status.set(query_params['status']);
        }
        // Handle region query param - 'all' means all regions, otherwise specific region id
        const region_param = query_params['region'];
        const building_param = query_params['building'];
        if (region_param === 'all') {
            // Explicitly set to all regions via dashboards service
            this._dashboards.setRegionFromParams('', '');
        } else if (region_param) {
            const region = this._org.regions.find((r) => r.id === region_param);
            if (region) {
                this._org.region = region;
                // Handle building param - 'all' means all buildings, otherwise specific building id
                const building_id =
                    building_param === 'all' ? '' : building_param || '';
                // Set via dashboards service to prevent constructor overwrite
                this._dashboards.setRegionFromParams(region.id, building_id);

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

        this._dashboards.loadDashboards();
        this.timeout('apply_dash', () => this._applyDashboard(''));
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    this.timeout('apply_dash', () =>
                        this._applyDashboard(params.get('id')),
                    );
                }
            }),
        );
        console.log('Backoffice Link:', this.backoffice_link());
    }

    public async setDashboard(dash_id: string) {
        this.timeout(
            'route_dash',
            () => {
                this._router.navigate(['/alerts', dash_id]);
                this.timeout('apply_dash', () => this._applyDashboard(dash_id));
            },
            100,
        );
    }

    private async _applyDashboard(id: string) {
        await this._dashboards.setDashboard(id);
        this.dashboard.set(id);
        this._dashboards.listenForDashboardAlerts(true);
    }
}
