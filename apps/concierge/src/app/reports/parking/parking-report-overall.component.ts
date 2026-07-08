import { Component, computed, inject } from '@angular/core';
import { formatDuration } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import {
    activeReportBookings,
    formatReportPercentage,
    noShowReportBookings,
    reportBookingStatusStats,
} from '../reports.utilities';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: 'parking-report-overall',
    template: `
        <div
            class="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ business_days() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ total_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_ALLOCATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ active_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_REJECTED' | translate }}
                </h3>
                <p class="text-2xl">{{ cancelled_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_CANCELLED' | translate }}
                </h3>
                <p class="text-2xl">{{ deleted_count() || 0 }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}
                </h3>
                <p class="text-2xl">{{ no_shows() }}</p>
            </div>
            <div
                class="border-base-300 bg-base-100 rounded-sm border p-4 shadow"
            >
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ avg_length() || '0' }}</p>
            </div>
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe],
})
export class ParkingReportOverallComponent {
    private _state = inject(ParkingReportService);
    private readonly _bookings = this._state.bookings;
    private readonly _options = this._state.options;

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
    public readonly no_shows = computed(() =>
        formatReportPercentage(
            noShowReportBookings(this._bookings()).length,
            this.active_count(),
        ),
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
        const avg_minutes =
            events.reduce((c, i) => c + i.duration, 0) / events.length || 0;
        return formatDuration({
            hours: Math.round((avg_minutes / 60) * 10) / 10,
        });
    });
}
