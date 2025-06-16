import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv, nextValueFrom } from '@placeos/common';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-expired-items',
    template: `
        <div
            class="m-4 overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER'
                            | translate
                    }}
                </h3>
                @if (!print) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="expired_items"
                [columns]="[
                    {
                        key: 'purchase_order_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate,
                    },
                    {
                        key: 'invoice_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE' | translate,
                    },
                    {
                        key: 'purchase_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_start_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_START' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_end_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate,
                        content: date_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-data="data">
                <div class="p-4">
                    @if (!data) {
                        <span class="opacity-30">{{
                            'COMMON.DATE_EMPTY' | translate
                        }}</span>
                    }
                    {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AssetReportExpiredItemsComponent {
    @Input() public print = false;
    public readonly expired_items = this._state.expired_items$;

    public readonly download = async () => {
        const data = await nextValueFrom(this.expired_items);
        downloadFile('report-assets-expired-items.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
