import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboard-alert-list`,
    template: `
        <div class="p-4">
            <mat-progress-bar
                class="w-full"
                [class.opacity-0]="loading.length <= 0"
            />
            <simple-table
                class="block min-w-[48rem] bg-base-100"
                [data]="alert_list()"
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
                        key: 'conditions',
                        name: 'Conditions',
                        content: conditions_template,
                        size: '9rem',
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
            <ng-template #conditions_template let-list="data">
                <div class="flex w-full space-x-2 p-2">
                    <div
                        class="flex flex-1 space-x-1 rounded border border-base-200 p-2"
                        matTooltip="Comparision Conditions"
                    >
                        <div class="flex-1">
                            {{ list?.comparisons?.length }}
                        </div>
                        <icon class="text-lg">compare_arrows</icon>
                    </div>
                    <div
                        class="flex flex-1 space-x-1 rounded border border-base-200 p-2"
                        matTooltip="Time Dependant Conditions"
                    >
                        <div class="flex-1">
                            {{ list?.time_dependents?.length }}
                        </div>
                        <icon class="text-lg">avg_time</icon>
                    </div>
                </div>
            </ng-template>
            <ng-template #actions_template let-alert="row">
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
                                'manage',
                                alert.id,
                            ]"
                        >
                            <div class="flex items-center space-x-2 pr-4">
                                <icon class="text-xl">edit</icon>
                                <div>
                                    {{
                                        'APP.STAGEHAND.DASHBOARD_ALERTS_EDIT'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </a>
                        <button mat-menu-item (click)="remove(alert)">
                            <div class="flex items-center space-x-2 pr-4">
                                <icon class="text-xl text-error">delete</icon>
                                <div>
                                    {{
                                        'APP.STAGEHAND.DASHBOARD_ALERTS_REMOVE'
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
        MatTooltipModule,
    ],
})
export class DashboardAlertListComponent
    extends AsyncHandler
    implements OnInit
{
    private _service = inject(DashboardsService);
    private _route = inject(ActivatedRoute);

    public readonly dashboard = this._service.dashboard;
    public readonly alert_list = this._service.alerts_list;
    public readonly search_term = signal('');
    public readonly loading = this._service.loading;

    public readonly remove = (d) => this._service.removeDashboardAlert(d);

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    console.log('Dashboard:', params.get('id'));
                    this._service.setDashboard(params.get('id'));
                }
            }),
        );
    }
}
