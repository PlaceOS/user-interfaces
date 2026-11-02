import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportPageComponent } from '../report-page.component';
import { ReportUsageChartsComponent } from '../report-usage-charts.component';
import { ReportUsageListComponent } from '../report-usage-list.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { ReportsStateService } from '../reports-state.service';
import { reportQueryOptions } from '../reports.utilities';
import { ReportDesksLevelListComponent } from './report-desks-level-list.component';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Total bookings',
        description:
            'All desk bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active',
        description: 'Bookings that are not cancelled and are not rejected.',
    },
    {
        label: 'Rejected / Cancelled',
        description:
            'Rejected counts bookings with cancelled state or rejected status. Cancelled counts bookings flagged as cancelled.',
    },
    {
        label: 'Utilisation',
        description:
            'Active booking count divided by the number of available desks across the selected levels and business-day period.',
    },
    {
        label: 'Daily utilisation',
        description:
            'For each day, active desk usage is compared with available desk capacity for the selected levels.',
    },
];

@Component({
    selector: '[report-desks]',
    template: `
        <reports-options
            resource_type="desks"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_DESKS_HEADER"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <div
                    class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
                >
                    <div class="flex flex-1 flex-col items-center">
                        <h3>
                            {{
                                'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                    | translate
                            }}
                        </h3>
                        <p>{{ total_count() || 0 }}</p>
                    </div>
                    <div class="flex flex-1 flex-col items-center">
                        <h3>Active</h3>
                        <p>{{ active_count() || 0 }}</p>
                    </div>
                    <div class="flex flex-1 flex-col items-center">
                        <h3>Rejected</h3>
                        <p>{{ cancelled_count() || 0 }}</p>
                    </div>
                    <div class="flex flex-1 flex-col items-center">
                        <h3>Cancelled</h3>
                        <p>{{ deleted_count() || 0 }}</p>
                    </div>
                    <div class="flex flex-1 flex-col items-center">
                        <h3>
                            {{
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate
                            }}
                        </h3>
                        <p>{{ utilisation() || 0 }}%</p>
                    </div>
                </div>
                <report-usage-charts [print]="printing()" />
                <report-usage-list type="desks" [print]="printing()" />
                <report-desks-levels-list
                    [print]="printing()"
                ></report-desks-levels-list>
            </ng-template>
        </report-page>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            h3 {
                font-weight: 500;
            }
        `,
    ],
    imports: [
        ReportPageComponent,
        TranslatePipe,
        ReportsOptionsComponent,
        ReportMetricGuideComponent,
        ReportUsageChartsComponent,
        ReportDesksLevelListComponent,
        ReportUsageListComponent,
    ],
})
export class ReportDesksComponent extends AsyncHandler {
    private _state = inject(ReportsStateService);
    private _route = inject(ActivatedRoute);

    private readonly _stats = this._state.stats;
    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = computed(
        () => this._stats().total_count || this._stats().count || 0,
    );
    public readonly active_count = computed(() => this._stats().count || 0);
    public readonly cancelled_count = computed(
        () => this._stats().cancelled_count || 0,
    );
    public readonly deleted_count = computed(
        () => this._stats().deleted_count || 0,
    );
    public readonly utilisation = computed(() =>
        ((this._stats().utilisation || 0) * 100).toFixed(1),
    );
    public readonly loading = this._state.loading;

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    constructor() {
        super();
        this._state.setOptions({ type: 'desks' });
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                this._state.setOptions(reportQueryOptions(params, true)),
            ),
        );
    }
}
