import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportPageComponent } from '../report-page.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { reportQueryOptions } from '../reports.utilities';
import { LockersReportChartsComponent } from './lockers-report-charts.component';
import { LockersReportDailyUsageComponent } from './lockers-report-daily-usage.component';
import { LockersReportListComponent } from './lockers-report-list.component';
import { LockersReportOverallComponent } from './lockers-report-overall.component';
import { LockersReportService } from './lockers-report.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description: 'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total bookings',
        description:
            'All locker bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active / Rejected / Cancelled',
        description:
            'Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled.',
    },
    {
        label: 'Average length',
        description:
            'Sum of active booking durations divided by the number of active bookings.',
    },
    {
        label: 'Daily usage',
        description:
            'Counts unique lockers, unique users, active bookings, cancellations, deletions, and total bookings for each day.',
    },
];

@Component({
    selector: '[lockers-report]',
    template: `
        <reports-options
            resource_type="lockers"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_LOCKERS_HEADER"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <lockers-report-overall></lockers-report-overall>
                <lockers-report-charts></lockers-report-charts>
                <lockers-report-daily-usage
                    [print]="printing()"
                ></lockers-report-daily-usage>
                <lockers-report-list [print]="printing()"></lockers-report-list>
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
        `,
    ],
    imports: [
        ReportPageComponent,
        ReportMetricGuideComponent,
        LockersReportChartsComponent,
        LockersReportOverallComponent,
        LockersReportDailyUsageComponent,
        LockersReportListComponent,
        ReportsOptionsComponent,
    ],
})
export class LockersReportComponent extends AsyncHandler {
    private _state = inject(LockersReportService);
    private _route = inject(ActivatedRoute);
    private readonly _bookings = this._state.bookings;
    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = computed(() => this._bookings().length || 0);
    public readonly loading = this._state.loading;

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    constructor() {
        super();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                this._state.setOptions(reportQueryOptions(params)),
            ),
        );
    }
}
