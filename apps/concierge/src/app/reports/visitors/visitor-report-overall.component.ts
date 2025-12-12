import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { formatDuration } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-overall',
    template: `
        <div
            class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_VISITORS' | translate }}
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
    imports: [CommonModule, TranslatePipe],
})
export class VisitorReportOverallComponent {
    private _state = inject(VisitorsReportService);

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
}
