import { Component } from '@angular/core';
import { CateringOption } from '@placeos/catering';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-items',
    template: `
        <div
            class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-white shadow mx-auto my-2"
        >
            <div
                class="border-b border-gray-200 flex items-center justify-between px-4"
            >
                <h2 class="py-2 text-xl font-medium">Ordered Items</h2>
            </div>
            <custom-table
                class="w-full h-full"
                [dataSource]="items"
                [columns]="[
                    'name',
                    'options',
                    'quantity',
                    'unit_price',
                    'total_cost'
                ]"
                [display_column]="[
                    'Name',
                    'Options',
                    'Quantity',
                    'Unit Price',
                    'Total Cost'
                ]"
                [column_size]="['flex']"
                [template]="{
                    options: option_state,
                    unit_price: cost_state,
                    total_cost: cost_state
                }"
                [pagination]="true"
                empty="No orders for selected period"
            ></custom-table>
            <ng-template #option_state let-data="data">
                <span
                    class="text-xs px-2 py-1 rounded bg-gray-300"
                    *ngIf="data.length"
                    [matTooltip]="options(data)"
                >
                    {{ data.length }} option(s)
                </span>
            </ng-template>
            <ng-template #cost_state let-data="data">
                {{ (data || 0) / 100 | currency:code }}
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class CateringReportItemsComponent {
    public readonly items = this._report.catering_items;

    public get code() {
        return this._org.currency_code;
    }

    constructor(private _report: CateringReportStateService, private _org: OrganisationService) {}

    public options(opts: CateringOption[]) {
        return opts.map((_) => _.name).join('\n');
    }
}
