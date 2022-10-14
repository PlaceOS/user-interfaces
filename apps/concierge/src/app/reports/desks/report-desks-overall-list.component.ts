import { Component } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-overall-list',
    template: `
        <div class="m-4 rounded bg-white dark:bg-neutral-700 shadow overflow-hidden">
            <div class="border-b border-gray-300 dark:border-neutral-500 p-4 flex items-center">
                <h3 class="font-bold text-xl flex-1">Daily Utilisation</h3>
                <button mat-icon-button (click)="download()">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <custom-table
                red-header
                [dataSource]="day_list"
                [pagination]="true"
                [columns]="[
                    'date',
                    'usage',
                    'approved',
                    'count',
                    'utilisation'
                ]"
                [display_column]="[
                    'Date',
                    'Used Desks',
                    'Approved Bookings',
                    'Total Requests',
                    'Utilisation'
                ]"
                [column_size]="['flex']"
                [template]="{
                    date: date_view,
                    usage: percent_view,
                    utilisation: percent_view
                }"
            ></custom-table>
            <ng-template #date_view let-data="data">
                {{ data | date: 'mediumDate' }}
            </ng-template>
            <ng-template #percent_view let-data="data">
                {{ data || '0' }}%
            </ng-template>
        </div>
    `,
})
export class ReportDesksOverallListComponent {
    public readonly day_list = this._state.day_list;

    public readonly download = async () => {
        let data = await this.day_list.pipe(take(1)).toPromise();
        data = data.map((d) => ({
            ...d,
            date: format(d.date, 'MMMM d, y(EEE)'),
        }));
        downloadFile('desks-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: ReportsStateService) {}
}
