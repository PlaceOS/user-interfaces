import { Component, Input } from '@angular/core';
import {
    downloadFile,
    jsonToCsv,
    nextValueFrom,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { differenceInDays } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-levels-list',
    template: `
        <div class="w-full px-4 pb-2">
            <div
                class="w-full overflow-hidden rounded border border-base-200 bg-base-100"
            >
                <div class="flex items-center border-b border-base-200 p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{
                            'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER'
                                | translate
                        }}
                    </h3>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        *ngIf="!print"
                        (click)="download()"
                    >
                        <app-icon>download</app-icon>
                    </button>
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="level_list"
                    [columns]="[
                        { key: 'name', name: 'RESOURCE.LEVEL' | translate },
                        {
                            key: 'avg_usage',
                            name: 'APP.CONCIERGE.REPORTS_AVG_DESKS' | translate,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_view,
                        },
                    ]"
                    [page_size]="print ? 0 : 10"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                >
                </simple-table>
                <ng-template #percent_view let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
    standalone: false,
})
export class ReportDesksLevelListComponent {
    @Input() public print = false;

    public readonly level_list = combineLatest([
        this._state.options,
        this._state.stats,
        this._state.counts,
    ]).pipe(
        map(([options, stats, counts]) => {
            let { start, end, zones } = options;
            const duration = differenceInDays(end, start) || 1;
            if (!zones.length) {
                zones = this._settings.get('app.use_region')
                    ? this._org.levelsForRegion().map((_) => _.id)
                    : this._org.levelsForBuilding().map((_) => _.id);
            }
            const levels = [];
            for (const zone of zones) {
                if (zone === 'All') continue;
                const lvl = this._org.levelWithID([zone]);
                const count = counts[zone] || 0;
                const events = stats.events.filter((bkn) =>
                    bkn.zones.includes(zone),
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
        shareReplay(1),
    );

    public readonly download = async () => {
        const data = await nextValueFrom(this.level_list);
        downloadFile('desks-levels-usage.csv', jsonToCsv(data));
    };

    constructor(
        private _state: ReportsStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {}
}
