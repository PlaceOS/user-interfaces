import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-orders',
    template: `
        <div
            class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-white shadow mx-auto my-2"
        >
            <div
                class="border-b border-gray-200 flex items-center justify-between px-4"
            >
                <h2 class="py-2 text-xl font-medium">Orders</h2>
                <button
                    mat-button-icon
                    (click)="download()"
                    matTooltip="Download list"
                >
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                class="w-full h-full"
                [dataSource]="orders"
                [columns]="['deliver_at', 'item_count', 'total_cost']"
                [display_column]="['Date', 'Items', 'Total Cost']"
                [column_size]="['flex']"
                [template]="{
                    deliver_at: date_state,
                    total_cost: cost_state
                }"
                [pagination]="true"
                empty="No orders for selected period"
            ></custom-table>
            <ng-template #date_state let-data="data">
                {{ data | date }} at {{ data | date: 'shortTime' }}
            </ng-template>
            <ng-template #cost_state let-data="data">
                {{ data / 100 | currency:code }}
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class CateringReportOrdersComponent {
    public readonly orders = this._report.catering_orders;

    public get code() {
        return this._org.currency_code;
    }

    constructor(private _report: CateringReportStateService, private _org: OrganisationService) {}

    public readonly download = () => this._report.downloadOrders();
}
