import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { AssetsReportService } from './assets-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Bookings',
        description:
            'Linked events hosted by the user in the selected asset report period.',
    },
    {
        label: 'Assets booked',
        description:
            'Distinct asset IDs from active asset request bookings made for the user.',
    },
    {
        label: 'Asset types',
        description:
            "Distinct product names matched from the user's booked asset IDs.",
    },
];

@Component({
    selector: 'asset-report-users',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ASSETS_REQUESTEES' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="users()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'asset_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
                    },
                    {
                        key: 'asset_types',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_TYPES' | translate,
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
        ReportMetricGuideComponent,
    ],
})
export class AssetReportUsersComponent {
    private _state = inject(AssetsReportService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;
    private readonly _stats = toSignal(this._state.stats$, {
        initialValue: {
            events: [],
            bookings: [],
            all_bookings: [],
            products: [],
            booking_count: 0,
            active_count: 0,
            cancelled_count: 0,
            deleted_count: 0,
            inactive_count: 0,
            total_count: 0,
            event_count: 0,
            total_booked_items: 0,
            unique_items: 0,
            products_booked: [],
        },
    });
    public readonly users = computed(() => {
        const { events, bookings, products } = this._stats();
        const data = unique(events, 'host').map((user_event) => {
            const host_bookings = bookings.filter(
                (b) => b.booked_by_email === user_event.host,
            );
            const booked_assets = unique(
                host_bookings.map((_) => _.asset_ids).flat(),
            );
            const booked_products = unique(
                booked_assets.map(
                    (i) =>
                        products.find((p) => p.assets.find((_) => _.id === i))
                            ?.name,
                ),
            );
            return {
                name:
                    user_event.organiser?.name ||
                    user_event.organiser?.email ||
                    user_event.host,
                booking_count: events.filter(
                    (event) => event.host === user_event.host,
                ).length,
                asset_count: booked_assets.length,
                asset_types: booked_products.length || 0,
            };
        });
        return data;
    });

    public readonly download = async () => {
        downloadFile('report-assets-users.csv', jsonToCsv(this.users()));
    };
}
