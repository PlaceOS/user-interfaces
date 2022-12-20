import { Component } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { User } from '@placeos/users';
import { combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, take } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-user-listing',
    template: `
        <div
            class="m-4 rounded bg-white dark:bg-neutral-700 shadow overflow-hidden"
        >
            <div
                class="border-b border-gray-300 dark:border-neutral-500 px-4 py-2 flex items-center"
            >
                <h3 class="font-bold text-xl flex-1">Meeting Organisers</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                [dataSource]="user_list"
                [pagination]="true"
                [columns]="[
                    'name',
                    'count',
                    'avg_attendees',
                    'occupancy',
                    'no_shows'
                ]"
                [display_column]="[
                    'Name',
                    'Bookings',
                    'Avg. Attendees',
                    'Occupancy',
                    'No Shows'
                ]"
                [column_size]="['flex']"
            ></custom-table>
        </div>
    `,
    styles: [``],
})
export class ReportSpacesUserListingComponent {
    public readonly user_list = combineLatest([this._reports.stats]).pipe(
        debounceTime(300),
        map(([stats]) => {
            let list = [];
            for (const booking of stats.events) {
                const host = booking.attendees?.find(
                    (_) => _.email === booking.host
                );
                if (!host) continue;
                const capacity = Math.max(
                    booking.resources.reduce((c, s) => c + s.capacity, 0) || 1,
                    1
                );
                let details = list.find(
                    (_) => _.id?.toLowerCase() === host.email.toLowerCase()
                );
                if (!details) {
                    details = {
                        id: host.email,
                        name: host.name,
                        capacity,
                        count: 0,
                        attendees: 0,
                        avg_attendees: 0,
                        no_shows: 0,
                        occupancy: 0,
                    };
                    list.push(details);
                }
                if (booking.extension_data?.people_count?.max === 0) {
                    details.no_shows += 1;
                }
                details.count += 1;
                details.attendees += booking.attendees.length;
            }
            for (const space of list) {
                space.avg_attendees =
                    Math.floor((space.attendees / space.count) * 100) / 100;
                space.occupancy =
                    Math.floor((space.avg_attendees / space.capacity) * 100) /
                    100;
            }
            return list;
        }),
        shareReplay(1)
    );

    public readonly download = async () => {
        const data = await this.user_list.pipe(take(1)).toPromise();
        downloadFile('report-space-attendee-usage.csv', jsonToCsv(data));
    };

    constructor(private _reports: ReportsStateService) {}
}
