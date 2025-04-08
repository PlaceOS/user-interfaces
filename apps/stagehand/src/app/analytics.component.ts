import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { addWeeks, endOfDay, startOfDay } from 'date-fns';

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
                        class="mx-4 flex h-64 items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                    ></div>
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-2"
                    >
                        <div
                            class="flex h-48 items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        ></div>
                        <div
                            class="flex h-48 items-center rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        ></div>
                    </div>
                    <div
                        class="mx-4 mb-4 flex flex-col rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                    >
                        <h3 class="text-2xl font-medium">
                            Space Utilisation Insights
                        </h3>
                        <div class="mb-4">
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
    }
}
