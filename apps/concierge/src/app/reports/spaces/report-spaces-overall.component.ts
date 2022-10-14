import { Component } from '@angular/core';
import { formatDuration } from 'date-fns';
import { map } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall',
    template: `
    <div
            class="m-4 p-4 rounded bg-white dark:bg-neutral-700 shadow flex justify-center items-center space-x-2"
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
            class="m-4 p-4 rounded bg-white dark:bg-neutral-700 shadow flex justify-center items-center space-x-2"
        >
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>Overall Efficiency</h3>
                <p>{{ (efficiency | async) || 0 }}%</p>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>Occupancy</h3>
                <p>{{ (occupancy | async) || 0 }}%</p>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>Total Attendees</h3>
                <p>{{ (total_users | async) || 0 }}</p>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>Total Capacity</h3>
                <p>{{ (total_capacity | async) || 0 }}</p>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h3>Utilisation</h3>
                <p>{{ (utilisation | async) || 0 }}%</p>
            </div>
        </div>`,
    styles: [`
        h3 {
            font-weight: 500;
        }

        p:not([simple]) {
            font-size: 1.75rem;
        }
    `],
})
export class ReportSpacesOverallComponent {
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

    constructor(private _state: ReportsStateService) {}
}
