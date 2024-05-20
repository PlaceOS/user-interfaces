import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: '[report-spaces]',
    template: `
        <reports-options></reports-options>
        <div
            class="relative flex-1 h-1/2 w-full overflow-auto print:overflow-visible print:h-auto"
            printable
        >
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container *ngIf="total_count | async; else empty_state">
                    <report-spaces-overall></report-spaces-overall>
                    <report-spaces-space-listing
                        [print]="printing"
                    ></report-spaces-space-listing>
                    <report-spaces-user-listing
                        [print]="printing"
                    ></report-spaces-user-listing>
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
            <div
                class="h-full w-full flex flex-col items-center p-8 screen-only"
            >
                <p simple>
                    Select levels and time period to generate a report.
                </p>
            </div>
        </ng-template>
        <button
            icon
            matRipple
            class="absolute top-24 left-4 bg-secondary text-secondary-content border border-base-200 shadow z-20 print:hidden"
            (click)="print()"
            *ngIf="total_count | async"
        >
            <app-icon>print</app-icon>
        </button>
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
    public printing = false;
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly loading = this._state.loading;

    constructor(private _state: ReportsStateService) {}

    public ngOnInit() {
        this._state.setOptions({ type: 'events' });
    }

    public print() {
        this.printing = true;
        setTimeout(() => {
            window.print();
            this.printing = false;
        }, 300);
    }
}
