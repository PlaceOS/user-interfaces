import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'catering-report-orders',
    template: `
        <div
            class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-base-100 shadow mx-auto my-2"
        >
            <div
                class="border-b border-base-200 flex items-center justify-between px-4"
            >
                <h2 class="py-2 text-xl font-medium">Orders</h2>
                <button
                    matRipple-icon
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
                {{ data | date }} at {{ data | date: time_format }}
            </ng-template>
            <ng-template #cost_state let-data="data">
                {{ data / 100 | currency: code }}
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

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _report: CateringReportStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public readonly download = () => this._report.downloadOrders();
}
