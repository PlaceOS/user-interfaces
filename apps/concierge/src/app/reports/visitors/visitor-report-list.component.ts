import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    downloadFile,
    i18n,
    jsonToCsv,
    SettingsService,
} from '@placeos/common';
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
import { VisitorsReportService } from './visitors-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Name',
        description:
            'Uses asset name, extension asset name, description, then asset ID as fallback.',
    },
    {
        label: 'Host',
        description: 'Booking user name, falling back to user email.',
    },
    {
        label: 'Checked in',
        description: 'True when the visitor booking checked-in flag is set.',
    },
    {
        label: 'Self registered',
        description:
            'True when the visitor booking extension data marks the visitor as self registered.',
    },
    {
        label: 'International',
        description:
            'Shown only when international visitors are enabled, using the booking extension international flag.',
    },
];

@Component({
    selector: 'visitor-report-list',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER' | translate
                    }}
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
                [data]="visitor_bookings()"
                [columns]="[
                    { key: 'visitor_name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    { key: 'host', name: 'FORM.HOST' | translate },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                    {
                        key: 'self_registered',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_SELF_REGISTERED'
                            | translate,
                    },
                    {
                        key: 'international',
                        name: 'International',
                        show: allow_international,
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
        SimpleTableComponent,
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class VisitorReportListComponent {
    private _state = inject(VisitorsReportService);
    private _settings = inject(SettingsService);

    public readonly print = input(false);
    public get allow_international() {
        return !!this._settings.get('app.visitors.allow_international');
    }

    public get table_metric_guide() {
        return this.allow_international
            ? TABLE_METRIC_GUIDE
            : TABLE_METRIC_GUIDE.filter(
                  (item) => item.label !== 'International',
              );
    }

    public readonly visitor_bookings = computed(() => {
        const bookings = this._state.bookings();
        const list = [];
        for (const booking of bookings) {
            list.push({
                visitor_name:
                    booking.asset_name ||
                    booking.extension_data?.asset_name ||
                    booking.description ||
                    booking.asset_id,
                visitor_email:
                    booking.asset_id ||
                    booking.extension_data?.visitor_email ||
                    '',
                date: booking.date,
                host: booking.user_name || booking.user_email,
                host_email: booking.user_email || booking.booked_by_email,

                checked_in: i18n(
                    booking.checked_in ? 'COMMON.YES' : 'COMMON.NO',
                ),
                self_registered: i18n(
                    booking.extension_data?.self_registered
                        ? 'COMMON.YES'
                        : 'COMMON.NO',
                ),
                international: i18n(
                    booking.extension_data?.international
                        ? 'COMMON.YES'
                        : 'COMMON.NO',
                ),
            });
        }
        return list;
    });

    public readonly download = async () => {
        const data = this.visitor_bookings().map((item) => ({ ...item }));
        for (const bkn of data) {
            bkn.date = format(bkn.date, 'yyyy-MM-dd HH:mm');
        }
        downloadFile('report-visitor-daily-usage.csv', jsonToCsv(data));
    };
}
