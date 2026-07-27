import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ParkingSpacePipe } from '@placeos/assets';
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
        label: 'Bay number',
        description:
            'Resolves the booking asset ID to the parking space identifier.',
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
            class="border-base-300 bg-base-100 m-4 overflow-hidden rounded-sm border shadow"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">Parking Bookings</h3>
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
                class="-mx-px block w-[calc(100%+2px)] text-sm"
                [data]="parking_bookings()"
                [columns]="[
                    {
                        key: 'asset_id',
                        name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                        content: bay_template,
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
                        key: 'plate_number',
                        name: 'BOOKINGS.PARKING_PLATE_NUMBER' | translate,
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
            <ng-template #bay_template let-id="data">
                <div class="p-4">
                    @if (id) {
                        {{ (id | parkingSpace | async)?.identifier || id }}
                    } @else {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
            <ng-template #checked_in_at_template let-row="row">
                <div class="p-4">
                    @if (row.checked_in_at) {
                        {{ row.checked_in_at * 1000 | date: 'shortTime' }}
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
        ParkingSpacePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ParkingReportListComponent {
    private _state = inject(ParkingReportService);
    private readonly _bookings = this._state.bookings;
    private readonly _parking_space = new ParkingSpacePipe();

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    public readonly parking_bookings = computed(() => {
        const list = [];
        for (const booking of this._bookings()) {
            list.push({
                asset_id: booking.asset_id,
                date: booking.date,
                duration: booking.duration,
                all_day: booking.all_day,
                host: booking.user_name || booking.user_email,
                plate_number: booking.extension_data?.plate_number || '',
                checked_in: i18n(
                    booking.checked_in ? 'COMMON.YES' : 'COMMON.NO',
                ),
                checked_in_at: booking.checked_in_at
                    ? booking.checked_in_at
                    : 0,
                status: reportBookingStatus(booking),
                self_registered: i18n(
                    booking.extension_data?.self_registered
                        ? 'COMMON.YES'
                        : 'COMMON.NO',
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
                ? format(bkn.checked_in_at * 1000, 'yyyy-MM-dd HH:mm')
                : '';
        }
        const rows = await Promise.all(
            data.map(async (bkn) => ({
                bay_number: await this._bayNumber(bkn.asset_id),
                date: bkn.date,
                duration: bkn.duration,
                all_day: bkn.all_day,
                host: bkn.host,
                plate_number: bkn.plate_number,
                checked_in: bkn.checked_in,
                checked_in_at: bkn.checked_in_at,
                status: bkn.status,
                self_registered: bkn.self_registered,
            })),
        );
        downloadFile('report-parking-daily-usage.csv', jsonToCsv(rows));
    };

    private async _bayNumber(asset_id: string) {
        if (!asset_id) return '';
        const space = await this._parking_space.transform(asset_id);
        return space.identifier || asset_id;
    }
}
