import { Component } from '@angular/core';

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
                        <date-range-field
                            class="rounded bg-base-100"
                        ></date-range-field>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript bg-base-100"
                        >
                            <mat-select placeholder="All Rooms">
                                <mat-option>All Rooms</mat-option>
                                <mat-option value="in_use">In Use</mat-option>
                                <mat-option value="available"
                                    >Available</mat-option
                                >
                                <mat-option value="issues"
                                    >Has Issues</mat-option
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
export class AnalyticsComponent {}
