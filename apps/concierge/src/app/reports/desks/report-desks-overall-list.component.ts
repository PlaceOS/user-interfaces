import { Component } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { downloadFile, jsonToCsv, timePeriodsIntersect } from '@placeos/common';
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
            <custom-table
                red-header
                [dataSource]="day_list"
                [pagination]="true"
                [columns]="['date', 'usage', 'approved', 'count', 'utilisation']"
                [display_column]="['Date', 'Used Desks', 'Approved Bookings', 'Total Requests', 'Utilisation']"
                [column_size]="['flex']"
            ></custom-table>
        </div>
    `,
})
export class ReportDesksOverallListComponent {

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
