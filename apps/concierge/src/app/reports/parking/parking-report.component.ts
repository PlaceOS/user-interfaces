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
import { ParkingReportChartsComponent } from './parking-report-charts.component';
import { ParkingReportDailyUsageComponent } from './parking-report-daily-usage.component';
import { ParkingReportListComponent } from './parking-report-list.component';
import { ParkingReportNoShowsComponent } from './parking-report-no-shows.component';
import { ParkingReportOverallComponent } from './parking-report-overall.component';
import { ParkingReportService } from './parking-report.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description: 'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total reservations',
        description:
            'All parking bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active / Rejected / Cancelled',
        description:
            'Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled.',
    },
    {
        label: 'Average length',
        description:
            'Sum of active reservation durations divided by the number of active reservations.',
    },
    {
        label: 'No shows',
        description:
            'Active reservations that ended without a check-in; percentage is of active reservations.',
    },
    {
        label: 'Daily usage',
        description:
            'Counts unique parking spaces, unique hosts, active reservations, cancellations, deletions, no shows, and total reservations for each day.',
    },
];

@Component({
    selector: '[parking-report]',
    template: `
        <reports-options
            resource_type="parking"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_PARKING_HEADER"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <parking-report-overall></parking-report-overall>
                <parking-report-charts></parking-report-charts>
                <parking-report-list [print]="printing()"></parking-report-list>
                <parking-report-no-shows
                    [print]="printing()"
                ></parking-report-no-shows>
                <parking-report-daily-usage
                    [print]="printing()"
                ></parking-report-daily-usage>
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
        ParkingReportOverallComponent,
        ParkingReportDailyUsageComponent,
        ParkingReportChartsComponent,
        ParkingReportListComponent,
        ParkingReportNoShowsComponent,
        ReportsOptionsComponent,
    ],
})
export class ParkingReportComponent extends AsyncHandler {
    private _state = inject(ParkingReportService);
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
