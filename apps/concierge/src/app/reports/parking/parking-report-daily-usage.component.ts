import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: 'parking-report-daily-usage',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
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
                class="w-full block text-sm"
                [data]="daily_stats"
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
                        key: 'booked_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
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
        </div>
    `,
    styles: [``],
})
export class ParkingReportDailyUsageComponent {
    @Input() public print: boolean = false;

    public readonly daily_stats = this._state.daily_stats$.pipe(
        map((days) => {
            let list = [];
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
            list.sort((a, b) => a.date.localeCompare(b.date));
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.daily_stats.pipe(take(1)).toPromise();
        downloadFile('report-parking-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: ParkingReportService) {}
}
