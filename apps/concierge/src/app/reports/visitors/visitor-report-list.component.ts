import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-list',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Visitor List</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="visitor_bookings"
                [columns]="[
                    { key: 'visitor_name', name: 'Visitor Name' },
                    { key: 'date', name: 'Date', content: date_template },
                    { key: 'host', name: 'Host' },
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
export class VisitorReportListComponent {
    @Input() public print: boolean = false;

    public readonly visitor_bookings = this._state.bookings$.pipe(
        map((bookings) => {
            let list = [];
            for (const booking of bookings) {
                list.push({
                    visitor_name:
                        booking.asset_name ||
                        booking.extension_data?.asset_name ||
                        booking.description ||
                        booking.asset_id,
                    date: booking.date,
                    host: booking.user_name || booking.user_email,
                });
            }
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.visitor_bookings.pipe(take(1)).toPromise();
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: VisitorsReportService) {}
}
