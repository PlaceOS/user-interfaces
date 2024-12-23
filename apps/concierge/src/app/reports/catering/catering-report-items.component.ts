import { Component, Input } from '@angular/core';
import { CateringOption } from '@placeos/catering';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-items',
    template: `
        <div
            class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-base-100 border border-base-200 mx-auto my-2"
        >
            <div
                class="border-b border-base-200 flex items-center justify-between px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER'
                            | translate
                    }}
                </h2>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="items"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'options',
                        name:
                            'APP.CONCIERGE.REPORTS_CATERING_OPTIONS'
                            | translate,
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
                [page_size]="print ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #option_template let-data="data">
                <div class="p-4">
                    <span
                        class="text-xs px-2 py-1 rounded bg-base-200"
                        *ngIf="data.length"
                        [matTooltip]="options(data)"
                    >
                        {{
                            'APP.CONCIERGE.REPORTS_CATERING_OPTIONS'
                                | translate: { count: data?.length || 0 }
                        }}
                    </span>
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">{{ (data || 0) / 100 | currency: code }}</div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class CateringReportItemsComponent {
    @Input() public print = false;
    public readonly items = this._report.catering_items;

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _report: CateringReportStateService,
        private _org: OrganisationService,
    ) {}

    public options(opts: CateringOption[]) {
        return opts.map((_) => _.name).join('\n');
    }
}
