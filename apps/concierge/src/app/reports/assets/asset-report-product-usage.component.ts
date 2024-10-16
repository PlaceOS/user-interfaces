import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-product-usage',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Asset Products Usage</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="products"
                [columns]="[
                    { key: 'name', name: 'Name' },
                    { key: 'booking_count', name: 'Bookings with Product' },
                    { key: 'booked_count', name: 'Number Booked' },
                    { key: 'asset_count', name: 'Assets Available' },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                empty_message="No events for selected period"
            ></simple-table>
        </div>
    `,
    styles: [``],
})
export class AssetReportProductUsageComponent {
    @Input() public print: boolean = false;
    public readonly products = this._state.stats$.pipe(
        map(({ events, bookings, products }) =>
            products
                .map((p) => {
                    const product_bookings = bookings.filter((b) =>
                        p.assets.find(({ id }) => b.asset_ids.includes(id)),
                    );
                    return {
                        name: p.name,
                        booking_count: product_bookings.length,
                        booked_count: product_bookings.reduce(
                            (acc, b) =>
                                acc +
                                b.asset_ids.filter((asset_id) =>
                                    p.assets.find(({ id }) => asset_id === id),
                                ).length,
                            0,
                        ),
                        asset_count: p.assets.length,
                    };
                })
                .filter((p) => p.booking_count > 0),
        ),
    );

    public readonly download = async () => {
        const data = await this.products.pipe(take(1)).toPromise();
        downloadFile('report-assets-product-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
