import { Component } from '@angular/core';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-overall',
    template: `
        <div
            class="m-4 p-4 rounded bg-base-100 border border-base-200 flex justify-center items-center space-x-2"
        >
            <div class="flex flex-col items-center flex-1">
                <h3>Business Days</h3>
                <p>{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-col items-center flex-1">
                <h3>Total Bookings</h3>
                <p>{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-col items-center flex-1">
                <h3>Average Booking Length</h3>
                <p>{{ (avg_length | async) || 'None' }}</p>
            </div>
        </div>
    `,
    styles: [``],
})
export class AssetReportOverallComponent {
    constructor(private _state: AssetsReportService) {}
}
