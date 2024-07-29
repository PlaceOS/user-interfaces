import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-daily-usage',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Daily Asset Usage</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="daily_products"
                [columns]="[
                    { key: 'name', name: 'Name' },
                    { key: 'date', name: 'Date', content: date_template },
                    { key: 'booking_count', name: 'Assets Booked' },
                    { key: 'asset_count', name: 'Assets' },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                empty_message="No events for selected period"
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class AssetReportDailyUsageComponent {
    @Input() public print: boolean = false;
    public readonly daily_products = this._state.stats$.pipe(
        map((days) => {
            let list = [];
            for (const date in days) {
                const { events, bookings, products } = days[date];
                const products_list = (products || []).map((p) => ({
                    date,
                    name: p.host,
                    booking_count: bookings.filter((b) =>
                        p.assets.find(
                            (_) =>
                                _.id === b.asset_id ||
                                b.asset_ids?.includes(_.id),
                        ),
                    ).length,
                    asset_count: p.assets.length,
                }));
                list = list.concat(
                    products_list.filter((p) => p.booking_count > 0),
                );
            }
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.daily_products.pipe(take(1)).toPromise();
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
