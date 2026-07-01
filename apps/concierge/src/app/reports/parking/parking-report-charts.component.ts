import {
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
import { activeReportBookings } from '../reports.utilities';
import { ParkingReportService } from './parking-report.service';

const LEVEL_COLORS = [
    'rgb(59, 130, 246)',
    'rgb(16, 185, 129)',
    'rgb(245, 158, 11)',
    'rgb(239, 68, 68)',
    'rgb(139, 92, 246)',
    'rgb(236, 72, 153)',
    'rgb(20, 184, 166)',
    'rgb(249, 115, 22)',
];

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
                    {{
                        'APP.CONCIERGE.REPORTS_ACTIVE_BOOKINGS_HEADER'
                            | translate
                    }}
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
    implements OnDestroy
{
    private _state = inject(ParkingReportService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private readonly _bookings = this._state.bookings;
    private readonly _counts = this._state.counts;

    public readonly print = input<boolean>(false);

    /** Parking level zone ids that have spaces (falls back to org levels) */
    public readonly levels = computed(() => {
        const counts = this._counts();
        let zones = Object.keys(counts);
        if (!zones.length) {
            zones = (
                this._settings.get('app.use_region')
                    ? this._org.levelsForRegion()
                    : this._org.levelsForBuilding()
            )
                .filter((_) => _.tags.includes('parking'))
                .map((_) => _.id);
        }
        return zones;
    });

    /** Per-level daily count of active bookings */
    public readonly daily_data = computed(() => {
        const bookings = activeReportBookings(this._bookings());
        const levels = this.levels();
        const dates = unique(
            bookings.map((b) => format(b.date, 'yyyy-MM-dd')),
        ).sort();
        const series = levels.map((level) => ({
            level,
            data: dates.map(
                (date) =>
                    bookings.filter(
                        (b) =>
                            format(b.date, 'yyyy-MM-dd') === date &&
                            b.zones?.includes(level),
                    ).length,
            ),
        }));
        return { dates, series };
    });

    /** Active booking count per level for the pie chart */
    public readonly level_counts = computed(() => {
        const bookings = activeReportBookings(this._bookings());
        return this.levels().map((level) => ({
            level,
            count: bookings.filter((b) => b.zones?.includes(level)).length,
        }));
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
            this.daily_data();
            this.level_counts();
            this.print();
            this._daily_chart_el();
            this._level_chart_el();
            this.timeout('update', () => this.updateCharts(), 50);
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
                this.updateDailyChart(this.daily_data());
                this.updateLevelChart(this.level_counts());
            },
            50,
        );
    }

    private levelName(id: string): string {
        const level = this._org.levelWithID([id]);
        return level?.display_name || level?.name || '';
    }

    public updateDailyChart({ dates, series }) {
        const el = this._daily_chart_el()?.nativeElement;
        if (!el) return;
        this._day_chart?.destroy();
        this._day_chart = new Chart(el, {
            type: 'line',
            data: {
                labels: dates.map((_) =>
                    format(parse(_, 'yyyy-MM-dd', Date.now()), 'dd MMM'),
                ),
                datasets: series.map((s, i) => ({
                    label: this.levelName(s.level),
                    data: s.data,
                    borderColor: LEVEL_COLORS[i % LEVEL_COLORS.length],
                    backgroundColor: LEVEL_COLORS[i % LEVEL_COLORS.length],
                    fill: false,
                    tension: 0.3,
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: this.print() ? false : undefined,
                plugins: {
                    legend: { display: true, position: 'bottom' },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    public updateLevelChart(level_counts) {
        const el = this._level_chart_el()?.nativeElement;
        if (!el) return;
        const list = level_counts
            .map((_, i) => ({
                ..._,
                color: LEVEL_COLORS[i % LEVEL_COLORS.length],
            }))
            .filter((_) => _.count > 0);
        const labels = list.map((_) => this.levelName(_.level));
        const data = list.map((_) => _.count);
        this._level_chart?.destroy();
        this._level_chart = new Chart(el, {
            type: 'pie',
            data: {
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: list.map((_) => _.color),
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
