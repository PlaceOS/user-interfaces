import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    resource,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    downloadFile,
    jsonToCsv,
    SettingsService,
    Space,
    unique,
} from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import { differenceInDays } from 'date-fns';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsStateService } from '../reports-state.service';
import {
    cappedReportAttendeeCount,
    reportBookableMinutes,
    reportBookingDuration,
} from '../reports.utilities';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Capacity',
        description:
            'Room capacity from the resolved space details. Empty capacity is shown when the value is less than one.',
    },
    {
        label: 'Bookings',
        description: 'Number of active bookings associated with the room.',
    },
    {
        label: 'Booked time utilisation',
        description:
            'Booked room time divided by configured bookable hours across the selected date range. All-day bookings count as one full bookable day.',
    },
    {
        label: 'Average booking invites',
        description:
            'Total invited attendees divided by booking count for the room.',
    },
    {
        label: 'No-shows',
        description:
            'Bookings for the room with a recorded maximum people count of zero.',
    },
    {
        label: 'Min / Max attendance',
        description:
            'Smallest and largest recorded maximum people count for the room.',
    },
    {
        label: 'Occupancy',
        description:
            'Capped attendee count divided by booking count and room capacity.',
    },
];

@Component({
    selector: 'report-spaces-space-listing',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ROOMS_UTIL_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
                <placeos-report-metric-guide
                    title="Table column calculations"
                    [items]="table_metric_guide()"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="space_list()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'capacity',
                        name: 'COMMON.CAPACITY' | translate,
                        content: capacity_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'utilisation',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKED_TIME_UTILISATION'
                            | translate,
                    },
                    {
                        key: 'avg_attendees',
                        name:
                            'APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES'
                            | translate,
                    },
                    {
                        key: 'no_shows',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                        show: has_attendance(),
                    },
                    {
                        key: 'min_attendance',
                        name:
                            'APP.CONCIERGE.REPORTS_MIN_ATTENDANCE' | translate,
                        show: has_attendance(),
                    },
                    {
                        key: 'max_attendance',
                        name:
                            'APP.CONCIERGE.REPORTS_MAX_ATTENDANCE' | translate,
                        show: has_attendance(),
                    },
                    {
                        key: 'occupancy',
                        name: 'APP.CONCIERGE.REPORTS_OCCUPANCY' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #capacity_template let-data="data">
                <div class="p-4">
                    {{ data < 1 ? '' : data }}
                    @if (data < 1) {
                        <span class="opacity-30">{{
                            'COMMON.CAPACITY_EMPTY' | translate
                        }}</span>
                    }
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ReportSpacesSpaceListingComponent {
    private _reports = inject(ReportsStateService);
    private _settings = inject(SettingsService);

    public readonly print = input(false);

    private _space_pipe = new SpacePipe();

    private readonly _space_list = resource({
        params: () => ({
            stats: this._reports.stats(),
            options: this._reports.options(),
        }),
        defaultValue: [] as any[],
        loader: async ({ params }) => {
            const { stats } = params;
            const { start, end } = params.options;
            const list = [];
            let has_attendance = false;
            const bookable_minutes = reportBookableMinutes(
                this._settings.get('app.events.bookable_hours') ||
                    this._settings.get('app.bookings.bookable_hours'),
            );
            for (const booking of stats.events || []) {
                const space_list: Space[] = unique(
                    booking.resources,
                    'email',
                ) || [booking.system];
                const resources = [];
                for (const space of space_list) {
                    const details = await this._space_pipe.transform(
                        space.email || space.id,
                    );
                    resources.push(details);
                }
                for (const space of resources) {
                    let details = list.find(
                        (_) =>
                            _.id === space.id ||
                            _.id?.toLowerCase() === space.email.toLowerCase(),
                    );
                    if (!details) {
                        details = {
                            id: space.id || space.email,
                            name: space.display_name || space.name,
                            capacity: space.capacity,
                            booking_count: 0,
                            attendance: 0,
                            avg_attendance: 0,
                            min_attendance: 99,
                            max_attendance: 0,
                            attendees: 0,
                            occupancy_attendees: 0,
                            avg_attendees: 0,
                            usage: 0,
                            no_shows: 0,
                            utilisation: 0,
                            occupancy: 0,
                        };
                        if (!details.id || !details.name) continue;
                        list.push(details);
                    }
                    if (booking.extension_data?.people_count?.max === 0) {
                        details.no_shows += 1;
                    }
                    details.booking_count += 1;
                    details.attendance +=
                        booking.extension_data?.people_count?.max ?? 0;
                    details.avg_attendance +=
                        booking.extension_data?.people_count?.avg ?? 0;
                    details.min_attendance = Math.min(
                        details.max_attendance,
                        booking.extension_data?.people_count?.max ?? 99,
                    );
                    details.max_attendance = Math.max(
                        details.max_attendance,
                        booking.extension_data?.people_count?.max ?? 0,
                    );
                    details.usage += reportBookingDuration(
                        booking,
                        bookable_minutes,
                    );
                    details.attendees += booking.attendees.length;
                    details.occupancy_attendees += cappedReportAttendeeCount(
                        booking,
                        space.capacity,
                    );
                    has_attendance =
                        has_attendance || !!booking.extension_data.people_count;
                }
            }
            const period_in_days = Math.max(
                1,
                differenceInDays(end, start) + 1,
            );
            for (const space of list) {
                space.avg_attendees =
                    Math.floor((space.attendees / space.booking_count) * 100) /
                    100;
                space.avg_attendance =
                    Math.floor((space.attendance / space.booking_count) * 100) /
                    100;
                space.utilisation = `${Math.floor(
                    (space.usage / bookable_minutes / period_in_days) * 100,
                )}%`;
                space.min_attendance =
                    space.min_attendance === 99 ? '?' : space.min_attendance;
                space.occupancy = `${
                    Math.floor(
                        (space.occupancy_attendees /
                            space.booking_count /
                            Math.max(1, space.capacity)) *
                            1000,
                    ) / 10
                }%`;
                if (space.attendance < 0 || !has_attendance) {
                    space.attendance = '?';
                    space.avg_attendance = '?';
                }
            }
            return list;
        },
    });
    public readonly space_list = this._space_list.value;

    public readonly has_attendance = computed(
        () => !!this.space_list().find(({ attendance }) => attendance !== '?'),
    );
    public readonly table_metric_guide = computed(() =>
        this.has_attendance()
            ? TABLE_METRIC_GUIDE
            : TABLE_METRIC_GUIDE.filter(
                  (item) =>
                      item.label !== 'No-shows' &&
                      item.label !== 'Min / Max attendance',
              ),
    );

    public readonly download = async () => {
        const data = this.space_list().map((item) => ({ ...item }));
        for (const item of data) {
            delete item.attendance;
            delete item.avg_attendance;
            delete item.no_shows;
            delete item.min_attendance;
            delete item.max_attendance;
            delete item.occupancy_attendees;
        }
        downloadFile('report-spaces-usage.csv', jsonToCsv(data));
    };
}
