import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
} from '@angular/core';
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
import { formatReportPercentage } from '../reports.utilities';
import { ParkingReportService } from './parking-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Unique',
        description: 'Number of distinct parking asset IDs booked on the day.',
    },
    {
        label: 'Host count',
        description: 'Number of distinct booking user emails on the day.',
    },
    {
        label: 'Active',
        description:
            'Bookings on the day that are not deleted and not cancelled.',
    },
    {
        label: 'Rejected / Cancelled',
        description:
            'Displayed as count and percentage of total bookings for that day.',
    },
    {
        label: 'Booking count',
        description: 'Total parking bookings recorded for the day.',
    },
];

@Component({
    selector: 'parking-report-daily-usage',
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
                [data]="daily_stats()"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'APP.CONCIERGE.REPORTS_UNIQUE_HEADER' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER'
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
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
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
                    {{ formatPercent(data, row.booked_count) }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TranslatePipe,
        SimpleTableComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ParkingReportDailyUsageComponent {
    private _state = inject(ParkingReportService);
    private readonly _daily_stats = this._state.daily_stats;

    public readonly print = input<boolean>(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    public readonly daily_stats = computed(() => {
        const days = this._daily_stats();
        const list = [];
        for (const date in days) {
            list.push({
                date,
                booking_count: unique(days[date].bookings, 'asset_id').length,
                host_count: unique(days[date].bookings, 'user_email').length,
                active_count: days[date].bookings.filter(
                    (booking) =>
                        !booking.deleted && booking.status !== 'cancelled',
                ).length,
                cancelled_count: days[date].bookings.filter(
                    (booking) =>
                        !booking.deleted && booking.status === 'cancelled',
                ).length,
                deleted_count: days[date].bookings.filter(
                    (booking) => booking.deleted,
                ).length,
                booked_count: days[date].bookings.length,
            });
        }
        list.sort((a, b) => a.date.localeCompare(b.date));
        return list;
    });

    public readonly download = async () => {
        const data = this.daily_stats().map((booking) => ({
            ...booking,
            cancelled_count: formatReportPercentage(
                booking.cancelled_count,
                booking.booked_count,
            ),
            deleted_count: formatReportPercentage(
                booking.deleted_count,
                booking.booked_count,
            ),
        }));
        downloadFile('report-parking-daily-usage.csv', jsonToCsv(data));
    };

    public readonly formatPercent = formatReportPercentage;
}
