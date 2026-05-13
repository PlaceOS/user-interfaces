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
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { debounceTime } from 'rxjs/operators';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsOptionsComponent } from '../reports-options.component';
import {
    EMPTY_REPORT,
    SiteAttendanceReportService,
} from './site-attendance-report.service';

const CARD_DETAILS = {
    events: {
        icon: 'meeting_room',
        label: 'APP.CONCIERGE.MENU_REPORT_ROOMS',
    },
    desks: {
        icon: 'desk',
        label: 'APP.CONCIERGE.MENU_REPORT_DESKS',
    },
    parking: {
        icon: 'local_parking',
        label: 'APP.CONCIERGE.MENU_REPORT_PARKING',
    },
    lockers: {
        icon: 'lock',
        label: 'APP.CONCIERGE.MENU_REPORT_LOCKERS',
    },
    visitors: {
        icon: 'badge',
        label: 'APP.CONCIERGE.MENU_REPORT_VISITORS',
    },
};

const METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Total site attendance',
        description:
            'Sum of attendance across enabled booking types in the selected period. Room attendance uses recorded people count; group events are excluded; other resources count active bookings.',
    },
    {
        label: 'Total bookings',
        description:
            'All active bookings and events included in the enabled attendance resource types for the selected dates and zones.',
    },
    {
        label: 'Active types',
        description:
            'Number of enabled resource types with at least one booking in the report.',
    },
    {
        label: 'Unique people',
        description:
            'Distinct room hosts, booking owners, and visitors found across included bookings, matched by available user identifier. Room resource identifiers are ignored.',
    },
    {
        label: 'Daily average',
        description:
            'Attendance for the resource type divided by the number of business days in the selected range.',
    },
    {
        label: 'Resources used',
        description:
            'Unique booked rooms, desks, parking spaces, lockers, or visitor bookings compared with known resource count where available.',
    },
];

const PEOPLE_TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Rooms',
        description:
            'Room bookings where the person appears as host or attendee. Room resource identifiers are ignored.',
    },
    {
        label: 'Desks',
        description:
            'Desk bookings where the person appears as booking owner or attendee.',
    },
    {
        label: 'Parking',
        description:
            'Parking bookings where the person appears as booking owner or attendee.',
    },
    {
        label: 'Lockers',
        description:
            'Locker bookings where the person appears as booking owner or attendee.',
    },
    {
        label: 'Visitors',
        description:
            'Visitor bookings where the person appears as booking owner or attendee.',
    },
    {
        label: 'Total bookings',
        description:
            'Sum of that person\'s counted room, desk, parking, locker, and visitor bookings in the report.',
    },
    {
        label: 'Host rows',
        description:
            'Hosts are grouped by host, organiser, booking user, or booked-by identifier depending on booking type. Room resources are ignored.',
    },
    {
        label: 'Attendee rows',
        description:
            'Attendees are grouped from booking attendee lists; room hosts and room resources are excluded from attendee rows.',
    },
];

@Component({
    selector: '[site-attendance-report]',
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
                            'APP.CONCIERGE.REPORTS_SITE_ATTENDANCE_HEADER'
                                | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!loading()) {
                @if (has_data()) {
                    <placeos-report-metric-guide
                        [absolute]="true"
                        [items]="metric_guide"
                    />
                    <div
                        class="grid grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 xl:grid-cols-5"
                    >
                        <div
                            class="border-base-200 bg-base-100 rounded-sm border p-4"
                        >
                            <h3 class="text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_SITE_ATTENDANCE'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().total_attendance }}
                            </p>
                        </div>
                        <div
                            class="border-base-200 bg-base-100 rounded-sm border p-4"
                        >
                            <h3 class="text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().total_bookings }}
                            </p>
                        </div>
                        <div
                            class="border-base-200 bg-base-100 rounded-sm border p-4"
                        >
                            <h3 class="text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.REPORTS_ACTIVE_TYPES'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().active_types }}
                            </p>
                        </div>
                        <div
                            class="border-base-200 bg-base-100 rounded-sm border p-4"
                        >
                            <h3 class="text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.REPORTS_UNIQUE_PEOPLE'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().unique_people }}
                            </p>
                        </div>
                        <div
                            class="border-base-200 bg-base-100 rounded-sm border p-4"
                        >
                            <h3 class="text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.REPORTS_BUSINESS_DAYS'
                                        | translate
                                }}
                            </h3>
                            <p class="mt-2 text-3xl font-semibold">
                                {{ report().business_days }}
                            </p>
                        </div>
                    </div>

                    <div
                        class="attendance-cards grid grid-cols-1 gap-4 px-4 pb-8 md:grid-cols-2 xl:grid-cols-3"
                    >
                        @for (card of report().cards; track card.id) {
                            <div
                                class="attendance-card border-base-200 bg-base-100 rounded-sm border p-5 shadow-sm"
                            >
                                <div class="flex items-start gap-4">
                                    <div
                                        class="bg-secondary text-secondary-content flex h-12 w-12 items-center justify-center rounded-2xl"
                                    >
                                        <icon>{{ details[card.id].icon }}</icon>
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <h3 class="text-lg font-semibold">
                                            {{
                                                details[card.id].label
                                                    | translate
                                            }}
                                        </h3>
                                        <p class="mt-2 text-3xl font-semibold">
                                            {{ card.attendance }}
                                        </p>
                                        <p class="text-sm opacity-60">
                                            {{
                                                'APP.CONCIERGE.REPORTS_SITE_ATTENDANCE'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="border-base-200 mt-4 grid grid-cols-2 gap-3 border-t pt-4"
                                >
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-60"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.bookings }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-60"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_DAILY_AVERAGE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.daily_average }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-60"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.average_length }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-60"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_UNIQUE_PEOPLE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.unique_people }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 grid grid-cols-2 gap-3">
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-60"
                                        >
                                            {{
                                                'APP.CONCIERGE.REPORTS_RESOURCES_USED'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.resource_summary }}
                                        </div>
                                    </div>
                                    <div class="bg-base-200 rounded-sm p-3">
                                        <div
                                            class="text-xs uppercase opacity-60"
                                        >
                                            {{ card.status_label | translate }}
                                        </div>
                                        <div class="mt-1 text-xl font-medium">
                                            {{ card.status_count }}
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ card.status_rate }}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div class="px-4 pb-8">
                        <div
                            class="border-base-200 bg-base-100 overflow-hidden rounded-sm border shadow-sm"
                        >
                            <div
                                class="border-base-200 flex items-center justify-between border-b px-4"
                            >
                                <h3 class="py-4 text-lg font-semibold">
                                    {{
                                        'APP.CONCIERGE.REPORTS_HOSTS_HEADER'
                                            | translate
                                    }}
                                </h3>
                                <placeos-report-metric-guide
                                    title="Table column calculations"
                                    [items]="people_table_metric_guide()"
                                    [inline]="true"
                                />
                            </div>
                            <simple-table
                                class="block w-full text-sm"
                                [data]="report().hosts"
                                [columns]="[
                                    {
                                        key: 'name',
                                        name: 'FORM.HOST' | translate,
                                        content: person_template,
                                    },
                                    {
                                        key: 'events',
                                        name: 'RESOURCE.ROOMS' | translate,
                                        show: hasResource('events'),
                                    },
                                    {
                                        key: 'desks',
                                        name: 'RESOURCE.DESKS' | translate,
                                        show: hasResource('desks'),
                                    },
                                    {
                                        key: 'parking',
                                        name: 'RESOURCE.PARKING' | translate,
                                        show: hasResource('parking'),
                                    },
                                    {
                                        key: 'lockers',
                                        name: 'RESOURCE.LOCKERS' | translate,
                                        show: hasResource('lockers'),
                                    },
                                    {
                                        key: 'visitors',
                                        name: 'RESOURCE.VISITORS' | translate,
                                        show: hasResource('visitors'),
                                    },
                                    {
                                        key: 'total',
                                        name:
                                            'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                            | translate,
                                    },
                                ]"
                                [page_size]="printing() ? 0 : 10"
                                [sortable]="true"
                                [empty_message]="
                                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY'
                                        | translate
                                "
                            ></simple-table>
                        </div>
                    </div>

                    <div class="px-4 pb-8">
                        <div
                            class="border-base-200 bg-base-100 overflow-hidden rounded-sm border shadow-sm"
                        >
                            <div
                                class="border-base-200 flex items-center justify-between border-b px-4"
                            >
                                <h3 class="py-4 text-lg font-semibold">
                                    {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                                </h3>
                                <placeos-report-metric-guide
                                    title="Table column calculations"
                                    [items]="people_table_metric_guide()"
                                    [inline]="true"
                                />
                            </div>
                            <simple-table
                                class="block w-full text-sm"
                                [data]="report().attendees"
                                [columns]="[
                                    {
                                        key: 'name',
                                        name:
                                            'CALENDAR_EVENT.ATTENDEES'
                                            | translate,
                                        content: person_template,
                                    },
                                    {
                                        key: 'events',
                                        name: 'RESOURCE.ROOMS' | translate,
                                        show: hasResource('events'),
                                    },
                                    {
                                        key: 'desks',
                                        name: 'RESOURCE.DESKS' | translate,
                                        show: hasResource('desks'),
                                    },
                                    {
                                        key: 'parking',
                                        name: 'RESOURCE.PARKING' | translate,
                                        show: hasResource('parking'),
                                    },
                                    {
                                        key: 'lockers',
                                        name: 'RESOURCE.LOCKERS' | translate,
                                        show: hasResource('lockers'),
                                    },
                                    {
                                        key: 'visitors',
                                        name: 'RESOURCE.VISITORS' | translate,
                                        show: hasResource('visitors'),
                                    },
                                    {
                                        key: 'total',
                                        name:
                                            'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                            | translate,
                                    },
                                ]"
                                [page_size]="printing() ? 0 : 10"
                                [sortable]="true"
                                [empty_message]="
                                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY'
                                        | translate
                                "
                            ></simple-table>
                        </div>
                    </div>

                    <ng-template #person_template let-row="row">
                        <div class="p-4">
                            <div class="font-medium">
                                {{ row.name }}
                            </div>
                            @if (row.name !== row.id) {
                                <div class="text-xs opacity-60">
                                    {{ row.id }}
                                </div>
                            }
                        </div>
                    </ng-template>
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

            @media print {
                :host {
                    height: auto !important;
                }

                .attendance-cards {
                    display: block;
                }

                .attendance-card {
                    page-break-inside: avoid;
                    break-inside: avoid-page;
                }

                .attendance-card + .attendance-card {
                    margin-top: 1rem;
                }
            }
        `,
    ],
    imports: [
        ReportsOptionsComponent,
        AuthenticatedImageDirective,
        IconComponent,
        SimpleTableComponent,
        MatProgressSpinnerModule,
        TranslatePipe,
        ReportMetricGuideComponent,
    ],
})
export class SiteAttendanceReportComponent extends AsyncHandler {
    private _state = inject(SiteAttendanceReportService);
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);

    private readonly _report = toSignal(this._state.report$, {
        initialValue: EMPTY_REPORT,
    });
    private readonly _loading = toSignal(this._state.loading$, {
        initialValue: false,
    });
    private readonly _active_building = toSignal(
        this._org.active_building.pipe(debounceTime(500)),
    );
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    public readonly details = CARD_DETAILS;
    public readonly metric_guide = METRIC_GUIDE;
    public readonly people_table_metric_guide = computed(() =>
        PEOPLE_TABLE_METRIC_GUIDE.filter((item) => {
            if (item.label === 'Rooms') return this.hasResource('events');
            if (item.label === 'Desks') return this.hasResource('desks');
            if (item.label === 'Parking') return this.hasResource('parking');
            if (item.label === 'Lockers') return this.hasResource('lockers');
            if (item.label === 'Visitors') return this.hasResource('visitors');
            return true;
        }),
    );
    public readonly printing = signal(false);
    public readonly report = computed(() => this._report());
    public readonly loading = computed(() => this._loading());
    public readonly has_data = computed(() => !!this.report().total_bookings);

    public readonly downloadReport = () => this._state.downloadReport();
    public readonly generateReport = () => this._state.generateReport();
    public readonly hasResource = (id: keyof typeof CARD_DETAILS) =>
        this.report().cards.some((card) => card.id === id);

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
