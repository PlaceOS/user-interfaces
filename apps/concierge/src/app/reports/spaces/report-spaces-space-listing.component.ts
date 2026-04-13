import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv, Space, unique } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import { differenceInDays } from 'date-fns';
import { combineLatest } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

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
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
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
                        name: 'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
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
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class ReportSpacesSpaceListingComponent {
    private _reports = inject(ReportsStateService);

    public readonly print = input(false);

    private _space_pipe = new SpacePipe();

    public readonly space_list = toSignal(
        combineLatest([this._reports.stats, this._reports.options]).pipe(
            debounceTime(300),
            switchMap(async ([stats, { start, end }]) => {
                const list = [];
                let has_attendance = false;
                for (const booking of stats.events) {
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
                                _.id?.toLowerCase() ===
                                    space.email.toLowerCase(),
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
                        details.usage += booking.duration;
                        details.attendees += booking.attendees.length;
                        has_attendance =
                            has_attendance ||
                            !!booking.extension_data.people_count;
                    }
                }
                const period_in_days = Math.max(
                    1,
                    differenceInDays(end, start) + 1,
                );
                for (const space of list) {
                    space.avg_attendees =
                        Math.floor(
                            (space.attendees / space.booking_count) * 100,
                        ) / 100;
                    space.avg_attendance =
                        Math.floor(
                            (space.attendance / space.booking_count) * 100,
                        ) / 100;
                    space.utilisation = `${Math.floor(
                        (space.usage / 60 / 8 / period_in_days) * 100,
                    )}%`;
                    space.min_attendance =
                        space.min_attendance === 99
                            ? '?'
                            : space.min_attendance;
                    space.occupancy = `${
                        Math.floor(
                            (space.avg_attendees /
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
            }),
        ),
        { initialValue: [] },
    );

    public readonly has_attendance = computed(
        () => !!this.space_list().find(({ attendance }) => attendance !== '?'),
    );

    public readonly download = async () => {
        const data = this.space_list().map((item) => ({ ...item }));
        for (const item of data) {
            delete item.attendance;
            delete item.avg_attendance;
            delete item.no_shows;
            delete item.min_attendance;
            delete item.max_attendance;
        }
        downloadFile('report-spaces-usage.csv', jsonToCsv(data));
    };
}
