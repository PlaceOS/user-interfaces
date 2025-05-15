import { Component, Input } from '@angular/core';
import {
    downloadFile,
    jsonToCsv,
    nextValueFrom,
    unique,
} from '@placeos/common';
import { map } from 'rxjs/operators';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-daily-usage',
    template: `
        <div
            class="m-4 overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_VISITORS_DAILY' | translate }}
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
                    <icon>download</icon>
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
export class VisitorReportDailyUsageComponent {
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
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await nextValueFrom(this.daily_stats);
        downloadFile('report-visitors-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: VisitorsReportService) {}
}
