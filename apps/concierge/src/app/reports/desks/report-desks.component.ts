import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: '[report-desks]',
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
                        <h3>Utilisation</h3>
                        <p>{{ (utilisation | async) || 0 }}%</p>
                    </div>
                </div>
                <report-desks-overall-list></report-desks-overall-list>
                <report-desks-levels-list></report-desks-levels-list>
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
export class ReportDesksComponent {
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly utilisation = this._state.stats.pipe(
        map((i) => ((i.utilisation || 0) * 100).toFixed(1))
    );
    public readonly loading = this._state.loading;

    constructor(private _state: ReportsStateService) {}

    public ngOnInit() {
        this._state.setOptions({ type: 'desks' });
    }
}
