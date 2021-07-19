import { Component } from '@angular/core';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-overall',
    template: `
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div class="text-3xl">
                {{ (stats | async)?.order_count || '0' }}
            </div>
            <div class="">Orders</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div class="text-3xl">
                {{ (stats | async)?.unique_items || '0' }}
            </div>
            <div class="">Unique Items</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div class="text-3xl">{{ (stats | async)?.item_count || '0' }}</div>
            <div class="">Ordered Items</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div class="text-3xl">
                {{ (stats | async)?.total_cost / 100 || 0 | currency }}
            </div>
            <div class="">Total</div>
        </div>
        <div
            class="bg-white shadow rounded m-2 px-8 w-48 h-24 flex flex-col items-center justify-center"
        >
            <div class="text-3xl">
                {{ (stats | async)?.avg_cost / 100 || 0 | currency }}
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

    constructor(private _report: CateringReportStateService) {}
}
