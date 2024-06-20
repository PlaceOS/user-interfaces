import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { differenceInDays } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-levels-list',
    template: `
        <div class="px-4 pb-2 w-full">
            <div
                class="rounded bg-base-100 border border-base-200 overflow-hidden w-full"
            >
                <div class="border-b border-base-200 p-4 flex items-center">
                    <h3 class="font-bold text-xl flex-1">Level Utilisation</h3>
                    <button icon matRipple *ngIf="!print" (click)="download()">
                        <app-icon>download</app-icon>
                    </button>
                </div>
                <simple-table
                    class="w-full block text-sm"
                    [data]="level_list"
                    [columns]="[
                        { key: 'name', name: 'Level' },
                        { key: 'avg_usage', name: 'Avg. Used Desks' },
                        { key: 'approved', name: 'Approved Bookings' },
                        { key: 'count', name: 'Total Requests' },
                        {
                            key: 'utilisation',
                            name: 'Utilisation',
                            content: percent_view
                        }
                    ]"
                    [page_size]="print ? 0 : 10"
                    [sortable]="true"
                >
                </simple-table>
                <ng-template #percent_view let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
})
export class ReportDesksLevelListComponent {
    @Input() public print: boolean = false;

    public readonly level_list = combineLatest([
        this._state.options,
        this._state.stats,
        this._state.counts,
    ]).pipe(
        map(([options, stats, counts]) => {
            const { start, end, zones } = options;
            const duration = differenceInDays(end, start) || 1;
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
                    approved: events.filter((_) => _.approved).length || 0,
                    avg_usage: (events.length / duration || 0).toFixed(2),
                    total: count,
                    count: events.length,
                    utilisation: (
                        (events.length / ((count || 1) * duration)) * 100 || 0
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
