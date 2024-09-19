import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-daily-usage',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Daily Visitor Details</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="daily_stats"
                [columns]="[
                    { key: 'date', name: 'Date', content: date_template },
                    { key: 'booking_count', name: 'Unique Visitors' },
                    { key: 'host_count', name: 'Host Count' },
                    { key: 'booked_count', name: 'Booking Count' },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                empty_message="No events for selected period"
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
        const data = await this.daily_stats.pipe(take(1)).toPromise();
        downloadFile('report-visitors-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: VisitorsReportService) {}
}
