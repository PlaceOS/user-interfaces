import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    OnDestroy,
    viewChild,
} from '@angular/core';

import {
    AsyncHandler,
    flatten,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    ArcElement,
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PieController,
    PointElement,
    Tooltip,
} from 'chart.js';
import { format, parse } from 'date-fns';
import { LockersReportService } from './lockers-report.service';

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
    selector: 'lockers-report-charts',
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
                width: 8cm !important;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe],
})
export class LockersReportChartsComponent
    extends AsyncHandler
    implements OnDestroy
{
    private _state = inject(LockersReportService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private readonly _daily_stats = this._state.daily_stats;
    private readonly _counts = this._state.counts;
    private readonly _bookings = this._state.bookings;

    public readonly print = input(false);
    public readonly day_list = computed(() => {
        const days = this._daily_stats();
        const counts = this._counts();
        const list = [];
        const total_spaces = Object.values(counts).reduce(
            (c, v) => c + (v || 0),
            0,
        );
        for (const date in days) {
            list.push({
                date,
                booking_count: unique(days[date].bookings, 'asset_id').length,
                host_count: unique(days[date].bookings, 'user_email').length,
                booked_count: days[date].bookings.length,
                utilisation:
                    days[date].bookings.reduce((c, v) => c + v.duration, 0) /
                    (total_spaces || 1) /
                    (8 * 60),
            });
        }
        return list.sort((a, b) => a.date.localeCompare(b.date));
    });

    public readonly stats = computed(() => {
        const bookings = this._bookings();
        const mapping = unique(flatten(bookings.map((_) => _.zones))).filter(
            (id) => this._org.levels.find((_) => _.id === id),
        );
        return [
            mapping,
            mapping.reduce((counts, id) => {
                const list = bookings.filter((_) => _.zones.includes(id));
                counts[id] = list.length || 0;
                return counts;
            }, {}),
        ];
    });

    private _daily_chart_el =
        viewChild<ElementRef<HTMLCanvasElement>>('dailyChart');
    private _level_chart_el =
        viewChild<ElementRef<HTMLCanvasElement>>('levelChart');
    private _day_chart: Chart | null = null;
    private _level_chart: Chart | null = null;

    constructor() {
        super();
        effect(() => {
            this.day_list();
            this.stats();
            this.print();
            this._daily_chart_el();
            this._level_chart_el();
            this.updateCharts();
        });
    }

    public override ngOnDestroy() {
        super.ngOnDestroy();
        this._day_chart?.destroy();
        this._level_chart?.destroy();
    }

    public updateCharts() {
        this.timeout(
            'update_charts',
            () => {
                const day_list = this.day_list();
                this.updateDailyChart(day_list);
                const [mappings, counts] = this.stats();
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
                .filter((_) => _.tags.includes('lockers'))
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
