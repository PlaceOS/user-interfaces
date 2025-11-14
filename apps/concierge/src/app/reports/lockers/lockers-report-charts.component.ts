import {
    Component,
    inject,
    input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

import {
    AsyncHandler,
    flatten,
    nextValueFrom,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { LineChart, PieChart } from 'chartist';
import { format, parse } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: 'lockers-report-charts',
    template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="h-[18rem] w-1/2 flex-1 rounded border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave relative -left-2 top-2 mx-auto h-56 w-full max-w-full"
                ></div>
            </div>
            <div
                class="h-[18rem] w-1/2 flex-1 rounded border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div
                    id="level-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-[24rem] max-w-full"
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
    imports: [TranslatePipe],
})
export class LockersReportChartsComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _state = inject(LockersReportService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly print = input(false);
    public readonly day_list = combineLatest([
        this._state.daily_stats$,
        this._state.counts$,
    ]).pipe(
        map(([days, counts]) => {
            const list = [];
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
                const day_list = await nextValueFrom(this.day_list);
                this.updateDailyChart(day_list);
                const [mappings, counts] = await nextValueFrom(this.stats);
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
