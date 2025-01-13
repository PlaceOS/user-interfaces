import { Component, Input } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CateringReportStateService } from './catering-report-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'catering-report-orders',
    template: `
        <div
            class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-base-100  border border-base-200 mx-auto my-2"
        >
            <div
                class="border-b border-base-200 flex items-center justify-between px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER'
                            | translate
                    }}
                </h2>
                <button
                    matRipple-icon
                    (click)="download()"
                    class="print:hidden"
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                >
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="orders"
                [columns]="[
                    {
                        key: 'deliver_at',
                        name: 'APP.CONCIERGE.ASSETS_REQUESTS_TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'item_count',
                        name:
                            'APP.CONCIERGE.REPORTS_CATERING_ITEMS' | translate,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
            ></simple-table>

            <ng-template #date_template let-data="data">
                <div class="p-4">
                    {{ data | date }} at {{ data | date: time_format }}
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">
                    {{ data / 100 | currency: code }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    standalone: false
})
export class CateringReportOrdersComponent {
    @Input() public print = false;
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
        private _settings: SettingsService,
    ) {}

    public readonly download = () => this._report.downloadOrders();
}
