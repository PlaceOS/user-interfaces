import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboard-view`,
    template: `
        <div class="p-4">
            <mat-progress-bar class="w-full" [class.opacity-0]="!loading()" />
            <simple-table
                class="block min-w-160 bg-base-100"
                [data]="alerts()"
                [filter]="search_term()"
                [columns]="[
                    {
                        key: 'time',
                        name: 'Date',
                        size: '6rem',
                        content: date_template,
                    },
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
                        key: 'actions',
                        name: ' ',
                        content: actions_template,
                        sortable: false,
                        size: '3.5rem',
                    },
                ]"
                [sortable]="true"
                empty_message="No alerts for this dashboard"
            />
            <ng-template #date_template let-date="data">
                <div class="p-4">{{ date | date }}</div>
            </ng-template>
            <ng-template #description_template let-desc="data">
                <div class="px-4 py-2 text-xs">{{ desc }}</div>
            </ng-template>
            <ng-template #actions_template let-dashboard="row">
                <div class="p-2">
                    <button icon matRipple class="rounded-sm">
                        <icon>more_vert</icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        MatProgressBarModule,
        TranslatePipe,
        IconComponent,
    ],
})
export class DashboardViewComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _service = inject(DashboardsService);

    public readonly setDashboard = (id) => this._service.setDashboard(id);
    public readonly search_term = signal('');
    public readonly alerts = this._service.dashboard_alerts;
    public readonly loading = signal(true);

    public ngOnInit() {
        this.subscription(
            'route.parms',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this.setDashboard(params.get('id'));
                    this.timeout('listen', () =>
                        this._service.listenForDashboardAlerts(),
                    );
                }
            }),
        );
    }
}
