import { Component } from '@angular/core';
import { Booking } from '@user-interfaces/bookings';
import { downloadFile, jsonToCsv, timePeriodsIntersect } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { addDays, differenceInDays, endOfDay, format, isBefore, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-levels-list',
    template: `
        <div class="m-4 rounded bg-white shadow overflow-hidden">
            <div class="border-b border-gray-300 p-4 flex items-center">
                <h3 class="font-bold text-xl flex-1">Level Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <div
                table-head
                class="flex items-center font-medium border-b border-gray-200"
            >
                <div class="w-1/3 p-4">Level</div>
                <div class="w-1/6 p-4">Avg. Used Desks</div>
                <div class="w-1/6 p-4">Approved Bookings</div>
                <div class="w-1/6 p-4">Total Requests</div>
                <div class="w-1/6 p-4">Utilisation</div>
            </div>
            <div table-body>
                <div
                    table-row
                    class="flex items-center border-b border-gray-200"
                    *ngFor="
                        let lvl of level_list
                            | async
                            | slice: page * 7:page * 7 + 7
                    "
                >
                    <div class="w-1/3 p-4">
                        {{ lvl.name }}
                    </div>
                    <div class="w-1/6 p-4">
                        {{ lvl.count || 0 }} / {{ lvl.total || 0 }}
                    </div>
                    <div class="w-1/6 p-4">{{ lvl.approved || 0 }}</div>
                    <div class="w-1/6 p-4">{{ lvl.count || 0 }}</div>
                    <div class="w-1/6 p-4">{{ lvl.utilisation }}%</div>
                </div>
            </div>
            <div table-footer>
                <mat-paginator
                    [length]="(level_list | async)?.length || 0"
                    [pageSize]="7"
                    (page)="page = $event.pageIndex"
                    [hidePageSize]="true"
                >
                </mat-paginator>
            </div>
        </div>
    `,
})
export class ReportDesksLevelListComponent {
    public page: number = 0;

    public readonly level_list = combineLatest([
        this._state.options,
        this._state.stats,
        this._state.counts
    ]).pipe(
        map(([options, stats, counts]) => {
            const { start, end, zones } = options;
            const duration = differenceInDays(end, start);
            this.page = 0;
            const levels = [];
            console.log('Duration:', duration);
            for (const zone of zones) {
                if (zone === 'All') continue;
                const lvl = this._org.levelWithID([zone]);
                const count = counts[zone] || 0
                const events = stats.events.filter(bkn => bkn.zones.includes(zone));
                console.log('Evnets:', events.length)
                let free: any = ((count * duration) - events.length) / duration;
                if (free % 1 !== 0) { free = free.toFixed(2); }
                levels.push({
                    name: lvl?.display_name || lvl?.name,
                    free,
                    total: count,
                    count: events.length,
                    utilisation: (((events.length / (count * duration)) * 100) || 0).toFixed(2),
                });
            }
            return levels;
        }),
        shareReplay(1)
    );

    public readonly download = async () => {
        let data = await this.level_list.pipe(take(1)).toPromise();
        downloadFile('desks-levels-usage.csv', jsonToCsv(data));
    }

    constructor(private _state: ReportsStateService, private _org: OrganisationService) {}
}
