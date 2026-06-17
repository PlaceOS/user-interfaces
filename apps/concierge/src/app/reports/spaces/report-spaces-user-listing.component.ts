import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, formatDuration, jsonToCsv } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ReportMetricGuideComponent,
    ReportMetricGuideItem,
} from '../report-metric-guide.component';
import { ReportsStateService } from '../reports-state.service';
import { cappedReportAttendeeCount } from '../reports.utilities';

const TABLE_METRIC_GUIDE: ReportMetricGuideItem[] = [
    {
        label: 'Bookings',
        description:
            'Number of room bookings where the host attendee matches the booking host or host override.',
    },
    {
        label: 'Average booking invites',
        description:
            'Total invited attendees across hosted bookings divided by hosted booking count.',
    },
    {
        label: 'Total time',
        description:
            'Sum of hosted booking durations, using 15 minutes when a booking duration is missing.',
    },
    {
        label: 'No-shows',
        description:
            'Hosted bookings with a recorded maximum people count of zero.',
    },
];

@Component({
    selector: 'report-spaces-user-listing',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ROOMS_HOST_HEADER' | translate }}
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
                    [items]="table_metric_guide"
                    [inline]="true"
                />
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="user_list()"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'avg_attendees',
                        name:
                            'APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES'
                            | translate,
                    },
                    {
                        key: 'total_time',
                        name: 'APP.CONCIERGE.REPORTS_TOTAL_TIME' | translate,
                    },
                    {
                        key: 'no_shows',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
        </div>
    `,
    styles: [``],
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        ReportMetricGuideComponent,
    ],
})
export class ReportSpacesUserListingComponent {
    private _reports = inject(ReportsStateService);

    public readonly print = input(false);
    public readonly table_metric_guide = TABLE_METRIC_GUIDE;
    private readonly _stats = computed(
        () => this._reports.stats() || { events: [] },
    );

    public readonly user_list = computed(() => {
        const { events } = this._stats();
        const list = [];
        for (const booking of events) {
            const host = booking.attendees?.find(
                (_) =>
                    _.email === booking.extension_data?.host_override ||
                    _.email === booking.host,
            );
            if (!host) continue;
            const capacity = Math.max(
                booking.resources.reduce((c, s) => c + s.capacity, 0) || 1,
                1,
            );
            let details = list.find(
                (_) => _.id?.toLowerCase() === host.email.toLowerCase(),
            );
            if (!details) {
                details = {
                    id: host.email,
                    name: host.name,
                    capacity,
                    booking_count: 0,
                    attendees: 0,
                    occupancy_attendees: 0,
                    avg_attendees: 0,
                    no_shows: 0,
                    occupancy: 0,
                    total_time: 0,
                };
                list.push(details);
            }
            if (booking.extension_data?.people_count?.max === 0) {
                details.no_shows += 1;
            }
            details.booking_count += 1;
            details.attendees += booking.attendees.length;
            details.occupancy_attendees += cappedReportAttendeeCount(
                booking,
                capacity,
            );
            details.total_time += booking.duration || 15;
        }
        for (const space of list) {
            space.avg_attendees =
                Math.floor((space.attendees / space.booking_count) * 100) / 100;
            space.occupancy =
                Math.floor(
                    (space.occupancy_attendees /
                        space.booking_count /
                        space.capacity) *
                        100,
                ) / 100;
            space.total_time = formatDuration({
                hours: Math.floor(space.total_time / 60),
                minutes: space.total_time % 60,
            });
        }
        return list;
    });

    public readonly download = async () => {
        const data = this.user_list().map((item) => ({ ...item }));
        for (const item of data) {
            delete item.attendance;
            delete item.avg_attendance;
            delete item.min_attendance;
            delete item.max_attendance;
            delete item.occupancy;
            delete item.occupancy_attendees;
        }
        downloadFile('report-space-attendee-usage.csv', jsonToCsv(data));
    };
}
