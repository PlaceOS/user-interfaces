import { Component } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
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
                <h3 class="font-bold text-xl flex-1">Space Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                [dataSource]="space_list"
                [pagination]="true"
                [columns]="[
                    'name',
                    'capacity',
                    'count',
                    'utilisation',
                    'avg_attendees',
                    'occupancy'
                ]"
                [display_column]="[
                    'Name',
                    'Capacity',
                    'Meeting Count',
                    'Utilisation',
                    'Avg. Attendees',
                    'Occupancy'
                ]"
                [column_size]="['flex']"
                [template]="{ name: space_name, capacity: space_capacity }"
            ></custom-table>
            <ng-template #space_name let-row="row">
                {{ (row.id | space)?.display_name || (row.id | space)?.name }}
            </ng-template>
            <ng-template #space_capacity>
                {{ (row.id | space)?.capacity || 2 }}
            </ng-template>
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
            for (const booking of stats.events) {
                const resources: Space[] = booking.resources || [];
                for (const space of resources) {
                    if (
                        !list.find(
                            (_) =>
                                _.id === space.id ||
                                _.id?.toLowerCase() ===
                                    space.email.toLowerCase()
                        )
                    ) {
                        list.push({
                            id: space.id || space.email,
                            name: space.display_name || space.name,
                            capacity: space.capacity || 1,
                            count: 0,
                            attendees: 0,
                            avg_attendees: 0,
                            usage: 0,
                            utilisation: 0,
                            occupancy: 0,
                        });
                    }
                    const details = list.find(
                        (_) =>
                            _.id === space.id ||
                            _.id?.toLowerCase() === space.email.toLowerCase()
                    );
                    details.count += 1;
                    details.usage += booking.duration;
                    details.attendees += booking.attendees.length;
                }
            }
            const period_in_days = differenceInDays(end, start);
            for (const space of list) {
                space.avg_attendees =
                    Math.floor((space.attendees / space.count) * 100) / 100;
                space.utilisation =
                    Math.floor((space.usage / 60 / 8 / period_in_days) * 100) /
                    100;
                space.occupancy =
                    Math.floor((space.avg_attendees / space.capacity) * 100) /
                    100;
            }
            return list;
        })
    );

    public readonly download = async () => {
        const data = await this.space_list.pipe(take(1)).toPromise();
        downloadFile('report-spaces-usage.csv', jsonToCsv(data));
    };

    constructor(private _reports: ReportsStateService) {}
}
