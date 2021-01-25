import { Component } from '@angular/core';
import { Booking } from '@user-interfaces/bookings';
import { downloadFile, jsonToCsv, timePeriodsIntersect } from '@user-interfaces/common';
import { addDays, endOfDay, format, isBefore, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-overall-list',
    template: `
        <div class="m-4 rounded bg-white shadow overflow-hidden">
            <div class="border-b border-gray-300 p-4 flex items-center">
                <h3 class="font-bold text-xl flex-1">Daily Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <div
                table-head
                class="flex items-center font-medium border-b border-gray-200"
            >
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
                    *ngFor="
                        let date of day_list
                            | async
                            | slice: page * 7:page * 7 + 7
                    "
                >
                    <div class="w-1/3 p-4">
                        {{ date.date | date: 'MMMM d, y(EEE)' }}
                    </div>
                    <div class="w-1/6 p-4">
                        {{ date.free || 0 }} / {{ date.total || 0 }}
                    </div>
                    <div class="w-1/6 p-4">{{ date.approved || 0 }}</div>
                    <div class="w-1/6 p-4">{{ date.count || 0 }}</div>
                    <div class="w-1/6 p-4">{{ date.utilisation }}%</div>
                </div>
            </div>
            <div table-footer>
                <mat-paginator
                    [length]="(day_list | async)?.length || 0"
                    [pageSize]="7"
                    (page)="page = $event.pageIndex"
                    [hidePageSize]="true"
                >
                </mat-paginator>
            </div>
        </div>
    `,
})
export class ReportDesksOverallListComponent {
    public page: number = 0;

    public readonly day_list = combineLatest([
        this._state.options,
        this._state.stats,
    ]).pipe(
        map(([options, stats]) => {
            const { start, end } = options;
            this.page = 0;
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
                    utilisation: ((events.length / stats.total) * 100).toFixed(
                        1
                    ),
                });
                date = addDays(date, 1);
            }
            return dates;
        }),
        shareReplay(1)
    );

    public readonly download = async () => {
        let data = await this.day_list.pipe(take(1)).toPromise();
        data = data.map(d => ({ ...d, date: format(d.date, 'MMMM d, y(EEE)') }))
        downloadFile('desks-usage.csv', jsonToCsv(data));
    }

    constructor(private _state: ReportsStateService) {}
}
