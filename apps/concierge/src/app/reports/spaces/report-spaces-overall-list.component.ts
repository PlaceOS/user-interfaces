import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall-list',
    template: `
        <div class="w-full">
            <div
                class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
            >
                <div class="border-b border-base-200 p-4 flex items-center">
                    <h3 class="font-bold text-xl flex-1">Daily Utilisation</h3>
                    <button icon matRipple *ngIf="!print" (click)="download()">
                        <app-icon>download</app-icon>
                    </button>
                </div>
                <simple-table
                    class="w-full block text-sm"
                    [data]="day_list"
                    [columns]="[
                        { key: 'date', name: 'Date', content: date_template },
                        { key: 'approved', name: 'Approved Bookings' },
                        { key: 'count', name: 'Total Requests' },
                        {
                            key: 'utilisation',
                            name: 'Utilisation',
                            content: percent_template
                        }
                    ]"
                    [sortable]="true"
                    [page_size]="print ? 0 : 10"
                    empty_message="No events for selected period"
                ></simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
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
