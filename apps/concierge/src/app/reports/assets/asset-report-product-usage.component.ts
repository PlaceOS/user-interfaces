import { Component, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv, nextValueFrom } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { map } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-product-usage',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_PRDOUCTS_HEADER'
                            | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                        aria-label="Download report"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="products"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'booked_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
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
        </div>
    `,
    styles: [``],
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class AssetReportProductUsageComponent {
    private _state = inject(AssetsReportService);

    public readonly print = input(false);
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
        const data = await nextValueFrom(this.products);
        downloadFile('report-assets-product-usage.csv', jsonToCsv(data));
    };
}
