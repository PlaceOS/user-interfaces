import { Component } from '@angular/core';
import { formatDuration } from 'date-fns';
import { map } from 'rxjs/operators';

import { ReportsStateService } from './reports-state.service';

@Component({
    selector: '[report-spaces]',
    template: `
        <ng-container *ngIf="!(loading | async); else load_state">
            <ng-container *ngIf="total_count | async; else empty_state">
                <div
                    class="m-4 p-4 rounded bg-white shadow flex justify-center items-center space-x-2"
                >
                    <div class="flex flex-col items-center flex-1">
                        <h3>Total Bookings</h3>
                        <p>{{ (total_count | async) || 0 }}</p>
                    </div>
                    <div class="flex flex-col items-center flex-1">
                        <h3>Average Bookings Length</h3>
                        <p>{{ (avg_length | async) || 'None' }}</p>
                    </div>
                </div>
                <div
                    class="m-4 p-4 rounded flex justify-center items-center space-x-4 text-center"
                >
                    <div
                        class="flex flex-col items-center justify-center bg-primary text-white shadow rounded p-4 w-48 h-48"
                    >
                        <h3>Overall Efficiency</h3>
                        <p>{{ (efficiency | async) || 0 }}%</p>
                    </div>
                    <div
                        class="flex flex-col items-center bg-primary text-white border-4 border-primary shadow overflow-hidden rounded pb-4 w-48 h-48"
                    >
                        <div class="flex divide-x-4 divide-primary mb-4">
                            <div
                                class="flex flex-col items-center justify-center flex-1 bg-gray-200 text-black"
                            >
                                <h3>Total Attendees</h3>
                                <p>{{ (total_users | async) || 0 }}</p>
                            </div>
                            <div
                                class="flex flex-col items-center justify-center flex-1 bg-gray-200 text-black"
                            >
                                <h3>Total Capacity</h3>
                                <p>{{ (total_capacity | async) || 0 }}</p>
                            </div>
                        </div>
                        <h3>Occupancy</h3>
                        <p>{{ (occupancy | async) || 0 }}%</p>
                    </div>
                    <div
                        class="flex flex-col items-center justify-center bg-primary text-white rounded p-4 w-48 h-48"
                    >
                        <h3>Utilisation</h3>
                        <p>{{ (utilisation | async) || 0 }}%</p>
                    </div>
                </div>
            </ng-container>
        </ng-container>
        <ng-template #load_state>
            <div class="h-full w-full flex flex-col items-center p-8">
                <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                <p simple>Loading report data...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="h-full w-full flex flex-col items-center p-8">
                <p simple>
                    Select levels and time period to generate a report.
                </p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            h3 {
                font-weight: 500;
            }

            p:not([simple]) {
                font-size: 1.75rem;
            }
        `,
    ],
})
export class ReportSpacesComponent {
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly avg_length = this._state.stats.pipe(
        map((i) => formatDuration({ minutes: i.avg_length || 0 }))
    );
    public readonly efficiency = this._state.stats.pipe(
        map((i) => ((i.efficiency || 0) * 100).toFixed(1))
    );
    public readonly total_users = this._state.stats.pipe(
        map((i) => i.total_users || 0)
    );
    public readonly total_capacity = this._state.stats.pipe(
        map((i) => i.total_capacity || 0)
    );
    public readonly occupancy = this._state.stats.pipe(
        map((i) => ((i.occupancy || 0) * 100).toFixed(1))
    );
    public readonly utilisation = this._state.stats.pipe(
        map((i) => ((i.utilisation || 0) * 100).toFixed(1))
    );
    public readonly loading = this._state.loading;

    constructor(private _state: ReportsStateService) {}

    public ngOnInit() {
        this._state.setOptions({ type: 'events' });
    }
}
