import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportPageComponent } from '../report-page.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { reportQueryOptions } from '../reports.utilities';
import { AssetReportDailyUsageComponent } from './asset-report-daily-usage.component';
import { AssetReportExpiredItemsComponent } from './asset-report-expired-items.component';
import { AssetReportOverallComponent } from './asset-report-overall.component';
import { AssetReportProductUsageComponent } from './asset-report-product-usage.component';
import { AssetReportUsersComponent } from './asset-report-users.component';
import { AssetsReportService } from './assets-report.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description: 'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total bookings',
        description:
            'All asset request bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active / Rejected / Cancelled',
        description:
            'Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled.',
    },
    {
        label: 'Average length',
        description:
            'Average duration of linked events for the active asset requests.',
    },
    {
        label: 'Total and unique booked items',
        description:
            'Total booked items sums asset IDs on active requests. Unique items counts product groups that contain at least one booked asset.',
    },
    {
        label: 'Expired items',
        description:
            'Purchase orders with expected service end dates before the selected report start date.',
    },
];

@Component({
    selector: '[report-assets]',
    template: `
        <reports-options
            (printing)="printing.set($event)"
            [loading]="loading()"
            [has_data]="has_data()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_ASSETS_HEADER"
            [loading]="loading()"
            [has_data]="has_data()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <asset-report-overall></asset-report-overall>
                <asset-report-daily-usage
                    [print]="printing()"
                ></asset-report-daily-usage>
                <asset-report-product-usage
                    [print]="printing()"
                ></asset-report-product-usage>
                <asset-report-users [print]="printing()"></asset-report-users>
                <asset-report-expired-items
                    [print]="printing()"
                ></asset-report-expired-items>
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
        AssetReportDailyUsageComponent,
        AssetReportExpiredItemsComponent,
        AssetReportOverallComponent,
        AssetReportProductUsageComponent,
        AssetReportUsersComponent,
    ],
})
export class AssetsReportComponent extends AsyncHandler implements OnInit {
    private _state = inject(AssetsReportService);
    private _route = inject(ActivatedRoute);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    private readonly _stats = this._state.stats;
    public readonly total_count = computed(
        () => this._stats()?.total_booked_items || 0,
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
