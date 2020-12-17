import { Component } from '@angular/core';
import { Booking } from '@user-interfaces/bookings';
import { timePeriodsIntersect } from '@user-interfaces/common';
import {
    addDays,
    endOfDay,
    formatDuration,
    isBefore,
    startOfDay,
} from 'date-fns';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { ReportsStateService } from './reports-state.service';

@Component({
    selector: '[report-desks]',
    template: `
        <ng-container *ngIf="!(loading | async); else load_state">
            <ng-container *ngIf="total_count | async; else empty_state">
                <div
                    class="m-4 p-4 rounded bg-white shadow flex justify-center items-center space-x-2"
                >
                    <div class="flex flex-col items-center flex-1">
                        <h3>Total Bookings</h3>
                        <p>{{ (total_count | async) || 0 }}</p>
                    </div>
                    <div class="flex flex-col items-center flex-1">
                        <h3>Utilisation</h3>
                        <p>{{ (utilisation | async) || 0 }}%</p>
                    </div>
                </div>
                <div class="m-4 rounded bg-white shadow ">
                    <div table-head class="flex items-center font-medium border-b border-gray-200">
                        <div class="w-1/3 p-4">Date</div>
                        <div class="w-1/6 p-4">Free Desks</div>
                        <div class="w-1/6 p-4">Approved Bookings</div>
                        <div class="w-1/6 p-4">Total Requests</div>
                        <div class="w-1/6 p-4">Utilisation</div>
                    </div>
                    <div table-body>
                        <div
                            table-row
                            class="flex items-center border-b border-gray-200"
                            *ngFor="let date of day_list | async"
                        >
                            <div class="w-1/3 p-4">
                                {{ date.date | date: 'longDate' }}
                            </div>
                            <div class="w-1/6 p-4">{{ date.free || 0 }} / {{ date.total || 0 }}</div>
                            <div class="w-1/6 p-4">{{ date.approved || 0 }}</div>
                            <div class="w-1/6 p-4">{{ date.count || 0 }}</div>
                            <div class="w-1/6 p-4">{{ date.utilisation }}%</div>
                        </div>
                    </div>
                </div>
            </ng-container>
        </ng-container>
        <ng-template #load_state>
            <div class="h-full w-full flex flex-col items-center p-8">
                <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                <p simple>Loading report data...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="h-full w-full flex flex-col items-center p-8">
                <p simple>
                    Select levels and time period to generate a report.
                </p>
            </div>
        </ng-template>
    `,
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
export class ReportDesksComponent {
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly utilisation = this._state.stats.pipe(
        map((i) => ((i.utilisation || 0) * 100).toFixed(1))
    );
    public readonly loading = this._state.loading;

    public readonly day_list = combineLatest([
        this._state.options,
        this._state.stats,
    ]).pipe(
        map(([options, stats]) => {
            const { start, end } = options;
            let date = start;
            const dates = [];
            while (isBefore(date, end)) {
                const s = startOfDay(date).valueOf();
                const e = endOfDay(s).valueOf();
                const events: Booking[] = stats.events.filter((bkn) =>
                    timePeriodsIntersect(
                        s,
                        e,
                        bkn.date,
                        bkn.date + bkn.duration * 60 * 1000
                    )
                );
                dates.push({
                    date: s,
                    total: stats.total,
                    free: stats.total - events.length,
                    approved: events.reduce(
                        (c, e) => c + (e.approved ? 1 : 0),
                        0
                    ),
                    count: events.length,
                    utilisation: ((events.length / stats.total) * 100).toFixed(1)
                });
                date = addDays(date, 1);
            }
            return dates;
        })
    );

    constructor(private _state: ReportsStateService) {}

    public ngOnInit() {
        this._state.setOptions({ type: 'desks' });
    }
}
