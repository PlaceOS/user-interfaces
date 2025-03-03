import { Component, Input } from '@angular/core';
import { downloadFile, i18n, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { ParkingReportService } from './parking-report.service';
import { format } from 'date-fns';

@Component({
    selector: 'parking-report-list',
    template: `
        <div
            class="m-4 overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_PARKING_UTIL_HEADER' | translate
                    }}
                </h3>
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                    (click)="download()"
                    *ngIf="!print"
                >
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="parking_bookings"
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
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
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
    standalone: false,
})
export class ParkingReportListComponent {
    @Input() public print = false;

    public readonly parking_bookings = this._state.bookings$.pipe(
        map((bookings) => {
            const list = [];
            for (const booking of bookings) {
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
                    self_registered: i18n(
                        booking.extension_data?.self_registered
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE',
                    ),
                });
            }
            list.sort((a, b) => a.date - b.date);
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.parking_bookings.pipe(take(1)).toPromise();
        for (const bkn of data) {
            bkn.date = format(bkn.date, 'yyyy-MM-dd HH:mm');
        }
        downloadFile('report-parking-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: ParkingReportService) {}
}
