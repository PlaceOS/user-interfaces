import { Component } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { User } from '@placeos/users';
import { combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, take } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-user-listing',
    template: `
        <div class="m-4 rounded bg-white dark:bg-neutral-700 shadow overflow-hidden">
            <div class="border-b border-gray-300 dark:border-neutral-500 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Staff Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                [dataSource]="user_list"
                [pagination]="true"
                [columns]="[
                    'name',
                    'capacity',
                    'count',
                    'avg_attendees',
                    'occupancy'
                ]"
                [display_column]="[
                    'Name',
                    'Capacity',
                    'Meeting Count',
                    'Avg. Attendees',
                    'Occupancy'
                ]"
                [column_size]="['flex']"
            ></custom-table>
        </div>
    `,
    styles: [``],
})
export class ReportSpacesUserListing {
    public readonly user_list = combineLatest([this._reports.stats]).pipe(
        debounceTime(300),
        map(([stats]) => {
            let list = [];
            for (const booking of stats.events) {
                const attendees: User[] = booking.attendees || [];
                const capacity =
                    Math.max(booking.resources.reduce((c, s) => c + s.capacity, 0) || 1, 1);
                for (const user of attendees) {
                    if (!list.find((_) => _.id?.toLowerCase() === user.email.toLowerCase())) {
                        list.push({
                            id: user.email,
                            name: user.name,
                            capacity,
                            count: 0,
                            attendees: 0,
                            avg_attendees: 0,
                            occupancy: 0,
                        });
                    }
                    const details = list.find((_) => _?.id === user.email);
                    details.count += 1;
                    details.attendees += booking.attendees.length;
                }
            }
            for (const space of list) {
                space.avg_attendees = Math.floor(space.attendees / space.count * 100) / 100;
                space.occupancy = Math.floor(space.avg_attendees / space.capacity * 100) / 100;
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
