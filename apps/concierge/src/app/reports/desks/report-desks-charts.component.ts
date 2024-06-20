import { Component, Input, SimpleChanges } from '@angular/core';
import { ReportsStateService } from '../reports-state.service';

import { LineChart, PieChart } from 'chartist';
import { AsyncHandler } from '@placeos/common';
import { format } from 'date-fns';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'report-desks-charts',
    template: `
        <div
            class="flex items-center space-x-4 w-full px-4"
            [class.is-print]="print"
            (window:resize)="updateCharts()"
        >
            <div
                class="bg-base-100 border border-base-200 rounded flex-1 h-[18rem]"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    Daily Utilisation
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave max-w-full w-full h-56 mx-auto"
                ></div>
            </div>
            <div
                class="bg-base-100 border border-base-200 rounded flex-1 h-[18rem]"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    Level Utilisation
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
})
export class ReportDesksChartsComponent extends AsyncHandler {
    @Input() public print: boolean = false;
    public readonly day_list = this._state.day_list;
    public readonly stats = combineLatest([
        this._state.options,
        this._state.counts,
    ]);

    private _day_chart: any;
    private _level_chart: any;

    constructor(
        private _state: ReportsStateService,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'charts',
            combineLatest([this.day_list, this.stats]).subscribe(() =>
                this.updateCharts()
            )
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
                this.updateLevelChart(mappings, counts);
                this.timeout(
                    'update_charts',
                    () => this.updateDailyChart(day_list),
                    500
                );
            },
            50
        );
    }

    public updateDailyChart(list) {
        const data = {
            labels: list.map((_) => format(_.date, 'dd MMM')),
            series: [list.map((_) => +_.utilisation)],
        };
        this._day_chart = new LineChart('#daily-chart', data);
    }

    public updateLevelChart(mapping, count) {
        let { zones } = mapping || {};
        if (zones.includes('All'))
            zones = this._org.levels
                .filter((_) => _.parent_id === this._org.building.id)
                .map((_) => _.id);
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
