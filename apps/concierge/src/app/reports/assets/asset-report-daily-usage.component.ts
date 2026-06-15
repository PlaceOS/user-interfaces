import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { format } from 'date-fns';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { formatReportPercentage } from '../reports.utilities';
import { AssetsReportService } from './assets-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Booking count',
        description:
            'All asset request bookings for the product on the day, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active',
        description:
            'Active asset request bookings for the product on the day.',
    },
    {
        label: 'Rejected / Cancelled',
        description:
            'Displayed as count and percentage of total product bookings for that day.',
    },
    {
        label: 'Total booked',
        description:
            'Number of booked asset IDs from active requests that belong to the product.',
    },
    {
        label: 'Assets available',
        description: 'Total assets configured for the product.',
    },
];

@Component({
    selector: 'asset-report-daily-usage',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
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
                [data]="daily_products()"
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
                        key: 'active_count',
                        name: 'Active',
                    },
                    {
                        key: 'cancelled_count',
                        name: 'Rejected',
                        content: booking_percent_template,
                    },
                    {
                        key: 'deleted_count',
                        name: 'Cancelled',
                        content: booking_percent_template,
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
            <ng-template
                #booking_percent_template
                let-data="data"
                let-row="row"
            >
                <div class="p-4">
                    {{ formatPercent(data, row.booking_count) }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class AssetReportDailyUsageComponent {
    private _state = inject(AssetsReportService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;
    private readonly _daily_stats = toSignal(this._state.daily_stats$, {
        initialValue: {},
    });
    public readonly daily_products = computed(() => {
        const days = this._daily_stats();
        let list = [];
        for (const date in days) {
            const { all_bookings, bookings, products } = days[date];
            const products_list = (products || []).map((p) => {
                const all_product_bookings = (all_bookings || bookings).filter(
                    (b) => p.assets.find(({ id }) => b.asset_ids.includes(id)),
                );
                const product_bookings = bookings.filter((b) =>
                    p.assets.find(({ id }) => b.asset_ids.includes(id)),
                );
                return {
                    name: p.name,
                    date,
                    booking_count: all_product_bookings.length,
                    active_count: product_bookings.length,
                    cancelled_count: all_product_bookings.filter(
                        (booking) =>
                            !booking.deleted && booking.status === 'cancelled',
                    ).length,
                    deleted_count: all_product_bookings.filter(
                        (booking) => booking.deleted,
                    ).length,
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
    });

    public readonly download = async () => {
        const data = this.daily_products().map((booking) => ({
            ...booking,
            date: format(booking.date, 'yyyy-MM-dd HH:mm'),
            cancelled_count: formatReportPercentage(
                booking.cancelled_count,
                booking.booking_count,
            ),
            deleted_count: formatReportPercentage(
                booking.deleted_count,
                booking.booking_count,
            ),
        }));
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };

    public readonly formatPercent = formatReportPercentage;
}
