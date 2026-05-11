import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, map } from 'rxjs/operators';

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
import { ReportsOptionsComponent } from '../reports-options.component';
import { ReportsStateService } from '../reports-state.service';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportSpacesChartsComponent } from './report-spaces-charts.component';
import { ReportSpacesOverallListComponent } from './report-spaces-overall-list.component';
import { ReportSpacesOverallComponent } from './report-spaces-overall.component';
import { ReportSpacesSpaceListingComponent } from './report-spaces-space-listing.component';
import { ReportSpacesUserListingComponent } from './report-spaces-user-listing.component';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Business days',
        description:
            'Number of business days in the selected reporting range.',
    },
    {
        label: 'Total bookings',
        description:
            'All room bookings returned for the selected dates and zones, including active, cancelled, and deleted records.',
    },
    {
        label: 'Active / Cancelled / Deleted',
        description:
            'Active excludes deleted and cancelled events. Cancelled uses events with cancelled type. Deleted uses events flagged as deleted.',
    },
    {
        label: 'Average length',
        description:
            'Sum of active booking durations divided by the number of active bookings.',
    },
    {
        label: 'Attendance and no-shows',
        description:
            'Attendance uses the maximum recorded people count on each booking. No-shows are bookings with no recorded people count.',
    },
];

@Component({
    selector: '[report-spaces]',
    template: `
        <reports-options
            resource_type="events"
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
                <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                    <img auth class="h-12" [source]="logo()?.src || logo()" />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_ROOMS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <placeos-report-metric-guide [items]="metric_guide" />
                    <report-spaces-overall></report-spaces-overall>
                    <report-spaces-charts
                        [print]="printing()"
                    ></report-spaces-charts>
                    <report-spaces-overall-list
                        [print]="printing()"
                    ></report-spaces-overall-list>
                    <report-spaces-space-listing
                        [print]="printing()"
                    ></report-spaces-space-listing>
                    <report-spaces-user-listing
                        [print]="printing()"
                    ></report-spaces-user-listing>
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
        ReportsOptionsComponent,
        ReportMetricGuideComponent,
        AuthenticatedImageDirective,
        ReportSpacesChartsComponent,
        ReportSpacesOverallComponent,
        ReportSpacesOverallListComponent,
        ReportSpacesSpaceListingComponent,
        ReportSpacesUserListingComponent,
    ],
})
export class ReportSpacesComponent extends AsyncHandler implements OnInit {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly total_count = toSignal(
        this._state.stats.pipe(map((i) => i.total_count || i.count || 0)),
        { initialValue: 0 },
    );
    public readonly loading = toSignal(this._state.loading, {
        initialValue: '',
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
        this._state.setOptions({ type: 'events' });
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
                } else this._state.setOptions({ zones: [] });
            }),
        );
    }
}
