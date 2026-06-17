import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { AssetsReportService } from './assets-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Purchase / invoice numbers',
        description:
            'Identifiers from the asset purchase order returned by the assets service.',
    },
    {
        label: 'Purchase date',
        description: 'Purchase order purchase date, shown when available.',
    },
    {
        label: 'Service start / end',
        description:
            'Expected service dates from the purchase order. Rows are included when the expected service end date is before the report start date.',
    },
];

@Component({
    selector: 'asset-report-expired-items',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER'
                            | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="expired_items()"
                [columns]="[
                    {
                        key: 'purchase_order_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate,
                    },
                    {
                        key: 'invoice_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE' | translate,
                    },
                    {
                        key: 'purchase_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_start_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_START' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_end_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate,
                        content: date_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-data="data">
                <div class="p-4">
                    @if (!data) {
                        <span class="opacity-30">{{
                            'COMMON.DATE_EMPTY' | translate
                        }}</span>
                    }
                    {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class AssetReportExpiredItemsComponent {
    private _state = inject(AssetsReportService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;
    public readonly expired_items = this._state.expired_items;

    public readonly download = async () => {
        downloadFile(
            'report-assets-expired-items.csv',
            jsonToCsv(this.expired_items()),
        );
    };
}
