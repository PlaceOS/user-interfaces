import { Component, Input } from '@angular/core';
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
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Room Utilisation</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="space_list"
                [columns]="[
                    { key: 'name', name: 'Name' },
                    { key: 'capacity', name: 'Capacity' },
                    { key: 'booking_count', name: 'Bookings' },
                    { key: 'utilisation', name: 'Utilisation' },
                    { key: 'avg_attendees', name: 'Avg. Invitees per Booking' },
                    {
                        key: 'no_shows',
                        name: 'No Shows',
                        show: has_attendance | async
                    },
                    {
                        key: 'min_attendance',
                        name: 'Min. In-Room Attendance',
                        show: has_attendance | async
                    },
                    {
                        key: 'max_attendance',
                        name: 'Max. In-Room Attendance',
                        show: has_attendance | async
                    },
                    { key: 'occupancy', name: 'Occupancy %' }
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                empty_message="No events for selected period"
            ></simple-table>
        </div>
    `,
    styles: [``],
})
export class ReportSpacesSpaceListing {
    @Input() public print: boolean = false;

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
                    Math.floor((space.attendees / space.booking_count) * 100) /
                    100;
                space.avg_attendance =
                    Math.floor((space.attendance / space.booking_count) * 100) /
                    100;
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

    public readonly download = async () => {
        const data = await this.space_list.pipe(take(1)).toPromise();
        for (const item of data) {
            delete item.attendance;
            delete item.avg_attendance;
            delete item.no_shows;
            delete item.min_attendance;
            delete item.max_attendance;
        }
        downloadFile('report-spaces-usage.csv', jsonToCsv(data));
    };

    constructor(private _reports: ReportsStateService) {}
}
