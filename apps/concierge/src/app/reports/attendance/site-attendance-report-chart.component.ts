import {
    Component,
    effect,
    ElementRef,
    inject,
    input,
    OnDestroy,
    viewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AsyncHandler } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
} from '@placeos/components';
import {
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js';
import { format, parse } from 'date-fns';
import { SiteAttendanceDailyRow } from './site-attendance-report.service';

const SERIES = [
    { key: 'events', label: 'Rooms', color: 'rgb(59, 130, 246)' },
    { key: 'desks', label: 'Desk bookings', color: 'rgb(16, 185, 129)' },
    { key: 'parking', label: 'Parking', color: 'rgb(236, 72, 153)' },
    { key: 'visitors', label: 'Visitors', color: 'rgb(245, 158, 11)' },
    { key: 'total', label: 'Total attendance', color: 'rgb(139, 92, 246)' },
] as const;

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
);

@Component({
    selector: 'site-attendance-report-chart-canvas',
    template: `<canvas #dailyChart></canvas>`,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }

            canvas {
                width: 100% !important;
            }
        `,
    ],
})
export class SiteAttendanceReportChartCanvasComponent
    extends AsyncHandler
    implements OnDestroy
{
    private _chart: Chart | null = null;
    private _chart_el = viewChild<ElementRef<HTMLCanvasElement>>('dailyChart');

    public readonly daily_attendance = input<SiteAttendanceDailyRow[]>([]);
    public readonly show_parking = input(false);

    constructor() {
        super();
        effect(() => {
            this.daily_attendance();
            this.show_parking();
            this._chart_el();
            this.updateChart();
        });
    }

    public override ngOnDestroy() {
        super.ngOnDestroy();
        this._chart?.destroy();
    }

    public updateChart() {
        this.timeout('update_chart', () => this.renderChart(), 50);
    }

    private renderChart() {
        const el = this._chart_el()?.nativeElement;
        if (!el) return;
        const rows = this.daily_attendance();
        const series_list = SERIES.filter(
            (series) => series.key !== 'parking' || this.show_parking(),
        );
        this._chart?.destroy();
        this._chart = new Chart(el, {
            type: 'line',
            data: {
                labels: rows.map((row) =>
                    format(parse(row.date, 'yyyy-MM-dd', Date.now()), 'dd MMM'),
                ),
                datasets: series_list.map((series) => ({
                    label: series.label,
                    data: rows.map((row) => row[series.key]),
                    borderColor: series.color,
                    backgroundColor: series.color,
                    fill: false,
                    tension: 0.3,
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: true, position: 'bottom' },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { precision: 0 },
                    },
                },
            },
        });
    }
}

@Component({
    selector: 'site-attendance-report-chart-modal',
    template: `
        <fullscreen-modal-shell
            heading="Daily attendance"
            [hide_confirm]="true"
            [full_width]="true"
        >
            <div
                class="border-base-200 bg-base-100 h-[calc(100vh-8rem)] rounded-sm border"
            >
                <div
                    class="border-base-200 border-b px-4 py-3 text-lg font-semibold"
                >
                    Daily attendance
                </div>
                <div class="h-[calc(100vh-12rem)] p-4">
                    <site-attendance-report-chart-canvas
                        [daily_attendance]="data.daily_attendance"
                        [show_parking]="data.show_parking"
                    />
                </div>
            </div>
        </fullscreen-modal-shell>
    `,
    imports: [
        FullscreenModalShellComponent,
        SiteAttendanceReportChartCanvasComponent,
    ],
})
export class SiteAttendanceReportChartModalComponent {
    public readonly data = inject<{
        daily_attendance: SiteAttendanceDailyRow[];
        show_parking: boolean;
    }>(MAT_DIALOG_DATA);
}

@Component({
    selector: 'site-attendance-report-chart',
    template: `
        <div
            class="border-base-200 bg-base-100 h-80 rounded-sm border"
            (window:resize)="chart.updateChart()"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-3">
                <h3 class="text-lg font-semibold">Daily attendance</h3>
                <div class="flex-1"></div>
                <button
                    icon
                    type="button"
                    aria-label="Maximise daily attendance graph"
                    (click)="openModal()"
                >
                    <icon>open_in_full</icon>
                </button>
            </div>
            <div class="h-64 p-4">
                <site-attendance-report-chart-canvas
                    #chart
                    [daily_attendance]="daily_attendance()"
                    [show_parking]="show_parking()"
                />
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
    imports: [IconComponent, SiteAttendanceReportChartCanvasComponent],
})
export class SiteAttendanceReportChartComponent {
    private _dialog = inject(MatDialog);

    public readonly daily_attendance = input<SiteAttendanceDailyRow[]>([]);
    public readonly show_parking = input(false);

    public openModal() {
        this._dialog.open(SiteAttendanceReportChartModalComponent, {
            data: {
                daily_attendance: this.daily_attendance(),
                show_parking: this.show_parking(),
            },
            panelClass: 'fullscreen-dialog',
            width: '100vw',
            height: '100vh',
        });
    }
}
