import { Component } from '@angular/core';
import { ReportsStateService } from '../reports-state.service';

import { LineChart, PieChart } from 'chartist';
import { BaseClass } from '@placeos/common';
import { format } from 'date-fns';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'report-desks-charts',
    template: `
        <div class="flex items-center space-x-4 w-full px-4">
            <div class="bg-white dark:bg-neutral-700 rounded shadow flex-1">
                <div class="border-b border-gray-300 dark:border-neutral-500 p-4 text-xl font-bold">
                    Daily Utilisation
                </div>
                <div
                    id="day-chart"
                    #util_chart
                    class="ct-chart ct-octave"
                ></div>
            </div>
            <div class="bg-white dark:bg-neutral-700 rounded shadow flex-1">
                <div class="border-b border-gray-300 dark:border-neutral-500 p-4 text-xl font-bold">
                    Level Utilisation
                </div>
                <div
                    id="level-chart"
                    #level_chart
                    class="ct-chart ct-octave"
                ></div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class ReportDesksChartsComponent extends BaseClass {
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
            'day_list',
            this.day_list.subscribe((l) => this.updateDailyChart(l))
        );
        this.subscription(
            'stats',
            this.stats.subscribe(([o, c]) => this.updateLevelChart(o, c))
        );
    }

    public updateDailyChart(list) {
        const data = {
            labels: list.map((_) => format(_.date, 'dd MMM')),
            series: [list.map((_) => _.utilisation)],
        };
        this._day_chart = new LineChart('#day-chart', data);
    }

    public updateLevelChart(mapping, count) {
        let { zones } = mapping || {};
        if (zones.includes('All'))
            zones = this._org.levels
                .filter((_) => _.parent_id === this._org.building.id)
                .map((_) => _.id);
        const data = {
            labels: (zones || []).map((_) => {
                const level = this._org.levelWithID([_]);
                return level?.display_name || level.name || '';
            }),
            series: (zones || []).map((_) => count[_]),
        };
        this._level_chart = new PieChart('#level-chart', data);
    }
}
