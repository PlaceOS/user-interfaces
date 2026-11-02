import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportPageComponent } from '../report-page.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { reportQueryOptions } from '../reports.utilities';
import { VisitorReportDailyUsageComponent } from './visitor-report-daily-usage.component';
import { VisitorReportListComponent } from './visitor-report-list.component';
import { VisitorReportOverallComponent } from './visitor-report-overall.component';
import { VisitorsReportService } from './visitors-report.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description: 'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total visitors',
        description:
            'Visitor bookings returned for the selected dates and zones.',
    },
    {
        label: 'Average length',
        description:
            'Sum of visitor booking durations divided by the number of visitor bookings.',
    },
    {
        label: 'Daily unique visitors',
        description:
            'For each day, unique visitors are counted by asset ID and hosts are counted by user email.',
    },
    {
        label: 'Booking count',
        description:
            'Total visitor bookings recorded for each day in the report.',
    },
];

@Component({
    selector: '[visitors-report]',
    template: `
        <reports-options
            (printing)="printing.set($event)"
            [loading]="loading()"
            [has_data]="has_data()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_VISITORS_HEADER"
            [loading]="loading()"
            [has_data]="has_data()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <visitor-report-overall></visitor-report-overall>
                <visitor-report-daily-usage
                    [print]="printing()"
                ></visitor-report-daily-usage>
                <visitor-report-list></visitor-report-list>
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
        ReportsOptionsComponent,
        ReportMetricGuideComponent,
        VisitorReportOverallComponent,
        VisitorReportDailyUsageComponent,
        VisitorReportListComponent,
    ],
})
export class VisitorsReportComponent extends AsyncHandler implements OnInit {
    private _state = inject(VisitorsReportService);
    private _route = inject(ActivatedRoute);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = computed(
        () => this._state.bookings()?.length || 0,
    );
    public readonly loading = this._state.loading;
    public readonly has_data = computed(() => !!this.total_count());

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                this._state.setOptions(reportQueryOptions(params)),
            ),
        );
    }
}
