import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { formatDuration } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import {
    activeReportBookings,
    reportBookingStatusStats,
} from '../reports.utilities';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: 'parking-report-overall',
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
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ total_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">Active</h3>
                <p class="text-2xl">{{ active_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">Rejected</h3>
                <p class="text-2xl">{{ cancelled_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">Cancelled</h3>
                <p class="text-2xl">{{ deleted_count() || 0 }}</p>
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
export class ParkingReportOverallComponent {
    private _state = inject(ParkingReportService);
    private readonly _bookings = toSignal(this._state.bookings$, {
        initialValue: [],
    });
    private readonly _options = toSignal(this._state.options$, {
        initialValue: { start: Date.now(), end: Date.now() },
    });

    private readonly _booking_stats = computed(() =>
        reportBookingStatusStats(this._bookings()),
    );

    public readonly total_count = computed(
        () => this._booking_stats().total_count || 0,
    );
    public readonly active_count = computed(
        () => this._booking_stats().active_count || 0,
    );
    public readonly cancelled_count = computed(
        () => this._booking_stats().cancelled_count || 0,
    );
    public readonly deleted_count = computed(
        () => this._booking_stats().deleted_count || 0,
    );
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
        const events: any = activeReportBookings(this._bookings());
        return formatDuration({
            minutes:
                Math.floor(
                    events.reduce((c, i) => c + i.duration, 0) / events.length,
                ) || 0,
        });
    });
}
