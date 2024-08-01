import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-expired-items',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">
                    Expired Assets Purchase Orders
                </h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="expired_items"
                [columns]="[
                    {
                        key: 'purchase_order_number',
                        name: 'PO Number',
                    },
                    {
                        key: 'invoice_number',
                        name: 'Invoice Number',
                    },
                    {
                        key: 'purchase_date',
                        name: 'Purchase Date',
                        content: date_template,
                    },
                    {
                        key: 'expected_service_start_date',
                        name: 'Service Start',
                        content: date_template,
                    },
                    {
                        key: 'expected_service_end_date',
                        name: 'Service End',
                        content: date_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                empty_message="No purchase orders expired for selected period"
            ></simple-table>
            <ng-template #date_template let-data="data">
                <div class="p-4">
                    <span class="opacity-30" *ngIf="!data">No Date</span>
                    {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class AssetReportExpiredItemsComponent {
    @Input() public print: boolean = false;
    public readonly expired_items = this._state.expired_items$;

    public readonly download = async () => {
        const data = await this.expired_items.pipe(take(1)).toPromise();
        downloadFile('report-assets-expired-items.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
