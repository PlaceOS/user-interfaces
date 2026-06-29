import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, i18n, jsonToCsv } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { format } from 'date-fns';
import { DurationPipe } from 'libs/components/src/lib/duration.pipe';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { reportBookingStatus } from '../reports.utilities';
import { ParkingReportService } from './parking-report.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Parking space',
        description:
            'Uses asset name, extension asset name, description, then asset ID as fallback.',
    },
    {
        label: 'Duration',
        description:
            'Shows all day when the booking is marked all day or duration is greater than 12 hours; otherwise formats booking minutes.',
    },
    {
        label: 'Reserved for',
        description: 'Booking user name, falling back to user email.',
    },
    {
        label: 'Checked in',
        description: 'True when the booking checked-in flag is set.',
    },
    {
        label: 'Checked-in at',
        description:
            'Time the booking was checked in; empty when no check-in has been recorded.',
    },
    {
        label: 'Status',
        description:
            'Cancelled bookings show Cancelled; rejected bookings show Rejected; otherwise the booking status is shown, defaulting to tentative.',
    },
];

@Component({
    selector: 'parking-report-list',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_PARKING_UTIL_HEADER' | translate
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
                [data]="parking_bookings()"
                [columns]="[
                    {
                        key: 'parking_name',
                        name: 'RESOURCE.PARKING_SPACE' | translate,
                    },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'duration',
                        name: 'FORM.DURATION' | translate,
                        content: duration_template,
                    },
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                    {
                        key: 'checked_in_at',
                        name: 'COMMON.CHECKED_IN_AT' | translate,
                        content: checked_in_at_template,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
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
            <ng-template #checked_in_at_template let-row="row">
                <div class="p-4">
                    @if (row.checked_in_at) {
                        {{ row.checked_in_at * 1000 | date: 'short' }}
                    } @else {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{
                        row.duration > 12 * 60 || row.all_day
                            ? ('COMMON.ALL_DAY' | translate)
                            : (row.duration | duration: true)
                    }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        DurationPipe,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ParkingReportListComponent {
    private _state = inject(ParkingReportService);
    private readonly _bookings = this._state.bookings;

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    public readonly parking_bookings = computed(() => {
        const list = [];
        for (const booking of this._bookings()) {
            list.push({
                parking_name:
                    booking.asset_name ||
                    booking.extension_data?.asset_name ||
                    booking.description ||
                    booking.asset_id,
                date: booking.date,
                duration: booking.duration,
                all_day: booking.all_day,
                host: booking.user_name || booking.user_email,
                checked_in: i18n(
                    booking.checked_in ? 'COMMON.TRUE' : 'COMMON.FALSE',
                ),
                checked_in_at: booking.checked_in_at
                    ? booking.checked_in_at * 1000
                    : 0,
                status: reportBookingStatus(booking),
                self_registered: i18n(
                    booking.extension_data?.self_registered
                        ? 'COMMON.TRUE'
                        : 'COMMON.FALSE',
                ),
            });
        }
        list.sort((a, b) => a.date - b.date);
        return list;
    });

    public readonly download = async () => {
        const data = this.parking_bookings();
        for (const bkn of data) {
            bkn.date = format(bkn.date, 'yyyy-MM-dd HH:mm');
            bkn.checked_in_at = bkn.checked_in_at
                ? format(bkn.checked_in_at, 'yyyy-MM-dd HH:mm')
                : '';
        }
        downloadFile('report-parking-daily-usage.csv', jsonToCsv(data));
    };
}
