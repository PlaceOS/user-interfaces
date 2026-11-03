import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
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
import { ReportSpacesOverallComponent } from './report-spaces-overall.component';
import { ReportSpacesSpaceListingComponent } from './report-spaces-space-listing.component';
import { ReportSpacesUserListingComponent } from './report-spaces-user-listing.component';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description: 'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total bookings',
        description:
            'All room bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active / Rejected / Cancelled',
        description:
            'Active excludes cancelled and rejected events. Rejected uses events with cancelled state/type or rejected status. Cancelled uses events flagged as cancelled.',
    },
    {
        label: 'Average length',
        description:
            'Sum of active booking durations divided by the number of active bookings.',
    },
    {
        label: 'Attendance and no-shows',
        description:
            'Attendance uses the maximum recorded people count on each booking. No-shows are bookings with no recorded people count.',
    },
];

@Component({
    selector: '[report-spaces]',
    template: `
        <reports-options
            resource_type="events"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="has_data()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_ROOMS_HEADER"
            [loading]="!!loading()"
            [has_data]="has_data()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <report-spaces-overall></report-spaces-overall>
                <report-usage-charts [print]="printing()" />
                <report-usage-list type="spaces" [print]="printing()" />
                <report-spaces-space-listing
                    [print]="printing()"
                ></report-spaces-space-listing>
                <report-spaces-user-listing
                    [print]="printing()"
                ></report-spaces-user-listing>
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
        ReportUsageChartsComponent,
        ReportSpacesOverallComponent,
        ReportUsageListComponent,
        ReportSpacesSpaceListingComponent,
        ReportSpacesUserListingComponent,
    ],
})
export class ReportSpacesComponent extends AsyncHandler implements OnInit {
    private _state = inject(ReportsStateService);
    private _route = inject(ActivatedRoute);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = computed(() => {
        const i = this._state.stats();
        return i.total_count || i.count || 0;
    });
    public readonly loading = this._state.loading;
    public readonly has_data = computed(() => !!this.total_count());

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public ngOnInit() {
        this._state.setOptions({ type: 'events' });
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                this._state.setOptions(reportQueryOptions(params)),
            ),
        );
    }
}
