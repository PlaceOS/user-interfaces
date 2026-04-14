import { Component, computed, effect, inject, signal } from '@angular/core';
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
import { debounceTime } from 'rxjs/operators';
import { ReportsOptionsComponent } from '../reports-options.component';
import { LockersReportChartsComponent } from './lockers-report-charts.component';
import { LockersReportDailyUsageComponent } from './lockers-report-daily-usage.component';
import { LockersReportListComponent } from './lockers-report-list.component';
import { LockersReportOverallComponent } from './lockers-report-overall.component';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: '[lockers-report]',
    template: `
        <reports-options
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
                        {{ 'APP.CONCIERGE.REPORTS_LOCKERS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (total_count()) {
                    <lockers-report-overall></lockers-report-overall>
                    <lockers-report-charts></lockers-report-charts>
                    <lockers-report-daily-usage
                        [print]="printing()"
                    ></lockers-report-daily-usage>
                    <lockers-report-list
                        [print]="printing()"
                    ></lockers-report-list>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-60">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-60">
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
        MatProgressSpinnerModule,
        LockersReportChartsComponent,
        LockersReportOverallComponent,
        LockersReportDailyUsageComponent,
        LockersReportListComponent,
        AuthenticatedImageDirective,
        ReportsOptionsComponent,
    ],
})
export class LockersReportComponent extends AsyncHandler {
    private _state = inject(LockersReportService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private readonly _bookings = toSignal(this._state.bookings$, {
        initialValue: [],
    });
    private readonly _loading = toSignal(this._state.loading$, {
        initialValue: '',
    });
    private readonly _active_building = toSignal(
        this._org.active_building.pipe(debounceTime(500)),
    );
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    public readonly printing = signal(false);
    public readonly total_count = computed(() => this._bookings().length || 0);
    public readonly loading = computed(() => this._loading());

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();

    public readonly logo = computed(() => {
        this._active_building();
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    });

    constructor() {
        super();
        effect(() => {
            const params = this._query_params();
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
        });
    }
}
