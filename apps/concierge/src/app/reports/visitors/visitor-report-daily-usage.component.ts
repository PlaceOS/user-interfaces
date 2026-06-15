import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { map } from 'rxjs/operators';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { VisitorsReportService } from './visitors-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Unique visitors',
        description: 'Number of distinct visitor asset IDs booked on the day.',
    },
    {
        label: 'Hosts',
        description: 'Number of distinct booking user emails on the day.',
    },
    {
        label: 'Booking count',
        description: 'Total visitor bookings recorded for the day.',
    },
];

@Component({
    selector: 'visitor-report-daily-usage',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_VISITORS_DAILY' | translate }}
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
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_UNIQUE' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_HOSTS' | translate,
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
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
        MatRippleModule,
        ReportMetricGuideComponent,
    ],
})
export class VisitorReportDailyUsageComponent {
    private _state = inject(VisitorsReportService);

    public readonly print = input<boolean>(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    public readonly daily_stats = toSignal(
        this._state.daily_stats$.pipe(
            map((days) => {
                const list = [];
                for (const date in days) {
                    list.push({
                        date,
                        booking_count: unique(days[date].bookings, 'asset_id')
                            .length,
                        host_count: unique(days[date].bookings, 'user_email')
                            .length,
                        booked_count: days[date].bookings.length,
                    });
                }
                return list;
            }),
        ),
        { initialValue: [] },
    );

    public readonly download = async () => {
        const data = this.daily_stats();
        downloadFile('report-visitors-daily-usage.csv', jsonToCsv(data));
    };
}
