import { Component, inject } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: '[report-desks]',
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
                        {{ 'APP.CONCIERGE.REPORTS_DESKS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <div
                        class="m-4 flex items-center justify-center space-x-2 rounded border border-base-200 bg-base-100 p-4"
                    >
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                        | translate
                                }}
                            </h3>
                            <p>{{ (total_count | async) || 0 }}</p>
                        </div>
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_UTILISATION'
                                        | translate
                                }}
                            </h3>
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
    standalone: false,
})
export class ReportDesksComponent extends AsyncHandler {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public printing = false;
    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0),
    );
    public readonly utilisation = this._state.stats.pipe(
        map((i) => ((i.utilisation || 0) * 100).toFixed(1)),
    );
    public readonly loading = this._state.loading;

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

    public print() {
        this.printing = true;
        setTimeout(() => {
            window.print();
            this.printing = false;
        }, 300);
    }

    public ngOnInit() {
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
                } else this._state.setOptions({ zones: [] });
            }),
        );
    }
}
