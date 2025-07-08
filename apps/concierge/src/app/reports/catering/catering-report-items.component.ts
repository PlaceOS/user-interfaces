import { Component, inject, input } from '@angular/core';
import { CateringOption } from '@placeos/catering';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-items',
    template: `
        <div
            class="mx-auto my-2 w-[64rem] max-w-[calc(100%-2rem)] overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <div
                class="flex items-center justify-between border-b border-base-200 px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER'
                            | translate
                    }}
                </h2>
            </div>
            <simple-table
                class="block w-full text-sm"
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
                            class="rounded bg-base-200 px-2 py-1 text-xs"
                            [matTooltip]="options(data)"
                        >
                            {{
                                'APP.CONCIERGE.REPORTS_CATERING_OPTIONS'
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
    standalone: false,
})
export class CateringReportItemsComponent {
    private _report = inject(CateringReportStateService);
    private _org = inject(OrganisationService);

    public readonly print = input(false);
    public readonly items = this._report.catering_items;

    public get code() {
        return this._org.currency_code;
    }

    public options(opts: CateringOption[]) {
        return opts.map((_) => _.name).join('\n');
    }
}
