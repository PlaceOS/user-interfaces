import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: 'lockers-report-daily-usage',
    template: `
        <div
            class="m-4 overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
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
                class="block w-full text-sm"
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
    standalone: false,
})
export class LockersReportDailyUsageComponent {
    @Input() public print = false;

    public readonly daily_stats = this._state.daily_stats$.pipe(
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
            list.sort((a, b) => a.date.localeCompare(b.date));
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.daily_stats.pipe(take(1)).toPromise();
        downloadFile('report-lockers-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: LockersReportService) {}
}
