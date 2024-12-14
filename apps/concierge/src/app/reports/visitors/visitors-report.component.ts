import { Component, OnInit } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { VisitorsReportService } from './visitors-report.service';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: '[visitors-report]',
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
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="text-2xl font-medium px-2">
                        {{
                            'APP.CONCIERGE.REPORTS_VISITORS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container *ngIf="total_count | async; else empty_state">
                    <visitor-report-overall></visitor-report-overall>
                    <visitor-report-daily-usage
                        [print]="printing"
                    ></visitor-report-daily-usage>
                    <visitor-report-list></visitor-report-list>
                </ng-container>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div class="h-full w-full flex flex-col items-center p-8">
                <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                <p class="opacity-30">
                    {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                class="h-full w-full flex flex-col items-center p-8 screen-only"
            >
                <p class="opacity-30">
                    {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
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
export class VisitorsReportComponent extends AsyncHandler implements OnInit {
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
                (this._settings.get('theme') === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    constructor(
        private _state: VisitorsReportService,
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _org: OrganisationService,
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
                if (params.has('zones') || params.has('zone_ids')) {
                    const zones = (
                        params.get('zones') || params.get('zone_ids')
                    ).split(',');
                    if (zones.length) this._state.setOptions({ zones });
                }
            }),
        );
    }
}
