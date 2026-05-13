import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsStateService } from '../reports-state.service';
import { formatReportPercentage } from '../reports.utilities';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Approved',
        description: 'Bookings on the day where the booking is approved.',
    },
    {
        label: 'Total requests',
        description:
            'All room bookings on the day, including active, cancelled, and deleted events.',
    },
    {
        label: 'Cancelled / Deleted',
        description:
            'Displayed as count and percentage of total requests for that day.',
    },
    {
        label: 'Utilisation',
        description:
            'Active room bookings divided by the greater of active bookings or available room count for that day.',
    },
];

@Component({
    selector: 'report-spaces-overall-list',
    template: `
        <div class="w-full">
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
                            name: 'Cancelled',
                            content: booking_percent_template,
                        },
                        {
                            key: 'deleted',
                            name: 'Deleted',
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
export class ReportSpacesOverallListComponent {
    private _state = inject(ReportsStateService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    public readonly day_list = toSignal(this._state.day_list, {
        initialValue: [],
    });

    public readonly download = async () => {
        const data = this.day_list().map((d) => ({
            ...d,
            date: format(d.date, 'MMMM d, y(EEE)'),
            cancelled: formatReportPercentage(d.cancelled, d.count),
            deleted: formatReportPercentage(d.deleted, d.count),
        }));
        downloadFile('spaces-usage.csv', jsonToCsv(data));
    };

    public readonly formatPercent = formatReportPercentage;
}
