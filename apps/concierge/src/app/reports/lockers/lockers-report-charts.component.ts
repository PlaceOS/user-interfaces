import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

import { LineChart, PieChart } from 'chartist';
import {
    AsyncHandler,
    flatten,
    SettingsService,
    unique,
} from '@placeos/common';
import { format, parse } from 'date-fns';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: 'lockers-report-charts',
    template: `
        <div
            class="flex items-center space-x-4 w-full px-4"
            [class.is-print]="print"
            (window:resize)="updateCharts()"
        >
            <div
                class="bg-base-100 border border-base-200 rounded flex-1 w-1/2 h-[18rem]"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave max-w-full w-full h-56 mx-auto relative top-2 -left-2"
                ></div>
            </div>
            <div
                class="bg-base-100 border border-base-200 rounded flex-1 w-1/2 h-[18rem]"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div
                    id="level-chart"
                    class="ct-chart ct-octave max-w-full w-[24rem] h-56 mx-auto"
                ></div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            .is-print .ct-chart {
                width: 8cm !important;
            }
        `,
    ],
    standalone: false
})
export class LockersReportChartsComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    @Input() public print = false;
    public readonly day_list = combineLatest([
        this._state.daily_stats$,
        this._state.counts$,
    ]).pipe(
        map(([days, counts]) => {
            let list = [];
            const total_spaces = Object.values(counts).reduce(
                (c, v) => c + (v || 0),
                0,
            );
            for (const date in days) {
                list.push({
                    date,
                    booking_count: unique(days[date].bookings, 'asset_id')
                        .length,
                    host_count: unique(days[date].bookings, 'user_email')
                        .length,
                    booked_count: days[date].bookings.length,
                    utilisation:
                        days[date].bookings.reduce(
                            (c, v) => c + v.duration,
                            0,
                        ) /
                        (total_spaces || 1) /
                        (8 * 60),
                });
            }
            return list.sort((a, b) => a.date.localeCompare(b.date));
        }),
    );

    public readonly stats = combineLatest([this._state.bookings$]).pipe(
        map(([bookings]) => {
            const mapping = unique(
                flatten(bookings.map((_) => _.zones)),
            ).filter((id) => this._org.levels.find((_) => _.id === id));
            return [
                mapping,
                mapping.reduce((counts, id) => {
                    const list = bookings.filter((_) => _.zones.includes(id));
                    counts[id] = list.length || 0;
                    return counts;
                }, {}),
            ];
        }),
    );

    private _day_chart: any;
    private _level_chart: any;

    constructor(
        private _state: LockersReportService,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'charts',
            combineLatest([this.day_list, this.stats]).subscribe(() =>
                this.updateCharts(),
            ),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (
            changes.print &&
            changes.print.currentValue !== changes.print.previousValue
        ) {
            this.updateCharts();
        }
    }

    public updateCharts() {
        this.timeout(
            'update_charts',
            async () => {
                const day_list = await this.day_list.pipe(take(1)).toPromise();
                this.updateDailyChart(day_list);
                const [mappings, counts] = await this.stats
                    .pipe(take(1))
                    .toPromise();
                this.updateLevelChart({ zones: mappings }, counts);
                this.timeout(
                    'update_charts',
                    () => this.updateDailyChart(day_list),
                    500,
                );
            },
            50,
        );
    }

    public updateDailyChart(list) {
        console.log('Daily Chart:', list);
        const data = {
            labels: list.map((_) =>
                format(parse(_.date, 'yyyy-MM-dd', Date.now()), 'dd MMM'),
            ),
            series: [list.map((_) => +_.utilisation)],
        };
        this._day_chart = new LineChart('#daily-chart', data);
    }

    public updateLevelChart(mapping, count) {
        console.log('Level Chart:', mapping, count);
        let { zones } = mapping || { zones: [] };
        if (!zones.length) {
            zones = (
                this._settings.get('app.use_region')
                    ? this._org.levelsForRegion()
                    : this._org.levelsForBuilding()
            )
                .filter((_) => _.tags.includes('lockers'))
                .map((_) => _.id);
        }
        const zone_list = (zones || []).filter((_) => (count[_] || 0) > 0);
        const data = {
            labels: zone_list.map((_) => {
                const level = this._org.levelWithID([_]);
                return level?.display_name || level.name || '';
            }),
            series: zone_list.map((_) => count[_] || 0),
        };
        this._level_chart = new PieChart('#level-chart', data);
    }
}
