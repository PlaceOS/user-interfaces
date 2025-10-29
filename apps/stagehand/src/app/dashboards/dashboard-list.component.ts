import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceAlertDashboard } from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboard-list`,
    template: `
        <div class="p-4">
            <mat-progress-bar
                class="w-full"
                [class.opacity-0]="loading.length <= 0"
            />
            <simple-table
                class="block min-w-[48rem] bg-base-100"
                [data]="dashboards()"
                [filter]="search_term()"
                [columns]="[
                    {
                        key: 'name',
                        name: 'Name',
                        size: '12rem',
                    },
                    {
                        key: 'description',
                        name: 'COMMON.DESCRIPTION' | translate,
                        content: description_template,
                    },
                    {
                        key: 'enabled',
                        name: 'Enabled',
                        content: status_template,
                        size: '6rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        sortable: false,
                        size: '11.75rem',
                    },
                ]"
                [child_template]="child_template"
                [show_children]="show_children()"
                [sortable]="true"
                empty_message="No dashboards have been created"
            />
            <ng-template #child_template let-dash="row">
                <div
                    class="absolute inset-0 z-0 bg-info-light opacity-30"
                ></div>
                <simple-table
                    class="block min-w-[48rem]"
                    [data]="alert_map()?.[dash.id] || []"
                    [filter]="search_term()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'Name',
                            size: '12rem',
                        },
                        {
                            key: 'description',
                            name: 'COMMON.DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'enabled',
                            name: 'Enabled',
                            content: status_template,
                            size: '6rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: alert_actions_template,
                            sortable: false,
                            size: '11.625rem',
                        },
                    ]"
                    [show_header]="false"
                    [sortable]="true"
                    empty_message="No alerts have been created"
                />
                <ng-template #alert_actions_template let-alert="row">
                    <div class="flex justify-end space-x-1 p-2">
                        <button icon matRipple></button>
                        <a
                            icon
                            matRipple
                            [routerLink]="[
                                '/dashboards',
                                dash.id,
                                'alerts',
                                'manage',
                                alert.id,
                            ]"
                            class="rounded"
                            [matTooltip]="
                                'APP.STAGEHAND.DASHBOARD_ALERTS_EDIT'
                                    | translate
                            "
                        >
                            <icon class="text-2xl">edit</icon>
                        </a>
                        <button
                            icon
                            matRipple
                            class="rounded"
                            (click)="removeAlert(alert)"
                            [matTooltip]="
                                'APP.STAGEHAND.DASHBOARD_ALERTS_REMOVE'
                                    | translate
                            "
                        >
                            <icon class="text-2xl text-error">delete</icon>
                        </button>
                    </div>
                    <button icon matRipple></button>
                </ng-template>
            </ng-template>
            <ng-template #status_template let-enabled="data">
                @if (enabled) {
                    <div
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                    >
                        <icon>done</icon>
                    </div>
                }
            </ng-template>
            <ng-template #description_template let-desc="data">
                <div class="px-4 py-2 text-xs">{{ desc }}</div>
            </ng-template>
            <ng-template #actions_template let-dashboard="row">
                <div class="flex space-x-1 p-2">
                    <a
                        icon
                        matRipple
                        [routerLink]="[
                            '/dashboards',
                            dashboard.id,
                            'alerts',
                            'manage',
                        ]"
                        class="rounded"
                        [matTooltip]="
                            'APP.STAGEHAND.DASHBOARD_ALERTS_ADD' | translate
                        "
                    >
                        <icon class="text-2xl">add_alert</icon>
                    </a>
                    <a
                        icon
                        matRipple
                        [routerLink]="['/dashboards', 'manage', dashboard.id]"
                        class="rounded"
                        [matTooltip]="
                            'APP.STAGEHAND.DASHBOARD_EDIT' | translate
                        "
                    >
                        <icon class="text-2xl">edit</icon>
                    </a>
                    <button
                        icon
                        matRipple
                        class="rounded"
                        (click)="remove(dashboard)"
                        [matTooltip]="
                            'APP.STAGEHAND.DASHBOARD_REMOVE' | translate
                        "
                    >
                        <icon class="text-2xl text-error">delete</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded"
                        (click)="toggleChildren(dashboard)"
                        [matTooltip]="
                            (show_children()?.[dashboard.id]
                                ? 'APP.STAGEHAND.DASHBOARD_ALERTS_OPEN'
                                : 'APP.STAGEHAND.DASHBOARD_ALERTS_CLOSE'
                            ) | translate
                        "
                    >
                        <icon class="text-2xl">{{
                            show_children()?.[dashboard.id]
                                ? 'keyboard_arrow_left'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `,
    styles: [],
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatMenuModule,
        MatProgressBarModule,
        RouterModule,
        MatTooltipModule,
    ],
})
export class DashboardListComponent implements OnInit {
    private _service = inject(DashboardsService);
    public readonly dashboards = this._service.dashboard_list;
    public readonly alert_map = this._service.dashboard_alert_map;
    public readonly search_term = signal('');
    public readonly show_children = signal<Record<string, boolean>>({});
    public readonly loading = this._service.loading;

    public readonly remove = (d) => this._service.removeDashboard(d);

    public ngOnInit() {
        this._service.loadDashboards();
    }

    public async toggleChildren(dashboard: PlaceAlertDashboard) {
        const state = this.show_children()[dashboard.id];
        if (!state) await this._service.loadDashboardAlerts(dashboard.id);
        this.show_children.set({ [dashboard.id]: !state });
    }
}
