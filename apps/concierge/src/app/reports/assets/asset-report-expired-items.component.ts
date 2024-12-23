import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { take } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-expired-items',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER'
                            | translate
                    }}
                </h3>
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                    (click)="download()"
                    *ngIf="!print"
                >
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
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
                    <span class="opacity-30" *ngIf="!data">{{
                        'COMMON.DATE_EMPTY' | translate
                    }}</span>
                    {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class AssetReportExpiredItemsComponent {
    @Input() public print = false;
    public readonly expired_items = this._state.expired_items$;

    public readonly download = async () => {
        const data = await this.expired_items.pipe(take(1)).toPromise();
        downloadFile('report-assets-expired-items.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
