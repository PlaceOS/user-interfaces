import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
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
} from './report-metric-guide.component';
import { ReportsStateService } from './reports-state.service';
import { formatReportPercentage } from './reports.utilities';

/** Column guide for the daily usage table. Only two descriptions differ. */
function tableMetricGuide(
    total_requests: string,
    utilisation: string,
): ReportMetricGuideItem[] {
    return [
        {
            label: 'Approved',
            description: 'Bookings on the day where the booking is approved.',
        },
        { label: 'Total requests', description: total_requests },
        {
            label: 'Rejected / Cancelled',
            description:
                'Displayed as count and percentage of total requests for that day.',
        },
        { label: 'Utilisation', description: utilisation },
    ];
}

/** Report text and export settings for each usage table type */
const USAGE_LISTS = {
    desks: {
        metric_guide: tableMetricGuide(
            'All desk bookings on the day, including active, rejected, and cancelled bookings.',
            'Active desk bookings divided by the greater of active bookings or available desk count for that day.',
        ),
        date_format: 'MMM d, y(EEE)',
        file_name: 'desks-usage.csv',
    },
    spaces: {
        metric_guide: tableMetricGuide(
            'All room bookings on the day, including active, rejected, and cancelled events.',
            'Booked room time divided by available room time for that day.',
        ),
        date_format: 'MMMM d, y(EEE)',
        file_name: 'spaces-usage.csv',
    },
};

/**
 * Daily usage table for the desks and spaces reports, with a CSV download.
 * Reads the day list from `ReportsStateService`. `type` selects the
 * column guide text and the export date format and file name.
 */
@Component({
    selector: 'report-usage-list',
    template: `
        <div class="w-full" [class.pb-2]="type() === 'desks'">
            <div
                class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
            >
                <div class="border-base-200 flex items-center border-b p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                            (click)="download()"
                            [attr.aria-label]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                    }
                    <placeos-report-metric-guide
                        title="Table column calculations"
                        [items]="config().metric_guide"
                        [inline]="true"
                    />
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="day_list()"
                    [columns]="[
                        {
                            key: 'date',
                            name: 'FORM.DATE' | translate,
                            content: date_template,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'cancelled',
                            name: 'Rejected',
                            content: booking_percent_template,
                        },
                        {
                            key: 'deleted',
                            name: 'Cancelled',
                            content: booking_percent_template,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_template,
                        },
                    ]"
                    [sortable]="true"
                    [page_size]="print() ? 0 : 10"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                ></simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
                <ng-template
                    #booking_percent_template
                    let-data="data"
                    let-row="row"
                >
                    <div class="p-4">
                        {{ formatPercent(data, row.count) }}
                    </div>
                </ng-template>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        SimpleTableComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ReportUsageListComponent {
    private _state = inject(ReportsStateService);

    public readonly type = input.required<keyof typeof USAGE_LISTS>();
    public readonly print = input(false);
    public readonly config = computed(() => USAGE_LISTS[this.type()]);

    public readonly day_list = this._state.day_list;

    public readonly download = async () => {
        const { date_format, file_name } = this.config();
        const data = this.day_list().map((d) => ({
            ...d,
            date: format(d.date, date_format),
            cancelled: formatReportPercentage(d.cancelled, d.count),
            deleted: formatReportPercentage(d.deleted, d.count),
        }));
        downloadFile(file_name, jsonToCsv(data));
    };

    public readonly formatPercent = formatReportPercentage;
}
