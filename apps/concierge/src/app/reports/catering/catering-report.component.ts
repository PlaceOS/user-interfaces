import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    TranslatePipe,
} from '@placeos/components';
import { debounceTime, map } from 'rxjs/operators';
import { ReportsOptionsComponent } from '../reports-options.component';
import { ReportsStateService } from '../reports-state.service';
import { CateringReportItemsComponent } from './catering-report-items.component';
import { CateringReportOrdersComponent } from './catering-report-orders.component';
import { CateringReportOverallComponent } from './catering-report-overall.component';

@Component({
    selector: 'catering-report',
    template: `
        <reports-options
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
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        ReportsOptionsComponent,
        CateringReportItemsComponent,
        CateringReportOrdersComponent,
        CateringReportOverallComponent,
        AuthenticatedImageDirective,
    ],
})
export class CateringReportComponent {
    private _state = inject(ReportsStateService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });
    private readonly _building = toSignal(this._org.active_building, {
        initialValue: this._org.building,
    });
    private readonly _stats = toSignal(this._state.stats, {
        initialValue: {} as any,
    });

    public readonly total_count = computed(() => this._stats()?.count || 0);
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

    public get using_bookings() {
        return this._settings.get('app.catering.use_bookings') == true;
    }

    constructor() {
        effect(() => {
            this._building();
            this._state.setOptions({
                type: this.using_bookings ? 'catering' : 'events',
            });
        });

        effect(() => {
            const params = this._query_params();
            if (params.has('start')) {
                this._state.setOptions({ start: +params.get('start') });
            }
            if (params.has('end')) {
                this._state.setOptions({ end: +params.get('end') });
            }
            if (params.has('zones') || params.has('zone_ids')) {
                const id_list = params.get('zones') || params.get('zone_ids');
                const zones = id_list.split(',');
                if (zones.length) this._state.setOptions({ zones });
            } else {
                this._state.setOptions({ zones: [] });
            }
        });
    }
}
