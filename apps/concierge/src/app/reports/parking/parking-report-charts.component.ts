import {
    Component,
    ElementRef,
    inject,
    input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    viewChild,
} from '@angular/core';

import {
    AsyncHandler,
    nextValueFrom,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    PieController,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { format, parse } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParkingReportService } from './parking-report.service';

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    PieController,
    ArcElement,
    Tooltip,
    Legend,
);

@Component({
    selector: 'parking-report-charts',
    template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="border-base-200 bg-base-100 h-72 w-1/2 flex-1 rounded-sm border"
            >
                <div class="border-base-200 border-b p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div class="mx-auto h-56 w-full max-w-full p-2">
                    <canvas #dailyChart></canvas>
                </div>
            </div>
            <div
                class="border-base-200 bg-base-100 h-72 w-1/2 flex-1 rounded-sm border"
            >
                <div class="border-base-200 border-b p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div class="mx-auto h-56 w-[24rem] max-w-full p-2">
                    <canvas #levelChart></canvas>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            .is-print canvas {
                width: 20rem !important;
            }
        `,
    ],
    imports: [TranslatePipe],
})
export class ParkingReportChartsComponent
    extends AsyncHandler
    implements OnInit, OnChanges, OnDestroy
{
    private _state = inject(ParkingReportService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly print = input<boolean>(false);
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
                        ) / total_spaces,
                });
            }
            return list.sort((a, b) => a.date.localeCompare(b.date));
        }),
    );
    public readonly stats = combineLatest([
        this._state.options$,
        this._state.counts$,
    ]);

    private _daily_chart_el =
        viewChild<ElementRef<HTMLCanvasElement>>('dailyChart');
    private _level_chart_el =
        viewChild<ElementRef<HTMLCanvasElement>>('levelChart');
    private _day_chart: Chart | null = null;
    private _level_chart: Chart | null = null;

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
            this.timeout('update', () => this.updateCharts(), 50);
        }
    }

    public override ngOnDestroy() {
        super.ngOnDestroy();
        this._day_chart?.destroy();
        this._level_chart?.destroy();
    }

    public updateCharts() {
        this.timeout(
            'update_charts',
            async () => {
                const day_list = await nextValueFrom(this.day_list);
                this.updateDailyChart(day_list);
                const [mappings, counts] = await nextValueFrom(this.stats);
                this.updateLevelChart({ zones: mappings }, counts);
            },
            50,
        );
    }

    public updateDailyChart(list) {
        const el = this._daily_chart_el()?.nativeElement;
        if (!el) return;
        this._day_chart?.destroy();
        this._day_chart = new Chart(el, {
            type: 'line',
            data: {
                labels: list.map((_) =>
                    format(parse(_.date, 'yyyy-MM-dd', Date.now()), 'dd MMM'),
                ),
                datasets: [
                    {
                        data: list.map((_) => +_.utilisation),
                        borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.3,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: this.print() ? false : undefined,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    public updateLevelChart(mapping, count) {
        const el = this._level_chart_el()?.nativeElement;
        if (!el) return;
        let { zones } = mapping || { zones: [] };
        if (!zones.length) {
            zones = (
                this._settings.get('app.use_region')
                    ? this._org.levelsForRegion()
                    : this._org.levelsForBuilding()
            )
                .filter((_) => _.tags.includes('parking'))
                .map((_) => _.id);
        }
        const zone_list = (zones || []).filter((_) => (count[_] || 0) > 0);
        const labels = zone_list.map((_) => {
            const level = this._org.levelWithID([_]);
            return level?.display_name || level.name || '';
        });
        const data = zone_list.map((_) => count[_] || 0);
        this._level_chart?.destroy();
        this._level_chart = new Chart(el, {
            type: 'pie',
            data: {
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: [
                            'rgb(59, 130, 246)',
                            'rgb(16, 185, 129)',
                            'rgb(245, 158, 11)',
                            'rgb(239, 68, 68)',
                            'rgb(139, 92, 246)',
                            'rgb(236, 72, 153)',
                            'rgb(20, 184, 166)',
                            'rgb(249, 115, 22)',
                        ],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: this.print() ? false : undefined,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                },
            },
        });
    }
}
