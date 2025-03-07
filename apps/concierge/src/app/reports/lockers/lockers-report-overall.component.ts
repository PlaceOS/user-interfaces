import { Component } from '@angular/core';
import { formatDuration } from '@placeos/common';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: 'lockers-report-overall',
    template: `
        <div
            class="m-4 flex items-center justify-center space-x-2 rounded border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p class="text-2xl">{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ (avg_length | async) || '0' }}</p>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class LockersReportOverallComponent {
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

    constructor(private _state: LockersReportService) {}
}
