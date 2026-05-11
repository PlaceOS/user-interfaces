import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import { VisitorReportDailyUsageComponent } from './visitor-report-daily-usage.component';
import { VisitorReportListComponent } from './visitor-report-list.component';
import { VisitorReportOverallComponent } from './visitor-report-overall.component';
import { VisitorsReportService } from './visitors-report.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description:
            'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total visitors',
        description:
            'Visitor bookings returned for the selected dates and zones.',
    },
    {
        label: 'Average length',
        description:
            'Sum of visitor booking durations divided by the number of visitor bookings.',
    },
    {
        label: 'Daily unique visitors',
        description:
            'For each day, unique visitors are counted by asset ID and hosts are counted by user email.',
    },
    {
        label: 'Booking count',
        description:
            'Total visitor bookings recorded for each day in the report.',
    },
];

@Component({
    selector: '[visitors-report]',
    template: `
        <reports-options
            (printing)="printing.set($event)"
            [loading]="loading()"
            [has_data]="has_data()"
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
                        {{
                            'APP.CONCIERGE.REPORTS_VISITORS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide [items]="metric_guide" />
                    <visitor-report-overall></visitor-report-overall>
                    <visitor-report-daily-usage
                        [print]="printing()"
                    ></visitor-report-daily-usage>
                    <visitor-report-list></visitor-report-list>
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
        ReportsOptionsComponent,
        ReportMetricGuideComponent,
        AuthenticatedImageDirective,
        MatProgressSpinnerModule,
        VisitorReportOverallComponent,
        VisitorReportDailyUsageComponent,
        VisitorReportListComponent,
        TranslatePipe,
    ],
})
export class VisitorsReportComponent extends AsyncHandler implements OnInit {
    private _state = inject(VisitorsReportService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = toSignal(
        this._state.bookings$.pipe(map((i) => i.length || 0)),
        { initialValue: 0 },
    );
    public readonly loading = toSignal(this._state.loading$, {
        initialValue: false,
    });
    public readonly has_data = computed(() => !!this.total_count());

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public readonly logo = toSignal(
        this._org.active_building.pipe(
            debounceTime(500),
            map(
                () =>
                    (this._settings.theme === 'dark'
                        ? this._settings.get('app.logo_dark')
                        : this._settings.get('app.logo_light')) || {},
            ),
        ),
        { initialValue: {} },
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
