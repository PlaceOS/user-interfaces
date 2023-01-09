import { Component } from '@angular/core';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import { Space } from '@placeos/spaces';
import { differenceInDays } from 'date-fns';
import { combineLatest } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-space-listing',
    template: `
        <div
            class="m-4 rounded bg-white dark:bg-neutral-700 shadow overflow-hidden"
        >
            <div
                class="border-b border-gray-300 dark:border-neutral-500 px-4 py-2 flex items-center"
            >
                <h3 class="font-bold text-xl flex-1">Room Utilisation</h3>
                <button icon (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                [dataSource]="space_list"
                [pagination]="true"
                [columns]="column_list | async"
                [display_column]="column_name_list | async"
                [column_size]="['flex']"
            ></custom-table>
        </div>
    `,
    styles: [``],
})
export class ReportSpacesSpaceListing {
    public readonly space_list = combineLatest([
        this._reports.stats,
        this._reports.options,
    ]).pipe(
        debounceTime(300),
        map(([stats, { start, end }]) => {
            let list = [];
            let has_attendance = false;
            for (const booking of stats.events) {
                const resources: Space[] = unique(
                    booking.resources,
                    'email'
                ) || [booking.system];
                for (const space of resources) {
                    let details = list.find(
                        (_) =>
                            _.id === space.id ||
                            _.id?.toLowerCase() === space.email.toLowerCase()
                    );
                    if (!details) {
                        details = {
                            id: space.id || space.email,
                            name: space.display_name || space.name,
                            capacity: space.capacity || 1,
                            count: 0,
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
                    details.count += 1;
                    details.attendance +=
                        booking.extension_data?.people_count?.max ?? 0;
                    details.avg_attendance +=
                        booking.extension_data?.people_count?.avg ?? 0;
                    details.min_attendance = Math.min(
                        details.max_attendance,
                        booking.extension_data?.people_count?.max ?? 99
                    );
                    details.max_attendance = Math.max(
                        details.max_attendance,
                        booking.extension_data?.people_count?.max ?? 0
                    );
                    details.usage += booking.duration;
                    details.attendees += booking.attendees.length;
                    has_attendance =
                        has_attendance || !!booking.extension_data.people_count;
                }
            }
            const period_in_days = Math.max(
                1,
                differenceInDays(end, start) + 1
            );
            for (const space of list) {
                space.avg_attendees =
                    Math.floor((space.attendees / space.count) * 100) / 100;
                space.avg_attendance =
                    Math.floor((space.attendance / space.count) * 100) / 100;
                space.utilisation = `${Math.floor(
                    (space.usage / 60 / 8 / period_in_days) * 100
                )}%`;
                space.min_attendance =
                    space.min_attendance === 99 ? '?' : space.min_attendance;
                space.occupancy = `${
                    Math.floor((space.avg_attendees / space.capacity) * 1000) /
                    10
                }%`;
                if (space.attendance < 0 || !has_attendance) {
                    space.attendance = '?';
                    space.avg_attendance = '?';
                }
            }
            return list;
        })
    );

    public readonly has_attendance = this.space_list.pipe(
        map((_) => !!_.find(({ attendance }) => attendance !== '?'))
    );

    public readonly column_list = this.has_attendance.pipe(
        map((_) =>
            !_
                ? ['name', 'capacity', 'count', 'utilisation', 'avg_attendees']
                : [
                      'name',
                      'capacity',
                      'count',
                      'utilisation',
                      'avg_attendees',
                      'attendance',
                      'avg_attendance',
                      'no_shows',
                      'min_attendance',
                      'max_attendance',
                  ]
        )
    );
    public readonly column_name_list = this.has_attendance.pipe(
        map((_) =>
            !_
                ? [
                      'Name',
                      'Room Capacity',
                      'Bookings',
                      '% Time booked during office hrs',
                      'Avg. invitees per booking',
                  ]
                : [
                      'Name',
                      'Room Capacity',
                      'Bookings',
                      '% Time booked during office hrs',
                      'Avg. invitees per booking',
                      'Total In-room Attendance',
                      'Avg. In-room Attendance',
                      'No Shows',
                      'Min. In-room Attendance',
                      'Max. In-room Attendance',
                  ]
        )
    );

    public readonly download = async () => {
        const data = await this.space_list.pipe(take(1)).toPromise();
        downloadFile('report-spaces-usage.csv', jsonToCsv(data));
    };

    constructor(private _reports: ReportsStateService) {}
}
