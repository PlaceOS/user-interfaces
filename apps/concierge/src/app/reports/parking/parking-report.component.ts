import { Component, computed, inject, signal } from '@angular/core';
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

import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { ParkingReportChartsComponent } from './parking-report-charts.component';
import { ParkingReportDailyUsageComponent } from './parking-report-daily-usage.component';
import { ParkingReportListComponent } from './parking-report-list.component';
import { ParkingReportOverallComponent } from './parking-report-overall.component';
import { ParkingReportService } from './parking-report.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description: 'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total reservations',
        description:
            'All parking bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active / Rejected / Cancelled',
        description:
            'Active excludes cancelled and rejected bookings. Rejected uses bookings with cancelled or rejected status. Cancelled uses bookings flagged as cancelled.',
    },
    {
        label: 'Average length',
        description:
            'Sum of active reservation durations divided by the number of active reservations.',
    },
    {
        label: 'Daily usage',
        description:
            'Counts unique parking spaces, unique hosts, active reservations, cancellations, deletions, and total reservations for each day.',
    },
];

@Component({
    selector: '[parking-report]',
    template: `
        <reports-options
            resource_type="parking"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="!!total_count()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                    <img auth class="h-12" [source]="logo()?.src || logo()" />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_PARKING_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <parking-report-overall></parking-report-overall>
                    <parking-report-charts></parking-report-charts>
                    <parking-report-list
                        [print]="printing()"
                    ></parking-report-list>
                    <parking-report-daily-usage
                        [print]="printing()"
                    ></parking-report-daily-usage>
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
        MatProgressSpinnerModule,
        TranslatePipe,
        AuthenticatedImageDirective,
        ReportMetricGuideComponent,
        ParkingReportOverallComponent,
        ParkingReportDailyUsageComponent,
        ParkingReportChartsComponent,
        ParkingReportListComponent,
        ReportsOptionsComponent,
    ],
})
export class ParkingReportComponent extends AsyncHandler {
    private _state = inject(ParkingReportService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private readonly _bookings = this._state.bookings;
    private readonly _loading = this._state.loading;

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = computed(() => this._bookings().length || 0);
    public readonly loading = computed(() => this._loading());

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public readonly logo = computed(() => {
        this._org.active_building();
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    });

    constructor() {
        super();
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
                } else {
                    this._state.setOptions({ zones: [] });
                }
            }),
        );
    }
}
