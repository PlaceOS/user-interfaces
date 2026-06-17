import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
} from '@angular/core';
import { formatDuration } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-overall',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ business_days() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_VISITORS' | translate }}
                </h3>
                <p class="text-2xl">{{ total_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ avg_length() || '0' }}</p>
            </div>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe],
})
export class VisitorReportOverallComponent {
    private _state = inject(VisitorsReportService);
    private readonly _bookings = this._state.bookings;
    private readonly _options = this._state.options;

    public readonly total_count = computed(() => this._bookings().length || 0);
    public readonly business_days = computed(() => {
        const { start, end } = this._options();
        return (
            differenceInBusinessDays(
                endOfDay(end || Date.now()).valueOf() + 1,
                startOfDay(start || Date.now()),
            ) || 1
        );
    });
    public readonly avg_length = computed(() => {
        const events: any = this._bookings();
        return formatDuration({
            minutes:
                Math.floor(
                    events.reduce((c, i) => c + i.duration, 0) / events.length,
                ) || 0,
        });
    });
}
