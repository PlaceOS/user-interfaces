import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
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
import { CateringReportItemsComponent } from './catering-report-items.component';
import { CateringReportOrdersComponent } from './catering-report-orders.component';
import { CateringReportOverallComponent } from './catering-report-overall.component';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Orders',
        description:
            'Catering orders delivered within the selected date range, excluding orders with cancelled status.',
    },
    {
        label: 'Unique items',
        description:
            'Number of distinct catering item IDs after combining matching items across all orders.',
    },
    {
        label: 'Items',
        description:
            'Sum of item counts across every non-cancelled order in the report.',
    },
    {
        label: 'Total cost',
        description:
            'Sum of total cost for all non-cancelled orders, displayed in the organisation currency.',
    },
    {
        label: 'Average order cost',
        description:
            'Total cost divided by the number of non-cancelled orders.',
    },
];

@Component({
    selector: 'catering-report',
    template: `
        <reports-options
            resource_type="catering"
            (printing)="printing.set($event)"
            [loading]="!!loading()"
            [has_data]="has_data()"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div
                    class="bg-base-200 m-4 flex items-center overflow-hidden rounded-sm p-4"
                >
                    <img auth class="h-12" [source]="logo()?.src || logo()" />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_CATERING_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <catering-report-overall></catering-report-overall>
                    <catering-report-orders
                        [print]="printing()"
                    ></catering-report-orders>
                    <catering-report-items
                        [print]="printing()"
                    ></catering-report-items>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        ReportsOptionsComponent,
        ReportMetricGuideComponent,
        CateringReportItemsComponent,
        CateringReportOrdersComponent,
        CateringReportOverallComponent,
        AuthenticatedImageDirective,
    ],
})
export class CateringReportComponent extends AsyncHandler {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    private readonly _building = this._org.active_building;
    private readonly _stats = this._state.stats;

    public readonly total_count = computed(() => this._stats()?.count || 0);
    public readonly loading = this._state.loading;
    public readonly has_data = computed(() => !!this.total_count());

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

    public get using_bookings() {
        return this._settings.get('app.catering.use_bookings') == true;
    }

    constructor() {
        super();
        effect(() => {
            this._building();
            this._state.setOptions({
                type: this.using_bookings ? 'catering' : 'events',
            });
        });

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
                    const zones = id_list.split(',');
                    if (zones.length) this._state.setOptions({ zones });
                } else {
                    this._state.setOptions({ zones: [] });
                }
            }),
        );
    }
}
