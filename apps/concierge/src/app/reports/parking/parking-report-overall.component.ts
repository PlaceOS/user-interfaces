import { Component } from '@angular/core';
import { ParkingReportService } from './parking-report.service';
import { map } from 'rxjs/operators';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import { formatDuration } from '@placeos/common';

@Component({
    selector: 'parking-report-overall',
    template: `
        <div
            class="m-4 p-4 rounded bg-base-100 border border-base-200 flex justify-center items-center space-x-2"
        >
            <div class="flex flex-col items-center flex-1">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-col items-center flex-1">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-col items-center flex-1">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ (avg_length | async) || '0' }}</p>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false
})
export class ParkingReportOverallComponent {
    public readonly total_count = this._state.bookings$.pipe(
        map((i) => i.length || 0),
    );
    public readonly business_days = this._state.options$.pipe(
        map(
            ({ start, end }) =>
                differenceInBusinessDays(
                    endOfDay(end || Date.now()).valueOf() + 1,
                    startOfDay(start || Date.now()),
                ) || 1,
        ),
    );
    public readonly avg_length = this._state.bookings$.pipe(
        map((events: any) =>
            formatDuration({
                minutes:
                    Math.floor(
                        events.reduce((c, i) => c + i.duration, 0) /
                            events.length,
                    ) || 0,
            }),
        ),
    );

    constructor(private _state: ParkingReportService) {}
}
