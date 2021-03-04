import { Component } from '@angular/core';
import { downloadFile, jsonToCsv } from '@user-interfaces/common';
import { User } from '@user-interfaces/users';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, take } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-user-listing',
    template: `
        <div class="m-4 rounded bg-white shadow overflow-hidden">
            <div class="border-b border-gray-300 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Staff Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <div
                table-head
                class="flex items-center font-medium border-b border-gray-200"
            >
                <div
                    class="flex-1 w-1/6 p-4 flex items-center"
                    [class.active]="(sort$ | async)?.prop === 'name'"
                    (click)="toggleSort('name')"
                >
                    Name
                    <app-icon class="ml-2">{{
                        (sort$ | async)?.desc ? 'south' : 'north'
                    }}</app-icon>
                </div>
                <div
                    class="w-28 p-4 flex items-center"
                    [class.active]="(sort$ | async)?.prop === 'capacity'"
                    (click)="toggleSort('capacity')"
                >
                    Capacity
                    <app-icon class="ml-2">{{
                        (sort$ | async)?.desc ? 'south' : 'north'
                    }}</app-icon>
                </div>
                <div
                    class="w-44 p-4 flex items-center"
                    [class.active]="(sort$ | async)?.prop === 'count'"
                    (click)="toggleSort('count')"
                >
                    Meeting Count
                    <app-icon class="ml-2">{{
                        (sort$ | async)?.desc ? 'south' : 'north'
                    }}</app-icon>
                </div>
                <div
                    class="w-44 p-4 flex items-center"
                    [class.active]="(sort$ | async)?.prop === 'avg_attendees'"
                    (click)="toggleSort('avg_attendees')"
                >
                    Avg. Attendees
                    <app-icon class="ml-2">{{
                        (sort$ | async)?.desc ? 'south' : 'north'
                    }}</app-icon>
                </div>
                <div
                    class="w-32 p-4 flex items-center"
                    [class.active]="(sort$ | async)?.prop === 'occupancy'"
                    (click)="toggleSort('occupancy')"
                >
                    Occupancy
                    <app-icon class="ml-2">{{
                        (sort$ | async)?.desc ? 'south' : 'north'
                    }}</app-icon>
                </div>
            </div>
            <div table-body>
                <div
                    table-row
                    class="flex items-center border-b border-gray-200"
                    *ngFor="
                        let user of user_list
                            | async
                            | slice: page * 7:page * 7 + 7
                    "
                >
                    <div class="flex-1 w-1/6 p-4 truncate">
                        {{ user.name }}
                    </div>
                    <div class="w-28 p-4">{{ user.capacity }}</div>
                    <div class="w-44 p-4">{{ user.count }}</div>
                    <div class="w-44 p-4">{{ user.avg_attendees }}</div>
                    <div class="w-32 p-4">
                        {{ user.occupancy * 100 | toFixed }}%
                    </div>
                </div>
            </div>
            <div table-footer>
                <mat-paginator
                    [length]="(user_list | async)?.length || 0"
                    [pageSize]="7"
                    (page)="page = $event.pageIndex"
                    [hidePageSize]="true"
                >
                </mat-paginator>
            </div>
        </div>
    `,
    styles: [
        `
            [table-head] > div app-icon {
                display: none;
            }
            [table-head] > div:hover app-icon {
                display: initial;
                opacity: 0.5;
            }
            [table-head] > div.active app-icon {
                display: initial;
            }
        `,
    ],
})
export class ReportSpacesUserListing {
    /** Current page being display */
    public page: number = 0;

    public readonly sort$ = new BehaviorSubject<{
        prop: string;
        desc: boolean;
    }>(null);

    public readonly user_list = combineLatest([
        this._reports.stats,
        this.sort$,
    ]).pipe(
        debounceTime(300),
        map(([stats, sort]) => {
            let list = [];
            for (const booking of stats.events) {
                const attendees: User[] = booking.attendees || [];
                const capacity =
                    booking.resources.reduce((c, s) => c + s.capacity, 0) || 1;
                for (const user of attendees) {
                    if (!list.find((_) => _.email === user.email)) {
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
                    const details = list.find((_) => _.id === user.email);
                    details.count += 1;
                    details.attendees += booking.attendees.length;
                }
            }
            for (const space of list) {
                space.avg_attendees = space.attendees / space.count;
                space.occupancy = space.avg_attendees / space.capacity;
            }

            if (sort?.prop) {
                const { prop, desc } = sort;
                list = list.sort((a, b) =>
                    typeof a[prop] === 'string'
                        ? a[prop].localeCompare(b[prop])
                        : a[prop] - b[prop]
                );
                if (!desc) list = list.reverse();
            }
            this.page = 0;
            return list;
        }),
        shareReplay(1)
    );

    public readonly download = async () => {
        const data = await this.user_list.pipe(take(1)).toPromise();
        downloadFile('report-space-attendee-usage.csv', jsonToCsv(data));
    };

    public toggleSort(prop: string) {
        const sort = this.sort$.getValue();
        this.sort$.next(
            prop === sort?.prop && !sort.desc
                ? ({} as any)
                : { prop, desc: prop !== sort?.prop }
        );
    }

    constructor(private _reports: ReportsStateService) {}
}
