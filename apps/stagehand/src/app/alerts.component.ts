import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { AlertsService } from './alerts.service';
import { SidebarComponent } from './ui/sidebar.component';

@Component({
    selector: 'stagehand-alerts',
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />

            <div class="flex w-px flex-1 flex-col">
                <header
                    class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Alerts</h1>
                    <button btn matRipple>Generate report</button>
                </header>
                <main class="w-full flex-1 overflow-auto bg-base-200">
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    Critical Issues
                                </h3>
                                <icon
                                    class="text-3xl text-error"
                                    className="material-symbols-outlined"
                                    >warning</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">
                                {{ critical_alerts() || '0' }}
                            </div>
                            <div class="text-sm opacity-40">
                                Immediate attention required
                            </div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">Warnings</h3>
                                <icon
                                    class="text-3xl text-warning"
                                    className="material-symbols-outlined"
                                    >error</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">
                                {{ warning_alerts() || '0' }}
                            </div>
                            <div class="text-sm opacity-40">
                                Attention may be required
                            </div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">Open Alerts</h3>
                                <icon
                                    class="text-3xl text-info"
                                    className="material-symbols-outlined"
                                    >schedule</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">
                                {{ open_alerts() || '0' }}
                            </div>
                            <div class="text-sm opacity-40">
                                Pending resolution
                            </div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">Infomation</h3>
                                <icon
                                    class="text-3xl text-info"
                                    className="material-symbols-outlined"
                                    >info</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">
                                {{ info_alerts() || '0' }}
                            </div>
                            <div class="text-sm opacity-40">
                                System Notifications
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 p-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript flex-1 bg-base-100"
                        >
                            <icon matPrefix class="relative -left-2 text-2xl"
                                >search</icon
                            >
                            <input
                                matInput
                                [(ngModel)]="search"
                                placeholder="Search for alert or location..."
                            />
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-44 bg-base-100"
                        >
                            <mat-select
                                placeholder="All Severities"
                                [ngModel]="severity()"
                                (ngModelChange)="severity.set($event)"
                            >
                                <mat-option value="">All Severities</mat-option>
                                <mat-option value="critical"
                                    >Critical</mat-option
                                >
                                <mat-option value="warning">Warning</mat-option>
                                <mat-option value="info">Info</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-40 bg-base-100"
                        >
                            <mat-select
                                placeholder="All Statuses"
                                [ngModel]="status()"
                                (ngModelChange)="status.set($event)"
                            >
                                <mat-option value="">All Statuses</mat-option>
                                <mat-option value="open">Open</mat-option>
                                <mat-option value="in progress"
                                    >In Progress</mat-option
                                >
                                <mat-option value="resolved"
                                    >Resolved</mat-option
                                >
                                <mat-option value="closed">Closed</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-48 bg-base-100"
                        >
                            <mat-select
                                placeholder="All Device Types"
                                [ngModel]="device_type()"
                                (ngModelChange)="device_type.set($event)"
                            >
                                <mat-option value="">All Devices</mat-option>
                                <mat-option value="display">Display</mat-option>
                                <mat-option value="audio">Audio</mat-option>
                                <mat-option value="video">Video</mat-option>
                                <mat-option value="network">Network</mat-option>
                                <mat-option value="control"
                                    >Control System</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="overflow-auto p-4">
                        <simple-table
                            class="block w-full min-w-[64rem] overflow-hidden bg-base-100 text-sm"
                            [data]="filtered_alerts()"
                            [filter]="search"
                            [columns]="[
                                {
                                    key: 'severity',
                                    name: 'Severity',
                                    content: severity_template,
                                },
                                {
                                    key: 'type',
                                    name: 'Device',
                                    content: device_template,
                                },
                                {
                                    key: 'location',
                                    name: 'Location',
                                },
                                {
                                    key: 'issue',
                                    name: 'Issue',
                                    content: issue_template,
                                },
                                {
                                    key: 'status',
                                    name: 'Status',
                                    content: status_template,
                                    size: '9rem',
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: actions_template,
                                    sortable: false,
                                    size: '3.5rem',
                                },
                            ]"
                            [selectable]="true"
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
                                    severity_types[data].class
                                "
                            >
                                <icon
                                    class="text-xl"
                                    className="material-symbols-outlined"
                                    >{{ severity_types[data].icon }}</icon
                                >
                                <div>{{ severity_types[data].text }}</div>
                            </div>
                        </ng-template>
                        <ng-template #device_template let-data="data">
                            <div class="flex items-center space-x-2 p-4">
                                <icon
                                    class="text-xl"
                                    className="material-symbols-outlined"
                                    >{{ device_types[data].icon }}</icon
                                >
                                <div>{{ device_types[data].text }}</div>
                            </div>
                        </ng-template>
                        <ng-template #status_template let-data="data">
                            <div
                                class="m-4 rounded-full px-4 py-2 text-sm capitalize"
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
                            <div class="p-2">
                                <button
                                    icon
                                    matRipple
                                    class="rounded"
                                    [matMenuTriggerFor]="menu"
                                >
                                    <icon class="text-2xl">more_vert</icon>
                                </button>
                                <mat-menu #menu="matMenu">
                                    <a
                                        mat-menu-item
                                        [href]="
                                            backoffice_link +
                                            '#/systems/' +
                                            row.id
                                        "
                                        target="_blank"
                                        ref="noopener noreferrer"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">build</icon>
                                            <div>Manage Room</div>
                                        </div>
                                    </a>
                                    <a
                                        mat-menu-item
                                        [href]="service_link"
                                        target="_blank"
                                        ref="noopener noreferrer"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >confirmation_number</icon
                                            >
                                            <div>Raise Ticket</div>
                                        </div>
                                    </a>
                                </mat-menu>
                            </div>
                        </ng-template>
                    </div>
                </main>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatMenuModule,
        MatRippleModule,
        SimpleTableComponent,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        SidebarComponent,
        FormsModule,
    ],
})
export class AlertsComponent {
    private _service = inject(AlertsService);
    public search = '';
    public readonly severity_types = {
        critical: { icon: 'warning', class: 'text-error', text: 'Critical' },
        warning: { icon: 'error', class: 'text-warning', text: 'Warning' },
        info: { icon: 'info', class: 'text-info', text: 'Info' },
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
    public readonly alert_list = this._service.alerts;

    public readonly info_alerts = computed(
        () => this.alert_list().filter((a) => a.severity === 'info').length,
    );
    public readonly critical_alerts = computed(
        () => this.alert_list().filter((a) => a.severity === 'critical').length,
    );
    public readonly warning_alerts = computed(
        () => this.alert_list().filter((a) => a.severity === 'warning').length,
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

    public get backoffice_link() {
        return `${location.origin}/backoffice/`;
    }

    public get service_link() {
        return `https://service-now.example.com`;
    }
}
