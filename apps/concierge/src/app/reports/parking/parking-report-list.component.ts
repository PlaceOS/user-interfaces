import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: 'parking-report-list',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Parking List</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="parking_bookings"
                [columns]="[
                    { key: 'parking_name', name: 'Parking Name' },
                    { key: 'date', name: 'Date', content: date_template },
                    {
                        key: 'duration',
                        name: 'Duration',
                        content: duration_template,
                    },
                    { key: 'host', name: 'Booked For' },
                    { key: 'checked_in', name: 'Checked In' },
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
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{
                        row.duration > 12 * 60 || row.all_day
                            ? 'All Day'
                            : (row.duration | duration: true)
                    }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class ParkingReportListComponent {
    @Input() public print: boolean = false;

    public readonly parking_bookings = this._state.bookings$.pipe(
        map((bookings) => {
            let list = [];
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
                    checked_in: booking.checked_in ? 'Yes' : 'No',
                    self_registered: booking.extension_data?.self_registered
                        ? 'Yes'
                        : 'No',
                });
            }
            list.sort((a, b) => a.date - b.date);
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.parking_bookings.pipe(take(1)).toPromise();
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: ParkingReportService) {}
}
