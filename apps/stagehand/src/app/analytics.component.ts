import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, randomInt } from '@placeos/common';
import { addDays, addWeeks, endOfDay, format, startOfDay } from 'date-fns';

import Chart from 'chart.js/auto';

@Component({
    selector: 'stagehand-analytics',
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />
            <div class="flex flex-1 flex-col">
                <header
                    class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Analytics</h1>
                    <button btn matRipple>Generate report</button>
                </header>
                <main class="w-full flex-1 overflow-auto">
                    <div class="flex items-center space-x-4 p-4">
                        <date-range-field class="rounded bg-base-100">
                            <input
                                #startDate
                                [ngModel]="start_date"
                                (ngModelChange)="
                                    $event ? setStartDate($event) : ''
                                " />
                            <input
                                #endDate
                                [ngModel]="end_date"
                                (ngModelChange)="
                                    $event ? setEndDate($event) : ''
                                "
                        /></date-range-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript bg-base-100"
                        >
                            <mat-select placeholder="All Spaces">
                                <mat-option>All Spaces</mat-option>
                                <mat-option value="lecture"
                                    >Lecture Theatres</mat-option
                                >
                                <mat-option value="seminar"
                                    >Seminar Rooms</mat-option
                                >
                                <mat-option value="meeting"
                                    >Meeting Rooms</mat-option
                                >
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <div
                            class="flex items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex flex-1 flex-col">
                                <h3 class="text-lg font-medium">
                                    Average Occupancy
                                </h3>
                                <div class="text-4xl font-bold">76%</div>
                            </div>
                            <icon
                                class="text-4xl text-info"
                                className="material-symbols-outlined"
                                >people</icon
                            >
                        </div>
                        <div
                            class="flex items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex flex-1 flex-col">
                                <h3 class="text-lg font-medium">
                                    Schedule Adherence
                                </h3>
                                <div class="text-4xl font-bold">85%</div>
                            </div>
                            <icon
                                class="text-4xl text-success"
                                className="material-symbols-outlined"
                                >event</icon
                            >
                        </div>
                        <div
                            class="flex items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex flex-1 flex-col">
                                <h3 class="text-lg font-medium">
                                    Energy Efficiency
                                </h3>
                                <div class="text-4xl font-bold">92%</div>
                            </div>
                            <icon
                                class="text-4xl text-warning"
                                className="material-symbols-outlined"
                                >bolt</icon
                            >
                        </div>
                        <div
                            class="flex items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex flex-1 flex-col">
                                <h3 class="text-lg font-medium">
                                    AV System Usage
                                </h3>
                                <div class="text-4xl font-bold">68%</div>
                            </div>
                            <icon
                                class="text-4xl text-info"
                                className="material-symbols-outlined"
                                >live_tv</icon
                            >
                        </div>
                    </div>
                    <div
                        class="mx-4 flex max-w-full flex-col rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                    >
                        <h3 class="text-xl font-medium">
                            Space Utilization vs Energy Usage
                        </h3>
                        <div class="mb-4 text-sm">
                            Comparing scheduled occupancy, actual occupancy, and
                            energy consumption
                        </div>
                        <div class="flex">
                            <div class="h-48 w-px flex-1">
                                <canvas #line_graph></canvas>
                            </div>
                        </div>
                    </div>
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-2"
                    >
                        <div
                            class="flex flex-col rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <h3 class="text-xl font-medium">
                                AV System Usage Distribution
                            </h3>
                            <div class="mb-4 text-sm">
                                Breakdown of AV input sources used
                            </div>
                            <div class="flex">
                                <div class="h-48 w-px flex-1">
                                    <canvas #distro_graph></canvas>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <h3 class="text-xl font-medium">
                                Room Utilization Analysis
                            </h3>
                            <div class="mb-4 text-sm">
                                Comparing scheduled vs actual room usage
                            </div>
                            <div class="flex">
                                <div class="h-48 w-px flex-1">
                                    <canvas #usage_graph></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mx-4 mb-4 flex flex-col rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                    >
                        <h3 class="text-xl font-medium">
                            Space Utilisation Insights
                        </h3>
                        <div class="mb-4 text-sm">
                            Key findings from the selected date range
                        </div>
                        <ul class="list-disc pl-6">
                            <li>
                                Most utilized room: LT1 (92% occupancy rate)
                            </li>
                            <li>
                                15% of scheduled classes had less than 50%
                                attendance
                            </li>
                            <li>Peak usage hours: 10:00 AM - 2:00 PM</li>
                            <li>
                                Energy savings opportunity: 25% in underutilized
                                spaces
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AnalyticsComponent extends AsyncHandler implements OnInit {
    public start_date = addWeeks(startOfDay(Date.now()), -1).valueOf();
    public end_date = endOfDay(Date.now()).valueOf();

    public readonly setStartDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { start: date },
            queryParamsHandling: 'merge',
        });
    };

    public readonly setEndDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { end: endOfDay(date).valueOf() },
            queryParamsHandling: 'merge',
        });
    };

    @ViewChild('line_graph', { static: true })
    private _line_graph_el: ElementRef<HTMLCanvasElement>;
    private _line_graph: Chart;

    @ViewChild('distro_graph', { static: true })
    private _distro_graph_el: ElementRef<HTMLCanvasElement>;
    private _distro_graph: Chart;

    @ViewChild('usage_graph', { static: true })
    private _usage_graph_el: ElementRef<HTMLCanvasElement>;
    private _usage_graph: Chart;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('start')) this.start_date = +params.get('start');
                if (params.has('end')) this.end_date = +params.get('end');
            }),
        );
        const data = new Array(7).fill(0).map((_, idx) => {
            const scheduled = randomInt(1000) / 10;
            return {
                date: format(addDays(Date.now(), 7 - idx), 'dd MMM'),
                scheduled: scheduled,
                actual: scheduled + randomInt(100) / 10,
                usage: scheduled + randomInt(50, -50) / 10,
            };
        });
        this._line_graph = new Chart(this._line_graph_el.nativeElement, {
            type: 'line',
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
            data: {
                labels: data.map((row) => row.date),
                datasets: [
                    {
                        label: 'Scheduled Occupancy',
                        data: data.map((row) => row.scheduled),
                    },
                    {
                        label: 'Actual Occupancy',
                        data: data.map((row) => row.actual),
                    },
                    {
                        label: 'Energy Usage (kWh)',
                        data: data.map((row) => row.usage),
                    },
                ],
            },
        });
        const room_names = [
            'Lecture Theatre 1',
            'Seminar Room 1',
            'Meeting Room 1',
            'Lecture Theatre 2',
            'Seminar Room 2',
            'Meeting Room 2',
            'Meeting Room 3',
        ];
        this._distro_graph = new Chart(this._distro_graph_el.nativeElement, {
            type: 'doughnut',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                },
            },
            data: {
                labels: data.map((_, idx) => room_names[idx]),
                datasets: [
                    {
                        data: data.map((row) => row.scheduled),
                    },
                ],
            },
        });
        this._usage_graph = new Chart(this._usage_graph_el.nativeElement, {
            type: 'bar',
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
            data: {
                labels: data.map((_, idx) => room_names[idx]),
                datasets: [
                    {
                        label: 'Scheduled Occupancy',
                        data: data.map((row) => row.scheduled),
                    },
                    {
                        label: 'Actual Occupancy',
                        data: data.map((row) => row.actual),
                    },
                ],
            },
        });
    }
}
