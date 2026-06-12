import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { CateringReportStateService } from './catering-report-state.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Time',
        description:
            'Order delivery time from the catering order deliver-at timestamp.',
    },
    {
        label: 'Items',
        description: 'Item count recorded on the catering order.',
    },
    {
        label: 'Total cost',
        description:
            'Order total cost converted from cents and displayed in the organisation currency.',
    },
];

@Component({
    selector: 'catering-report-orders',
    template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] overflow-hidden rounded-sm border"
        >
            <div
                class="border-base-200 flex items-center justify-between border-b px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER'
                            | translate
                    }}
                </h2>
                <button
                    icon
                    default
                    matRipple
                    (click)="download()"
                    class="print:hidden"
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                >
                    <icon>download</icon>
                </button>
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="orders()"
                [columns]="[
                    {
                        key: 'deliver_at',
                        name: 'APP.CONCIERGE.ASSETS_REQUESTS_TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'item_count',
                        name:
                            'APP.CONCIERGE.REPORTS_CATERING_ITEMS' | translate,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
            ></simple-table>

            <ng-template #date_template let-data="data">
                <div class="p-4">
                    {{ data | date }} at {{ data | date: time_format }}
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">
                    {{ data / 100 | currency: code }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        SimpleTableComponent,
        MatTooltipModule,
        MatRippleModule,
        IconComponent,
        ReportMetricGuideComponent,
    ],
})
export class CateringReportOrdersComponent {
    private _report = inject(CateringReportStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;
    public readonly orders = toSignal(this._report.catering_orders, {
        initialValue: [],
    });

    public get code() {
        return this._org.currency_code;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public readonly download = () => this._report.downloadOrders();
}
