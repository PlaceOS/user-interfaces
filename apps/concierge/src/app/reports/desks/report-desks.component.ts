import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: '[report-desks]',
    template: `
        <reports-options (printing)="printing = $event"></reports-options>
        <div
            class="relative flex-1 h-1/2 w-full overflow-auto print:overflow-visible print:h-auto"
        >
            <div class="w-full">
                <div class="flex items-center m-4 p-4 rounded bg-base-200">
                    <img [src]="logo.src" class="h-12" />
                    <div class="flex-1"></div>
                    <h2 class="text-2xl font-medium px-2">Desks Report</h2>
                </div>
            </div>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container *ngIf="total_count | async; else empty_state">
                    <div
                        class="m-4 p-4 rounded bg-base-100 border border-base-200 flex justify-center items-center space-x-2"
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
                    <report-desks-charts
                        [print]="printing"
                    ></report-desks-charts>
                    <report-desks-overall-list
                        [print]="printing"
                    ></report-desks-overall-list>
                    <report-desks-levels-list
                        [print]="printing"
                    ></report-desks-levels-list>
                </ng-container>
            </ng-container>
            <ng-template #load_state>
                <div class="h-full w-full flex flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">Loading report data...</p>
                </div>
            </ng-template>
            <ng-template #empty_state>
                <div
                    class="h-full w-full flex flex-col items-center p-8 screen-only"
                >
                    <p class="opacity-30">
                        Select levels and time period to generate a report.
                    </p>
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            h3 {
                font-weight: 500;
            }
        `,
    ],
})
export class ReportDesksComponent {
    public printing = false;
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0)
    );
    public readonly utilisation = this._state.stats.pipe(
        map((i) => ((i.utilisation || 0) * 100).toFixed(1))
    );
    public readonly loading = this._state.loading;

    public get logo() {
        return this._settings.get('app.logo_light') || {};
    }

    constructor(
        private _state: ReportsStateService,
        private _settings: SettingsService
    ) {}

    public print() {
        this.printing = true;
        setTimeout(() => {
            window.print();
            this.printing = false;
        }, 300);
    }

    public ngOnInit() {
        this._state.setOptions({ type: 'desks' });
    }
}
