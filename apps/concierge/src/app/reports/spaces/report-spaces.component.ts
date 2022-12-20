import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: '[report-spaces]',
    template: `
        <reports-options></reports-options>
        <div class="relative flex-1 h-1/2 w-full overflow-auto z-0">
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container *ngIf="total_count | async; else empty_state">
                    <report-spaces-overall></report-spaces-overall>
                    <report-spaces-space-listing></report-spaces-space-listing>
                    <report-spaces-user-listing></report-spaces-user-listing>
                </ng-container>
            </ng-container>
        </div>
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
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
})
export class ReportSpacesComponent {
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly loading = this._state.loading;

    constructor(private _state: ReportsStateService) {}

    public ngOnInit() {
        this._state.setOptions({ type: 'events' });
    }
}
