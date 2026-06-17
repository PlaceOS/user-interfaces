import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
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
import { ReportsStateService } from '../reports-state.service';
import { ReportDesksChartsComponent } from './report-desks-charts.component';
import { ReportDesksLevelListComponent } from './report-desks-level-list.component';
import { ReportDesksOverallListComponent } from './report-desks-overall-list.component';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Total bookings',
        description:
            'All desk bookings returned for the selected dates and zones, including active, rejected, and cancelled records.',
    },
    {
        label: 'Active',
        description: 'Bookings that are not cancelled and are not rejected.',
    },
    {
        label: 'Rejected / Cancelled',
        description:
            'Rejected counts bookings with cancelled state or rejected status. Cancelled counts bookings flagged as cancelled.',
    },
    {
        label: 'Utilisation',
        description:
            'Active booking count divided by the number of available desks across the selected levels and business-day period.',
    },
    {
        label: 'Daily utilisation',
        description:
            'For each day, active desk usage is compared with available desk capacity for the selected levels.',
    },
];

@Component({
    selector: '[report-desks]',
    template: `
        <reports-options
            resource_type="desks"
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
                        {{ 'APP.CONCIERGE.REPORTS_DESKS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <div
                        class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
                    >
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                        | translate
                                }}
                            </h3>
                            <p>{{ total_count() || 0 }}</p>
                        </div>
                        <div class="flex flex-1 flex-col items-center">
                            <h3>Active</h3>
                            <p>{{ active_count() || 0 }}</p>
                        </div>
                        <div class="flex flex-1 flex-col items-center">
                            <h3>Rejected</h3>
                            <p>{{ cancelled_count() || 0 }}</p>
                        </div>
                        <div class="flex flex-1 flex-col items-center">
                            <h3>Cancelled</h3>
                            <p>{{ deleted_count() || 0 }}</p>
                        </div>
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_UTILISATION'
                                        | translate
                                }}
                            </h3>
                            <p>{{ utilisation() || 0 }}%</p>
                        </div>
                    </div>
                    <report-desks-charts
                        [print]="printing()"
                    ></report-desks-charts>
                    <report-desks-overall-list
                        [print]="printing()"
                    ></report-desks-overall-list>
                    <report-desks-levels-list
                        [print]="printing()"
                    ></report-desks-levels-list>
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

            h3 {
                font-weight: 500;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        ReportsOptionsComponent,
        ReportMetricGuideComponent,
        ReportDesksChartsComponent,
        ReportDesksLevelListComponent,
        ReportDesksOverallListComponent,
        AuthenticatedImageDirective,
    ],
})
export class ReportDesksComponent extends AsyncHandler {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    private readonly _stats = this._state.stats;
    private readonly _loading = this._state.loading;

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = computed(
        () => this._stats().total_count || this._stats().count || 0,
    );
    public readonly active_count = computed(() => this._stats().count || 0);
    public readonly cancelled_count = computed(
        () => this._stats().cancelled_count || 0,
    );
    public readonly deleted_count = computed(
        () => this._stats().deleted_count || 0,
    );
    public readonly utilisation = computed(() =>
        ((this._stats().utilisation || 0) * 100).toFixed(1),
    );
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
        this._state.setOptions({ type: 'desks' });
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
                    const id_list =
                        params.get('zones') || params.get('zone_ids');
                    const zones = id_list.split(',').filter((_) => _);
                    if (zones.length) this._state.setOptions({ zones });
                } else {
                    this._state.setOptions({ zones: [] });
                }
            }),
        );
    }

    public print() {
        this.printing.set(true);
        setTimeout(() => {
            window.print();
            this.printing.set(false);
        }, 300);
    }
}
