import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    formatDuration,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { debounceTime, map } from 'rxjs/operators';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ContactTracingOptionsComponent } from './contact-tracing-options.component';
import { ContactTracingStateService } from './contact-tracing-state.service';

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Contact events',
        description:
            'Close contacts returned by the ContactTracing module for the selected user and date range.',
    },
    {
        label: 'Time of contact',
        description:
            'The contact timestamp returned by the module, displayed in the configured date and time format.',
    },
    {
        label: 'Person / Close contact',
        description:
            'The selected user is shown as the person. The close contact is resolved from the returned username when possible, falling back to the identifier.',
    },
    {
        label: 'Duration',
        description:
            'The module duration is converted from seconds to whole minutes and displayed as hours and minutes.',
    },
];

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Time of contact',
        description:
            'Contact time returned by the ContactTracing module, converted from seconds to local milliseconds for display.',
    },
    {
        label: 'Person',
        description: 'The selected report user.',
    },
    {
        label: 'Close contact',
        description:
            'Contact username resolved through the user pipe when possible, falling back to the returned identifier or MAC address.',
    },
    {
        label: 'Duration',
        description:
            'Contact duration converted to whole minutes, then displayed as hours and minutes.',
    },
];

@Component({
    selector: 'app-contact-tracing-report',
    template: `
        <contact-tracing-options
            (printing)="printing.set($event)"
            (download)="downloadReport()"
            class="print:hidden"
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
                            'APP.CONCIERGE.REPORTS_CONTACTS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (has_user()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <div
                        class="border-base-200 mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] rounded-lg border"
                    >
                        <div
                            class="border-base-200 flex items-center justify-between border-b px-4"
                        >
                            <h2 class="py-2 text-xl font-medium">
                                Contact Events
                            </h2>
                            <placeos-report-metric-guide
                                title="Table column calculations"
                                [items]="table_metric_guide"
                                [inline]="true"
                            />
                        </div>
                        <simple-table
                            class="block w-full text-sm"
                            [data]="tracing_events()"
                            [columns]="[
                                {
                                    key: 'date',
                                    name: 'Time of Contact',
                                    content: date_template,
                                },
                                {
                                    key: 'user_id',
                                    name: 'Person',
                                    content: user_template,
                                },
                                {
                                    key: 'contact_id',
                                    name: 'Close Contact',
                                    content: user_template,
                                },
                                {
                                    key: 'duration',
                                    name: 'Duration',
                                    content: duration_template,
                                },
                            ]"
                            [sortable]="true"
                            [page_size]="printing() ? 0 : 30"
                            empty_message="No contact tracing events for selected period"
                        ></simple-table>
                        <ng-template
                            #user_template
                            let-data="data"
                            let-row="row"
                        >
                            <div class="p-4">
                                {{
                                    (data | user | async)?.name ||
                                        row.mac_address
                                }}
                            </div>
                        </ng-template>
                        <ng-template #date_template let-data="data">
                            <div class="p-4">
                                {{ data | date: 'mediumDate' }},
                                {{ data | date: time_format }}
                            </div>
                        </ng-template>
                        <ng-template #duration_template let-data="data">
                            <div class="p-4">
                                {{
                                    formatDuration(data || 0) ||
                                        'Less than a minute'
                                }}
                            </div>
                        </ng-template>
                    </div>
                } @else {
                    <div
                        class="screen-only flex flex-col items-center justify-center space-y-2 p-8"
                    >
                        <p class="opacity-30">
                            Select a user from the topbar to begin
                        </p>
                    </div>
                }
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p class="opacity-30">{{ loading() }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [
        CommonModule,
        ContactTracingOptionsComponent,
        MatProgressSpinnerModule,
        UserPipe,
        SimpleTableComponent,
        AuthenticatedImageDirective,
        TranslatePipe,
        ReportMetricGuideComponent,
    ],
})
export class ContactTracingReportComponent {
    private _state = inject(ContactTracingStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    public readonly metric_guide = METRIC_GUIDE;
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;

    public readonly loading = toSignal(this._state.loading, {
        initialValue: '',
    });
    public readonly options = toSignal(this._state.options, {
        initialValue: {} as any,
    });
    public readonly has_user = computed(() => !!this.options()?.user);
    public readonly tracing_events = toSignal(this._state.events, {
        initialValue: [],
    });
    public readonly setOptions = (_) => this._state.setOptions(_);
    public readonly downloadReport = () => this._state.downloadReport();

    public readonly formatDuration = (d) =>
        formatDuration({ hours: Math.floor(d / 60), minutes: d % 60 });

    public get time_format() {
        return this._settings.time_format;
    }

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
}
