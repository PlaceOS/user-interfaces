import { Component } from '@angular/core';
import { AssetsReportService } from './assets-report.service';
import { map } from 'rxjs/operators';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';

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
    public readonly total_count = this._state.stats$.pipe(map((i) => i.count));
    public readonly business_days = this._state.options$.pipe(
        map(
            ({ start, end }) =>
                differenceInBusinessDays(
                    startOfDay(end || Date.now()),
                    endOfDay(start || Date.now()),
                ) || 1,
        ),
    );
    public readonly avg_length = this._state.stats$.pipe(
        map(
            ({ events }) =>
                events.reduce((c, i) => c + i.duration, 0) / events.length,
        ),
    );

    constructor(private _state: AssetsReportService) {}
}
