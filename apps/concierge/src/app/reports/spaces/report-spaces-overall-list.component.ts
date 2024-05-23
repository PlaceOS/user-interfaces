import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall-list',
    template: `
        <div class="pb-2 w-full">
            <div
                class="m-4 rounded bg-base-100 border border-base-200 shadow overflow-hidden"
            >
                <div class="border-b border-base-200 p-4 flex items-center">
                    <h3 class="font-bold text-xl flex-1">Daily Utilisation</h3>
                    <button icon matRipple *ngIf="!print" (click)="download()">
                        <app-icon>download</app-icon>
                    </button>
                </div>
                <custom-table
                    red-header
                    [dataSource]="day_list"
                    [pagination]="print ? false : true"
                    [columns]="['date', 'approved', 'count', 'utilisation']"
                    [display_column]="[
                        'Date',
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
        </div>
    `,
})
export class ReportSpacesOverallListComponent {
    @Input() public print: boolean = false;

    public readonly day_list = this._state.day_list;

    public readonly download = async () => {
        let data = await this.day_list.pipe(take(1)).toPromise();
        data = data.map((d) => ({
            ...d,
            date: format(d.date, 'MMMM d, y(EEE)'),
        }));
        downloadFile('spaces-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: ReportsStateService) {}
}
