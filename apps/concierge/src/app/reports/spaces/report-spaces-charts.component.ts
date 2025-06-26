import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ReportsStateService } from '../reports-state.service';

import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { LineChart, PieChart } from 'chartist';
import { format } from 'date-fns';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'report-spaces-charts',
    template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print"
            (window:resize)="updateCharts()"
        >
            <div
                class="h-[18rem] flex-1 rounded border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-full max-w-full"
                ></div>
            </div>
            <div
                class="h-[18rem] flex-1 rounded border border-base-200 bg-base-100"
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
    standalone: false,
})
export class ReportSpacesChartsComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _state = inject(ReportsStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    @Input() public print = false;
    public readonly day_list = this._state.day_list;
    public readonly stats = combineLatest([
        this._state.options,
        this._state.counts,
    ]);

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
                this.updateLevelChart(mappings, counts);
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
        const data = {
            labels: list.map((_) => format(_.date, 'dd MMM')),
            series: [list.map((_) => +_.utilisation)],
        };
        this._day_chart = new LineChart('#daily-chart', data);
    }

    public updateLevelChart(mapping, count) {
        let { zones } = mapping || { zones: [] };
        if (!zones.length) {
            zones = this._settings.get('app.use_region')
                ? this._org.levelsForRegion().map((_) => _.id)
                : this._org.levelsForBuilding().map((_) => _.id);
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
