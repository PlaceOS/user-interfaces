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
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall',
    template: ` <div
            class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3>{{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}</h3>
                <p>{{ business_days() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p>{{ total_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>Active</h3>
                <p>{{ active_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>Rejected</h3>
                <p>{{ cancelled_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>Cancelled</h3>
                <p>{{ deleted_count() || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p>{{ avg_length() || 'None' }}</p>
            </div>
        </div>
        @if (has_attendance()) {
            <div
                class="bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm p-4"
            >
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>{{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}</h3>
                    <p>{{ no_shows() || 0 }}</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_NO_SHOWS_PERCENT' | translate
                        }}
                    </h3>
                    <p>{{ no_show_percent() || 0 }}%</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_TOTAL_ATTENDEES' | translate
                        }}
                    </h3>
                    <p>{{ attendance() || 0 }}</p>
                </div>
            </div>
        }`,
    styles: [
        `
            h3 {
                font-weight: 500;
            }

            p:not([simple]) {
                font-size: 1.75rem;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe],
})
export class ReportSpacesOverallComponent {
    private _state = inject(ReportsStateService);
    private readonly _options = toSignal(this._state.options, {
        initialValue: { start: Date.now(), end: Date.now() },
    });
    private readonly _stats = toSignal(this._state.stats, {
        initialValue: {
            count: 0,
            avg_length: 0,
            events: [],
            total_count: 0,
            cancelled_count: 0,
            deleted_count: 0,
        },
    });

    public readonly business_days = computed(() => {
        const { start, end } = this._options();
        return (
            differenceInBusinessDays(
                endOfDay(end || Date.now()).valueOf() + 2,
                startOfDay(start || Date.now()),
            ) || 1
        );
    });
    public readonly total_count = computed(
        () => this._stats().total_count || this._stats().count || 0,
    );
    public readonly active_count = computed(() => this._stats().count || 0);
    public readonly cancelled_count = computed(
        () => this._stats().cancelled_count || 0,
    );
    public readonly deleted_count = computed(
        () => this._stats().deleted_count || 0,
    );
    public readonly avg_length = computed(() =>
        formatDuration({ minutes: Math.floor(this._stats().avg_length || 0) }),
    );
    public readonly attendance = computed(() =>
        this._stats().events.reduce(
            (c, { extension_data }) =>
                c + (+extension_data?.people_count?.max || 0),
            0,
        ),
    );
    public readonly no_shows = computed(() =>
        this._stats().events.reduce(
            (c, { extension_data }) =>
                c + +extension_data?.people_count?.max ? 1 : 0,
            0,
        ),
    );
    public readonly no_show_percent = computed(() => {
        const { events } = this._stats();
        return (
            Math.floor(
                (events.reduce(
                    (c, { extension_data }) =>
                        c + +extension_data?.people_count?.max ? 1 : 0,
                    0,
                ) /
                    events.length) *
                    10000,
            ) / 100
        );
    });
    public readonly has_attendance = computed(
        () =>
            !!this._stats().events.find(
                ({ extension_data }) => !!extension_data?.people_count,
            ),
    );
}
