import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-overall',
    template: `
        <div item class="flex flex-col flex-1 items-center justify-center">
            <div count class="text-3xl">
                {{ (stats | async)?.order_count || '0' }}
            </div>
            <div class="print:text-sm">Orders</div>
        </div>
        <div item class="flex flex-col flex-1 items-center justify-center">
            <div unique class="text-3xl">
                {{ (stats | async)?.unique_items || '0' }}
            </div>
            <div class="print:text-sm">Unique Items</div>
        </div>
        <div item class="flex flex-col flex-1 items-center justify-center">
            <div items class="text-3xl">
                {{ (stats | async)?.item_count || '0' }}
            </div>
            <div class="print:text-sm">Ordered Items</div>
        </div>
        <div item class="flex flex-col flex-1 items-center justify-center">
            <div total class="text-3xl">
                {{ (stats | async)?.total_cost / 100 || 0 | currency: code }}
            </div>
            <div class="print:text-sm">Total</div>
        </div>
        <div item class="flex flex-col flex-1 items-center justify-center">
            <div average class="text-3xl">
                {{ (stats | async)?.avg_cost / 100 || 0 | currency: code }}
            </div>
            <div class="print:text-sm">Order Average</div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                max-width: 64rem;
                margin: 0 auto;
            }

            [item] {
                border: 1px solid var(--b2);
                border-radius: 0.5rem;
                padding: 1rem;
                margin: 0.5rem;
                height: 6rem;
                width: 12rem;
                min-width: 7rem;
            }
        `,
    ],
})
export class CateringReportOverallComponent {
    public readonly stats = this._report.stats;

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _report: CateringReportStateService,
        private _org: OrganisationService
    ) {}
}
