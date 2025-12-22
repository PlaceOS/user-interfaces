import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { formatDuration } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { differenceInBusinessDays, endOfDay, startOfDay } from 'date-fns';
import { map } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall',
    template: ` <div
            class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3>{{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}</h3>
                <p>{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p>{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p>{{ (avg_length | async) || 'None' }}</p>
            </div>
        </div>
        @if (has_attendance | async) {
            <div
                class="bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm p-4"
            >
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>{{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}</h3>
                    <p>{{ (no_shows | async) || 0 }}</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_NO_SHOWS_PERCENT' | translate
                        }}
                    </h3>
                    <p>{{ (no_show_percent | async) || 0 }}%</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_TOTAL_ATTENDEES' | translate
                        }}
                    </h3>
                    <p>{{ (attendance | async) || 0 }}</p>
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
    imports: [CommonModule, TranslatePipe],
})
export class ReportSpacesOverallComponent {
    private _state = inject(ReportsStateService);

    public readonly business_days = this._state.options.pipe(
        map(
            ({ start, end }) =>
                differenceInBusinessDays(
                    endOfDay(end || Date.now()).valueOf() + 2,
                    startOfDay(start || Date.now()),
                ) || 1,
        ),
    );
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0),
    );
    public readonly avg_length = this._state.stats.pipe(
        map((i) => formatDuration({ minutes: Math.floor(i.avg_length || 0) })),
    );
    public readonly attendance = this._state.stats.pipe(
        map(({ events }) =>
            events.reduce(
                (c, { extension_data }) =>
                    c + (+extension_data?.people_count?.max || 0),
                0,
            ),
        ),
    );
    public readonly no_shows = this._state.stats.pipe(
        map(({ events }) =>
            events.reduce(
                (c, { extension_data }) =>
                    c + +extension_data?.people_count?.max ? 1 : 0,
                0,
            ),
        ),
    );
    public readonly no_show_percent = this._state.stats.pipe(
        map(
            ({ events }) =>
                Math.floor(
                    (events.reduce(
                        (c, { extension_data }) =>
                            c + +extension_data?.people_count?.max ? 1 : 0,
                        0,
                    ) /
                        events.length) *
                        10000,
                ) / 100,
        ),
    );
    public readonly has_attendance = this._state.stats.pipe(
        map(
            ({ events }) =>
                !!events.find(
                    ({ extension_data }) => !!extension_data?.people_count,
                ),
        ),
    );
}
