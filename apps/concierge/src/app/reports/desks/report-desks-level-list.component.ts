import { Component } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { differenceInDays } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-levels-list',
    template: `
        <div class="m-4 rounded bg-white shadow overflow-hidden w-full">
            <div class="border-b border-gray-300 p-4 flex items-center">
                <h3 class="font-bold text-xl flex-1">Level Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                red-header
                [dataSource]="level_list"
                [pagination]="true"
                [columns]="[
                    'name',
                    'avg_usage',
                    'approved',
                    'count',
                    'utilisation'
                ]"
                [display_column]="[
                    'Level',
                    'Avg. Used Desks',
                    'Approved Bookings',
                    'Total Requests',
                    'Utilisation'
                ]"
                [column_size]="['flex']"
                [template]="{ utilisation: percent_view }"
            ></custom-table>
            <ng-template #percent_view let-data="data">
                {{ data || '0' }}%
            </ng-template>
        </div>
    `,
})
export class ReportDesksLevelListComponent {
    public readonly level_list = combineLatest([
        this._state.options,
        this._state.stats,
        this._state.counts,
    ]).pipe(
        map(([options, stats, counts]) => {
            const { start, end, zones } = options;
            const duration = differenceInDays(end, start);
            const levels = [];
            for (const zone of zones) {
                if (zone === 'All') continue;
                const lvl = this._org.levelWithID([zone]);
                const count = counts[zone] || 0;
                const events = stats.events.filter((bkn) =>
                    bkn.zones.includes(zone)
                );
                let free: any = (count * duration - events.length) / duration;
                if (free % 1 !== 0) {
                    free = free.toFixed(2);
                }
                levels.push({
                    name: lvl?.display_name || lvl?.name,
                    free,
                    total: count,
                    count: events.length,
                    utilisation: (
                        (events.length / (count * duration)) * 100 || 0
                    ).toFixed(2),
                });
            }
            return levels;
        }),
        shareReplay(1)
    );

    public readonly download = async () => {
        let data = await this.level_list.pipe(take(1)).toPromise();
        downloadFile('desks-levels-usage.csv', jsonToCsv(data));
    };

    constructor(
        private _state: ReportsStateService,
        private _org: OrganisationService
    ) {}
}
