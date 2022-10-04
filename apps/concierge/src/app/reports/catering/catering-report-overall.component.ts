import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-overall',
    template: `
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div count class="text-3xl">
                {{ (stats | async)?.order_count || '0' }}
            </div>
            <div class="">Orders</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div unique class="text-3xl">
                {{ (stats | async)?.unique_items || '0' }}
            </div>
            <div class="">Unique Items</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div items class="text-3xl">{{ (stats | async)?.item_count || '0' }}</div>
            <div class="">Ordered Items</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div total class="text-3xl">
                {{ (stats | async)?.total_cost / 100 || 0 | currency:code }}
            </div>
            <div class="">Total</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div average class="text-3xl">
                {{ (stats | async)?.avg_cost / 100 || 0 | currency:code }}
            </div>
            <div class="">Order Average</div>
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
            }
        `,
    ],
})
export class CateringReportOverallComponent {
    public readonly stats = this._report.stats;

    public get code() {
        return this._org.currency_code;
    }

    constructor(private _report: CateringReportStateService, private _org: OrganisationService) {}
}
