import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    downloadFile,
    jsonToCsv,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { differenceInDays } from 'date-fns';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsStateService } from '../reports-state.service';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Average desks',
        description:
            'Desk bookings on the level divided by the number of days in the selected period.',
    },
    {
        label: 'Approved',
        description: 'Bookings on the level where the booking is approved.',
    },
    {
        label: 'Total requests',
        description:
            'Total desk bookings on the level for the selected period.',
    },
    {
        label: 'Utilisation',
        description:
            'Bookings on the level divided by available desk count multiplied by days in the selected period.',
    },
];

@Component({
    selector: 'report-desks-levels-list',
    template: `
        <div class="w-full px-4 pb-2">
            <div
                class="border-base-200 bg-base-100 w-full overflow-hidden rounded-sm border"
            >
                <div class="border-base-200 flex items-center border-b p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{
                            'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER'
                                | translate
                        }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                            (click)="download()"
                        >
                            <icon>download</icon>
                        </button>
                    }
                    <placeos-report-metric-guide
                        title="Table column calculations"
                        [items]="table_metric_guide"
                        [inline]="true"
                    />
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="level_list()"
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
                    [page_size]="print() ? 0 : 10"
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
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ReportDesksLevelListComponent {
    private _state = inject(ReportsStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    private readonly _options = toSignal(this._state.options, {
        initialValue: {
            start: new Date(),
            end: new Date(),
            zones: [],
        },
    });
    private readonly _stats = toSignal(this._state.stats, {
        initialValue: { events: [] },
    });
    private readonly _counts = toSignal(this._state.counts, {
        initialValue: {},
    });

    public readonly level_list = computed(() => {
        const options = this._options();
        let zones = options.zones || [];
        const stats = this._stats();
        const counts = this._counts();
        const duration = differenceInDays(options.end, options.start) || 1;
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
            const events = (stats.events || []).filter((bkn) =>
                bkn.zones.includes(zone),
            );
            let free: any = (count * duration - events.length) / duration;
            if (free % 1 !== 0) free = free.toFixed(2);
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
    });

    public readonly download = async () => {
        const data = this.level_list();
        downloadFile('desks-levels-usage.csv', jsonToCsv(data));
    };
}
