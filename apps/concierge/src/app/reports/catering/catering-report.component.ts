import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'catering-report',
    template: `
        <ng-container *ngIf="!(loading | async); else load_state">
            <div
                class="h-full w-full"
                *ngIf="total_count | async; else empty_state"
            >
                <catering-report-overall></catering-report-overall>
                <catering-report-orders></catering-report-orders>
                <catering-report-items></catering-report-items>
            </div>
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
    styles: [``],
})
export class CateringReportComponent implements OnInit {
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly loading = this._state.loading;

    constructor(private _state: ReportsStateService) {}

    public ngOnInit() {
        this._state.setOptions({ type: 'events' });
    }
}
