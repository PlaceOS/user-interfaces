import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { RouterModule } from '@angular/router';
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
                class="block min-w-[40rem] bg-base-100"
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
                        size: '3.5rem',
                    },
                ]"
                [sortable]="true"
                empty_message="No dashboards have been created"
            />
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
                <div class="p-2">
                    <button
                        icon
                        matRipple
                        class="rounded"
                        [matMenuTriggerFor]="menu"
                    >
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <a
                            mat-menu-item
                            [routerLink]="[
                                '/dashboards',
                                dashboard.id,
                                'alerts',
                            ]"
                        >
                            <div class="flex items-center space-x-2 pr-4">
                                <icon class="text-xl">add_alert</icon>
                                <div>
                                    {{
                                        'APP.STAGEHAND.DASHBOARD_MANAGE_ALERTS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </a>
                        <a
                            mat-menu-item
                            [routerLink]="[
                                '/dashboards',
                                'manage',
                                dashboard.id,
                            ]"
                        >
                            <div class="flex items-center space-x-2 pr-4">
                                <icon class="text-xl">edit</icon>
                                <div>
                                    {{
                                        'APP.STAGEHAND.DASHBOARD_EDIT'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </a>
                        <button mat-menu-item (click)="remove(dashboard)">
                            <div class="flex items-center space-x-2 pr-4">
                                <icon class="text-xl text-error">delete</icon>
                                <div>
                                    {{
                                        'APP.STAGEHAND.DASHBOARD_REMOVE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
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
    ],
})
export class DashboardListComponent implements OnInit {
    private _service = inject(DashboardsService);
    public readonly dashboards = this._service.dashboard_list;
    public readonly search_term = signal('');
    public readonly loading = this._service.loading;

    public readonly remove = (d) => this._service.removeDashboard(d);

    public ngOnInit() {
        this._service.loadDashboards();
    }
}
