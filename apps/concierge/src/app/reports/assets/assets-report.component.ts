import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { AsyncHandler, SettingsService } from '@placeos/common';

import { AssetsReportService } from './assets-report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '[report-assets]',
    template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        ></reports-options>
        <div
            class="relative flex-1 h-1/2 w-full overflow-auto print:overflow-visible print:h-auto"
        >
            <div class="w-full">
                <div class="flex items-center m-4 p-4 rounded bg-base-200">
                    <img [src]="logo.src" class="h-12" />
                    <div class="flex-1"></div>
                    <h2 class="text-2xl font-medium px-2">Assets Report</h2>
                </div>
            </div>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container *ngIf="total_count | async; else empty_state">
                    <asset-report-overall></asset-report-overall>
                    <asset-report-daily-usage
                        [print]="printing"
                    ></asset-report-daily-usage>
                    <asset-report-product-usage
                        [print]="printing"
                    ></asset-report-product-usage>
                    <asset-report-users [print]="printing"></asset-report-users>
                    <asset-report-expired-items
                        [print]="printing"
                    ></asset-report-expired-items>
                </ng-container>
            </ng-container>
        </div>
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
export class AssetsReportComponent extends AsyncHandler {
    public printing = false;
    public readonly total_count = this._state.stats$.pipe(
        map((i) => i.total_booked_items || 0),
    );
    public readonly loading = this._state.loading$;

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public get logo() {
        return this._settings.get('app.logo_light') || {};
    }

    constructor(
        private _state: AssetsReportService,
        private _settings: SettingsService,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('start')) {
                    this._state.setOptions({ start: +params.get('start') });
                }
                if (params.has('end')) {
                    this._state.setOptions({ end: +params.get('end') });
                }
                if (params.has('zones')) {
                    const zones = params.get('zones').split(',');
                    if (zones.length) this._state.setOptions({ zones });
                }
            }),
        );
    }
}
