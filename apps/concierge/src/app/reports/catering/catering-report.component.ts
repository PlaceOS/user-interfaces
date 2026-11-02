import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportPageComponent } from '../report-page.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { ReportsStateService } from '../reports-state.service';
import { reportQueryOptions } from '../reports.utilities';
import { CateringReportItemsComponent } from './catering-report-items.component';
import { CateringReportOrdersComponent } from './catering-report-orders.component';
import { CateringReportOverallComponent } from './catering-report-overall.component';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Orders',
        description:
            'Catering orders delivered within the selected date range, excluding orders with cancelled status.',
    },
    {
        label: 'Unique items',
        description:
            'Number of distinct catering item IDs after combining matching items across all orders.',
    },
    {
        label: 'Items',
        description:
            'Sum of item counts across every non-cancelled order in the report.',
    },
    {
        label: 'Total cost',
        description:
            'Sum of total cost for all non-cancelled orders, displayed in the organisation currency.',
    },
    {
        label: 'Average order cost',
        description:
            'Total cost divided by the number of non-cancelled orders.',
    },
];

@Component({
    selector: 'catering-report',
    template: `
        <reports-options
            resource_type="catering"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="has_data()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <report-page
            header="APP.CONCIERGE.REPORTS_CATERING_HEADER"
            [loading]="!!loading()"
            [has_data]="has_data()"
        >
            <ng-template>
                <placeos-report-metric-guide
                    [absolute]="true"
                    [items]="metric_guide"
                />
                <catering-report-overall></catering-report-overall>
                <catering-report-orders
                    [print]="printing()"
                ></catering-report-orders>
                <catering-report-items
                    [print]="printing()"
                ></catering-report-items>
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
        CateringReportItemsComponent,
        CateringReportOrdersComponent,
        CateringReportOverallComponent,
    ],
})
export class CateringReportComponent extends AsyncHandler {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    private readonly _building = this._org.active_building;
    private readonly _stats = this._state.stats;

    public readonly total_count = computed(() => this._stats()?.count || 0);
    public readonly loading = this._state.loading;
    public readonly has_data = computed(() => !!this.total_count());

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public get using_bookings() {
        return this._settings.get('app.catering.use_bookings') == true;
    }

    constructor() {
        super();
        effect(() => {
            this._building();
            this._state.setOptions({
                type: this.using_bookings ? 'catering' : 'events',
            });
        });

        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                this._state.setOptions(reportQueryOptions(params)),
            ),
        );
    }
}
