import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    TranslatePipe,
} from '@placeos/components';
import { debounceTime, map } from 'rxjs/operators';

import { ReportsOptionsComponent } from '../reports-options.component';
import { ParkingReportChartsComponent } from './parking-report-charts.component';
import { ParkingReportDailyUsageComponent } from './parking-report-daily-usage.component';
import { ParkingReportListComponent } from './parking-report-list.component';
import { ParkingReportOverallComponent } from './parking-report-overall.component';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: '[parking-report]',
    template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_PARKING_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <parking-report-overall></parking-report-overall>
                    <parking-report-charts></parking-report-charts>
                    <parking-report-daily-usage
                        [print]="printing"
                    ></parking-report-daily-usage>
                    <parking-report-list
                        [print]="printing"
                    ></parking-report-list>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
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
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        AuthenticatedImageDirective,
        ParkingReportOverallComponent,
        ParkingReportDailyUsageComponent,
        ParkingReportChartsComponent,
        ParkingReportListComponent,
        ReportsOptionsComponent,
    ],
})
export class ParkingReportComponent extends AsyncHandler implements OnInit {
    private _state = inject(ParkingReportService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public printing = false;
    public readonly total_count = this._state.bookings$.pipe(
        map((i) => i.length || 0),
    );
    public readonly loading = this._state.loading$;

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

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
                if (params.has('zones') || params.has('zone_ids')) {
                    const zones = (
                        params.get('zones') || params.get('zone_ids')
                    ).split(',');
                    if (zones.length) this._state.setOptions({ zones });
                } else this._state.setOptions({ zones: [] });
            }),
        );
    }
}
