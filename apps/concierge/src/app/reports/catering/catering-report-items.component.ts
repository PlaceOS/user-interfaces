import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CateringOption, OrganisationService } from '@placeos/common';
import { SimpleTableComponent, TranslatePipe } from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { CateringReportStateService } from './catering-report-state.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Options',
        description:
            'Number of configured options on the catering item; hover shows option names.',
    },
    {
        label: 'Quantity',
        description:
            'Combined item quantity across all non-cancelled catering orders.',
    },
    {
        label: 'Item price',
        description:
            'Unit price converted from cents and displayed in the organisation currency.',
    },
    {
        label: 'Total cost',
        description:
            'Item total cost converted from cents and displayed in the organisation currency.',
    },
];

@Component({
    selector: 'catering-report-items',
    template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] overflow-hidden rounded-sm border"
        >
            <div
                class="border-base-200 flex items-center justify-between border-b px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER'
                            | translate
                    }}
                </h2>
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="items()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'options',
                        name: 'COMMON.OPTIONS' | translate,
                        content: option_template,
                    },
                    {
                        key: 'caterer',
                        name: 'CATERING.CATERER' | translate,
                    },
                    {
                        key: 'quantity',
                        name: 'CATERING.QUANTITY' | translate,
                    },
                    {
                        key: 'unit_price',
                        name: 'COMMON.ITEM_PRICE' | translate,
                        content: cost_template,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #option_template let-data="data">
                <div class="p-4">
                    @if (data.length) {
                        <span
                            class="bg-base-200 rounded-sm px-2 py-1 text-xs"
                            [matTooltip]="options(data)"
                        >
                            {{
                                'COMMON.OPTIONS'
                                    | translate: { count: data?.length || 0 }
                            }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">{{ (data || 0) / 100 | currency: code }}</div>
            </ng-template>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class CateringReportItemsComponent {
    private _report = inject(CateringReportStateService);
    private _org = inject(OrganisationService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;
    public readonly items = this._report.catering_items;

    public get code() {
        return this._org.currency_code;
    }

    public options(opts: CateringOption[]) {
        return opts.map((_) => _.name).join('\n');
    }
}
