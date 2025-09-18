import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { debounceTime, map } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'catering-report',
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
                <div
                    class="m-4 flex items-center overflow-hidden rounded bg-base-200 p-4"
                >
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_CATERING_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <catering-report-overall></catering-report-overall>
                    <catering-report-orders
                        [print]="printing"
                    ></catering-report-orders>
                    <catering-report-items
                        [print]="printing"
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
    standalone: false,
})
export class CateringReportComponent extends AsyncHandler implements OnInit {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public printing = false;

    public readonly total_count = this._state.stats.pipe(
        map((i) => i.count || 0),
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

    public get using_bookings() {
        return this._settings.get('app.catering.use_bookings') == true;
    }

    public ngOnInit() {
        this.subscription(
            'bld',
            this._org.active_building.subscribe(() => {
                this._state.setOptions({
                    type: this.using_bookings ? 'catering' : 'events',
                });
            }),
        );
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
        this._state.setOptions({
            type: this.using_bookings ? 'catering' : 'events',
        });
    }
}
