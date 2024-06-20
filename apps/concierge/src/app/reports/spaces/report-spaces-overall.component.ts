import { Component } from '@angular/core';
import {
    differenceInBusinessDays,
    endOfDay,
    formatDuration,
    startOfDay,
} from 'date-fns';
import { map } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall',
    template: ` <div
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
        <div
            class="m-4 p-4 rounded bg-base-100 flex justify-center items-center space-x-2"
            *ngIf="has_attendance | async"
        >
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>No show count</h3>
                <p>{{ (no_shows | async) || 0 }}</p>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>% of No show Bookings</h3>
                <p>{{ (no_show_percent | async) || 0 }}%</p>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>Total in-room attendance</h3>
                <p>{{ (attendance | async) || 0 }}</p>
            </div>
        </div>`,
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
})
export class ReportSpacesOverallComponent {
    public readonly business_days = this._state.options.pipe(
        map(
            ({ start, end }) =>
                differenceInBusinessDays(
                    startOfDay(end || Date.now()),
                    endOfDay(start || Date.now())
                ) || 1
        )
    );
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly avg_length = this._state.stats.pipe(
        map((i) => formatDuration({ minutes: Math.floor(i.avg_length || 0) }))
    );
    public readonly attendance = this._state.stats.pipe(
        map(({ events }) =>
            events.reduce(
                (c, { extension_data }) =>
                    c + (+extension_data?.people_count?.max || 0),
                0
            )
        )
    );
    public readonly no_shows = this._state.stats.pipe(
        map(({ events }) =>
            events.reduce(
                (c, { extension_data }) =>
                    c + +extension_data?.people_count?.max ? 1 : 0,
                0
            )
        )
    );
    public readonly no_show_percent = this._state.stats.pipe(
        map(
            ({ events }) =>
                Math.floor(
                    (events.reduce(
                        (c, { extension_data }) =>
                            c + +extension_data?.people_count?.max ? 1 : 0,
                        0
                    ) /
                        events.length) *
                        10000
                ) / 100
        )
    );
    public readonly has_attendance = this._state.stats.pipe(
        map(
            ({ events }) =>
                !!events.find(
                    ({ extension_data }) => !!extension_data?.people_count
                )
        )
    );

    constructor(private _state: ReportsStateService) {}
}
