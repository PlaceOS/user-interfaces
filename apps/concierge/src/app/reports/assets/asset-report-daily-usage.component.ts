import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv, nextValueFrom } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { format } from 'date-fns';
import { map } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-daily-usage',
    template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </h3>
                @if (!print()) {
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
                [data]="daily_products"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
                    },
                    {
                        key: 'booked_count',
                        name: 'APP.CONCIERGE.REPORTS_TOTAL_BOOKED' | translate,
                    },
                    {
                        key: 'asset_count',
                        name:
                            'APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class AssetReportDailyUsageComponent {
    private _state = inject(AssetsReportService);

    public readonly print = input(false);
    public readonly daily_products = this._state.daily_stats$.pipe(
        map((days) => {
            let list = [];
            for (const date in days) {
                const { events, bookings, products } = days[date];
                const products_list = (products || []).map((p) => {
                    const product_bookings = bookings.filter((b) =>
                        p.assets.find(({ id }) => b.asset_ids.includes(id)),
                    );
                    return {
                        name: p.name,
                        date,
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
                });
                list = list.concat(
                    products_list.filter((p) => p.booking_count > 0),
                );
            }
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await nextValueFrom(this.daily_products);
        for (const bkn of data) {
            bkn.date = format(bkn.date, 'yyyy-MM-dd HH:mm');
        }
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };
}
